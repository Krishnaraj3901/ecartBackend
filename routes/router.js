//to define routes for client requests

//import express
const express = require ('express')

//4. impoort product controller

const productController = require ('../controllers/productController')

//import wishlistsController
const wishlistsController = require ('../controllers/wishlistController')

//import cartcontroller
const cartcontroller = require('../controllers/cartController')

//2  using express create object for router class inorder to setup path

const router = new express.Router()

//3 use router object to resolve client request

  //get all products api request

  router.get('/products/all-products',productController.getAllProducts)

  //6 get a particular product details
  router.get('/products/view-product/:id',productController.viewProduct)

  //7. add new product to the wishlists
  router.post('/wishlists/add-to-wishlist',wishlistsController.addToWishlists)

  //8 view all wishlist items
  router.get('/wishlists/view-all-wishlists',wishlistsController.getWishlistItems)

  //9 delete items
  router.delete('/wishlists/delete-wishlist-product/:id',wishlistsController.deleteProduct)

  //10.add to cart
  router.post('/carts/add-to-cart',cartcontroller.addToCart)

  //11 get cart products
  router.get('/carts/get-cart',cartcontroller.getCart)

  //12.delete cart product
  router.delete('/carts/delete-product/:id',cartcontroller.DeleteCartProduct)

  //13. increment cart quantity
  router.get('/carts/increment-product/:id',cartcontroller.incrementProductCount)

  //14. decrement product count
  router.get('/carts/decrement-product/:id',cartcontroller.decrementProductCount)

  //5 export routes

  module.exports=router