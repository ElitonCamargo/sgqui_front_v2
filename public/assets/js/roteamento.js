const rotas = [{
        'path': '',
        'component': '/page/home.html',
    },
    {
        'path': '/',
        'component': '/page/home.html'
    },
    {
        'path': '/elemento/listar',
        'component': '/page/elemento.listar.html'
    },
    {
        'path': '/nutrientes/cadastrar',
        'component': '/page/nutrientes.cadastrar.html',
        'key':"nutriente:cadastrar"
    },
    {
        'path': '/nutrientes/listar',
        'component': '/page/nutrientes.listar.html',
        'key':"nutriente:consultar"
    },
    {
        'path': '/materia_prima/cadastrar',
        'component': '/page/materia_prima.cadastrar.html',
        'key':"materia_prima:cadastrar"
    },
    {
        'path': '/materia_prima/listar',
        'component': '/page/materia_prima.listar.html',
        'key':"materia_prima:consultar"
    },
    {
        'path': '/projeto/cadastrar',
        'component': '/page/projeto.cadastrar.html',
        'key':"projeto:cadastrar"
    },
    {
        'path': '/projetos/listar',
        'component': '/page/projeto.listar.html',
        'key':"projeto:consultar"
    },
    {
        'path': '/projeto/detalhado',
        'component': '/page/projeto.etapa.html',
        'key':"projeto:consultarDetalhado"

    },
    {
        'path': '/usuario/perfis',
        'component': '/page/usuario.perfis.html',
        'key':"perfis:listar"
    },
    {
        'path': '/usuario/cadastrar',
        'component': '/page/usuario.cadastrar.html',
        'key':"usuario:cadastrar"
    },
    {
        'path': '/usuario/listar',
        'component': '/page/usuario.listar.html',
        'key':"usuario:consultar"
    },
    {
        'path': '/usuario/trocar-senha',
        'component': '/page/usuario.trocar-senha.html',
 
    },
    {
        'path': '/configuracoes/configuracao-impressao',
        'component': '/page/configuracao-impressao.html',
        'key':'config:consultar'
    },
];

const rotear = (rotaUrl = window.location.pathname) => {
    const rotaEncontrada = rotas.find(rota => rota.path.toLowerCase() === rotaUrl.toLowerCase());
    return rotaEncontrada || {
        path: '/error',
        component: '/page/erro.html'
    };
}


$(function () {

    let rota = rotear();

    if (rota && rota.key) {
        const permissoes = getPermissoes() || {};
        if (permissoes[rota.key] !== true) {
            window.history.replaceState({}, '', '/');
            rota = rotear('/');
        }
    }

    if (getSessionData('tk')) {
        if (rota) {
            $("#root").empty();
            $("#root").load(rota.component);
        } else {
            $("#root").load('/page/erro.html');
        }
    }
});