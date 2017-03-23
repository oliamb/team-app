import { TeamUiPage } from './app.po';

describe('team-ui App', () => {
  let page: TeamUiPage;

  beforeEach(() => {
    page = new TeamUiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
