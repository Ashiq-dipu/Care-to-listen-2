import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DATA_FILE = path.resolve(__dirname, "../src/data/episodes.json");
const SUBMISSIONS_FILE = path.resolve(__dirname, "../src/data/submissions.json");

/* =========================================================
   EPISODES PERSISTENCE
   ========================================================= */
export function getEpisodesFromDisk() {
  try {
    if (!fs.existsSync(DATA_FILE)) {
      return [];
    }
    const raw = fs.readFileSync(DATA_FILE, "utf-8");
    return JSON.parse(raw);
  } catch (err) {
    console.error("[Backend] Error reading episodes.json:", err);
    return [];
  }
}

export function saveEpisodesToDisk(episodesArray) {
  try {
    fs.writeFileSync(DATA_FILE, JSON.stringify(episodesArray, null, 2), "utf-8");
    return true;
  } catch (err) {
    console.error("[Backend] Error writing episodes.json:", err);
    return false;
  }
}

export function addOrUpdateEpisode(episodeData) {
  const list = getEpisodesFromDisk();
  const id = episodeData.id || `ep-${episodeData.number || Date.now()}`;
  const idx = list.findIndex(e => e.id === id || String(e.number) === String(episodeData.number));

  const cleanEp = {
    ...episodeData,
    id,
    number: String(episodeData.number).trim()
  };

  if (idx !== -1) {
    list[idx] = { ...list[idx], ...cleanEp };
  } else {
    list.unshift(cleanEp);
  }

  saveEpisodesToDisk(list);
  return cleanEp;
}

export function deleteEpisodeFromDisk(episodeIdOrNum) {
  const list = getEpisodesFromDisk();
  const filtered = list.filter(e => e.id !== episodeIdOrNum && String(e.number) !== String(episodeIdOrNum));
  if (filtered.length !== list.length) {
    saveEpisodesToDisk(filtered);
    return true;
  }
  return false;
}

/* =========================================================
   GUEST SUBMISSIONS & APPROVAL WORKFLOW PERSISTENCE
   ========================================================= */
export function getSubmissionsFromDisk() {
  try {
    if (!fs.existsSync(SUBMISSIONS_FILE)) {
      return [];
    }
    const raw = fs.readFileSync(SUBMISSIONS_FILE, "utf-8");
    return JSON.parse(raw);
  } catch (err) {
    console.error("[Backend] Error reading submissions.json:", err);
    return [];
  }
}

export function saveSubmissionsToDisk(submissionsArray) {
  try {
    fs.writeFileSync(SUBMISSIONS_FILE, JSON.stringify(submissionsArray, null, 2), "utf-8");
    return true;
  } catch (err) {
    console.error("[Backend] Error writing submissions.json:", err);
    return false;
  }
}

export function addSubmission(submissionData) {
  const list = getSubmissionsFromDisk();
  const id = submissionData.id || `sub-${Date.now()}`;
  const newSub = {
    ...submissionData,
    id,
    status: submissionData.status || "pending",
    submittedAt: submissionData.submittedAt || new Date().toISOString()
  };
  list.unshift(newSub);
  saveSubmissionsToDisk(list);
  return newSub;
}

export function updateSubmissionStatus(id, status) {
  const list = getSubmissionsFromDisk();
  const idx = list.findIndex(s => s.id === id);
  if (idx !== -1) {
    list[idx].status = status;
    list[idx].updatedAt = new Date().toISOString();
    saveSubmissionsToDisk(list);
    return list[idx];
  }
  return null;
}

export function deleteSubmissionFromDisk(id) {
  const list = getSubmissionsFromDisk();
  const filtered = list.filter(s => s.id !== id);
  if (filtered.length !== list.length) {
    saveSubmissionsToDisk(filtered);
    return true;
  }
  return false;
}
