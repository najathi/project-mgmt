const mongoose = require('mongoose');

const connectDB = async () => {
  mongoose.set('strictQuery', false);
  const conn = await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  mongoose.connection.on("error", err => {
    console.log("MongoDB Failed: ", err)
  })

  mongoose.connection.on("connected", (err, res) => {
    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold);
  })


};

module.exports = connectDB;
