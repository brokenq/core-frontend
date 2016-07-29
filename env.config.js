var path = require('path');
var fs = require('fs');

function _setEnv(obj, keyString){
  if (typeof obj != 'object' || obj == null) return;
  Object.keys(obj).forEach(function(key){
    if (typeof obj[key] === 'object' && obj[key] != null) {
        _setEnv(obj[key], keyString == null ? key : keyString + "." + key);
    } else {
      process.env[keyString == null ? key : keyString  + "." + key] = obj[key];
    }
  });
}

module.exports = function(env) {
  env = env || process.env.NODE_ENV || 'local';
  var profilePath = path.join(__dirname, "env", env + ".json");
  if (!fs.existsSync(profilePath)) {
    return console.error("profile not exist: " + profilePath);
  }
  var conf = JSON.parse(fs.readFileSync(profilePath, 'utf-8'));
  process.env['profile'] = env;
  return _setEnv(conf, null);
};