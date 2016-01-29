"use strict";angular.module("appApp",["ngAnimate","ngAria","ngRoute","ngMaterial","underscore"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).otherwise({redirectTo:"/"})}]),angular.module("appApp").controller("MainCtrl",["$scope",function(a){}]),angular.module("appApp").directive("inputProcessor",["inputValidator","_",function(a,b){return{templateUrl:"views/directives/input-processor.html",restrict:"E",scope:{inputs:"=",errors:"="},link:function(c,d,e){c.validateInputs=function(){b.debounce(function(){c.$apply(function(){var b=a.validate(c.rawInput);c.inputs=b.inputs,c.errors=b.errors})},1e3)()}}}}]),angular.module("appApp").directive("outputProcessor",["calculator","_",function(a,b){return{templateUrl:"views/directives/output-processor.html",restrict:"E",scope:{inputs:"="},link:function(c,d,e){c.$watch("inputs",function(){c.createOutput()},!0),c.createOutput=function(){c.output=b.map(c.inputs,function(b){var c=a.calculateMonthlyGrossIncome(b.salary),d=a.calculateTax(b.salary);return{name:b.fullName,period:b.payPeriod,grossIncome:c,tax:d,netIncome:a.calculateNetIncome(c,d),"super":a.calculateSuper(c,b.superRate)}})}}}}]),angular.module("appApp").directive("resultProcessor",function(){return{templateUrl:"views/directives/result-processor.html",restrict:"E",scope:{errors:"="},link:function(a,b,c){}}}),angular.module("underscore",[]).factory("_",function(){return window._}),angular.module("appApp").service("inputValidator",["_",function(a){var b={};return b.config={nInputFields:5},b.validate=function(c){var d=[],e=[];return a.each(c.split("\n"),function(c){var f=c.split(","),g=[];g.push(b.isExpectedLength(f)),g.push(b.salaryFieldIsNumber(f[2])),-1!==a.flatten(g).indexOf(!1)?e.push({input:c,errors:a.difference(a.flatten(g),[!0,!1])}):d.push({fullName:f[0]+" "+f[1],payPeriod:f[4],salary:parseInt(f[2]),superRate:parseInt(a.trim(f[3],"%"))})}),{inputs:d,errors:e}},b.isExpectedLength=function(a){return a.length===b.config.nInputFields?!0:[!1,"Incorrect number of fields"]},b.salaryFieldIsNumber=function(a){return parseInt(a)?!0:[!1,"Salary invalid"]},b}]),angular.module("appApp").service("calculator",["_","configuration",function(a,b){var c={};return c.calculateMonthlyGrossIncome=function(b){return a.round(b/12)},c.calculateTax=function(c){var d=a.map(b.taxRates,function(a){return c>a.min&&c<a.max?a:void 0});d=a.compact(d),d=0===d.length?b.taxRates[b.taxRates.length-1]:d[0];var e=(d.baseTax+(c-d.min-1)*d.rate)/12;return a.round(e)},c.calculateNetIncome=function(a,b){return a-b},c.calculateSuper=function(b,c){return a.round(b*(c/100))},c}]),angular.module("appApp").constant("configuration",{taxRates:[{min:0,max:18200,baseTax:0,rate:0},{min:18201,max:37e3,baseTax:0,rate:.19},{min:37001,max:8e4,baseTax:3572,rate:.325},{min:80001,max:18e4,baseTax:17547,rate:.37},{min:180001,max:"",baseTax:54547,rate:.45}]}),angular.module("appApp").run(["$templateCache",function(a){a.put("views/directives/input-processor.html",'<md-content layout-padding> <md-input-container class="md-block"> <label>Employee Pay Information</label> <textarea rows="100" ng-model="rawInput" ng-change="validateInputs()" aria-label="Employee Pay Information">\n                  autofocus\n        </textarea> </md-input-container> </md-content>'),a.put("views/directives/output-processor.html",'<md-content layout-padding> <div ng-repeat="o in output"> {{o.name}}, {{o.period}}, {{o.grossIncome}}, {{o.tax}}, {{o.netIncome}}, {{o.super}} </div> </md-content>'),a.put("views/directives/result-processor.html",'<md-content> <md-list> <md-list-item ng-repeat="error in errors"> <div layout="column" ng-if="error.input"> {{error.input}} <div ng-repeat="e in error.errors"> > <em>{{e}}</em> </div> </div> </md-list-item> </md-list> </md-content>'),a.put("views/main.html",'<div layout="row"> <div flex class="input-container overflow-y"> <p class="md-padding">Enter in the employee pay information (one per line) in CSV format.</p> <input-processor inputs="inputs" errors="errors"></input-processor> </div> <div flex class="output-container overflow-y"> <p class="md-padding">Results will be displayed here after about 1 second...</p> <output-processor inputs="inputs"></output-processor> </div> </div> <div layout="column"> <div flex class="result-container overflow-y"> <p class="md-padding">And look for validation errors down here!</p> <result-processor errors="errors"></result-processor> </div> </div>')}]);