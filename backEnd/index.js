const express = require('express')
require('dotenv').config();
const db = require('./src/dataBase/dbIndex')

const adminAuthRoutes = require('./src/routes/adminAuth.routes')


const app = express();
const PORT = process.env.PORT || 300;


// routing

app.use('/auth', adminAuthRoutes)




//db sync
db.sequelize.sync()
  .then(() => {
    console.log('Database connected successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

  

app.listen(PORT, () => {
    console.log(`hisabKitab server started at ${PORT}`); 
})