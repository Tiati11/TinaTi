import { open, opendir, readFile } from 'node:fs/promises';
import express from "express";
import { BACKEND_IP } from './ip.js';

const app = express();

const LISTEN_PORT = 3000;
const DATA_FILE = "./data.json";

async function getData() {
  const contents = await readFile(DATA_FILE, {encoding: "utf-8"});
  return JSON.parse(contents);
}

async function setData(data) {
  await writeFile(DATA_FILE, JSON.stringify(data));
}

app.use(express.json());

app.get("/data", async (req, res) => {
  res.send(await getData());
})

// TODO: Implement setting data here.

app.listen(LISTEN_PORT, BACKEND_IP, () => {
  console.log(`API listening at http://${BACKEND_IP}:${LISTEN_PORT}`);
})
