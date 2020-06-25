(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_gradient_background_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/gradient-background.directive */ "./src/app/shared/gradient-background.directive.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _select_category_select_category_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./select-category/select-category.component */ "./src/app/select-category/select-category.component.ts");
/* harmony import */ var _video_suggestion_video_suggestion_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./video-suggestion/video-suggestion.component */ "./src/app/video-suggestion/video-suggestion.component.ts");






function AppComponent_app_select_category_3_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-select-category", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("categoryChosen", function AppComponent_app_select_category_3_Template_app_select_category_categoryChosen_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.onCategoryChosen($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_app_video_suggestion_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-video-suggestion", 5);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("chosenCategory", ctx_r1.category);
} }
class AppComponent {
    constructor() {
        this.category = '';
    }
    onCategoryChosen(chosenCategory) {
        this.category = chosenCategory;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 5, vars: 2, consts: [["appGradientBackground", "", 1, "m-5"], ["id", "app-title", 1, "text-center", "text-light"], [3, "categoryChosen", 4, "ngIf"], [3, "chosenCategory", 4, "ngIf"], [3, "categoryChosen"], [3, "chosenCategory"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Yoa");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AppComponent_app_select_category_3_Template, 1, 0, "app-select-category", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AppComponent_app_video_suggestion_4_Template, 1, 1, "app-video-suggestion", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.category);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx.category);
    } }, directives: [_shared_gradient_background_directive__WEBPACK_IMPORTED_MODULE_1__["GradientBackground"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _select_category_select_category_component__WEBPACK_IMPORTED_MODULE_3__["SelectCategory"], _video_suggestion_video_suggestion_component__WEBPACK_IMPORTED_MODULE_4__["VideoSuggestion"]], styles: ["#app-title[_ngcontent-%COMP%] {\n  font-family: \"Chalkduster\", fantasy;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUNBQUE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNhcHAtdGl0bGUge1xuICBmb250LWZhbWlseTogXCJDaGFsa2R1c3RlclwiLCBmYW50YXN5O1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
/* harmony import */ var _select_category_select_category_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./select-category/select-category.component */ "./src/app/select-category/select-category.component.ts");
/* harmony import */ var _video_suggestion_video_suggestion_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./video-suggestion/video-suggestion.component */ "./src/app/video-suggestion/video-suggestion.component.ts");
/* harmony import */ var _shared_gradient_background_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/gradient-background.directive */ "./src/app/shared/gradient-background.directive.ts");
/* harmony import */ var _shared_generate_suggestion_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/generate-suggestion.directive */ "./src/app/shared/generate-suggestion.directive.ts");










class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _shared_gradient_background_directive__WEBPACK_IMPORTED_MODULE_7__["GradientBackground"],
        _select_category_select_category_component__WEBPACK_IMPORTED_MODULE_5__["SelectCategory"],
        _video_suggestion_video_suggestion_component__WEBPACK_IMPORTED_MODULE_6__["VideoSuggestion"],
        _shared_generate_suggestion_directive__WEBPACK_IMPORTED_MODULE_8__["GenerateSuggestion"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _shared_gradient_background_directive__WEBPACK_IMPORTED_MODULE_7__["GradientBackground"],
                    _select_category_select_category_component__WEBPACK_IMPORTED_MODULE_5__["SelectCategory"],
                    _video_suggestion_video_suggestion_component__WEBPACK_IMPORTED_MODULE_6__["VideoSuggestion"],
                    _shared_generate_suggestion_directive__WEBPACK_IMPORTED_MODULE_8__["GenerateSuggestion"]
                ],
                imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeModule"]],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/select-category/select-category.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/select-category/select-category.component.ts ***!
  \**************************************************************/
/*! exports provided: SelectCategory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectCategory", function() { return SelectCategory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



function SelectCategory_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SelectCategory_div_3_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const category_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.onSelectCategory(category_r1.name); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", category_r1.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", category_r1.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", category_r1.name, " ");
} }
class SelectCategory {
    constructor() {
        this.categoryChosen = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.categories = [
            {
                name: 'Calm',
                image: 'assets/images/yoga-le-minh-phuong.jpg',
                description: 'Photo by Le Minh Phuong on Unsplash'
            },
            {
                name: 'Energize',
                image: 'assets/images/yoga-luna-active-fitness.jpg',
                description: 'Photo by LUNA ACTIVE FITNESS on Unsplash'
            },
            {
                name: 'Focus',
                image: 'assets/images/yoga-damir-spanik.jpg',
                description: 'Photo by Damir Spanik on Unsplash'
            },
            {
                name: 'Unwind',
                image: 'assets/images/yoga-nathalie-lv.jpg',
                description: 'Photo by Nathalie LV on Unsplash'
            },
            {
                name: 'Any',
                image: 'assets/images/yoga-janfillem.jpg',
                description: 'Photo by JanFillem on Unsplash'
            }
        ];
        this.chosenCategory = '';
    }
    onSelectCategory(category) {
        this.chosenCategory = category;
        this.categoryChosen.emit(this.chosenCategory);
    }
}
SelectCategory.ɵfac = function SelectCategory_Factory(t) { return new (t || SelectCategory)(); };
SelectCategory.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SelectCategory, selectors: [["app-select-category"]], outputs: { categoryChosen: "categoryChosen" }, decls: 4, vars: 1, consts: [[1, "text-center", "text-light", "font-weight-light"], [1, "row", "justify-content-md-center"], ["class", "card col-sm-2 text-white border-0 bg-transparent", 3, "click", 4, "ngFor", "ngForOf"], [1, "card", "col-sm-2", "text-white", "border-0", "bg-transparent", 3, "click"], [1, "card-img", 3, "src", "alt"], [1, "card-footer", "p-2"], [1, "text-white", "m-0", "font-weight-light"]], template: function SelectCategory_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Hello! What are you looking for out of your practice today?\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SelectCategory_div_3_Template, 5, 3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.categories);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: ["faded-bg[_ngcontent-%COMP%] {\n  background: grey;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VsZWN0LWNhdGVnb3J5L3NlbGVjdC1jYXRlZ29yeS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9zZWxlY3QtY2F0ZWdvcnkvc2VsZWN0LWNhdGVnb3J5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZmFkZWQtYmcge1xuICBiYWNrZ3JvdW5kOiBncmV5O1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SelectCategory, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-select-category',
                templateUrl: './select-category.component.html',
                styleUrls: ['./select-category.component.scss']
            }]
    }], null, { categoryChosen: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/generate-suggestion.directive.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/generate-suggestion.directive.ts ***!
  \*********************************************************/
/*! exports provided: GenerateSuggestion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenerateSuggestion", function() { return GenerateSuggestion; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class GenerateSuggestion {
    constructor() {
        this.suggestionGenerated = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.suggestion = '';
        this.videos = {
            Calm: [
                'https://www.youtube.com/watch?v=Ba0fweKUwIc',
                'https://www.youtube.com/watch?v=Nw2oBIrQGLo',
                'https://www.youtube.com/watch?v=Enz98dDXQfY'
            ],
            Energize: [
                'https://www.youtube.com/watch?v=sOthumY3GHE',
                'https://www.youtube.com/watch?v=A4ViwsLKoSY',
                'https://www.youtube.com/watch?v=qy_oIKf1ByM'
            ],
            Focus: [
                'https://www.youtube.com/watch?v=Nnd5Slo02us',
                'https://www.youtube.com/watch?v=3Elmwad8XDI',
                'https://www.youtube.com/watch?v=MQZbuqDp67U'
            ],
            Unwind: [
                'https://www.youtube.com/watch?v=UxWWfyE3fLc',
                'https://www.youtube.com/watch?v=-l-viVXMqhs',
                'https://www.youtube.com/watch?v=DWCyYhczU6M'
            ]
        };
    }
    set chosenCategory(chosenCategory) {
        if (chosenCategory === 'Any') {
            this.randomCategory = this.generateRandomCategory(this.videos);
            this.suggestion = this.generateRandEl(this.randomCategory);
        }
        else {
            this.suggestion = this.generateRandItem(chosenCategory);
        }
        this.suggestionGenerated.emit(this.suggestion);
    }
    generateRandEl(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    }
    generateRandomCategory(obj) {
        const keys = Object.keys(obj);
        return obj[keys[(keys.length * Math.random()) << 0]];
    }
    generateRandItem(category) {
        const videoArr = this.videos[`${category}`];
        return this.generateRandEl(videoArr);
    }
}
GenerateSuggestion.ɵfac = function GenerateSuggestion_Factory(t) { return new (t || GenerateSuggestion)(); };
GenerateSuggestion.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: GenerateSuggestion, selectors: [["", "appGenerateSuggestion", ""]], inputs: { chosenCategory: ["appGenerateSuggestion", "chosenCategory"] }, outputs: { suggestionGenerated: "suggestionGenerated" } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GenerateSuggestion, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[appGenerateSuggestion]'
            }]
    }], null, { suggestionGenerated: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], chosenCategory: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['appGenerateSuggestion']
        }] }); })();


/***/ }),

/***/ "./src/app/shared/gradient-background.directive.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/gradient-background.directive.ts ***!
  \*********************************************************/
/*! exports provided: GradientBackground */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GradientBackground", function() { return GradientBackground; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class GradientBackground {
    constructor(elfRef, renderer) {
        this.elfRef = elfRef;
        this.renderer = renderer;
    }
    ngAfterViewInit() {
        this.renderer.setStyle(this.elfRef.nativeElement.ownerDocument.body, 'background', 'linear-gradient(to bottom, #66CCCC, #66CC99');
        this.renderer.setStyle(this.elfRef.nativeElement.ownerDocument.body, 'backgroundAttachment', 'fixed');
    }
}
GradientBackground.ɵfac = function GradientBackground_Factory(t) { return new (t || GradientBackground)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"])); };
GradientBackground.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: GradientBackground, selectors: [["", "appGradientBackground", ""]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GradientBackground, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[appGradientBackground]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }]; }, null); })();


/***/ }),

/***/ "./src/app/video-suggestion/video-suggestion.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/video-suggestion/video-suggestion.component.ts ***!
  \****************************************************************/
/*! exports provided: VideoSuggestion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoSuggestion", function() { return VideoSuggestion; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _shared_generate_suggestion_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/generate-suggestion.directive */ "./src/app/shared/generate-suggestion.directive.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");





class VideoSuggestion {
    constructor() {
        this.faArrowLeft = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faArrowLeft"];
        this.suggestion = '';
    }
    onSuggestionGenerated(generated) {
        this.suggestion = generated;
    }
}
VideoSuggestion.ɵfac = function VideoSuggestion_Factory(t) { return new (t || VideoSuggestion)(); };
VideoSuggestion.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VideoSuggestion, selectors: [["app-video-suggestion"]], inputs: { category: ["chosenCategory", "category"] }, decls: 7, vars: 4, consts: [[1, "text-white", "fade-in", 3, "appGenerateSuggestion", "suggestionGenerated"], [1, "row", "justify-content-md-center", "py-5", 3, "href"], [1, "align-self-end", "mr-3"], [1, "fa-lg", 3, "icon"], [1, "px-2"]], template: function VideoSuggestion_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("suggestionGenerated", function VideoSuggestion_Template_div_suggestionGenerated_0_listener($event) { return ctx.onSuggestionGenerated($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "fa-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "BACK");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("appGenerateSuggestion", ctx.category);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.suggestion, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.suggestion);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faArrowLeft);
    } }, directives: [_shared_generate_suggestion_directive__WEBPACK_IMPORTED_MODULE_2__["GenerateSuggestion"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FaIconComponent"]], styles: [".fade-in[_ngcontent-%COMP%] {\n  opacity: 1;\n  animation-name: fadeInOpacity;\n  animation-iteration-count: 1;\n  animation-timing-function: ease-in;\n  animation-duration: 2s;\n}\n\n@keyframes fadeInOpacity {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlkZW8tc3VnZ2VzdGlvbi92aWRlby1zdWdnZXN0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBQTtFQUNBLDZCQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQ0FBQTtFQUNBLHNCQUFBO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLFVBQUE7RUFDRjtFQUNBO0lBQ0UsVUFBQTtFQUNGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC92aWRlby1zdWdnZXN0aW9uL3ZpZGVvLXN1Z2dlc3Rpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmFkZS1pbiB7XG4gIG9wYWNpdHk6IDE7XG4gIGFuaW1hdGlvbi1uYW1lOiBmYWRlSW5PcGFjaXR5O1xuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xuICBhbmltYXRpb24tZHVyYXRpb246IDJzO1xufVxuXG5Aa2V5ZnJhbWVzIGZhZGVJbk9wYWNpdHkge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VideoSuggestion, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-video-suggestion',
                templateUrl: './video-suggestion.component.html',
                styleUrls: ['./video-suggestion.component.scss']
            }]
    }], null, { category: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['chosenCategory']
        }] }); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/rebecca/Desktop/Jobs/yoa-app/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map