// Variáveis de controle de Estado
let limit = 6; 
let selectedSoftwareBrand = 'Todos'; 
let selectedCategoria = 'Todos';       
let searchQuery = '';

// Variáveis de controle do formulário
let formSelectedSoftware = '';
let formSelectedType = '';

// Nomes de exibição dos Módulos
const CATEGORIA_DISPLAY_NAMES = {};

// Cores das Marcas (Brands)
const BRAND_COLORS = {
    'iPonto Desktop': '#003399',
    'iPonto Connect': '#0053c5',
    'iPonto Web': '#004EFD',
    'iFitness': '#00afef',
    'iControl': '#F1575C'
};

// Executar renderização inicial
document.addEventListener('DOMContentLoaded', () => {
    updateCategoriaDropdown();
    render();
    setupDropdownEvents();
});

// Configuração de eventos de clique fora para fechar dropdowns
function setupDropdownEvents() {
    window.addEventListener('click', function(e) {
        const sBtn = document.getElementById('software-dropdown-btn');
        const sMenu = document.getElementById('software-dropdown-menu');
        const sArrow = document.getElementById('software-dropdown-arrow');
        const cBtn = document.getElementById('categoria-dropdown-btn');
        const cMenu = document.getElementById('categoria-dropdown-menu');
        const cArrow = document.getElementById('categoria-dropdown-arrow');

        const fsBtn = document.getElementById('form-software-dropdown-btn');
        const fsMenu = document.getElementById('form-software-dropdown-menu');
        const fsArrow = document.getElementById('form-software-dropdown-arrow');
        const ftBtn = document.getElementById('form-type-dropdown-btn');
        const ftMenu = document.getElementById('form-type-dropdown-menu');
        const ftArrow = document.getElementById('form-type-dropdown-arrow');

        if (sBtn && !sBtn.contains(e.target) && sMenu && !sMenu.contains(e.target)) {
            sMenu.classList.add('hidden');
            sArrow.classList.remove('rotate-180');
        }
        if (cBtn && !cBtn.contains(e.target) && cMenu && !cMenu.contains(e.target)) {
            cMenu.classList.add('hidden');
            cArrow.classList.remove('rotate-180');
        }
        if (fsBtn && !fsBtn.contains(e.target) && fsMenu && !fsMenu.contains(e.target)) {
            fsMenu.classList.add('hidden');
            fsArrow.classList.remove('rotate-180');
        }
        if (ftBtn && !ftBtn.contains(e.target) && ftMenu && !ftMenu.contains(e.target)) {
            ftMenu.classList.add('hidden');
            ftArrow.classList.remove('rotate-180');
        }
    });
}

// Lógica de abertura/fechamento de dropdowns
function toggleDropdown(type) {
    const softwareMenu = document.getElementById('software-dropdown-menu');
    const softwareArrow = document.getElementById('software-dropdown-arrow');
    const categoriaMenu = document.getElementById('categoria-dropdown-menu');
    const categoriaArrow = document.getElementById('categoria-dropdown-arrow');
    
    const fsMenu = document.getElementById('form-software-dropdown-menu');
    const fsArrow = document.getElementById('form-software-dropdown-arrow');
    const ftMenu = document.getElementById('form-type-dropdown-menu');
    const ftArrow = document.getElementById('form-type-dropdown-arrow');

    if (type === 'software') {
        softwareMenu.classList.toggle('hidden');
        softwareArrow.classList.toggle('rotate-180');
        categoriaMenu.classList.add('hidden');
        categoriaArrow.classList.remove('rotate-180');
        fsMenu.classList.add('hidden');
        fsArrow.classList.remove('rotate-180');
        ftMenu.classList.add('hidden');
        ftArrow.classList.remove('rotate-180');
    } else if (type === 'categoria') {
        categoriaMenu.classList.toggle('hidden');
        categoriaArrow.classList.toggle('rotate-180');
        softwareMenu.classList.add('hidden');
        softwareArrow.classList.remove('rotate-180');
        fsMenu.classList.add('hidden');
        fsArrow.classList.remove('rotate-180');
        ftMenu.classList.add('hidden');
        ftArrow.classList.remove('rotate-180');
    } else if (type === 'form-software') {
        fsMenu.classList.toggle('hidden');
        fsArrow.classList.toggle('rotate-180');
        softwareMenu.classList.add('hidden');
        softwareArrow.classList.remove('rotate-180');
        categoriaMenu.classList.add('hidden');
        categoriaArrow.classList.remove('rotate-180');
        ftMenu.classList.add('hidden');
        ftArrow.classList.remove('rotate-180');
    } else if (type === 'form-type') {
        ftMenu.classList.toggle('hidden');
        ftArrow.classList.toggle('rotate-180');
        softwareMenu.classList.add('hidden');
        softwareArrow.classList.remove('rotate-180');
        categoriaMenu.classList.add('hidden');
        categoriaArrow.classList.remove('rotate-180');
        fsMenu.classList.add('hidden');
        fsArrow.classList.remove('rotate-180');
    }
}

// Seleção de Marca de Software
function selectSoftwareBrand(brand) {
    selectedSoftwareBrand = brand;
    const textElement = document.getElementById('selected-software-brand');
    const clearBtn = document.getElementById('clear-software-btn');
    
    textElement.textContent = brand === 'Todos' ? 'Filtrar por Software' : brand;
    
    if (brand === 'Todos') {
        if (clearBtn) clearBtn.classList.add('hidden');
    } else {
        if (clearBtn) clearBtn.classList.remove('hidden');
    }
    
    document.getElementById('software-dropdown-menu').classList.add('hidden');
    document.getElementById('software-dropdown-arrow').classList.remove('rotate-180');
    
    
    limit = 6;
    updateCategoriaDropdown();
    render();
}

// Seleção de Módulo
function selectCategoria(modulo) {
    selectedCategoria = modulo;
    const textElement = document.getElementById('selected-software');
    const clearBtn = document.getElementById('clear-categoria-btn');
    
    const displayName = modulo === 'Todos' ? 'Filtrar por Categoria' : (CATEGORIA_DISPLAY_NAMES[modulo] || modulo);
    textElement.textContent = displayName;
    
    if (modulo === 'Todos') {
        if (clearBtn) clearBtn.classList.add('hidden');
    } else {
        if (clearBtn) clearBtn.classList.remove('hidden');
    }
    
    document.getElementById('categoria-dropdown-menu').classList.add('hidden');
    document.getElementById('categoria-dropdown-arrow').classList.remove('rotate-180');
    
    limit = 6;
    render();
}

// Atualizar o dropdown de módulos com base no software selecionado
function updateCategoriaDropdown() {
    const categoriaMenu = document.getElementById('categoria-dropdown-menu');
    if (!categoriaMenu) return;
    
    // Coletar quais módulos (software) existem para a marca (brand) selecionada
    let categoriasDisponiveis = new Set();
    
    // Deixar a opção de módulos "sem seleção" (vazia) para softwares além do iPonto Desktop
    if (selectedSoftwareBrand === 'Todos' || selectedSoftwareBrand === 'iPonto Desktop') {
        CLASSES_DATABASE.forEach(item => {
            if ((selectedSoftwareBrand === 'Todos' || item.brand === selectedSoftwareBrand) && item.software !== 'Visão Geral') {
                categoriasDisponiveis.add(item.software);
            }
        });
    }

    let html = `<button onclick="selectCategoria('Todos')" class="w-full text-left pl-4 pr-4 py-2.5 text-sm text-slate-700 hover:bg-blue-600 hover:text-white transition font-semibold border-b border-slate-100">Todas as Categorias</button>`;
    
    // Ordenar os módulos alfabeticamente
    const arrCategorias = Array.from(categoriasDisponiveis).sort();
    
    arrCategorias.forEach(mod => {
        const displayName = CATEGORIA_DISPLAY_NAMES[mod] || mod;
        html += `<button onclick="selectCategoria('${mod}')" class="w-full text-left pl-4 pr-4 py-2.5 text-sm text-slate-700 hover:bg-blue-600 hover:text-white transition">${displayName}</button>`;
    });

    categoriaMenu.innerHTML = html;

    // Se o módulo atual não está disponível para o novo software, reseta para Todos
    if (selectedCategoria !== 'Todos' && !categoriasDisponiveis.has(selectedCategoria)) {
        selectCategoria('Todos');
    }
}

// Função para limpar apenas o filtro de Software via botão X interno
function clearSoftwareFilter(event) {
    if (event) event.stopPropagation(); // Evita abrir o menu ao clicar no X
    selectSoftwareBrand('Todos');
}

// Função para limpar apenas o filtro de Módulo via botão X interno
function clearCategoriaFilter(event) {
    if (event) event.stopPropagation(); // Evita abrir o menu ao clicar no X
    selectCategoria('Todos');
}

// Digitação no campo de busca
function handleSearch() {
    searchQuery = document.getElementById('search-input').value.toLowerCase().trim();
    
    // Gerencia visibilidade do botão 'X' de limpeza rápida dentro do input
    const clearSearchBtn = document.getElementById('clear-search-btn');
    if (searchQuery.length > 0) {
        clearSearchBtn.classList.remove('hidden');
    } else {
        clearSearchBtn.classList.add('hidden');
    }

    limit = 6;
    render();
}

// Limpar apenas o campo de busca
function clearSearchInput() {
    document.getElementById('search-input').value = '';
    document.getElementById('clear-search-btn').classList.add('hidden');
    searchQuery = '';
    render();
}

// Limpar todos os filtros simultaneamente (Busca + Dropdowns)
function clearAllFilters() {
    document.getElementById('search-input').value = '';
    document.getElementById('clear-search-btn').classList.add('hidden');
    searchQuery = '';

    selectSoftwareBrand('Todos');
    selectCategoria('Todos');

    limit = 6;
    render();
    showToast('Filtros limpos com sucesso.');
}

// Função de compatibilidade vazia (botão removido da UI)
function toggleClearAllButton() {}

// Renderização dos cards em formato de Grid de Cartões (Tema Claro)
function render() {
    const grid = document.getElementById('video-grid');
    const resultsCountSpan = document.getElementById('results-count');
    const loadMoreBtn = document.getElementById('load-more-btn');

    // Filtra as aulas do banco global declarado em database.js
    const filteredVideos = CLASSES_DATABASE.filter(item => {
        const matchesBrand = (selectedSoftwareBrand === 'Todos' || item.brand === selectedSoftwareBrand);
        const matchesCategoria = (selectedCategoria === 'Todos' || item.software === selectedCategoria);
        const matchesSearch = (
            item.title.toLowerCase().includes(searchQuery) ||
            item.description.toLowerCase().includes(searchQuery) ||
            item.number.toString() === searchQuery
        );
        return matchesBrand && matchesCategoria && matchesSearch;
    });

    const visibleVideos = filteredVideos.slice(0, limit);

    if (visibleVideos.length === 0) {
        grid.innerHTML = `
            <div class="col-span-full py-12 text-center bg-white rounded-xl border border-dashed border-slate-350 flex flex-col items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mx-auto h-12 w-12 text-slate-400 mb-3">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
                </svg>
                <h3 class="text-sm font-semibold text-slate-800">Nenhuma aula encontrada</h3>
                <p class="text-xs text-slate-400 mt-1">Ajuste os filtros ou insira um novo termo de pesquisa.</p>
            </div>
        `;
    } else {
        grid.innerHTML = visibleVideos.map(video => {
            const imgTextLines = video.imageText.split('\n');
            
            const tag = video.url ? 'a' : 'div';
            const linkAttrs = video.url ? `href="${video.url}" target="_blank" rel="noopener noreferrer"` : '';
            return `
            <${tag} ${linkAttrs} class="group flex flex-col bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                
                <!-- Thumbnail Area -->
                <div class="relative aspect-video w-full overflow-hidden bg-slate-100 border-b border-slate-200 flex items-center justify-center select-none">
                    <!-- Imagem do Thumbnail gerada em CSS de 100% da largura -->
                    <div class="absolute inset-0 thumbnail-premium-gradient p-5 flex flex-col justify-between text-white">
                        <!-- Linha de Grade no Background (para efeito tecnológico) -->
                        <div class="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none"></div>
                        
                        <div class="flex justify-between items-start z-10">
                            <!-- Badge de Software/Marca -->
                            <span style="background-color: ${BRAND_COLORS[video.brand] || '#0053c5'};" class="text-white text-[10px] font-bold px-2.5 py-1 rounded border border-white/10 tracking-wide uppercase">
                                ${video.brand}
                            </span>
                        </div>
                        
                        <!-- Título Interno da Imagem -->
                        <div class="z-10 flex flex-col gap-1 pl-3 border-l border-white/20">
                            <span class="text-xs text-slate-300 font-medium">${(video.brand === 'iPonto Connect' || video.brand === 'iPonto Web') ? 'Webinar' : 'Treinamento'}</span>
                            <span class="text-sm sm:text-base font-bold leading-tight line-clamp-1">${imgTextLines[0]}</span>
                        </div>
                    </div>
                    
                    <!-- Botão de Play centralizado com Glassmorphism (Glow no Hover) -->
                    <div class="z-10 w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white shadow-lg group-hover:scale-110 group-hover:bg-blue-600 group-hover:border-blue-500 transition-all duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 pl-0.5">
                            <path fill-rule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clip-rule="evenodd" />
                        </svg>
                    </div>
                </div>
                
                <!-- Conteúdo de Informações -->
                <div class="p-4 flex flex-col flex-grow justify-between bg-white">
                    <div>
                        <h3 class="text-base font-bold text-slate-800 line-clamp-2 group-hover:text-blue-600 transition duration-150" title="${video.title}">
                            ${video.title}
                        </h3>
                        <p class="text-xs text-slate-500 mt-2 line-clamp-3 leading-relaxed">
                            ${video.description}
                        </p>
                    </div>
                    
                    <!-- Metadados inferiores (Data e Duração lado a lado) -->
                    <div class="mt-4 pt-3.5 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-500">
                        <span class="flex items-center gap-1.5 text-slate-500">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4 text-slate-400">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                            </svg>
                            15/02/2026
                        </span>
                        
                        <span class="flex items-center gap-1.5 text-slate-700">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.2" stroke="currentColor" class="w-4 h-4 text-blue-500">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" />
                            </svg>
                            ${video.time}
                        </span>
                    </div>
                </div>
            </${tag}>
        `;
        }).join('');
    }

    resultsCountSpan.textContent = `Mostrando ${visibleVideos.length} de ${filteredVideos.length} aulas`;

    if (limit >= filteredVideos.length) {
        loadMoreBtn.classList.add('hidden');
    } else {
        loadMoreBtn.classList.remove('hidden');
    }
}

// Incrementar o limite e simular feedback de carregamento
function loadMoreVideos() {
    const loadMoreBtn = document.getElementById('load-more-btn');
    const chevronLoad = document.getElementById('chevron-load');
    const spinner = document.getElementById('loading-spinner');

    if (chevronLoad) chevronLoad.classList.add('hidden');
    if (spinner) spinner.classList.remove('hidden');
    loadMoreBtn.disabled = true;

    setTimeout(() => {
        limit += 6;
        render();

        if (chevronLoad) chevronLoad.classList.remove('hidden');
        if (spinner) spinner.classList.add('hidden');
        loadMoreBtn.disabled = false;

        showToast('Novos cartões carregados com sucesso.');
    }, 400);
}

// Toast de Notificação
function showToast(message) {
    const toast = document.getElementById('custom-toast');
    const msgSpan = document.getElementById('toast-message');
    if (!toast || !msgSpan) return;
    
    msgSpan.textContent = message;
    
    toast.classList.remove('translate-y-20', 'opacity-0', 'pointer-events-none');
    toast.classList.add('translate-y-0', 'opacity-100');

    setTimeout(() => {
        toast.classList.add('translate-y-20', 'opacity-0', 'pointer-events-none');
        toast.classList.remove('translate-y-0', 'opacity-100');
    }, 3000);
}

// Ação do Botão Sair
function handleLogout() {
    showToast('Sessão encerrada com sucesso.');
}

// Lógica do Formulário de Treinamento Customizado
let participantsList = [];

// Inicializa a primeira linha de participante
document.addEventListener('DOMContentLoaded', () => {
    // Adiciona a primeira linha de participante por padrão
    handleAddParticipant();
});

function renderParticipantsList() {
    const listContainer = document.getElementById('participants-list');
    if (!listContainer) return;

    let html = '';
    
    // Cabeçalho da tabela - Visível apenas em telas maiores


    html += participantsList.map((item, index) => {
        return `
            <div class="grid grid-cols-1 sm:grid-cols-12 gap-4 items-end border-b border-slate-100 pb-2 last:border-b-0 last:pb-0">
                <div class="flex flex-col gap-1.5 col-span-1 sm:col-span-5 w-full">
                    <label class="${index === 0 ? 'block' : 'hidden sm:hidden'} text-sm font-bold text-slate-700">Nome completo</label>
                    <input type="text" value="${item.name}" onchange="updateParticipantField(${index}, 'name', this.value)" placeholder="Digite o nome" class="px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all w-full">
                </div>
                <div class="flex flex-col gap-1.5 col-span-1 sm:col-span-6 w-full">
                    <label class="${index === 0 ? 'block' : 'hidden sm:hidden'} text-sm font-bold text-slate-700">Área de atuação</label>
                    <input type="text" value="${item.area}" onchange="updateParticipantField(${index}, 'area', this.value)" placeholder="Ex: RH, Financeiro" class="px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all w-full">
                </div>
                <div class="col-span-1 flex items-center justify-end w-full h-[46px]">
                    ${participantsList.length > 1 ? `
                        <button type="button" onclick="handleRemoveParticipant(${index})" class="active-scale p-2.5 bg-rose-50 hover:bg-rose-100 text-rose-600 border border-rose-200 rounded-lg transition-colors focus:outline-none w-full sm:w-auto flex items-center justify-center gap-1.5" title="Remover participante">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-4 h-4">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                            <span class="sm:hidden text-sm font-bold">Remover</span>
                        </button>
                    ` : '<div class="w-full"></div>'}
                </div>
            </div>
        `;
    }).join('');

    listContainer.innerHTML = html;
}

function handleAddParticipant(event) {
    if (event) event.preventDefault();
    
    if (participantsList.length >= 5) {
        showToast('Limite de 5 participantes atingido.');
        return;
    }

    participantsList.push({ name: '', area: '' });
    renderParticipantsList();
}

function updateParticipantField(index, field, value) {
    if (participantsList[index]) {
        participantsList[index][field] = value.trim();
    }
}

function handleRemoveParticipant(index) {
    participantsList.splice(index, 1);
    renderParticipantsList();
    showToast('Participante removido.');
}

function handleCustomTrainingSubmit(event) {
    if (event) event.preventDefault();
    
    if (!formSelectedSoftware || !formSelectedType) {
        showToast('Por favor, preencha todos os campos obrigatórios.');
        return;
    }

    // Valida se há pelo menos um nome preenchido
    const hasName = participantsList.some(p => p.name.trim() !== '');
    if (!hasName) {
        showToast('Por favor, informe o nome de pelo menos um participante.');
        return;
    }

    showToast('Solicitação de treinamento enviada com sucesso!');
    document.getElementById('custom-training-form').reset();
    clearFormSoftware();
    clearFormType();
    participantsList = [{ name: '', area: '' }];
    renderParticipantsList();
}

function selectFormSoftware(val) {
    formSelectedSoftware = val;
    const textElement = document.getElementById('form-selected-software');
    const clearBtn = document.getElementById('form-clear-software-btn');
    
    textElement.textContent = val;
    if (clearBtn) clearBtn.classList.remove('hidden');
    
    document.getElementById('form-software-dropdown-menu').classList.add('hidden');
    document.getElementById('form-software-dropdown-arrow').classList.remove('rotate-180');
}

function clearFormSoftware(event) {
    if (event) event.stopPropagation();
    formSelectedSoftware = '';
    const textElement = document.getElementById('form-selected-software');
    const clearBtn = document.getElementById('form-clear-software-btn');
    
    if (textElement) textElement.textContent = 'Selecione';
    if (clearBtn) clearBtn.classList.add('hidden');
    
    const menu = document.getElementById('form-software-dropdown-menu');
    const arrow = document.getElementById('form-software-dropdown-arrow');
    if (menu) menu.classList.add('hidden');
    if (arrow) arrow.classList.remove('rotate-180');
}

function selectFormType(val) {
    formSelectedType = val;
    const textElement = document.getElementById('form-selected-type');
    const clearBtn = document.getElementById('form-clear-type-btn');
    
    textElement.textContent = val;
    if (clearBtn) clearBtn.classList.remove('hidden');
    
    document.getElementById('form-type-dropdown-menu').classList.add('hidden');
    document.getElementById('form-type-dropdown-arrow').classList.remove('rotate-180');
}

function clearFormType(event) {
    if (event) event.stopPropagation();
    formSelectedType = '';
    const textElement = document.getElementById('form-selected-type');
    const clearBtn = document.getElementById('form-clear-type-btn');
    
    if (textElement) textElement.textContent = 'Selecione';
    if (clearBtn) clearBtn.classList.add('hidden');
    
    const menu = document.getElementById('form-type-dropdown-menu');
    const arrow = document.getElementById('form-type-dropdown-arrow');
    if (menu) menu.classList.add('hidden');
    if (arrow) arrow.classList.remove('rotate-180');
}
