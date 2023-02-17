import {Post} from "../common/type-and-interfaces";

export class PostService {
    private db: Post[] = [];
    private idCounter: number = 1;
    async addPost(
    userId: number,
    topic: string,
    text: string): Promise<Post> {
        const post: Post = {
            id: this.idCounter,
            userId,
            topic,
            text
        }

        this.db.push(post);

        this.idCounter++;

        console.log(`Our database = ${JSON.stringify(this.db)}`);

        return post;
    }

    // async getPost(login: string, password: string): Promise<User | string> {
    //     const user = this.db.find((user) => user.login === login && user.password === password)
    //
    //     console.log(`Our database = ${JSON.stringify(this.db)}`);
    //
    //     return post || 'Not user'
    // }

}

export const postService = new PostService()