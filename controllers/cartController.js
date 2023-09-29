// //1. import carts model
// const carts = require('../models/cartSchema')

// //2.add to cart collection

// exports.addToCart = async(req,res)=>{

//   //get product details from the request
//   const {id,title,price,image,quantity}=req.body

//   //logic

//   try{
//     //check if the product is already in the cart
//     const products = await carts.findOne({id})
//     if(products){
//       //product is present in the cart,update the quantity and price accordingly
//       products.quantity+=1

//       //update the grand total
//       products.grandTotal=products.price*products.quantity

//       //save changes to the db
//       products.save()

//       //send response back to the client
//       res.status(200).json("product details updated")
//     }
//     else{
//       //product is not present in the cart,add product to cart
//       const newProduct = new carts({
//         id,title,price,image,quantity,grandTotal:price
//       })

//       //save  new product details
//       newProduct.save()

//       //send response back to client
//       res.status(200).json('product added successfully')
//     }
//   }
//   catch(error){
//     res.status(404).json(error)
//   }
// }


// import carts model
const carts=require('../models/cartSchema')

//add to cart collection
exports.addToCart=async(req,res)=>{

    // get product details from the request
    const{id,title,price,image,quantity}=req.body

    //logic-
    try{

        //check if the product is already in cart
          const products=await carts.findOne({id})
          if(products){
            //product is present update the quantity and price accordingly
            products.quantity+=1

            //update the grand total
            products.grandTotal=products.price*products.quantity
            
            //save changes to the db
            products.save()

            //send response back to the client 
            res.status(200).json("Product details updated")
          }
          else{
            //products is not present in the cart, Add product to cart
            const newProduct=new carts({
                id,title,price,image,quantity,grandTotal:price
            })

            //save new product details
            newProduct.save()

            //send response back to client
            res.status(200).json("Product added successfully")
          }

    }
    catch{
        req.status(404).json(error)
    }
}

//get cart product
exports.getCart = async (req,res)=>{
  //get cart details from database
 try{
  const allCart=await carts.find()
  res.status(200).json(allCart)
 }

 catch(error){
  res.status(404).json(error)
 }
  
}

//delete a product from cart
exports.DeleteCartProduct=async(req,res)=>{
  //get product id from req
  const {id}=req.params
  //remove id from cart
  try{
    const removeProduct = await carts.deleteOne({id})//product delete
    if(removeProduct.deleteCount!=0){
      //get all products from cart
      const allProduct = await carts.find()
      res.status(200).json(allProduct)//response send back to client
    }
  }
  catch(error){
    res.status(404).json(error)
  }
}


//increment the cart prodduct count
exports.incrementProductCount = async (req,res)=>{
  //find product id
    const {id}=req.params
  try{
    //if the product is aalready in the cart then quantity will be incremented by 1
    const Product = await carts.findOne({id})
    if(Product){
      Product.quantity+=1;
          //then update the grand total

      Product.grandTotal=Product.price*Product.quantity

      //save changes in db
     await Product.save()

      //after the product has been saved update the content into the client side
      const allCart = await carts.find()
      res.status(200).json(allCart)
    }
    else{
      res.status(401).json('product not found')
    }

  }
  catch(error){
    res.status(404).json(error)
  }
}

//decrement product count

exports.decrementProductCount = async (req,res)=>{
  const {id}= req.params
try{
  const product = await carts.findOne({id})
  if(product){
    product.quantity-=1
    if(product.quantity==0){
      //remove the product from the cart
      await carts.deleteOne({id})
      //remaining product will be sent back to client
      const allCart =await carts.find()
    res.status(200).json(allCart)
    }

    else{product.grandTotal=product.price*product.quantity

   await product.save()

    const allCart =await carts.find()
    res.status(200).json(allCart)
  }
}
  else{
    res.status(401).json('product not found')
  }

}
catch(error){
  res.status(404).json(error)
}
}