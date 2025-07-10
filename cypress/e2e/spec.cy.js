describe('Página de Login', () => {
  it('deve exibir o formulário de login', () => {
    cy.visit('https://front.serverest.dev/login');
    cy.get('form').should('exist');
    cy.contains('Login').should('exist');
  });

  it('deve mostrar erro para credenciais vazias', () => {
    cy.visit('https://front.serverest.dev/login');
    cy.get('button[type="submit"]').click();
    cy.contains('Email não pode ficar em branco').should('exist');
    cy.contains('Password não pode ficar em branco').should('exist');
  });

  it('deve mostrar erro para credenciais inválidas', () => {
    cy.visit('https://front.serverest.dev/login');
    cy.get('input[name="email"]').type('usuario@invalido.com');
    cy.get('input[name="password"]').type('senhaerrada');
    cy.get('button[type="submit"]').click();
    cy.contains('Email deve ser um email válido').should('exist');
    cy.contains('Email e/ou senha inválidos').should('exist');
  });

  // Adicione outros cenários conforme necessário
})