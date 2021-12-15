/* Copyright (c) Yusuf Usta 
Licenced under GNU
Copying strictly proibited!
*/

const { Sequelize } = require('sequelize');
const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

// special functionalities
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

DATABASE_URL = process.env.DATABASE_URL === undefined ? './whatsasena.db' : process.env.DATABASE_URL;
DEBUG = process.env.DEBUG === undefined ? false : convertToBool(process.env.DEBUG);

module.exports = {
    VERSION: 'v3.0.0',
    CHANNEL: 'undefined',
    SESSION: process.env.BAILEYS_SESSION === undefined ? '' : process.env.BAILEYS_SESSION,
    ANTILINK: process.env.ANTILINK === undefined ? 'false' : process.env.ANTILINK,
    CAP: process.env.ALL_CAPTION === undefined ? '*MADE BY WHATSBOT*' : process.env.ALL_CAPTION,
    ANTI_KICK: process.env.ANTI_KICK === undefined ? 'false' : process.env.ANTI_KICK,
    CALL_BLOCK: process.env.CALL_BLOCK === undefined ? 'false' : process.env.CALL_BLOCK,
    GANSTYLE: process.env.GAN_IMAGE === undefined ? 'https://i.hizliresim.com/loUtAb.jpg' : process.env.GAN_IMAGE,
    ALIVEMSG: process.env.ALIVE_MESSAGE === undefined ? 'default' : process.env.ALIVE_MESSAGE,
    TAGR: process.env.TAG_REPLY === undefined ? '0@s.whatsapp.net' : process.env.TAG_REPLY,
    NUMBER: process.env.NUMBER === undefined ? '91000000' : process.env.NUMBER,
    BLOCKCHAT: process.env.BLOCK_CHAT === undefined ? false : process.env.BLOCK_CHAT,
    OWNER: process.env.OWNER_NAME === undefined ? 'Raashii' : process.env.OWNER_NAME,
    NAME: process.env.BOT_NAME === undefined ? 'PUBLIC BOT' : process.env.BOT_NAME,
    SUPPORT: process.env.ASENA === undefined ? '919074309534-1632403322' : process.env.ASENA,
    JID: process.env.YOUR_JID === undefined ? '0@s.whatsapp.net' : process.env.YOUR_JID,
    LOGO: process.env.BOT_LOGO === undefined ? '' : process.env.BOT_LOGO,
    AUTOFAKE: process.env.AUTO_FAKE === undefined ? 'false' : process.env.AUTO_FAKE,
    AFKMSG: process.env.AFK_MESSAGE === undefined ? 'default' : process.env.AFK_MESSAGE,
    HANDLERS: process.env.HANDLERS === undefined ? '^[.!;]' : process.env.HANDLERS,
    SEND_READ: process.env.SEND_READ === undefined ? false : convertToBool(process.env.SEND_READ),
    BRANCH: 'master',
    HEROKU: {
        HEROKU: process.env.HEROKU === undefined ? false : convertToBool(process.env.HEROKU),
        API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
        APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
    },
    DATABASE_URL: DATABASE_URL,
    DATABASE: DATABASE_URL === './whatsasena.db' ? new Sequelize({ dialect: "sqlite", storage: DATABASE_URL, logging: DEBUG }) : new Sequelize(DATABASE_URL, { dialectOptions: { ssl: { require: true, rejectUnauthorized: false } }, logging: DEBUG }),
    RBG_API_KEY: process.env.REMOVE_BG_API_KEY === undefined ? false : process.env.REMOVE_BG_API_KEY,
    NO_ONLINE: process.env.NO_ONLINE === undefined ? true : convertToBool(process.env.NO_ONLINE),
    SUDO: process.env.SUDO === undefined ? '' : process.env.SUDO,
    DEBUG: DEBUG,
    COFFEEHOUSE_API_KEY: process.env.COFFEEHOUSE_API_KEY === undefined ? false : process.env.COFFEEHOUSE_API_KEY,
    WITAI_API: "TEYMELA6DMC4XB5YM3SPTTQWUUIBKURG",
    SUPPORT2: "905511384572-1617736751",
    SUPPORT3: "905511384572-1621015274"
};
