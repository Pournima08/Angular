express = require('express');
mongoose = require('mongoose');
batchesRoutes = require("./routes/batchesRoutes.js");

eobj = express();

eobj.use(batchesRoutes);

eobj.listen(4000, (request, response) =>{
  console.log("Marvellous Server started succesfully at port 4000");
});

eobj.get('/', (request, response) =>{
  response.send("Welcome to Marvellous MEAN application");
});

Databasepath = 'mongodb+srv://marvellous:marvellous@batches.7u5bl.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(Databasepath).then(()=>{
  console.log("Databse connection is succesfull");
}).catch((err) => {
  console.log("Error in the databse connection");
});