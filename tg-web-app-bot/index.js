const TelegramBot = require("node-telegram-bot-api")

const token = "5807424138:AAGNGvTPCru4Bf0luDgk2pMPvN5lRWIwe1g"
const webAppUrl ='https://ya.ru'

const bot = new TelegramBot(token, { polling: true })

bot.on("message", async (msg) => {
  const chatId = msg.chat.id
  const text = msg.text

  if (text === "/start") {
    await bot.sendMessage(chatId, 'Ниже появится форма кнопка, заполни форму', {
      reply_markup: {
        keyboard: [
          [{text: 'Заполнить форму', web_app: {url: webAppUrl}}]          
        ] 
      }
    })

    await bot.sendMessage(chatId, 'Заходи в наш интернет магазин по кнопке ниже', {
      reply_markup: {
        inline_keyboard: [
          [{text: 'Сделать заказ', web_app: {url: webAppUrl}}]          
        ] 
      }
    })
  }
})
