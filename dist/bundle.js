!function(e){var r={};function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(1&r&&(e=t(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var o in e)t.d(n,o,function(r){return e[r]}.bind(null,o));return n},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="",t(t.s=0)}([function(e,r,t){"use strict";function n(){this.check=function(e,r){return e==r?"Results are: Tied, try again!":e==paper&&r==rock?"Results are: Player wins with Paper":e==rock&&r==paper?"Results are: Computer wins with Paper":e==rock&&r==scissors?"Results are: Player wins with Rock":e==scissors&&r==rock?"Results are: Computer wins with Rock":e==scissors&&r==paper?"Results are: Player wins with Scissors":e==paper&&r==scissors?"Results are: Computer wins with Scissors":void 0}}function o(){var e=[rock,paper,scissors],r=Math.floor(3*Math.random()),t=e[r],n=document.getElementById("display-computer");value=0==r?"Rock":1==r?"Paper":"Scissors";var o=value;return n.innerHTML="Computer choice is "+o,t}e.exports&&(e.exports=n);var s=document.getElementById("rock"),i=document.getElementById("paper"),c=document.getElementById("scissors"),u=document.getElementById("display_answer"),a=document.getElementById("display-winner");s.addEventListener("click",(function(){u.innerHTML="Player choice is Rock";var e=rock,r=(new n).check(e,o());a.innerHTML=r})),i.addEventListener("click",(function(){u.innerHTML="Player choice is Paper";var e=paper,r=(new n).check(e,o());a.innerHTML=r})),c.addEventListener("click",(function(){u.innerHTML="Player choice is Scissors";var e=scissors,r=(new n).check(e,o());a.innerHTML=r}))}]);