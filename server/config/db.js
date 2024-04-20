const mongoose = require("mongoose")

const connectDB = async () =>{
        try {
            const conn = await mongoose.connect(process.env.MONGOURI,{ useNewUrlParser: true, useUnifiedTopology: true });
            console.log(`connection success ${conn.connection.host}`);
        } catch (error) {
            console.log(error);
        }
}
module.exports = connectDB;