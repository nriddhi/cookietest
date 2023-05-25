const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();
const authRoute = require('./controller/login.js');
const cookieParser = require('cookie-parser');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: 'https://www.nayeemriddhi.info',
    credentials: true
}));

app.use('/api/auth', authRoute);

// app.use(function (req, res, next) {
//   res.header("Content-Type", "application/json;charset=UTF-8");
//   res.header("Access-Control-Allow-Credentials", true);
//   res.header("Access-Control-Allow-Origin", '*' );                                                                                                                                            zzzz');
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   next();
// });

mongoose.connect(process.env.MONGO_URL)
.then(console.log('MongoDB Connected'))
.catch((err) => console.log(err));

app.listen(PORT, ()=> {
console.log("Listening on port "+PORT);
})

