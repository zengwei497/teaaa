const objectToQuery = function (p_am, key, en_code) {
  if (p_am == null) return '';
  var param_Str = '';
  var t = typeof (p_am);
  if (t == 'string' || t == 'number' || t == 'boolean') {
    param_Str += '&' + key + '=' + ((en_code == null || en_code) ? encodeURIComponent(p_am) : p_am);
  } else {
    for (var i in p_am) {
      var k = key == null ? i : key + (p_am instanceof Array ? '[' + i + ']' : '.' + i);
      param_Str += objectToQuery(p_am[i], k, en_code);
    }
  }
  return param_Str;
};

export default objectToQuery
