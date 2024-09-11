require('../connection')

const Product = require ('../models/Product')


const createProduct = async() => {

     const laptopone = new Product ({
        name: 'laptop asus',
        description: 'Asus tuf 15 F'
    })

    await laptopone.save();

    
    const laptoptwo = new Product ({
        name: 'laptop alienware',
        description: 'Laptop Gaming Alienware M16, 16", Nvidia GeForce RTX 4050, Intel Core Ultra 7'
    })

    await laptoptwo.save();
}


createProduct();