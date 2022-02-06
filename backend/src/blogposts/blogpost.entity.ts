import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Blogpost {
    @PrimaryGeneratedColumn()
    @Field(type => Int)
    id: number;
    
    @Column()
    @Field()
    title: string;

    @Column()
    @Field()
    content: string;

    @Column()
    @Field()
    author: string;

    @Column({ nullable: true })
    @Field(type => Int)
    likes: number
}