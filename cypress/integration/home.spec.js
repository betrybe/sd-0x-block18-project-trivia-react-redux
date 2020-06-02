const INPUT_PLAYER_NAME_SELECTOR = '[data-testid="input-player-name"]';
const INPUT_PLAYER_EMAIL_SELECTOR = '[data-testid="input-gravatar-email"]';
const BUTTON_PLAY = '[data-testid="btn-play"]';

describe('A pessoa que joga deve preencher as informações para iniciar um jogo', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  it('escreve o nome da pessoa jogadora', () => {
    cy.get(INPUT_PLAYER_NAME_SELECTOR).type('Nome da pessoa');
  });

  it('escreve o email da pessoa jogadora', () => {
    cy.get(INPUT_PLAYER_EMAIL_SELECTOR).type('email@pessoa.com');
  });

  it('botão Jogar desabilitado quando pessoa jogadora não preencher nenhum campo', () => {
    cy.get(BUTTON_PLAY).should('be.disabled');
  });

  it('botão Jogar desabilitado quando pessoa jogadora escrever apenas o nome', () => {
    cy.get(INPUT_PLAYER_NAME_SELECTOR).type('Nome da pessoa');
    cy.get(BUTTON_PLAY).should('be.disabled');
  });

  it('botão Jogar desabilitado quando pessoa jogadora escrever apenas o email', () => {
    cy.get(INPUT_PLAYER_EMAIL_SELECTOR).type('email@pessoa.com');
    cy.get(BUTTON_PLAY).should('be.disabled');
  });

  it('botão Jogar habilitado quando pessoa jogadora preencher os campos de nome e email', () => {
    cy.get(INPUT_PLAYER_NAME_SELECTOR).type('Nome da pessoa');
    cy.get(INPUT_PLAYER_EMAIL_SELECTOR).type('email@pessoa.com');
    cy.get(BUTTON_PLAY).should('not.be.disabled');
  });
});
