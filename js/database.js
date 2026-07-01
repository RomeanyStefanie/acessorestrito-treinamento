// Catálogo oficial contendo as aulas de iPonto Desktop + conteúdo de outros softwares
const CLASSES_DATABASE = [
    {
        number: 1,
        time: "4:30",
        title: "Aula 1 - Apresentação",
        description: "Bem-vindos ao curso iPonto Plus. Nesta aula, apresentaremos os objetivos do sistema, sua conformidade legal com a Portaria 671 e os requisitos necessários para automação de ponto.",
        software: "Configurações Gerais",
        brand: "iPonto Desktop",
        imageText: "Apresentação\niPonto Plus",
        url: "https://www.youtube.com/watch?v=OIUp3xcDfrI&list=PLj4GWB2sipMlawqeuLP5rr7j8UJVAkfjV&autoplay=1"
    },
    {
        number: 2,
        time: "6:09",
        title: "Aula 2 - Introdução",
        description: "Vamos aprender a realizar a instalação completa do sistema no servidor e nas estações, além de configurar o banco de dados Firebird e garantir a segurança através de backups.",
        software: "Configurações Gerais",
        brand: "iPonto Desktop",
        imageText: "Introdução\niPonto Plus",
        url: "https://www.youtube.com/watch?v=9KOcVuvAyKc&list=PLj4GWB2sipMlawqeuLP5rr7j8UJVAkfjV&autoplay=1"
    },
    {
        number: 3,
        time: "4:04",
        title: "Aula 3 - Primeiro acesso",
        description: "Nesta aula, demonstraremos como criar logins de administradores, configurar permissões detalhadas por menu e utilizar a auditoria para monitorar ações no sistema.",
        software: "Configurações Gerais",
        brand: "iPonto Desktop",
        imageText: "Primeiro Acesso\niPonto Plus",
        url: "https://www.youtube.com/watch?v=_iMpaz9TlKw&list=PLj4GWB2sipMlawqeuLP5rr7j8UJVAkfjV&autoplay=1"
    },
    {
        number: 4,
        time: "13:03",
        title: "Aula 4 - Licenciamento",
        description: "Aprenda a cadastrar a empresa principal e gerenciar o licenciamento de módulos e pacotes de colaboradores, garantindo que todas as funcionalidades estejam ativas.",
        software: "Configurações Gerais",
        brand: "iPonto Desktop",
        imageText: "Licenciamento\niPonto Plus",
        url: "https://www.youtube.com/watch?v=rCugmp-HwAw&list=PLj4GWB2sipMlawqeuLP5rr7j8UJVAkfjV&autoplay=1"
    },
    {
        number: 5,
        time: "5:05",
        title: "Aula 5 - Segurança e LGPD",
        description: "Exploraremos a estrutura híbrida de armazenamento (local e nuvem) e as políticas de proteção de dados para garantir a conformidade com a LGPD e a segurança das informações.",
        software: "Configurações Gerais",
        brand: "iPonto Desktop",
        imageText: "Segurança e LGPD\niPonto Plus",
        url: "https://www.youtube.com/watch?v=Qz6tpCo7AHY&list=PLj4GWB2sipMlawqeuLP5rr7j8UJVAkfjV&autoplay=1"
    },
    {
        number: 6,
        time: "7:21",
        title: "Aula 6 - Colaboradores",
        description: "Nesta aula, veremos o passo a passo para o cadastro de colaboradores, uso obrigatório do CPF e vínculo de informações como cargos, setores e controle de EPIs.",
        software: "Cadastros",
        brand: "iPonto Desktop",
        imageText: "Colaboradores\niPonto Plus",
        url: "https://www.youtube.com/watch?v=QgMfctr8BrM&list=PLj4GWB2sipMlawqeuLP5rr7j8UJVAkfjV&autoplay=1"
    },
    {
        number: 7,
        time: "6:59",
        title: "Aula 7 - Cadastro de coletor",
        description: "Aprenda a configurar coletores REP-C no sistema, utilizando atalhos de segurança para novos cadastros e definindo métodos de comunicação TCP/IP ou USB.",
        software: "Cadastros",
        brand: "iPonto Desktop",
        imageText: "Cadastro Coletor\niPonto Plus",
        url: "https://www.youtube.com/watch?v=7tU7_iCVLSo&list=PLj4GWB2sipMlawqeuLP5rr7j8UJVAkfjV&autoplay=1"
    },
    {
        number: 8,
        time: "15:04",
        title: "Aula 8 - Criação de tabela de horário e escala",
        description: "Veremos como estruturar jornadas de trabalho fixas e escalas rotativas (como 12x36), além de realizar o agendamento correto de feriados.",
        software: "Escalas e Regras",
        brand: "iPonto Desktop",
        imageText: "Horários e Escala\niPonto Plus",
        url: "https://www.youtube.com/watch?v=SR9-juY11kE&list=PLj4GWB2sipMlawqeuLP5rr7j8UJVAkfjV&autoplay=1"
    },
    {
        number: 9,
        time: "7:42",
        title: "Aula 9 - Configurações básicas de tolerância",
        description: "Nesta aula, ajustaremos os limites de jornada e as janelas de tolerância para registros de ponto, garantindo flexibilidade e rigor nos cálculos.",
        software: "Escalas e Regras",
        brand: "iPonto Desktop",
        imageText: "Tolerâncias\niPonto Plus",
        url: "https://www.youtube.com/watch?v=9rjof4FKVwc&list=PLj4GWB2sipMlawqeuLP5rr7j8UJVAkfjV&autoplay=1"
    },
    {
        number: 10,
        time: "12:00",
        title: "Aula 10 - Personalizando totalizadores e transbordo",
        description: "Saiba como renomear colunas de cálculo e configurar regras de transbordo para automatizar a mudança de faixas de horas extras (ex: 50% para 100%).",
        software: "Escalas e Regras",
        brand: "iPonto Desktop",
        imageText: "Totalizadores\niPonto Plus",
        url: "https://www.youtube.com/watch?v=HMVz48bDbqk&list=PLj4GWB2sipMlawqeuLP5rr7j8UJVAkfjV&autoplay=1"
    },
    {
        number: 11,
        time: "5:08",
        title: "Aula 11 - Configurando colunas",
        description: "Aprenda a criar colunas de cálculos especiais para somatórios personalizados e a gerenciar a visibilidade de totalizadores no cartão de ponto impresso.",
        software: "Escalas e Regras",
        brand: "iPonto Desktop",
        imageText: "Configurar Colunas\niPonto Plus",
        url: "https://www.youtube.com/watch?v=h7rYNUhMrWM&list=PLj4GWB2sipMlawqeuLP5rr7j8UJVAkfjV&autoplay=1"
    },
    {
        number: 12,
        time: "4:46",
        title: "Aula 12 - Comunicação com REP",
        description: "Nesta aula, configuraremos a coleta automática de marcações via rede e a programação de atualizações periódicas de dados entre o software e o relógio.",
        software: "Equipamentos",
        brand: "iPonto Desktop",
        imageText: "Comunicação REP\niPonto Plus",
        url: "https://www.youtube.com/watch?v=wz8-YvoNLHo&list=PLj4GWB2sipMlawqeuLP5rr7j8UJVAkfjV&autoplay=1"
    },
    {
        number: 13,
        time: "7:51",
        title: "Aula 13 - Cartão de ponto",
        description: "Dominaremos a tela de tratamento de ponto, aplicando filtros por período e identificando inconsistências, como registros ímpares e marcações incompletas.",
        software: "Cartão de Ponto",
        brand: "iPonto Desktop",
        imageText: "Cartão de Ponto\niPonto Plus",
        url: "https://www.youtube.com/watch?v=7mlAuHO-c38&list=PLj4GWB2sipMlawqeuLP5rr7j8UJVAkfjV&autoplay=1"
    },
    {
        number: 14,
        time: "11:53",
        title: "Aula 14 - Cartão de ponto - Parte 2",
        description: "Veremos como criar motivos de abono personalizados e como utilizar o recurso 'refazer apontamento' para corrigir registros retroativos com novas regras.",
        software: "Cartão de Ponto",
        brand: "iPonto Desktop",
        imageText: "Cartão de Ponto - Parte 2\niPonto Plus",
        url: "https://www.youtube.com/watch?v=7MathDP3lEY&list=PLj4GWB2sipMlawqeuLP5rr7j8UJVAkfjV&autoplay=1"
    },
    {
        number: 15,
        time: "5:19",
        title: "Aula 15 - Habilitando banco de horas",
        description: "Aprenda a configurar a validade do banco de horas, definir totalizadores de crédito e débito e copiar essas regras para grupos de colaboradores.",
        software: "Banco de Horas",
        brand: "iPonto Desktop",
        imageText: "Configuração Banco de Horas\niPonto Plus",
        url: "https://www.youtube.com/watch?v=cdsx-NkOtk8&list=PLj4GWB2sipMlawqeuLP5rr7j8UJVAkfjV&autoplay=1"
    },
    {
        number: 16,
        time: "13:46",
        title: "Aula 16 - Configurações e ajustes do banco de horas",
        description: "Nesta aula, faremos o ajuste fino dos saldos e aprenderemos os processos manuais e automáticos para zeramento e manutenção do banco de horas.",
        software: "Banco de Horas",
        brand: "iPonto Desktop",
        imageText: "Ajuste Banco de Horas\niPonto Plus",
        url: "https://www.youtube.com/watch?v=7yBj2v-ZZHE&list=PLj4GWB2sipMlawqeuLP5rr7j8UJVAkfjV&autoplay=1"
    },
    {
        number: 17,
        time: "14:37",
        title: "Aula 17 - Relatórios mais utilizados",
        description: "Exploraremos a emissão de relatórios de produtividade, horários e a exportação individualizada de cartões de ponto em formato PDF.",
        software: "Relatórios",
        brand: "iPonto Desktop",
        imageText: "Relatórios mais utilizados\niPonto Plus",
        url: "https://www.youtube.com/watch?v=eXEIg_0ZQv4&list=PLj4GWB2sipMlawqeuLP5rr7j8UJVAkfjV&autoplay=1"
    },
    {
        number: 18,
        time: "11:00",
        title: "Aula 18 - Criando layout para a folha de pagamento Domínio",
        description: "Descubra como criar a estrutura de arquivo necessária para integrar o iPonto Plus com os principais softwares de folha de pagamento do mercado.",
        software: "Folhas de Pagamento",
        brand: "iPonto Desktop",
        imageText: "Layout Folha Domínio\niPonto Plus",
        url: "https://www.youtube.com/watch?v=UYYvivm3nw8&list=PLj4GWB2sipMlawqeuLP5rr7j8UJVAkfjV&autoplay=1"
    },
    {
        number: 19,
        time: "12:36",
        title: "Aula 19 - Configurações de eventos na folha de pagamento",
        description: "Aprenda a vincular os códigos de eventos da folha aos totalizadores do sistema para garantir uma exportação de extras e faltas sem erros.",
        software: "Folhas de Pagamento",
        brand: "iPonto Desktop",
        imageText: "Eventos Folha de Pagamento\niPonto Plus",
        url: "https://www.youtube.com/watch?v=fUdpR8ZkZlU&list=PLj4GWB2sipMlawqeuLP5rr7j8UJVAkfjV&autoplay=1"
    },
    {
        number: 20,
        time: "7:54",
        title: "Aula 20 - Multiponto - Cadastrando o coletor",
        description: "Iniciaremos o módulo de uso coletivo aprendendo a cadastrar tablets como coletores de reconhecimento facial e a vincular colaboradores em massa.",
        software: "Aplicativos",
        brand: "iPonto Desktop",
        imageText: "Multiponto - Cadastro do Coletor\nMultiponto",
        url: "https://www.youtube.com/watch?v=RpIHJOZdARg&list=PLj4GWB2sipMlawqeuLP5rr7j8UJVAkfjV&autoplay=1"
    },
    {
        number: 21,
        time: "3:46",
        title: "Aula 21 - Multiponto - Vínculo e cadastramento",
        description: "Nesta aula, demonstraremos como realizar o cadastramento facial via desktop (webcam) e como sincronizar esses dados com a nuvem e os dispositivos.",
        software: "Aplicativos",
        brand: "iPonto Desktop",
        imageText: "Multiponto - Vínculo e Cadastramento\nMultiponto",
        url: "https://www.youtube.com/watch?v=acNyeJnwTrE&list=PLj4GWB2sipMlawqeuLP5rr7j8UJVAkfjV&autoplay=1"
    },
    {
        number: 22,
        time: "13:28",
        title: "Aula 22 - Multiponto - Download e primeiro acesso",
        description: "Veremos o passo a passo da instalação do app Android, ativação com chave de licença e ajustes de interface para uso em tablets.",
        software: "Aplicativos",
        brand: "iPonto Desktop",
        imageText: "Multiponto - Download e primeiro acesso\nMultiponto",
        url: "https://www.youtube.com/watch?v=fbOyx1ENIPQ&list=PLj4GWB2sipMlawqeuLP5rr7j8UJVAkfjV&autoplay=1"
    },
    {
        number: 23,
        time: "5:29",
        title: "Aula 23 - iPonto Mobile - Configurações iniciais",
        description: "Aprenda a habilitar o registro de ponto individual em celulares (Android/iOS), configurando permissões para justificativas e uso em modo offline.",
        software: "Aplicativos",
        brand: "iPonto Desktop",
        imageText: "iPonto Mobile - Configurações iniciais\niPonto Mobile",
        url: "https://www.youtube.com/watch?v=7EVLnq920Ro&list=PLj4GWB2sipMlawqeuLP5rr7j8UJVAkfjV&autoplay=1"
    },
    {
        number: 24,
        time: "7:30",
        title: "Aula 24 - iPonto Mobile - Principais recursos e sincronizador mobile",
        description: "Nesta aula, configuraremos o serviço de ponte entre o sistema local e a nuvem, definindo intervalos de sincronia e segurança de dados.",
        software: "Aplicativos",
        brand: "iPonto Desktop",
        imageText: "iPonto Mobile - Principais recursos\niPonto Mobile",
        url: "https://www.youtube.com/watch?v=8vq3BOoNUtI&list=PLj4GWB2sipMlawqeuLP5rr7j8UJVAkfjV&autoplay=1"
    },
    {
        number: 25,
        time: "4:45",
        title: "Aula 25 - iPonto Mobile - Cadastro de ocorrência e restrição geográfica",
        description: "Saiba como limitador o registro de ponto a locais específicos usando cercas virtuais (raio GPS) e como criar motivos de ocorrência mobile.",
        software: "Aplicativos",
        brand: "iPonto Desktop",
        imageText: "iPonto Mobile - Ocorrências e Restrição Geográfica\niPonto Mobile",
        url: "https://www.youtube.com/watch?v=fTeOvyik1ds&list=PLj4GWB2sipMlawqeuLP5rr7j8UJVAkfjV&autoplay=1"
    },
    {
        number: 26,
        time: "11:09",
        title: "Aula 26 - iPonto Mobile - Download do App",
        description: "Passo a passo para o colaborador realizar o download nas lojas oficiais, primeiro login e aceite das políticas de privacidade no dispositivo pessoal.",
        software: "Aplicativos",
        brand: "iPonto Desktop",
        imageText: "iPonto Mobile - Download do App\niPonto Mobile",
        url: "https://www.youtube.com/watch?v=3fd8qWYufQU&list=PLj4GWB2sipMlawqeuLP5rr7j8UJVAkfjV&autoplay=1"
    },
    {
        number: 27,
        time: "5:03",
        title: "Aula 27 – App iPonto Mobile - Enviar cartão de ponto e saldo do banco de horas | iPonto Plus Deskto",
        description: "Nesta aula, veremos como enviar o espelho de ponto para o app do colaborador e como gerir as assinaturas e aceites digitais.",
        software: "Aplicativos",
        brand: "iPonto Desktop",
        imageText: "iPonto Mobile - Envio e Aprovação Cartão de Ponto\niPonto Mobile",
        url: "https://www.youtube.com/watch?v=9Yk8cgddphs&list=PLj4GWB2sipMlawqeuLP5rr7j8UJVAkfjV&autoplay=1"
    },
    {
        number: 28,
        time: "12:20",
        title: "Aula 28 - Instalação e comunicação iGetaway", 
        description: "Aprenda a utilizar o serviço iGateway para integrar equipamentos faciais (REP-P) e processar marcações em tempo real.",
        software: "Equipamentos",
        brand: "iPonto Desktop",
        imageText: "Instalação iGateway\niPonto Plus",
        url: "https://www.youtube.com/watch?v=wh6z_xppk3I&list=PLj4GWB2sipMlawqeuLP5rr7j8UJVAkfjV&autoplay=1"
    },
    {
        number: 29,
        time: "6:43",
        title: "Aula 29 - iPonto Gestor",
        description: "Conheça o dashboard web para gestores, com indicadores de turnover, absenteísmo e status operacional dos coletores em tempo real.",
        software: "Relatórios",
        brand: "iPonto Desktop",
        imageText: "iPonto Gestor\niPonto Plus",
        url: "https://www.youtube.com/watch?v=NaBwLfxCql8&list=PLj4GWB2sipMlawqeuLP5rr7j8UJVAkfjV&autoplay=1"
    },
    {
        number: 30,
        time: "4:57",
        title: "Aula 30 - Emissão de arquivos fiscais",
        description: "Finalizaremos o curso aprendendo a gerar o arquivo AEJ e a emitir os atestados técnicos e termos de responsabilidade exigidos pela fiscalização.",
        software: "Arquivos Fiscais",
        brand: "iPonto Desktop",
        imageText: "Arquivos Fiscais\niPonto Plus",
        url: "https://www.youtube.com/watch?v=433aXdxw_T0&list=PLj4GWB2sipMlawqeuLP5rr7j8UJVAkfjV&autoplay=1"
    },
    {
        number: 31,
        time: "8:15",
        title: "Lançamento do iPonto Connect",
        description: "Assista ao nosso webinar de lançamento e descubra como o iPonto Connect otimiza o fluxo de marcações e integra filiais em tempo real na nuvem.",
        software: "Visão Geral",
        brand: "iPonto Connect",
        imageText: "Apresentação\nLançamento iPonto Connect"
    },
    {
        number: 32,
        time: "10:45",
        title: "Lançamento do iPonto Web",
        description: "Acompanhe nosso webinar de lançamento e veja como administrar o iPonto Web direto do navegador, com relatórios avançados e exportações automatizadas.",
        software: "Visão Geral",
        brand: "iPonto Web",
        imageText: "Painel de Controle\niPonto Web"
    },
    {
        number: 33,
        time: "5:50",
        title: "Aula 1 - Gestão de Acesso de Alunos e Planos | iFitness",
        description: "Descubra como gerenciar a catraca de entrada dos alunos, validar planos ativos e controlar de forma automatizada o acesso na sua academia.",
        software: "Visão Geral",
        brand: "iFitness",
        imageText: "Gestão de Alunos\niFitness"
    },
    {
        number: 34,
        time: "11:20",
        title: "Aula 1 - Controle de Portaria e Monitoramento Facial | iControl",
        description: "Configure cameras, catracas de pedestres e regras de acesso de visitantes usando o poder do iControl integrado.",
        software: "Visão Geral",
        brand: "iControl",
        imageText: "Controle de Acesso\niControl"
    }
];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { CLASSES_DATABASE };
}
