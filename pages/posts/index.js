import Link from "next/link"

export default function Posts({ posts }) {

    return <>
        <h1>Posts list</h1> {
            posts.map(post => {
                return (
                    <div key={post.id}>
                        <Link href={`posts/${post.id}`} passHref>
                            <h2>{post.id} {post.title}</h2>
                        </Link>
                        <hr />
                    </div>
                )
            })
        }

    </>

}


export async function getStaticProps() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts")
    const data = await response.json()

    return {
        props: {
            posts: data,
        }
    }
}