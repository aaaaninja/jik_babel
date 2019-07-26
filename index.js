var _ref, _ref2, _claireRedfield, _ref8, _ref9, _$chunk, _ref10;

const axios = require("axios");

const _ = require("lodash");

const R = require("ramda");

_ref = (_ref2 = (_claireRedfield = 'claire redfield', _claireRedfield[0].toUpperCase() + _claireRedfield.substring(1)), `my name is ${_ref2}`), console.log(_ref);

(async () => {
  var _ref3, _ref4;

  ////////////////////////////////////////////////////////////////////////////////
  _ref3 = (_ref4 = await axios.get("https://us-central1-random-qiita-api-be836.cloudfunctions.net/get"), (({
    data
  }) => data.url)(_ref4)), console.log(_ref3); ////////////////////////////////////////////////////////////////////////////////
})();

(async () => {
  var _ref5, _ref6, _ref7, _httpsUsCentral;

  ////////////////////////////////////////////////////////////////////////////////
  _ref5 = (_ref6 = (_ref7 = (_httpsUsCentral = "https://us-central1-random-qiita-api-be836.cloudfunctions.net/get", axios.get(_httpsUsCentral)), await _ref7), (({
    data
  }) => data.url)(_ref6)), console.log(_ref5); ////////////////////////////////////////////////////////////////////////////////
})();

_ref8 = (_ref9 = [1, 3, 4, 4, 3, 7, 4, 2, 9], (_ref10 = _, _$chunk = _ref10.chunk, function chunk(_argPlaceholder) {
  return _$chunk.call(_ref10, _argPlaceholder, 4);
})(_ref9)), console.log(_ref8);

(async () => {
  var _ref11, _ref12, _map;

  ////////////////////////////////////////////////////////////////////////////////
  _ref11 = (_ref12 = (_map = [...Array(100)].map(() => axios.get("https://ifconfig.io")), Promise.all(_map)), await _ref12), _ref11.map(() => console.log("hogeeee")); ////////////////////////////////////////////////////////////////////////////////
})();