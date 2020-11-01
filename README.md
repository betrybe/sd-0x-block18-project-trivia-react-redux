Ao iniciar este projeto, você concorda com as diretrizes do Código de Ética e Conduta e do Manual da Pessoa Estudante da Trybe.

# Boas vindas ao repositório do projeto de Trivia!

Você já usa o GitHub diariamente para desenvolver os exercícios, certo? Agora, para desenvolver os projetos, você deverá seguir as instruções a seguir. Fique atento a cada passo, e se tiver qualquer dúvida, nos envie por _Slack_! #vqv 🚀

Aqui você vai encontrar os detalhes de como estruturar o desenvolvimento do seu projeto a partir desse repositório, utilizando uma branch específica e um _Pull Request_ para colocar seus códigos.

## HABILIDADES

Nesse projeto, você será capaz de:

  - Criar um store Redux em aplicações React

  - Criar reducers no Redux em aplicações React

  - Criar actions no Redux em aplicações React

  - Criar dispatchers no Redux em aplicações React

  - Conectar Redux aos componentes React

  - Criar actions assíncronas na sua aplicação React que faz uso de Redux.

## Entregáveis

Para entregar o seu projeto você deverá criar um Pull Request neste repositório.

Lembre-se que você pode consultar nosso conteúdo sobre [Git & GitHub](https://course.betrybe.com/intro/git/) sempre que precisar!

---

# O que deverá ser desenvolvido

Você deverá desenvolver um jogo de perguntas e respostas baseado no jogo **Trivia** _(tipo um show do milhão americano rs)_ utilizando _React e Redux_, desenvolvendo em grupo suas funcionalidades de acordo com as demanas definidas em um quadro _Kanban_, em um cenário mais próximo do mercado de trabalho, você deve fazer uma cópia desse quadro para utilizar com seu grupo. A partir dessas demandas, teremos uma aplicação onde as pessoa usuária poderá:

  - Logar no jogo e, se o email tiver cadastro no site [Gravatar](https://pt.gravatar.com/), a foto será associada ao perfil do usuário.
  - Acessar a página referente ao jogo, onde deverá escolher uma das respostas disponíveis para cada uma das perguntas. A resposta deve ser marcada antes do contador chegar a zero, caso contrário, a resposta deverá ser considerada errada.
  - Ser redirecionada, após 5 perguntas respondidas, para a tela de score, onde o texto mostrado depende do número de acertos.
  - Visualizar a página de ranking, se quiser, ao final de cada jogo.
  - Configurar algumas opções para o jogo em uma tela de configuração acessível a partir do header do app.

Você pode acessar um protótipo no link abaixo:

https://www.figma.com/file/9XUqIwKEFBfbZn5t8MMZJY/Trivia---project?node-id=0%3A1

#### ⚠️ Sinta-se livre para alterar a UI. Só respeite os atributos `data-testid`; eles serão usados na correção do exercício.

#### ⚠️ Para ver os comentários sobre cada componente, basta clicar no ícone de comentários no Figma (lado esquerdo superior).

![image](https://res.cloudinary.com/drdpedroso/image/upload/c_scale,w_400/v1575815877/Screenshot_2019-12-08_at_11.37.25_kzt7rl.png)

---

## Desenvolvimento

Você deve desenvolver uma aplicação em React que use Redux como ferramenta de manipulação de estado.

Através dessa aplicação, será possível realizar operações básicas de criação e manipulação de um estado em Redux.

### Data de Entrega

  - Projeto individual.

  - Serão dois dias de projeto.
  
  - O projeto tem até a seguinte data: `DD/MM/YYYY - 14:00h`. Para ser entregue a avaliação final.

---

## Instruções para entregar seu projeto:

Este repositório **já conta com uma `main-group` para cada grupo**, identificada como `main-group-1` para o grupo 1, `main-group-2` para o grupo 2, e assim por diante. Para desenvolver, você sempre deve:

* **Criar sua branch de desenvolvimento a partir da sua branch main**. Para isso, clone este repositório, faça o `git checkout main-group-XX && git pull` e em seguida o `git checkout -b main-group-XX-minha-feature`.
* Para criar uma Pull Request para fazer **Code Review**, entitule-a `[GRUPO XX] Meu título` e **sempre aponte a Pull Request da sua branch para a branch `main-group-XX` do seu grupo, como no exemplo abaixo:**

![Exemplo de como apontar uma Pull Request para a branch main do grupo](pull-request-para-branch-do-grupo.png)

* Quando várias pessoas desenvolvem para um mesmo projeto podem ocorrer **conflitos de merge** que precisarão ser resolvidos. Prestem atenção a isso!

⚠ **ATENÇÃO! É POSSÍVEL COMMITAR, POR ENGANO, NA BRANCH DE OUTRO GRUPO, ENTÃO TOME MUITO CUIDADO** ⚠

### ANTES DE COMEÇAR A DESENVOLVER:

1. Clone o repositório
  * `git clone git@github.com:tryber/sd-06-project-trivia-react-redux.git`.
  * Entre na pasta do repositório que você acabou de clonar:
    * `cd sd-06-project-trivia-react-redux`
  * Vá para a branch do seu grupo, com `git checkout main-group-XX && git pull`, onde `XX` é o número do seu grupo. Exemplos: `main-group-1`, `main-group-22`.

2. Instale as dependências e inicialize o projeto
  * Instale as dependências:
    * `npm install`
  * Inicialize o projeto:
    * `npm start` (uma nova página deve abrir no seu navegador com um texto simples)

3. Faça alterações separadas por novas branchs criadas a partir da branch `main-group-XX`, criando uma nova branch para cada demanda
  * Verifique que você está na branch `main-group-XX`
    * Exemplo: `git branch`
  * Se não estiver, mude para a branch `main-group-XX`
    * Exemplo: `git checkout main-group-XX && git pull`
  * Agora, crie uma branch para a demanda que você vai desenvolver do seu projeto
    * Você deve criar uma branch com uma breve descrição da demanda a ser desenvolvida
    * Exemplo: `git checkout -b main-group-XX-cria-campo-de-input`

4. Adicione as mudanças ao _stage_ do Git e faça um `commit`
  * Verifique que as mudanças ainda não estão no _stage_
    * Exemplo: `git status` (devem aparecer listadas as novas alterações em vermelho)
  * Adicione o arquivo alterado ao _stage_ do Git
      * Exemplo:
        * `git add .` (adicionando todas as mudanças - _que estavam em vermelho_ - ao stage do Git)
        * `git status` (devem aparecer listadas as novas alterações em verde)
  * Faça seus `commit`
      * Exemplo:
        * `git commit -m 'cria componente de input`
        * `git status` (deve aparecer uma mensagem tipo _nothing to commit_ )

5. Adicione a sua branch com o novo `commit` ao repositório remoto
  * Usando o exemplo anterior: `git push -u origin main-group-XX-cria-campo-de-input`

6. Crie um novo `Pull Request` _(PR)_
  * Vá até a página de _Pull Requests_ do [repositório no GitHub](https://github.com/tryber/sd-06-project-trivia-react-redux/pulls)
  * Clique no botão verde _"New pull request"_
  * Clique na caixa de seleção _"Compare"_ e escolha a branch do grupo, `main-group-XX`, e a sua branch **com atenção**
  * Coloque um título para a sua _Pull Request_
    * Exemplo: _"[GRUPO XX] Cria tela de busca"_
  * Clique no botão verde _"Create pull request"_
  * Adicione uma descrição para o _Pull Request_ e clique no botão verde _"Create pull request"_
  * **Não se preocupe em preencher mais nada por enquanto!**
  * Volte até a [página de _Pull Requests_ do repositório](https://github.com/tryber/sd-06-project-trivia-react-redux/pulls) e confira que o seu _Pull Request_ está criado

7. Assim que aprovado por pelo menos duas pessoas do seu grupo e o _Linter_ estiver adereçado, acesse **SEU** _Pull Request_ e clique no botão _"Merge pull request"_

---

### DURANTE O DESENVOLVIMENTO

* Faça `commits` das alterações que você fizer no código regularmente

* Lembre-se de sempre após um (ou alguns) `commits` atualizar o repositório remoto

* Os comandos que você utilizará com mais frequência são:
  1. `git status` _(para verificar o que está em vermelho - fora do stage - e o que está em verde - no stage)_
  2. `git add` _(para adicionar arquivos ao stage do Git)_
  3. `git commit` _(para criar um commit com os arquivos que estão no stage do Git)_
  4. `git push -u nome-da-branch` _(para enviar o commit para o repositório remoto na primeira vez que fizer o `push` de uma nova branch)_
  5. `git push` _(para enviar o commit para o repositório remoto após o passo anterior)_

---

### DEPOIS DE TERMINAR O DESENVOLVIMENTO

Para **"entregar"** seu projeto, siga os passos a seguir:

* Vá até a página **DO SEU** _Pull Request_, adicione a label de _"code-review"_ e marque seus colegas
  * No menu à direita, clique no _link_ **"Labels"** e escolha a _label_ **code-review**
  * No menu à direita, clique no _link_ **"Assignees"** e escolha **o seu usuário**
  * No menu à direita, clique no _link_ **"Reviewers"** e digite `students`, selecione o time `tryber/students-sd-0x`

Se ainda houver alguma dúvida sobre como entregar seu projeto, [aqui tem um video explicativo](https://vimeo.com/362189205).

---

### REVISANDO UM PULL REQUEST

⚠⚠⚠

À medida que você e as outras pessoas que estudam na Trybe forem entregando os projetos, vocês receberão um alerta via Slack para também fazer a revisão dos Pull Requests dos seus colegas. Fiquem atentos às mensagens do "Pull Reminders" no Slack!

Use o material que você já viu sobre [Code Review](https://course.betrybe.com/real-life-engineer/code-review/) para te ajudar a revisar os projetos que chegaram para você.

## COMO DESENVOLVER

Este repositório já contem um _template_ com um App React criado, configurado e com os testes automatizados que fazem parte da correção. Também conta com uma branch **main-group** para cada grupo, identificada como `main-group-1` para o grupo 1, `main-group-2` para o grupo 2 e assim por diante. Após clonar o projeto e instalar as dependências, você precisará montar toda a configuração do Redux.

* **Criar sua branch de desenvolvimento a partir da sua branch main**. Para isso, clone este repositório, faça o `git checkout main-group-XX && git pull` e em seguida o `git checkout -b main-group-XX-minha-feature`.
* Para criar uma Pull Request para fazer **Code Review**, entitule-a `[GRUPO XX] Meu título` e **sempre aponte a Pull Request da sua branch para a branch `main-group-XX` do seu grupo, como no exemplo abaixo:**

![Exemplo de como apontar uma Pull Request para a branch main do grupo](pull-request-para-branch-do-grupo.png)

* Quando várias pessoas desenvolvem para um mesmo projeto podem ocorrer **conflitos de merge** que precisarão ser resolvidos. Prestem atenção a isso!

⚠ **ATENÇÃO! É POSSÍVEL COMMITAR, POR ENGANO, NA BRANCH DE OUTRO GRUPO, ENTÃO TOME MUITO CUIDADO** ⚠

### Trivia API

A [API do Trivia](https://opentdb.com/api_config.php) é bem simples. Temos 2 endpoints que vamos precisar utilizar para esse exercício.

* **Pegar o token de sessão da pessoa que está jogando**
* **Pegar perguntas e respostas**

Primeiro, é necessário fazer um GET request para:

```
https://opentdb.com/api_token.php?command=request
```

Esse endpoint te retornará o token que vai ser utilizado nas requisições seguintes. Esse token expira em 6 horas e te retornará um `response_code: 3` caso esteja expirado.

```
{
   "response_code":0,
   "response_message":"Token Generated Successfully!",
   "token":"f00cb469ce38726ee00a7c6836761b0a4fb808181a125dcde6d50a9f3c9127b6"
}
```

Paga pegar as perguntas, você deve realizar um GET request para o seguinte endpoint:

```
https://opentdb.com/api.php?amount=${quantidade-de-perguntas-retornadas}&token=${seu-token-aqui}
// Recomendação
https://opentdb.com/api.php?amount=5&token=${seu-token-aqui}
```

Recomendamos pedir 5 perguntas de uma vez e controlar a disposição delas no código.

Essa API te retorna as perguntas no seguinte formato:

```
// tipo múltipla escolha
{
   "response_code":0,
   "results":[
      {
         "category":"Entertainment: Video Games",
         "type":"multiple",
         "difficulty":"easy",
         "question":"What is the first weapon you acquire in Half-Life?",
         "correct_answer":"A crowbar",
         "incorrect_answers":[
            "A pistol",
            "The H.E.V suit",
            "Your fists"
         ]
      }
   ]
}
```

```
// tipo booleana
{
   "response_code":0,
   "results":[
      {
         "category":"Entertainment: Video Games",
         "type":"boolean",
         "difficulty":"hard",
         "question":"TF2: Sentry rocket damage falloff is calculated based on the distance between the sentry and the enemy, not the engineer and the enemy",
         "correct_answer":"False",
         "incorrect_answers":[
            "True"
         ]
      }
   ]
}
```

Caso o token seja inválido, essa será a resposta da API:

```
{
   "response_code":3,
   "results":[]
}
```

---

### Gravatar

O Gravatar é um serviço que permite deixar o avatar global a partir do email cadastrado, ele mostra sua foto cadastrada em qualquer site vinculado.

Na tela de **Inicio**, a pessoa que joga pode colocar um e-mail que deve fazer uma consulta a API do [Gravatar](https://br.gravatar.com/site/implement/images/).

A Implementação é feita baseada no e-mail. Esse email deve ser transformado em uma hash `MD5` (https://br.gravatar.com/site/implement/hash/),
recomendamos utilizar o [CryptoJs](https://github.com/brix/crypto-js).

Por exemplo:
  - Instale o CryptoJS e importe o MD5: 
    `import md5 from 'crypto-js/md5';`

  - Converta o email do usuário:
    `md5(emailDoUsuário)`

Após a geração da hash, basta adicionar o valor gerado no final da URL:

```
https://www.gravatar.com/avatar/HASH-GERADA
// Exemplo
https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50
// Exemplo
<img src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50" />
```
<!-- Ele já exibe o default por padrão -->
<!-- Caso o e-mail não tenha uma foto vinculada ao Gravatar, exiba a imagem `default`:

```
https://www.gravatar.com/avatar/2d3bf5b67282f5f466e503d7022abcf3 -->
<!-- ``` -->

Lembre-se de manter o `data-testid` correto.

---

## REQUISITOS DO PROJETO

⚠️ Lembre-se que o seu projeto só será avaliado se estiver passando pelos _checks_ do **EsLint**.

Nesse projeto, a pessoa que joga deve conseguir completar o jogo e conseguir ver seu placar depois de responder todas as 5 perguntas, além de acessar a tela de configurações e de ranking.

Lembrem-se de utilizar os conhecimentos adquiridos ao longo dos últimos projetos nas ferramentas do React como o Router, Link, Redux e testes para ajudá-los a completar os requisitos.

Os requisitos do seu projeto são avaliados automaticamente, sendo utilizada a resolução `1366 x 768` (1366 pixels de largura por 768 pixels de altura). Logo, recomenda-se desenvolver seu projeto usando a mesma resolução, via instalação [deste plugin](https://chrome.google.com/webstore/detail/window-resizer/kkelicaakdanhinjdeammmilcgefonfh?hl=en) do `Chrome` para facilitar a configuração dessa resolução.

Todos os elementos devem respeitar os atributos descritos no protótipo.

### Linter

Para garantir a qualidade do seu código de forma a tê-lo mais legível, de mais fácil manutenção e seguindo as boas práticas de desenvolvimento nós utilizamos neste projeto o linter `ESLint`. Para rodar o linter localmente no seu projeto, execute o comando abaixo:

```bash
npm run lint
```

⚠ **PULL REQUESTS COM ISSUES DE LINTER NÃO SERÃO AVALIADAS. ATENTE-SE PARA RESOLVÊ-LAS ANTES DE FINALIZAR O DESENVOLVIMENTO!** ⚠

### Grupos de prioridade

Os requisitos são organizados por grupos de prioridade. **Demandas de um grupo de prioridade podem ser realizadas em paralelo, e são pré-requisito para as demandas do grupo de prioridade seguinte.** Por exemplo:

- **Requisitos 1 e 2:** Prioridade 0 (Deve ser feito PRIMEIRO)
- **Requisitos 3 a 5:** Prioridade 1 (Devem ser feitos APÓS OS REQUISITO 1 E 2, mas podem ser feitos em paralelo)
- **Requisitos 5 a 7:** Prioridade 2 (Devem ser feitos APÓS OS REQUISITO 3 A 5, mas podem ser feitos em paralelo)
...

Se você não seguir a ordem de prioridades terá que lidar com mais **conflitos de merge** e **demandas concorrentes**, onde o avanço de uma depende, necessariamente, do avanço de outra para poder acontecer.

Além disso, temos um conjunto de cards menos prioritários (**Prioridade 5**) que não são contemplados pelo avaliador automático mas são funcionalidades que acrescentarão muito ao trabalho quando este for apresentado em um portfólio.

### Execução de testes unitários

Para o projeto ser validado, todos os [testes E2E](https://www.guru99.com/end-to-end-testing.html) devem passar. É possível testar isso local rodando `npm run cy`. Esse comando roda a suite de testes do [Cypress](https://www.cypress.io/how-it-works/) que valida se o fluxo geral e os requisitos funcionais estão funcionando como deveriam.

Você pode também executar o comando `npm run cy:open` para ter um resultado visual dos testes executados.

Esses testes não consideram o layout de maneira geral, mas sim os atributos e informações corretas, então preste atenção nos atributos definidos no protótipo.

Os testes te darão uma mensagem de erro caso não estejam passando (seja qual for o motivo). 😉

#### Tela de início:

1. A pessoa que joga deve preencher as informações para iniciar um jogo

    * O campo de texto para o nome deve possuir o atributo `data-testid` com o valor `input-player-name`
    * O campo de texto para o email deve possuir o atributo `data-testid` com o valor `input-gravatar-email`
    * O botão "Jogar" que leva a pessoa ao jogo deve possuir o atributo `data-testid` com o valor `btn-play`
    * A pessoa que joga deve conseguir escrever seu nome no input de texto
    * A pessoa que joga deve conseguir escrever seu email no input de email
    * O botão "Jogar" deve ser desabilitado caso email e/ou nome não estejam preenchidos

1. A pessoa que joga deve ter acesso à tela de configurações através da tela inicial

    * O botão que leva a pessoa a tela de configurações deve possuir o atributo `data-testid` com o valor `btn-settings`
    * A tela de configurações deve possuir um título com o atributo `data-testid` contendo o valor `settings-title`

1. A pessoa jogadora deve iniciar um jogo

    * Após clicar no botão "Jogar", a pessoa deve ser redirecionada para a tela do jogo
    * Ao clicar no botão "Jogar", um requisição para a API do Trivia deve ser feita para obter o _token_ de jogador
    * O _token_ deve ser armazenado na aplicação e enviado em todas as requisições seguintes.
    * Salve no `LocalStorage` o _token_ recebido utilizando a chave `token`

#### Tela do jogo:

1. O _header_ deve conter as informações da pessoa jogadora

    * A imagem do perfil vinda do Gravatar em um elemento que deve possuir o atributo `data-testid` com o valor `header-profile-picture`
    * O nome da pessoa em um elemento que deve possuir o atributo `data-testid` com o valor `header-player-name`
    * O placar zerado em um elemento que deve possuir o atributo `data-testid` com o valor `header-score`

1. A página deve conter as informações relacionadas à pergunta

    * A pergunta e suas alternativas de resposta devem ser recebidas da API do Trivia
    * A categoria da pergunta (campo _category_) deve ser exibida em um elemento com o atributo `data-testid` com o valor `question-category` para a pessoa que está jogando
    * O texto da pergunta (campo _question_) deve ser exibido em um elemento com o atributo `data-testid` com o valor `question-text` para a pessoa que está jogando
    * O texto com as alternativas devem ser exibidos seguindo as regras abaixo:
        * O elemento com a alternativa correta deve possuir o atributo `data-testid` com o valor `correct-answer`
        * Os elementos com as alternativas incorretas devem possuir o atributo `data-testid` com o valor `wrong-answer-${index}`, com `${index}` iniciando com o valor `0`
        * As alternativas devem ser exibidas em ordem aleatória
        * Dica: utilize botões (`<button/>`) para as alternativas

1. Só deve ser possível escolher uma resposta correta por pergunta

1. Ao clicar em uma resposta, a resposta correta deve ficar verde e as incorretas, vermelhas
    * Utilize a propriedade css `border` com o valor `3px solid rgb(6, 240, 15)` para a alternativa correta.
    * Utilize a propriedade css `border` com o valor `3px solid rgb(255, 0, 0)` para as alternativas incorretas.

1. A pessoa que joga tem 30 segundos para responder cada pergunta

    * Caso a pergunta não seja respondida a tempo, a resposta é considerada como errada
    * Respostas incorretas não somam pontos ao placar
    * Um temporizador deve aparecer na tela da pessoa, começando de 30 segundos e indo de forma decrescente até zero
    * Após o tempo se esgotar, todos os botões das alternativas devem ser desabilitados

1. Ao clicar na resposta correta, pontos devem ser somados no placar da pessoa que está jogando

    * Você deve salvar a pontuação **atual** no `localStorage`
    * Leia a seção "Implementações técnicas" para mais detalhes
    * Respostas erradas não devem somar ao placar
    * A fórmula para cálculo dos pontos por pergunta é: `10 + (timer * dificuldade)`, onde timer é o tempo restante no contador de tempo e dificuldade é `hard: 3, medium: 2, easy: 1`, dependendo da pergunta. Exemplo: Se no momento da resposta correta o timer estiver contando 17 segundos, e a dificuldade da pergunta é 2 (média), a pontuação deve ser: `10 + (17 * 2) = 44`;

1. Após a resposta ser dada, o botão "Próxima" deve aparecer

    * O botão "Próxima" deve possuir o atributo `data-testid` com o valor `btn-next`
    * Ao clicar nesse botão, a próxima pergunta deve aparecer na tela

1. A pessoa que joga deve responder 5 perguntas no total

    * A cada nova pergunta o temporizador deve ser reiniciado para 30 segundos
    * Após a quinta pergunta, o botão "Próxima" deve redirecionar a pessoa para a tela de _Feedback_
    * Para perguntas com type:"boolean", mostrar somente 2 campos (um para cada resposta possível)
    * Para perguntas com type:"multiple", mostrar a quantidade necessária de campos (um para cada resposta possível)

#### Tela de feedback:

1. O _header_ de _feedback_ deve conter as informações da pessoa jogadora

    * A imagem do perfil vinda do Gravatar em um elemento que deve possuir o atributo `data-testid` com o valor `header-profile-picture`
    * O nome da pessoa em um elemento que deve possuir o atributo `data-testid` com o valor `header-player-name`
    * O placar com o valor **atual** em um elemento que deve possuir o atributo `data-testid` com o valor `header-score`

1. A pessoa deve ver a mensagem de _feedback_
    * A mensagem deve ser "Podia ser melhor..." caso a pessoa acerte menos de 3 perguntas
    * A mensagem deve ser "Mandou bem!" caso a pessoa acerte 3 perguntas ou mais
    * O elemento da mensagem de _feedback_ deve possuir o atributo `data-testid` com o valor `feedback-text`

1. A pessoa jogadora deve ver as informações relacionadas aos resultados obtidos

    * O placar final deve ser mostrado em um elemento com o atributo `data-testid` com o valor `feedback-total-score`
    * O número de perguntas que a pessoa acertou deve ser exibido em um elemento com o atributo `data-testid` com o valor `feedback-total-question`

1. A pessoa jogadora tem a opção de jogar novamente

    * Ao clicar no botão "Jogar novamente", a pessoa deve ser redirecionada para a tela de início
    * O botão para jogar novamente deve possuir o atributo `data-testid` com o valor `btn-play-again`

1. A pessoa jogadora tem a opção de visualizar a tela de _ranking_

    * Ao clicar no botão "Ver Ranking", a pessoa deve ser redirecionada para a tela de _ranking_
    * O botão para ir para a tela de _ranking_ deve possuir o atributo `data-testid` com o valor `btn-ranking`
    * A tela de _ranking_ deve possuir um título com o atributo `data-testid` contendo o valor `ranking-title`

#### Tela de ranking:

1. Deve existir um botão para ir ao início

    * Esse botão deve possuir o atributo `data-testid` com o valor `btn-go-home`
    * Esse botão deve enviar a pessoa para o início (tela de preenchimento dos dados)

1. Apresentação do _ranking_

    * Deve-se mostrar uma lista com a imagem de perfil vinda do Gravatar, nome e pontuação das pessoas que jogaram em ordem decrescente (da maior pontuação para a menor)
    * Os elementos com os nomes das pessoas que jogaram devem possuir o atributo `data-testid` com o valor `player-name-${index}`, onde `${index}` é iniciado em zero
    * Os elementos com as pontuações das pessoas que jogaram devem possuir o atributo `data-testid` com o valor `player-score-${index}`, onde `${index}` é iniciado em zero
    * O ranking deve ser armazenado no navegador através do `localStorage`.
    * Leia a seção "Implementações técnicas" para mais detalhes

#### (Não avaliativo) Tela de configurações:

1. Ao mudar o valor do dropdown categoria, apenas perguntas da categoria selecionada devem aparecer para a pessoa que está jogando. Essa configuração será identificada pela chave category no retorno da API;

1. Ao mudar o valor do dropdown dificuldade, apenas perguntas da dificuldade selecionada devem aparecer para a pessoa que está jogando. Essa configuração será identificada pela chave difficulty no retorno da API;

1. Ao mudar o valor do dropdown tipo, apenas perguntas do tipo selecionado devem aparecer para a pessoa que está jogando. Essa configuração será identificada pela chave type no retorno da API.

***Obs: A maneira como a API deve ser estruturada segue o seguinte modelo: https://opentdb.com/api_config.php***

---

### Implementações técnicas

Algumas coisas devem seguir um padrão pré-estabelecido para que os teste de correção funcionem corretamente.

**Player**

No `localStorage` do navegador:
* a chave `state` deve conter a seguinte estrutura:
```
player: {
    name,
    assertions,
    score,
    gravatarEmail
}
```

> `name` é o nome da pessoa que joga
>
> `assertions` é o número de acertos
>
> `score` é a pontuação
>
> `gravatarEmail` é o email da pessoa que joga

* a chave `ranking` deve conter a seguinte estrutura:
```
[
    {name: nome-da-pessoa, score: 10, picture: url-da-foto-no-gravatar}
]
```

* a chave `token` deve conter o valor do token recebido na API do Trivia.

---

# Avisos Finais

Ao finalizar e submeter o projeto, não se esqueça de avaliar sua experiência preenchendo o formulário. Leva menos de 3 minutos!

Link: [FORMULÁRIO DE AVALIAÇÃO DE PROJETO](https://be-trybe.typeform.com/to/ZTeR4IbH#cohort_name=Turma%205)

O avaliador automático não necessariamente avalia seu projeto na ordem em que os requisitos aparecem no readme. Isso acontece para deixar o processo de avaliação mais rápido. Então, não se assuste se isso acontecer, ok?

---
