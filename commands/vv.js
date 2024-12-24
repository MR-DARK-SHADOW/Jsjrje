const { cmd, commands } = require('../plugin')
const config = require('../config')
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson, jsonformat} = require('../library/functions')



              

cmd({
    pattern: "antivo",
    react: "⚙️",
    desc: "To ViewOnceMessage",
    category: "convert",
    use: '.vv',
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{            
  
const quot = mek.msg.contextInfo.quotedMessage.viewOnceMessageV2;
if(quot)
{
if(quot.message.imageMessage) 
{ console.log("Quot Entered") 
   let cap =quot.message.imageMessage.caption;
   let anu = await conn.downloadAndSaveMediaMessage(quot.message.imageMessage)
   return conn.sendMessage(from,{image:{url : anu},caption : cap })
}
if(quot.message.videoMessage) 
{
   let cap =quot.message.videoMessage.caption;
   let anu = await conn.downloadAndSaveMediaMessage(quot.message.videoMessage)
   return conn.sendMessage(from,{video:{url : anu},caption : cap })
}
 
}
//else citel.reply("```This is Not A ViewOnce Message```") 
       
       
if(!mek.quoted) return mek.reply("```Uh Please Reply A ViewOnce Message```")           
if(mek.quoted.mtype === "viewOnceMessage")
{ console.log("ViewOnce Entered") 
 if(mek.quoted.message.imageMessage )
{ 
  let cap = mek.quoted.message.imageMessage.caption + "*ANTI VIEW ONCE ❌*\n\n_© 𝙿𝙾𝚆𝙴𝚁𝙳 𝙱𝚈 𝙳𝙰𝚁𝙺-𝚂𝙷𝙰𝙳𝙾𝚆_";
  let anu = await conn.downloadAndSaveMediaMessage(mek.quoted.message.imageMessage)
  conn.sendMessage(from,{image:{url : anu},caption : cap })
}
else if(mek.quoted.message.videoMessage )
{
  let cap =mek.quoted.message.videoMessage.caption;
  let anu = await conn.downloadAndSaveMediaMessage(mek.quoted.message.videoMessage)
  conn.sendMessage(from,{video:{url : anu},caption : cap })
}

}
else return mek.reply("```This is Not A ViewOnce Message```")
await conn.sendMessage(from, { react: { text: `✅`, key: mek.key }}) 
} catch (e) {
reply('*Error !!*')
console.log(e)
}
})
