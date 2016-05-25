export class ElectronAngularBoilerplatePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('electron-angular-boilerplate-app h1')).getText();
  }
}
