import User from "../components/user"
import Link from 'next/link'

export default function UserList({ users, data2 }) {
    console.log(data2)
    return (
        <>
            <Link href='/'>  Home  </Link>
            <h1>List of users</h1> {
                users.map(user => {
                    return (
                        <div key={user.id}>
                            <User user={user} />
                        </div>
                    )
                })
            }
        </>
    )
}

export async function getStaticProps() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await response.json()

    return {
        props: {
            users: data,
        },
    }
}

// export async function getStaticProps() {
//     const res = await fetch('http://localhost:3000')
//     headerValue = response.headers.get('X-Flag-Header')
//     console.log(headerValue)
//     const data2 = await res.json()
  
//     return {
//       props: {
//         data2
//       }
//     }
//   }