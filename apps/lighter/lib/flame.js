var shell = require('shelljs');

exports = module.exports = new FlameLighter();


function FlameLighter() {
  this.exec = function setLight(light) {
    shell.exec('echo ' + light + ' > /sys/class/leds/torch-light/brightness');
  };
}

FlameLighter.prototype.on = function() {
  this.exec(1);
};

FlameLighter.prototype.off = function() {
  this.exec(0);
};

FlameLighter.prototype.toggle = function() {
};
