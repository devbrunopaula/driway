import api from '../../../api'
import axios from 'axios'
export default async function (req, res) {
	const data = {
		customerFirstName: req.body['1.3'],
		customerLastName: req.body['1.6'],
		phone: req.body['7'],
		email: req.body['2'],
		address1: req.body['39.1'],
		address2: req.body['2'],
		city: req.body['39.3'],
		state: req.body['39.4'],
		zip: req.body['39.5'],
	}
	try {
		const response = await api('post', '/webleads', data)

		res.status(201).json(response)
	} catch (error) {
		res.status(500).json(error)
	}
}
