import { Injectable } from '@nestjs/common';
import { Blogpost } from './interfaces/blogpost.interface';

@Injectable()
export class BlogpostsService {
    blogposts: Blogpost[] = [];
    findAll() {
        return this.blogposts;
    }

    findOne(id: string): Blogpost {
        return this.blogposts.find((bp) => bp.id === id)
    }

    create(blogpost: Blogpost): Blogpost[] {
        this.blogposts.push(blogpost)
        return this.blogposts;
    }
}
