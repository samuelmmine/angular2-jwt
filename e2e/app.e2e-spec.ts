import { Angular4AuthPage } from './app.po';

describe('angular4-auth App', function() {
  let page: Angular4AuthPage;

  beforeEach(() => {
    page = new Angular4AuthPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
