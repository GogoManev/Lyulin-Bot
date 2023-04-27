const { Client, GatewayIntentBits, IntentsBitField, ActivityType, ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder } = require('discord.js');
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
        name: "s maika ti",
        type: ActivityType.Playing,
        url: 'https://www.youtube.com/watch?v=SA52_udSz34',
    })
})

client.on('messageCreate', message => {
    if(message.content === 'o ne' || message.content === 'O ne' || message.content === 'О не' || message.content === 'о не'){
        if(Math.random() > 0.33 && Math.random() < 0.66){
            return message.channel.send('Obicham 8-godishni deca');
        }else if(Math.random() < 0.33){
            return message.channel.send('Ima 69% veroqtnost tova da e kazano ot Stefan');
        }else if(Math.random() >= 0.67){
            return message.channel.send('O ne');
        }
    }
})

client.on('messageCreate', message => {
    if(message.content === 'smash or pass' || message.content === 'Smash or pass' || message.content === 'Smash Or pass' || message.content === 'Smash or Pass'){
        if(Math.random() > 0.50){
            return message.channel.send("Smash");
          }else{
            return message.channel.send("Pass");
          };
    }
})

client.on('messageCreate', message => {
    if(message.content === 'Lyulin-Bot e tup'){
        message.delete('Lyulin-Bot e tup');
    }
})

client.on('interactionCreate', async (interaction) => {
    if (!interaction.isChatInputCommand()) return;
  
    if (interaction.commandName === 'vupros') {
        const vupros = interaction.options.get('vuprosut').value;

        if(Math.random() > 0.33){
            return interaction.reply(vupros + '?' + '\n' + "- Da");
          }else if(Math.random() < 0.34 && Math.random() < 0.66){
            return interaction.reply(vupros + '?' + '\n' + "- Ne");
          }else{
            return interaction.reply(vupros + '?' + '\n' + "- Moje bi");
          };
    }
  
    if (interaction.commandName === 'facts') {
        if(Math.random() > 0.20 && Math.random() < 0.39){
            return interaction.reply('Ti si gei');
        }else if(Math.random() < 0.40 && Math.random() < 0.59){
            return interaction.reply('Frenski e seksi');
        }else if(Math.random() > 0.60 && Math.random() < 0.79){
            return interaction.reply('Stefan i Grigorov sa hvashtani na 4K');
        }else if(Math.random() < 0.80){
            return interaction.reply('Manev chesto pravi tupi greshki');
        }
    }

    if (interaction.commandName === 'hot_milfs') {
        return interaction.reply('No horny!');
    }
  });  

client.login(process.env.TOKEN);