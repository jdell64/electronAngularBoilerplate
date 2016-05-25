import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { ElectronAngularBoilerplateAppComponent } from '../app/electron-angular-boilerplate.component';

beforeEachProviders(() => [ElectronAngularBoilerplateAppComponent]);

describe('App: ElectronAngularBoilerplate', () => {
  it('should create the app',
      inject([ElectronAngularBoilerplateAppComponent], (app: ElectronAngularBoilerplateAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'electron-angular-boilerplate works!\'',
      inject([ElectronAngularBoilerplateAppComponent], (app: ElectronAngularBoilerplateAppComponent) => {
    expect(app.title).toEqual('electron-angular-boilerplate works!');
  }));
});
