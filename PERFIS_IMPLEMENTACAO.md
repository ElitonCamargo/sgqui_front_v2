# Implementação do CRUD de Perfis de Usuário

## 📋 Resumo
Implementação completa do CRUD (Create, Read, Update, Delete) para gerenciamento de Perfis de Usuário, baseado na documentação da API encontrada no Postman (coleção SG_QUI).

## 🔗 Endpoints da API Utilizados

### Base URL: `https://sgqui.vercel.app/rbac/perfis`

| Método | Endpoint | Descrição | Body |
|--------|----------|-----------|------|
| GET | `/rbac/perfis` | Listar todos os perfis | - |
| GET | `/rbac/perfis/:id` | Buscar perfil por ID | - |
| GET | `/rbac/perfis/nome/:nome` | Buscar perfil por nome | - |
| POST | `/rbac/perfis` | Cadastrar novo perfil | `{ nome, descricao }` |
| PUT | `/rbac/perfis/:id` | Atualizar perfil | `{ nome, descricao }` |
| DELETE | `/rbac/perfis/:id` | Excluir perfil | - |

### Estrutura dos Dados
```json
{
  "id": 1,
  "nome": "ADMINISTRADOR",
  "descricao": "Acesso total e administração de usuários/perfis"
}
```

## 📂 Arquivos Modificados

### 1. `config.js`
**Localização:** `public/assets/js/config.js`

Adicionadas as URLs dos endpoints de RBAC:
```javascript
"urlPerfis": `${urlApi}/rbac/perfis`,
"urlUsuarioPerfis": `${urlApi}/rbac/usuario_perfis`,
"urlPermissoes": `${urlApi}/rbac/permissoes`,
"urlPerfilPermissoes": `${urlApi}/rbac/perfil_permissoes`
```

### 2. `usuario.perfis.html`
**Localização:** `public/page/usuario.perfis.html`

Implementação completa do CRUD com:

#### **Funcionalidades Implementadas:**

1. **Listar Perfis (Read)**
   - DataTable com paginação e busca
   - Colunas: Nome, Descrição, Ações
   - Campos de filtro por coluna
   - Ordenação padrão por ID

2. **Cadastrar Perfil (Create)**
   - Modal de cadastro com formulário
   - Campos: Nome (obrigatório), Descrição (opcional)
   - Validação de dados
   - Feedback de sucesso/erro

3. **Visualizar/Editar Perfil (Update)**
   - Modal de detalhes/edição
   - Modo leitura inicial
   - Botão "Editar" habilita edição
   - Atualização via PUT
   - Campos: Nome, Descrição

4. **Excluir Perfil (Delete)**
   - Modal de confirmação
   - Proteção contra exclusão do perfil ADMINISTRADOR (ID 1)
   - Feedback de confirmação

#### **Recursos Adicionais:**
- Recarregamento automático da tabela após operações
- Mensagens de sucesso/erro
- Tratamento de erros de API
- Interface responsiva com Bootstrap 5
- Ícones FontAwesome
- jQuery DataTables com i18n pt-BR

### 3. `nav.json`
**Localização:** `public/page/nav.json`

O menu já estava configurado com o link "Perfis de Usuário" no dropdown de Usuários:
```json
{
  "title": "Perfis de Usuário",
  "url": "/usuario/perfis"
}
```

### 4. `roteamento.js`
**Localização:** `public/assets/js/roteamento.js`

Rota já estava configurada:
```javascript
{
  'path': '/usuario/perfis',
  'component': '/page/usuario.perfis.html'
}
```

## 🔒 Regras de Negócio Implementadas

1. **Proteção de Dados Críticos**
   - Não permite exclusão do perfil ADMINISTRADOR (ID 1)
   - Validação de campos obrigatórios

2. **Validações**
   - Nome do perfil: obrigatório, máximo 100 caracteres
   - Descrição: opcional, máximo 500 caracteres

3. **Feedback ao Usuário**
   - Mensagens de sucesso após operações
   - Alertas de erro em caso de falhas
   - Confirmação antes de exclusões

## 🎨 Interface

### Layout
- Header com título e botão "Novo Perfil"
- Tabela responsiva com DataTables
- 3 modais:
  1. Modal de Cadastro
  2. Modal de Detalhes/Edição
  3. Modal de Confirmação de Exclusão

### Ações Disponíveis
- **Ver/Editar**: Ícone olho + lápis (azul)
- **Excluir**: Ícone ban (vermelho)
- **Novo Perfil**: Botão primário (topo da página)

## 📊 Fluxo de Dados

```
┌─────────────────┐
│   Frontend      │
│ usuario.perfis  │
│     .html       │
└────────┬────────┘
         │
         │ (jQuery + AJAX)
         │
┌────────▼────────┐
│   config.js     │
│   opt.urlPerfis │
└────────┬────────┘
         │
         │ (HTTP Requests)
         │
┌────────▼────────┐
│     API         │
│ /rbac/perfis    │
│ (Backend)       │
└─────────────────┘
```

## 🧪 Testes Recomendados

1. **Teste de Cadastro**
   - Cadastrar perfil com todos os campos
   - Cadastrar perfil apenas com nome
   - Tentar cadastrar sem nome (validação)

2. **Teste de Listagem**
   - Verificar exibição de todos os perfis
   - Testar busca por coluna
   - Testar ordenação

3. **Teste de Edição**
   - Abrir modal de edição
   - Modificar nome e descrição
   - Salvar alterações

4. **Teste de Exclusão**
   - Tentar excluir perfil ADMINISTRADOR (deve falhar)
   - Excluir perfil customizado
   - Confirmar exclusão

## 📝 Notas Importantes

1. **Autenticação**
   - Todos os endpoints (exceto login) requerem token Bearer
   - Token é gerenciado automaticamente pelo sistema

2. **Permissões**
   - Baseado no sistema RBAC implementado
   - Usuário precisa ter permissões adequadas para cada operação

3. **Endpoints Relacionados**
   - `/rbac/usuario_perfis`: Vincular usuários a perfis
   - `/rbac/permissoes`: Listar permissões disponíveis
   - `/rbac/perfil_permissoes`: Vincular permissões a perfis

## 🚀 Próximos Passos Sugeridos

1. **Gestão de Permissões**
   - Criar página para associar permissões aos perfis
   - Visualizar permissões de cada perfil

2. **Gestão de Usuários-Perfis**
   - Criar página para vincular usuários a perfis
   - Visualizar perfis de cada usuário

3. **Melhorias UX**
   - Adicionar paginação customizada
   - Implementar exportação de dados
   - Adicionar histórico de alterações

## 📚 Referências

- **Documentação API**: Postman Collection "SG_QUI" > "Controle de acesso" > "Perfis"
- **Collection ID**: `50856200-81282983-6b90-49a7-ab04-993b91a783f8`
- **Workspace**: SG_QUI (`af29eaf0-9804-46f4-a4bf-c602bf2a23b7`)

---
**Data de Implementação:** 10/02/2026  
**Implementado por:** GitHub Copilot (Claude Sonnet 4.5)
