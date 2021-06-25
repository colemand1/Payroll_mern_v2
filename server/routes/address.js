const express = require('express');
const router = express.Router();
const Address = require('../src/controllers/address-ctrl');

/* GET home page. */
router.get('/', function(req, res, next) {
  Address.getEntries(req, res)
});

router.get('/:id', function(req, res){
  Address.getEntryById(req, res)
});

router.post('/', function (req, res){
  Address.createEntry(req,res)
});

router.put('/:id', function (req, res) {
  Address.updateEntry(req, res)
});

router.delete('/:id', function (req, res) {
  Address.deleteEntry(req, res)
});

router.get('/:lastName/:firstName', function (req, res) {
  Address.getEntryByName(req, res)
})

module.exports = router;
