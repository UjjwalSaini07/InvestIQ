const express = require('express');
const router = express.Router();

let users = [{ id: 1, name: 'ujjwal', email: 'ujjwal@investiq.com' }];

router
  .get('/', (req, res) => res.json(users))
  .post('/', (req, res) => {
    const user = { id: users.length + 1, ...req.body };
    users.push(user);
    res.status(201).json(user);
  });

module.exports = router;