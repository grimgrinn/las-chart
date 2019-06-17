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

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-input-las></app-input-las>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/chart/chart.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/chart/chart.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"chart-container\">\n    <div id=\"chart\"></div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/input-las/input-las.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/input-las/input-las.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<input type=\"file\" (change)=\"onFileChange($event)\">\n<app-chart [lasData]=\"lasData\" ></app-chart>"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'las-chart';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _input_las_input_las_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./input-las/input-las.component */ "./src/app/input-las/input-las.component.ts");
/* harmony import */ var _chart_chart_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./chart/chart.component */ "./src/app/chart/chart.component.ts");







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _input_las_input_las_component__WEBPACK_IMPORTED_MODULE_5__["InputLASComponent"],
                _chart_chart_component__WEBPACK_IMPORTED_MODULE_6__["ChartComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/chart/chart.component.css":
/*!*******************************************!*\
  !*** ./src/app/chart/chart.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".chart-container {\r\n    height: 650px;\r\n    overflow-y: scroll;\r\n    width: 500px;\r\n    float: left;\r\n}\r\n\r\n#chart {\r\n    height: 5000px;\r\n    width: 450px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhcnQvY2hhcnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvY2hhcnQvY2hhcnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jaGFydC1jb250YWluZXIge1xyXG4gICAgaGVpZ2h0OiA2NTBweDtcclxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICAgIHdpZHRoOiA1MDBweDtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG59XHJcblxyXG4jY2hhcnQge1xyXG4gICAgaGVpZ2h0OiA1MDAwcHg7XHJcbiAgICB3aWR0aDogNDUwcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/chart/chart.component.ts":
/*!******************************************!*\
  !*** ./src/app/chart/chart.component.ts ***!
  \******************************************/
/*! exports provided: ChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartComponent", function() { return ChartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var plotly_js_dist_plotly_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! plotly.js/dist/plotly.js */ "./node_modules/plotly.js/dist/plotly.js");
/* harmony import */ var plotly_js_dist_plotly_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(plotly_js_dist_plotly_js__WEBPACK_IMPORTED_MODULE_2__);



var ChartComponent = /** @class */ (function () {
    function ChartComponent() {
    }
    ChartComponent.prototype.ngOnInit = function () { };
    ChartComponent.prototype.ngOnChanges = function () {
        if (Object.keys(this.lasData).length) {
            this.buildChart();
        }
    };
    ChartComponent.prototype.buildChart = function () {
        console.log('build chart');
        console.log(this.lasData);
        var curves = this.lasData;
        var k = Object.keys(curves);
        var depths = curves[k[0]];
        var mnemonica1 = curves[k[1]];
        var mnemonica2 = curves[k[2]];
        var mnemonicaName = k[1];
        var minValMnemonica1 = Math.min.apply(Math, mnemonica1), maxValMnemonica1 = Math.max.apply(Math, mnemonica1), minValMnemonica2 = Math.min.apply(Math, mnemonica2), maxValMnemonica2 = Math.max.apply(Math, mnemonica2), minValDepth = Math.min.apply(Math, depths), maxValDepth = Math.max.apply(Math, depths);
        var trace1 = {
            x: mnemonica1,
            y: depths,
            name: k[1],
            mode: 'lines',
            fillcolor: '#b30000',
            line: {
                color: '#23af14'
            }
        };
        var trace2 = {
            x: mnemonica2,
            y: depths,
            name: k[2],
            mode: 'lines',
            fillcolor: '#b30000',
            line: {
                color: '#4842b5'
            }
        };
        var layout = {
            title: 'LAS Graph',
            autosize: true,
            xaxis: {
                range: [minValMnemonica1, maxValMnemonica2],
                showgrid: true,
                showline: true,
                mirror: 'ticks',
                gridcolor: '#bdbdbd',
                gridwidth: 1,
                side: 'top'
            },
            yaxis: { range: [maxValDepth, minValDepth],
                text: 'Depth',
                showgrid: true,
                showline: true,
                mirror: 'ticks',
                gridcolor: '#bdbdbd',
                gridwidth: 1
            }
        };
        var data = [trace1, trace2];
        plotly_js_dist_plotly_js__WEBPACK_IMPORTED_MODULE_2__["newPlot"]('chart', data, layout);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ChartComponent.prototype, "lasData", void 0);
    ChartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-chart',
            template: __webpack_require__(/*! raw-loader!./chart.component.html */ "./node_modules/raw-loader/index.js!./src/app/chart/chart.component.html"),
            styles: [__webpack_require__(/*! ./chart.component.css */ "./src/app/chart/chart.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ChartComponent);
    return ChartComponent;
}());



/***/ }),

/***/ "./src/app/input-las/input-las.component.css":
/*!***************************************************!*\
  !*** ./src/app/input-las/input-las.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2lucHV0LWxhcy9pbnB1dC1sYXMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/input-las/input-las.component.ts":
/*!**************************************************!*\
  !*** ./src/app/input-las/input-las.component.ts ***!
  \**************************************************/
/*! exports provided: InputLASComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputLASComponent", function() { return InputLASComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var InputLASComponent = /** @class */ (function () {
    function InputLASComponent() {
        this.lasData = [];
    }
    InputLASComponent.prototype.ngOnInit = function () { };
    InputLASComponent.prototype.onFileChange = function (event) {
        var _this = this;
        var reader = new FileReader();
        if (event.target.files && event.target.files.length > 0) {
            var file = event.target.files[0];
            reader.readAsText(file);
            reader.onload = function (result) {
                var header = [];
                var data = [];
                var curves = [];
                var strings = reader.result.split("\n");
                var dataflag = false;
                var curvesflag = false;
                for (var i = 0; i < strings.length; ++i) {
                    var str = strings[i].split(/\s+/);
                    // console.log(str, i);
                    if (!dataflag) {
                        header.push(str);
                    }
                    else {
                        str.shift();
                        data.push(str);
                        console.log(curves);
                        var curvesKeys = Object.keys(curves);
                        for (var j = 0; j < str.length; ++j) {
                            curves[curvesKeys[j]].push(str[j]);
                        }
                    }
                    if (curvesflag) {
                        console.log('in curves');
                        if (str[0].indexOf('#') < 0 && str[0].indexOf('~') < 0)
                            curves[str[0]] = [];
                    }
                    if (str[0] && str[0].indexOf('~A') === 0) {
                        dataflag = true;
                        curvesflag = false;
                    }
                    if (str[0] && str[0].indexOf('~C') === 0) {
                        curvesflag = true;
                    }
                }
                _this.lasData = curves;
                // console.log(header);
                // console.log(curves);
                // console.log(data);
                // drawChart();
                // drawChartOwn();
                // drawChartPlotly();
                // console.log(fr.result.split("\n"));
                // let lasobject = lasreader(fr.result);
                // console.log(lasobject);
                // console.log(lasobject.header);
            };
        }
    };
    InputLASComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-input-las',
            template: __webpack_require__(/*! raw-loader!./input-las.component.html */ "./node_modules/raw-loader/index.js!./src/app/input-las/input-las.component.html"),
            styles: [__webpack_require__(/*! ./input-las.component.css */ "./src/app/input-las/input-las.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], InputLASComponent);
    return InputLASComponent;
}());



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
var environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\xampp\htdocs\las-chart\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map