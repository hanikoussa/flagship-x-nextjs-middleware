export default function Variation({vary}) {

  // const variation = router.query.variation
  return (
    <div>
      <h1>You are getting this variation: {vary}</h1>
    </div>
  )
}

export async function getServerSideProps(context) {

  const { params } = context
  const { vary } = params


  return {
      props: {
        vary,
      }
  }

}