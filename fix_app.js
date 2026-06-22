const fs = require('fs');
let code = fs.readFileSync('c:/Users/romea/Desktop/Antigravity Projects/Inspell/Inspell - Interfaces/js/app.js', 'utf8');

// replace modulo-dropdown-btn, modulo-dropdown-menu, modulo-dropdown-arrow, clear-modulo-btn
code = code.replace(/modulo-dropdown-btn/g, 'categoria-dropdown-btn');
code = code.replace(/modulo-dropdown-menu/g, 'categoria-dropdown-menu');
code = code.replace(/modulo-dropdown-arrow/g, 'categoria-dropdown-arrow');
code = code.replace(/clear-modulo-btn/g, 'clear-categoria-btn');

// replace variables mBtn, mMenu, mArrow
code = code.replace(/mBtn/g, 'cBtn');
code = code.replace(/mMenu/g, 'cMenu');
code = code.replace(/mArrow/g, 'cArrow');

// replace variable names moduloMenu, moduloArrow
code = code.replace(/moduloMenu/g, 'categoriaMenu');
code = code.replace(/moduloArrow/g, 'categoriaArrow');

// replace type === 'modulo'
code = code.replace(/type === 'modulo'/g, "type === 'categoria'");

// replace variable modulosDisponiveis and arrModulos
code = code.replace(/modulosDisponiveis/g, 'categoriasDisponiveis');
code = code.replace(/arrModulos/g, 'arrCategorias');

// replace 'Todos os Módulos' to 'Todas as Categorias'
code = code.replace(/Todos os Módulos/g, 'Todas as Categorias');
code = code.replace(/Filtrar por Módulo/g, 'Filtrar por Categoria');

// replace matchesModulo with matchesCategoria
code = code.replace(/matchesModulo/g, 'matchesCategoria');

fs.writeFileSync('c:/Users/romea/Desktop/Antigravity Projects/Inspell/Inspell - Interfaces/js/app.js', code);
