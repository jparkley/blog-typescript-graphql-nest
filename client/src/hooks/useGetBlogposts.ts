import { gql, useQuery } from '@apollo/client'
import { Blogpost } from '../common/interfaces/BlogpostInterface'

const GET_POSTS = gql`
    query GetBlogposts {
        blogposts: findAll {
        id
        title
        content
        author
        }
    } 
`

export const useGetBlogposts = ():Blogpost[] => {
    const { data } = useQuery(GET_POSTS)
    console.log('data', data);
    
    // TODO: loading, error handling
    return data?.blogposts
}