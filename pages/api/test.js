export default async function handler(req, res) {
    //const res = await fetch('http://localhost:3000')
    // let headerValue = res.headers.get('X-Flag-Header')
    res.status(200).json({flag: "hani" })
  }

