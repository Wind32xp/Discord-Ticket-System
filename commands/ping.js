const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Responds with the bot\'s ping!'),
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setColor('#0099ff')
            .setTitle('🏓 Pong!')
            .setDescription(`Bot Latency: ${interaction.client.ws.ping}ms`)
            .setTimestamp()
            .setFooter({ text: interaction.client.user.username, iconURL: interaction.client.user.displayAvatarURL() });

        await interaction.reply({ embeds: [embed] });
    },
};