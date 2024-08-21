//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://princehen623:Chijioke@1973@cluster0.czvd9jw.mongodb.net/
";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Europe/London";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "447721696132";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/a22200a780671e0e32383.jpg,https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "true";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYU1LQ2JIWHZiWVhESFRxay9na3pCang4OGh4TVk4OUFCcENtM0k3V3BsOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU1h4YlZSUE11aHRUczN0c25obXFPUXJOZkdxM1l2a1F5WG1PdTh4ZjVTMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTUGRxVUdIbktUQjlNaFlMWlF5S25jTmQ1ODRBazRFd3FnclVjZitHbkdZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBOTdhQmNoSDltTEFiN21vUCtGcmZXeVZFakdtblR4ZEVFOTUvdEFwSXl3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitQNFJQa0VlcTErYThkYmh3bC9nRTRSaHNNcE1EaU5XNFFDeVhZVWluWHc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InU4QjFPcnhYVUJiaTZyQkVxYVVod3lNWDlCb2tvL2h0RWVnOFNUdUw0bWM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMkcxUnNEcUhhTW0wSVNhRjJQdUlGMUZ2c0MzR1oya1hSazJmbktjbFYwOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicUNGbEVhRUliMDZMTkRWWjNtbTZHa1czTGlSay9iblRFc3pwTXg4UGltMD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9sb1B0ZFhJd09yWmZWeEwwMkJ6SGxmcWdlOFdJRzZHUS93OFpJc2ZTV1Z2elpsWkJqUDhHOTJaL0tMZmtmMDd4dTRlRlJQZ2N0T05mWEJvMGNZSml3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTg2LCJhZHZTZWNyZXRLZXkiOiJMSGM5aDZSNTMzS2t4d0Faa2VTSUhaVU1UVHBETm5MNlpTRDg3Ym83VTZZPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjQ0NzcyMTY5NjEzMkBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI5REExQTFCNzVDMjlDMDg5RjA3MDc2ODYxRjVDMUQwNSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzIzNjU2MDAyfSx7ImtleSI6eyJyZW1vdGVKaWQiOiI0NDc3MjE2OTYxMzJAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiOTJFQjMwQzZDOTJBQ0MzNkNEMDBBRkVBRDk3ODRFQzcifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyMzY1NjAwMn1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoienpGdk1hQ0pScDZUam1PYUFNWkd2dyIsInBob25lSWQiOiJhZTMxNmE2OC1kYTg1LTQ0OTMtODNhMi0zNGM2MmJiODQwMjgiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieXQ2SW42Q1VGMHphSU9WSXdIMG5yK1VpczRFPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkluY2JZeU1iWGkrekpsblFTZTN0Mmw5ZVhFMD0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJIRlkzMzFIVyIsIm1lIjp7ImlkIjoiNDQ3NzIxNjk2MTMyOjQ4QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IuqngeKYhuKYrFDQr9CH0JlDM+KYrOKYhuqngiJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTnkvbXU4Q0VMSE84N1VHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiMXNSNXRxU1lSdjFKalBjalV5UzFSVFVUVlhVenA1Q0pGbERTNXVDT2pHND0iLCJhY2NvdW50U2lnbmF0dXJlIjoiaEpaRGlhR1FKdWE3K3N1NExPcnZmV0xWWjR5NXFpd0xGUVVYWW9EV0VpbXZiSUpFSURxNU5OWFRndEhGcDlkNUl2NSsrU3FDcmVzZ1hLelQvNVM3QWc9PSIsImRldmljZVNpZ25hdHVyZSI6IjBqeEVneHJUaVRFWTI4R05qUVFsWmdmdElNMWlCZFNUK3BKaE9weWxuU2FYWDZnajNNNDBmVUtKbTAzRS93U3RraEpvOHcxeE1TK1hpWk5oWE5IQ2hnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiNDQ3NzIxNjk2MTMyOjQ4QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmRiRWViYWttRWI5U1l6M0kxTWt0VVUxRTFWMU02ZVFpUlpRMHViZ2pveHUifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjM2NTU5OTksIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBSTRDIn0="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ANITA-V2™`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "QUEEN_ANITA-V2",
  ownername: process.env.OWNER_NAME || "PRINCE",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-gIpMOKyQiefo6aGhbZDbOl1yjWWnrkmYs2RUDW-vBhT3BlbkFJ3N6I2SAw6Ut0u4jwa3kkWAvuWJawTxoQ1uIGphefIA",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "sk_d0ccfb9dc6ff4526b3d578177a41cbad3ed4133758e1cea7",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
