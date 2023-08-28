var Reader = require("./Reader");

var reader = new Reader();

async function main() {
    var dados = reader.Read("./users.csv");
    console.log(dados);
}

main();
