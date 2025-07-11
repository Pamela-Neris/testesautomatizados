describe('Tela de Cadastro de Usuário', () => {
  it('deve exibir o formulário de cadastro', () => {
    cy.visit('https://front.serverest.dev/cadastrarusuarios');
    cy.get('form').should('exist');
    cy.contains('Cadastro').should('exist');
  });

  it('deve mostrar erro ao tentar cadastrar com campos vazios', () => {
    cy.visit('https://front.serverest.dev/cadastrarusuarios');
    cy.get('button[type="submit"]').click();
    cy.contains('Nome é obrigatório').should('exist');
    cy.contains('Email é obrigatório').should('exist');
    cy.contains('Password é obrigatório').should('exist');
  });

  it('deve mostrar erro ao cadastrar com email inválido', () => {
    cy.visit('https://front.serverest.dev/cadastrarusuarios');
    cy.get('input[name="nome"]').type('Usuário Teste');
    cy.get('input[name="email"]').type('emailinvalido@com');
    cy.get('input[name="password"]').type('senha123');
    cy.get('button[type="submit"]').click();
    cy.contains('Email deve ser um email válido').should('exist');
  });

  it('deve cadastrar usuário com dados válidos', () => {
    cy.visit('https://front.serverest.dev/cadastrarusuarios');
    cy.get('input[name="nome"]').type('Usuário Teste');
    cy.get('input[name="email"]').type('usuario.teste'+Date.now()+'@qa.com');
    cy.get('input[name="password"]').type('senha123');
    cy.get('button[type="submit"]').click();
    cy.contains('Cadastro realizado com sucesso').should('exist');
  });

  it('deve permitir selecionar a opção "Cadastrar como administrador?" ao criar cadastro', () => {
    cy.visit('https://front.serverest.dev/cadastrarusuarios');
    cy.get('input[name="nome"]').type('Administrador Teste');
    cy.get('input[name="email"]').type('admin.teste'+Date.now()+'@qa.com');
    cy.get('input[name="password"]').type('senha123');
    cy.get('input[type="checkbox"]').check();
    cy.get('button[type="submit"]').click();
    cy.contains('Cadastro realizado com sucesso').should('exist');
  });

  // Adicione outros cenários conforme necessário
});
