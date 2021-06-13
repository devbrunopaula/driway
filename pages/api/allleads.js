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
		const apiCall = await axios(options)

		res.status(200).json(apiCall.items)
	} catch (error) {
		res.status(500).json({message: 'Opps something went wrong!!!'})
	}
}
