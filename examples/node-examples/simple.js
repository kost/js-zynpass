#!/usr/bin/env node

var Zynpass = require('../../index');
// var Zynpass = require('Zynpass');
var zynpass = new Zynpass();

var result = zynpass.zynsecret('000000000000','00');
console.log("Secret is");
console.log(result);

