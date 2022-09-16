const {Cart , Product, User} = require('./models')
const Sequelize = require('sequelize');
const productCart = require('./models')
const findAllProducts = async () => {
    try {
        const products = await Product.findAll({
            include: [
                {
                    model: Cart,
                },

            ],
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