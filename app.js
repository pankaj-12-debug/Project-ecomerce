console.log('hi');
const express=require('express');
const app=express();
const cors=require('cors');

app.use(express.json());
app.use(cors());

//database
const sequelize=require('./util/database');

//routes
const productRoutes=require('./routes/product');

//model
const Product=require('./model/product');


app.use(productRoutes);


sequelize.sync().then(result=>{
    app.listen(3000,()=>{
        console.log('done');
    })
}).catch(err=>{
    console.log(err);
})