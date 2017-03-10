#!/usr/bin/env node

var Zynpass = require('../../index');
// var Zynpass = require('Zynpass');
var zynpass = new Zynpass();

var seed = '000000000000'; // seed given with ATSE
var mac = '00'; // last two digits of MAC address
var magic = '00000000'; // custom magic number

var result1 = zynpass.zyngenpass('000000000000');
console.log("Secret is: "+result1);

var result2 = zynpass.zynsecret('000000000000','00');
console.log("Secret is: "+result2);

var result3 = zynpass.zyncalc('000000000000','00','0000');
console.log("Secret is: "+result3);
