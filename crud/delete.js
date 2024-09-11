require ('../connection')

const Product = require ('../models/Product')

const someFunction = async () => {
   //const results = await Product.deleteMany ({name: 'keyboard'})
   //const result = await Product.deleteOne({name: 'laptop'})
   //const result = await Product.findOneAndDelete({name: 'laptop'})
   const result = await Product.findByIdAndDelete('')
   console.log(result)
}

someFunction();