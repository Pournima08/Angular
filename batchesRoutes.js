express = require('express');

batchesModel = require("../models/batches.js");

eobj = express();

// Read the data from database
eobj.get('/batches', async(request,response) =>{
batches = await batchesModel.find({});    // select * from ______;
try{
  response.send(batches);
}
catch(error)
{
  response.status(500).send(error);
}
});

// Insert the data into database
eobj.post('/batches', async(request, response) =>{
  batches = new batchesModel(request.body);
  try{
  await batches.save();   // insert into batches values("PPA",3);
  response.send(batches);
  }
  catch(error)
  {
    response.status(500).send(error);
  }
});

module.exports = eobj;