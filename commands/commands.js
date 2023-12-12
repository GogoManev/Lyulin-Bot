require('dotenv').config();
const { REST, Routes, ApplicationCommandOptionType, } = require('discord.js');

const commands = [
  {
    name: 'vupros',
    description: 'Питай ме въпрос. Ще отговоря с да или не',
    options: [
      {
        name: 'vuprosut',
        description: 'Napishi vuprosut.',
        type: ApplicationCommandOptionType.String,
        required: true,
      },
    ],
  },
  {
    name: 'facts',
    description: 'Факти!',
  },
  {
    name: 'hot_milfs',
    description: 'Real',
  },
  {
    name: 'teachers',
    description: 'About TUES Teachers',
  },
  {
    name: 'ocenka',
    description: 'Ще те оценя',
  },
  {
    name: 'vic',
    description: 'Ще ти кажа много смешен виц',
  },
];

const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);

(async () => {
  try {
    console.log('Rabotqt li komandite?');

    await rest.put(
      Routes.applicationGuildCommands(
        process.env.CLIENT_ID,
        process.env.GUILD_ID
      ),
      { body: commands }
    );

    console.log('RABOTQT!');
  } catch (error) {
    console.log(`Ili puk ne rabotqt. ${error}`);
  }
})();