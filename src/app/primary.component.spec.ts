import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { PrimaryAppComponent } from '../app/primary.component';

beforeEachProviders(() => [PrimaryAppComponent]);

describe('App: ElectronAngularBoilerplate', () => {
  it('should create the app',
      inject([PrimaryAppComponent], (app: PrimaryAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'primary app works!\'',
      inject([PrimaryAppComponent], (app: PrimaryAppComponent) => {
    expect(app.title).toEqual('primary app works!');
  }));
});
