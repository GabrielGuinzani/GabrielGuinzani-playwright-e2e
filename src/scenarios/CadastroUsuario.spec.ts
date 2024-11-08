import { test, expect } from '@playwright/test';
import { join } from 'path';
import { TheConfig } from 'sicolo';
import CadastroPage from '../support/pages/CadastroPage';

test.describe('Cadastro de usuário', () => {
  const CONFIG = join(__dirname, '../support/fixtures/config.yml');
  let cadastroPage: CadastroPage;
  const BASE_URL = TheConfig.fromFile(CONFIG)
    .andPath('application.signin_url')
    .retrieveData();

  test.beforeEach(async ({ page }) => {
    cadastroPage = new CadastroPage(page);
    await page.goto(BASE_URL);
    cadastroPage.vaiAoCadastro();
  });

  test('Preencher formulário de cadastro', async ({ page }) => {
    await Promise.all([
      cadastroPage.preencherFormulario(),
      page.waitForNavigation()
    ]);

    expect(page.url()).toContain('collections');
  });

  test('Preencher um formulário de cadastro com dados inválidos', async () => {
    await cadastroPage.preencherFormularioInvalido();
    await cadastroPage.validarCadastroIncorreto();
  });
});
