TELEGRAM_BOT_TOKEN = "5506782721:AAHY0XPENAjssh3AtJ4wG_JvEOsX8FGfxUM";
const TeleBot = require("telebot");
const bot = new TeleBot(TELEGRAM_BOT_TOKEN);
const chatIds = [];
const CronJob = require("cron").CronJob;
const job = new CronJob(
  "0/5 * * * * *",
  function () {
    console.log("You will see this message every 5 second");
    chatIds.forEach((chatId) => {
      bot.sendMessage(chatId, "Salom");
    });
  },
  null,
  true
);
// Use this if the 4th param is default value(false)
// job.start()
bot.on("text", (msg) => msg.reply.text("Kelgan xabar" + msg.text));

bot.on(["/start"], (msg) => {
  let chatId = msg.chat.id;
  if (!chatIds.includes(chatId)) {
    chatIds.push(chatId);
    msg.reply.text("Boshladik");
    job.start();
  }
});
bot.on(["/stop"], (msg) => {
  let chatId = msg.chat.id;
  chatIds.pop(chatId);
});
bot.start();
