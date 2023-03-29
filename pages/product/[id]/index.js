import { useRouter } from "next/router"
import Link from 'next/link'

export default function ProductPage({ product }) {
  console.log(product)

  const router = useRouter()

    if(router.isFallback) {
        return <div>Loading...</div>
    }
  return (
    <>
      <Link href='/product'>  Product  </Link>
      <Link href='/'>  Home  </Link>

      <h1>{product.title} | {product.price}</h1>
      <h2>{product.description}</h2>
    </>
  )
}
export const fsPage = ProductPage;

//Inform NextJs what possible values that postId.js page should be staticly generated for
export async function getStaticPaths() {
  return {
    paths: [
      {
        params: { id: '1', vary: ['1']},
      },
    ],
    //paths,

    //three possible values: false, true, 'blocking'
    //false -> any other path will result in 404
    //true -> loading page for fetching new post
    //blocking -> no loading page, takes time to fetch the page
    fallback: 'blocking'

  }
}

export async function getStaticProps(context) {
  const { params } = context
  console.log(params)
  const response = await fetch(`http://localhost:4000/products/${params.id}`)
  const data = await response.json()

  console.log(`Generating Page for /products/`)
  return {
    props: {
      product: data,
    },
  }
}

// export async function getStaticProps(context) {
//   const { params } = context
//   const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`
//   )
//   const data = await response.json()
//   if (!data.id){
//       return {
//           notFound: true
//       }
//   }

//   console.log(`Generating Page for /posts/${params.postId}`)
//   return {
//       props: {
//           post: data
//       }
//   }
// }