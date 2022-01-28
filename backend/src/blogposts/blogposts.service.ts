import { Injectable } from '@nestjs/common';
import { Blogpost } from './blogpost.entity';

@Injectable()
export class BlogpostsService {
    //blogposts: Blogpost[] = [];
    
    async findAll(): Promise<Blogpost[]> {
        let blogpost = new Blogpost();
        blogpost.id = '11';
        blogpost.title = 'Title 1'
        blogpost.content = 'Test content 1'
        blogpost.author = 'HJ'

        return [blogpost];
    }

    // findOne(id: string): Blogpost {
    //     return this.blogposts.find((bp) => bp.id === id)
    // }

    // create(blogpost: Blogpost): Blogpost[] {
    //     this.blogposts.push(blogpost)
    //     return this.blogposts;
    // }
}
