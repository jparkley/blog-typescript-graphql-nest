import { gql, useMutation } from '@apollo/client';

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
        createBlogpost(createBlogpostInput: $input) {
            id
            title
            content
            author
        }
    }
`
// data: { ...createBlogpost, __typename: "Blogpost"},
export const useCreateBlogpost = ():((createBlogpostInput: CreateBlogpostInput) => any) => {
    const [createBlogpost] = useMutation(CREATE_POST, {
        update(cache, { data: createBlogpost }) {
            cache.modify({
                fields: {
                    blogposts(curentBlogposts = []) {
                        const newBlogpostRef = cache.writeFragment({
                            id: cache.identify(createBlogpost),
                            data: createBlogpost,
                            fragment: gql`
                                fragment NewBlogpost on Blogpost {
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