# Sistema WaterTrack

## Apresentação
O Sistema WaterTrack é um projeto focado na **redução da poluição marinha**. Desenvolvido pelo grupo de alunos do 3º ano de Sistemas de Informação da FIAP, em parceria com Softtek, Select Soluções e AWS, o projeto visa monitorar a qualidade da água marinha ao longo da costa brasileira por meio de uma aplicação móvel e uma rede de bóias.

## Objetivo
Criar um mapeamento detalhado da qualidade da água marinha ao longo do litoral brasileiro, fornecendo dados precisos e atualizados para entidades públicas, ONGs e empresas privadas, permitindo uma gestão sustentável dos recursos oceânicos.

### Aplicação Mobile
- Permite aos usuários registrarem locais de poluição da água oceânica.
- Integra os dados dos usuários com as informações coletadas pelas bóias.

## Arquitetura do Sistema
O Sistema WaterTrack utiliza uma arquitetura de microsserviços (MSA) para garantir robustez, simplicidade, eficiência e independência. 

### Componentes dos Microsserviços
- **Serviço de Sensores**
- **Serviço em Nuvem**
- **Serviço de Aplicação Móvel**
- **Gateway de API**
- **Serviço de Processamento de Dados**
- **Serviço de Visualização de Dados**
- **Serviço de Segurança**
- **Serviço de Monitoramento e Log**
- **Serviço de Autenticação**
- **Serviço de Gestão de Usuários**
- **Serviço de Controle de Acesso baseado em Papéis**

## Modelagem de Processos de Negócio (BPMN)
### Diagramas de Fluxo Funcional
- Diagrama de Fluxo Funcional Transversal do Processo "Registrar Local Poluído":

    <img src="https://i.postimg.cc/g2j580RL/img1.png" alt="Diagrama de Fluxo Funcional Transversal do Processo Registrar Local Poluído" width="400"/>

- Processo "Registrar Dados de Análise da Água":

    <img src="https://i.postimg.cc/cCj3zT9S/img2.png" alt="Processo Registrar Dados de Análise da Água" width="400"/>

## Prototipação Não Funcional
Detalha os aspectos da interface e experiência do usuário, bem como outros aspectos técnicos e estruturais essenciais para a implementação e operação do sistema.

## Executando o Projeto

### Pré-requisitos

Certifique-se de ter o Node.js e o npm instalados em seu sistema.

### Passos

1. **Clone este repositório para o seu sistema local:**

    ```bash
    git clone https://github.com/seu-usuario/skateshop.git
    ```

2. **Navegue até o diretório do projeto:**

    ```bash
    cd skateshop
    ```

3. **Instale as dependências do projeto:**

    ```bash
    npm install
    ```

4. **Execute o projeto:**

    ```bash
    npm run dev
    ```

5. **Abra o navegador e acesse `http://localhost:5173/` para visualizar o aplicativo.**


## Links Importantes
- [Protótipo no Figma](https://www.figma.com/design/9BcmMU32MvjGYVqi29QhPu/WaterTrack?node-id=0-1&t=fPlJBHvH5jENUGBs-1)
- [Repositório no GitHub](https://github.com/pacienciadev/watertrack-fiap-si)
- [Documentação Loop](https://fiapcom.sharepoint.com/:fl:/g/contentstorage/CSP_7aa5d1ca-a186-4894-8e38-b6f6254e1543/EUKmXSezHF5EsLaJB97LIrEBX4bvb-wEvX333l-9cHEaFQ?e=6L6EGz&nav=cz0lMkZjb250ZW50c3RvcmFnZSUyRkNTUF83YWE1ZDFjYS1hMTg2LTQ4OTQtOGUzOC1iNmY2MjU0ZTE1NDMmZD1iJTIxeXRHbGVvYWhsRWlPT0xiMkpVNFZROUZrQjU2RW55SktycHo4VDBWemxmWDFGMDNseXZQbFJhRDgxX0JXTHFvdyZmPTAxSE9NUk5MQ0NVWk9TUE1ZNExaQ0xCTlVKQTdQTVdJVlImYz0lMkYmYT1Mb29wQXBwJnA9JTQwZmx1aWR4JTJGbG9vcC1wYWdlLWNvbnRhaW5lciZ4PSU3QiUyMnclMjIlM0ElMjJUMFJUVUh4bWFXRndZMjl0TG5Ob1lYSmxjRzlwYm5RdVkyOXRmR0loZVhSSGJHVnZZV2hzUldsUFQweGlNa3BWTkZaUk9VWnJRalUyUlc1NVNrdHljSG80VkRCV2VteG1XREZHTUROc2VYWlFiRkpoUkRneFgwSlhUSEZ2ZDN3d01VaFBUVkpPVEVnMlNFaEJOMW8zUlVKWFZrUkpXVVJXU1UxUlNGRk1OVUZFJTIyJTJDJTIyaSUyMiUzQSUyMmVkZDBhMzAyLWVjZTgtNDQ0My1iNDk0LTFjMGY2ZTNkYzNmOSUyMiU3RA%3D%3D)

## Licença
Este projeto está licenciado sob a MIT License - veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

Desenvolvido por alunos do 3º ano de Sistemas de Informação da FIAP.
