import { PartyPage } from './app.po';

describe('party App', () => {
  let page: PartyPage;

  beforeEach(() => {
    page = new PartyPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
