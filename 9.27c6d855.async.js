(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{LoXA:function(module,exports,__webpack_require__){eval(`

function ___$insertStyle(css) {
    if (!css || typeof window === 'undefined') {
        return;
    }
    const style = document.createElement('style');
    style.setAttribute('type', 'text/css');
    style.innerHTML = css;
    document.head.appendChild(style);
    return css;
}

Object.defineProperty(exports, '__esModule', { value: true });

var React = __webpack_require__("cDcd");

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

/*! *****************************************************************************\r
Copyright (c) Microsoft Corporation.\r
\r
Permission to use, copy, modify, and/or distribute this software for any\r
purpose with or without fee is hereby granted.\r
\r
THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH\r
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY\r
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,\r
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM\r
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR\r
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR\r
PERFORMANCE OF THIS SOFTWARE.\r
***************************************************************************** */\r
\r
var __assign = function() {\r
    __assign = Object.assign || function __assign(t) {\r
        for (var s, i = 1, n = arguments.length; i < n; i++) {\r
            s = arguments[i];\r
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];\r
        }\r
        return t;\r
    };\r
    return __assign.apply(this, arguments);\r
};

___$insertStyle(".marquee-container {\\n  overflow-x: hidden !important;\\n  display: flex !important;\\n  flex-direction: row !important;\\n  position: relative;\\n  width: 100%;\\n}\\n.marquee-container:hover div {\\n  animation-play-state: var(--pause-on-hover);\\n}\\n.marquee-container:active div {\\n  animation-play-state: var(--pause-on-click);\\n}\\n\\n.overlay {\\n  position: absolute;\\n  width: 100%;\\n  height: 100%;\\n}\\n.overlay::before, .overlay::after {\\n  background: linear-gradient(to right, var(--gradient-color));\\n  content: \\"\\";\\n  height: 100%;\\n  position: absolute;\\n  width: var(--gradient-width);\\n  z-index: 2;\\n}\\n.overlay::after {\\n  right: 0;\\n  top: 0;\\n  transform: rotateZ(180deg);\\n}\\n.overlay::before {\\n  left: 0;\\n  top: 0;\\n}\\n\\n.marquee {\\n  flex: 0 0 auto;\\n  min-width: 100%;\\n  z-index: 1;\\n  display: flex;\\n  flex-direction: row;\\n  align-items: center;\\n  animation: scroll var(--duration) linear var(--delay) var(--iteration-count);\\n  animation-play-state: var(--play);\\n  animation-delay: var(--delay);\\n  animation-direction: var(--direction);\\n}\\n@keyframes scroll {\\n  0% {\\n    transform: translateX(0%);\\n  }\\n  100% {\\n    transform: translateX(-100%);\\n  }\\n}");

var Marquee = function (_a) {\r
    var _b, _c, _d, _e;\r
    var _f = _a.style, style = _f === void 0 ? {} : _f, _g = _a.className, className = _g === void 0 ? "" : _g, _h = _a.play, play = _h === void 0 ? true : _h, _j = _a.pauseOnHover, pauseOnHover = _j === void 0 ? false : _j, _k = _a.pauseOnClick, pauseOnClick = _k === void 0 ? false : _k, _l = _a.direction, direction = _l === void 0 ? "left" : _l, _m = _a.speed, speed = _m === void 0 ? 20 : _m, _o = _a.delay, delay = _o === void 0 ? 0 : _o, _p = _a.loop, loop = _p === void 0 ? 0 : _p, _q = _a.gradient, gradient = _q === void 0 ? true : _q, _r = _a.gradientColor, gradientColor = _r === void 0 ? [255, 255, 255] : _r, _s = _a.gradientWidth, gradientWidth = _s === void 0 ? 200 : _s, onFinish = _a.onFinish, onCycleComplete = _a.onCycleComplete, children = _a.children;\r
    // React Hooks\r
    var _t = React.useState(0), containerWidth = _t[0], setContainerWidth = _t[1];\r
    var _u = React.useState(0), marqueeWidth = _u[0], setMarqueeWidth = _u[1];\r
    var _v = React.useState(false), isMounted = _v[0], setIsMounted = _v[1];\r
    var containerRef = React.useRef(null);\r
    var marqueeRef = React.useRef(null);\r
    React.useEffect(function () {\r
        if (!isMounted)\r
            return;\r
        var calculateWidth = function () {\r
            // Find width of container and width of marquee\r
            if (marqueeRef.current && containerRef.current) {\r
                setContainerWidth(containerRef.current.getBoundingClientRect().width);\r
                setMarqueeWidth(marqueeRef.current.getBoundingClientRect().width);\r
            }\r
        };\r
        calculateWidth();\r
        // Rerender on window resize\r
        window.addEventListener("resize", calculateWidth);\r
        return function () {\r
            window.removeEventListener("resize", calculateWidth);\r
        };\r
    }, [isMounted]);\r
    React.useEffect(function () {\r
        setIsMounted(true);\r
    }, []);\r
    // Gradient color in an unfinished rgba format\r
    var rgbaGradientColor = "rgba(" + gradientColor[0] + ", " + gradientColor[1] + ", " + gradientColor[2];\r
    // Animation duration\r
    var duration = marqueeWidth < containerWidth\r
        ? containerWidth / speed\r
        : marqueeWidth / speed;\r
    return (React__default['default'].createElement(React.Fragment, null, !isMounted ? null : (React__default['default'].createElement("div", { ref: containerRef, style: __assign(__assign({}, style), (_b = {}, _b["--pause-on-hover"] = !play || pauseOnHover ? "paused" : "running", _b["--pause-on-click"] = !play || (pauseOnHover && !pauseOnClick) || pauseOnClick ? "paused" : "running", _b)), className: className + " marquee-container" },\r
        gradient && (React__default['default'].createElement("div", { style: (_c = {},\r
                _c["--gradient-color"] = rgbaGradientColor + ", 1), " + rgbaGradientColor + ", 0)",\r
                _c["--gradient-width"] = typeof gradientWidth === "number"\r
                    ? gradientWidth + "px"\r
                    : gradientWidth,\r
                _c), className: "overlay" })),\r
        React__default['default'].createElement("div", { ref: marqueeRef, style: (_d = {},\r
                _d["--play"] = play ? "running" : "paused",\r
                _d["--direction"] = direction === "left" ? "normal" : "reverse",\r
                _d["--duration"] = duration + "s",\r
                _d["--delay"] = delay + "s",\r
                _d["--iteration-count"] = !!loop ? "" + loop : "infinite",\r
                _d), className: "marquee", onAnimationIteration: onCycleComplete, onAnimationEnd: onFinish }, children),\r
        React__default['default'].createElement("div", { style: (_e = {},\r
                _e["--play"] = play ? "running" : "paused",\r
                _e["--direction"] = direction === "left" ? "normal" : "reverse",\r
                _e["--duration"] = duration + "s",\r
                _e["--delay"] = delay + "s",\r
                _e["--iteration-count"] = !!loop ? "" + loop : "infinite",\r
                _e), className: "marquee", "aria-hidden": "true" }, children)))));\r
};

exports.default = Marquee;
//# sourceMappingURL=index.js.map


//# sourceURL=webpack:///./node_modules/react-fast-marquee/dist/index.js?`)}}]);
