import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Blogpost } from './blogpost.entity';
import { CreateBlogpostInput } from './dto/create-blogpost.input';

@Injectable()
export class BlogpostsService {
    constructor(@InjectRepository(Blogpost) private blogpostRepo: Repository<Blogpost>) {}
    //blogposts: Blogpost[] = [];
    
    async findAll(): Promise<Blogpost[]> {        
        return this.blogpostRepo.find();
    }

    async findOne(id:number): Promise<Blogpost> {
        return this.blogpostRepo.findOneOrFail(id)
    }

    createBlogpost(createBlogpostInput: CreateBlogpostInput): Promise<Blogpost> {
        const newBlogpost = this.blogpostRepo.create(createBlogpostInput);
        return this.blogpostRepo.save(newBlogpost);
    }
}
