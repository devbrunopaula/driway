import api from '../../../api'
import axios from 'axios'
export default async function (req, res) {
	const leadBody = req.body

	try {
		// const response = await api('post', '/webleads', leadBody)
		const response = await axios.post(
			'https://webhook.site/f0b26d96-5167-4664-a2dd-f9800b46bc90',
			leadBody
		)
		console.log(response)
		res.status(201).json(response)
	} catch (error) {
		res.status(500).json(error)
	}
}
