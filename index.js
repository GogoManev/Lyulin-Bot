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
        name: "Your mom's nudes",
        type: ActivityType.Watching,
        url: 'https://www.youtube.com/watch?v=SA52_udSz34',
    })
})

client.on('messageCreate', message => {
    if(message.content === 'o ne' || message.content === 'O ne' || message.content === 'O NE' || message.content === 'O Ne' || message.content === 'О не' || message.content === 'о не' || message.content === 'О Не' || message.content === 'О НЕ'){
        if(Math.random() > 0.33 && Math.random() < 0.66){
            return message.channel.send('Обичам 09-ки');
        }else if(Math.random() < 0.33){
            return message.channel.send('Има 69% вероятност това да е написано от Стефан');
        }else if(Math.random() >= 0.67){
            return message.channel.send('О не');
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
        if(Math.random() > 0.20 && Math.random() < 0.39){
            return interaction.reply('Ти обичаш ябълки');
        }else if(Math.random() < 0.40 && Math.random() < 0.59){
            return interaction.reply('Абрамович е секси');
        }else if(Math.random() > 0.60 && Math.random() < 0.79){
            return interaction.reply('Стефан, Григоров и Венелин са хващани на 4K ');
        }else if(Math.random() < 0.80){
            return interaction.reply('Манев често прави тъпи грешки');
        }
    }

    if (interaction.commandName === 'hot_milfs') {
        return interaction.reply('No horny!');
    }

    if (interaction.commandName === 'teachers') {
        if(Math.random() > 0.20 && Math.random() < 0.39){
            return interaction.reply('Не отивай при Абрамович или тя ще ти даде 5-минутка.');
        }else if(Math.random() < 0.40 && Math.random() < 0.59){
            return interaction.reply('Не говори относно САЩ или Англия на Френски или той ще те пребие с неговата "Каубойска" шапка!');
        }else if(Math.random() > 0.60 && Math.random() < 0.79){
            return interaction.reply('Владимир Христов обича дефиниции. Като го питаш въпрос, той ще те пита за дефиниция на въпрос');
        }else if(Math.random() < 0.80){
            return interaction.reply('Александър Захариев е тайно Walter White.');
        }
    }
  });  

client.login(process.env.TOKEN);