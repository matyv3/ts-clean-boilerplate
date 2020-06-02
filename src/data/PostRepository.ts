import { injectable } from "inversify";
import IPostRepository from "@core/repositories/IPostRepository";
import Post from "@core/entities/Post";

@injectable()
export default class PostRepostiory implements IPostRepository {

    public async getById(id: string): Promise<Post> {
        throw new Error("method not implemented")
    }

    public async createPost(postData: Post): Promise<Post> {
        throw new Error("method not implemented")
    }
}