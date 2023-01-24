const path = require("path");
const express = require('express')
var cors = require('cors')
require('dotenv').config();
const app = express()
const connectToMongo = require('./db')
let port = process.env.PORT || 8020;
app.use(express.json({ limit: '50mb' }))
app.use(express.urlencoded({ limit: '50mb', extended: true }))
app.use(cors())

app.use(express.static(path.resolve(__dirname, "./client/build")));

connectToMongo();

const Items = require('./models/BestDeals')


// import bestDeals from './Routes/BestDeals';



//available routes
// app.use('/api/bestdeals', bestDeals)
app.use('/api/auth', require('./Routes/Auth'))
// app.use(uploadFile({useTempFiles:true}))





app.use(express.static(path.join(__dirname, "./client/build")));
app.get("*", function (_, res) {
    res.sendFile(
        path.join(__dirname, "./client/build/index.html"),
        function (err) {
            res.status(500).send(err);
        }
    );
});

app.listen(port, () => {
    console.log(`http://localhost:${port}/`)
})

