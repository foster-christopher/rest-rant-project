const mongoose = require('mongoose')
require('dotenv').config()

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true, 
  useUnifiedTopology: true
}, () => {
        console.log("Successful database connection made", process.env.MONGO_URI)
      }

)


module.exports.Place = require('./places')