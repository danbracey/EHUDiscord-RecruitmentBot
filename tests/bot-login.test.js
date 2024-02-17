const {Client, GatewayIntentBits} = require('discord.js');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildVoiceStates
    ],
});

test('bot client can login to Discord', () => {
    expect(() => client.login(process.env.TOKEN)).not.toThrow();
});

