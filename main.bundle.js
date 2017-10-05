webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export appRoutes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__homepage_bandinfo_bandinfo_component__ = __webpack_require__("../../../../../src/app/homepage/bandinfo/bandinfo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__homepage_gear_list_gear_list_component__ = __webpack_require__("../../../../../src/app/homepage/gear-list/gear-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__homepage_calendar_calendar_component__ = __webpack_require__("../../../../../src/app/homepage/calendar/calendar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__homepage_homepage_ui_homepage_ui_component__ = __webpack_require__("../../../../../src/app/homepage/homepage-ui/homepage-ui.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__homepage_homepage_component__ = __webpack_require__("../../../../../src/app/homepage/homepage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__header_index_header_index_component__ = __webpack_require__("../../../../../src/app/header-index/header-index.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__homepage_event_event_component__ = __webpack_require__("../../../../../src/app/homepage/event/event.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









//Routes
var appRoutes = [
    { path: "login", component: __WEBPACK_IMPORTED_MODULE_7__header_index_header_index_component__["a" /* HeaderIndexComponent */] },
    { path: "", component: __WEBPACK_IMPORTED_MODULE_6__homepage_homepage_component__["a" /* HomepageComponent */],
        children: [
            { path: "", component: __WEBPACK_IMPORTED_MODULE_5__homepage_homepage_ui_homepage_ui_component__["a" /* HomepageUiComponent */] },
            { path: "calendar", component: __WEBPACK_IMPORTED_MODULE_4__homepage_calendar_calendar_component__["a" /* CalendarEventComponent */] },
            { path: "gearlist", component: __WEBPACK_IMPORTED_MODULE_3__homepage_gear_list_gear_list_component__["a" /* GearListComponent */] },
            { path: "bandinfo", component: __WEBPACK_IMPORTED_MODULE_2__homepage_bandinfo_bandinfo_component__["a" /* BandinfoComponent */] },
            { path: "events/:id", component: __WEBPACK_IMPORTED_MODULE_8__homepage_event_event_component__["a" /* EventComponent */] }
        ] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forRoot(appRoutes)
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () { };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular_calendar__ = __webpack_require__("../../../../angular-calendar/dist/esm/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__header_index_header_index_component__ = __webpack_require__("../../../../../src/app/header-index/header-index.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__header_index_header_index_form_header_index_form_component__ = __webpack_require__("../../../../../src/app/header-index/header-index-form/header-index-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__header_index_header_tabs_header_tabs_component__ = __webpack_require__("../../../../../src/app/header-index/header-tabs/header-tabs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__homepage_homepage_component__ = __webpack_require__("../../../../../src/app/homepage/homepage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__homepage_homepage_header_homepage_header_component__ = __webpack_require__("../../../../../src/app/homepage/homepage-header/homepage-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__homepage_gear_list_gear_list_component__ = __webpack_require__("../../../../../src/app/homepage/gear-list/gear-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__homepage_calendar_calendar_component__ = __webpack_require__("../../../../../src/app/homepage/calendar/calendar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__homepage_calendar_calender_add_calender_add_component__ = __webpack_require__("../../../../../src/app/homepage/calendar/calender-add/calender-add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__homepage_homepage_ui_homepage_ui_component__ = __webpack_require__("../../../../../src/app/homepage/homepage-ui/homepage-ui.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__homepage_bandinfo_bandinfo_component__ = __webpack_require__("../../../../../src/app/homepage/bandinfo/bandinfo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__homepage_bandinfo_bandmember_bandmember_component__ = __webpack_require__("../../../../../src/app/homepage/bandinfo/bandmember/bandmember.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__homepage_gear_list_add_list_add_list_component__ = __webpack_require__("../../../../../src/app/homepage/gear-list/add-list/add-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__services_firebase_service__ = __webpack_require__("../../../../../src/app/services/firebase.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__services_gearList_service__ = __webpack_require__("../../../../../src/app/services/gearList.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__services_events_service__ = __webpack_require__("../../../../../src/app/services/events.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__services_confirm_dialog_component__ = __webpack_require__("../../../../../src/app/services/confirm-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__services_confirm_dialog_service__ = __webpack_require__("../../../../../src/app/services/confirm-dialog.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__services_edit_dialog_component__ = __webpack_require__("../../../../../src/app/services/edit-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__services_edit_dialog_service__ = __webpack_require__("../../../../../src/app/services/edit-dialog.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__services_alert_component__ = __webpack_require__("../../../../../src/app/services/alert.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__services_alert_service__ = __webpack_require__("../../../../../src/app/services/alert.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__services_bandmember_service__ = __webpack_require__("../../../../../src/app/services/bandmember.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__services_bandinfo_service__ = __webpack_require__("../../../../../src/app/services/bandinfo.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__models_colors__ = __webpack_require__("../../../../../src/app/models/colors.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__homepage_gear_list_add_list_addList_component__ = __webpack_require__("../../../../../src/app/homepage/gear-list/add-list/addList.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__homepage_gear_list_gear_lists_service__ = __webpack_require__("../../../../../src/app/homepage/gear-list/gear-lists.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__shared_clickOutside_directive__ = __webpack_require__("../../../../../src/app/shared/clickOutside.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__pipes_filter_array_pipe__ = __webpack_require__("../../../../../src/app/pipes/filter-array-pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__pipes_sorting_pipe__ = __webpack_require__("../../../../../src/app/pipes/sorting-pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__homepage_event_event_component__ = __webpack_require__("../../../../../src/app/homepage/event/event.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__homepage_event_tasks_dashboard_tasks_dashboard_component__ = __webpack_require__("../../../../../src/app/homepage/event/tasks-dashboard/tasks-dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__homepage_event_dashboard_task_task_component__ = __webpack_require__("../../../../../src/app/homepage/event/dashboard/task/task.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__homepage_event_tasks_dashboard_column_column_component__ = __webpack_require__("../../../../../src/app/homepage/event/tasks-dashboard/column/column.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__homepage_event_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/homepage/event/dashboard/dashboard.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







// Angular Material


// Firebase Setup



// Components













// Services & Overall Components















// Pipes







// Firebase consts
var firebaseConfig = {
    apiKey: "AIzaSyCTT4vGbQtyT9UswrB-tElns3vVZaxKXMM",
    authDomain: "simple-musician.firebaseapp.com",
    databaseURL: "https://simple-musician.firebaseio.com/",
    projectId: "simple-musician",
    storageBucket: "simple-musician.appspot.com",
    messagingSenderId: "45229862642"
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_13__header_index_header_index_component__["a" /* HeaderIndexComponent */],
                __WEBPACK_IMPORTED_MODULE_14__header_index_header_index_form_header_index_form_component__["a" /* HeaderIndexFormComponent */],
                __WEBPACK_IMPORTED_MODULE_15__header_index_header_tabs_header_tabs_component__["a" /* HeaderTabsComponent */],
                __WEBPACK_IMPORTED_MODULE_16__homepage_homepage_component__["a" /* HomepageComponent */],
                __WEBPACK_IMPORTED_MODULE_17__homepage_homepage_header_homepage_header_component__["a" /* HomepageHeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_18__homepage_gear_list_gear_list_component__["a" /* GearListComponent */],
                __WEBPACK_IMPORTED_MODULE_19__homepage_calendar_calendar_component__["a" /* CalendarEventComponent */],
                __WEBPACK_IMPORTED_MODULE_20__homepage_calendar_calender_add_calender_add_component__["a" /* CalenderAddComponent */],
                __WEBPACK_IMPORTED_MODULE_40__pipes_filter_array_pipe__["a" /* FilterArrayPipe */],
                __WEBPACK_IMPORTED_MODULE_28__services_confirm_dialog_component__["a" /* ConfirmDialog */],
                __WEBPACK_IMPORTED_MODULE_30__services_edit_dialog_component__["a" /* EditDialog */],
                __WEBPACK_IMPORTED_MODULE_32__services_alert_component__["a" /* AlertComponent */],
                __WEBPACK_IMPORTED_MODULE_21__homepage_homepage_ui_homepage_ui_component__["a" /* HomepageUiComponent */],
                __WEBPACK_IMPORTED_MODULE_22__homepage_bandinfo_bandinfo_component__["a" /* BandinfoComponent */],
                __WEBPACK_IMPORTED_MODULE_23__homepage_bandinfo_bandmember_bandmember_component__["a" /* BandmemberComponent */],
                __WEBPACK_IMPORTED_MODULE_41__pipes_sorting_pipe__["a" /* SortingPipe */],
                __WEBPACK_IMPORTED_MODULE_42__homepage_event_event_component__["a" /* EventComponent */],
                __WEBPACK_IMPORTED_MODULE_43__homepage_event_tasks_dashboard_tasks_dashboard_component__["a" /* TasksDashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_44__homepage_event_dashboard_task_task_component__["a" /* TaskComponent */],
                __WEBPACK_IMPORTED_MODULE_45__homepage_event_tasks_dashboard_column_column_component__["a" /* ColumnComponent */],
                __WEBPACK_IMPORTED_MODULE_24__homepage_gear_list_add_list_add_list_component__["a" /* AddListComponent */],
                __WEBPACK_IMPORTED_MODULE_37__homepage_gear_list_add_list_addList_component__["a" /* AddListDialog */],
                __WEBPACK_IMPORTED_MODULE_46__homepage_event_dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_39__shared_clickOutside_directive__["a" /* ClickOutsideDirective */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_6__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_9_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_10_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_11_angularfire2_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_4_angular_calendar__["a" /* CalendarModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__["a" /* NgbModalModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__["b" /* NgbModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["g" /* MdSelectModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["b" /* MdDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["f" /* MdNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["d" /* MdDialogModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["a" /* MdButtonModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["h" /* MdSnackBarModule */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_28__services_confirm_dialog_component__["a" /* ConfirmDialog */],
                __WEBPACK_IMPORTED_MODULE_30__services_edit_dialog_component__["a" /* EditDialog */],
                __WEBPACK_IMPORTED_MODULE_37__homepage_gear_list_add_list_addList_component__["a" /* AddListDialog */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_25__services_firebase_service__["a" /* FirebaseService */],
                __WEBPACK_IMPORTED_MODULE_26__services_gearList_service__["a" /* GearListService */],
                __WEBPACK_IMPORTED_MODULE_27__services_events_service__["a" /* EventsService */],
                __WEBPACK_IMPORTED_MODULE_29__services_confirm_dialog_service__["a" /* DialogsService */],
                __WEBPACK_IMPORTED_MODULE_31__services_edit_dialog_service__["a" /* EditDialogsService */],
                __WEBPACK_IMPORTED_MODULE_33__services_alert_service__["a" /* AlertService */],
                __WEBPACK_IMPORTED_MODULE_34__services_bandmember_service__["a" /* BandmemberService */],
                __WEBPACK_IMPORTED_MODULE_35__services_bandinfo_service__["a" /* BandinfoService */],
                __WEBPACK_IMPORTED_MODULE_36__models_colors__["a" /* Colors */],
                __WEBPACK_IMPORTED_MODULE_38__homepage_gear_list_gear_lists_service__["a" /* GearListsService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/header-index/header-index-form/header-index-form.component.html":
/***/ (function(module, exports) {

module.exports = "<ul class=\"nav navbar-nav navbar-right\">\n  <li class=\"\">\n    <!-- <a>HELLO</a> -->\n    <form (ngSubmit)=\"login(f)\" #f=\"ngForm\">          \n      <span class=\"glyphicon glyphicon-envelope\"></span>\n      <input type=\"email\" placeholder=\"user@gmail.com\" name=\"email\" [(ngModel)]=\"email\" required>\n      <span class=\"glyphicon glyphicon-lock\"></span>\n      <input type=\"password\" placeholder=\"password\" name=\"password\" [(ngModel)]=\"password\" required>\n      <button class=\"btn btn-primary\" type=\"submit\">\n          <span class=\"glyphicon glyphicon-log-in\"></span> Login\n      </button>\n      <a class=\"btn btn-primary\" (click)=\"signUp()\" [routerLink]=\"['/']\">\n          <span class=\"glyphicon glyphicon-user\"></span> \n        Sign Up</a>\n      <div *ngIf=\"(!f.valid && f._submitted) || !form\" class=\"help-block\">\n        Please enter valid E-mail & password\n      </div>\n    </form>\n    <!-- <li>\n      <a (click)=\"signUp()\" [routerLink]=\"['']\">\n        <span class=\"glyphicon glyphicon-user\"></span> \n      Sign Up</a>\n    </li>\n    <li>\n      <a class=\"index-login\" type=\"submit\">\n        <span class=\"glyphicon glyphicon-log-in\"></span> \n      Login</a>\n    </li> -->\n    </li>\n  </ul>\n"

/***/ }),

/***/ "../../../../../src/app/header-index/header-index-form/header-index-form.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".index-login-form {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n\n.glyphicon-envelope, .glyphicon-lock {\n  color: #9d9d9d; }\n\n.index-login {\n  cursor: pointer; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header-index/header-index-form/header-index-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderIndexFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_firebase_service__ = __webpack_require__("../../../../../src/app/services/firebase.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderIndexFormComponent = /** @class */ (function () {
    function HeaderIndexFormComponent(firebaseService, router) {
        this.firebaseService = firebaseService;
        this.router = router;
        this.form = true;
    }
    // Response to get access to user-objebt
    HeaderIndexFormComponent.prototype.login = function (form) {
        var _this = this;
        console.log(form);
        var value = form.value;
        if (form.valid) {
            var user = this.firebaseService.login(value.email, value.password);
            user.then(function (response) {
                console.log(response);
                if (response.uid) {
                    _this.router.navigate(["/homepage"]);
                }
            }).catch(function (error) {
                console.log(error);
                _this.form = false;
            });
        }
    };
    HeaderIndexFormComponent.prototype.signUp = function () {
        console.log("sign up");
    };
    HeaderIndexFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-header-index-form',
            template: __webpack_require__("../../../../../src/app/header-index/header-index-form/header-index-form.component.html"),
            styles: [__webpack_require__("../../../../../src/app/header-index/header-index-form/header-index-form.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_firebase_service__["a" /* FirebaseService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_firebase_service__["a" /* FirebaseService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _b || Object])
    ], HeaderIndexFormComponent);
    return HeaderIndexFormComponent;
    var _a, _b;
}());

//# sourceMappingURL=header-index-form.component.js.map

/***/ }),

/***/ "../../../../../src/app/header-index/header-index.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse\">\n  <div class=\"container-fluid\">\n    <app-header-tabs></app-header-tabs>\n    <app-header-index-form></app-header-index-form>\n  </div>\n</nav>"

/***/ }),

/***/ "../../../../../src/app/header-index/header-index.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container-fluid {\n  margin-top: 10px;\n  margin-right: 10px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header-index/header-index.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderIndexComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderIndexComponent = /** @class */ (function () {
    function HeaderIndexComponent() {
    }
    HeaderIndexComponent.prototype.ngOnInit = function () {
    };
    HeaderIndexComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-header-index',
            template: __webpack_require__("../../../../../src/app/header-index/header-index.component.html"),
            styles: [__webpack_require__("../../../../../src/app/header-index/header-index.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderIndexComponent);
    return HeaderIndexComponent;
}());

//# sourceMappingURL=header-index.component.js.map

/***/ }),

/***/ "../../../../../src/app/header-index/header-tabs/header-tabs.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar-header\">\n  <a class=\"navbar-brand\" href=\"#\">Fremtidens Musiker</a>\n</div>\n<ul class=\"nav navbar-nav\">\n  <li class=\"active\"><a href=\"#\">Home</a></li>\n  <li><a href=\"#\">Kontakt Os</a></li>\n  <li><a href=\"#\">Om Os</a></li>\n</ul>"

/***/ }),

/***/ "../../../../../src/app/header-index/header-tabs/header-tabs.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header-index/header-tabs/header-tabs.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderTabsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderTabsComponent = /** @class */ (function () {
    function HeaderTabsComponent() {
    }
    HeaderTabsComponent.prototype.ngOnInit = function () {
    };
    HeaderTabsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-header-tabs',
            template: __webpack_require__("../../../../../src/app/header-index/header-tabs/header-tabs.component.html"),
            styles: [__webpack_require__("../../../../../src/app/header-index/header-tabs/header-tabs.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderTabsComponent);
    return HeaderTabsComponent;
}());

//# sourceMappingURL=header-tabs.component.js.map

/***/ }),

/***/ "../../../../../src/app/homepage/bandinfo/bandinfo.component.html":
/***/ (function(module, exports) {

module.exports = "<ng-template #loading>\n  <div class=\"text-center\">\n    <i class=\"fa fa-spin fa-spinner fa-5x\"></i>\n    <br>\n    Loading bandinfo...\n  </div>\n</ng-template> \n\n<div *ngIf=\"bandinfoAvailable; else loading\"  class=\"container\">\n  <div class=\"pull-left well\" [ngStyle]=\"{ width: '48%' }\">\n    <div class=\"pull-right\">\n      <label \n        (click)=\"editPressed()\"\n        class=\"pencil-label\"\n        ><span>\n            <i *ngIf=\"!isEditting\"\n            class=\"fa fa-pencil\" \n            aria-hidden=\"true\"\n          ></i>\n          <i *ngIf=\"isEditting\"\n            class=\"fa fa-times\"\n            aria-hidden=\"true\"\n          ></i>\n        </span>\n      </label>\n    </div>\n    <br>\n    <form #bandinfoForm=\"ngForm\" (ngSubmit)=\"saveBandinfoPressed(bandinfoForm)\">\n    <div class=\"form-group\">\n        <label>Band name</label>\n        <input \n          class=\"form-control\"\n          type=\"text\" \n          [(ngModel)]=\"bandinfo.bandName\" \n          name=\"bandName\"\n          [disabled]=\"!isEditting\" \n          [ngClass]=\" isEditting ? 'edit' : 'not-edit' \" \n          required>\n      </div>\n      <br>\n      <div class=\"form-group\">\n        <label>Phone number</label>\n        <input \n          class=\"form-control\"\n          type=\"tel\" \n          [(ngModel)]=\"bandinfo.bandPhone\"\n          name=\"bandPhone\"\n          minlength=\"8\"\n          maxlength=\"8\"\n          [disabled]=\"!isEditting\"\n          [ngClass]=\" isEditting ? 'edit' : 'not-edit' \" \n          required>\n      </div>\n      <br>\n      <div class=\"form-group\">\n        <label>E-mail</label>\n        <input \n          class=\"form-control\"\n          type=\"text\" \n          [(ngModel)]=\"bandinfo.bandMail\"\n          name=\"bandMail\"\n          [disabled]=\"!isEditting\"\n          [ngClass]=\" isEditting ? 'edit' : 'not-edit' \" \n          pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\"\n          required>\n      </div>\n      <br>\n      <div class=\"form-group\">\n          <label>Description</label>\n          <textarea \n            class=\"form-control\" \n            [(ngModel)]=\"bandinfo.bandDescription\"\n            name=\"bandDescription\" \n            id=\"\" \n            cols=\"20\" \n            rows=\"5\" \n            [disabled]=\"!isEditting\">Mutts is........\n          </textarea>\n      </div>\n      <br>\n      <div class=\"form-group\">\n        <label>Press release</label>\n        <textarea  \n          class=\"form-control\" \n          [(ngModel)]=\"bandinfo.bandPressRelease\"\n          name=\"bandPressRelease\" \n          id=\"\" \n          cols=\"20\" \n          rows=\"5\" \n          [disabled]=\"!isEditting\">Mutts is........\n        </textarea>\n      </div>\n      <div class=\"form-group\">\n        <button *ngIf=\"isEditting\"\n          class=\"btn btn-success\"\n          type=\"submit\"\n          [disabled]=\"!bandinfoForm.valid\">\n          <span><i class=\"fa fa-floppy-o\" aria-hidden=\"true\"></i></span> Save\n        </button>\n      </div>\n    </form>\n  </div>\n  <div class=\"well pull-right\" [ngStyle]=\"{ width: '48%' }\">\n    <div class=\"wrapper-container\">\n        <app-bandmember \n          *ngFor=\"let member of bandMembers\" \n          [bandMember]=\"member\"\n          [edit]=\"member.edit\"\n        ></app-bandmember>\n    </div>\n    <br>\n    <div class=\"add-member\">\n      <button class=\"btn btn-success pull-right\" (click)=\"addPressed()\" >\n        <span><i class=\"fa fa-plus\" aria-hidden=\"true\"></i></span> Add bandmember</button>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/homepage/bandinfo/bandinfo.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".fa {\n  cursor: pointer; }\n\n.pencil-label {\n  font-size: 1.5em; }\n\n.form-group {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  width: 90%; }\n\n.form-group button {\n  width: 50%;\n  -ms-flex-item-align: end;\n      align-self: flex-end; }\n\n.not-edit {\n  background-color: transparent;\n  border: 0;\n  box-shadow: none; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/homepage/bandinfo/bandinfo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BandinfoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_bandmember_service__ = __webpack_require__("../../../../../src/app/services/bandmember.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_bandinfo_service__ = __webpack_require__("../../../../../src/app/services/bandinfo.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BandinfoComponent = /** @class */ (function () {
    function BandinfoComponent(bandMemberService, bandInfoService) {
        this.bandMemberService = bandMemberService;
        this.bandInfoService = bandInfoService;
        this.isEditting = false;
        this.bandinfoAvailable = false;
        this.bandinfo = {
            $key: '',
            bandName: '',
            bandPhone: 0,
            bandMail: '',
        };
    }
    BandinfoComponent.prototype.ngOnInit = function () {
        this.loadBandinfo();
        this.bandMembers = [];
        this.loadMembers();
    };
    BandinfoComponent.prototype.loadBandinfo = function () {
        var _this = this;
        this.bandInfoService.getBandinfo().subscribe(function (info) {
            _this.bandinfo = info;
            _this.bandinfoAvailable = true;
        });
    };
    BandinfoComponent.prototype.loadMembers = function () {
        var _this = this;
        this.bandMemberService.getBandMembers().subscribe(function (list) {
            _this.bandMembers = list;
            console.log(list);
        });
    };
    BandinfoComponent.prototype.editPressed = function () {
        this.isEditting = !this.isEditting;
    };
    BandinfoComponent.prototype.addPressed = function () {
        var member = {
            name: '',
            role: '',
            mail: '',
            phone: null,
            color: null,
            edit: true
        };
        this.bandMemberService.bandMembers.push(member);
    };
    BandinfoComponent.prototype.saveBandinfoPressed = function (form) {
        var controls = form.controls;
        var bandinfo = {
            bandName: controls.bandName.value,
            bandMail: controls.bandMail.value,
            bandPhone: controls.bandPhone.value,
            bandDescription: controls.bandDescription.value,
            bandPressRelease: controls.bandPressRelease.value
        };
        this.bandInfoService.updateBandinfo(bandinfo);
        this.isEditting = false;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
        __metadata("design:type", Array)
    ], BandinfoComponent.prototype, "bandMembers", void 0);
    BandinfoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-bandinfo',
            template: __webpack_require__("../../../../../src/app/homepage/bandinfo/bandinfo.component.html"),
            styles: [__webpack_require__("../../../../../src/app/homepage/bandinfo/bandinfo.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_bandmember_service__["a" /* BandmemberService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_bandmember_service__["a" /* BandmemberService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_bandinfo_service__["a" /* BandinfoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_bandinfo_service__["a" /* BandinfoService */]) === "function" && _b || Object])
    ], BandinfoComponent);
    return BandinfoComponent;
    var _a, _b;
}());

//# sourceMappingURL=bandinfo.component.js.map

/***/ }),

/***/ "../../../../../src/app/homepage/bandinfo/bandmember/bandmember.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper-card\">\n    <div class=\"wrapper-content\">\n      <div class=\"pull-right\">\n        <label \n          class=\"bandmember-label\"\n          (click)=\"editPressed()\"\n          ><span>\n            <i *ngIf=\"!isEditting\" \n              class=\"fa fa-pencil\" \n              aria-hidden=\"true\"\n            ></i>\n            <i *ngIf=\"isEditting\"\n              class=\"fa fa-times\"\n              aria-hidden=\"true\"\n            ></i>\n          </span>\n        </label>\n        <label \n          (click)=\"deletePressed()\"\n          class=\"bandmember-label\" \n          ><span><i class=\"fa fa-trash\" aria-hidden=\"true\"></i></span>\n      </label>\n      </div>\n      <br>\n      <form #memberForm=\"ngForm\" (ngSubmit)=\"savePressed(memberForm)\">\n        <div class=\"item-container\">\n          <div class=\"item\">\n              <label for=\"name\">Name</label>\n              <input \n                class=\"form-control\"\n                type=\"text\" \n                [(ngModel)]=\"member.name\"\n                name=\"name\"\n                [disabled]=\"!isEditting\"\n                [ngClass]=\" isEditting ? 'edit' : 'not-edit' \"\n                >\n            </div>\n            <div class=\"item\">\n              <label for=\"role\">Role</label>\n              <input \n                class=\"form-control\"\n                type=\"text\" \n                [(ngModel)]=\"member.role\"\n                name=\"role\"\n                [disabled]=\"!isEditting\"\n                [ngClass]=\" isEditting ? 'edit' : 'not-edit' \" >\n            </div>\n        </div>\n        <div *ngIf=\"isEditting\" class=\"item\">\n          <label for=\"mail\">E-mail</label>\n          <input \n            class=\"form-control\"\n            type=\"email\"\n            [(ngModel)]=\"member.mail\"\n            name=\"mail\"\n            required\n            pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\">\n        </div>\n        <div *ngIf=\"isEditting\" class=\"item\">\n          <label for=\"phone\">Phone</label>\n          <input \n            class=\"form-control\"\n            type=\"tel\"\n            [(ngModel)]=\"member.phone\"\n            #phone=\"ngModel\"\n            name=\"phone\"\n            required\n            minlength=\"8\"\n            maxlength=\"8\">\n        </div>\n        <div *ngIf=\"isEditting\" class=\"item\">\n          <label for=\"color\">Color</label>\n          <md-input-container class=\"color-container\" style=\"margin-right: 10px\">\n            <div class=\"color-box\" [ngStyle]=\"{'background-color' : member.color?.colorHex.primary }\"></div>\n            <md-select \n              #select=\"mdSelect\" \n              [(ngModel)]=\"member.color\" \n              name=\"color\" \n              required\n              (click)=\"updatedColor($event)\">\n              <md-option \n                *ngIf=\"!isColorUpdated && member.color !== 'undefined'\"\n                class=\"color-box-container\"\n                [value]=\"member.color\">{{ member.color?.value }}\n              </md-option>\n              <md-option \n                *ngFor=\"let color of colors\" \n                class=\"color-box-container\" \n                [value]=\"color\">\n                <span \n                  class=\"color-box\" \n                  [ngStyle]=\"{'background-color' : color.colorHex.primary }\"\n                ></span> {{ color.value }}\n              </md-option>\n            </md-select>\n          </md-input-container>\n        </div>\n        <div [hidden]=\"true\">\n          <input \n            type=\"boolean\" \n            name=\"edit\"\n            [(ngModel)]=\"member.edit\">\n        </div>\n        <div *ngIf=\"isEditting\" class=\"item\">\n          <button \n            class=\"btn btn-success\"\n            type=\"submit\"\n            [disabled]=\"!memberForm.valid\"\n            ><span>\n              <i class=\"fa fa-floppy-o\" aria-hidden=\"true\"></i>\n            </span> Save</button>\n        </div>\n      </form>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/homepage/bandinfo/bandmember/bandmember.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".pull-right {\n  padding-top: 2%;\n  padding-right: 2%; }\n\n.fa {\n  cursor: pointer; }\n\n.bandmember-label {\n  font-size: 1.2em; }\n\n.item-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row; }\n\n.item {\n  padding-left: 2%;\n  padding-top: 2%;\n  padding-bottom: 2%;\n  width: 90%; }\n\n.item button {\n  width: 50%;\n  -ms-flex-item-align: end;\n      align-self: flex-end; }\n\n.not-edit {\n  background-color: transparent;\n  border: 0;\n  box-shadow: none; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/homepage/bandinfo/bandmember/bandmember.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BandmemberComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_confirm_dialog_service__ = __webpack_require__("../../../../../src/app/services/confirm-dialog.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_bandmember_service__ = __webpack_require__("../../../../../src/app/services/bandmember.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_colors__ = __webpack_require__("../../../../../src/app/models/colors.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BandmemberComponent = /** @class */ (function () {
    function BandmemberComponent(bandMemberService, dialogService, colorService) {
        this.bandMemberService = bandMemberService;
        this.dialogService = dialogService;
        this.colorService = colorService;
        this.isEditting = false;
        this.isColorUpdated = false;
        this.colors = colorService.colors;
    }
    BandmemberComponent.prototype.ngOnInit = function () {
    };
    BandmemberComponent.prototype.editPressed = function () {
        this.isEditting = !this.isEditting;
    };
    BandmemberComponent.prototype.deletePressed = function () {
        var _this = this;
        this.dialogService
            .confirm('Delete: ' + this.member.name, 'Are you sure you want to do this?')
            .subscribe(function (res) {
            if (res) {
                _this.bandMemberService.deleteBandMember(_this.member);
            }
            else {
                return;
            }
        });
    };
    BandmemberComponent.prototype.savePressed = function (f) {
        this.member.color = f.controls.color.value;
        // console.log(this.member)
        this.member.edit = false;
        this.bandMemberService.updateBandMember(this.member.$key, this.member);
        this.isEditting = false;
    };
    BandmemberComponent.prototype.updatedColor = function (event) {
        console.log(event);
        this.isColorUpdated = true;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])('edit'),
        __metadata("design:type", Object)
    ], BandmemberComponent.prototype, "isEditting", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])('bandMember'),
        __metadata("design:type", Object)
    ], BandmemberComponent.prototype, "member", void 0);
    BandmemberComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-bandmember',
            template: __webpack_require__("../../../../../src/app/homepage/bandinfo/bandmember/bandmember.component.html"),
            styles: [__webpack_require__("../../../../../src/app/homepage/bandinfo/bandmember/bandmember.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_bandmember_service__["a" /* BandmemberService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_bandmember_service__["a" /* BandmemberService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_confirm_dialog_service__["a" /* DialogsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_confirm_dialog_service__["a" /* DialogsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__models_colors__["a" /* Colors */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__models_colors__["a" /* Colors */]) === "function" && _c || Object])
    ], BandmemberComponent);
    return BandmemberComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=bandmember.component.js.map

/***/ }),

/***/ "../../../../../src/app/homepage/calendar/calendar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"add-group\">\n    <button class=\"btn btn-success pull-right\" id=\"add-btn\" (click)=\"addEventClicked()\">\n      <span *ngIf=\"!addEvent\"><i class=\"fa fa-plus\"></i></span> {{ addEventText }}\n    </button>\n    <app-calender-add *ngIf=\"addEvent\" [events]=\"events\"></app-calender-add>\n  </div>\n  <br>\n  <hr>\n  <div class=\"row text-center\">\n    <div class=\"col-md-4\">\n      <div class=\"btn-group\">\n        <div\n          class=\"btn btn-primary\"\n          mwlCalendarPreviousView\n          [view]=\"view\"\n          [(viewDate)]=\"viewDate\">\n          Previous\n        </div>\n        <div\n          class=\"btn btn-outline-secondary\"\n          mwlCalendarToday\n          [(viewDate)]=\"viewDate\">\n          Today\n        </div>\n        <div\n          class=\"btn btn-primary\"\n          mwlCalendarNextView\n          [view]=\"view\"\n          [(viewDate)]=\"viewDate\">\n          Next\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-4\">\n      <h3>{{ viewDate | calendarDate:(view + 'ViewTitle'):'en' }}</h3>\n    </div>\n    <div class=\"col-md-4\">\n      <div class=\"btn-group\">\n        <div\n          class=\"btn btn-primary\"\n          (click)=\"view = 'month'\"\n          [class.active]=\"view === 'month'\">\n          Month\n        </div>\n        <div\n          class=\"btn btn-primary\"\n          (click)=\"view = 'week'\"\n          [class.active]=\"view === 'week'\">\n          Week\n        </div>\n        <div\n          class=\"btn btn-primary\"\n          (click)=\"view = 'day'\"\n          [class.active]=\"view === 'day'\">\n          Day\n        </div>\n      </div>\n    </div>\n  </div>\n  <br>\n  <ng-template #loading>\n    <div class=\"text-center\">\n      <i class=\"fa fa-spin fa-spinner fa-5x\"></i>\n      <br>\n      Loading events...\n    </div>\n  </ng-template>  \n\n  <div *ngIf=\"dataAvailable; else loading\">\n    <br>\n    <div [ngSwitch]=\"view\">\n      <mwl-calendar-month-view\n        *ngSwitchCase=\"'month'\"\n        [viewDate]=\"viewDate\"\n        [events]=\"events\"\n        [activeDayIsOpen]=\"activeDayIsOpen\"\n        (dayClicked)=\"dayClicked($event.day)\"\n        (eventClicked)=\"handleEvent('Clicked', $event.event)\"\n        (eventTimesChanged)=\"eventTimesChanged($event)\">\n      </mwl-calendar-month-view>\n      <mwl-calendar-week-view\n        *ngSwitchCase=\"'week'\"\n        [viewDate]=\"viewDate\"\n        [events]=\"events\"\n        (eventClicked)=\"handleEvent('Clicked', $event.event)\"\n        (eventTimesChanged)=\"eventTimesChanged($event)\">\n      </mwl-calendar-week-view>\n      <mwl-calendar-day-view\n        *ngSwitchCase=\"'day'\"\n        [viewDate]=\"viewDate\"\n        [events]=\"events\"\n        (eventClicked)=\"handleEvent('Clicked', $event.event)\"\n        (eventTimesChanged)=\"eventTimesChanged($event)\">\n      </mwl-calendar-day-view>\n    </div>\n</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/homepage/calendar/calendar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".wrapper-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -ms-flex-pack: distribute;\n      justify-content: space-around; }\n\n.wrapper-card {\n  background-color: #eee;\n  border-width: 1;\n  border-radius: 2;\n  border-color: #0d0d0d;\n  border-bottom-width: 0;\n  box-shadow: 2px 2px 2px #888888;\n  margin-left: 5px;\n  margin-right: 5px;\n  margin-top: 10px; }\n\n.wrapper-card-content {\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  margin: 10px; }\n\n.item {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/homepage/calendar/calendar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarEventComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_date_fns__ = __webpack_require__("../../../../date-fns/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_date_fns___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_date_fns__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_firebase_service__ = __webpack_require__("../../../../../src/app/services/firebase.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_fullcalendar__ = __webpack_require__("../../../../fullcalendar/dist/fullcalendar.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_fullcalendar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_fullcalendar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_events_service__ = __webpack_require__("../../../../../src/app/services/events.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_confirm_dialog_service__ = __webpack_require__("../../../../../src/app/services/confirm-dialog.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_edit_dialog_service__ = __webpack_require__("../../../../../src/app/services/edit-dialog.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__models_colors__ = __webpack_require__("../../../../../src/app/models/colors.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var CalendarEventComponent = /** @class */ (function () {
    function CalendarEventComponent(es, firebaseService, dialog, dialogService, editDialogService) {
        var _this = this;
        this.es = es;
        this.firebaseService = firebaseService;
        this.dialog = dialog;
        this.dialogService = dialogService;
        this.editDialogService = editDialogService;
        this.date = new Date(Date.now());
        this.view = 'month';
        this.viewDate = new Date();
        this.dataAvailable = false;
        this.activeDayIsOpen = false;
        this.addEvent = false;
        this.addEventText = 'Add new event';
        this.colors = new __WEBPACK_IMPORTED_MODULE_9__models_colors__["a" /* Colors */];
        this.actions = [
            {
                label: '<i class="fa fa-fw fa-pencil"></i>',
                onClick: function (_a) {
                    var event = _a.event;
                    _this.handleEvent('Edited', event);
                }
            },
            {
                label: '<i class="fa fa-fw fa-times"></i>',
                onClick: function (_a) {
                    var event = _a.event;
                    // this.events = this.events.filter(iEvent => iEvent !== event);
                    _this.handleEvent('Deleted', event);
                }
            }
        ];
        this.events = [];
    }
    CalendarEventComponent.prototype.ngOnInit = function () {
        this.loadEvents();
    };
    CalendarEventComponent.prototype.loadEvents = function () {
        var _this = this;
        this.es.getEvents().subscribe(function (res) {
            _this.events = [];
            res.forEach(function (item) {
                var event = {
                    $key: item.$key,
                    id: item.id,
                    start: new Date(item.start),
                    end: new Date(item.end),
                    title: item.title,
                    color: item.color.colorHex,
                    actions: _this.actions
                };
                _this.events.push(event);
            });
            _this.dataAvailable = true;
        });
    };
    CalendarEventComponent.prototype.dayClicked = function (_a) {
        var date = _a.date, events = _a.events;
        if (Object(__WEBPACK_IMPORTED_MODULE_3_date_fns__["isSameMonth"])(date, this.viewDate)) {
            if ((Object(__WEBPACK_IMPORTED_MODULE_3_date_fns__["isSameDay"])(this.viewDate, date) && this.activeDayIsOpen === true) ||
                events.length === 0) {
                this.activeDayIsOpen = false;
            }
            else {
                this.activeDayIsOpen = true;
                this.viewDate = date;
            }
        }
    };
    CalendarEventComponent.prototype.eventClicked = function (event) {
        console.log(event);
    };
    CalendarEventComponent.prototype.eventTimesChanged = function (_a) {
        var event = _a.event, newStart = _a.newStart, newEnd = _a.newEnd;
        event.start = newStart;
        event.end = newEnd;
        this.handleEvent('Dropped or resized', event);
    };
    CalendarEventComponent.prototype.handleEvent = function (action, event) {
        console.log(action);
        if (action === 'Deleted') {
            this.openDeleteDialog(action, event);
        }
        else if (action === 'Edited') {
            this.openEditDialog(event);
        }
    };
    CalendarEventComponent.prototype.openEditDialog = function (event) {
        this.editDialogService.edit(event).subscribe(function (res) {
            console.log(res);
        });
    };
    CalendarEventComponent.prototype.openDeleteDialog = function (action, event) {
        var _this = this;
        console.log({ action: action, event: event });
        this.dialogService
            .confirm('Delete Event: ' + event.title, 'Are you sure you want to do this?')
            .subscribe(function (res) {
            if (res) {
                _this.es.deleteEvent(event);
            }
            else {
                return;
            }
        });
    };
    CalendarEventComponent.prototype.addEventClicked = function () {
        if (this.addEvent) {
            this.addEventText = 'Add new event';
            this.addEvent = false;
        }
        else {
            this.addEventText = 'Cancel';
            this.addEvent = true;
        }
    };
    CalendarEventComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-calendar',
            template: __webpack_require__("../../../../../src/app/homepage/calendar/calendar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/homepage/calendar/calendar.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_6__services_events_service__["a" /* EventsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_events_service__["a" /* EventsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_firebase_service__["a" /* FirebaseService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_firebase_service__["a" /* FirebaseService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MdDialog */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_7__services_confirm_dialog_service__["a" /* DialogsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__services_confirm_dialog_service__["a" /* DialogsService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_8__services_edit_dialog_service__["a" /* EditDialogsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__services_edit_dialog_service__["a" /* EditDialogsService */]) === "function" && _e || Object])
    ], CalendarEventComponent);
    return CalendarEventComponent;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=calendar.component.js.map

/***/ }),

/***/ "../../../../../src/app/homepage/calendar/calender-add/calender-add.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container well\">\n  <div class=\"wrapper-container\">\n    <h3>Add new event</h3>\n    <div class=\"wrapper-card\">\n      <form #f=\"ngForm\" (ngSubmit)=\"addEvent(f)\">\n        <div class=\"wrapper-card-content\">\n          <div class=\"item\">\n            <label for=\"eventName\">Event</label>\n            <input class=\"form-control\" type=\"text\" [(ngModel)]=\"eventName\" name=\"eventName\" id=\"\" required>\n          </div>\n          <div class=\"item\">\n            <label for=\"startDate\">Start date</label>\n            <div class=\"datepicker-container\" >\n              <input class=\"form-control\" mdInput [mdDatepicker]=\"startPicker\" placeholder=\"Choose a date\" [(ngModel)]=\"startDate\" name=\"startDate\" id=\"\" required>\n                <md-datepicker-toggle mdSuffix [for]=\"startPicker\"></md-datepicker-toggle>\n                <md-datepicker #startPicker></md-datepicker>\n            </div>\n          </div>\n          <div class=\"item\">\n              <label for=\"endDate\">End date</label>\n              <div class=\"datepicker-container\" >\n                <input class=\"form-control\" mdInput [mdDatepicker]=\"endPicker\" placeholder=\"Choose a date\" [(ngModel)]=\"endDate\" name=\"endDate\" id=\"\" required>\n                  <md-datepicker-toggle mdSuffix [for]=\"endPicker\"></md-datepicker-toggle>\n                  <md-datepicker #endPicker></md-datepicker>\n              </div>\n            </div>\n          <div class=\"item\">\n            <md-input-container style=\"margin-right: 10px;\">\n              <md-select \n                placeholder=\"Color\" \n                #select=\"mdSelect\" \n                [(ngModel)]=\"color\" \n                name=\"color\" \n                required>\n                <md-option \n                  *ngFor=\"let c of colors\" \n                  class=\"color-box-container\" \n                  [value]=\"c\" \n                  ><span \n                    class=\"color-box\" \n                    [ngStyle]=\"{'background-color' : c.colorHex.primary }\"\n                  ></span> {{ c.value }}</md-option>\n              </md-select>\n            </md-input-container>\n          </div>  \n          <div class=\"item\">\n            <label for=\"\">Add Event</label>\n            <button class=\"btn btn-success\" type=\"submit\" [disabled]=\"!f.valid\" >Save event</button>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/homepage/calendar/calender-add/calender-add.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".add-group {\n  width: 100%; }\n\n.btn {\n  width: 7em; }\n\n.datepicker-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/homepage/calendar/calender-add/calender-add.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalenderAddComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_firebase_service__ = __webpack_require__("../../../../../src/app/services/firebase.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_events_service__ = __webpack_require__("../../../../../src/app/services/events.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_colors__ = __webpack_require__("../../../../../src/app/models/colors.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CalenderAddComponent = /** @class */ (function () {
    function CalenderAddComponent(es, firebaseService, colorsSerivce) {
        this.es = es;
        this.firebaseService = firebaseService;
        this.colorsSerivce = colorsSerivce;
        this.colors = colorsSerivce.colors;
    }
    CalenderAddComponent.prototype.ngOnInit = function () {
        // console.log(this.eventsList)
    };
    CalenderAddComponent.prototype.addEvent = function (f) {
        var form = f.value;
        var event = {
            id: this.makeID(),
            title: form.eventName,
            start: (form.startDate).toString(),
            end: (form.endDate).toString(),
            color: form.color
        };
        this.es.addEvent(event);
        f.reset();
    };
    CalenderAddComponent.prototype.makeID = function () {
        var text = "E";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (var i = 0; i < 27; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        return text;
    };
    CalenderAddComponent.prototype.test = function (d) {
        console.log(d);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["F" /* Input */])('events'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["c" /* FirebaseListObservable */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["c" /* FirebaseListObservable */]) === "function" && _a || Object)
    ], CalenderAddComponent.prototype, "eventsList", void 0);
    CalenderAddComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["o" /* Component */])({
            selector: 'app-calender-add',
            template: __webpack_require__("../../../../../src/app/homepage/calendar/calender-add/calender-add.component.html"),
            styles: [__webpack_require__("../../../../../src/app/homepage/calendar/calender-add/calender-add.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_events_service__["a" /* EventsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_events_service__["a" /* EventsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__services_firebase_service__["a" /* FirebaseService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_firebase_service__["a" /* FirebaseService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__models_colors__["a" /* Colors */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__models_colors__["a" /* Colors */]) === "function" && _d || Object])
    ], CalenderAddComponent);
    return CalenderAddComponent;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=calender-add.component.js.map

/***/ }),

/***/ "../../../../../src/app/homepage/event/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"wrapper-container\">\n      <app-task *ngFor=\"let card of cards\" [card]=\"card\" (clickOutside)=\"close()\"></app-task>\n    </div>\n</div> \n \n"

/***/ }),

/***/ "../../../../../src/app/homepage/event/dashboard/dashboard.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/homepage/event/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
        this.cards = [
            { title: "guitar", description: "something" },
            { title: "guitar", description: "something" },
            { title: "guitar", description: "something" }
        ];
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent.prototype.close = function () {
        console.log("I'm out");
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-dashboard',
            template: __webpack_require__("../../../../../src/app/homepage/event/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/homepage/event/dashboard/dashboard.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());

//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/homepage/event/dashboard/task/task.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\" (click)=\"editCard()\">\n  <div class=\"item\">\n    <label *ngIf=\"!editingCard\" type=\"text\">{{ card.title }}</label>\n    <input *ngIf=\"editingCard\" class=\"form-control\" type=\"text\" name=\"\" id=\"\" [(ngModel)]=\"currentTitle\">\n    <br>\n    <div class=\"content\">\n        <textarea class=\"form-control\" name=\"\" id=\"\" cols=\"10\" rows=\"5\"></textarea>\n        <input class=\"form-control\" type=\"checkbox\">\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/homepage/event/dashboard/task/task.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card {\n  background-color: #fff;\n  text-decoration: none;\n  padding: 7px;\n  width: 50%;\n  margin-top: 8px;\n  border-radius: 3px;\n  color: #4d4d4d;\n  font-style: normal;\n  font-variant: normal;\n  font-weight: normal;\n  font-stretch: normal;\n  font-family: 'Helvetica Neue', Arial, Helvetica, sans-serif;\n  font-size: 14px;\n  line-height: 18px;\n  cursor: pointer;\n  white-space: normal;\n  word-wrap: break-word;\n  list-style: none;\n  border-bottom: solid 1px #ccc;\n  transition: all;\n  transition-property: all;\n  transition-duration: 150ms;\n  transition-timing-function: ease; }\n\n.card:hover {\n  background-color: #ddd; }\n\n.card textarea {\n  display: inherit;\n  width: 100%;\n  border: none;\n  line-height: 18px;\n  font-size: 14px;\n  resize: none;\n  font-style: normal;\n  font-variant: normal;\n  font-weight: normal;\n  font-stretch: normal;\n  font-family: 'Helvetica Neue', Arial, Helvetica, sans-serif;\n  line-height: 18px;\n  margin: -2px; }\n\n.card .write-area {\n  -webkit-box-flex: 2;\n      -ms-flex-positive: 2;\n          flex-grow: 2; }\n\n.card .content {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n  .card .content input {\n    border: none;\n    box-shadow: none;\n    cursor: pointer; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/homepage/event/dashboard/task/task.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TaskComponent = /** @class */ (function () {
    // zone: NgZone;
    function TaskComponent(el) {
        this.el = el;
        // @Output() cardUpdate: EventEmitter<Card>;
        this.editingCard = false;
        //   this.zone = new NgZone({ enableLongStackTrace: false });
        //   this.cardUpdate = new EventEmitter();
    }
    TaskComponent.prototype.ngOnInit = function () {
        console.log(this.card);
        this.currentTitle = this.card.title;
        this.description = this.card.description;
        // this._ws.onCardUpdate.subscribe((card: Card) => {
        //   if (this.card._id === card._id) {
        //     this.card.title = card.title;
        //     this.card.order = card.order;
        //     this.card.columnId = card.columnId;
        //   }
        // });
    };
    // blurOnEnter(event) {
    //   if (event.keyCode === 13) {
    //     event.target.blur();
    //   } else if (event.keyCode === 27) {
    //     this.card.title = this.currentTitle;
    //     this.editingCard = false;
    //   }
    // }
    TaskComponent.prototype.editCard = function () {
        console.log("editting");
        this.editingCard = true;
        this.currentTitle = this.card.title;
        // let textArea = this.el.nativeElement.getElementsByTagName('textarea')[0];
        // setTimeout(function() {
        //   textArea.focus();
        // }, 0);
    };
    TaskComponent.prototype.test = function () {
        console.log("test");
    };
    TaskComponent.prototype.test2 = function () {
        console.log("test2");
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], TaskComponent.prototype, "card", void 0);
    TaskComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-task',
            template: __webpack_require__("../../../../../src/app/homepage/event/dashboard/task/task.component.html"),
            styles: [__webpack_require__("../../../../../src/app/homepage/event/dashboard/task/task.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _a || Object])
    ], TaskComponent);
    return TaskComponent;
    var _a;
}());

//# sourceMappingURL=task.component.js.map

/***/ }),

/***/ "../../../../../src/app/homepage/event/event.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"well\">\n    <!-- Event name, startdate, enddate, (color), gearlist -->\n    <div>\n      <label for=\"eventName\">Event</label>\n      <input class=\"form-control\" type=\"text\">\n      <br>\n      <label for=\"startDate\">startDate</label>\n      <input class=\"form-control\" type=\"text\">\n      <br>\n      <label for=\"endDate\">endDate</label>\n      <input class=\"form-control\" type=\"text\">\n      <br>\n      <label for=\"color\">Color</label>\n      <input class=\"form-control\" type=\"text\">\n      <br>\n      <label for=\"gearList\">GearList</label>\n      <select class=\"form-control\" name=\"\" id=\"\">\n        <option value=\"\">Gealist</option>\n      </select>\n    </div>\n  </div>\n\n  <!-- tasks : Before, During, after -->\n  <div class=\"well\">\n    <h3>Tasks</h3>\n    <div>\n      <ul class=\"nav nav-tabs\">\n        <li><a routerLinkActive=\"active\" routerLink=\"[/before]\" >Before</a></li>\n        <li><a routerLinkActive=\"active\" routerLink=\"[/during]\">During</a></li>\n        <li><a routerLinkActive=\"active\" routerLink=\"[/after]\">After</a></li>\n      </ul>\n    </div>\n    <app-dashboard></app-dashboard>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/homepage/event/event.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "li {\n  cursor: pointer; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/homepage/event/event.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_events_service__ = __webpack_require__("../../../../../src/app/services/events.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EventComponent = /** @class */ (function () {
    function EventComponent(route, es) {
        this.route = route;
        this.es = es;
    }
    EventComponent.prototype.ngOnInit = function () {
        this.event = this.es.getEvent(this.route.snapshot.params['id']);
    };
    EventComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            console.log(_this.es.getEvent(_this.route.snapshot.params['id']));
        }, 1000);
    };
    EventComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-event',
            template: __webpack_require__("../../../../../src/app/homepage/event/event.component.html"),
            styles: [__webpack_require__("../../../../../src/app/homepage/event/event.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_events_service__["a" /* EventsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_events_service__["a" /* EventsService */]) === "function" && _b || Object])
    ], EventComponent);
    return EventComponent;
    var _a, _b;
}());

//# sourceMappingURL=event.component.js.map

/***/ }),

/***/ "../../../../../src/app/homepage/event/tasks-dashboard/column/column.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"column\">\n  <div class=\"column-header\">\n    <h4>column title</h4>\n    <input [style.display]=\"editingColumn ?'' : 'none' \" type=\"text\">\n  </div>\n  <ul class=\"card-list\">\n    <li>\n      <app-task></app-task>\n    </li>\n  </ul>\n  <div class=\"add-card\">\n    <span [style.display]=\"addingCard ? 'none' : ''\" >\n        Add a card...\n    </span>\n    <input [style.display]=\"addingCard ? '' : 'none' \" type=\"text\">\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/homepage/event/tasks-dashboard/column/column.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".column {\n  background-color: #E2E4E6;\n  border-radius: 3px;\n  width: 270px;\n  margin-left: 10px;\n  box-sizing: border-box;\n  display: inline-block;\n  vertical-align: top;\n  white-space: nowrap; }\n\n.column h4 {\n  color: #4d4d4d;\n  line-height: 100%;\n  margin-left: 10px;\n  margin-top: 8px;\n  font-weight: 700;\n  line-height: 18px;\n  font-size: 14px;\n  margin-bottom: 3px;\n  height: 18px;\n  width: 260px;\n  display: inline-block;\n  cursor: pointer;\n  cursor: hand; }\n\n.column-header {\n  cursor: pointer;\n  cursor: hand; }\n\n.column .column-header input {\n  margin-left: 5px;\n  margin-top: 5px;\n  font-weight: 700;\n  border: none;\n  line-height: 18px;\n  padding: 3px 5px 4px 5px;\n  font-size: 14px;\n  border-radius: 3px;\n  margin-bottom: -1px;\n  width: calc(100% - 10px); }\n\n.add-card {\n  color: #999;\n  font-size: 14px;\n  line-height: 18px;\n  margin-top: 0;\n  padding: 8px 10px;\n  cursor: pointer;\n  transition-property: all;\n  transition-duration: 150ms;\n  transition-timing-function: ease; }\n\n.add-card:hover {\n  text-decoration: underline;\n  color: #666;\n  background-color: #ccc;\n  border-bottom-left-radius: 3px;\n  border-bottom-right-radius: 3px; }\n\n.add-card input {\n  margin-left: -5px;\n  line-height: 18px;\n  font-size: 14px;\n  border: none;\n  border-radius: 3px;\n  padding: 5px 5px 4px 5px;\n  width: calc(100% - 10px); }\n\nul.card-list {\n  padding: 31px 11px 32px 9px;\n  margin: -26px 0 -31px 0; }\n\nul.card-list > li {\n  list-style: none; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/homepage/event/tasks-dashboard/column/column.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ColumnComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ColumnComponent = /** @class */ (function () {
    function ColumnComponent() {
    }
    ColumnComponent.prototype.ngOnInit = function () {
    };
    ColumnComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-column',
            template: __webpack_require__("../../../../../src/app/homepage/event/tasks-dashboard/column/column.component.html"),
            styles: [__webpack_require__("../../../../../src/app/homepage/event/tasks-dashboard/column/column.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ColumnComponent);
    return ColumnComponent;
}());

//# sourceMappingURL=column.component.js.map

/***/ }),

/***/ "../../../../../src/app/homepage/event/tasks-dashboard/tasks-dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- https://github.com/mrf28/a2gtm/blob/master/src/app/ -->\n\n<!-- <div class=\"board-title\">\n  <span>Board title</span>\n  <input \n    [style.display]=\"editingTilte ? '' : 'none' \"\n    class=\"form-control\" \n    type=\"text\">\n</div>\n\n<section id=\"main\">\n  <div>\n    <app-column></app-column>\n  </div>\n  <div class=\"add-column\">\n    <span>Add a list...</span>\n    <input [style.display]=\"addingColumn ? '' : 'none' \" type=\"text\">\n  </div>\n</section> -->"

/***/ }),

/***/ "../../../../../src/app/homepage/event/tasks-dashboard/tasks-dashboard.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#main {\n  min-width: 100%;\n  /*height: calc(100% - 90px);*/\n  overflow: hidden;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: rows;\n          flex-direction: rows; }\n\n.board-title {\n  margin-left: 18px;\n  margin-top: 10px;\n  margin-bottom: 15px; }\n\n.board-title span {\n  font-size: 18px;\n  font-weight: bold;\n  color: white;\n  cursor: pointer;\n  cursor: hand; }\n\n.board-title input {\n  margin: -3px -2px;\n  font-size: 18px;\n  font-weight: bold; }\n\n.add-column {\n  width: 280px;\n  height: 40px;\n  background-color: #0067A3;\n  border-radius: 3px;\n  width: 270px;\n  margin-left: 10px;\n  padding: 2px;\n  box-sizing: border-box;\n  display: inline-block;\n  vertical-align: top;\n  white-space: nowrap;\n  cursor: pointer;\n  cursor: hand; }\n\n.add-column span {\n  color: rgba(255, 255, 255, 0.7);\n  line-height: 40px;\n  vertical-align: middle;\n  padding: 7px;\n  font-size: 14px;\n  cursor: pointer;\n  cursor: hand; }\n\n.add-column input {\n  width: 100%;\n  height: 100%;\n  font-weight: 700;\n  border: none;\n  line-height: 18px;\n  padding: 3px 5px 4px 5px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/homepage/event/tasks-dashboard/tasks-dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TasksDashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TasksDashboardComponent = /** @class */ (function () {
    function TasksDashboardComponent() {
    }
    TasksDashboardComponent.prototype.ngOnInit = function () {
    };
    TasksDashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-tasks-dashboard',
            template: __webpack_require__("../../../../../src/app/homepage/event/tasks-dashboard/tasks-dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/homepage/event/tasks-dashboard/tasks-dashboard.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TasksDashboardComponent);
    return TasksDashboardComponent;
}());

//# sourceMappingURL=tasks-dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/homepage/gear-list/add-list/add-list.component.html":
/***/ (function(module, exports) {

module.exports = "<button class=\"btn btn-success\" (click)=\"openAddListDialog()\">Add new List</button>"

/***/ }),

/***/ "../../../../../src/app/homepage/gear-list/add-list/add-list.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/homepage/gear-list/add-list/add-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__gear_lists_service__ = __webpack_require__("../../../../../src/app/homepage/gear-list/gear-lists.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__addList_dialog_service__ = __webpack_require__("../../../../../src/app/homepage/gear-list/add-list/addList-dialog.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddListComponent = /** @class */ (function () {
    function AddListComponent(addList, listsService) {
        this.addList = addList;
        this.listsService = listsService;
    }
    AddListComponent.prototype.ngOnInit = function () {
    };
    AddListComponent.prototype.openAddListDialog = function () {
        var _this = this;
        this.addList.confirm('Create new list').subscribe(function (res) {
            console.log(res);
            if (res) {
                var newList = {
                    _id: '',
                    name: res,
                    gear: ''
                };
                _this.listsService.addList(newList);
            }
        });
    };
    AddListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["o" /* Component */])({
            selector: 'app-add-list',
            template: __webpack_require__("../../../../../src/app/homepage/gear-list/add-list/add-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/homepage/gear-list/add-list/add-list.component.scss")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__addList_dialog_service__["a" /* AddListDialogsService */]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__addList_dialog_service__["a" /* AddListDialogsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__addList_dialog_service__["a" /* AddListDialogsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__gear_lists_service__["a" /* GearListsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__gear_lists_service__["a" /* GearListsService */]) === "function" && _b || Object])
    ], AddListComponent);
    return AddListComponent;
    var _a, _b;
}());

//# sourceMappingURL=add-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/homepage/gear-list/add-list/addList-dialog.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddListDialogsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__addList_component__ = __webpack_require__("../../../../../src/app/homepage/gear-list/add-list/addList.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddListDialogsService = /** @class */ (function () {
    function AddListDialogsService(dialog) {
        this.dialog = dialog;
    }
    AddListDialogsService.prototype.confirm = function (title) {
        var dialogRef;
        dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_0__addList_component__["a" /* AddListDialog */]);
        dialogRef.componentInstance.title = title;
        dialogRef.componentInstance.input = '';
        return dialogRef.afterClosed();
    };
    AddListDialogsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MdDialog */]) === "function" && _a || Object])
    ], AddListDialogsService);
    return AddListDialogsService;
    var _a;
}());

//# sourceMappingURL=addList-dialog.service.js.map

/***/ }),

/***/ "../../../../../src/app/homepage/gear-list/add-list/addList.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddListDialog; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AddListDialog = /** @class */ (function () {
    function AddListDialog(dialogRef) {
        this.dialogRef = dialogRef;
    }
    AddListDialog = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["o" /* Component */])({
            selector: 'addList-dialog',
            template: "\n        <h3>{{ title }}</h3>\n        <br>\n        <Input class=\"form-control\" \n            #listName \n            placeholder=\"Enter name ...\" >\n        <br>\n        <div class=\"btn-container\">\n            <button class=\"btn btn-default\" type=\"button\"\n                (click)=\"dialogRef.close()\">Cancel</button>\n            <button class=\"btn btn-success\" type=\"button\"\n                (click)=\"dialogRef.close(listName.value)\"\n                >OK</button>\n        </div>\n    ",
            styles: ["\n        .btn-container {\n            display: flex;\n            justify-content: space-around;\n        }\n        .btn: {\n            font-size: 40px;\n        }\n    "]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_material__["e" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_material__["e" /* MdDialogRef */]) === "function" && _a || Object])
    ], AddListDialog);
    return AddListDialog;
    var _a;
}());

//# sourceMappingURL=addList.component.js.map

/***/ }),

/***/ "../../../../../src/app/homepage/gear-list/gear-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"well add\">\n      <select class=\"form-control\"  [(ngModel)]=\"list\" name=\"\" id=\"\" (change)=\"gearListChanged()\">\n          <option *ngFor=\"let list of gearLists\" value=\"{{ list }}\">{{ list.name }}</option>\n        </select>\n        <br>\n          <app-add-list></app-add-list>\n  </div>\n\n<div class=\"well\">\n    <div *ngIf=\"dataReady; else loading\" class=\"wrapper-container\">\n\n      <!-- Gear List-->\n      <!-- <input class=\"form-control\" type=\"text\" [(ngModel)]=\"filteredStatus\" placeholder=\"search for instrument...\" >  -->\n\n      <ng-template #loading>\n        <div class=\"text-center\">\n          <i class=\"fa fa-spin fa-spinner fa-5x\"></i>\n          <br>\n          Loading gear...\n        </div>\n      </ng-template> \n\n      <div *ngFor=\"let item of gearList | sorting: 'category' \" class=\"wrapper-card\">\n        <form>\n          <div class=\"wrapper-card-content\">\n            <div class=\"item\">\n              <label for=\"\">Name</label>\n              <input \n                class=\"formcontrol\"\n                [ngClass]=\"{'show': !isEditting, 'edit': isEditting}\"\n                type=\"text\" \n                placeholder=\"Insert gear name\" \n                [(ngModel)]=\"item.name\" \n                name=\"gearName\"\n                [disabled]=\"!isEditting\"\n              >\n            </div>\n            <div class=\"item\">\n              <label for=\"\">Owner</label>\n                <input \n                  class=\"formcontrol\"\n                  [ngClass]=\"{'show': !isEditting, 'edit': isEditting}\"\n                  type=\"text\" \n                  placeholder=\"Insert gear owner\" \n                  [(ngModel)]=\"item.owner\" \n                  name=\"gearOwner\"\n                  [disabled]=\"!isEditting\"\n                >\n            </div>\n            <div class=\"item\">\n              <label for=\"\">Category</label>\n              <input \n                class=\"formcontrol\"\n                [ngClass]=\"{'show': !isEditting, 'edit': isEditting}\"\n                type=\"text\" \n                placeholder=\"Insert gear category\" \n                [(ngModel)]=\"item.category\" \n                name=\"gearCategory\"\n                [disabled]=\"!isEditting\"\n              >\n            </div>\n            <div class=\"item\" >\n              <label *ngIf=\"!isEditting\" for=\"\">Done</label>\n              <label *ngIf=\"isEditting\" for=\"\">Edit or Delete</label>\n              <div *ngIf=\"!isEditting\" class=\"gearList-check-div\">\n                  <input \n                    type=\"checkbox\" \n                    class=\"gearList-check\" \n                    id=\"gearList-check\" \n                    name=\"done\" \n                    [(ngModel)]=\"item.done\">\n              </div>\n              \n              <div *ngIf=\"isEditting\" class=\"gearlist-btnGroup\">\n                <button class=\"btn btn-danger\" (click)=\"deletePressed(item)\" >Delete</button>\n                <button class=\"btn btn-success\" (click)=\"saveClicked(item)\">Save</button>\n              </div>\n            </div>\n          </div>\n        </form>\n      </div>\n      <div class=\"pull-right button-top\">\n        <button *ngIf=\"isEditting\" class=\"btn btn-primary\" (click)=\"saveAllClicked()\">Save All</button>  \n        <button \n            class=\"btn btn-primary\" \n            id=\"gearlist-editBtn\" \n            (click)=\"editClicked()\">{{ editButtonText }}</button>\n      </div>\n\n      <!-- Add new Item-->\n      <h3>Add new</h3>\n      <div class=\"wrapper-card\">\n        <form #f=\"ngForm\" (ngSubmit)=\"addClicked(f)\">\n            <div class=\"wrapper-card-content\">\n                <div class=\"item\">\n                  <label for=\"name\">Name</label>\n                  <input class=\"form-control\" type=\"text\" ngModel name=\"name\" required>\n                </div>\n                <div class=\"item\">\n                  <label for=\"owner\">Owner</label>\n                  <input class=\"form-control\" type=\"text\" ngModel name=\"owner\" required>\n                </div>\n                <div class=\"item\">\n                  <label for=\"cateory\">Category</label>\n                  <input class=\"form-control\" type=\"text\" ngModel name=\"category\" required>\n                </div>\n                <div class=\"item\">\n                  <label for=\"\">Done</label>\n                  <button class=\"btn btn-success\" type=\"submit\" [disabled]=\"!f.valid\" >Add</button>\n                </div>\n              </div>\n        </form>\n      </div>\n\n    </div>\n</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/homepage/gear-list/gear-list.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap; }\n\n.add {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n  .add * {\n    padding: 10px; }\n\n.button-top {\n  -ms-flex-item-align: end;\n      align-self: flex-end;\n  margin: 10px; }\n\n.btn {\n  width: 5em; }\n\n.show {\n  border: 0;\n  box-shadow: none;\n  background: transparent; }\n\n.edit {\n  border: default;\n  box-shadow: default;\n  background: default; }\n\n.wrapper-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -ms-flex-pack: distribute;\n      justify-content: space-around; }\n\n.wrapper-card {\n  background-color: #fff;\n  border-width: 1;\n  border-radius: 2;\n  border-color: #0d0d0d;\n  border-bottom-width: 0;\n  box-shadow: 2px 2px 2px #888888;\n  margin-left: 5px;\n  margin-right: 5px;\n  margin-top: 10px; }\n\n.wrapper-card-content {\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  margin: 10px; }\n\n.item {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  -ms-flex-line-pack: center;\n      align-content: center; }\n\n.gearlist-btnGroup {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -ms-flex-line-pack: center;\n      align-content: center; }\n\n.btn-group-check {\n  font-size: 40px; }\n\n.gearList-check {\n  cursor: pointer; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/homepage/gear-list/gear-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GearListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_gearList_service__ = __webpack_require__("../../../../../src/app/services/gearList.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_category__ = __webpack_require__("../../../../../src/app/models/category.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__gear_lists_service__ = __webpack_require__("../../../../../src/app/homepage/gear-list/gear-lists.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Gear = /** @class */ (function () {
    function Gear() {
    }
    return Gear;
}());
var GearListComponent = /** @class */ (function () {
    function GearListComponent(gearListService, lists) {
        this.gearListService = gearListService;
        this.lists = lists;
        this.addButtonText = 'Add';
        this.editButtonText = 'Edit';
        this.isAdding = false;
        this.isEditting = false;
        this.filteredStatus = '';
        this.dataReady = false;
        this.catList = new __WEBPACK_IMPORTED_MODULE_2__models_category__["a" /* Category */]().categoryList;
    }
    // Firebase initiazation
    GearListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.gearListService.getGearList().subscribe(function (list) {
            _this.gearList = list;
            _this.dataReady = true;
        });
        this.lists.getFullList().subscribe(function (lists) {
            _this.gearLists = lists;
            _this.list = _this.gearLists[0];
        });
    };
    // Gearlist changed
    GearListComponent.prototype.gearListChanged = function () {
        console.log(JSON.stringify(this.list));
    };
    // Add Button Clicked
    GearListComponent.prototype.addClicked = function (f) {
        var form = f.value;
        var newItem = {
            name: form.name,
            owner: form.owner,
            category: form.category,
            done: false
        };
        this.gearListService.addGear(newItem);
        f.reset();
    };
    // Edit Button Clicked
    GearListComponent.prototype.editClicked = function () {
        if (this.isEditting) {
            this.editButtonText = 'Edit';
        }
        else {
            this.editButtonText = 'Cancel';
        }
        this.isEditting = !this.isEditting;
    };
    // Save changes
    GearListComponent.prototype.saveClicked = function (itemToUpdate) {
        this.gearListService.updateGear(itemToUpdate);
        this.editClicked();
    };
    // Save all gear objects
    GearListComponent.prototype.saveAllClicked = function () {
        var list;
        for (var _i = 0, _a = this.gearList; _i < _a.length; _i++) {
            var gear = _a[_i];
            this.saveClicked(gear);
        }
        this.isEditting = false;
    };
    GearListComponent.prototype.deletePressed = function (itemToDelete) {
        this.gearListService.deleteGear(itemToDelete.$key);
    };
    GearListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-gear-list',
            template: __webpack_require__("../../../../../src/app/homepage/gear-list/gear-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/homepage/gear-list/gear-list.component.scss")],
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_gearList_service__["a" /* GearListService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_gearList_service__["a" /* GearListService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__gear_lists_service__["a" /* GearListsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__gear_lists_service__["a" /* GearListsService */]) === "function" && _b || Object])
    ], GearListComponent);
    return GearListComponent;
    var _a, _b;
}());

//# sourceMappingURL=gear-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/homepage/gear-list/gear-lists.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GearListsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_firebase_service__ = __webpack_require__("../../../../../src/app/services/firebase.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GearListsService = /** @class */ (function () {
    function GearListsService(firebase) {
        this.firebase = firebase;
        this.lists = this.firebase.af.list('/gearlists');
    }
    GearListsService.prototype.getFullList = function () {
        return this.lists;
    };
    GearListsService.prototype.updateList = function (id, list) {
        this.lists.update();
    };
    GearListsService.prototype.addList = function (list) {
        this.lists.push(list);
    };
    GearListsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__services_firebase_service__["a" /* FirebaseService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_firebase_service__["a" /* FirebaseService */]) === "function" && _a || Object])
    ], GearListsService);
    return GearListsService;
    var _a;
}());

//# sourceMappingURL=gear-lists.service.js.map

/***/ }),

/***/ "../../../../../src/app/homepage/homepage-header/homepage-header.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <a class=\"navbar-brand\" [routerLink]=\"['/']\">Fremtidens Musiker</a>\n    </div>\n    <ul class=\"nav navbar-nav\">\n      <li \n        routerLinkActive=\"active\"\n        [routerLinkActiveOptions]=\"{ exact: true }\">\n        <a [routerLink]=\"['']\">Home</a>\n      </li>\n      <li routerLinkActive=\"active\"><a [routerLink]=\"['/calendar']\">Calendar</a></li>\n      <li routerLinkActive=\"active\"><a [routerLink]=\"['/gearlist']\">Gear List</a></li>\n      <li routerLinkActive=\"active\"><a [routerLink]=\"['/bandinfo']\">Bandinfo</a></li>\n    </ul>\n    <ul class=\"nav navbar-nav navbar-right\">\n      <li><a>{{ userName }}</a></li>\n      <li><a [routerLink]=\"['']\">\n        <span class=\"glyphicon glyphicon-log-out\"></span> \n      Logout</a></li>\n    </ul>\n  </div>\n</nav>"

/***/ }),

/***/ "../../../../../src/app/homepage/homepage-header/homepage-header.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/homepage/homepage-header/homepage-header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomepageHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomepageHeaderComponent = /** @class */ (function () {
    function HomepageHeaderComponent() {
        this.userName = '';
    }
    HomepageHeaderComponent.prototype.ngOnInit = function () {
        //get userName here
    };
    HomepageHeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-homepage-header',
            template: __webpack_require__("../../../../../src/app/homepage/homepage-header/homepage-header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/homepage/homepage-header/homepage-header.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HomepageHeaderComponent);
    return HomepageHeaderComponent;
}());

//# sourceMappingURL=homepage-header.component.js.map

/***/ }),

/***/ "../../../../../src/app/homepage/homepage-ui/homepage-ui.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div *ngIf=\"dataAvailable\" class=\"pull-left well\" [ngStyle]=\"{ width: '50%' }\">\n    <h3>Upcoming events</h3>\n    <div *ngFor=\"let event of events\" class=\"wrapper-card\" (click)=\"goToEvent(event)\">\n      <div class=\"wrapper-card-content\">\n        <div class=\"item\">\n          <div class=\"color-box\"[ngStyle]=\"{'background-color' : event.color.primary }\"></div>\n        </div>\n        <div class=\"item\">\n          <label>Event name</label>\n          <label>{{ event.title }}</label>\n        </div>\n        <div class=\"item\">\n          <label>Date</label>\n          <label>{{ event.start | date: 'dd/MM/yyyy' }}</label>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/homepage/homepage-ui/homepage-ui.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/homepage/homepage-ui/homepage-ui.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomepageUiComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_events_service__ = __webpack_require__("../../../../../src/app/services/events.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomepageUiComponent = /** @class */ (function () {
    function HomepageUiComponent(es, router) {
        this.es = es;
        this.router = router;
        this.dataAvailable = false;
    }
    HomepageUiComponent.prototype.ngOnInit = function () {
        this.events = [];
        this.loadEvents();
    };
    HomepageUiComponent.prototype.loadEvents = function () {
        var _this = this;
        this.es.getEvents().subscribe(function (res) {
            _this.events = [];
            res.forEach(function (item) {
                var event = {
                    $key: item.$key,
                    id: item.id,
                    start: new Date(item.start),
                    end: new Date(item.end),
                    title: item.title,
                    color: item.color.colorHex
                };
                _this.events.push(event);
            });
            _this.dataAvailable = true;
        });
    };
    HomepageUiComponent.prototype.goToEvent = function (e) {
        this.router.navigate(['events', e.$key]);
    };
    HomepageUiComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-homepage-ui',
            template: __webpack_require__("../../../../../src/app/homepage/homepage-ui/homepage-ui.component.html"),
            styles: [__webpack_require__("../../../../../src/app/homepage/homepage-ui/homepage-ui.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_events_service__["a" /* EventsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_events_service__["a" /* EventsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object])
    ], HomepageUiComponent);
    return HomepageUiComponent;
    var _a, _b;
}());

//# sourceMappingURL=homepage-ui.component.js.map

/***/ }),

/***/ "../../../../../src/app/homepage/homepage.component.html":
/***/ (function(module, exports) {

module.exports = "<app-homepage-header></app-homepage-header>\n<router-outlet></router-outlet>\n\n<!-- <div>\n    <button class=\"btn btn-primary\" (click)=\"openDialog()\">Open Dialog</button>\n</div> -->\n\n<!-- ALERTS -->\n\n<!-- <div class=\"col-md-10 col-md-offset-1 text-center\">\n        <h1>Angular 2/4 Alerts</h1>\n        <button class=\"btn btn-success\" (click)=\"success('Success!!')\">Success</button>\n        <button class=\"btn btn-danger\" (click)=\"error('Error :(')\">Error</button>\n        <button class=\"btn btn-info\" (click)=\"info('Some info....')\">Info</button>\n        <button class=\"btn btn-warning\" (click)=\"warn('Warning: ...')\">Warn</button>\n        <button class=\"btn btn-default\" (click)=\"clear()\">Clear</button>\n</div>\n<div class=\"jumbotron\">\n    <div class=\"container\">\n        <div class=\"col-sm-8 col-sm-offset-2\">\n            <alert></alert>\n            <router-outlet></router-outlet>\n        </div>\n    </div>\n</div> -->\n\n<!-- <button class=\"btn btn-primary\" (click)=\"test()\">Toggle</button>\n<div [@myAnimation]=\"active\">\n    <h1>I'm triggered</h1>\n</div> -->"

/***/ }),

/***/ "../../../../../src/app/homepage/homepage.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/homepage/homepage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomepageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_alert_service__ = __webpack_require__("../../../../../src/app/services/alert.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_animations__ = __webpack_require__("../../../animations/@angular/animations.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomepageComponent = /** @class */ (function () {
    function HomepageComponent(alertService) {
        this.alertService = alertService;
        this.active = 'inactive';
    }
    HomepageComponent.prototype.ngOnInit = function () {
        //Username here
        this.success("success");
    };
    HomepageComponent.prototype.success = function (message) {
        var _this = this;
        this.alertService.success(message);
        setTimeout(function () {
            _this.clear();
        }, 2000);
    };
    HomepageComponent.prototype.error = function (message) {
        this.alertService.error(message);
    };
    HomepageComponent.prototype.info = function (message) {
        this.alertService.info(message);
    };
    HomepageComponent.prototype.warn = function (message) {
        this.alertService.warn(message);
    };
    HomepageComponent.prototype.clear = function () {
        this.alertService.clear();
    };
    HomepageComponent.prototype.test = function () {
        this.active = (this.active === 'inactive' ? 'active' : 'inactive');
    };
    HomepageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-homepage',
            template: __webpack_require__("../../../../../src/app/homepage/homepage.component.html"),
            styles: [__webpack_require__("../../../../../src/app/homepage/homepage.component.scss")],
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["j" /* trigger */])('myAnimation', [
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["g" /* state */])('inactive', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* style */])({
                        opacity: 0
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["g" /* state */])('active', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* style */])({
                        opacity: 1
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* transition */])('inactive => active', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["e" /* animate */])('500ms ease-in')),
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* transition */])('active => inactive', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["e" /* animate */])('500ms ease-out'))
                ])
            ]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_alert_service__["a" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_alert_service__["a" /* AlertService */]) === "function" && _a || Object])
    ], HomepageComponent);
    return HomepageComponent;
    var _a;
}());

//# sourceMappingURL=homepage.component.js.map

/***/ }),

/***/ "../../../../../src/app/models/alert.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Alert */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertType; });
var Alert = /** @class */ (function () {
    function Alert() {
    }
    return Alert;
}());

var AlertType;
(function (AlertType) {
    AlertType[AlertType["Success"] = 0] = "Success";
    AlertType[AlertType["Error"] = 1] = "Error";
    AlertType[AlertType["Info"] = 2] = "Info";
    AlertType[AlertType["Warning"] = 3] = "Warning";
})(AlertType || (AlertType = {}));
//# sourceMappingURL=alert.js.map

/***/ }),

/***/ "../../../../../src/app/models/category.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Category; });
var Category = /** @class */ (function () {
    function Category() {
        this.categoryList = ["Bas", "Bas Guitar", "Guitar", "Drums"];
    }
    return Category;
}());

//# sourceMappingURL=category.js.map

/***/ }),

/***/ "../../../../../src/app/models/colors.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Colors; });
var Colors = /** @class */ (function () {
    function Colors() {
        this.red = {
            primary: '#ad2121',
            secondary: '#FAE3E3'
        };
        this.blue = {
            primary: '#1e90ff',
            secondary: '#D1E8FF'
        };
        this.yellow = {
            primary: '#e3bc08',
            secondary: '#FDF1BA'
        };
        this.colors = [
            { value: "Red", colorHex: this.red },
            { value: "Blue", colorHex: this.blue },
            { value: "Yellow", colorHex: this.yellow }
        ];
    }
    Colors.prototype.getColorFromValue = function (value) {
        switch (value) {
            case ('Red'): {
                return this.red;
            }
            case ('Blue'): {
                return this.blue;
            }
            case ('Yellow'): {
                return this.yellow;
            }
            default:
                break;
        }
    };
    Colors.prototype.getColorFromObject = function (_a) {
        var primary = _a.primary, secondary = _a.secondary;
        if (primary === this.red.primary && secondary === this.red.secondary) {
            return this.colors[0];
        }
        if (primary === this.blue.primary && secondary === this.blue.secondary) {
            return this.colors[1];
        }
        if (primary === this.yellow.primary && secondary === this.yellow.secondary) {
            return this.colors[2];
        }
    };
    return Colors;
}());

//# sourceMappingURL=colors.js.map

/***/ }),

/***/ "../../../../../src/app/pipes/filter-array-pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterArrayPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

// # Filter Array of Objects
var FilterArrayPipe = /** @class */ (function () {
    function FilterArrayPipe() {
    }
    // transform(value : any, filterString: string, propName: string) {
    //   if (value === undefined) {
    //     return value;
    //   } for (let item of value){
    //     const resultsArray = []
    //     if (item[propName] === filterString){
    //       resultsArray.push(item)
    //     }
    //     return resultsArray
    //   }
    // }
    FilterArrayPipe.prototype.transform = function (value) {
        for (var _i = 0, value_1 = value; _i < value_1.length; _i++) {
            var i = value_1[_i];
            console.log(i);
            return i;
        }
    };
    FilterArrayPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Pipe */])({ name: 'filter', pure: false })
    ], FilterArrayPipe);
    return FilterArrayPipe;
}());

//# sourceMappingURL=filter-array-pipe.js.map

/***/ }),

/***/ "../../../../../src/app/pipes/sorting-pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SortingPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SortingPipe = /** @class */ (function () {
    function SortingPipe() {
        this.sortedList = [];
        this.categoryList = ["Bas", "Bas Guitar", "Guitar", "Drums"];
        this.test = [];
    }
    SortingPipe.prototype.transform = function (value, type) {
        this.test[0] = value[0][type];
        // for(let i of value){
        //     if(this.test !== undefined){
        //         if( this.test.find(i[type]) == -1 ){
        // //             this.test.push(i)
        //         }
        //         console.log(i[type])
        //     }
        //     console.log(this.test)
        // }
        // this.categoryList.forEach(cat => {
        //     for(let item of value){
        //         if( item[type] === cat ) {
        //             this.sortedList.push(item)
        //         }
        //         // console.log(item[type])
        //         // go through list and find lowest value
        //     }
        // });
        console.log(this.sortedList);
        return value;
    };
    SortingPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Pipe */])({
            name: 'sorting'
        })
    ], SortingPipe);
    return SortingPipe;
}());

//# sourceMappingURL=sorting-pipe.js.map

/***/ }),

/***/ "../../../../../src/app/services/alert.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_alert__ = __webpack_require__("../../../../../src/app/models/alert.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__alert_service__ = __webpack_require__("../../../../../src/app/services/alert.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AlertComponent = /** @class */ (function () {
    function AlertComponent(alertService) {
        this.alertService = alertService;
        this.alerts = [];
    }
    AlertComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('OnInit in component');
        this.alertService.getAlert().subscribe(function (alert) {
            if (!alert) {
                // clear alerts when an empty alert is received
                _this.alerts = [];
                return;
            }
            // add alert to array
            _this.alerts.push(alert);
        });
    };
    AlertComponent.prototype.removeAlert = function (alert) {
        this.alerts = this.alerts.filter(function (x) { return x !== alert; });
    };
    AlertComponent.prototype.cssClass = function (alert) {
        if (!alert) {
            return;
        }
        // return css class based on alert type
        switch (alert.type) {
            case __WEBPACK_IMPORTED_MODULE_1__models_alert__["a" /* AlertType */].Success:
                return 'alert alert-success';
            case __WEBPACK_IMPORTED_MODULE_1__models_alert__["a" /* AlertType */].Error:
                return 'alert alert-danger';
            case __WEBPACK_IMPORTED_MODULE_1__models_alert__["a" /* AlertType */].Info:
                return 'alert alert-info';
            case __WEBPACK_IMPORTED_MODULE_1__models_alert__["a" /* AlertType */].Warning:
                return 'alert alert-warning';
        }
    };
    AlertComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'alert',
            template: "\n       <div \n           *ngFor=\"let alert of alerts\" \n           class=\"{{ cssClass(alert) }} test alert-dismissable\">\n               {{alert.message}}\n           <a class=\"close\" (click)=\"removeAlert(alert)\">&times;</a>\n        </div>\n   ",
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__alert_service__["a" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__alert_service__["a" /* AlertService */]) === "function" && _a || Object])
    ], AlertComponent);
    return AlertComponent;
    var _a;
}());

// styles: [`
// @keyframes test {
// 0%   {opacity: 1;}
// 25%  {opacity: 0,75;}
// 50%  {opacity: 0,5;}
// 100% {opacity: 0.2;}
// }
// .test {
// animation-name: test;
// animation-duration: 2.1s;
// animation-iteration-count: 1;
// }
// `], 
//# sourceMappingURL=alert.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/alert.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_alert__ = __webpack_require__("../../../../../src/app/models/alert.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AlertService = /** @class */ (function () {
    function AlertService(router) {
        var _this = this;
        this.router = router;
        this.subject = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.keepAfterRouteChange = false;
        console.log('constructor ');
        // clear alert messages on route change unless 'keepAfterRouteChange' flag is true
        router.events.subscribe(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* NavigationStart */]) {
                if (_this.keepAfterRouteChange) {
                    // only keep for a single route change
                    _this.keepAfterRouteChange = false;
                }
                else {
                    // clear alert messages
                    _this.clear();
                }
            }
        });
    }
    AlertService.prototype.getAlert = function () {
        return this.subject.asObservable();
    };
    AlertService.prototype.success = function (message, keepAfterRouteChange) {
        if (keepAfterRouteChange === void 0) { keepAfterRouteChange = false; }
        this.alert(__WEBPACK_IMPORTED_MODULE_3__models_alert__["a" /* AlertType */].Success, message, keepAfterRouteChange);
    };
    AlertService.prototype.error = function (message, keepAfterRouteChange) {
        if (keepAfterRouteChange === void 0) { keepAfterRouteChange = false; }
        this.alert(__WEBPACK_IMPORTED_MODULE_3__models_alert__["a" /* AlertType */].Error, message, keepAfterRouteChange);
    };
    AlertService.prototype.info = function (message, keepAfterRouteChange) {
        if (keepAfterRouteChange === void 0) { keepAfterRouteChange = false; }
        this.alert(__WEBPACK_IMPORTED_MODULE_3__models_alert__["a" /* AlertType */].Info, message, keepAfterRouteChange);
    };
    AlertService.prototype.warn = function (message, keepAfterRouteChange) {
        if (keepAfterRouteChange === void 0) { keepAfterRouteChange = false; }
        this.alert(__WEBPACK_IMPORTED_MODULE_3__models_alert__["a" /* AlertType */].Warning, message, keepAfterRouteChange);
    };
    AlertService.prototype.alert = function (type, message, keepAfterRouteChange) {
        if (keepAfterRouteChange === void 0) { keepAfterRouteChange = false; }
        this.keepAfterRouteChange = keepAfterRouteChange;
        this.subject.next({ type: type, message: message });
    };
    AlertService.prototype.clear = function () {
        // clear alerts
        this.subject.next();
    };
    AlertService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object])
    ], AlertService);
    return AlertService;
    var _a;
}());

//# sourceMappingURL=alert.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/bandinfo.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BandinfoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__firebase_service__ = __webpack_require__("../../../../../src/app/services/firebase.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BandinfoService = /** @class */ (function () {
    function BandinfoService(firebaseService) {
        this.firebaseService = firebaseService;
        this.bandInfo = this.firebaseService.af.object('/bandinfo');
    }
    BandinfoService.prototype.getBandinfo = function () {
        return this.bandInfo;
    };
    BandinfoService.prototype.updateBandinfo = function (bandinfo) {
        return this.bandInfo.update(bandinfo);
    };
    BandinfoService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__firebase_service__["a" /* FirebaseService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__firebase_service__["a" /* FirebaseService */]) === "function" && _a || Object])
    ], BandinfoService);
    return BandinfoService;
    var _a;
}());

//# sourceMappingURL=bandinfo.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/bandmember.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BandmemberService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__firebase_service__ = __webpack_require__("../../../../../src/app/services/firebase.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BandmemberService = /** @class */ (function () {
    function BandmemberService(firebaseService) {
        this.firebaseService = firebaseService;
        this.bandMembers = this.firebaseService.af.list('/bandmembers');
    }
    BandmemberService.prototype.getBandMembers = function () {
        return this.bandMembers;
    };
    BandmemberService.prototype.addBandMember = function (member) {
        return this.bandMembers.push(member);
    };
    BandmemberService.prototype.deleteBandMember = function (member) {
        return this.bandMembers.remove(member.$key);
    };
    BandmemberService.prototype.updateBandMember = function (memberKey, member) {
        return this.bandMembers.update(member.$key, member);
    };
    BandmemberService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__firebase_service__["a" /* FirebaseService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__firebase_service__["a" /* FirebaseService */]) === "function" && _a || Object])
    ], BandmemberService);
    return BandmemberService;
    var _a;
}());

//# sourceMappingURL=bandmember.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/confirm-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmDialog; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ConfirmDialog = /** @class */ (function () {
    function ConfirmDialog(dialogRef) {
        this.dialogRef = dialogRef;
    }
    ConfirmDialog = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["o" /* Component */])({
            selector: 'confirm-dialog',
            template: "\n        <h5>{{ title }}</h5>\n        <p>{{ message }}</p>\n        <div class=\"btn-container\">\n            <button class=\"btn btn-danger\" type=\"button\"\n                (click)=\"dialogRef.close(true)\">OK</button>\n            <button class=\"btn btn-default\" type=\"button\"\n                (click)=\"dialogRef.close()\">Cancel</button>\n        </div>\n    ",
            styles: ["\n        .btn-container {\n            display: flex;\n            justify-content: space-around;\n        }\n        .btn: {\n            font-size: 40px;\n        }\n    "]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_material__["e" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_material__["e" /* MdDialogRef */]) === "function" && _a || Object])
    ], ConfirmDialog);
    return ConfirmDialog;
    var _a;
}());

//# sourceMappingURL=confirm-dialog.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/confirm-dialog.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__confirm_dialog_component__ = __webpack_require__("../../../../../src/app/services/confirm-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DialogsService = /** @class */ (function () {
    function DialogsService(dialog) {
        this.dialog = dialog;
    }
    DialogsService.prototype.confirm = function (title, message) {
        var dialogRef;
        dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_0__confirm_dialog_component__["a" /* ConfirmDialog */]);
        dialogRef.componentInstance.title = title;
        dialogRef.componentInstance.message = message;
        return dialogRef.afterClosed();
    };
    DialogsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MdDialog */]) === "function" && _a || Object])
    ], DialogsService);
    return DialogsService;
    var _a;
}());

//# sourceMappingURL=confirm-dialog.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/edit-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditDialog; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__events_service__ = __webpack_require__("../../../../../src/app/services/events.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_colors__ = __webpack_require__("../../../../../src/app/models/colors.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditDialog = /** @class */ (function () {
    function EditDialog(dialogRef, es) {
        this.dialogRef = dialogRef;
        this.es = es;
        this.colorUpdated = false;
        this.colorArray = new __WEBPACK_IMPORTED_MODULE_3__models_colors__["a" /* Colors */];
        this.colors = this.colorArray.colors;
    }
    EditDialog.prototype.ngOnInit = function () {
        console.log(this.color);
    };
    EditDialog.prototype.submit = function (f) {
        console.log(f);
        console.log(f.value);
        this.es.updateEvent(this.$key, f.value);
    };
    EditDialog.prototype.updated = function (updated) {
        console.log(updated);
        if (this.color === this.color) {
            this.colorUpdated = true;
        }
    };
    EditDialog = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["o" /* Component */])({
            selector: 'edit-dialog',
            template: "\n    <h3><strong>Edit:</strong> {{ title }}</h3>\n    <hr>\n    <form #f=\"ngForm\" (ngSubmit)=\"submit(f)\">\n        <div class=\"form-group\">\n            <label for=\"eventName\">Event</label>\n            <input class=\"form-control\" type=\"text\" [(ngModel)]=\"title\" name=\"title\" required=\"\">\n        </div>\n        <div class=\"form-group\">\n                <label for=\"eventStartDate\">Start Date</label>\n                <div class=\"datepicker-container\">\n                    <input \n                        class=\"form-control\" \n                        mdInput [mdDatepicker]=\"startPicker\" \n                        [ngModel]=\"startDate\" \n                        name=\"startDate\" \n                        required\n                        (ngModelChange)=\"startDate = $event\">\n                    <md-datepicker-toggle mdSuffix [for]=\"startPicker\"></md-datepicker-toggle>\n                    <md-datepicker #startPicker></md-datepicker>\n                </div>\n        </div>\n        <div class=\"form-group\">\n            <label for=\"eventEndDate\">End Date</label>\n            <div class=\"datepicker-container\">\n                <input \n                    class=\"form-control\" \n                    mdInput [mdDatepicker]=\"endPicker\" \n                    [ngModel]=\"endDate\" \n                    name=\"endDate\" \n                    required\n                    (ngModelChange)=\"endDate = $event\">\n                <md-datepicker-toggle mdSuffix [for]=\"endPicker\"></md-datepicker-toggle>\n                <md-datepicker #endPicker></md-datepicker>\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <label for=\"eventEndDate\">Color</label>\n            <md-input-container class=\"color-container\" style=\"margin-right: 10px;\">\n            <div class=\"color-box\" [ngStyle]=\"{'background-color' : color?.colorHex.primary }\"></div>\n            <md-select #select=\"mdSelect\" [(ngModel)]=\"color\" name=\"color\" required (click)=\"updated($event)\">\n                <md-option \n                    *ngIf=\"!colorUpdated\"\n                    class=\"color-box-container\"\n                    [value]=\"color\">{{ color.value }}\n                </md-option>\n                <md-option \n                    *ngFor=\"let c of colors\" \n                    class=\"color-box-container\" \n                    [value]=\"c\">\n                    <span class=\"color-box\" \n                        [ngStyle]=\"{'background-color' : c.colorHex.primary }\"\n                    ></span> {{ c.value }}</md-option>\n            </md-select>\n            </md-input-container>\n        </div>\n        <div class=\"btn-container\">\n            <button class=\"btn btn-success\" type=\"submit\"\n                (click)=\"dialogRef.close(true)\">OK</button>\n            <button class=\"btn btn-default\" type=\"button\"\n                (click)=\"dialogRef.close()\">Cancel</button>\n        </div>\n    <form>\n    ",
            styles: ["\n        .datepicker-container {\n            display: flex;\n            flex-direction: row;\n        }\n        .color-box-container{\n            display: flex;\n            justify-content: flex-start;\n            align-items: center;\n        }\n        .color-box{\n            float: left;\n            width: 20px;\n            height: 20px;\n            border: 1px solid rgba(0, 0, 0, .2);\n            margin: 5px;\n        }\n        .btn-container {\n            display: flex;\n            justify-content: space-around;\n        }\n        .btn: {\n            font-size: 40px;\n        }\n    "]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MdDialogRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__events_service__["a" /* EventsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__events_service__["a" /* EventsService */]) === "function" && _b || Object])
    ], EditDialog);
    return EditDialog;
    var _a, _b;
}());

//# sourceMappingURL=edit-dialog.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/edit-dialog.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditDialogsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_colors__ = __webpack_require__("../../../../../src/app/models/colors.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__edit_dialog_component__ = __webpack_require__("../../../../../src/app/services/edit-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditDialogsService = /** @class */ (function () {
    function EditDialogsService(dialog) {
        this.dialog = dialog;
        this.colors = new __WEBPACK_IMPORTED_MODULE_0__models_colors__["a" /* Colors */];
    }
    EditDialogsService.prototype.edit = function (event) {
        var dialogRef;
        dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_1__edit_dialog_component__["a" /* EditDialog */], {
            width: '40%'
        });
        dialogRef.componentInstance.event = event;
        dialogRef.componentInstance.$key = event.$key;
        dialogRef.componentInstance.title = event.title;
        dialogRef.componentInstance.startDate = event.start;
        dialogRef.componentInstance.endDate = event.end;
        var colorObj = this.colors.getColorFromObject(event.color);
        console.log(colorObj);
        dialogRef.componentInstance.color = colorObj;
        return dialogRef.afterClosed();
    };
    EditDialogsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MdDialog */]) === "function" && _a || Object])
    ], EditDialogsService);
    return EditDialogsService;
    var _a;
}());

//# sourceMappingURL=edit-dialog.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/events.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__firebase_service__ = __webpack_require__("../../../../../src/app/services/firebase.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EventsService = /** @class */ (function () {
    function EventsService(firebaseService, http) {
        this.firebaseService = firebaseService;
        this.http = http;
        this.refresh = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["Subject"]();
        this.events = this.firebaseService.af.list('/events');
    }
    EventsService.prototype.getEvents = function () {
        return this.events;
    };
    EventsService.prototype.getEvent = function (eventKey) {
        var event;
        console.log(typeof (eventKey));
        this.events.forEach(function (item, index) {
            item.map(function (ev) {
                if (eventKey == ev.$key) {
                    event = ev;
                    return event;
                }
            });
        });
        console.log(event);
        return event;
    };
    EventsService.prototype.addEvent = function (event) {
        return this.events.push(event);
    };
    EventsService.prototype.deleteEvent = function (event) {
        return this.events.remove(event.$key);
    };
    EventsService.prototype.updateEvent = function (eventKey, event) {
        return this.events.update(eventKey, event);
    };
    EventsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__firebase_service__["a" /* FirebaseService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__firebase_service__["a" /* FirebaseService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]) === "function" && _b || Object])
    ], EventsService);
    return EventsService;
    var _a, _b;
}());

//# sourceMappingURL=events.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/firebase.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirebaseService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase_app__ = __webpack_require__("../../../../firebase/app.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase_app__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var FirebaseService = /** @class */ (function () {
    //msgVal: string = ''
    function FirebaseService(afAuth, af, http) {
        this.afAuth = afAuth;
        this.af = af;
        this.http = http;
        this.user = this.afAuth.authState;
        // this.gearList = this.af.list('gear')
        this.gearList = af.list('gear', {
            query: {
                limitToLast: 10,
                orderByKey: true
            }
        });
    }
    /* User login */
    FirebaseService.prototype.login = function (email, pass) {
        return __awaiter(this, void 0, void 0, function () {
            var acceptedUser;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: 
                    // Anonymous signIn
                    // this.afAuth.auth.signInAnonymously()
                    // Real User
                    // return this.afAuth.auth.signInWithEmailAndPassword(email, pass)
                    //     .then(async value => {
                    //         console.log(value)
                    //         await firebase.auth().onAuthStateChanged( (user) => {
                    //                 if (user) {
                    //                     console.log(user)
                    //                     acceptedUser = user
                    //                     // return acceptedUser
                    //                 } else {
                    //                     console.log("logged out")
                    //                     // return null
                    //                 }
                    //             });
                    //     }).catch( error => {
                    //         console.log(error) 
                    //         // return null
                    //     })
                    return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_4_firebase_app__["auth"]().onAuthStateChanged(function (user) {
                            if (user) {
                                console.log(user);
                                acceptedUser = user;
                            }
                            else {
                                console.log("logged out");
                            }
                        })];
                    case 1:
                        // Anonymous signIn
                        // this.afAuth.auth.signInAnonymously()
                        // Real User
                        // return this.afAuth.auth.signInWithEmailAndPassword(email, pass)
                        //     .then(async value => {
                        //         console.log(value)
                        //         await firebase.auth().onAuthStateChanged( (user) => {
                        //                 if (user) {
                        //                     console.log(user)
                        //                     acceptedUser = user
                        //                     // return acceptedUser
                        //                 } else {
                        //                     console.log("logged out")
                        //                     // return null
                        //                 }
                        //             });
                        //     }).catch( error => {
                        //         console.log(error) 
                        //         // return null
                        //     })
                        _a.sent();
                        this.userObject = acceptedUser;
                        return [2 /*return*/, acceptedUser];
                }
            });
        });
    };
    /* User Logout */
    FirebaseService.prototype.logout = function () {
        this.afAuth.auth.signOut();
    };
    /* HTTP REQUESTS */
    //Get All
    FirebaseService.prototype.getAllGear = function () {
        console.log(this.gearList);
        return this.gearList;
        // forEach(res => console.log(res))
        // .map( (res) => console.log(res) )
    };
    //Get One
    //Update
    FirebaseService.prototype.postGear = function () {
    };
    //Delete
    //Get all events
    FirebaseService.prototype.getAllEvents = function () {
        return this.eventsList;
    };
    FirebaseService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */]) === "function" && _c || Object])
    ], FirebaseService);
    return FirebaseService;
    var _a, _b, _c;
}());

//# sourceMappingURL=firebase.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/gearList.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GearListService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__firebase_service__ = __webpack_require__("../../../../../src/app/services/firebase.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GearListService = /** @class */ (function () {
    function GearListService(firebaseService) {
        this.firebaseService = firebaseService;
        this.gearList = this.firebaseService.af.list('/gear');
    }
    GearListService.prototype.getGearList = function () {
        return this.gearList;
    };
    GearListService.prototype.addGear = function (gear) {
        return this.gearList.push(gear);
    };
    GearListService.prototype.deleteGear = function (gearKey) {
        return this.gearList.remove(gearKey);
    };
    GearListService.prototype.updateGear = function (gear) {
        return this.gearList.update(gear.$key, gear);
    };
    GearListService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__firebase_service__["a" /* FirebaseService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__firebase_service__["a" /* FirebaseService */]) === "function" && _a || Object])
    ], GearListService);
    return GearListService;
    var _a;
}());

//# sourceMappingURL=gearList.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/clickOutside.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClickOutsideDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/*
 * https://christianliebel.com/2016/05/angular-2-a-simple-click-outside-directive/
 *
*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ClickOutsideDirective = /** @class */ (function () {
    function ClickOutsideDirective(_elementRef) {
        this._elementRef = _elementRef;
        this.clickOutside = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    ClickOutsideDirective.prototype.onClick = function (event, targetElement) {
        if (!targetElement) {
            return;
        }
        var clickedInside = this._elementRef.nativeElement.contains(targetElement);
        if (!clickedInside) {
            this.clickOutside.emit(event);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
        __metadata("design:type", Object)
    ], ClickOutsideDirective.prototype, "clickOutside", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */])('document:click', ['$event', '$event.target']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], ClickOutsideDirective.prototype, "onClick", null);
    ClickOutsideDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Directive */])({
            selector: '[clickOutside]'
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _a || Object])
    ], ClickOutsideDirective);
    return ClickOutsideDirective;
    var _a;
}());

//# sourceMappingURL=clickOutside.directive.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map