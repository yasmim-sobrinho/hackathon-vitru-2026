# Authoring Bundles dos agentes

Aqui ficam os agentes Agentforce versionados como metadata `AiAuthoringBundle`.
Cada agente é um diretório com um arquivo Agent Script `.agent` e seu
`.bundle-meta.xml`.

## Estrutura esperada

```text
aiAuthoringBundles/
├── VitruEducationalSales/
│   ├── VitruEducationalSales.agent
│   └── VitruEducationalSales.bundle-meta.xml
└── VitruStudentOnboarding/
    ├── VitruStudentOnboarding.agent
    └── VitruStudentOnboarding.bundle-meta.xml
```

## Estado atual

Os bundles ainda **não foram gerados**. Depende de org autenticada.

Nomes provisórios e responsabilidades estão especificados em:

- `docs/specs/agent-educational-sales.md`
- `docs/specs/agent-student-onboarding.md`

## Como gerar (após autenticar a org)

Não escreva os arquivos à mão. Use o CLI, que produz a estrutura correta para
a versão de API do org:

```bash
# 1. Conferir as opções disponíveis no CLI instalado
sf agent generate agent-spec --help
sf agent generate authoring-bundle --help

# 2. Gerar o spec e o bundle de cada agente
sf agent generate agent-spec
sf agent generate authoring-bundle

# 3. Validar o Agent Script antes de publicar
sf agent validate

# 4. Preview simulado ou live
sf agent preview

# 5. Publicar
sf agent publish authoring-bundle
```

## Regra crítica

**Não sobrescrever agentes existentes da Vitru no org.** Antes de qualquer
deploy, listar o que já existe e confirmar que os nomes escolhidos não colidem.
