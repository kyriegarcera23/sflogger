const express = require('express');
const paymentRoutes = require('./app/routes/payments')

const cookieparser = require('cookie-parser');
const cors = require('cors');
const session = require('express-session')
const app = express();

app.use(session({secret:"thisissecretkey"}))
app.use(express.json())
app.use(cookieparser())
app.use(express.json())
app.use(cors());



app.use('/api',paymentRoutes);

const server = require('http').createServer(app);
const PORT = 8000;
server.listen(PORT, () => {
    console.log(`server listen in port: ${PORT}`)
})