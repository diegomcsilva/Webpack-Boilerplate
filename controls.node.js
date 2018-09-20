const fs = require('fs'); //file-system for manipulate files
const readline = require('readline'); //for output dialog

let file;

// For when pass second param
// const file = process.argv[2];

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Qual arquivo deseja excluir? Informe o path completo! ", function(answer) {
    // console.log("Thank you for your valuable feedback:", answer);
    file = answer;

    // Assuming that 'path/file.txt' is a regular file.
    fs.unlink(file, (err) => {
        if (err) throw err;
        console.log('Arquivo ' + file + ' deletado com sucesso!');
    });


    rl.close();
});



