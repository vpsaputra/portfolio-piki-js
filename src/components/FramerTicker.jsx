"use strict";

exports.__esModule = true;
exports["default"] =
  exports.TICKER_DIRECTION_RIGHT =
  exports.TICKER_DIRECTION_LEFT =
    void 0;
var _react = _interopRequireDefault(require("react"));
var _framerMotion = require("framer-motion");
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
var TICKER_DIRECTION_LEFT = -1;
exports.TICKER_DIRECTION_LEFT = TICKER_DIRECTION_LEFT;
var TICKER_DIRECTION_RIGHT = 1;
exports.TICKER_DIRECTION_RIGHT = TICKER_DIRECTION_RIGHT;
var noop = function noop() {};
var Ticker = function Ticker(props) {
  var children = props.children,
    _props$duration = props.duration,
    duration = _props$duration === void 0 ? 10 : _props$duration,
    _props$onMouseEnter = props.onMouseEnter,
    onMouseEnter = _props$onMouseEnter === void 0 ? noop : _props$onMouseEnter,
    _props$onMouseLeave = props.onMouseLeave,
    onMouseLeave = _props$onMouseLeave === void 0 ? noop : _props$onMouseLeave,
    _props$isPlaying = props.isPlaying,
    isPlaying = _props$isPlaying === void 0 ? true : _props$isPlaying,
    _props$direction = props.direction,
    direction =
      _props$direction === void 0 ? TICKER_DIRECTION_LEFT : _props$direction;
  var tickerRef = _react["default"].useRef(null);
  var tickerContentsRef = _react["default"].useRef(null);
  var _React$useState = _react["default"].useState(2),
    tickerContentWidth = _React$useState[0],
    setTickerContentWidth = _React$useState[1];
  var _React$useState2 = _react["default"].useState(1),
    numDupes = _React$useState2[0],
    setNumDupes = _React$useState2[1];
  var _useAnimate = (0, _framerMotion.useAnimate)(),
    scope = _useAnimate[0],
    animate = _useAnimate[1];
  var _React$useState3 = _react["default"].useState(undefined),
    animationControls = _React$useState3[0],
    setAnimationControls = _React$useState3[1];
  var isInView = (0, _framerMotion.useInView)(scope);
  _react["default"].useEffect(
    function () {
      if (tickerRef.current && tickerContentsRef.current) {
        var contentWidth =
          tickerContentsRef.current.getBoundingClientRect().width;
        setTickerContentWidth(contentWidth);
        setNumDupes(
          Math.max(
            Math.ceil((2 * tickerRef.current.clientWidth) / contentWidth),
            1
          )
        );
      }
    },
    [tickerRef.current, tickerContentsRef.current]
  );
  _react["default"].useEffect(
    function () {
      if (isInView && !animationControls) {
        var controls = animate(
          scope.current,
          {
            x: tickerContentWidth * direction,
          },
          {
            ease: "linear",
            duration: duration,
            repeat: Infinity,
          }
        );
        controls.play();
        setAnimationControls(controls);
      }
    },
    [isInView]
  );
  _react["default"].useEffect(
    function () {
      if (animationControls) {
        if (!isInView || !isPlaying) {
          animationControls.pause();
        } else {
          animationControls.play();
        }
      }
    },
    [isInView, isPlaying]
  );
  return /*#__PURE__*/ _react["default"].createElement(
    "div",
    {
      className: "FMT__container",
      ref: tickerRef,
      style: {
        width: "100%",
        height: "100%",
        overflow: "hidden",
      },
      onMouseEnter: onMouseEnter,
      onMouseLeave: onMouseLeave,
    },
    /*#__PURE__*/ _react["default"].createElement(
      "div",
      {
        ref: scope,
        className: "FMT__container__contents",
        style: {
          display: "flex",
          width: "max-content",
          marginLeft: "-" + tickerContentWidth * numDupes + "px",
        },
      },
      /*#__PURE__*/ _react["default"].createElement(
        "div",
        {
          style: {
            display: "flex",
          },
        },
        [].concat(Array(numDupes)).map(function (_) {
          return children.map(function (item, index) {
            return /*#__PURE__*/ _react["default"].createElement(
              _react["default"].Fragment,
              {
                key: index,
              },
              item
            );
          });
        })
      ),
      /*#__PURE__*/ _react["default"].createElement(
        "div",
        {
          ref: tickerContentsRef,
          style: {
            display: "flex",
          },
        },
        children.map(function (item, index) {
          return /*#__PURE__*/ _react["default"].createElement(
            _react["default"].Fragment,
            {
              key: index,
            },
            item
          );
        })
      ),
      /*#__PURE__*/ _react["default"].createElement(
        "div",
        {
          style: {
            display: "flex",
          },
        },
        [].concat(Array(numDupes)).map(function (_) {
          return children.map(function (item, index) {
            return /*#__PURE__*/ _react["default"].createElement(
              _react["default"].Fragment,
              {
                key: index,
              },
              item
            );
          });
        })
      )
    )
  );
};
var _default = Ticker;
exports["default"] = _default;
