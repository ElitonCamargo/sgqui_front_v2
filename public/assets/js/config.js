const urlApi = 'http://localhost:3031';
// const urlApi = 'http://back.fertiglobalbrasil.com.br';
//

const opt = {
  "urlApi": urlApi,
  "usuario": `${urlApi}/rbac/usuario`,
  "urlUsuario": `${urlApi}/rbac/usuario`,
  "urlLogar": `${urlApi}/rbac/usuario/login`,
  "urlUsuarioPerfis": `${urlApi}/rbac/usuario_perfis`,
  "urlTrocarPerfil": `${urlApi}/rbac/usuario/perfil/trocar`,

  "urlPerfis": `${urlApi}/rbac/perfis`,
  "urlPermissoes": `${urlApi}/rbac/permissoes`,
  "urlPerfilPermissoes": `${urlApi}/rbac/perfil_permissoes`,
  "urlPermissoesPorIdPerfil": `${urlApi}/rbac/perfil_permissoes/acessos`,
  "urlPerfilPermissoes": `${urlApi}/rbac/perfil_permissoes`,

  "urlElemento": `${urlApi}/formulacao/elemento`,
  "urlNutriente": `${urlApi}/formulacao/nutriente`,
  "urlMateriaPrima": `${urlApi}/formulacao/materia_prima`,
  "urlGarantia": `${urlApi}/formulacao/garantia`,
  "urlGarantiaMateriaPrima": `${urlApi}/formulacao/garantia/materia_prima`,
  "urlProjeto": `${urlApi}/formulacao/projeto`,
  "urlRegulacaoProjeto": `${urlApi}/regulatorio/projeto`,
  "urlRegulacaoProdutos": `${urlApi}/regulatorio/produtos`,
  "urlProducaoProdutos": `${urlApi}/producao/produtos`,
  "urlRegistrosProducao": `${urlApi}/producao/registros_producao`,
  "urlEtapa": `${urlApi}/formulacao/etapa`,
  "urlEtapaMp": `${urlApi}/formulacao/etapa_mp`,
  "urlConfig": `${urlApi}/formulacao/configuracao`
}

//OPTIONS PARA OS SELECTS DE PROJETO
const selectsProjeto = {
    status: [
        "Não inicializado",
        "Inicializado",
        "Em andamento",
        "Finalizado",
        "Liberado",
        "Bloqueado"
    ],
    natureza: [
        "Fluido (Solução)",
        "Fluido (Suspensão)",
        "Susp. Concentrada",
        "Sólido"
    ],
    tipoFertilizante: [
        "Mineral Misto/Simples",
        "Organomineral"
    ],
    modoAplicacao: [
        "Foliar",
        "Fertirrigação",
        "Pulverização",
        "Adubação",
        "Solo",
        "Hidroponia",
        "Semente"
    ]
};


const statusRelatorioRegulacao = [
    'Liberado'
];

const statusRelatorioProducao = [
    'Liberado'
];

const statusProdutoRegulatorio = [
    'Rascunho',
    'Aguardando',
    'Liberado'
];
