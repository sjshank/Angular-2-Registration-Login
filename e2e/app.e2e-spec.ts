import { RegistrationLoginAngular2Page } from './app.po';

describe('registration-login-angular2 App', function() {
  let page: RegistrationLoginAngular2Page;

  beforeEach(() => {
    page = new RegistrationLoginAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
