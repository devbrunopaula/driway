import axios from 'axios'

const api = async (method, path, payload) => {
	const options = {
		method: method,
		url: process.env.URL + path,
		headers: {
			Authorization: process.env.SM_TOKEN,
		},
		data: payload,
	}

	try {
		const res = await axios.request(options)
		return res.data
	} catch (error) {
		console.log(error)
	}
}

export default api
