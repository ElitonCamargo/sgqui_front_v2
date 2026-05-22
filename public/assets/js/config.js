const urlApi = 'http://localhost:3031';
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
  "urlEtapa": `${urlApi}/formulacao/etapa`,
  "urlEtapaMp": `${urlApi}/formulacao/etapa_mp`,
  "urlConfig": `${urlApi}/formulacao/configuracao`
}


const selectsProjeto = {
  status: [
    "Não Iniciado",
    'Inicializando',
    "Em Andamento",
    "Finalizado"
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
    "Solo",
    "Hidroponia",
    "Semente"
  ]
};
