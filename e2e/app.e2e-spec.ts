import { SvgProjectPage } from './app.po';

describe('svg-project App', () => {
  let page: SvgProjectPage;

  beforeEach(() => {
    page = new SvgProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
