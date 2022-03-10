const mongoose = require('mongoose')


const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGDB_URI)

    console.log(`Mongodb connected: ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.log(error);
    process.exit(1)
  }
}


module.exports = connectDB