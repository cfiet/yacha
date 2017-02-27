import { YachaPage } from './app.po';

describe('yacha App', () => {
  let page: YachaPage;

  beforeEach(() => {
    page = new YachaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
