require('./connection');
const Product = require('./models/Product');

const saveProduct = async () => {
    try {
        const product = new Product({
            name: 'laptop',
            description: 'lenovo thinkpad x1 carbon 6th generation',
            price: 1300.99
        });

        const savedProduct = await product.save();
        console.log('Producto guardado:', savedProduct);
    } catch (err) {
        console.error('Error al guardar el producto:', err);
    }
};

saveProduct();
