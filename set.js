const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('set.env'))
    require('dotenv').config({ path: __dirname + '/set.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'DULLAH-MD;;;H4sIAAAAAAAAA61Uy46jRhT9lai2tsYYMGBLLQUwGIwbbGNDu6MsylA8mlcBhV8jr5Isssoii2Qz22SXH4jyDVHyB5MvmE+IsLtnRslk0pHCqqi6uvece8+5L0FexDUy0BGMXgJcxTtIUHskR4zACEhNEKAKdIEPCQQj4IrGsImEo7VZHfnV8sRgslQ2mq3IJy2CzPIOnQo34k8RRd2AcxfgZpvG3kcSWuaB93tHKDsZD+W7QL5jbKnAcClvSi5a1ttNIpQrdYwm7A04txlhXMV5qOAIZaiCqYGOcxhXz4O/mZYiq+C92Dlu7lKzqTVdN5A3x45TajvamLK9zcIPxsE6fB78sSSKKIRREnlKZzK1llDppQYn4siQqLIsDzgy7ufktKLDK/w6DnPk6z7KSUyOz+67fdu7m9MHZozNxVy0YFKKZhPovYck9Nb7eyxIfGmyR9VV6+cBv/d4PtdnW64kh5mQZJjovTyvhOVsYD7UwTjk4iSHbjqN2feBz6snrST/pe+2NJhqhmne8j1zzUwR7fSY+f3KrkgWZJ1lmSDNzJFwwO76efBDsTN+MFNdrnE43ERH3uo4g4U93esQkf5sbyw9zhMX2UGq38GHpKk+hhIZRGoMKPKLus9u0mwq7feYntwObWuVu4W+XpXCrcPVq0yiGjRb9VY2wVviOCGUFdvtZe564IyntgHriFJds0OflPH+5sIoQUfdB6P+uQsqFMY1qSCJi/xyx1BdAP2djbwKkUt7AbXLhnVzsjYCf6hqwx9as0ox+mniGTrHz8f7h5KdSVIS0Ysb0AW4KjxU18jX4poU1fEW1TUMUQ1Gn10m1ZKuUFYQNI19MAJDlhcGzKDP8PSn9Yt9BEkNMX6RIwK6IKiK7BaBEaka1AWXeJ7mFIHnpLE65ClZFdg+w8qDscoKgkBznNwyzK41V3GGagIzDEZ9nh1yDN9n+XP3f4HB9tU+qygczw37Cs0pqiyL/aGgUOP+gGYp9V9gDM+fd0GODuSq4rb3TL8LgriqyTpvcFpA/0niT4/Q84omJ/Yx9+T2gCoweu8aERLnYd0Sa3JYeVG8Q3LL44r77bRRhfwnKo8bTC78VoRjebG+tQURtNDbPH/tzIgZ/L05OWyDwZtX3/3w5tX3P73++es/vvz2919ef/HjJ+GvX/32TQq6IL1kojlmQA15dkjznEAJbbb24fyWQ1vTRwTGaQ1GQNbz8YOpy8oc7rCnTybiIhTlsIX3xPnJSVelhpsskMXMxVW5LbnGZiXaceanhhU9JO9YFCjBvYphLtvszQeSgBEIcmFIl6pnzUzDWUOGuDRrNNrMtYI8oeOVbS1ZtbPsBJQhSHea1fFwcrLYTZlYquRQE3k4SLN0m/TUBaOtl67SpKko3rTVfLSLPfR+MTVkkWYiHvYcTNj7+1p/GBj0wHIzBsEjn1RTXmX5h9JnjdyfktNO8zfJ2MGzRFSZO36i1tAVrO3yNJuaZuAxyqlx5PDq8cuOSR93e/zovvjyG8Tosiof5/Zv473ibjVInbvvpXjcvf+wv6TNZJrvw2laQi7jmippRD91VgLfiJoWVh0tP2j0Erp4nzTg3JoBp5AERZWBEaizLQRdUBVNq2g9D4qPVJIlXZfFK+sU1kR855IPGI+mrlHzqsAarCMwAnM3GUit5I8ixjaB5MlzQGy/GW+B85+tmcLLnAgAAA==',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "ᴅᴜʟʟᴀʜ-xᴍᴅ v²",
    NUMERO_OWNER : process.env.NUMERO_OWNER || "ᴅᴜʟʟᴀʜ-xᴍᴅ v²",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'ᴅᴜʟʟᴀʜ-xᴍᴅ v²',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/533oqh.jpg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "no",
    ADM : process.env.ANTI_DELETE_MESSAGE || 'yes',
    ANTIDELETE1 : process.env.ANTIDELETE1 || 'yes',
                  ANTIDELETE2 : process.env.ANTIDELETE2 || 'yes',
                  DULLAH_CHATBOT : process.env.DULLAH_CHATBOT || 'yes',
                  ANTICALL : process.env.ANTICALL || 'yes',
                  AUTO_REACT : process.env.AUTO_REACT || 'yes',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
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
