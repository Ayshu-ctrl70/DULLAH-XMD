const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('set.env'))
    require('dotenv').config({ path: __dirname + '/set.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'DULLAH-MD;;;H4sIAAAAAAAAA61USY7jRhD8ilFXCS1u4iKgAZNsSqIoido3w4cSWaRKXIoqFrX0QDf7bNg+DDBAA/YTfPQTfBnDX/AL+gkGpe6ZhpdxGzBPxapEZkRmZLwBKcE5ctAJNN6AjOI9ZKg8slOGQAMYRRAgCqrAhwyCBlDtZX+Q7SkO1q1D2Fot+8ZmM4v00bh+kDsT3p5OcTecSkNRvQXnKsiKdYy9TyRk9anicSOvspHbd51tQUg00f3FlhTzEVbVnlGTkqkYzlMzvAXnMiPEFKehlW1QgiiMHXQaQExfB9+2j0p7Vezao0Kmx1PSMaHEjU0RFvp0usx6q37XMJsWWkfkdfCjvknWzkEdOalrFeMJ6WSjZD7zxFFLX8zF3iSbrpa2O9nMrSv8HIcp8m0fpQyz06v7Dl2NTn2HdzNlGXfyTiFyfrH19pLnr8Z1d7uCqy6yTbGY914HvHlYD5XJLOBP/ixeh3mAbVZRHTcj+6yP0SKQvCOcS3WGo5fAB/RZK9F/6Xvemh2ie7OYRivfSJO9ORP3nSgkBjrKeDwbOgt1tRP7Y5IcXgdf0lxJ33nIXoiSuruzHY0E7uBuNO+LOrfv4nniNOVWbRIcyUf4kBX0Uyg7HXfm7TGEYj5edEgqznne7a/uV1varTHjCKeZc8TRsF/jFI85ka14y1hVR0dYtNceWTNO4ocCl27mdLdrVYR8uyuM4e2FUYROtg8a/LkKKApxzihkmKSXO6EKoL8fI48idukuQD1rXYSjfFkzDE0f7lczRdv0GJHQrK6EFkatTGdNOzsm5BZUQUaJh/Ic+W2cM0JPPZTnMEQ5aHxxGVTJmaKEMNTBPmgATVLUuljnRUX4PL85bCDLYZbdpIiBKggoSXoINBgtUBVc4i1VM0SZMxRRtOoWL6hKnRclvinpmqUZuloSTK41JzhBOYNJBhq8ImkKX9cU7Vz9X2A0BUnTdOVOE3hOEjVZkJucrpuyot6JctNSPg1Dlc9fVkGKjuwq4rL1Il8FAaY5m6ZFFhPoPyv8+RF6HilSNj6lnlkeEAWNF9eIMZyGeUmsSCH1NniPzJLHFfeHYSOK/GcqTwZmEr/U4ELQXLXpLEEJvczz5840RPWvzUlhGQweH94+PD58+93jw7u3739+fHj34/ufPvvlh1+//u2b37/6/ubmBlRBfEkoyGKd0xRJExRZ5dQyaflw/kClLO0jBnGcgwYwbXq37dum5QqLXW63WroV6maog4/Un/fpKthwmQSmnswzulvv5GIsGcJsNrgvJN1D5l5CgRWsmhlMzbF0+zdJSieNiRtIy1nMdUm86TnWIdiIBpykRTqwKiRqtfMBGk3unX3fOSBXJlKh2MNDpUiaXSpvJguW2azCnzp1pQIrqcEwEvXwtqzmoz320MtiXK1G5M29Yc93bXG4vXewkK4PdLg0djyn3OfBQa4Z/NYNwmbIBKlmW3wxXmu1jI65cIvwqJNMt8p4cbDCmrCqaytVse7C66ZfnCZ+cnj8tIT48htgdDHMp/H925SvuEspcufqixRPDvwPLmYsW530EHbiHZQTuaBRofvxbKIqhd5uh7TSTo9tYQTn2SEqwLnciSyGLCA0KY06WUNQBZQUpbDtNCCfqGQatm3qV9YxzJn+cVn+Zv/q6jVqQEnWhvkGNMBgHtWNUvknPcvGDLLn1QN6+XWVNTj/AVOXFG2iCAAA==',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "ᴅᴜʟʟᴀʜ-xᴍᴅ v²",
    NUMERO_OWNER : process.env.NUMERO_OWNER || "ᴅᴜʟʟᴀʜ-xᴍᴅ v²",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "no",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'ᴅᴜʟʟᴀʜ-xᴍᴅ v²',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/533oqh.jpg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.CHATBOT || 'yes',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ADM : process.env.ANTI_DELETE_MESSAGE || 'yes',
    ANTIDELETE1 : process.env.ANTIDELETE1 || 'yes',
                  ANTIDELETE2 : process.env.ANTIDELETE2 || 'yes',
                  DULLAH_CHATBOT : process.env.DULLAH_CHATBOT || 'yes',
                  ANTICALL : process.env.ANTICALL || 'yes',
                  AUTO_REACT : process.env.AUTO_REACT || 'no',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'no',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'yes',
                  AUTO_READ : process.env.AUTO_READ || 'yes',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'yes',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'yes',
                  AUTO_BIO : process.env.AUTO_BIO || 'yes',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'yes',
                  AUTO_TAG_STATUS : process.env.AUTO_TAG_STATUS || 'yes',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});
