const mongoose = require('mongoose')

//const connectionString 

const connectDB = (url) => {
return mongoose.connect(url, {
    useNewUrlParser:true,
    useCreateIndex:true,
    useFindAndModify:false,
    useUnifiedTopology:true,
})
}

module.exports = connectDB


//.then(() => console.log('CONNECTED TO THE DB...'))
//.catch((err) => console.log(err))