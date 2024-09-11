require('../connection')

const User = require ('../models/User')

const someFunction = async ()=> {
        const user = await User.findOne({username: 'Inmart'});
        console.log(user)
        user.password= 'minuevacontraseña';
        user.save();
}

const otherFunction = async () => {
   const user= await User.findOneAndUpdate({username: 'Jairo'}, {name: 'Jairo Alan'}
    ,{new: true})
    console.log(user)
}

async function updateUsers (){


      const user = await User.updateOne({username: 'Inmart'},
        {
            password: 'contraseñasegura'
        }
      );

      console.log(user)
    
    }


otherFunction();