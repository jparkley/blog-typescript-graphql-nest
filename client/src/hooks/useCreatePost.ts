import { gql, useMutation } from '@apollo/client'

// TODO
interface CreatePostInput {

}

const CREATE_POST = gql`
    mutation CreatePost($input: CreatePostInput) {
        createPost(input: $input) {
            id,
            title,
            content,
            author
        }
    }
`