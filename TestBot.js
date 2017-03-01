const token = 'Mjg1NjcyNzQyNjE4MDA1NTA1.C5VnvQ.WWB9vcbser1wU37LCqtGxws49wk';
const Discord = require('discord.js');
const Bot = new Discord.Client();

Bot.login(token);

var General;

Bot.on('ready', function()
{
	console.log("TestBot is online!");
	General = Bot.guilds.find('name', 'TestServer').channels.find('name', 'general');
	console.log(General);
});

Bot.on('guildMemberAdd', function(member)
{
	General.sendMessage('Welcome to the server, ' + member + '!');
});

var Bad_Words = ["here", "are", "some", "bad", "words"];
	
Bot.on('message', function(message)
{
	for(var i = 0; i < Bad_Words.length; i++)
	{
		if(message.content.toLowerCase().includes(Bad_Words[i]))
		{
			message.delete();
			message.reply('play nice. No inappropriate language!');
			break;
		}
	}
	
	if(message.content.includes('dog') && message.author.username !== "TestBot")
	{
		message.channel.send(':dog:');
	}
});

Bot.on('messageUpdate', function(oldMessage, newMessage)
{
	for(var i = 0; i < Bad_Words.length; i++)
	{
		if(newMessage.content.includes(Bad_Words[i]))
		{
			newMessage.delete();
			newMessage.reply('play nice. No inappropriate language!');
			break;
		}
	}
});
