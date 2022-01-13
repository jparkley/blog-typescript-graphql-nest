import { gql, useMutation } from '@apollo/client'

interface CreatePostInput {
    variables: {
        input: {
            title: string
            content: string        
        }
    }
}

const CREATE_POST = gql`
    mutation CreatePost($input: CreatePostInput!) {
        createPost(input: $input) {
            id
            title
            content
        }
    }
`

export const useCreatePost = ():((createPostInput: CreatePostInput) => any) => {
    const [createPost] = useMutation(CREATE_POST, {
        update(cache, { data: createPost }) {
            cache.modify({
                fields: {
                    posts(curentPosts = []) {
                        const newPostRef = cache.writeFragment({
                            data: createPost,
                            fragment: gql`
                                fragment NewPost on Post {
                                    id,
                                    title,
                                    content
                                }
                            `
                        })
                        return {...curentPosts, newPostRef}
                    }
                }
            })
        }
    })
    return createPost
}