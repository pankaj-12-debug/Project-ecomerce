const Product=require('../model/product');
exports.getproducts=async(req,res)=>{
    try{
        const Item=6;
        const page=+req.query.page||1;
        const numberProducts=await Product.findAll();
let totalItem=numberProducts.length;
const products=await Product.findAll({offset:((page-1)*Item),limit:Item});
res.status(200).json({"products":products})

    }catch(err){
        console.log(err);
        res.status(500).json(err);
    }
}

exports.addProduct= async(req, res)=>{
    try{
        const {title, price, imageUrl}= req.body;
        await Product.create({title, price, imageUrl});
        res.sendStatus(201);
    }catch(err){
        console.log(err);
        console.log('not working');
        res.sendStatus(500)
    }
}



