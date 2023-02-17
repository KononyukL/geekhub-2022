import express, {Request, Response, NextFunction} from "express";
import {postService, PostService} from "../services";




export class PostController {
    router = express.Router()

    constructor() {
        this.router.post('/', this.post);
    }
    post = async (req: Request, res: Response, next: NextFunction) => {
        const {userId, topic, text} = req.body;

        const post = await postService.addPost(userId, topic, text)
        res.send(post)
    }

}
export const postController = new PostController()