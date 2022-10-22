const ProductModel = require('../models/product')

const getAll = (request, h) => {

    return 'Hello Programador!';
};

const save = async (req, h) => {
    const{name, price} = req.payload;

    const product = new ProductModel;
    product.name = name;
    product.price = price;
    await product.save();

    return h.response(product).code(201);
    
};

module.exports = {
    getAll,
    save
};