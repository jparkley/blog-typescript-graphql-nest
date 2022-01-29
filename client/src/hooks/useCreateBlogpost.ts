import { gql, useMutation } from '@apollo/client'

interface CreateBlogpostInput {
    variables: {
        input: {
            title: string
            content: string  
            author: string      
        }
    }
}

const CREATE_POST = gql`
    mutation CreateBlogpost($input: CreateBlogpostInput!) {
        createBlogpost(input: $input) {
            id
            title
            content
            author
        }
    }
`

export const useCreateBlogpost = ():((createBlogpostInput: CreateBlogpostInput) => any) => {
    const [createBlogpost] = useMutation(CREATE_POST, {
        update(cache, { data: createBlogpost }) {
            cache.modify({
                fields: {
                    blogposts(curentBlogposts = []) {
                        const newBlogpostRef = cache.writeFragment({
                            data: createBlogpost,
                            fragment: gql`
                                fragment NewBlogpost on Post {
                                    id,
                                    title,
                                    content,
                                    author
                                }
                            `
                        })
                        return {...curentBlogposts, newBlogpostRef}
                    }
                }
            })
        }
    })
    return createBlogpost
}