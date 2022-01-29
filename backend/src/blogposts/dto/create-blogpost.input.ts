import { Field, InputType } from '@nestjs/graphql';
import { IsAlpha, IsNotEmpty } from 'class-validator';

@InputType()
export class CreateBlogpostInput {
    @IsNotEmpty()
    @Field()
    title: string;

    @IsNotEmpty()
    @Field()
    content: string;
    
    @IsNotEmpty()
    @IsAlpha()
    @Field()
    author: string
}