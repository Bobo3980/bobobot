const mineflayer = require('mineflayer')

const bot = mineflayer.createBot({
  host: 'server ip', // minecraft server ip
  username: 'email', // minecraft username
  password: 'password' // minecraft password, comment out if you want to log into online-mode=false servers
})

bot.on('playerLeft', function(player) {
  bot.chat("bye " + player.username + " IMPS ON TOP");
});

bot.on('login', function() {
  console.log("I logged in.");
  console.log("settings", bot.settings);
});	

// Log errors and kick reasons:
bot.on('kicked', console.log)
bot.on('error', console.log)
	
