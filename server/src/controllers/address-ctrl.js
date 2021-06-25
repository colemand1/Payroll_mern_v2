const Address = require("../models/address")

const updateEntry = async (req, res) => {
    try{
        const body = req.body;
        const filter = { firstName: body.firstName, lastName: body.lastName }
        const options = {upsert: true, new: true}
  
        if (!body) {
          return res.status(400).json({
            success: false,
            error: "You must provide a body to update"
          });
        }
        const result = await Address.updateOne(filter, body, options)
        
        if(result){
            return res.status(200).json({
              success: true,
              message: "Address Updated",
              data: result
            })
        }else{
            console.log("Update failed - returned value: ", result)
            return res.status(404).json({
              success: false,
              message: "Update failed",
            })
        }

    }catch(err){
        console.log(err)
    }        
}
  
  const updateEntryById = async (req, res) => {
    const body = req.body;
  
    if (!body) {
      return res.status(400).json({
        success: false,
        error: "You must provide a body to update"
      });
    }
    Address.findOne({ _id: req.params.id }, (err, address) => {
      if (err) {
        return res.status(404).json({
          err,
          message: "Address entry not found!"
        });
      }
      const body = req.body;
      console.log(body)
      address.firstName = body.firstName;
      address.lastName = body.lastName;
      address.phoneNumber = body.phoneNumber
      address
        .save()
        .then(() => {
          return res.status(200).json({
            success: true,
            id: Address._id,
            message: "Address entry updated!"
          });
        })
        .catch((error) => {
          return res.status(404).json({
            error,
            message: "Address entry not updated!"
          });
        });
    });
  };
  
  const deleteEntry = async (req, res) => {
    await Address.findOneAndDelete({ _id: req.params.id }, (err, address) => {
      if (err) {
        return res.status(400).json({ success: false, error: err });
      }
  
      if (!address) {
        return res.status(404).json({ success: false, error: `Address entry not found` });
      }
  
      return res.status(200).json({ success: true, data: address });
    }).catch((err) => console.log(err));
  };
  
  const getEntryById = async (req, res) => {
    await Address.findOne({ _id: req.params.id }, (err, address) => {
      if (err) {
        return res.status(400).json({ success: false, error: err });
      }
  
      if (!address) {
        return res.status(404).json({ success: false, error: `Address entry not found` });
      }
      return res.status(200).json({ success: true, data: address });
    }).catch((err) => console.log(err));
  };

  const getEntryByName = async (req, res) =>{
    await Address.findOne({ firstName: req.params.firstName, lastName: req.params.lastName }, (err, address) => {
      if (err) {
        return res.status(400).json({ success: false, error: err });
      }
  
      if (!address) {
        return res.status(404).json({ success: false, error: `Address entry not found` });
      }
      return res.status(200).json({ success: true, data: address });
    }).catch((err) => console.log(err));
  }

  const getEntries = async (req, res) => {
    await Address.find({}, (err, address) => {
      if (err) {
        return res.status(400).json({ success: false, error: err });
      }
      if (!Address.length) {
        return res.status(404).json({ success: false, error: `Address entry not found` });
      }
      return res.status(200).json({ success: true, data: address});
    }).catch((err) => console.log(err));
  };
  module.exports = {
    updateEntry,
    updateEntryById,
    deleteEntry,
    getEntries,
    getEntryById,
    getEntryByName
  };