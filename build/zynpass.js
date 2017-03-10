(function() {
  var Zynpass = (function() {

    var Zynpass = function() {
    };

    function zyncalc (seed, mac, magic) {
	    var seed_str = seed.substring(0,6);
	    var mac_num = parseInt(mac, 16) & 0x7;
	    var seed_num = parseInt(seed_str, 16) & 0x00FFFFFF;

	    var magicnum=UINT32(magic,16);
	    // console.log(magicnum.toString(16));
	    var seed_u32=UINT32(seed_num); 

	    var calctmp_u32=seed_u32.clone().add(magicnum);
	    // console.log(calctmp_u32.toString(16));
	    calctmp_u32.rotr(mac_num); // rotate right by mac_num
	    // console.log(calctmp_u32.toString(16));
	    calctmp_u32.xor(seed_u32); // xor with seed
	    // console.log(calctmp_u32.toString(16));

	    var ret = calctmp_u32.toString(16).toUpperCase();
	    return ret;
    }
    Zynpass.prototype.zyncalc = zyncalc;

    function zyngenpass (seed) {
	    var mac_str = seed.slice(-2); // use last two characters
	    var ret = this.zyncalc (seed, mac_str, "10F0A563"); // 0x10F0A563
	    return ret;
    }
    Zynpass.prototype.zyngenpass = zyngenpass;

    function zynsecret (seed, mac) {
	    var ret = this.zyncalc (seed, mac, "A11F5AC6"); // 0xA11F5AC6
	    return ret;
    }
    Zynpass.prototype.zynsecret = zynsecret;

    function zynaddaten (str) {
	    var ret = 'ATEN1, ' + str;
	    return ret;
    }
    Zynpass.prototype.zynaddaten=zynaddaten;

    // console.log(Zynpass);
    return Zynpass;
  })();

	if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
	    var UINT32 = require('cuint').UINT32;
	    module.exports = Zynpass;
	  }
	  else {
	    if (typeof define === 'function' && define.amd) {
	      define([], function() {
		return Zynpass;
	      });
	    }
	    else {
	      window.Zynpass = Zynpass;
	    }
	  }

})();


