import { EnvapePage } from './app.po';

describe('envape App', () => {
  let page: EnvapePage;

  beforeEach(() => {
    page = new EnvapePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
