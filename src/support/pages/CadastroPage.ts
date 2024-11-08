import { Page, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
import CadastroElements from '../elements/CadastroElements';
import BasePage from './BasePage';

export default class CadastroPage extends BasePage {
  readonly cadastroElements: CadastroElements;

  constructor(readonly page: Page) {
    super(page);
    this.page = page;
    this.cadastroElements = new CadastroElements(page);
  }

  async preencherFormulario(): Promise<void> {
    await this.cadastroElements.getBotaoNovoCadastro().click();
    await this.cadastroElements.getCampoNome().fill(faker.person.firstName());
    await this.cadastroElements
      .getCampoSobrenome()
      .fill(faker.person.lastName());
    await this.cadastroElements.getCampoSenha().fill('SenhaTeste123');
    await this.cadastroElements.getCampoEmail().fill(faker.internet.email());
    await this.cadastroElements.getCheckBox().click();
    await this.cadastroElements.getBotaoCadastrar().click();
  }

  async preencherFormularioInvalido(): Promise<void> {
    await this.cadastroElements.getBotaoNovoCadastro().click();
  }

  async validarCadastroIncorreto(): Promise<void> {
    await expect(this.cadastroElements.getCadastroIncorreto()).toBeVisible();
  }

  async vaiAoCadastro(): Promise<void> {
    await this.cadastroElements.getBotaoSignup().click();
  }

  async validarCarrinho(): Promise<void> {
    await this.page.locator('[data-test="username"]').click();
    await this.page.locator('[data-test="username"]').fill('standard_user');
    await this.page.locator('[data-test="password"]').click();
    await this.page.locator('[data-test="password"]').fill('secret_sauce');
    await this.page.locator('[data-test="login-button"]').click();
    await this.page.locator('#shopping_cart_container a').click();
    await this.page.locator('[data-test="checkout"]').click();
  }
}
