!function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n,t){"use strict";e.exports&&(e.exports=c);var r=0,o=1,i=2;function c(){this.check=function(e,n){return e==n?"Results are: Tied, try again!":1==e&&0==n?"Results are: Player wins with Paper":0==e&&1==n?"Results are: Computer wins with Paper":0==e&&2==n?"Results are: Player wins with Rock":2==e&&0==n?"Results are: Computer wins with Rock":2==e&&1==n?"Results are: Player wins with Scissor":1==e&&2==n?"Results are: Computer wins with Scissor":void 0}}function u(){var e=[r,o,i][Math.floor(3*Math.random())];return document.getElementById("computer-choice").innerHTML="Computer choice is "+e,e}document.addEventListener("DOMContentLoaded",(function(){var e=document.getElementById("rock"),n=document.getElementById("display_answer"),t=document.getElementById("display-winner");e.addEventListener("click",(function(){n.innerHTML="player choice is Rock";var e=r,o=(new c).check(e,u());t.innerHTML=o}))})),document.addEventListener("DOMContentLoaded",(function(){var e=document.getElementById("paper"),n=document.getElementById("display_answer"),t=document.getElementById("display-winner");e.addEventListener("click",(function(){n.innerHTML="player choice is Paper";var e=o,r=(new c).check(e,u());t.innerHTML=r}))})),document.addEventListener("DOMContentLoaded",(function(){var e=document.getElementById("scissor"),n=document.getElementById("display_answer"),t=document.getElementById("display-winner");e.addEventListener("click",(function(){n.innerHTML="player choice is Scissor";var e=i,r=(new c).check(e,u());t.innerHTML=r}))}))}]);