exports.run = async (client, message, args, level) => {
    await message.channel.send(new MessageAttachment(
        await client.idiotAPI.achievement(message.author.displayAvatarURL(), args.join(" "))
    ));
}