describe('Página de Login', () => {
  it('deve exibir o formulário de login', () => {
    cy.visit('https://front.serverest.dev/login');
    cy.get('form').should('exist');
    cy.contains('Login').should('exist');
  });

  it('deve mostrar erro para credenciais vazias', () => {
    cy.visit('https://front.serverest.dev/login');
    cy.get('button[type="submit"]').click();
    cy.contains('Email é obrigatório').should('exist');
    cy.contains('Password é obrigatório').should('exist');
  });

  it('deve mostrar erro para credenciais inválidas', () => {
    cy.visit('https://front.serverest.dev/login');
    cy.get('input[name="email"]').type('usuario@invalido.com');
    cy.get('input[name="password"]').type('senhaerrada');
    cy.get('button[type="submit"]').click();
    cy.contains('Email e/ou senha inválidos').should('exist');
  });

  it('deve permitir o usuário clicar em "Entrar" com credenciais válidas', () => {
    cy.visit('https://front.serverest.dev/login');
    cy.get('input[name="email"]').type('fulano@qa.com');
    cy.get('input[name="password"]').type('teste');
    cy.get('button[type="submit"]').contains('Entrar').click();
    // Valide o redirecionamento ou mensagem de sucesso conforme o comportamento esperado
    cy.url().should('not.eq', 'https://front.serverest.dev/login');
    // Exemplo: cy.contains('Bem-vindo').should('exist');
  });

  it('deve permitir clicar no botão "Cadastre-se" e redirecionar para a tela de cadastro', () => {
    cy.visit('https://front.serverest.dev/login');
    cy.contains('Cadastre-se').should('exist').click();
    cy.url().should('eq', 'https://front.serverest.dev/cadastrarusuarios');
    cy.contains('Cadastro').should('exist');
  });
  // Adicione outros cenários conforme necessário
})

