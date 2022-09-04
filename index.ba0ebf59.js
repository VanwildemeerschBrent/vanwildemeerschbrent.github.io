import{r as c}from"./chunks/index.1262957c.js";/* empty css                     */var n={exports:{}},i={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var f=c.exports,_=Symbol.for("react.element"),m=Symbol.for("react.fragment"),u=Object.prototype.hasOwnProperty,d=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,x={key:!0,ref:!0,__self:!0,__source:!0};function a(o,e,r){var t,s={},l=null,p=null;r!==void 0&&(l=""+r),e.key!==void 0&&(l=""+e.key),e.ref!==void 0&&(p=e.ref);for(t in e)u.call(e,t)&&!x.hasOwnProperty(t)&&(s[t]=e[t]);if(o&&o.defaultProps)for(t in e=o.defaultProps,e)s[t]===void 0&&(s[t]=e[t]);return{$$typeof:_,type:o,key:l,ref:p,props:s,_owner:d.current}}i.Fragment=m;i.jsx=a;i.jsxs=a;(function(o){o.exports=i})(n);const h=()=>{const[o,e]=c.exports.useState([]);return c.exports.useEffect(()=>{fetch("https://dev.to/api/articles?username=vanwildemeerschbrent").then(r=>r.json()).then(r=>{e(r.slice(0,10))})},[]),n.exports.jsx("div",{className:"articles",children:o?.map(r=>n.exports.jsx("div",{className:"articles-item",onClick:()=>window.open(r.canonical_url,"_blank","noopener,noreferrer"),children:n.exports.jsx("img",{src:r.social_image})},r.id))})};export{h as default};
