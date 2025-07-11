/**
 * ARQUIVO DE SCRIPT PRINCIPAL
 * 
 * Este arquivo contém os scripts para interatividade do site.
 * A principal funcionalidade aqui é inicializar a biblioteca
 * Animate On Scroll (AOS) que cria os efeitos de fade e zoom
 * quando o usuário rola a página.
 */

// Espera o conteúdo da página carregar completamente antes de executar o script
document.addEventListener('DOMContentLoaded', function() {

    // Inicializa a biblioteca Animate On Scroll (AOS)
    AOS.init({
        // Configurações globais da biblioteca:

        // Duração da animação em milissegundos.
        // Valores entre 500 e 1500 funcionam bem.
        duration: 800,

        // Tipo de "suavização" da animação. 'ease-in-out' é uma boa opção padrão.
        easing: 'ease-in-out',

        // Se a animação deve acontecer apenas uma vez.
        // 'true' = anima uma vez e para.
        // 'false' = anima toda vez que rolar para cima e para baixo.
        once: false,

        // Atraso global para as animações (em ms).
        delay: 100,

        // Distância para o elemento aparecer antes de a animação começar (em pixels).
        // Útil para que a animação não comece "fora da tela".
        offset: 120 
    });

    // Você pode adicionar mais códigos JavaScript aqui no futuro,
    // como validação de formulários, um carrossel customizado, etc.
    console.log("Site inicializado e animações prontas!");

});