var Reader = require("./Reader");
var Processor = require("./Processor");
var Table = require("./Table");
var HtmlParser = require("./HtmlParser");
const Writer = require("./Writer");
var escritor = new Writer();
var reader = new Reader();

async function main() {
    var dados = await reader.Read("./users.csv");
    var dados2 = await Processor.Process(dados);

    var table = await new Table(dados2);

    var html = await HtmlParser.Parse(table);
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1;
    const currentDay = currentDate.getDate();
    const currentHours = currentDate.getHours();
    const currentMinutes = currentDate.getMinutes();
    const currentSeconds = currentDate.getSeconds();
    const currentMillSeconds = currentSeconds / 1000;
    const currentMillSecondss = currentMillSeconds.toString().replace(".", "");

    console.log(currentMillSecondss);
    escritor.Write(`novo ${currentYear}${currentMonth}${currentDay}${currentHours}${currentMinutes}${currentSeconds}${currentMillSecondss}.html`, html);
}

main();
