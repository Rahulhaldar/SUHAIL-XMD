const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "ture"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_04_51_12_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTAyLFxuICAgICAgICA4MyxcbiAgICAgICAgNzEsXG4gICAgICAgIDM0LFxuICAgICAgICA2NCxcbiAgICAgICAgNzQsXG4gICAgICAgIDExOCxcbiAgICAgICAgOTcsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTYxLFxuICAgICAgICAyMjIsXG4gICAgICAgIDE3MSxcbiAgICAgICAgODEsXG4gICAgICAgIDIxNixcbiAgICAgICAgNSxcbiAgICAgICAgNTcsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNTYsXG4gICAgICAgIDgwLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjAsXG4gICAgICAgIDYyLFxuICAgICAgICAyMDAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNDEsXG4gICAgICAgIDcxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4MCxcbiAgICAgICAgNjksXG4gICAgICAgIDg2LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNjEsXG4gICAgICAgIDQ1LFxuICAgICAgICA3OSxcbiAgICAgICAgNTYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMjAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNDEsXG4gICAgICAgIDk5LFxuICAgICAgICAxNzgsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNTcsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNDcsXG4gICAgICAgIDMwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDg0LFxuICAgICAgICAxMTQsXG4gICAgICAgIDY1LFxuICAgICAgICAyMTksXG4gICAgICAgIDE4NixcbiAgICAgICAgMjIxLFxuICAgICAgICA1MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMjAyLFxuICAgICAgICAzNixcbiAgICAgICAgNzYsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNDksXG4gICAgICAgIDc2LFxuICAgICAgICAyMzEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTMsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNyxcbiAgICAgICAgNTgsXG4gICAgICAgIDk2LFxuICAgICAgICA1MSxcbiAgICAgICAgMjA1LFxuICAgICAgICA3NSxcbiAgICAgICAgODgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjgsXG4gICAgICAgIDUsXG4gICAgICAgIDEwLFxuICAgICAgICA2MyxcbiAgICAgICAgMjUsXG4gICAgICAgIDM3LFxuICAgICAgICAxNjUsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMixcbiAgICAgICAgMTAsXG4gICAgICAgIDc2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNSxcbiAgICAgICAgNyxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMjksXG4gICAgICAgIDE5LFxuICAgICAgICAyNyxcbiAgICAgICAgNjQsXG4gICAgICAgIDI1LFxuICAgICAgICA0MCxcbiAgICAgICAgNDcsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNDYsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNjUsXG4gICAgICAgIDEwOSxcbiAgICAgICAgODIsXG4gICAgICAgIDgwLFxuICAgICAgICAxODgsXG4gICAgICAgIDczLFxuICAgICAgICA2NSxcbiAgICAgICAgMTEzLFxuICAgICAgICAyNDMsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxODIsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMTUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNTcsXG4gICAgICAgIDk0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDAsXG4gICAgICAgIDYsXG4gICAgICAgIDEsXG4gICAgICAgIDcsXG4gICAgICAgIDMwLFxuICAgICAgICAzNixcbiAgICAgICAgMTk4LFxuICAgICAgICAxODcsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMTksXG4gICAgICAgIDIxNSxcbiAgICAgICAgNzYsXG4gICAgICAgIDkzLFxuICAgICAgICAyMzUsXG4gICAgICAgIDc3LFxuICAgICAgICAyMTMsXG4gICAgICAgIDYzLFxuICAgICAgICAxMjgsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjIsXG4gICAgICAgIDExNyxcbiAgICAgICAgOSxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMDUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNzUsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjAwLFxuICAgICAgICA2NyxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMjVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzAsXG4gICAgICAgIDEyLFxuICAgICAgICAxMzksXG4gICAgICAgIDM4LFxuICAgICAgICAxOTcsXG4gICAgICAgIDUwLFxuICAgICAgICAyMDMsXG4gICAgICAgIDU3LFxuICAgICAgICAyMzksXG4gICAgICAgIDU4LFxuICAgICAgICA3OSxcbiAgICAgICAgOTQsXG4gICAgICAgIDE5NyxcbiAgICAgICAgODksXG4gICAgICAgIDU3LFxuICAgICAgICAxMzUsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjE3LFxuICAgICAgICA1OCxcbiAgICAgICAgOTYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTM3LFxuICAgICAgICA4NixcbiAgICAgICAgNTMsXG4gICAgICAgIDE2LFxuICAgICAgICAxODAsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNzUsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTA4LFxuICAgICAgICA5OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDY5XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDY4LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDgzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTUsXG4gICAgICAgIDc3LFxuICAgICAgICA1LFxuICAgICAgICA3NSxcbiAgICAgICAgNDQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMzAsXG4gICAgICAgIDMzLFxuICAgICAgICAyMjMsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTksXG4gICAgICAgIDIzMixcbiAgICAgICAgMTksXG4gICAgICAgIDIxOCxcbiAgICAgICAgOTMsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTI1LFxuICAgICAgICA0NixcbiAgICAgICAgMTc2LFxuICAgICAgICAxNTksXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjAsXG4gICAgICAgIDgwLFxuICAgICAgICA2OCxcbiAgICAgICAgNTQsXG4gICAgICAgIDcwLFxuICAgICAgICA4LFxuICAgICAgICA3NyxcbiAgICAgICAgMTU4LFxuICAgICAgICAyLFxuICAgICAgICA0NixcbiAgICAgICAgMTI3LFxuICAgICAgICAxMTgsXG4gICAgICAgIDU4LFxuICAgICAgICAxOTIsXG4gICAgICAgIDYzLFxuICAgICAgICAxNDgsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTUsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTI0LFxuICAgICAgICA4NCxcbiAgICAgICAgMjMxLFxuICAgICAgICA4LFxuICAgICAgICAyMSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNCxcbiAgICAgICAgMTYzLFxuICAgICAgICA5MSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNTIsXG4gICAgICAgIDEsXG4gICAgICAgIDE0LFxuICAgICAgICA0NyxcbiAgICAgICAgMTk1LFxuICAgICAgICAxODAsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMzUsXG4gICAgICAgIDI1LFxuICAgICAgICA4MixcbiAgICAgICAgNTUsXG4gICAgICAgIDEzOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjYsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwid3ZDejNobldrNlAwUGtEMmFUZFVpVHBUaWpUZVB5dGR1WlpzVkV3KzZROD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MTYwMzMzNTI0MDBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjNDRjhBMkE5NjRDNUUxMzJENzk0NUZFODJERDZEOTlFXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczMzAyODY2NVxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkxNjAzMzM1MjQwMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMjIwNzUwOUJBMUVGMkMxMUNFODQ1QjcyRDRCOTM2RjFcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzMzMDI4NjY2XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIm15TkpRcFlmUmJPOWxPcmZlX2xEY0FcIixcbiAgXCJwaG9uZUlkXCI6IFwiYWFhYzQ3NTEtZDkwMS00YjFmLTkzY2EtZjg1MzRlYWEwNTU5XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDU1LFxuICAgICAgMjA0LFxuICAgICAgMjIxLFxuICAgICAgNjMsXG4gICAgICAyMCxcbiAgICAgIDEwNCxcbiAgICAgIDM0LFxuICAgICAgNjgsXG4gICAgICA2NyxcbiAgICAgIDMzLFxuICAgICAgOCxcbiAgICAgIDE2MSxcbiAgICAgIDE2MSxcbiAgICAgIDg5LFxuICAgICAgMTIyLFxuICAgICAgMTY0LFxuICAgICAgMjM1LFxuICAgICAgMTE3LFxuICAgICAgMTAyLFxuICAgICAgNzNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTA4LFxuICAgICAgMTcsXG4gICAgICAxNTUsXG4gICAgICAxNTgsXG4gICAgICAxNTgsXG4gICAgICAxNjEsXG4gICAgICAzNyxcbiAgICAgIDE3NSxcbiAgICAgIDgwLFxuICAgICAgMTI2LFxuICAgICAgMTE3LFxuICAgICAgODgsXG4gICAgICAxODgsXG4gICAgICAzMCxcbiAgICAgIDE3MCxcbiAgICAgIDkxLFxuICAgICAgMTU1LFxuICAgICAgNDEsXG4gICAgICA3MSxcbiAgICAgIDE0NlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJXVzYxRkxSWlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTE2MDMzMzUyNDAwOjIwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNTQ1NzYzMDkyNTIxOTM6MjBAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiTcqALlLhtIDKnOG0nMqfIPCfmI5cIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQZWhyYjRCRUxEV3I3b0dHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlRISG03Rlk4UXRMSjR3ZFdLVitJWG9Oa3lQbnd2RmNlV3NRS1NVaWV2Zzg9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiaXF5b1VwTnQzRTM1bnBtaVVKdy9KdHdCbjdubVZPdjFPckFUdUpVYU9hT1grbDA0eDA2L2RTMlRyeGx4YkZWb1dlMjYrR01BZGZWdHdRL3FaUmNwRGc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiSFRMM25BZ0QyckRzSi9rZjlkdHZ2MTVJdVppeUJOZlREdlhlUU5JQ05rUTZXbGNra0w5NTM2SmNUQ2dTVmxWNFBaTUNVZGR0SmZjYUhLSW0rVnZlakE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTE2MDMzMzUyNDAwOjIwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgNyxcbiAgICAgICAgICA4NixcbiAgICAgICAgICA0MSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMzAyODY2MCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUpUeFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSlR4Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiTWF0VitJZ09iMzdmRVYrR2dzL3pDZmN3NCtoZUd2ajJEalJyNVRENmZzUT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjozOTkyMDA1MDMsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTczMjM2OTQ4NTc1M1wifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "Mr.Rahul😎",
  packname: process.env.PACK_NAME || "Mr.Pika",
  botname : process.env.BOT_NAME  || "Pika-XMD",
  ownername:process.env.OWNER_NAME|| "Mr.Rahul-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
