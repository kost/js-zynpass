'use strict';

var expect = require('chai').expect;
var Zynpass = require('../index');
var zynpass = new Zynpass();

// console.log(zynpass);

describe('#zynPass', function() {
    it('zynpass - should generate secret same as magic', function() {
	var result = zynpass.zyngenpass('000000000000');
	expect(result).to.equal('10F0A563');
    });
    it('zynpass - should generate secret for seed 000000000001', function() {
	var result = zynpass.zyngenpass('000000000001');
	expect(result).to.equal('887852B1');
    });
});

describe('#zynSecret', function() {
    it('zynsecret - should generate secret same as magic', function() {
	var result = zynpass.zynsecret('000000000000','00');
	expect(result).to.equal('A11F5AC6');
    });

    it('zynsecret - should generate secret from test number 100000000000 and 01', function() {
	var result = zynpass.zynsecret('100000000000','01');
	expect(result).to.equal('5087AD63');
    });

});


