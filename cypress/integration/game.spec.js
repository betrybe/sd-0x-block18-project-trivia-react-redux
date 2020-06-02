const INPUT_PLAYER_NAME_SELECTOR = '[data-testid="input-player-name"]';
const INPUT_PLAYER_EMAIL_SELECTOR = '[data-testid="input-gravatar-email"]';
const BUTTON_PLAY_SELECTOR = '[data-testid="btn-play"]';
const HEADER_IMAGE_SELECTOR = '[data-testid="header-profile-picture"]';
const HEADER_NAME_SELECTOR = '[data-testid="header-player-name"]';
const HEADER_SCORE_SELECTOR = '[data-testid="header-score"]';

const name = 'Nome da pessoa';
const email = 'email@pessoa.com';

describe('O _header_ deve conter as informações da pessoa jogadora', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
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
