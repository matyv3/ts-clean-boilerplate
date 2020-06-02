import { Container } from 'inversify';
import TYPES from '@types'
import IPostRepository from '@core/repositories/IPostRepository'
import PostRepostiory from '@data/PostRepository';
import PostService from '@core/services/PostService'

let container = new Container();

// set up bindings
container.bind<PostService>(TYPES.PostService).to(PostService)
container.bind<IPostRepository>(TYPES.PostRepository).to(PostRepostiory);

export default container