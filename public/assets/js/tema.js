$(document).ready(function() {
    const themeToggleBtn = $('#theme-toggle');

    function applyTheme(theme) {
        $('html').attr('data-bs-theme', theme);
        document.documentElement.style.colorScheme = theme;
        localStorage.setItem('theme', theme);
    }
  
    // Função para alternar o tema e salvar a preferência no localStorage
    function toggleTheme() {
        const htmlTag = $('html');
  
        // Verifica se o atributo 'data-bs-theme' está definido na tag <html>
        const isDarkTheme = htmlTag.attr('data-bs-theme') === 'dark';
  
        // Alterna entre os temas e ajusta o atributo 'data-bs-theme' na tag <html>
        if (isDarkTheme) {
            applyTheme('light');
        } else {
            applyTheme('dark');
        }
    }
  
    // Carregar o tema salvo no localStorage ou a preferência do sistema operacional/navegador
    const prefersDarkTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const savedTheme = localStorage.getItem('theme');
  
    if (savedTheme) {
        applyTheme(savedTheme);
    } else if (prefersDarkTheme) {
        applyTheme('dark');
    } else {
        applyTheme('light');
    }
  
    // Adicionar evento ao botão de alternar tema
    themeToggleBtn.on('click', toggleTheme);
});
