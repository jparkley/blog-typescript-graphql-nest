import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { BlogpostsService } from './blogposts.service';
import { CreateBlogpostDto } from './dto/create-blogpost.dto';
import { Blogpost } from './interfaces/blogpost.interface';

@Controller('blogposts')
export class BlogpostsController {
    constructor(private blogpostService: BlogpostsService) {}

    @Get()
    findAll(): Blogpost[] {
        return this.blogpostService.findAll();
    }

    @Get(':id')
    findOne(@Param() params): Blogpost {
        return this.blogpostService.findOne(params.id)
    }

    @Post()
    create(@Body() blogpost: CreateBlogpostDto): Blogpost[] {
        return this.blogpostService.create(blogpost)
    }
}
