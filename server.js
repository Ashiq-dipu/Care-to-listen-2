import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
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

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json({ limit: "10mb" }));

// 1. GET ALL EPISODES
app.get("/api/episodes", (req, res) => {
  const episodes = getEpisodesFromDisk();
  res.json(episodes);
});

// 2. ADD OR UPDATE EPISODE
app.post("/api/episodes", (req, res) => {
  const data = req.body;
  if (!data || !data.title || !data.number) {
    return res.status(400).json({ error: "Missing required fields: 'number' and 'title'" });
  }

  const saved = addOrUpdateEpisode(data);
  console.log(`[Backend API] Saved Episode #${saved.number}: "${saved.title}"`);
  res.status(201).json(saved);
});

// 3. DELETE EPISODE
app.delete("/api/episodes/:id", (req, res) => {
  const { id } = req.params;
  const deleted = deleteEpisodeFromDisk(id);
  if (deleted) {
    console.log(`[Backend API] Deleted Episode ${id}`);
    res.json({ success: true, id });
  } else {
    res.status(404).json({ error: `Episode ${id} not found` });
  }
});

// 4. BULK IMPORT EPISODES
app.post("/api/episodes/import", (req, res) => {
  const list = req.body;
  if (!Array.isArray(list)) {
    return res.status(400).json({ error: "Body must be an array of episodes" });
  }
  saveEpisodesToDisk(list);
  console.log(`[Backend API] Imported ${list.length} episodes`);
  res.json({ success: true, count: list.length });
});

// 5. GUEST SUBMISSIONS & APPROVAL ENDPOINTS
app.get("/api/submissions", (req, res) => {
  const subs = getSubmissionsFromDisk();
  res.json(subs);
});

app.post("/api/submissions", (req, res) => {
  const data = req.body;
  if (!data || !data.title || !data.guest?.name) {
    return res.status(400).json({ error: "Missing required fields: title, guest.name" });
  }
  const saved = addSubmission(data);
  console.log(`[Backend API] Received Episode Submission: "${saved.title}" by ${saved.guest?.name}`);
  res.status(201).json(saved);
});

app.patch("/api/submissions/:id", (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  const updated = updateSubmissionStatus(id, status);
  if (updated) {
    console.log(`[Backend API] Updated Submission ${id} status to: ${status}`);
    res.json(updated);
  } else {
    res.status(404).json({ error: `Submission ${id} not found` });
  }
});

app.delete("/api/submissions/:id", (req, res) => {
  const { id } = req.params;
  const deleted = deleteSubmissionFromDisk(id);
  if (deleted) {
    console.log(`[Backend API] Deleted Submission ${id}`);
    res.json({ success: true, id });
  } else {
    res.status(404).json({ error: `Submission ${id} not found` });
  }
});

// STATIC FILES (PRODUCTION READY)
const distPath = path.resolve(__dirname, "dist");
app.use(express.static(distPath));

app.listen(PORT, () => {
  console.log(`====================================================`);
  console.log(`  Care 2 Listen — Dedicated Episode Backend API`);
  console.log(`  Running on: http://localhost:${PORT}`);
  console.log(`  API Endpoint: http://localhost:${PORT}/api/episodes`);
  console.log(`====================================================`);
});
