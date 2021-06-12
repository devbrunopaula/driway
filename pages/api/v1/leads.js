import api from '../../../api'

export default async function (req, res) {
	const leadBody = req.body

	try {
		const response = await api('post', '/webleads', leadBody)
		console.log(response)
		res.status(201).json(response)
	} catch (error) {
		res.status(500).json(error)
	}
}
