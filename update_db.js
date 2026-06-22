const fs = require('fs');

let db = fs.readFileSync('c:/Users/romea/Desktop/Antigravity Projects/Inspell/Inspell - Interfaces/js/database.js', 'utf8');

// Replace the software field with the proper category
let newDb = db.replace(/number:\s*(\d+),[\s\S]*?title:\s*"([^"]+)",[\s\S]*?software:\s*"([^"]+)"/g, (match, number, title, software) => {
    let num = parseInt(number);
    let category = "iPonto Desktop";
    
    // Check title or number to categorize. Note: Some courses for other brands also use Aula 1. 
    // We only categorize if it's the main course, but actually the user said:
    // "encontre os tipos de categoria, talvez ao Cartão de Ponto, Banco de Horas"
    // Let's rely on the title or number. The other softwares are 31, 32, 33, 34
    
    if (num >= 1 && num <= 5 && title.includes('Aula')) category = "Configurações Gerais";
    else if (num >= 6 && num <= 7) category = "Cadastros";
    else if (num >= 8 && num <= 11) category = "Escalas e Regras";
    else if (num == 12 || num == 28) category = "Equipamentos";
    else if (num >= 13 && num <= 14) category = "Cartão de Ponto";
    else if (num >= 15 && num <= 16) category = "Banco de Horas";
    else if (num == 17 || num == 29) category = "Processos de DP";
    else if (num >= 18 && num <= 19) category = "Folhas de Pagamento";
    else if (num >= 20 && num <= 27) category = "Aplicativos";
    else if (num == 30) category = "Arquivos Fiscais";
    else category = "Visão Geral";

    return match.replace(/software:\s*"[^"]+"/, `software: "${category}"`);
});

fs.writeFileSync('c:/Users/romea/Desktop/Antigravity Projects/Inspell/Inspell - Interfaces/js/database.js', newDb);
