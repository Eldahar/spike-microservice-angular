import { SilexApiAngularPage } from './app.po';

describe('silex-api-angular App', () => {
  let page: SilexApiAngularPage;

  beforeEach(() => {
    page = new SilexApiAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
