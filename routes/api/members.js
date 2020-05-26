const express = require('express');
const uuid = require('uuid');
const router = express.Router();
//import members
const members = require('../../Members');

//create a route - gets all members
router.get('/', (req, res) => res.json(members));

// get single member
router.get('/:id', (req, res) => {
	const found = members.some(
		(member) => member.id === parseInt(req.params.id)
	);

	if (found) {
		res.json(
			members.filter(
				(member) => member.id === parseInt(req.params.id)
			)
		);
	} else {
		res.status(400).json({ msg: 'Member not found' });
	}
});

// Create member (handle post request)
router.post('/', (req, res) => {
	/* res.send(req.body); */
	const newMember = {
		id: uuid.v4(),
		name: req.body.name,
		email: req.body.email,
		status: 'active'
	};

	// Make sure name and email are sent with the request
	if (!newMember.name || !newMember.email) {
		return res
			.status(400)
			.json({ msg: 'Please include name and email' });
	}

	members.push(newMember);

	//return entire array of members including the new one
	res.json(members);
});

module.exports = router;
