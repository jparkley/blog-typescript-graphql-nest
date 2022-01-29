import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateBlogpostInput {
    @Field()
    title: string;

    @Field()
    content: string;

    @Field()
    author: string
}