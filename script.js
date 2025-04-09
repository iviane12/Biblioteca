// Dados simulados para teste
const livrosDestaques = [
    {
        id: 1,
        titulo: 'Para Todos os Garotos que Já Amei',
        autor: 'Jenny Han',
        genero: 'Romance',
        sinopse: 'Lara Jean Song Covey é uma adolescente que nunca revelou seus sentimentos diretamente para os garotos por quem se apaixonou...',
        imagem: 'https://i.pinimg.com/474x/f1/1c/0f/f11c0f2505267eefbd435c256f37bdf4.jpg',
    },
    {
        id: 2,
        titulo: 'P.S.: Ainda Amo Você',
        autor: 'Jenny Han',
        genero: 'Romance',
        sinopse: 'Continua a história de Lara Jean após o final do primeiro livro, explorando seu relacionamento com Peter e a chegada de um novo personagem, John Ambrose, que complica ainda mais seus sentimentos.',
        imagem: 'https://i.pinimg.com/474x/79/14/98/7914983c9105c1b197a16c6c468cbee7.jpg',
    },
    {
        id: 3,
        titulo: 'Agora e Para Sempre, Lara Jean',
        autor: 'Jenny Han',
        genero: 'Romance',
        sinopse: 'No último livro da série, Lara Jean enfrenta decisões importantes sobre seu futuro, incluindo faculdade, relacionamentos e família.',
        imagem: 'https://i.pinimg.com/474x/e8/04/64/e8046489cf21f91a8017e9dc5e297741.jpg',
    },

    {
        id: 4,
        titulo: 'Minha Vida Não Tão Perfeita',
        autor: 'Sophie Kinsella',
        genero: 'Romance',
        sinopse: 'Katie Brenner tem uma vida que parece ser perfeita nas redes sociais, mas, na realidade, a sua vida é muito mais complicada do que aparenta. Depois de se mudar para Londres com o sonho de uma carreira de sucesso, Katie se vê presa a um emprego sem glamour e a um pequeno apartamento, com dificuldades financeiras e sentimentos de solidão. Quando um incidente no trabalho a coloca em uma situação desconfortável, ela vê uma oportunidade de recomeçar, mas precisa enfrentar suas próprias inseguranças e a pressão de ser perfeita. A história mistura momentos engraçados e tocantes, enquanto Katie aprende a aceitar suas imperfeições e o que realmente importa na vida.',
        imagem: 'https://i.pinimg.com/474x/2d/1b/18/2d1b18dd8b7935341f61cb15ff8445c8.jpg',
    },
    {
        id: 5,
        titulo: 'A Cinco Passos de Você',
        autor: 'Rachael Lippincott',
        genero: 'Romance',
        sinopse: 'Stella Grant e Will Newman se conhecem em um hospital, onde ambos enfrentam doenças graves e uma vida cheia de restrições. Embora apaixonados, os dois não podem se tocar devido às suas condições de saúde. "A Cinco Passos de Você" é uma história de amor emocionante, que explora os limites do cuidado, da confiança e do desejo de viver plenamente.',
        imagem: 'https://i.pinimg.com/474x/50/af/41/50af41fceb1b167b29ee968cd3c2721c.jpg'
    }
    

    
];

const ultimasResenhas = [
    {
        id: 1,
        titulo: 'Por que ler os clássicos?',
        autor: 'Maria Silva',
        data: '2024-03-15',
        imagem: 'https://i.pinimg.com/474x/75/f5/f9/75f5f9e6b9408dbfd71b7cdce73b6dd2.jpg',
        resumo: 'Uma análise profunda sobre a importância da literatura clássica...'
    },
    {
        id: 2,
        titulo: 'Os melhores livros de 2024',
        autor: 'João Santos',
        data: '2024-03-14',
        imagem: 'https://i.pinimg.com/474x/38/f0/f8/38f0f8ab76d50df5429d9ce9ec0a576c.jpg',
        resumo: 'Confira nossa seleção dos melhores lançamentos do ano...'
    },
    {
        id: 3,
        titulo: 'O poder da leitura diária',
        autor: 'Ana Oliveira',
        data: '2024-03-13',
        imagem: 'https://i.pinimg.com/474x/d4/4e/9e/d44e9eaee5a51afa608d755a207f66ff.jpg',
        resumo: 'Descubra como criar e manter um hábito de leitura...'
    }
];

const generos = [
    { id: 1, nome: 'Romance', icone: 'fa-heart' },
    { id: 2, nome: 'Ficção Científica', icone: 'fa-rocket' },
    { id: 3, nome: 'Fantasia', icone: 'fa-dragon' },
    { id: 4, nome: 'Mistério', icone: 'fa-magnifying-glass' },
    { id: 5, nome: 'Biografia', icone: 'fa-user' },
    { id: 6, nome: 'História', icone: 'fa-book-open' }
];

const ultimosPosts = [
    `<p>A trilogia Para Todos os Garotos que Já Amei, escrita por Jenny Han, conquistou leitores ao redor do mundo com sua narrativa romântica, sincera e envolvente. Composta por três livros - Para Todos os Garotos que Já Amei, P.S.: Ainda Amo Você e Agora e Para Sempre, Lara Jean - a série acompanha a jornada de amadurecimento e autodescoberta da protagonista, Lara Jean Covey.</p>
    <ul>
        <li>
            <p>1. Para Todos os Garotos que Já Amei
                O primeiro livro apresenta Lara Jean, uma adolescente com um costume peculiar: sempre que se apaixona, ela escreve uma carta de amor para o garoto, mas nunca a envia. No entanto, tudo muda quando essas cartas são misteriosamente entregues aos destinatários, expondo seus sentimentos secretos. Entre eles está Peter Kavinsky, um dos garotos mais populares da escola. Para controlar a situação e afastar suspeitas, Lara Jean e Peter decidem fingir um namoro, mas o que começa como um acordo logo se transforma em algo real, desafiando ambos a lidarem com emoções inesperadas.</p>
        </li>
        <li>
            <p>2. P.S.: Ainda Amo Você
                No segundo volume, Lara Jean e Peter estão oficialmente juntos, mas a relação deles é posta à prova quando um antigo amor ressurge: John Ambrose McClaren, um dos destinatários das cartas de Lara Jean. Conforme ela se reencontra com John e revive sentimentos antigos, precisa confrontar suas emoções e aprender sobre confiança, lealdade e o que realmente significa estar apaixonada. O livro explora de forma emocionante as dificuldades dos relacionamentos jovens e a descoberta do que realmente importa no amor.</p>
        </li>
        <li>
            <p>3. Agora e Para Sempre, Lara Jean
                No último livro da trilogia, Lara Jean enfrenta um novo desafio: o fim do ensino médio e a incerteza sobre o futuro. Ela sonha em ir para a mesma faculdade que Peter, mas seus planos são ameaçados quando recebe uma notícia inesperada. Enquanto tenta equilibrar suas relações familiares, seu relacionamento e suas próprias aspirações, Lara Jean percebe que crescer significa tomar decisões difíceis. Esse volume encerra a história com uma mensagem poderosa sobre maturidade, independência e a importância de seguir os próprios sonhos.</p>
        </li>
        <li>
            <p>Impacto e Adaptação para o Cinema
                A trilogia se tornou um fenômeno mundial e teve suas histórias adaptadas em uma série de filmes pela Netflix. Os filmes, estrelados por Lana Condor como Lara Jean e Noah Centineo como Peter Kavinsky, trouxeram ainda mais popularidade à saga. Com um elenco carismático e um roteiro que respeita a essência dos livros, as adaptações conquistaram fãs e reforçaram a relevância da história para novas gerações.</p>
        </li>
        <li>
            <p>Conclusão
                A trilogia Para Todos os Garotos que Já Amei é um romance envolvente e cheio de emoção, abordando temas como amor, amizade e crescimento pessoal. A jornada de Lara Jean reflete as inseguranças e esperanças da juventude, tornando-se uma leitura inesquecível para diversos leitores.
                Se você busca um romance leve e cativante, essa trilogia é uma escolha imperdível!</p>
        </li>
    </ul>`
];

// Classe principal para gerenciar a aplicação
class BibliotecaApp {
    constructor() {
        this.inicializarCarrossel();
        this.carregarDestaques();
        this.carregarResenhas();
        this.carregarGeneros();
        this.inicializarTema();
    }

    // Carrossel de Destaques
    inicializarCarrossel() {
        const container = document.querySelector('.carousel-container');
        const btnPrev = document.querySelector('.carousel-btn.prev');
        const btnNext = document.querySelector('.carousel-btn.next');

        if (container && btnPrev && btnNext) {
            btnPrev.addEventListener('click', () => {
                container.scrollBy({ left: -300, behavior: 'smooth' });
            });

            btnNext.addEventListener('click', () => {
                container.scrollBy({ left: 300, behavior: 'smooth' });
            });
        } else {
            console.error("Elementos do carrossel não encontrados.");
        }
    }

    // Carregar Livros em Destaque
    carregarDestaques() {
        const container = document.querySelector('.carousel-container');
        if (!container) return;

        container.innerHTML = livrosDestaques.map(livro => `
            <div class="livro-card">
                <img src="${livro.imagem}" alt="Capa do livro ${livro.titulo}" class="livro-imagem" data-id="${livro.id}">
                <div class="livro-info">
                    <h3>${livro.titulo}</h3>
                    <p>${livro.autor}</p>
                    <div class="avaliacao">
                        ${this.criarEstrelas(livro.avaliacao)}
                    </div>
                    <button class="btn-mais-info" data-id="${livro.id}">Mais Informações</button>
                </div>
            </div>
        `).join('');

        this.adicionarEventosMaisInfo();
    }

    // Adicionar eventos para os botões "Mais Informações"
    adicionarEventosMaisInfo() {
        const btnsMaisInfo = document.querySelectorAll('.btn-mais-info');
        btnsMaisInfo.forEach(btn => {
            btn.addEventListener('click', (event) => {
                const id = event.target.getAttribute('data-id');
                this.exibirInformacoesLivro(id);
            });
        });
    }

    // Exibir informações do livro em um modal
    exibirInformacoesLivro(id) {
        const livro = livrosDestaques.find(l => l.id == id);
        if (!livro) return;

        const modal = document.createElement('div');
        modal.classList.add('modal');
        modal.innerHTML = `
            <div class="modal-conteudo">
                <span class="fechar">&times;</span>
                <h2>${livro.titulo}</h2>
                <p><strong>Autor:</strong> ${livro.autor}</p>
                <p><strong>Gênero:</strong> ${livro.genero}</p>
                <p><strong>Lançamento:</strong> ${livro.lancamento}</p>
                <p><strong>Sinopse:</strong> ${livro.sinopse}</p>
            </div>
        `;
        document.body.appendChild(modal);

        // Fechar o modal ao clicar no "x"
        modal.querySelector('.fechar').addEventListener('click', () => {
            document.body.removeChild(modal);
        });

        // Fechar o modal ao clicar fora do conteúdo
        modal.addEventListener('click', (event) => {
            if (event.target === modal) {
                document.body.removeChild(modal);
            }
        });
    }

    // Carregar Últimas Resenhas
    carregarResenhas() {
        const container = document.querySelector('.resenhas-grid');
        if (!container) return;

        container.innerHTML = ultimasResenhas.map(resenha => `
            <div class="resenha-card">
                <img src="${resenha.imagem}" alt="${resenha.titulo}">
                <div class="resenha-info">
                    <h3>${resenha.titulo}</h3>
                    <p class="autor">Por ${resenha.autor}</p>
                    <p class="data">${this.formatarData(resenha.data)}</p>
                    <p class="resumo">${resenha.resumo}</p>
                    <button class="btn-ler-mais">Ler mais</button>
                </div>
            </div>
        `).join('');
    }

    // Carregar Gêneros Literários
    carregarGeneros() {
        const container = document.querySelector('.generos-grid');
        if (!container) return;

        container.innerHTML = generos.map(genero => `
            <div class="genero-card">
                <i class="fas ${genero.icone}"></i>
                <h3>${genero.nome}</h3>
            </div>
        `).join('');
    }

    // Gerenciamento de Tema (Claro/Escuro)
    inicializarTema() {
        const btnTema = document.getElementById('theme-toggle');
        if (!btnTema) return;

        const temaAtual = localStorage.getItem('tema') || 'light';
        document.body.setAttribute('data-theme', temaAtual);
        this.atualizarBotaoTema(btnTema, temaAtual);

        btnTema.addEventListener('click', () => {
            const novoTema = document.body.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
            document.body.setAttribute('data-theme', novoTema);
            localStorage.setItem('tema', novoTema);
            this.atualizarBotaoTema(btnTema, novoTema);
        });
    }

    // Utilitários
    criarEstrelas(avaliacao) {
        const estrelaCheia = '<i class="fas fa-star"></i>';
        const estrelaMeia = '<i class="fas fa-star-half-alt"></i>';
        const estrelaVazia = '<i class="far fa-star"></i>';
        
        let estrelas = '';
        const avaliacaoInteira = Math.floor(avaliacao);
        const temMeia = avaliacao % 1 >= 0.5;

        for (let i = 1; i <= 5; i++) {
            if (i <= avaliacaoInteira) {
                estrelas += estrelaCheia;
            } else if (i === avaliacaoInteira + 1 && temMeia) {
                estrelas += estrelaMeia;
            } else {
                estrelas += estrelaVazia;
            }
        }

        return estrelas;
    }

    formatarData(data) {
        return new Date(data).toLocaleDateString('pt-BR', {
            day: '2-digit',
            month: 'long',
            year: 'numeric'
        });
    }

    atualizarBotaoTema(btn, tema) {
        btn.innerHTML = tema === 'light' ? 
            '<i class="fas fa-moon"></i>' : 
            '<i class="fas fa-sun"></i>';
    }
}

// Inicializar a aplicação quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', () => {
    new BibliotecaApp();
});

document.addEventListener('DOMContentLoaded', function() {
    console.log('Página do blog carregada e pronta para uso!');
    
    // Exemplo de funcionalidade adicional
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            console.log(`Navegando para: ${this.href}`);
        });
    });
});// scripts.js
document.addEventListener('DOMContentLoaded', function() {
    console.log('Página inicial carregada e pronta para uso!');
});