import IUseCase from '@core/definitions/IUsecase'
import CreatePostResponseDto from '@core/use-cases/createPost/CreatePostResponseDto'
import CreatePostRequestDto from '@core/use-cases/createPost/CreatePostRequestDto';
import IPostRepository from '@core/repositories/IPostRepository';

export default class CreatePostUseCase implements IUseCase<CreatePostRequestDto, CreatePostResponseDto> {

    private postRepository: IPostRepository

    constructor(PostEntityGateway: IPostRepository) {
        this.postRepository = PostEntityGateway
    }

    async execute(PostDto: CreatePostRequestDto): Promise<CreatePostResponseDto> {
        return await this.postRepository.createPost(PostDto)
    }
}