require('../connection')

const User = require ('../models/User')

async function getUser (){


      const user = await User.findOne({username: 'Inmart'});
      console.log(user)
    
    }


getUser();