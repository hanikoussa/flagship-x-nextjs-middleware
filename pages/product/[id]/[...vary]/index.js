export default function ProductPage({ id, theVariation }) {

  return (
    <>
      <h1>Hello World {id}</h1>
      <h1>variation: {theVariation} </h1>
    </>
  )
}

export async function getServerSideProps(context) {
  const { params } = context
  console.log(params)

  return {
    props: {
      id: params.id,
      theVariation: params.vary
    },
  }
}