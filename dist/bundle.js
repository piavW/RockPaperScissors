!function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n,t){"use strict";var r=document.getElementById("rock"),o=document.getElementById("paper"),c=document.getElementById("scissors"),i=document.getElementById("display_answer"),u=document.getElementById("display-winner");document.getElementById("player-score"),document.getElementById("computer-score");function a(){var e=[rock,paper,scissors],n=Math.floor(3*Math.random()),t=e[n],r=document.getElementById("display-computer");return value=0==n?"Rock":1==n?"Paper":"Scissors",r.innerHTML="Computer choice is "+value,t}r.addEventListener("click",(function(){i.innerHTML="Player choice is Rock";var e=rock,n=new Game;u.innerHTML=n.check(e,a())})),o.addEventListener("click",(function(){i.innerHTML="Player choice is Paper";var e=paper,n=new Game;u.innerHTML=n.check(e,a())})),c.addEventListener("click",(function(){i.innerHTML="Player choice is Scissors";var e=scissors,n=new Game;u.innerHTML=n.check(e,a())}))}]);