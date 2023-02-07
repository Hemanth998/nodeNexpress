const os = require('os');

//getting user info
const user = os.userInfo();
console.log(user);

//get system uptime
const uptime = os.uptime();
console.log(uptime);

//current OS details.

const currentUser = {
    name: os.type(),
    release: os.release(),
    totalmem : os.totalmem(),
    freemem : os.freemem()
}


console.log(currentUser);