import {Client, GatewayIntentBits} from 'discord.js';

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildVoiceStates
    ],
});

client.on('ready', () => {
    console.log('EHU Computer Science Bot')
    console.log('This bot is a member of the following servers:')
    const Guilds = client.guilds.cache.map(guild => "Guild ID: " + guild.id + ". Guild name: " + guild.name);
    console.log(Guilds);
})

client.on('interactionCreate', async (interaction) => {
    const { commandName } = interaction;

    if (interaction.isCommand()) {
        if(commandName === 'apply') {
            if (!interaction.guild.members.cache.get(interaction.user.id).roles.cache.some(role => role.color === 15277667)) {
                const embed = new MessageEmbed()
                    .setDescription("Please select your year group before using this command. You can set this via the /year command as this determines the modules available to you.")
                    .setColor("RED");
                return interaction.reply({ embeds: [embed]});
            }

        }
    }
});


client.login(process.env.TOKEN)