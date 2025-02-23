// import { artistArray } from "../../../frontend/src/assets/database/artist.js";
// import { songsArray } from "../../../frontend/src/assets/database/songs.js";
// import { dataBase } from "./connection.js";

// function deleteId(array) {
//   const newArray = array.map((item) => {
//     const newItem = { ...item };
//     delete newItem.id;
//     return newItem;
//   });
//   return newArray
// }

// const responseArtists = await dataBase
//   .collection("artists")
//   .insertMany(deleteId(artistArray));

// const responseSongs = await dataBase
//   .collection("songs")
//   .insertMany(deleteId(songsArray));

// console.log(responseArtists);
// console.log(responseSongs);

