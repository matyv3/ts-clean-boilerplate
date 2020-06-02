import { IRepository } from './IRepository'
import CreatePostRequestDto from '@core/use-cases/createPost/CreatePostRequestDto';
import Post from '@core/entities/Post'

export default interface IPostRepository extends IRepository<Post> {
    createPost(post: CreatePostRequestDto): Promise<Post>
    // add custom methods
}

