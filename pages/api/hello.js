import {api} from '../../api'

export default async (req, res) => {
	const body = req.body
	try {
		const apiCall = await api('get', '/accounts')

		res.status(200).json(apiCall.items)
	} catch (error) {
		res.status(500).json(error)
	}
}
