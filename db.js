const mongoose = require('mongoose');
require('dotenv').config();

const connectToMongo = async () => {
    try {
        if (process.env.DATABASE_ID == null) {
            const conn = await mongoose.connect('mongodb://127.0.0.1:27017/meranote')
                .then(() => { console.log("successfully connected with mongo"); })
                .catch((err) => { console.log(err) });
        }
        else {
    const conn = await mongoose.connect(`mongodb+srv://${process.env.DATABASE_ID}:${process.env.DATABASE_PASS}@sastastore.1xmvojq.mongodb.net/user?retryWrites=true&w=majority`, { useNewUrlParser: true })
                .then(() => { console.log("successfully connected with mongo atlas") })
                .catch((err) => { console.log(err) });
        }


    } catch (error) {
        console.log(error);
    }

}

module.exports = connectToMongo;