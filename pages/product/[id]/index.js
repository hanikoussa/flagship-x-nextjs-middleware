export default function ProductPage({id}){

    return (
        <h1>Hello World</h1>
    )
}

export async function getServerSideProps(context) {
    const { params } = context

    return {
      props: {
        id: params.id
      },
    }
  }