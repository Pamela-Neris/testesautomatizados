describe('Página de Login', () => {
  it('deve exibir o formulário de login', () => {
    cy.visit('https://front.serverest.dev/login');
    cy.get('form').should('exist');
    cy.contains('Login').should('exist');
  });

  it('deve mostrar erro para credenciais vazias', () => {
    cy.visit('https://front.serverest.dev/login');
    cy.get('button[type="submit"]').click();
    cy.contains('O campo email é obrigatório').should('exist');
    cy.contains('O campo senha é obrigatório').should('exist');
  });

  it('deve mostrar erro para credenciais inválidas', () => {
    cy.visit('https://front.serverest.dev/login');
    cy.get('input[name="email"]').type('usuario@invalido.com');
    cy.get('input[name="password"]').type('senhaerrada');
    cy.get('button[type="submit"]').click();
    cy.contains('Email ou senha inválidos').should('exist');
  });

  // Adicione outros cenários conforme necessário
})