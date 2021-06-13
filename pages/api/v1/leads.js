import api from '../../../api'
import axios from 'axios'
export default async function (req, res) {
	const data = {
		customerFirstName: req.body['1.3'],
		customerLastName: req.body['1.6'],
		phone: req.body['7'],
		email: req.body['2'],
		address1: req.body['39.1'],
		address2: req.body['39.2'],
		city: req.body['39.3'],
		state: req.body['39.4'],
		zip: req.body['39.5'],
		country: req.body['39.6'],
		note: `
LEAD# ${req.body.id}		
Your Name: ${req.body['1.3']} ${req.body['1.6']}     
Photo Attached: ${req.body['29'] ? 'YES' : 'NO'}

E-mail: 
${req.body['2']}

Service Address:
${req.body['39.1']} 
${req.body['39.2']}
${req.body['39.3']}, ${req.body['39.4']} ${req.body['39.5']}


If you already have an order in progress (Price-Quote, Work Order, or Invoice) please write it here.
>> ${req.body['35']}

Please select which service categories you're thinking about...
 *${req.body['22.1']}
 *${req.body['22.2']}
 *${req.body['22.3']}
 *${req.body['22.4']}

Tell us what the issue is and how can we best serve you?
>> ${req.body['18']}

Are there any special marks, stains, issues, odours, or areas of concern?
>> ${req.body['26']}

When is this available to us, and by what date must it be done?
>> ${req.body['5']}

Do you have some measurements for us?
>> ${req.body['19']}

Are your items synthetic or natural fibre such as wool or cotton?
>> ${req.body['27']}

A picture (or PDF) is worth a thousand words... (optional)
>> ${req.body['29']}

Is there a different billing address? 
>> ${req.body['28']}

Are there any parking or access instructions?
>> ${req.body['21']}

Have we served you previously?
 *${req.body['15.1']}
 *${req.body['15.2']}
 *${req.body['15.3']}

If you're new here, welcome! Did anyone in particular refer us to you?
>> ${req.body['16']}

If not referred, where did you first learn of our service?
>> ${req.body['23']}

What qualities drew you to consider our service?
* ${req.body['24.1']}
* ${req.body['24.2']}
* ${req.body['24.3']}
* ${req.body['24.4']}
* ${req.body['24.5']}
* ${req.body['24.6']}
* ${req.body['24.7']}
* ${req.body['24.8']}
* ${req.body['24.9']}

Telephone number -mobile if possible
>>${req.body['7']}

Can we text you at this number?
>> ${req.body['14.1']}

Meta Tags ----
Source: ${req.body['source_url']} 
ip: ${req.body.ip}
Date: ${req.body['date_created']}
		`,
	}

	try {
		const response = await api('post', '/webleads', data)
		res.status(201).json(response)
	} catch (error) {
		res.status(500).json({message: 'something went wrong !!!'})
	}
}
