
const discord = require('discord.js-selfbot');
const Eris = require("eris");
const keepAlive = require("./server");
keepAlive();
//get rid of const keepAlive = require("./server"); and keepAlive(); from code if your not using repl and remove server.js if your not using repl. read README.md for more info on how to use this.
const bot = new discord.Client();
const child = require("child_process");
var owner = "877309926081429514";
var enabled = [];

var comd = "";
var spamming = false;


bot.on('ready', ()=>{



bot.on('message', message =>{
    if (message.channel.type === 'text'){ 
  
     console.log(message.author.username,"sent ",message.content,"in",message.channel.name,"server message was sent in:",message.guild.id)
     
    }

});








})
  bot.login(process.env.token)
//change this to bot.login to bot.login("your token goes here replace this with your token")
