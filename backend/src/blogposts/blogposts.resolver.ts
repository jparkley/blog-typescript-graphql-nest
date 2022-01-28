import { Query, Resolver } from '@nestjs/graphql';
import { Blogpost } from './blogpost.entity';
import { BlogpostsService } from './blogposts.service';

@Resolver(of => Blogpost)
export class BlogpostsResolver {
    constructor(private blogpostService: BlogpostsService) {}

    @Query(returns => [Blogpost])
    findAll(): Promise<Blogpost[]> {
        return this.blogpostService.findAll()
    }
}
