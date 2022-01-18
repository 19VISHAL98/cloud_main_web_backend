const express = require('express');
const db = require('./db');
const route = require('./routes');
const app = express();
  
app.use(express.urlencoded({extended: true}));
app.use(express.json);
require('dotenv').config();

db.sequelize.sync({force: false}).then(()=>{
    console.log("Drop and resync with {force: true}");
})

app.use(route);
app.get('/', (req, res)=>{
    res.send('Server is running');
})



app.listen(process.env.PORT, () => console.log("server is running at PORT" + `${process.env.PORT}`));
