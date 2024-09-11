require('./connection'); // Import the connection file
const User = require('./models/User'); // Import the User model

async function createUsers() {
    const userOne = new User({
        username: 'Ann',
        password: '12345'
    });

    await userOne.save();
    
    const userTwo = new User({
        username: 'Jairo',
        password: 'securepassword'
    });

    await userTwo.save();
    
}

createUsers();
