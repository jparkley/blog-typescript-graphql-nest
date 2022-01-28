import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Blogpost {
    @Field()
    id: string;
    
    @Field()
    title: string;

    @Field()
    content: string;

    @Field()
    author: string;
}