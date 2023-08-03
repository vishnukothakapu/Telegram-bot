const TelegramBot = require("node-telegram-bot-api");
require("dotenv").config();
const express = require("express");
const PORT = process.env.PORT || 3000;
const app = express();
const bot = new TelegramBot(process.env.API, { polling: true });
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  const user = msg.chat.username;
  const text =
    `Welcome @${user},Here are our social media profiles:\n\n` +
    "Youtube: https://youtube.com/@techtrendline\n" +
    "Twitter: https://twitter.com/TechTrendline\n" +
    "Instagram: https://www.instagram.com/techtrendline/";
  bot.sendMessage(chatId, text);
});
app.listen(PORT, () => {
  console.log("Connected");
});
