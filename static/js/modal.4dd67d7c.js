(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"./docs/modal.mdx":function(n,e,t){"use strict";t.r(e);var o=t("./node_modules/react/index.js"),i=t.n(o),r=t("./node_modules/@mdx-js/tag/dist/index.js"),l=t("./node_modules/docz/dist/index.m.js"),s=t("./lib/index.js");function a(n){return(a="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"===typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function u(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function c(n,e){for(var t=0;t<e.length;t++){var o=e[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}function f(n,e,t){return e&&c(n.prototype,e),t&&c(n,t),n}function d(n,e){return!e||"object"!==a(e)&&"function"!==typeof e?function(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}(n):e}function p(n,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),e&&m(n,e)}function m(n,e){return(m=Object.setPrototypeOf||function(n,e){return n.__proto__=e,n})(n,e)}function b(n,e){if(null==n)return{};var t,o,i=function(n,e){if(null==n)return{};var t,o,i={},r=Object.keys(n);for(o=0;o<r.length;o++)t=r[o],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);for(o=0;o<r.length;o++)t=r[o],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}e.default=function(n){var e=n.components,t=b(n,["components"]);return i.a.createElement(r.MDXTag,{name:"wrapper",components:e},i.a.createElement(r.MDXTag,{name:"h2",components:e,props:{id:"example"}},"Example"),i.a.createElement(l.Playground,{__position:0,__codesandbox:"undefined",__code:"{() => {\n  class Example extends React.Component {\n    constructor() {\n      this.state = {\n        visible: false,\n      }\n      this.toggleVisible = () => {\n        this.setState(state => ({\n          visible: !state.visible,\n        }))\n      }\n    }\n    render() {\n      return (\n        <div>\n          <Button onClick={this.toggleVisible}>Toggle</Button>\n          <Modal\n            visible={this.state.visible}\n            body={<div>Woohoo, you're reading this text in a modal!</div>}\n            onFinish={this.toggleVisible}\n            onCancel={this.toggleVisible}\n          />\n        </div>\n      )\n    }\n  }\n\n  return <Example />\n}}",__scope:{props:t,Modal:s.v,Button:s.f}},function(){var n=function(n){function e(){return u(this,e),(void 0).state={visible:!1},(void 0).toggleVisible=function(){(void 0).setState(function(n){return{visible:!n.visible}})},d(void 0)}return p(e,i.a.Component),f(e,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(s.f,{onClick:this.toggleVisible},"Toggle"),i.a.createElement(s.v,{visible:this.state.visible,body:i.a.createElement("div",null,"Woohoo, you're reading this text in a modal!"),onFinish:this.toggleVisible,onCancel:this.toggleVisible}))}}]),e}();return i.a.createElement(n,null)}),i.a.createElement(r.MDXTag,{name:"h2",components:e,props:{id:"confirm"}},"Confirm"),i.a.createElement(l.Playground,{__position:1,__codesandbox:"undefined",__code:"{() => {\n  class Example extends React.Component {\n    constructor() {\n      this.state = {\n        result: '',\n      }\n    }\n    render() {\n      return (\n        <React.Fragment>\n          <Button\n            onClick={() => {\n              Modal.confirm({\n                title: 'Confirm',\n                content: 'Are you sure',\n                onFinish: () => {\n                  this.setState({ result: 'finish' })\n                },\n                onCancel: () => {\n                  this.setState({ result: 'cancel' })\n                },\n              })\n            }}\n          >\n            Confirm\n          </Button>{' '}\n          <span>\n            {this.state.result\n              ? `You click ` + this.state.result\n              : 'Click the button'}\n          </span>\n        </React.Fragment>\n      )\n    }\n  }\n\n  return <Example />\n}}",__scope:{props:t,Modal:s.v,Button:s.f}},function(){var n=function(n){function e(){return u(this,e),(void 0).state={result:""},d(void 0)}return p(e,i.a.Component),f(e,[{key:"render",value:function(){var n=this;return i.a.createElement(i.a.Fragment,null,i.a.createElement(s.f,{onClick:function(){s.v.confirm({title:"Confirm",content:"Are you sure",onFinish:function(){n.setState({result:"finish"})},onCancel:function(){n.setState({result:"cancel"})}})}},"Confirm")," ",i.a.createElement("span",null,this.state.result?"You click "+this.state.result:"Click the button"))}}]),e}();return i.a.createElement(n,null)}))}}}]);