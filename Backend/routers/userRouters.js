const express = require('express');
const router = express.Router();

let users = [{ id: 1, name: 'Ujjwal', email: 'ujjwal@investiq.com' }];

router
  .get('/', (req, res) => res.json(users))
  .get('/:id', (req, res) => {
    const user = users.find(u => u.id === +req.params.id);
    user ? res.json(user) : res.status(404).json({ message: 'User not found' });
  })
  .post('/', (req, res) => {
    const { name, email } = req.body;
    if (!name || !email) return res.status(400).json({ message: 'Name and email required' });
    const newUser = { id: users.length + 1, name, email };
    users.push(newUser);
    res.status(201).json(newUser);
  })
  .delete('/:id', (req, res) => {
    const index = users.findIndex(u => u.id === +req.params.id);
    if (index !== -1) {
      users.splice(index, 1);
      res.json({ message: 'User deleted' });
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  });

  module.exports = router;
