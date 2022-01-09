import { gql, useQuery } from '@apollo/client'
import { Post } from '../common/interfaces/PostInterface'

const GET_POSTS = gql`
    query GetPosts {
        posts {
        id
        title
        content
        author
        }
    } 
`

export const useGetposts = ():Post[] => {
    const { data } = useQuery(GET_POSTS)
    // TODO: loading, error handling
    return data?.posts
}