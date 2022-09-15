const {Cart , Product, User} = require('./models')
const Sequelize = require('sequelize');

const findAllProducts = async () => {
    try {
        const products = await Cart.findAll({
            include: [{
                model: Product
            }]
        });
        console.log("  Cart with their associated products:", JSON.stringify(products, null, 4));
    }
    catch (error){
        console.log("Association failed...");
    }
}

const run = async () => {
    await findAllProducts()
    await process.exit()
}

run()