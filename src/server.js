import express from "express";
import cors from "cors";
import { dataBase } from "./database/connection.js";
import 'dotenv/config';

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT;

function changeKeyId(array) {
  return array.map((obj) => {
    if (obj.hasOwnProperty("_id")) {
      const { _id, ...rest } = obj;
      return { id: _id, ...rest };
    }
    return obj;
  });
}

app.get("/artists", async (req, res) => {
  try {
    const artistsCollection = await dataBase
      .collection("artists")
      .find({})
      .toArray();
    const artistArray = changeKeyId(artistsCollection);
    res.json(artistArray);
  } catch (error) {
    return res.status(500).json({
      erro: `Não foi possível trazer os dados da api. Mensagem: ${error}`,
    });
  }
});

app.get("/songs", async (req, res) => {
  try {
    const songsCollection = await dataBase
      .collection("songs")
      .find({})
      .toArray();
    const songsArray = changeKeyId(songsCollection);
    res.json(songsArray);
  } catch (error) {
    return res.status(500).json({
      erro: `Não foi possível trazer os dados da api. Mensagem: ${error}`,
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
