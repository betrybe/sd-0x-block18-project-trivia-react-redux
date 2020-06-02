const INPUT_PLAYER_NAME_SELECTOR = '[data-testid="input-player-name"]';
const INPUT_PLAYER_EMAIL_SELECTOR = '[data-testid="input-gravatar-email"]';
const BUTTON_PLAY_SELECTOR = '[data-testid="btn-play"]';
const HEADER_IMAGE_SELECTOR = '[data-testid="header-profile-picture"]';
const HEADER_NAME_SELECTOR = '[data-testid="header-player-name"]';
const HEADER_SCORE_SELECTOR = '[data-testid="header-score"]';
const QUESTION_CATEGORY_SELECTOR = '[data-testid="question-category"]';
const QUESTION_TEXT_SELECTOR = '[data-testid="question-text"]';
const CORRECT_ALTERNATIVE_SELECTOR = '[data-testid="correct-answer"]';
const WRONG_ALTERNATIVES_SELECTOR = '[data-testid*="wrong-answer"]';

const name = 'Nome da pessoa';
const email = 'email@pessoa.com';

describe('O _header_ deve conter as informações da pessoa jogadora', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
    cy.clearLocalStorage();
    cy.get(INPUT_PLAYER_NAME_SELECTOR).type(name);
    cy.get(INPUT_PLAYER_EMAIL_SELECTOR).type(email);
    cy.get(BUTTON_PLAY_SELECTOR).click();
  });

  it('a imagem do Gravatar está presente no header', () => {
    cy.get(HEADER_IMAGE_SELECTOR).should('exist');
  });

  it('o nome da pessoa está presente no header', () => {
    cy.get(HEADER_NAME_SELECTOR).contains(name);
  });

  it('o placar zerado está presente no header', () => {
    cy.get(HEADER_SCORE_SELECTOR).contains('0');
  });
});

describe('A página deve conter as informações relacionadas à pergunta', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
    cy.clearLocalStorage();
    cy.get(INPUT_PLAYER_NAME_SELECTOR).type(name);
    cy.get(INPUT_PLAYER_EMAIL_SELECTOR).type(email);
    cy.get(BUTTON_PLAY_SELECTOR).click();
  });

  it('a categoria da pergunta está presente', () => {
    cy.get(QUESTION_CATEGORY_SELECTOR).should('exist');
  });

  it('o texto da pergunta está presente', () => {
    cy.get(QUESTION_TEXT_SELECTOR).should('exist');
  });

  it('as alternativas devem estar presentes', () => {
    cy.get(CORRECT_ALTERNATIVE_SELECTOR).should('exist');
    cy.get(WRONG_ALTERNATIVES_SELECTOR).should('exist');
  });
});


describe('Só deve ser possível escolher uma resposta correta por pergunta', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
    cy.clearLocalStorage();
    cy.get(INPUT_PLAYER_NAME_SELECTOR).type(name);
    cy.get(INPUT_PLAYER_EMAIL_SELECTOR).type(email);
    cy.get(BUTTON_PLAY_SELECTOR).click();
  });

  it('a quantidade de respostas corretas deve ser 1', () => {
    cy.get(CORRECT_ALTERNATIVE_SELECTOR).should('have.length', 1);
  });
});

describe('Ao clicar em uma resposta, a resposta correta deve ficar verde e as incorretas, vermelhas', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
    cy.clearLocalStorage();
    cy.get(INPUT_PLAYER_NAME_SELECTOR).type(name);
    cy.get(INPUT_PLAYER_EMAIL_SELECTOR).type(email);
    cy.get(BUTTON_PLAY_SELECTOR).click();
  });

  it('verifica cor da alternativa correta quando acerta a questão', () => {
    cy.get(CORRECT_ALTERNATIVE_SELECTOR).click();
    cy.get(CORRECT_ALTERNATIVE_SELECTOR).should('have.css', 'border', '3px solid rgb(6, 240, 15)');
  });

  it('verifica a cor das alternativas incorretas quando acerta a questão', () => {
    cy.get(CORRECT_ALTERNATIVE_SELECTOR).click();
    cy.get(WRONG_ALTERNATIVES_SELECTOR).should('have.css', 'border', '3px solid rgb(255, 0, 0)');
  });

  it('verifica cor da alternativa correta quando erra a questão', () => {
    cy.get(WRONG_ALTERNATIVES_SELECTOR).first().click();
    cy.get(CORRECT_ALTERNATIVE_SELECTOR).should('have.css', 'border', '3px solid rgb(6, 240, 15)');
  });

  it('verifica a cor das alternativas incorretas quando erra a questão', () => {
    cy.get(WRONG_ALTERNATIVES_SELECTOR).first().click();
    cy.get(WRONG_ALTERNATIVES_SELECTOR).should('have.css', 'border', '3px solid rgb(255, 0, 0)');
  });
});
