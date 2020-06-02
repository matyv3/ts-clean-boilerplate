import { Response, Request } from 'express'
import { response, request, controller, httpGet, httpPost } from "inversify-express-utils";
import { inject } from 'inversify'
import { errorHandler } from '@utils';
import TYPES from '@types';
import PostService from '@core/services/PostService';
import CreatePostUseCase from '@core/use-cases/createPost/CreatePostUseCase'
@controller("/posts")
export class PostController {

    private readonly createPost: CreatePostUseCase

    constructor(
        @inject(TYPES.PostService) createPost: PostService
    ) {
        this.createPost = createPost.GetCreatePostUseCase()
    }

    @httpGet('/')
    private async index(@request() req: Request, @response() res: Response) {
        res.send({ status: 'posts service ok' })
    }

    @httpPost('/')
    private async create(@request() req: Request, @response() res: Response) {
        try {
            const result = await this.createPost.execute(req.body)
            res.status(201).send({ status: 'success', data: result })
        } catch (error) {
            return errorHandler(error, res)
        }
    }
}