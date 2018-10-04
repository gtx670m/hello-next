webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ImagesGallery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/ImagesGallery */ "./components/ImagesGallery.js");
/* harmony import */ var _components_LeftArrow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/LeftArrow */ "./components/LeftArrow.js");
/* harmony import */ var _components_RightArrow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/RightArrow */ "./components/RightArrow.js");
/* harmony import */ var _components_Slide__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Slide */ "./components/Slide.js");
var _jsxFileName = "/home/quang.le/Documents/NextJS/hello-next/pages/index.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var Index =
/*#__PURE__*/
function (_Component) {
  _inherits(Index, _Component);

  function Index(props) {
    var _this;

    _classCallCheck(this, Index);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Index).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "goToPrevSlide", function () {});

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "goToNextSlide", function () {
      // Exiting the method early if we are at the end of the images array.
      // We also want to reset currentIndex and translateValue, so we return
      // to the first image in the array.
      if (_this.state.currentIndex === _this.state.images.length - 1) {
        return _this.setState({
          currentIndex: 0,
          translateValue: 0
        });
      } // This will not run if we met the if condition above


      _this.setState(function (prevState) {
        return {
          currentIndex: prevState.currentIndex + 1,
          translateValue: prevState.translateValue + -_this.slideWidth()
        };
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "slideWidth", function () {
      return document.querySelector(".slide").clientWidth;
    });

    _this.state = {
      images: ["https://3.bp.blogspot.com/-VU18UFZdWV4/WpariMdghgI/AAAAAAAAuWY/3piVROv-QcUSvSYb84ykjwxQ8pkz-EciwCLcBGAs/s640/hinh-anh-girl-sinh-2000-4.jpg", "https://thechive.files.wordpress.com/2017/10/girls-tank-tops-sexy-600-25.jpg", "https://3.bp.blogspot.com/-VU18UFZdWV4/WpariMdghgI/AAAAAAAAuWY/3piVROv-QcUSvSYb84ykjwxQ8pkz-EciwCLcBGAs/s640/hinh-anh-girl-sinh-2000-4.jpg", "https://thechive.files.wordpress.com/2017/10/girls-tank-tops-sexy-600-25.jpg"],
      currentIndex: 0,
      translateValue: 0
    };
    return _this;
  }

  _createClass(Index, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "slider",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "slider-wrapper",
        style: {
          transform: "translateX(".concat(this.state.translateValue, "px)"),
          transition: "transform ease-out 0.45s"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, this.state.images.map(function (image, i) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Slide__WEBPACK_IMPORTED_MODULE_4__["default"], {
          key: i,
          image: image,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 57
          },
          __self: this
        }) // <ImagesGallery key={i}>
        //   <img src="https://cmkt-image-prd.global.ssl.fastly.net/0.1.0/ps/3914830/910/1365/m1/fpnw/wm1/lgzygyramchqtufpvrocuywsvglqyimqtv9lxxzxz7ydo8jzrutaxspfdcd5wwoq-.jpg" />
        //   <img src="https://thechive.files.wordpress.com/2017/10/girls-tank-tops-sexy-600-25.jpg" />
        //   <img src="https://3.bp.blogspot.com/-VU18UFZdWV4/WpariMdghgI/AAAAAAAAuWY/3piVROv-QcUSvSYb84ykjwxQ8pkz-EciwCLcBGAs/s640/hinh-anh-girl-sinh-2000-4.jpg" />
        //   <img src="https://thuthuattienich.com/wp-content/uploads/2013/06/girl-cute-10.jpg" />
        //   <p>
        //     <img src="http://2sao.vietnamnetjsc.vn/images/2017/12/18/07/09/happy-polla-4.jpg" />
        //   </p>
        // </ImagesGallery>
        ;
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_LeftArrow__WEBPACK_IMPORTED_MODULE_2__["default"], {
        goToPrevSlide: this.goToPrevSlide,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_RightArrow__WEBPACK_IMPORTED_MODULE_3__["default"], {
        goToNextSlide: this.goToNextSlide,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Index);
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=index.js.2de91a619ad638062938.hot-update.js.map