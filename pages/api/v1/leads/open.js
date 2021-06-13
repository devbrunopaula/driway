import axios from 'axios'

export default async (req, res) => {
	const options = {
		method: 'GET',
		url: 'https://api.servicemonster.net/v1/leads',
		params: {wfield: 'status', wValue: 'open'},
		headers: {
			Authorization: process.env.SM_TOKEN,
		},
	}

	try {
		const apiCall = await axios.request(options)
		console.log(apiCall)
		res.status(200).json(apiCall.data.items)
	} catch (error) {
		res.status(500).json({message: error})
	}
}
