import { resolve } from "path";
import { defineConfig } from "vite";
import {
  getEpisodesFromDisk,
  saveEpisodesToDisk,
  addOrUpdateEpisode,
  deleteEpisodeFromDisk,
  getSubmissionsFromDisk,
  saveSubmissionsToDisk,
  addSubmission,
  updateSubmissionStatus,
  deleteSubmissionFromDisk
} from "./server/episodesApi.js";

function episodesBackendPlugin() {
  return {
    name: "episodes-backend-api",
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        const url = req.url || "";
        const cleanUrl = url.split("?")[0];

        const parseJsonBody = () => new Promise((resolveBody, rejectBody) => {
          let body = "";
          req.on("data", chunk => { body += chunk; });
          req.on("end", () => {
            try {
              resolveBody(body ? JSON.parse(body) : {});
            } catch (err) {
              rejectBody(err);
            }
          });
        });

        // ==========================================
        // 1. EPISODES ENDPOINTS
        // ==========================================

        // GET /api/episodes
        if (req.method === "GET" && cleanUrl === "/api/episodes") {
          const data = getEpisodesFromDisk();
          res.setHeader("Content-Type", "application/json");
          res.statusCode = 200;
          return res.end(JSON.stringify(data));
        }

        // POST /api/episodes
        if (req.method === "POST" && cleanUrl === "/api/episodes") {
          try {
            const body = await parseJsonBody();
            if (!body.title || !body.number) {
              res.statusCode = 400;
              res.setHeader("Content-Type", "application/json");
              return res.end(JSON.stringify({ error: "Missing required fields: number, title" }));
            }
            const saved = addOrUpdateEpisode(body);
            res.statusCode = 201;
            res.setHeader("Content-Type", "application/json");
            return res.end(JSON.stringify(saved));
          } catch (err) {
            res.statusCode = 400;
            res.setHeader("Content-Type", "application/json");
            return res.end(JSON.stringify({ error: err.message }));
          }
        }

        // DELETE /api/episodes/:id
        const deleteEpMatch = cleanUrl.match(/^\/api\/episodes\/([a-zA-Z0-9_-]+)/);
        if (req.method === "DELETE" && deleteEpMatch) {
          const id = deleteEpMatch[1];
          const success = deleteEpisodeFromDisk(id);
          res.setHeader("Content-Type", "application/json");
          if (success) {
            res.statusCode = 200;
            return res.end(JSON.stringify({ success: true, id }));
          } else {
            res.statusCode = 404;
            return res.end(JSON.stringify({ error: `Episode ${id} not found` }));
          }
        }

        // POST /api/episodes/import
        if (req.method === "POST" && cleanUrl === "/api/episodes/import") {
          try {
            const list = await parseJsonBody();
            saveEpisodesToDisk(list);
            res.statusCode = 200;
            res.setHeader("Content-Type", "application/json");
            return res.end(JSON.stringify({ success: true, count: list.length }));
          } catch (err) {
            res.statusCode = 400;
            res.setHeader("Content-Type", "application/json");
            return res.end(JSON.stringify({ error: err.message }));
          }
        }

        // ==========================================
        // 2. GUEST SUBMISSIONS & APPROVAL ENDPOINTS
        // ==========================================

        // GET /api/submissions
        if (req.method === "GET" && cleanUrl === "/api/submissions") {
          const subs = getSubmissionsFromDisk();
          res.setHeader("Content-Type", "application/json");
          res.statusCode = 200;
          return res.end(JSON.stringify(subs));
        }

        // POST /api/submissions
        if (req.method === "POST" && cleanUrl === "/api/submissions") {
          try {
            const body = await parseJsonBody();
            if (!body.title || !body.guest || !body.guest.name) {
              res.statusCode = 400;
              res.setHeader("Content-Type", "application/json");
              return res.end(JSON.stringify({ error: "Missing required fields: title, guest.name" }));
            }
            const saved = addSubmission(body);
            res.statusCode = 201;
            res.setHeader("Content-Type", "application/json");
            return res.end(JSON.stringify(saved));
          } catch (err) {
            res.statusCode = 400;
            res.setHeader("Content-Type", "application/json");
            return res.end(JSON.stringify({ error: err.message }));
          }
        }

        // PATCH /api/submissions/:id (Update status e.g. "approved", "declined")
        const patchSubMatch = cleanUrl.match(/^\/api\/submissions\/([a-zA-Z0-9_-]+)/);
        if (req.method === "PATCH" && patchSubMatch) {
          try {
            const id = patchSubMatch[1];
            const body = await parseJsonBody();
            const updated = updateSubmissionStatus(id, body.status);
            res.setHeader("Content-Type", "application/json");
            if (updated) {
              res.statusCode = 200;
              return res.end(JSON.stringify(updated));
            } else {
              res.statusCode = 404;
              return res.end(JSON.stringify({ error: `Submission ${id} not found` }));
            }
          } catch (err) {
            res.statusCode = 400;
            res.setHeader("Content-Type", "application/json");
            return res.end(JSON.stringify({ error: err.message }));
          }
        }

        // DELETE /api/submissions/:id
        if (req.method === "DELETE" && patchSubMatch) {
          const id = patchSubMatch[1];
          const success = deleteSubmissionFromDisk(id);
          res.setHeader("Content-Type", "application/json");
          if (success) {
            res.statusCode = 200;
            return res.end(JSON.stringify({ success: true, id }));
          } else {
            res.statusCode = 404;
            return res.end(JSON.stringify({ error: `Submission ${id} not found` }));
          }
        }

        next();
      });
    }
  };
}

export default defineConfig({
  plugins: [episodesBackendPlugin()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(import.meta.dirname, "index.html"),
        about: resolve(import.meta.dirname, "about.html"),
        mission: resolve(import.meta.dirname, "mission.html"),
        hosts: resolve(import.meta.dirname, "hosts.html"),
        episodes: resolve(import.meta.dirname, "episodes.html"),
        videos: resolve(import.meta.dirname, "videos.html"),
        guests: resolve(import.meta.dirname, "guests.html"),
        becomeAGuest: resolve(import.meta.dirname, "become-a-guest.html"),
        requestEpisode: resolve(import.meta.dirname, "request-episode.html"),
        resources: resolve(import.meta.dirname, "resources.html"),
        community: resolve(import.meta.dirname, "community.html"),
        contact: resolve(import.meta.dirname, "contact.html"),
        dashboard: resolve(import.meta.dirname, "dashboard.html"),
        admin: resolve(import.meta.dirname, "admin.html")
      }
    }
  }
});
