const { Client, GatewayIntentBits, IntentsBitField, ActivityType } = require('discord.js');
require("dotenv/config")
const randomQuestion = require('./commands/commands');

const client = new Client({
     intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ]
});

client.on("ready", () => {
    console.log("BOT IS ONLINE");

    client.user.setActivity({
        name: "Andy Studio",
        type: ActivityType.Watching,
        url: 'https://www.youtube.com/watch?v=SA52_udSz34',


    })
})

client.on('messageCreate', message => {
    if(message.content === 'o' + ' ' + 'ne'){
        message.reply("Obicham 8-godishni deca")
    }
})

client.on('messageCreate', message => {
    if(message.content === 'smash' + ' or' + ' pass'){
        message.reply("pass");
    }
})

client.on('interactionCreate', (interaction) => {
    if (!interaction.isChatInputCommand()) return;
  
    if (interaction.commandName === 'vupros') {
        const vupros = interaction.options.get("vupros");

        if(Math.random() > 0.50){
            return interaction.reply("Da");
          }else{
            return interaction.reply("Ne");
          };
    }
  
    if (interaction.commandName === 'facts') {
        if(Math.random() > 0.33 && Math.random() < 0.66){
            return interaction.reply('Ti si gei');
        }else if(Math.random() < 0.33){
            return interaction.reply('Frenski e seksi');
        }else if(Math.random() >= 0.67){
            return interaction.reply('2+2 = 5');
        }
      
    }
  });

client.login(process.env.TOKEN);