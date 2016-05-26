webpackJsonp([1,2],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var platform_browser_dynamic_1 = __webpack_require__(571);
	var core_1 = __webpack_require__(302);
	var _1 = __webpack_require__(582);
	if (_1.environment.production) {
	    core_1.enableProdMode();
	}
	platform_browser_dynamic_1.bootstrap(_1.ElectronAngularBoilerplateAppComponent);


/***/ },

/***/ 582:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var environment_1 = __webpack_require__(583);
	exports.environment = environment_1.environment;
	var electron_angular_boilerplate_component_1 = __webpack_require__(584);
	exports.ElectronAngularBoilerplateAppComponent = electron_angular_boilerplate_component_1.ElectronAngularBoilerplateAppComponent;


/***/ },

/***/ 583:
/***/ function(module, exports) {

	// The file for the current environment will overwrite this one during build
	// Different environments can be found in config/environment.{dev|prod}.ts
	// The build system defaults to the dev environment
	"use strict";
	exports.environment = {
	    production: false
	};


/***/ },

/***/ 584:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(302);
	var ElectronAngularBoilerplateAppComponent = (function () {
	    function ElectronAngularBoilerplateAppComponent() {
	        this.title = 'electron-angular-boilerplate works!';
	    }
	    ElectronAngularBoilerplateAppComponent = __decorate([
	        core_1.Component({
	            moduleId: module.id,
	            selector: 'electron-angular-boilerplate-app',
	            templateUrl: 'electron-angular-boilerplate.component.html',
	            styleUrls: ['electron-angular-boilerplate.component.css']
	        }), 
	        __metadata('design:paramtypes', [])
	    ], ElectronAngularBoilerplateAppComponent);
	    return ElectronAngularBoilerplateAppComponent;
	}());
	exports.ElectronAngularBoilerplateAppComponent = ElectronAngularBoilerplateAppComponent;


/***/ }

});
//# sourceMappingURL=app.js.map