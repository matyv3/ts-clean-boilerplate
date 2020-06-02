import { injectable, inject } from 'inversify';
import IPostRepository from '@core/repositories/IPostRepository';
import TYPES from '@types';
import CreatePostUseCase from '@core/use-cases/createPost/CreatePostUseCase';

@injectable()
export default class PostService {

    constructor(@inject(TYPES.PostRepository) private postRepository: IPostRepository) { }

    public GetCreatePostUseCase() {
        return new CreatePostUseCase(this.postRepository)
    }
}