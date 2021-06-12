import axios from 'axios'

const api = async (method, path, payload) => {
	const options = {
		method: method,
		url: 'https://api.servicemonster.net/v1/' + path,
		headers: {
			Authorization: 'Basic UzZCazBRVjE6cVplSDJUNlJid0ZJQkRIemNpbA==',
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
