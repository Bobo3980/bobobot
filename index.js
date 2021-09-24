const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("IP: ", function(ip) {
    rl.question("Email: ", function(email) {
	rl.question("Password: ", function(password){ 
        console.log('Wait...')
		
		const mineflayer = require('mineflayer')

const bot = mineflayer.createBot({
  host: `${ip}`, // minecraft server ip
  username: `${email}`, // minecraft username
  password: `${password}` // minecraft password, comment out if you want to log into online-mode=false servers

})


bot.on('playerLeft', function(player) {
  bot.chat("bye " + player.username + " IMPERIALS ON TOP");
});

bot.on('login', function() {
  console.log("I logged into " + `${ip}` + '.');
  
});	

// Log errors and kick reasons:
bot.on('kicked', console.log)
bot.on('error', console.log)

        
    });
   });
});
 
