const { Message } = require('discord.js')

const help = {
    name:"ping",
    aliases: []
}

/**
 * @param {object} obj
 * @param {Message} obj.message
 */

const run = async ({message}) => {
    await message.channel.send(`**Pong! in ` + String(new Date().getTime() - message.createdTimestamp ) + ` ms!**`)
}

module.exports.run = run

module.exports.help = help