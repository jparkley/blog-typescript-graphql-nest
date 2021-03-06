import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Blogpost } from './blogpost.entity';
import { BlogpostsService } from './blogposts.service';
import { CreateBlogpostInput } from './dto/create-blogpost.input';

@Resolver(of => Blogpost)
export class BlogpostsResolver {
    constructor(private blogpostService: BlogpostsService) {}

    @Query(returns => [Blogpost])
    findAll(): Promise<Blogpost[]> {
        return this.blogpostService.findAll()
    }

    @Query(returns => Blogpost)
    findOne(@Args('id', { type: () => Int }) id:number): Promise<Blogpost> {
        return this.blogpostService.findOne(id)
    }

    @Mutation(returns => Blogpost)
    createBlogpost(@Args('createBlogpostInput')  createBlogpostInput: CreateBlogpostInput): Promise<Blogpost> {
        return this.blogpostService.createBlogpost(createBlogpostInput)
    }
}
