webpackJsonp([0xc956abe28b23],{335:function(e,t,i){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function o(){return"undefined"==typeof E&&"undefined"!=typeof window&&window.IntersectionObserver&&(E=new window.IntersectionObserver(function(e){e.forEach(function(e){L.forEach(function(t){t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(E.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),E}t.__esModule=!0;var n=i(49),r=a(n),l=i(65),s=a(l),d=i(64),u=a(d),c=i(137),p=a(c),f=i(136),h=a(f),y=i(1),g=a(y),m=i(8),b=a(m),v=function(e){var t=(0,h.default)({},e);return t.responsiveResolution&&(t.resolutions=t.responsiveResolution,delete t.responsiveResolution),t.responsiveSizes&&(t.sizes=t.responsiveSizes,delete t.responsiveSizes),t},w={},S=function(e){var t=v(e),i=t.sizes?t.sizes.src:t.resolutions.src;return!!w[i]||(w[i]=!0,!1)},E=void 0,L=[],_=function(e,t){o().observe(e),L.push([e,t])},I=null,T=function(){if(null!==I)return I;var e="undefined"!=typeof window?window.document.createElement("canvas"):{};return I=!(!e.getContext||!e.getContext("2d"))&&0===e.toDataURL("image/webp").indexOf("data:image/webp")},j=function(e){var t=e.opacity,i=void 0===t?"1":t,a=e.src,o=e.srcSet,n=e.sizes,r=void 0===n?"":n,l=e.title,s=void 0===l?"":l,d=e.alt,u=void 0===d?"":d,c=e.width,p=void 0===c?"":c,f=e.height,h=void 0===f?"":f,y=e.transitionDelay,g=void 0===y?"0.5s":y;return'<img width="'+p+'" height="'+h+'" src="'+a+'" srcset="'+o+'" alt="'+u+'" title="'+s+'" sizes="'+r+'" style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+g+";opacity:"+i+';width:100%;height:100%;object-fit:cover;object-position:center"/>'},O=function(e){var t=e.style,i=e.onLoad,a=(0,p.default)(e,["style","onLoad"]);return g.default.createElement("img",(0,h.default)({},a,{onLoad:i,style:(0,h.default)({position:"absolute",top:0,left:0,transition:"opacity 0.5s",width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},t)}))};O.propTypes={style:b.default.object,onLoad:b.default.func};var M=function(e){function t(i){(0,r.default)(this,t);var a=(0,s.default)(this,e.call(this,i)),o=!0,n=!0,l=!1,d=S(i);return!d&&"undefined"!=typeof window&&window.IntersectionObserver&&(o=!1,n=!1,l=!0),"undefined"==typeof window&&(o=!1,n=!1),a.state={isVisible:o,imgLoaded:n,IOSupported:l},a.handleRef=a.handleRef.bind(a),a}return(0,u.default)(t,e),t.prototype.handleRef=function(e){var t=this;this.state.IOSupported&&e&&_(e,function(){t.setState({isVisible:!0,imgLoaded:!1})})},t.prototype.render=function(){var e=this,t=v(this.props),i=t.title,a=t.alt,o=t.className,n=t.outerWrapperClassName,r=t.style,l=void 0===r?{}:r,s=t.imgStyle,d=void 0===s?{}:s,u=t.sizes,c=t.resolutions,p=t.backgroundColor,f=t.Tag,y=void 0;y="boolean"==typeof p?"lightgray":p;var m=(0,h.default)({opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s"},d),b=(0,h.default)({opacity:this.state.imgLoaded||this.props.fadeIn===!1?1:0},d);if(u){var w=u;return w.srcWebp&&w.srcSetWebp&&T()&&(w.src=w.srcWebp,w.srcSet=w.srcSetWebp),g.default.createElement(f,{className:(n?n:"")+" gatsby-image-outer-wrapper",style:{position:"absolute"===l.position?"initial":"relative"}},g.default.createElement(f,{className:(o?o:"")+" gatsby-image-wrapper",style:(0,h.default)({position:"relative",overflow:"hidden"},l),ref:this.handleRef},g.default.createElement(f,{style:{width:"100%",paddingBottom:100/w.aspectRatio+"%"}}),w.base64&&g.default.createElement(O,{alt:a,title:i,src:w.base64,style:m}),w.tracedSVG&&g.default.createElement(O,{alt:a,title:i,src:w.tracedSVG,style:m}),y&&g.default.createElement(f,{title:i,style:{backgroundColor:y,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&g.default.createElement(O,{alt:a,title:i,srcSet:w.srcSet,src:w.src,sizes:w.sizes,style:b,onLoad:function(){e.state.IOSupported&&e.setState({imgLoaded:!0}),e.props.onLoad&&e.props.onLoad()}}),g.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:j((0,h.default)({alt:a,title:i},w))}})))}if(c){var S=c,E=(0,h.default)({position:"relative",overflow:"hidden",display:"inline-block",width:S.width,height:S.height},l);return"inherit"===l.display&&delete E.display,S.srcWebp&&S.srcSetWebp&&T()&&(S.src=S.srcWebp,S.srcSet=S.srcSetWebp),g.default.createElement(f,{className:(n?n:"")+" gatsby-image-outer-wrapper",style:{position:"absolute"===l.position?"initial":"relative"}},g.default.createElement(f,{className:(o?o:"")+" gatsby-image-wrapper",style:E,ref:this.handleRef},S.base64&&g.default.createElement(O,{alt:a,title:i,src:S.base64,style:m}),S.tracedSVG&&g.default.createElement(O,{alt:a,title:i,src:S.tracedSVG,style:m}),y&&g.default.createElement(f,{title:i,style:{backgroundColor:y,width:S.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:S.height}}),this.state.isVisible&&g.default.createElement(O,{alt:a,title:i,width:S.width,height:S.height,srcSet:S.srcSet,src:S.src,style:b,onLoad:function(){e.setState({imgLoaded:!0}),e.props.onLoad&&e.props.onLoad()}}),g.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:j((0,h.default)({alt:a,title:i,width:S.width,height:S.height},S))}})))}return null},t}(g.default.Component);M.defaultProps={fadeIn:!0,alt:"",Tag:"div"},M.propTypes={responsiveResolution:b.default.object,responsiveSizes:b.default.object,resolutions:b.default.object,sizes:b.default.object,fadeIn:b.default.bool,title:b.default.string,alt:b.default.string,className:b.default.oneOfType([b.default.string,b.default.object]),outerWrapperClassName:b.default.oneOfType([b.default.string,b.default.object]),style:b.default.object,imgStyle:b.default.object,position:b.default.string,backgroundColor:b.default.oneOfType([b.default.string,b.default.bool]),onLoad:b.default.func,Tag:b.default.string},t.default=M},45:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=i(1),o=i(47),n=i(28),r=i(46),l=function(e){var t=e.children,i=e.title,l=e.subtitle;return a.createElement(n.SplitColumn,null,a.createElement(o.default,{title:i,subtitle:l}),a.createElement(r.StyledParagraphWrapper,null,t))};t.default=l},46:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=i(7),o=i(10),n=i(9);t.StyledParagraphWrapper=a.default.div.withConfig({displayName:"styled__StyledParagraphWrapper"})(["margin-top:1rem;padding-top:1.5rem;padding-left:2.5rem;overflow:scroll;"," ",""],o.StyledTypography.paragraph,n.MobileLikeFormat("padding-left: 0rem;"))},47:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=i(1),o=i(48),n=function(e){var t=e.title,i=e.subtitle;return a.createElement(o.TitularLayoutWrapper,null,a.createElement(o.Title,null,t),i&&a.createElement(o.Subtitle,null,i))};t.default=n},48:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=i(7),o=i(10),n=i(9);t.TitularLayoutWrapper=a.default.div.withConfig({displayName:"styled__TitularLayoutWrapper"})(["position:relative;padding-bottom:1rem;"]),t.Title=a.default.h2.withConfig({displayName:"styled__Title"})([""," line-height:8.75rem;margin:0;",""],o.StyledTypography.pageTitle,n.MobileLikeFormat("\n  line-height: auto;\n  ")),t.Subtitle=a.default.h3.withConfig({displayName:"styled__Subtitle"})([""," left:2.5rem;position:absolute;bottom:0.1rem;margin:0;",""],o.StyledTypography.pageSubtitle,n.MobileLikeFormat("\n    position: static;\n  "))},230:function(e,t,i){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function n(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var r=i(1),l=i(7),s=i(335),d=i(63),u=i(45),c=i(9),p=function(e){function t(i){a(this,t);var n=o(this,e.call(this,i));return n.state={shouldRenderMobileLike:!1},n}return n(t,e),t.prototype.componentDidMount=function(){var e=this;this.mobileLike$=c.ScreenResize.resizeEvents().subscribe("shouldRenderMobileLike",function(t){e.setState({shouldRenderMobileLike:t})},!0)},t.prototype.componentWillUnmount=function(){this.mobileLike$.unsubscribe()},t.prototype.render=function(){return r.createElement(d.default,{primary:r.createElement(f,null),secondary:!this.state.shouldRenderMobileLike&&r.createElement(h,{heroImage:this.props.data.heroImage})})},t}(r.Component);t.default=p;var f=function(){var e="I'm a Javascript engineer...";return r.createElement(u.default,{title:"About",subtitle:e},r.createElement("p",null,"with a passion for creating stunning web apps using the latest technology. I strive to combine great UX with great code to deliver the best experience to consumers of my applications."),r.createElement("p",null,"I’ve been developing front end since 2012 when I learned HTML and CSS in an introductory course at Purdue University. I quickly became obsessed with creativity I could express through my code and designs."),r.createElement("p",null,"Upon graduating in 2014, I began work at a large scale digital consulting company where I was exposed to a whole new world of web technolgies. Shortly after that I began to shift my creative focus from design and UX to a passion for code."),r.createElement("p",null,"Read more about what I’ve learned along the way."))},h=function(e){var t=e.heroImage;return r.createElement(y,{sizes:t.sizes})};t.query="** extracted graphql fragment **";var y=l.default(s.default).withConfig({displayName:"pages__HeroImage"})(["height:100vh;"])}});
//# sourceMappingURL=component---src-pages-index-tsx-6371fc224dc83a54cfab.js.map