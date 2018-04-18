webpackJsonp([105147288345694],{

/***/ 210:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	Object.defineProperty(exports, "__esModule", { value: true });
	var React = __webpack_require__(1);
	var LoadingIcon_1 = __webpack_require__(215);
	var styled_1 = __webpack_require__(211);
	
	var GithubProjects = function (_React$Component) {
	    _inherits(GithubProjects, _React$Component);
	
	    function GithubProjects(props) {
	        _classCallCheck(this, GithubProjects);
	
	        var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));
	
	        _this.state = {
	            loading: true
	        };
	        return _this;
	    }
	
	    GithubProjects.prototype.componentDidMount = function componentDidMount() {
	        this.createGitHubProjects();
	    };
	
	    GithubProjects.prototype.render = function render() {
	        return React.createElement("div", null, this.state.loading && React.createElement(LoadingIcon_1.default, null), React.createElement(styled_1.ProjectList, null, this.state.projects));
	    };
	
	    GithubProjects.prototype.fetchGithubProjects = function fetchGithubProjects() {
	        return fetch('https://api.github.com/users/brandon-hedrick/repos').then(function (res) {
	            return res.json();
	        });
	    };
	
	    GithubProjects.prototype.createGitHubProjects = function () {
	        var _ref = _asyncToGenerator(function* () {
	            var _this2 = this;
	
	            var results = yield this.fetchGithubProjects();
	            if (results && Array.isArray(results)) {
	                this.setState(function (s) {
	                    return {
	                        projects: results.map(function (r, i) {
	                            return React.createElement(Project, { key: i, name: r.name, description: r.description, language: r.language, updated: "Updated " + _this2.formatDate(r.updated_at), href: r.html_url });
	                        })
	                    };
	                });
	            } else {
	                // error handling
	                console.log(results);
	            }
	            this.setState(function (s) {
	                return { loading: false };
	            });
	        });
	
	        function createGitHubProjects() {
	            return _ref.apply(this, arguments);
	        }
	
	        return createGitHubProjects;
	    }();
	
	    GithubProjects.prototype.formatDate = function formatDate(d) {
	        var date = new Date(d);
	        return date.getMonth() + 1 + "/" + date.getDate() + "/" + date.getFullYear();
	    };
	
	    return GithubProjects;
	}(React.Component);
	
	exports.default = GithubProjects;
	var Project = function Project(_ref2) {
	    var name = _ref2.name,
	        description = _ref2.description,
	        language = _ref2.language,
	        updated = _ref2.updated,
	        href = _ref2.href;
	    return React.createElement(styled_1.ProjectItem, null, React.createElement(styled_1.ProjectTitleWrapper, null, React.createElement(styled_1.ProjectTitle, null, name), React.createElement(styled_1.ProjectLangBadge, null, language)), React.createElement(styled_1.ProjectBody, null, React.createElement("p", null, description)), React.createElement(styled_1.ProjectFooter, null, React.createElement(styled_1.ProjectUpdateDate, null, updated), React.createElement(styled_1.ProjectLinkToGH, { target: '_blank', href: href }, "View on Github")));
	};

/***/ }),

/***/ 211:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", { value: true });
	var styled_components_1 = __webpack_require__(7);
	var typography_1 = __webpack_require__(10);
	var colors_1 = __webpack_require__(20);
	var breakpoints_1 = __webpack_require__(9);
	exports.ProjectList = styled_components_1.default.ul.withConfig({
	  displayName: "styled__ProjectList"
	})(["margin:0"]);
	exports.ProjectItem = styled_components_1.default.li.withConfig({
	  displayName: "styled__ProjectItem"
	})(["color:", ";background-color:", ";list-style:none;padding:3rem;margin-bottom:3rem;"], colors_1.Colors.lightGrey, colors_1.Colors.deepGrey);
	exports.ProjectTitleWrapper = styled_components_1.default.div.withConfig({
	  displayName: "styled__ProjectTitleWrapper"
	})(["display:flex;align-items:flex-end;justify-content:flex-start;overflow:hidden;", ""], breakpoints_1.MobileLikeFormat("\n    flex-direction: column;\n    align-items: flex-start;\n  "));
	exports.ProjectTitle = styled_components_1.default.h5.withConfig({
	  displayName: "styled__ProjectTitle"
	})(["", " margin:0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;", ""], typography_1.StyledTypography.darkHeading, breakpoints_1.MobileLikeFormat("\n    white-space: normal;\n  "));
	exports.ProjectLangBadge = styled_components_1.default.span.withConfig({
	  displayName: "styled__ProjectLangBadge"
	})(["display:inline-block;background-color:", ";padding:.75rem 1.25rem;border-radius:1rem;font-family:", ";font-size:1.25rem;margin-left:1rem;", ""], colors_1.Colors.darkGrey, typography_1.titillium, breakpoints_1.MobileLikeFormat("\n    margin-left: 0;\n    padding: 1rem 1.25rem;\n    margin-top: 2rem;\n    font-size: 2rem;\n  "));
	exports.ProjectBody = styled_components_1.default.div.withConfig({
	  displayName: "styled__ProjectBody"
	})(["margin:3rem 0;font-family:", ";font-size:1.25rem;line-height:160%;letter-spacing:.05rem;", ""], typography_1.butler.medium, breakpoints_1.MobileLikeFormat("\n    font-size: 2.5rem;\n  "));
	exports.ProjectFooter = styled_components_1.default.div.withConfig({
	  displayName: "styled__ProjectFooter"
	})(["display:flex;justify-content:space-between;align-items:baseline;"]);
	exports.ProjectUpdateDate = styled_components_1.default.span.withConfig({
	  displayName: "styled__ProjectUpdateDate"
	})(["font-family:", ";font-size:1.25rem;", ""], typography_1.titillium, breakpoints_1.MobileLikeFormat("\n    font-size: 2rem;\n  "));
	exports.ProjectLinkToGH = styled_components_1.default.a.withConfig({
	  displayName: "styled__ProjectLinkToGH"
	})(["display:block;padding:.75rem 1.25rem;border:.1rem solid ", ";color:", ";font-family:", ";text-decoration:none;transition:0.25s ease;&:hover{background-color:", ";color:", ";};", ""], colors_1.Colors.lightGrey, colors_1.Colors.lightGrey, typography_1.titillium, colors_1.Colors.lightGrey, colors_1.Colors.darkGrey, breakpoints_1.MobileLikeFormat("\n    font-size: 2rem;\n    height: 5.8rem;\n    padding: 2rem 2.5rem;\n  "));

/***/ }),

/***/ 215:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _templateObject = _taggedTemplateLiteralLoose(["\n  0%, 80%, 100% {\n    -webkit-transform: scale(0);\n    transform: scale(0);\n  } 40% {\n    -webkit-transform: scale(1.0);\n    transform: scale(1.0);\n  }\n"], ["\n  0%, 80%, 100% {\n    -webkit-transform: scale(0);\n    transform: scale(0);\n  } 40% {\n    -webkit-transform: scale(1.0);\n    transform: scale(1.0);\n  }\n"]);
	
	function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }
	
	Object.defineProperty(exports, "__esModule", { value: true });
	var React = __webpack_require__(1);
	var styled_components_1 = __webpack_require__(7);
	var colors_1 = __webpack_require__(20);
	var LoadingIcon = function LoadingIcon() {
	  return React.createElement(LoadingIconWrapper, null, React.createElement(StyledLoadingIconPip, null), React.createElement(StyledLoadingIconPip, { offset: 1 }), React.createElement(StyledLoadingIconPip, { offset: 2 }));
	};
	exports.default = LoadingIcon;
	var LoadingIconWrapper = styled_components_1.default.div.withConfig({
	  displayName: "LoadingIcon__LoadingIconWrapper"
	})(["width:6rem;margin:auto auto;display:flex;align-items:center;justify-content:space-around;"]);
	var bouncedelay = styled_components_1.keyframes(_templateObject);
	var LoadingIconPip = function LoadingIconPip(_ref) {
	  var className = _ref.className;
	  return React.createElement("div", { className: className });
	};
	var StyledLoadingIconPip = styled_components_1.default(LoadingIconPip).withConfig({
	  displayName: "LoadingIcon__StyledLoadingIconPip"
	})(["width:1.5rem;height:1.5rem;background-color:", ";border-radius:100%;display:inline-block;animation:", " .8s infinite ease-in-out both;animation-delay:", ";"], colors_1.Colors.grey, bouncedelay, function (props) {
	  return props.offset ? props.offset * .1 + "s" : 0;
	});

/***/ }),

/***/ 45:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", { value: true });
	var React = __webpack_require__(1);
	var TitularLayout_1 = __webpack_require__(47);
	var styled_1 = __webpack_require__(28);
	var styled_2 = __webpack_require__(46);
	var MainContentSection = function MainContentSection(_ref) {
	    var children = _ref.children,
	        title = _ref.title,
	        subtitle = _ref.subtitle;
	    return React.createElement(styled_1.SplitColumn, null, React.createElement(TitularLayout_1.default, { title: title, subtitle: subtitle }), React.createElement(styled_2.StyledParagraphWrapper, null, children));
	};
	exports.default = MainContentSection;

/***/ }),

/***/ 46:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", { value: true });
	var styled_components_1 = __webpack_require__(7);
	var typography_1 = __webpack_require__(10);
	var breakpoints_1 = __webpack_require__(9);
	exports.StyledParagraphWrapper = styled_components_1.default.div.withConfig({
	  displayName: "styled__StyledParagraphWrapper"
	})(["margin-top:1rem;padding-top:1.5rem;padding-left:2.5rem;overflow:scroll;", " ", ""], typography_1.StyledTypography.paragraph, breakpoints_1.MobileLikeFormat("padding-left: 0rem;"));

/***/ }),

/***/ 47:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", { value: true });
	var React = __webpack_require__(1);
	var styled_1 = __webpack_require__(48);
	var TitularLayout = function TitularLayout(_ref) {
	    var title = _ref.title,
	        subtitle = _ref.subtitle;
	    return React.createElement(styled_1.TitularLayoutWrapper, null, React.createElement(styled_1.Title, null, title), subtitle && React.createElement(styled_1.Subtitle, null, subtitle));
	};
	exports.default = TitularLayout;

/***/ }),

/***/ 48:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", { value: true });
	var styled_components_1 = __webpack_require__(7);
	var typography_1 = __webpack_require__(10);
	var breakpoints_1 = __webpack_require__(9);
	exports.TitularLayoutWrapper = styled_components_1.default.div.withConfig({
	  displayName: "styled__TitularLayoutWrapper"
	})(["position:relative;padding-bottom:1rem;"]);
	exports.Title = styled_components_1.default.h2.withConfig({
	  displayName: "styled__Title"
	})(["", " line-height:8.75rem;margin:0;", ""], typography_1.StyledTypography.pageTitle, breakpoints_1.MobileLikeFormat("\n  line-height: auto;\n  "));
	exports.Subtitle = styled_components_1.default.h3.withConfig({
	  displayName: "styled__Subtitle"
	})(["", " left:2.5rem;position:absolute;bottom:0.1rem;margin:0;", ""], typography_1.StyledTypography.pageSubtitle, breakpoints_1.MobileLikeFormat("\n    position: static;\n  "));

/***/ }),

/***/ 233:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", { value: true });
	var React = __webpack_require__(1);
	var styled_components_1 = __webpack_require__(7);
	var SplitLayout_1 = __webpack_require__(63);
	var styled_1 = __webpack_require__(28);
	var MainContentSection_1 = __webpack_require__(45);
	var GithubProjects_1 = __webpack_require__(210);
	var typography_1 = __webpack_require__(10);
	var WorkPage = function WorkPage() {
	  return React.createElement(SplitLayout_1.default, { primary: React.createElement(Primary, null), secondary: React.createElement(Secondary, null) });
	};
	exports.default = WorkPage;
	var Primary = function Primary() {
	  return React.createElement(MainContentSection_1.default, { title: 'Work', subtitle: 'I like to make cool stuff...' }, React.createElement("p", null, "With my current job, I\u2019m not legally allowed to share any of the code I\u2019ve written or release any client information. With that said, I make all kinds of cool stuff in my free time."), React.createElement("p", null, "Over the years I\u2019ve started on lots of projects that I used to learn new libraries, concepts or maybe just to do something fun. I even finished some of them too!"), React.createElement("p", null, "Here you\u2019ll find a list of projects from my Github. Feel free to check me out and see what I\u2019ve been up to lately!"));
	};
	var Secondary = function Secondary() {
	  return React.createElement(StyledSplitColumn, null, React.createElement(exports.GithubProjectsTitle, null, "I've Made..."), React.createElement(GithubProjects_1.default, null));
	};
	var StyledSplitColumn = styled_components_1.default(styled_1.SplitColumn).withConfig({
	  displayName: "work__StyledSplitColumn"
	})(["padding:2rem 4rem 4rem;overflow:auto;"]);
	exports.GithubProjectsTitle = styled_components_1.default.h4.withConfig({
	  displayName: "work__GithubProjectsTitle"
	})(["margin:0;margin-bottom:4.375rem;", ""], typography_1.StyledTypography.darkTitle);

/***/ })

});
//# sourceMappingURL=component---src-pages-work-tsx-5f1efa3607e264bdacba.js.map