const Reader = require("./Reader");
const Processor = require("./Processor");
const Table = require("./Table");
const HtmlParser = require("./HtmlParser");
const PDFWhiter = require("./PDFWhiter");
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

    escritor.Write(`novo ${currentYear}${currentMonth}${currentDay}${currentHours}${currentMinutes}${currentSeconds}${currentMillSecondss}.html`, html);
    
    PDFWhiter.WritePDF()
}

main();
