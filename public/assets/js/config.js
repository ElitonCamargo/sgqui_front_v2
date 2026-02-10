const urlApi = 'http://back.fertiglobalbrasil.com.br';
//

const opt = {
  "urlApi": urlApi,
  "urlLogar": `${urlApi}/usuario/login`,
  "urlElemento": `${urlApi}/elemento`,
  "urlNutriente": `${urlApi}/nutriente`,
  "urlMateriaPrima": `${urlApi}/materia_prima`,
  "urlGarantia": `${urlApi}/garantia`,
  "urlGarantiaMateriaPrima": `${urlApi}/garantia/materia_prima`,
  "urlProjeto": `${urlApi}/projeto`,
  "urlUsuario": `${urlApi}/usuario`,
  "urlEtapa": `${urlApi}/etapa`,
  "urlEtapaMp": `${urlApi}/etapa_mp`,
  "urlConfig": `${urlApi}/configuracao`,
  "usuario": `${urlApi}/usuario`,
  "urlPerfis": `${urlApi}/rbac/perfis`,
  "urlUsuarioPerfis": `${urlApi}/rbac/usuario_perfis`,
  "urlPermissoes": `${urlApi}/rbac/permissoes`,
  "urlPerfilPermissoes": `${urlApi}/rbac/perfil_permissoes`,
  "urlTrocarPerfil": `${urlApi}/usuario/perfil/trocar`
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
