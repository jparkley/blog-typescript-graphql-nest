import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Blogpost } from './blogpost.entity';

@Injectable()
export class BlogpostsService {
    constructor(@InjectRepository(Blogpost) private blogpostRepo: Repository<Blogpost>) {}
    //blogposts: Blogpost[] = [];
    
    async findAll(): Promise<Blogpost[]> {        
        return this.blogpostRepo.find();
    }
}
