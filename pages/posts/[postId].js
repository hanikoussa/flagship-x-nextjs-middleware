import { useRouter } from "next/router"
import Link from 'next/link'

export default function Post({ post }) {

    const router = useRouter()

    if(router.isFallback) {
        return <div>Loading...</div>
    }

    return (
        <>
            <h2>
                {post.id} {post.title}
            </h2>
            <p>{post.body}</p>
        </>
    )
}

//Inform NextJs what possible values that postId.js page should be staticly generated for
export async function getStaticPaths() {
    // const response = await fetch("https://jsonplaceholder.typicode.com/posts")
    // const data = await response.json()

    // const paths = data.map(post => {
    //     return {
    //         params: {
    //             postId: `${post.id}`
    //         }
    //     }
    // })

    return {
        paths:[
            {
                params: {postId:'1'},
            },
            {
                params: {postId:'2'},
            },
            {
                params: {postId:'3'},
            },
        ],
        //paths,

        //three possible values: false, true, 'blocking'
        //false -> any other path will result in 404
        //true -> loading page for fetching new post
        //blocking -> no loading page, takes time to fetch the page
        fallback: true

    }
}

export async function getStaticProps(context) {
    const { params } = context
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`
    )
    const data = await response.json()
    if (!data.id){
        return {
            notFound: true
        }
    }
    return {
        props: {
            post: data
        }
    }
}