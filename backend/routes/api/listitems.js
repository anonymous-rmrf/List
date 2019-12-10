const express = require('express');
const router = express.Router();
const bodyParser = require ('body-parser');
const auth = require('../../middleware/auth');
const List = require('../../models/ListItem');

router.get('/', (req,res) => {
    List.find()
        .sort({date: -1})
        .then(items => res.json(items))
});

router.post('/',auth, (req,res) => {
    const newList = new List({
        name: req.body.name
    });
    newList.save()
        .then(item => res.json(item));
})

router.delete('/:id', auth,(req, res) => {
    List.findById(req.params.id)
      .then(item => item.remove().then(() => res.json({ success: true })))
      .catch(err => res.status(404).json({ success: false }));
  });

module.exports = router;