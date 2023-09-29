//logic for getting all products from mongodb

 //1 import product collection

 const products = require ('../models/productSchema')

 //3 create a function for gettting all products

 exports.getAllProducts = async(req,res)=>{
    //get all products from mongodb
    try{
      const allProducts = await products.find()
      res.status(200).json(allProducts)//response send back to frontend/client
    }
    catch(error){
      res.status(401).json(error)//error message send back to frontend/client
    }
 }

 //view particular product details

 exports.viewProduct=async(req,res)=>{
  //get product id from request
  const id=req.params.id;
  try{
    //check if product id is present in the db
    const product = await products.findOne({id})
    if(product){
      res.status(200).json(product)
    }
    else{
      res.status(404).json('product not found')
    }
  }
  catch(error){
    res.status(404).json(error)
  }
 }