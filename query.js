const { User, Cart } = require('./models')
const Sequelize = require('sequelize');
const Op = Sequelize.Op

const findCartWithUser = async () => {
    try {
        const user = await User.findAll({
            include: [{
                model: Cart
            }]
        });
        console.log("All tasks with their associated user:", JSON.stringify(user, null, 4));

    } catch (error) {
        console.log("Association failed...");
    }
}


const run = async () => {
    await findCartWithUser()
    await process.exit()
}

run()