import { Locator, Page } from '@playwright/test';
import BaseElements from './BaseElements';

export default class CadastroElements extends BaseElements {
  constructor(readonly page: Page) {
    super(page);
    this.page = page;
  }

  getBotaoNovoCadastro(): Locator {
    return this.page.locator(
      'button[class="button button-primary g-recaptcha"]'
    );
  }

  getBotaoSignup(): Locator {
    return this.page.getByRole('link', {
      name: 'Create a new account',
      exact: true
    });
  }

  getCheckBox(): Locator {
    return this.page.locator('input[type="checkbox"]');
  }

  getCampoNome(): Locator {
    return this.page.locator('input[id="user[first_name]"]');
  }

  getCampoEmail(): Locator {
    return this.page.locator('input[id="user[email]"]');
  }

  getBotaoCadastrar(): Locator {
    return this.page.locator('button[type="submit"]');
  }

  getCampoSenha(): Locator {
    return this.page.locator('input[type="password"]');
  }

  getCampoSobrenome(): Locator {
    return this.page.locator('input[id="user[last_name]"]');
  }

  getCadastroIncorreto(): Locator {
    return this.page.locator('li[class= "form-error__list-item"]');
  }
}
