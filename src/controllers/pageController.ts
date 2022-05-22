import { Request, Response } from "express";

export const home = (req: Request, res: Response) => {
    res.send("Home no controller")
}

export const dogs = (req: Request, res: Response) => {
    res.send("dogs no controller")
}

export const cats = (req: Request, res: Response) => {
    res.send("cats no controller")
}

export const fishes = (req: Request, res: Response) => {
    res.send("fishes no controller")
}