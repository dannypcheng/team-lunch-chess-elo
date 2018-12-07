parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r},p.cache={};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"N0QV":[function(require,module,exports) {
function t(e=t.defaultOptions){if(this.options=Object.assign({},t.defaultOptions,e),"number"!=typeof this.options.rating)throw new TypeError("Expected type of option `rating` to be a number");if(!Array.isArray(this.options.k))throw new TypeError("Expected type of option `k` to be an array");if(3!==this.options.k.length)throw new Error("Expected length of option k to equal 3");this.options.k.forEach(function(t){if("number"!=typeof t)throw new TypeError("Expected each element of the option `k` to be a number")})}t.defaultOptions={rating:1200,k:[40,20,10]},t.getExpectedResult=function(t,e){return 1/(1+Math.pow(10,(e-t)/400))},t.prototype.players=[],t.prototype.calculateRating=function(e,n,o){return e.rating+this.getK(e)*(o-t.getExpectedResult(e.rating,n.rating))},t.prototype.getK=function(t){return t.numberOfGamesPlayed<30?this.options.k[0]:t.numberOfGamesPlayed>=30&&Math.max(t.highestRating,t.rating)>=2400?this.options.k[2]:this.options.k[1]},t.prototype.createPlayer=function(e,n,o){e="number"==typeof e?e:this.options.rating,n="number"==typeof n?n:0,o="number"==typeof o&&o>e?o:e;const i=new t.Player(e,n,o);return this.players.push(i),i},t.prototype.updateRatings=function(t){t.forEach(([t,e,n])=>{[[t,this.calculateRating(t,e,n)],[e,this.calculateRating(e,t,Math.abs(n-1))]].forEach(function([t,e]){t.rating=e,t.numberOfGamesPlayed+=1,e>=t.highestRating&&(t.highestRating=e)})})},t.Player=function(t,e,n){this.rating=t,this.numberOfGamesPlayed=e,this.highestRating=n},module.exports=t;
},{}],"Focm":[function(require,module,exports) {
var e=require("elo-calculator"),a=new e({}),n=a.createPlayer();n.name="Brice Shatzer";var r=a.createPlayer();r.name="Bryce Dorn";var t=a.createPlayer();t.name="Danny Cheng";var o=a.createPlayer();o.name="Jamie Levinson";var i=a.createPlayer();i.name="Joe Duran";var l=a.createPlayer();l.name="Mike Parent";var c=a.createPlayer();c.name="Brandon Comerford";var u=[m(n,r,1),m(n,r,0),m(n,t,1),m(t,n,1,new Date("11/26/2018")),m(o,l,0),m(l,o,1),m(i,n,1),m(i,n,0,new Date("11/27/2018")),m(i,o,0,new Date("11/29/2018")),m(c,r,0,new Date("11/29/2018")),m(n,t,0,new Date("12/3/2018")),m(t,l,0,new Date("12/7/2018"))],s=[];function d(e){var a=document.createElement("p");a.innerText=e,document.body.appendChild(a)}function m(e,a,n,r){return obj={},t(e)&&t(a)?1==!n&&0==!n&&.5==!n&&"draw"==!n?console.log("Error Creating Game: invalid result value"):(obj.whitePlayer=e,obj.blackPlayer=a,obj.winner=n,obj.date=r&&new Date(r).valueOf()?new Date(r):(new Date).toDateString(),obj):console.log("Error Creating Game: invalid player");function t(e){var a=Object.getOwnPropertyNames(e);return a.includes("rating")&&a.includes("numberOfGamesPlayed")&&a.includes("highestRating")}}u.forEach(function(e){var a=[];a.push(e.whitePlayer),a.push(e.blackPlayer),a.push("draw"===e.winner?.5:e.winner),s.push(a)}),a.updateRatings(s),a.players.sort(function(e,a){return a.rating-e.rating}),a.players.forEach(function(e,a){var n="".concat(e.name," has played ").concat(e.numberOfGamesPlayed," games and has a rating of ").concat(Math.round(e.rating));console.log(n),"window"in this&&d(n)});
},{"elo-calculator":"N0QV"}]},{},["Focm"], null)
//# sourceMappingURL=src.524e98d1.map