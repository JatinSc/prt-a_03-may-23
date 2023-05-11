const mongoose = require('mongoose')
const express = require('express')
const router = express.Router()
const Product = require('../model/product_modal')

//for creating new product
router.post('/create', async (req, res) => {

    const { name, description, price, category } = req.body

    try {
        const item = new Product({ name, description, price, category })
        const newProduct = await item.save()
        return res.status(201)
            .json({
                message: "item added successfully",
                data: newProduct
            })
    } catch (error) {
        return res.status(400)
            .json({
                message: error.message
            })
    }
})

//for getting all products from collection
router.get('/products', async (req, res) => {
    try {
        const data = await Product.find()
        res.status(200)
            .json({
                data
            })
    } catch (error) {
        res.status(400)
            .json({
                message: error.message
            })
    }
})

//for getting specific product from collection
router.get('/products/:id', async (req, res) => {
    const { id } = req.params
    try {
        const data = await Product.find({ _id: id })
        res.status(200)
            .json({
                data
            })
    } catch (error) {
        res.status(404)
            .json({
                message: "no product found with given id"
            })
    }
})

//for updating specific product details
router.put('/edit/:id', async (req, res) => {
    const { id } = req.params
    const { name, description, price, category } = req.body
    //  const data = req.body
    if (!name || !description || !price || !category) {
        return res.status(404)
            .json({
                message: "all the fields are required"
            })
    }

    try {
        const data = await Product.findOne({ _id: id })
        if (!data) {
            return res.status(200).json({
                message: "please give correct id",
            })
        }
        // const updatedProduct = await Product.findByIdAndUpdate(id, data , { new: true, })
        const updatedProduct = await Product.findOneAndUpdate(
            { _id: id },
            { $set: { name: name, description: description, price: price, category: category } },
            { new: true, }
        )
        return res.status(200).json({
            message: "item updated successfully",
            data: updatedProduct

        })
    } catch (error) {
        res.status(404)
            .json({
                message: error.message
            })
    }
})

//for deleting specific product
router.delete('/delete/:id', async (req, res) => {
    const { id } = req.params
    try {
        const deletedItem = await Product.findByIdAndDelete({ _id: id })
        return res.status(200).json({
            deletedData: deletedItem,
            message: "item deleted successfully"
        })

    } catch (error) {
        return res.status(404)
            .json({ message: error.message })
    }
})
module.exports = router