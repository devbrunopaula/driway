const axios = require('axios').default

export default async function (req, res) {
  const leadBody = req.body
  const headers = {
    'Content-Type': 'application/json',
    Authorization: process.env.SM_TOKEN,
  }

  try {
    const response = await axios.post(process.env.SM_API_URL, leadBody, {
      headers,
    })
    console.log(response)
    res
      .status(201)
      .json({lead: leadBody, data: response.data, status: response.status})
  } catch (error) {
    res.status(500).json(error)
  }
}
