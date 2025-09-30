import { Router, Request ,Response, NextFunction } from "express"

export const filmRouter = Router();

const films = [
  {
    id: 1,
    title: "Inception",
    director: "Christopher Nolan",
    duration: 148,
    budget: 160,
    description: "Un film de science-fiction sur les rêves.",
    imageUrl: "https://image.tmdb.org/t/p/inception.jpg"
  },
  {
    id: 2,
    title: "The Matrix",
    director: "Lana et Lilly Wachowski",
    duration: 136,
    budget: 63,
    description: "La matrice est partout.",
    imageUrl: "https://image.tmdb.org/t/p/matrix.jpg"
  },
  {
    id: 3,
    title: "Interstellar",
    director: "Christopher Nolan",
    duration: 169,
    budget: 165,
    description: "Voyage à travers un trou de ver.",
    imageUrl: "https://image.tmdb.org/t/p/interstellar.jpg"
  }
];

let counterGet = 0;

filmRouter.use((req:Request, _res:Response, next : NextFunction)=>{
  if(req.method == "GET"){
    counterGet++;
    console.log(`GET counter : ${counterGet}`);
  }
  next();
})

filmRouter.get("/", (_req:Request ,res:Response) => {
  res.json(films);
});

