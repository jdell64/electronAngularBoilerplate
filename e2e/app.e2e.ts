import { ElectronAngularBoilerplatePage } from './app.po';

describe('electron-angular-boilerplate App', function() {
  let page: ElectronAngularBoilerplatePage;

  beforeEach(() => {
    page = new ElectronAngularBoilerplatePage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('electron-angular-boilerplate works!');
  });
});
