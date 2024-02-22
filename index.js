//novi idei: commanda sus gifs, smenqne na random izrecheniqta, da otgovarq na poveche sluchaini frazi.
const { Client, GatewayIntentBits, IntentsBitField, ActivityType, ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder } = require('discord.js');
require("dotenv/config")
const randomQuestion = require('./commands/commands');
let i = randomNum(4), j = randomNum(3);

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
        name: "Your mom on OF",
        type: ActivityType.Watching,
        url: 'https://www.youtube.com/watch?v=SA52_udSz34',
    })
})

client.on('messageCreate', message => {
    if(message.content === 'o ne' || message.content === 'O ne' || message.content === 'O NE' || message.content === 'O Ne' || message.content === 'О не' || message.content === 'о не' || message.content === 'О Не' || message.content === 'О НЕ'){
        i++;
        if(i == 1){
            return message.channel.send('Обичам 010-ки');
        }else if(i == 2){
            return message.channel.send('Има 69% вероятност това да е написано от Стефан');
        }else if(i == 3){
            return message.channel.send('О не');
        }else{
            i = 0;
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
            return interaction.reply(vupros + '?' + '\n' + "- Да");
          }else if(Math.random() < 0.34 && Math.random() < 0.66){
            return interaction.reply(vupros + '?' + '\n' + "- Не");
          }else{
            return interaction.reply(vupros + '?' + '\n' + "- Може би");
          };
    }
  
    if (interaction.commandName === 'facts') {
        j++
        if(j == 1){
            return interaction.reply('Ти ядеш ябълки');
        }else if(j == 2){
            return interaction.reply('Доминантата на Октомски - доказва, че човек може да се фокусира само върху едно нещо!');
        }else if(j == 3){
            return interaction.reply('Този бот е написан на JavaScript');
        }else if(j == 4){
            return interaction.reply('Ninja е починал от ligma.');
        }else{
            j = 0;
        }
        
    }

    if (interaction.commandName === 'ocenka') {
        if(Math.random() > 0.20 && Math.random() < 0.39){
            return interaction.reply('<:2_:1050125937334816900>');
        }else if(Math.random() < 0.40 && Math.random() < 0.59){
            return interaction.reply('<:3_:1050125875624038400>');
        }else if(Math.random() > 0.60 && Math.random() < 0.79){
            return interaction.reply('<:4_:1059530297605111928>');
        }else if(Math.random() < 0.80){
            return interaction.reply('<:6_:1050877190289498172>');
        }
    }

    if (interaction.commandName === 'hot_milfs') {
        return interaction.reply('https://i.imgflip.com/7i4kc6.jpg');
    }

    if (interaction.commandName === 'vic') {
        return interaction.reply('Знаеш ли какво е казала блондинката, като е видяла бананова кора??? \n - Пак ще падна аз 🤣🤣🤣🤣');
    }

    if (interaction.commandName === 'teachers') {
        if(Math.random() > 0.20 && Math.random() < 0.39){
            return interaction.reply('Не отивай при Ивац или той ще ти даде 5-минутка.');
        }else if(Math.random() < 0.40 && Math.random() < 0.59){
            return interaction.reply('Не говори относно САЩ или Англия на Френски или той ще те пребие с неговата "Каубойска" шапка!');
        }else if(Math.random() > 0.60 && Math.random() < 0.79){
            return interaction.reply('Владимир Христов обича дефиниции (и блондинки).');
        }else if(Math.random() < 0.80){
            return interaction.reply('Александър Захариев е Walter White.');
        }
    }
  });  

function randomNum(n) {
    return Math.floor(Math.random() * n);
}

client.login(process.env.TOKEN);
