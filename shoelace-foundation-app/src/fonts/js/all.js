
(function () {
  'use strict';

  let _WINDOW = {};
  let _DOCUMENT = {};
  try {
    if (typeof window !== 'undefined') _WINDOW = window;
    if (typeof document !== 'undefined') _DOCUMENT = document;
  } catch (e) {}
  const {
    userAgent = ''
  } = _WINDOW.navigator || {};
  const WINDOW = _WINDOW;
  const DOCUMENT = _DOCUMENT;
  const IS_BROWSER = !!WINDOW.document;
  const IS_DOM = !!DOCUMENT.documentElement && !!DOCUMENT.head && typeof DOCUMENT.addEventListener === 'function' && typeof DOCUMENT.createElement === 'function';
  const IS_IE = ~userAgent.indexOf('MSIE') || ~userAgent.indexOf('Trident/');

  function _defineProperty(e, r, t) {
    return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
      value: t,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[r] = t, e;
  }
  function ownKeys(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      r && (o = o.filter(function (r) {
        return Object.getOwnPropertyDescriptor(e, r).enumerable;
      })), t.push.apply(t, o);
    }
    return t;
  }
  function _objectSpread2(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = null != arguments[r] ? arguments[r] : {};
      r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {
        _defineProperty(e, r, t[r]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
        Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
      });
    }
    return e;
  }
  function _toPrimitive(t, r) {
    if ("object" != typeof t || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
      var i = e.call(t, r || "default");
      if ("object" != typeof i) return i;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
  }
  function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == typeof i ? i : i + "";
  }

  var S = {
      classic: {
        fa: "solid",
        fas: "solid",
        "fa-solid": "solid",
        far: "regular",
        "fa-regular": "regular",
        fal: "light",
        "fa-light": "light",
        fat: "thin",
        "fa-thin": "thin",
        fab: "brands",
        "fa-brands": "brands"
      },
      duotone: {
        fa: "solid",
        fad: "solid",
        "fa-solid": "solid",
        "fa-duotone": "solid",
        fadr: "regular",
        "fa-regular": "regular",
        fadl: "light",
        "fa-light": "light",
        fadt: "thin",
        "fa-thin": "thin"
      },
      sharp: {
        fa: "solid",
        fass: "solid",
        "fa-solid": "solid",
        fasr: "regular",
        "fa-regular": "regular",
        fasl: "light",
        "fa-light": "light",
        fast: "thin",
        "fa-thin": "thin"
      },
      "sharp-duotone": {
        fa: "solid",
        fasds: "solid",
        "fa-solid": "solid",
        fasdr: "regular",
        "fa-regular": "regular",
        fasdl: "light",
        "fa-light": "light",
        fasdt: "thin",
        "fa-thin": "thin"
      }
    };
  var s = "classic";
  var G = {
      classic: {
        900: "fas",
        400: "far",
        normal: "far",
        300: "fal",
        100: "fat"
      },
      duotone: {
        900: "fad",
        400: "fadr",
        300: "fadl",
        100: "fadt"
      },
      sharp: {
        900: "fass",
        400: "fasr",
        300: "fasl",
        100: "fast"
      },
      "sharp-duotone": {
        900: "fasds",
        400: "fasdr",
        300: "fasdl",
        100: "fasdt"
      }
    };
  var xt = {
      classic: {
        solid: "fas",
        regular: "far",
        light: "fal",
        thin: "fat",
        brands: "fab"
      },
      duotone: {
        solid: "fad",
        regular: "fadr",
        light: "fadl",
        thin: "fadt"
      },
      sharp: {
        solid: "fass",
        regular: "fasr",
        light: "fasl",
        thin: "fast"
      },
      "sharp-duotone": {
        solid: "fasds",
        regular: "fasdr",
        light: "fasdl",
        thin: "fasdt"
      }
    };
  var St = {
      kit: {
        fak: "kit",
        "fa-kit": "kit"
      },
      "kit-duotone": {
        fakd: "kit-duotone",
        "fa-kit-duotone": "kit-duotone"
      }
    };
  var Ct = {
    kit: {
      "fa-kit": "fak"
    },
    "kit-duotone": {
      "fa-kit-duotone": "fakd"
    }
  };
  var Wt = {
      kit: {
        fak: "fa-kit"
      },
      "kit-duotone": {
        fakd: "fa-kit-duotone"
      }
    };
  var Et = {
      kit: {
        kit: "fak"
      },
      "kit-duotone": {
        "kit-duotone": "fakd"
      }
    };

  var ua = {
      classic: {
        "fa-brands": "fab",
        "fa-duotone": "fad",
        "fa-light": "fal",
        "fa-regular": "far",
        "fa-solid": "fas",
        "fa-thin": "fat"
      },
      duotone: {
        "fa-regular": "fadr",
        "fa-light": "fadl",
        "fa-thin": "fadt"
      },
      sharp: {
        "fa-solid": "fass",
        "fa-regular": "fasr",
        "fa-light": "fasl",
        "fa-thin": "fast"
      },
      "sharp-duotone": {
        "fa-solid": "fasds",
        "fa-regular": "fasdr",
        "fa-light": "fasdl",
        "fa-thin": "fasdt"
      }
    },
    ga = {
      classic: {
        fab: "fa-brands",
        fad: "fa-duotone",
        fal: "fa-light",
        far: "fa-regular",
        fas: "fa-solid",
        fat: "fa-thin"
      },
      duotone: {
        fadr: "fa-regular",
        fadl: "fa-light",
        fadt: "fa-thin"
      },
      sharp: {
        fass: "fa-solid",
        fasr: "fa-regular",
        fasl: "fa-light",
        fast: "fa-thin"
      },
      "sharp-duotone": {
        fasds: "fa-solid",
        fasdr: "fa-regular",
        fasdl: "fa-light",
        fasdt: "fa-thin"
      }
    };

  const NAMESPACE_IDENTIFIER = '___FONT_AWESOME___';
  const PRODUCTION = (() => {
    try {
      return "production" === 'production';
    } catch (e$$1) {
      return false;
    }
  })();
  function familyProxy(obj) {
    // Defaults to the classic family if family is not available
    return new Proxy(obj, {
      get(target, prop) {
        return prop in target ? target[prop] : target[s];
      }
    });
  }
  const _PREFIX_TO_STYLE = _objectSpread2({}, S);

  // We changed FACSSClassesToStyleId in the icons repo to be canonical and as such, "classic" family does not have any
  // duotone styles.  But we do still need duotone in _PREFIX_TO_STYLE below, so we are manually adding
  // {'fa-duotone': 'duotone'}
  _PREFIX_TO_STYLE[s] = _objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2({}, {
    'fa-duotone': 'duotone'
  }), S[s]), St['kit']), St['kit-duotone']);
  const PREFIX_TO_STYLE = familyProxy(_PREFIX_TO_STYLE);
  const _STYLE_TO_PREFIX = _objectSpread2({}, xt);

  // We changed FAStyleIdToShortPrefixId in the icons repo to be canonical and as such, "classic" family does not have any
  // duotone styles.  But we do still need duotone in _STYLE_TO_PREFIX below, so we are manually adding {duotone: 'fad'}
  _STYLE_TO_PREFIX[s] = _objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2({}, {
    duotone: 'fad'
  }), _STYLE_TO_PREFIX[s]), Et['kit']), Et['kit-duotone']);
  const STYLE_TO_PREFIX = familyProxy(_STYLE_TO_PREFIX);
  const _PREFIX_TO_LONG_STYLE = _objectSpread2({}, ga);
  _PREFIX_TO_LONG_STYLE[s] = _objectSpread2(_objectSpread2({}, _PREFIX_TO_LONG_STYLE[s]), Wt['kit']);
  const PREFIX_TO_LONG_STYLE = familyProxy(_PREFIX_TO_LONG_STYLE);
  const _LONG_STYLE_TO_PREFIX = _objectSpread2({}, ua);
  _LONG_STYLE_TO_PREFIX[s] = _objectSpread2(_objectSpread2({}, _LONG_STYLE_TO_PREFIX[s]), Ct['kit']);
  const LONG_STYLE_TO_PREFIX = familyProxy(_LONG_STYLE_TO_PREFIX);
  const _FONT_WEIGHT_TO_PREFIX = _objectSpread2({}, G);
  const FONT_WEIGHT_TO_PREFIX = familyProxy(_FONT_WEIGHT_TO_PREFIX);

  function bunker(fn) {
    try {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }
      fn(...args);
    } catch (e) {
      if (!PRODUCTION) {
        throw e;
      }
    }
  }

  const w = WINDOW || {};
  if (!w[NAMESPACE_IDENTIFIER]) w[NAMESPACE_IDENTIFIER] = {};
  if (!w[NAMESPACE_IDENTIFIER].styles) w[NAMESPACE_IDENTIFIER].styles = {};
  if (!w[NAMESPACE_IDENTIFIER].hooks) w[NAMESPACE_IDENTIFIER].hooks = {};
  if (!w[NAMESPACE_IDENTIFIER].shims) w[NAMESPACE_IDENTIFIER].shims = [];
  var namespace = w[NAMESPACE_IDENTIFIER];

  function normalizeIcons(icons) {
    return Object.keys(icons).reduce((acc, iconName) => {
      const icon = icons[iconName];
      const expanded = !!icon.icon;
      if (expanded) {
        acc[icon.iconName] = icon.icon;
      } else {
        acc[iconName] = icon;
      }
      return acc;
    }, {});
  }
  function defineIcons(prefix, icons) {
    let params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    const {
      skipHooks = false
    } = params;
    const normalized = normalizeIcons(icons);
    if (typeof namespace.hooks.addPack === 'function' && !skipHooks) {
      namespace.hooks.addPack(prefix, normalizeIcons(icons));
    } else {
      namespace.styles[prefix] = _objectSpread2(_objectSpread2({}, namespace.styles[prefix] || {}), normalized);
    }

    /**
     * Font Awesome 4 used the prefix of `fa` for all icons. With the introduction
     * of new styles we needed to differentiate between them. Prefix `fa` is now an alias
     * for `fas` so we'll ease the upgrade process for our users by automatically defining
     * this as well.
     */
    if (prefix === 'fas') {
      defineIcons('fa', icons);
    }
  }

  var icons = {
    
    "facebook": [512,512,["62000"],"f09a","M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"],
    "instagram": [448,512,[],"f16d","M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"],
    "linkedin": [448,512,[],"f08c","M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"],
    "pinterest": [496,512,[],"f0d2","M496 256c0 137-111 248-248 248-25.6 0-50.2-3.9-73.4-11.1 10.1-16.5 25.2-43.5 30.8-65 3-11.6 15.4-59 15.4-59 8.1 15.4 31.7 28.5 56.8 28.5 74.8 0 128.7-68.8 128.7-154.3 0-81.9-66.9-143.2-152.9-143.2-107 0-163.9 71.8-163.9 150.1 0 36.4 19.4 81.7 50.3 96.1 4.7 2.2 7.2 1.2 8.3-3.3.8-3.4 5-20.3 6.9-28.1.6-2.5.3-4.7-1.7-7.1-10.1-12.5-18.3-35.3-18.3-56.6 0-54.7 41.4-107.6 112-107.6 60.9 0 103.6 41.5 103.6 100.9 0 67.1-33.9 113.6-78 113.6-24.3 0-42.6-20.1-36.7-44.8 7-29.5 20.5-61.3 20.5-82.6 0-19-10.2-34.9-31.4-34.9-24.9 0-44.9 25.7-44.9 60.2 0 22 7.4 36.8 7.4 36.8s-24.5 103.8-29 123.2c-5 21.4-3 51.6-.9 71.2C65.4 450.9 0 361.1 0 256 0 119 111 8 248 8s248 111 248 248z"],
    "x-twitter": [512,512,[],"e61b","M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"],
    "youtube": [576,512,["61802"],"f167","M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"]

  };
  var prefixes = [null    ,'fab',
    ,'fa-brands'
];
  bunker(() => {
    for (const prefix of prefixes) {
      if (!prefix) continue;
      defineIcons(prefix, icons);
    }
  });

}());

(function () {
  'use strict';

  let _WINDOW = {};
  let _DOCUMENT = {};
  try {
    if (typeof window !== 'undefined') _WINDOW = window;
    if (typeof document !== 'undefined') _DOCUMENT = document;
  } catch (e) {}
  const {
    userAgent = ''
  } = _WINDOW.navigator || {};
  const WINDOW = _WINDOW;
  const DOCUMENT = _DOCUMENT;
  const IS_BROWSER = !!WINDOW.document;
  const IS_DOM = !!DOCUMENT.documentElement && !!DOCUMENT.head && typeof DOCUMENT.addEventListener === 'function' && typeof DOCUMENT.createElement === 'function';
  const IS_IE = ~userAgent.indexOf('MSIE') || ~userAgent.indexOf('Trident/');

  function _defineProperty(e, r, t) {
    return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
      value: t,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[r] = t, e;
  }
  function ownKeys(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      r && (o = o.filter(function (r) {
        return Object.getOwnPropertyDescriptor(e, r).enumerable;
      })), t.push.apply(t, o);
    }
    return t;
  }
  function _objectSpread2(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = null != arguments[r] ? arguments[r] : {};
      r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {
        _defineProperty(e, r, t[r]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
        Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
      });
    }
    return e;
  }
  function _toPrimitive(t, r) {
    if ("object" != typeof t || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
      var i = e.call(t, r || "default");
      if ("object" != typeof i) return i;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
  }
  function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == typeof i ? i : i + "";
  }

  var S = {
      classic: {
        fa: "solid",
        fas: "solid",
        "fa-solid": "solid",
        far: "regular",
        "fa-regular": "regular",
        fal: "light",
        "fa-light": "light",
        fat: "thin",
        "fa-thin": "thin",
        fab: "brands",
        "fa-brands": "brands"
      },
      duotone: {
        fa: "solid",
        fad: "solid",
        "fa-solid": "solid",
        "fa-duotone": "solid",
        fadr: "regular",
        "fa-regular": "regular",
        fadl: "light",
        "fa-light": "light",
        fadt: "thin",
        "fa-thin": "thin"
      },
      sharp: {
        fa: "solid",
        fass: "solid",
        "fa-solid": "solid",
        fasr: "regular",
        "fa-regular": "regular",
        fasl: "light",
        "fa-light": "light",
        fast: "thin",
        "fa-thin": "thin"
      },
      "sharp-duotone": {
        fa: "solid",
        fasds: "solid",
        "fa-solid": "solid",
        fasdr: "regular",
        "fa-regular": "regular",
        fasdl: "light",
        "fa-light": "light",
        fasdt: "thin",
        "fa-thin": "thin"
      }
    };
  var s = "classic";
  var G = {
      classic: {
        900: "fas",
        400: "far",
        normal: "far",
        300: "fal",
        100: "fat"
      },
      duotone: {
        900: "fad",
        400: "fadr",
        300: "fadl",
        100: "fadt"
      },
      sharp: {
        900: "fass",
        400: "fasr",
        300: "fasl",
        100: "fast"
      },
      "sharp-duotone": {
        900: "fasds",
        400: "fasdr",
        300: "fasdl",
        100: "fasdt"
      }
    };
  var xt = {
      classic: {
        solid: "fas",
        regular: "far",
        light: "fal",
        thin: "fat",
        brands: "fab"
      },
      duotone: {
        solid: "fad",
        regular: "fadr",
        light: "fadl",
        thin: "fadt"
      },
      sharp: {
        solid: "fass",
        regular: "fasr",
        light: "fasl",
        thin: "fast"
      },
      "sharp-duotone": {
        solid: "fasds",
        regular: "fasdr",
        light: "fasdl",
        thin: "fasdt"
      }
    };
  var St = {
      kit: {
        fak: "kit",
        "fa-kit": "kit"
      },
      "kit-duotone": {
        fakd: "kit-duotone",
        "fa-kit-duotone": "kit-duotone"
      }
    };
  var Ct = {
    kit: {
      "fa-kit": "fak"
    },
    "kit-duotone": {
      "fa-kit-duotone": "fakd"
    }
  };
  var Wt = {
      kit: {
        fak: "fa-kit"
      },
      "kit-duotone": {
        fakd: "fa-kit-duotone"
      }
    };
  var Et = {
      kit: {
        kit: "fak"
      },
      "kit-duotone": {
        "kit-duotone": "fakd"
      }
    };

  var ua = {
      classic: {
        "fa-brands": "fab",
        "fa-duotone": "fad",
        "fa-light": "fal",
        "fa-regular": "far",
        "fa-solid": "fas",
        "fa-thin": "fat"
      },
      duotone: {
        "fa-regular": "fadr",
        "fa-light": "fadl",
        "fa-thin": "fadt"
      },
      sharp: {
        "fa-solid": "fass",
        "fa-regular": "fasr",
        "fa-light": "fasl",
        "fa-thin": "fast"
      },
      "sharp-duotone": {
        "fa-solid": "fasds",
        "fa-regular": "fasdr",
        "fa-light": "fasdl",
        "fa-thin": "fasdt"
      }
    },
    ga = {
      classic: {
        fab: "fa-brands",
        fad: "fa-duotone",
        fal: "fa-light",
        far: "fa-regular",
        fas: "fa-solid",
        fat: "fa-thin"
      },
      duotone: {
        fadr: "fa-regular",
        fadl: "fa-light",
        fadt: "fa-thin"
      },
      sharp: {
        fass: "fa-solid",
        fasr: "fa-regular",
        fasl: "fa-light",
        fast: "fa-thin"
      },
      "sharp-duotone": {
        fasds: "fa-solid",
        fasdr: "fa-regular",
        fasdl: "fa-light",
        fasdt: "fa-thin"
      }
    };

  const NAMESPACE_IDENTIFIER = '___FONT_AWESOME___';
  const PRODUCTION = (() => {
    try {
      return "production" === 'production';
    } catch (e$$1) {
      return false;
    }
  })();
  function familyProxy(obj) {
    // Defaults to the classic family if family is not available
    return new Proxy(obj, {
      get(target, prop) {
        return prop in target ? target[prop] : target[s];
      }
    });
  }
  const _PREFIX_TO_STYLE = _objectSpread2({}, S);

  // We changed FACSSClassesToStyleId in the icons repo to be canonical and as such, "classic" family does not have any
  // duotone styles.  But we do still need duotone in _PREFIX_TO_STYLE below, so we are manually adding
  // {'fa-duotone': 'duotone'}
  _PREFIX_TO_STYLE[s] = _objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2({}, {
    'fa-duotone': 'duotone'
  }), S[s]), St['kit']), St['kit-duotone']);
  const PREFIX_TO_STYLE = familyProxy(_PREFIX_TO_STYLE);
  const _STYLE_TO_PREFIX = _objectSpread2({}, xt);

  // We changed FAStyleIdToShortPrefixId in the icons repo to be canonical and as such, "classic" family does not have any
  // duotone styles.  But we do still need duotone in _STYLE_TO_PREFIX below, so we are manually adding {duotone: 'fad'}
  _STYLE_TO_PREFIX[s] = _objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2({}, {
    duotone: 'fad'
  }), _STYLE_TO_PREFIX[s]), Et['kit']), Et['kit-duotone']);
  const STYLE_TO_PREFIX = familyProxy(_STYLE_TO_PREFIX);
  const _PREFIX_TO_LONG_STYLE = _objectSpread2({}, ga);
  _PREFIX_TO_LONG_STYLE[s] = _objectSpread2(_objectSpread2({}, _PREFIX_TO_LONG_STYLE[s]), Wt['kit']);
  const PREFIX_TO_LONG_STYLE = familyProxy(_PREFIX_TO_LONG_STYLE);
  const _LONG_STYLE_TO_PREFIX = _objectSpread2({}, ua);
  _LONG_STYLE_TO_PREFIX[s] = _objectSpread2(_objectSpread2({}, _LONG_STYLE_TO_PREFIX[s]), Ct['kit']);
  const LONG_STYLE_TO_PREFIX = familyProxy(_LONG_STYLE_TO_PREFIX);
  const _FONT_WEIGHT_TO_PREFIX = _objectSpread2({}, G);
  const FONT_WEIGHT_TO_PREFIX = familyProxy(_FONT_WEIGHT_TO_PREFIX);

  function bunker(fn) {
    try {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }
      fn(...args);
    } catch (e) {
      if (!PRODUCTION) {
        throw e;
      }
    }
  }

  const w = WINDOW || {};
  if (!w[NAMESPACE_IDENTIFIER]) w[NAMESPACE_IDENTIFIER] = {};
  if (!w[NAMESPACE_IDENTIFIER].styles) w[NAMESPACE_IDENTIFIER].styles = {};
  if (!w[NAMESPACE_IDENTIFIER].hooks) w[NAMESPACE_IDENTIFIER].hooks = {};
  if (!w[NAMESPACE_IDENTIFIER].shims) w[NAMESPACE_IDENTIFIER].shims = [];
  var namespace = w[NAMESPACE_IDENTIFIER];

  function normalizeIcons(icons) {
    return Object.keys(icons).reduce((acc, iconName) => {
      const icon = icons[iconName];
      const expanded = !!icon.icon;
      if (expanded) {
        acc[icon.iconName] = icon.icon;
      } else {
        acc[iconName] = icon;
      }
      return acc;
    }, {});
  }
  function defineIcons(prefix, icons) {
    let params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    const {
      skipHooks = false
    } = params;
    const normalized = normalizeIcons(icons);
    if (typeof namespace.hooks.addPack === 'function' && !skipHooks) {
      namespace.hooks.addPack(prefix, normalizeIcons(icons));
    } else {
      namespace.styles[prefix] = _objectSpread2(_objectSpread2({}, namespace.styles[prefix] || {}), normalized);
    }

    /**
     * Font Awesome 4 used the prefix of `fa` for all icons. With the introduction
     * of new styles we needed to differentiate between them. Prefix `fa` is now an alias
     * for `fas` so we'll ease the upgrade process for our users by automatically defining
     * this as well.
     */
    if (prefix === 'fas') {
      defineIcons('fa', icons);
    }
  }

  var icons = {
    
    "address-card": [576,512,["62140","contact-card","vcard"],"f2bb","M512 64c17.7 0 32 14.3 32 32l0 320c0 17.7-14.3 32-32 32L64 448c-17.7 0-32-14.3-32-32L32 96c0-17.7 14.3-32 32-32l448 0zM64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l448 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zm96 160a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm96 0a64 64 0 1 0 -128 0 64 64 0 1 0 128 0zM112 368c0-26.5 21.5-48 48-48l64 0c26.5 0 48 21.5 48 48c0 8.8 7.2 16 16 16s16-7.2 16-16c0-44.2-35.8-80-80-80l-64 0c-44.2 0-80 35.8-80 80c0 8.8 7.2 16 16 16s16-7.2 16-16zM352 160c-8.8 0-16 7.2-16 16s7.2 16 16 16l128 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-128 0zm0 64c-8.8 0-16 7.2-16 16s7.2 16 16 16l128 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-128 0zm0 64c-8.8 0-16 7.2-16 16s7.2 16 16 16l128 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-128 0z"],
    "angle-down": [448,512,["8964"],"f107","M212.7 363.3c6.2 6.2 16.4 6.2 22.6 0l160-160c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0L224 329.4 75.3 180.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l160 160z"],
    "angle-left": [320,512,["8249"],"f104","M52.7 267.3c-6.2-6.2-6.2-16.4 0-22.6l160-160c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6L86.6 256 235.3 404.7c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0l-160-160z"],
    "angle-right": [320,512,["8250"],"f105","M267.3 244.7c6.2 6.2 6.2 16.4 0 22.6l-160 160c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6L233.4 256 84.7 107.3c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0l160 160z"],
    "angle-up": [448,512,["8963"],"f106","M212.7 148.7c6.2-6.2 16.4-6.2 22.6 0l160 160c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0L224 182.6 75.3 331.3c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l160-160z"],
    "arrow-down": [384,512,["8595"],"f063","M180.7 475.3c6.2 6.2 16.4 6.2 22.6 0l176-176c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0L208 425.4 208 48c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 377.4L27.3 276.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l176 176z"],
    "arrow-down-long": [384,512,["long-arrow-down"],"f175","M180.7 507.3c6.2 6.2 16.4 6.2 22.6 0l144-144c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0L208 457.4 208 16c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 441.4L59.3 340.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l144 144z"],
    "arrow-left": [448,512,["8592"],"f060","M4.7 244.7c-6.2 6.2-6.2 16.4 0 22.6l176 176c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6L54.6 272 432 272c8.8 0 16-7.2 16-16s-7.2-16-16-16L54.6 240 203.3 91.3c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0l-176 176z"],
    "arrow-left-long": [512,512,["long-arrow-left"],"f177","M4.7 244.7c-6.2 6.2-6.2 16.4 0 22.6l144 144c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6L54.6 272 496 272c8.8 0 16-7.2 16-16s-7.2-16-16-16L54.6 240 171.3 123.3c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0l-144 144z"],
    "arrow-right": [448,512,["8594"],"f061","M443.3 267.3c6.2-6.2 6.2-16.4 0-22.6l-176-176c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6L393.4 240 16 240c-8.8 0-16 7.2-16 16s7.2 16 16 16l377.4 0L244.7 420.7c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l176-176z"],
    "arrow-right-long": [512,512,["long-arrow-right"],"f178","M507.3 267.3c6.2-6.2 6.2-16.4 0-22.6l-144-144c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6L457.4 240 16 240c-8.8 0-16 7.2-16 16s7.2 16 16 16l441.4 0L340.7 388.7c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l144-144z"],
    "arrow-up": [384,512,["8593"],"f062","M203.3 36.7c-6.2-6.2-16.4-6.2-22.6 0l-176 176c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0L176 86.6 176 464c0 8.8 7.2 16 16 16s16-7.2 16-16l0-377.4L356.7 235.3c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-176-176z"],
    "arrow-up-long": [384,512,["long-arrow-up"],"f176","M203.3 4.7c-6.2-6.2-16.4-6.2-22.6 0l-144 144c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0L176 54.6 176 496c0 8.8 7.2 16 16 16s16-7.2 16-16l0-441.4L324.7 171.3c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-144-144z"],
    "arrow-up-right-from-square": [512,512,["external-link"],"f08e","M336 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l121.4 0L212.7 276.7c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0L480 54.6 480 176c0 8.8 7.2 16 16 16s16-7.2 16-16l0-160c0-8.8-7.2-16-16-16L336 0zM64 32C28.7 32 0 60.7 0 96L0 448c0 35.3 28.7 64 64 64l352 0c35.3 0 64-28.7 64-64l0-144c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 144c0 17.7-14.3 32-32 32L64 480c-17.7 0-32-14.3-32-32L32 96c0-17.7 14.3-32 32-32l144 0c8.8 0 16-7.2 16-16s-7.2-16-16-16L64 32z"],
    "bars": [448,512,["navicon"],"f0c9","M0 80c0-8.8 7.2-16 16-16l416 0c8.8 0 16 7.2 16 16s-7.2 16-16 16L16 96C7.2 96 0 88.8 0 80zM0 240c0-8.8 7.2-16 16-16l416 0c8.8 0 16 7.2 16 16s-7.2 16-16 16L16 256c-8.8 0-16-7.2-16-16zM448 400c0 8.8-7.2 16-16 16L16 416c-8.8 0-16-7.2-16-16s7.2-16 16-16l416 0c8.8 0 16 7.2 16 16z"],
    "bell": [448,512,["61602","128276"],"f0f3","M208 16c0-8.8 7.2-16 16-16s16 7.2 16 16l0 16.8c80.9 8 144 76.2 144 159.2l0 29.1c0 43.7 17.4 85.6 48.3 116.6l2.8 2.8c8.3 8.3 13 19.6 13 31.3c0 24.5-19.8 44.3-44.3 44.3L44.3 416C19.8 416 0 396.2 0 371.7c0-11.7 4.7-23 13-31.3l2.8-2.8C46.6 306.7 64 264.8 64 221.1L64 192c0-83 63.1-151.2 144-159.2L208 16zm16 48C153.3 64 96 121.3 96 192l0 29.1c0 52.2-20.7 102.3-57.7 139.2L35.6 363c-2.3 2.3-3.6 5.4-3.6 8.7c0 6.8 5.5 12.3 12.3 12.3l359.4 0c6.8 0 12.3-5.5 12.3-12.3c0-3.3-1.3-6.4-3.6-8.7l-2.8-2.8c-36.9-36.9-57.7-87-57.7-139.2l0-29.1c0-70.7-57.3-128-128-128zM193.8 458.7c4.4 12.4 16.3 21.3 30.2 21.3s25.8-8.9 30.2-21.3c2.9-8.3 12.1-12.7 20.4-9.8s12.7 12.1 9.8 20.4C275.6 494.2 251.9 512 224 512s-51.6-17.8-60.4-42.7c-2.9-8.3 1.4-17.5 9.8-20.4s17.5 1.4 20.4 9.8z"],
    "bookmark": [384,512,["61591","128278"],"f02e","M0 48C0 21.5 21.5 0 48 0L336 0c26.5 0 48 21.5 48 48l0 441.9c0 12.2-9.9 22.1-22.1 22.1c-4.4 0-8.6-1.3-12.3-3.7L192 403.2 34.4 508.3c-3.6 2.4-7.9 3.7-12.3 3.7C9.9 512 0 502.1 0 489.9L0 48zM48 32c-8.8 0-16 7.2-16 16l0 423.4L183.1 370.7c5.4-3.6 12.4-3.6 17.8 0L352 471.4 352 48c0-8.8-7.2-16-16-16L48 32z"],
    "box": [448,512,["128230"],"f466","M342.4 64L240 64l0 96 165.9 0L371.7 83c-5.1-11.6-16.6-19-29.2-19zM416 192l-176 0-32 0L32 192l0 224c0 17.7 14.3 32 32 32l320 0c17.7 0 32-14.3 32-32l0-224zM42.1 160L208 160l0-96L105.6 64c-12.6 0-24.1 7.4-29.2 19L42.1 160zM342.4 32c25.3 0 48.2 14.9 58.5 38l41.6 93.6c3.6 8.2 5.5 17 5.5 26L448 416c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 189.6c0-9 1.9-17.8 5.5-26L47.1 70c10.3-23.1 33.2-38 58.5-38l236.8 0z"],
    "box-open": [640,512,[],"f49e","M80.4 49.5L320 77.2 559.6 49.5c14.1-1.6 27.5 6.2 33.1 19.2l32 74.7c9.8 22.9-3.5 49.1-27.8 54.7L437.7 234.8c-18.9 4.4-38.6-3.1-49.9-18.9L320 120.9l-67.9 95.1c-11.3 15.8-30.9 23.2-49.9 18.9L43 198c-24.3-5.6-37.6-31.8-27.8-54.7l32-74.7c5.6-13 19-20.8 33.1-19.2zM76.7 81.3l-32 74.7c-2 4.6 .7 9.8 5.6 10.9l159.2 36.7c6.3 1.5 12.9-1 16.6-6.3l65.1-91.2L76.7 81.3zM544 236.7l32-9.1 0 151c0 22-15 41.2-36.4 46.6l-208 52c-7.6 1.9-15.6 1.9-23.3 0l-208-52C79 419.7 64 400.6 64 378.5l0-151 32 9.1 0 141.8c0 7.3 5 13.7 12.1 15.5L304 443l0-235c0-8.8 7.2-16 16-16s16 7.2 16 16l0 235 195.9-49c7.1-1.8 12.1-8.2 12.1-15.5l0-141.8zM348.8 106.1l65.1 91.2c3.8 5.3 10.3 7.7 16.6 6.3l159.2-36.7c4.9-1.1 7.5-6.4 5.6-10.9l-32-74.7L348.8 106.1z"],
    "briefcase": [512,512,["128188"],"f0b1","M160 48l0 48 192 0 0-48c0-8.8-7.2-16-16-16L176 32c-8.8 0-16 7.2-16 16zM128 96l0-48c0-26.5 21.5-48 48-48L336 0c26.5 0 48 21.5 48 48l0 48 64 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 160c0-35.3 28.7-64 64-64l64 0zm240 32l-224 0-80 0c-17.7 0-32 14.3-32 32l0 96 144 0 32 0 96 0 32 0 144 0 0-96c0-17.7-14.3-32-32-32l-80 0zM480 288l-144 0 0 48c0 17.7-14.3 32-32 32l-96 0c-17.7 0-32-14.3-32-32l0-48L32 288l0 128c0 17.7 14.3 32 32 32l384 0c17.7 0 32-14.3 32-32l0-128zm-272 0l0 48 96 0 0-48-96 0z"],
    "browser": [512,512,["128468"],"f37e","M160 64l0 64 320 0 0-32c0-17.7-14.3-32-32-32L160 64zm-32 0L64 64C46.3 64 32 78.3 32 96l0 32 96 0 0-64zM32 160l0 256c0 17.7 14.3 32 32 32l384 0c17.7 0 32-14.3 32-32l0-256-336 0L32 160zM0 96C0 60.7 28.7 32 64 32l384 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96z"],
    "calendar": [448,512,["128198","128197"],"f133","M112 0c8.8 0 16 7.2 16 16l0 48 192 0 0-48c0-8.8 7.2-16 16-16s16 7.2 16 16l0 48 32 0c35.3 0 64 28.7 64 64l0 32 0 32 0 256c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 192l0-32 0-32C0 92.7 28.7 64 64 64l32 0 0-48c0-8.8 7.2-16 16-16zM416 192L32 192l0 256c0 17.7 14.3 32 32 32l320 0c17.7 0 32-14.3 32-32l0-256zM384 96L64 96c-17.7 0-32 14.3-32 32l0 32 384 0 0-32c0-17.7-14.3-32-32-32z"],
    "caret-down": [320,512,[],"f0d7","M165.6 349.8c-1.4 1.3-3.5 2.2-5.6 2.2s-4.2-.8-5.6-2.2L34.2 236.3c-1.4-1.3-2.2-3.2-2.2-5.2c0-3.9 3.2-7.1 7.1-7.1l241.7 0c3.9 0 7.1 3.2 7.1 7.1c0 2-.8 3.8-2.2 5.2L165.6 349.8zm22 23.3L307.7 259.6c7.8-7.4 12.3-17.7 12.3-28.4c0-21.6-17.5-39.1-39.1-39.1L39.1 192C17.5 192 0 209.5 0 231.1c0 10.8 4.4 21.1 12.3 28.5L132.4 373.1c7.4 7 17.3 10.9 27.6 10.9s20.1-3.9 27.6-10.9z"],
    "caret-left": [256,512,[],"f0d9","M34.2 261.6c-1.3-1.4-2.2-3.5-2.2-5.6s.8-4.2 2.2-5.6L147.7 130.2c1.3-1.4 3.2-2.2 5.2-2.2c3.9 0 7.1 3.2 7.1 7.1l0 241.7c0 3.9-3.2 7.1-7.1 7.1c-2 0-3.8-.8-5.2-2.2L34.2 261.6zm-23.3 22L124.4 403.7c7.4 7.8 17.7 12.3 28.4 12.3c21.6 0 39.1-17.5 39.1-39.1l0-241.7c0-21.6-17.5-39.1-39.1-39.1c-10.8 0-21.1 4.4-28.4 12.3L10.9 228.4C3.9 235.9 0 245.8 0 256s3.9 20.1 10.9 27.6z"],
    "caret-right": [256,512,[],"f0da","M221.8 250.4c1.3 1.4 2.2 3.5 2.2 5.6s-.8 4.2-2.2 5.6L108.3 381.8c-1.3 1.4-3.2 2.2-5.2 2.2c-3.9 0-7.1-3.2-7.1-7.1l0-241.7c0-3.9 3.2-7.1 7.1-7.1c2 0 3.8 .8 5.2 2.2L221.8 250.4zm23.3-22L131.6 108.3c-7.4-7.8-17.7-12.3-28.4-12.3C81.5 96 64 113.5 64 135.1l0 241.7c0 21.6 17.5 39.1 39.1 39.1c10.8 0 21.1-4.4 28.5-12.3L245.1 283.6c7-7.4 10.9-17.3 10.9-27.6s-3.9-20.1-10.9-27.6z"],
    "caret-up": [320,512,[],"f0d8","M154.4 162.2c1.4-1.3 3.5-2.2 5.6-2.2s4.2 .8 5.6 2.2L285.8 275.7c1.4 1.3 2.2 3.2 2.2 5.2c0 3.9-3.2 7.1-7.1 7.1L39.1 288c-3.9 0-7.1-3.2-7.1-7.1c0-2 .8-3.8 2.2-5.2L154.4 162.2zm-22-23.3L12.3 252.4C4.4 259.8 0 270.1 0 280.9C0 302.5 17.5 320 39.1 320l241.7 0c21.6 0 39.1-17.5 39.1-39.1c0-10.8-4.4-21.1-12.3-28.4L187.6 138.9c-7.4-7-17.3-10.9-27.6-10.9s-20.1 3.9-27.6 10.9z"],
    "cart-circle-exclamation": [640,512,[],"e3f2","M16 0C7.2 0 0 7.2 0 16s7.2 16 16 16l37.9 0c7.6 0 14.2 5.3 15.7 12.8l58.9 288c6.1 29.8 32.3 51.2 62.7 51.2l129.5 0c-.5-5.3-.7-10.6-.7-16s.2-10.7 .7-16l-129.5 0c-15.2 0-28.3-10.7-31.4-25.6L152 288l187.2 0c5.9-11.4 12.9-22.2 21-32l-214.8 0L106.1 64l433.4 0L507.4 192.4c10.9 .7 21.5 2.4 31.7 5L570.6 71.8c5-20.2-10.2-39.8-31-39.8L99.1 32C92.5 13 74.4 0 53.9 0L16 0zM168 456a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm80 0a56 56 0 1 0 -112 0 56 56 0 1 0 112 0zm136-88a112 112 0 1 1 224 0 112 112 0 1 1 -224 0zm256 0a144 144 0 1 0 -288 0 144 144 0 1 0 288 0zM496 448a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm0-160c-8.8 0-16 7.2-16 16l0 64c0 8.8 7.2 16 16 16s16-7.2 16-16l0-64c0-8.8-7.2-16-16-16z"],
    "cart-circle-plus": [640,512,[],"e3f3","M16 0C7.2 0 0 7.2 0 16s7.2 16 16 16l37.9 0c7.6 0 14.2 5.3 15.7 12.8l58.9 288c6.1 29.8 32.3 51.2 62.7 51.2l129.5 0c-.5-5.3-.7-10.6-.7-16s.2-10.7 .7-16l-129.5 0c-15.2 0-28.3-10.7-31.4-25.6L152 288l187.2 0c5.9-11.4 12.9-22.2 21-32l-214.8 0L106.1 64l433.4 0L507.4 192.4c10.9 .7 21.5 2.4 31.7 5L570.6 71.8c5-20.2-10.2-39.8-31-39.8L99.1 32C92.5 13 74.4 0 53.9 0L16 0zM168 456a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm80 0a56 56 0 1 0 -112 0 56 56 0 1 0 112 0zm136-88a112 112 0 1 1 224 0 112 112 0 1 1 -224 0zm256 0a144 144 0 1 0 -288 0 144 144 0 1 0 288 0zM512 304c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 48-48 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l48 0 0 48c0 8.8 7.2 16 16 16s16-7.2 16-16l0-48 48 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-48 0 0-48z"],
    "cart-plus": [576,512,[],"f217","M16 0C7.2 0 0 7.2 0 16s7.2 16 16 16l37.9 0c7.6 0 14.2 5.3 15.7 12.8l58.9 288c6.1 29.8 32.3 51.2 62.7 51.2L496 384c8.8 0 16-7.2 16-16s-7.2-16-16-16l-304.8 0c-15.2 0-28.3-10.7-31.4-25.6L152 288l314.6 0c29.4 0 55-20 62.1-48.5L575.5 51.9c2.1-8.6-3.1-17.3-11.6-19.4s-17.3 3.1-19.4 11.6L497.6 231.8C494 246 481.2 256 466.5 256l-321.1 0L100.9 38.4C96.3 16 76.7 0 53.9 0L16 0zM168 456a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm80 0a56 56 0 1 0 -112 0 56 56 0 1 0 112 0zm200-24a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm0 80a56 56 0 1 0 0-112 56 56 0 1 0 0 112zM240 128c0 8.8 7.2 16 16 16l48 0 0 48c0 8.8 7.2 16 16 16s16-7.2 16-16l0-48 48 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-48 0 0-48c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 48-48 0c-8.8 0-16 7.2-16 16z"],
    "cart-shopping": [576,512,["128722","shopping-cart"],"f07a","M16 0C7.2 0 0 7.2 0 16s7.2 16 16 16l37.9 0c7.6 0 14.2 5.3 15.7 12.8l58.9 288c6.1 29.8 32.3 51.2 62.7 51.2L496 384c8.8 0 16-7.2 16-16s-7.2-16-16-16l-304.8 0c-15.2 0-28.3-10.7-31.4-25.6L152 288l314.6 0c29.4 0 55-20 62.1-48.5L570.6 71.8c5-20.2-10.2-39.8-31-39.8L99.1 32C92.5 13 74.4 0 53.9 0L16 0zm90.1 64l433.4 0L497.6 231.8C494 246 481.2 256 466.5 256l-321.1 0L106.1 64zM168 456a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm80 0a56 56 0 1 0 -112 0 56 56 0 1 0 112 0zm200-24a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm0 80a56 56 0 1 0 0-112 56 56 0 1 0 0 112z"],
    "cart-shopping-fast": [640,512,[],"e0dc","M64 16C64 7.2 71.2 0 80 0l37.9 0c20.6 0 38.6 13 45.3 32l440.4 0c20.8 0 36.1 19.6 31 39.8L592.6 239.5C585.5 268 559.9 288 530.5 288L216 288l7.9 38.4c3 14.9 16.1 25.6 31.4 25.6L560 352c8.8 0 16 7.2 16 16s-7.2 16-16 16l-304.8 0c-30.4 0-56.6-21.4-62.7-51.2l-58.9-288C132 37.3 125.5 32 117.9 32L80 32c-8.8 0-16-7.2-16-16zM530.5 256c14.7 0 27.5-10 31-24.2L603.5 64 170.1 64l39.3 192 321.1 0zM256 480a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm0-80a56 56 0 1 1 0 112 56 56 0 1 1 0-112zm280 56a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zm-80 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zM16 128l96 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-96 0c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64l112 0c8.8 0 16 7.2 16 16s-7.2 16-16 16L16 224c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64l128 0c8.8 0 16 7.2 16 16s-7.2 16-16 16L16 288c-8.8 0-16-7.2-16-16s7.2-16 16-16z"],
    "chart-line": [512,512,["line-chart"],"f201","M32 48c0-8.8-7.2-16-16-16S0 39.2 0 48L0 400c0 44.2 35.8 80 80 80l416 0c8.8 0 16-7.2 16-16s-7.2-16-16-16L80 448c-26.5 0-48-21.5-48-48L32 48zM475.3 155.3c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0L320 265.4l-84.7-84.7c-6.2-6.2-16.4-6.2-22.6 0l-112 112c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0L224 214.6l84.7 84.7c6.2 6.2 16.4 6.2 22.6 0l144-144z"],
    "check": [448,512,["10004","10003"],"f00c","M443.3 100.7c6.2 6.2 6.2 16.4 0 22.6l-272 272c-6.2 6.2-16.4 6.2-22.6 0l-144-144c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0L160 361.4 420.7 100.7c6.2-6.2 16.4-6.2 22.6 0z"],
    "chevron-down": [512,512,[],"f078","M267.3 395.3c-6.2 6.2-16.4 6.2-22.6 0l-192-192c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0L256 361.4 436.7 180.7c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6l-192 192z"],
    "chevron-left": [320,512,["9001"],"f053","M20.7 267.3c-6.2-6.2-6.2-16.4 0-22.6l192-192c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6L54.6 256 235.3 436.7c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0l-192-192z"],
    "chevron-right": [320,512,["9002"],"f054","M299.3 244.7c6.2 6.2 6.2 16.4 0 22.6l-192 192c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6L265.4 256 84.7 75.3c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0l192 192z"],
    "chevron-up": [512,512,[],"f077","M244.7 116.7c6.2-6.2 16.4-6.2 22.6 0l192 192c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0L256 150.6 75.3 331.3c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l192-192z"],
    "circle": [512,512,["61915","61708","11044","9899","9898","9679","128996","128995","128994","128993","128992","128309","128308"],"f111","M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448zm0 480A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"],
    "circle-check": [512,512,["61533","check-circle"],"f058","M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448zm0 480A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM363.3 203.3c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0L224 297.4l-52.7-52.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l64 64c6.2 6.2 16.4 6.2 22.6 0l128-128z"],
    "circle-chevron-down": [512,512,["chevron-circle-down"],"f13a","M256 480a224 224 0 1 1 0-448 224 224 0 1 1 0 448zM256 0a256 256 0 1 0 0 512A256 256 0 1 0 256 0zM132.7 235.3l112 112c6.2 6.2 16.4 6.2 22.6 0l112-112c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0L256 313.4 155.3 212.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6z"],
    "circle-chevron-left": [512,512,["chevron-circle-left"],"f137","M32 256a224 224 0 1 1 448 0A224 224 0 1 1 32 256zm480 0A256 256 0 1 0 0 256a256 256 0 1 0 512 0zM276.7 132.7l-112 112c-6.2 6.2-6.2 16.4 0 22.6l112 112c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6L198.6 256 299.3 155.3c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0z"],
    "circle-chevron-right": [512,512,["chevron-circle-right"],"f138","M480 256A224 224 0 1 1 32 256a224 224 0 1 1 448 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM235.3 379.3l112-112c6.2-6.2 6.2-16.4 0-22.6l-112-112c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6L313.4 256 212.7 356.7c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0z"],
    "circle-chevron-up": [512,512,["chevron-circle-up"],"f139","M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448zm0 480A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM379.3 276.7l-112-112c-6.2-6.2-16.4-6.2-22.6 0l-112 112c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0L256 198.6 356.7 299.3c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6z"],
    "circle-exclamation": [512,512,["exclamation-circle"],"f06a","M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448zm0 480A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c-8.8 0-16 7.2-16 16l0 128c0 8.8 7.2 16 16 16s16-7.2 16-16l0-128c0-8.8-7.2-16-16-16zm24 224a24 24 0 1 0 -48 0 24 24 0 1 0 48 0z"],
    "circle-info": [512,512,["info-circle"],"f05a","M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448zm0 480A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM208 352c-8.8 0-16 7.2-16 16s7.2 16 16 16l96 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-32 0 0-112c0-8.8-7.2-16-16-16l-40 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l24 0 0 96-32 0zm48-168a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"],
    "circle-notch": [512,512,[],"f1ce","M207.4 20.4c2.4 8.5-2.6 17.3-11.2 19.7C101.5 66.2 32 153 32 256c0 123.7 100.3 224 224 224s224-100.3 224-224c0-103-69.5-189.8-164.3-215.9c-8.5-2.4-13.5-11.2-11.2-19.7s11.2-13.5 19.7-11.2C432.5 39.1 512 138.2 512 256c0 141.4-114.6 256-256 256S0 397.4 0 256C0 138.2 79.5 39.1 187.7 9.2c8.5-2.4 17.3 2.6 19.7 11.2z"],
    "comments": [640,512,["61670","128490"],"f086","M32 176c0-74.8 73.7-144 176-144s176 69.2 176 144s-73.7 144-176 144c-15.3 0-30.6-1.9-46.3-5c-3.5-.7-7.1-.2-10.2 1.4c-6.1 3.1-12 6-18 8.7c-28.4 12.9-60.2 23.1-91.5 26c14.9-19 26.8-39.7 37.6-59.9c3.3-6.1 2.3-13.6-2.5-18.6C50 244.2 32 213.1 32 176zM208 0C93.1 0 0 78.9 0 176c0 44.2 19.8 80.1 46 110c-11.7 21-24 40.6-39.5 57.5c0 0 0 0 0 0l-.1 .1c-6.5 7-8.2 17.1-4.4 25.8C5.8 378.3 14.4 384 24 384c43 0 86.5-13.3 122.7-29.7c4.9-2.2 9.6-4.5 14.3-6.8c15.3 2.8 30.9 4.6 47 4.6c114.9 0 208-78.9 208-176S322.9 0 208 0zM447.4 160.5C541.6 167 608 233 608 304c0 37.1-18 68.2-45.1 96.6c-4.8 5-5.8 12.5-2.5 18.6c10.9 20.2 22.7 40.8 37.6 59.9c-31.3-3-63.2-13.2-91.5-26c-6-2.7-11.9-5.6-18-8.7c-3.2-1.6-6.8-2.1-10.2-1.4c-15.6 3.1-30.9 5-46.3 5c-68.2 0-123.6-30.7-153.1-73.3c-11 3-22.3 5.2-33.8 6.8C279 439.8 349.9 480 432 480c16.1 0 31.7-1.8 47-4.6c4.6 2.3 9.4 4.6 14.3 6.8C529.5 498.7 573 512 616 512c9.6 0 18.2-5.7 22-14.5c3.8-8.7 2-18.9-4.4-25.8l-.1-.1s0 0 0 0c-15.5-17-27.8-36.5-39.5-57.5c26.2-29.9 46-65.8 46-110c0-94.4-87.8-171.5-198.2-175.8c2.8 10.4 4.7 21.2 5.6 32.3z"],
    "copy": [448,512,[],"f0c5","M384 352l-160 0c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l108.1 0c4.2 0 8.3 1.7 11.3 4.7l67.9 67.9c3 3 4.7 7.1 4.7 11.3L416 320c0 17.7-14.3 32-32 32zM433.9 81.9L366.1 14.1c-9-9-21.2-14.1-33.9-14.1L224 0c-35.3 0-64 28.7-64 64l0 256c0 35.3 28.7 64 64 64l160 0c35.3 0 64-28.7 64-64l0-204.1c0-12.7-5.1-24.9-14.1-33.9zM64 128c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l160 0c35.3 0 64-28.7 64-64l0-32-32 0 0 32c0 17.7-14.3 32-32 32L64 480c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l64 0 0-32-64 0z"],
    "credit-card": [576,512,["62083","128179","credit-card-alt"],"f09d","M64 64C46.3 64 32 78.3 32 96l0 32 512 0 0-32c0-17.7-14.3-32-32-32L64 64zM32 160l0 64 512 0 0-64L32 160zm0 96l0 160c0 17.7 14.3 32 32 32l448 0c17.7 0 32-14.3 32-32l0-160L32 256zM0 96C0 60.7 28.7 32 64 32l448 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zM96 368c0-8.8 7.2-16 16-16l64 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-64 0c-8.8 0-16-7.2-16-16zm128 0c0-8.8 7.2-16 16-16l128 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-128 0c-8.8 0-16-7.2-16-16z"],
    "ellipsis": [448,512,["ellipsis-h"],"f141","M416 256a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zm-160 0a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zM64 288a32 32 0 1 1 0-64 32 32 0 1 1 0 64z"],
    "ellipsis-vertical": [128,512,["ellipsis-v"],"f142","M64 384a32 32 0 1 0 0 64 32 32 0 1 0 0-64zm0-160a32 32 0 1 0 0 64 32 32 0 1 0 0-64zM96 96A32 32 0 1 0 32 96a32 32 0 1 0 64 0z"],
    "envelope": [512,512,["61443","9993","128386"],"f0e0","M64 96c-17.7 0-32 14.3-32 32l0 39.9L227.6 311.3c16.9 12.4 39.9 12.4 56.8 0L480 167.9l0-39.9c0-17.7-14.3-32-32-32L64 96zM32 207.6L32 384c0 17.7 14.3 32 32 32l384 0c17.7 0 32-14.3 32-32l0-176.4L303.3 337.1c-28.2 20.6-66.5 20.6-94.6 0L32 207.6zM0 128C0 92.7 28.7 64 64 64l384 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128z"],
    "eye": [576,512,["128065"],"f06e","M117.2 136C160.3 96 217.6 64 288 64s127.7 32 170.8 72c43.1 40 71.9 88 85.2 120c-13.3 32-42.1 80-85.2 120c-43.1 40-100.4 72-170.8 72s-127.7-32-170.8-72C74.1 336 45.3 288 32 256c13.3-32 42.1-80 85.2-120zM288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM192 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z"],
    "eye-slash": [640,512,[],"f070","M25.9 3.4C19-2 8.9-.8 3.4 6.1S-.8 23.1 6.1 28.6l608 480c6.9 5.5 17 4.3 22.5-2.6s4.3-17-2.6-22.5L25.9 3.4zM605.5 268.3c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-51.2 0-96 14.8-133.9 36.8l27.3 21.5C244.6 74.2 280.2 64 320 64c70.4 0 127.7 32 170.8 72c43.1 40 71.9 88 85.2 120c-9.2 22.1-25.9 52-49.5 81.5l25.1 19.8c25.6-32 43.7-64.4 53.9-89zM88.4 154.7c-25.6 32-43.7 64.4-53.9 89c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c51.2 0 96-14.8 133.9-36.8l-27.3-21.5C395.4 437.8 359.8 448 320 448c-70.4 0-127.7-32-170.8-72C106.1 336 77.3 288 64 256c9.2-22.1 25.9-52 49.5-81.5L88.4 154.7zM320 384c16.7 0 32.7-3.2 47.4-9.1l-30.9-24.4c-5.4 .9-10.9 1.4-16.5 1.4c-51 0-92.8-39.8-95.8-90.1l-30.9-24.4c-.9 6-1.3 12.2-1.3 18.5c0 70.7 57.3 128 128 128zM448 256c0-70.7-57.3-128-128-128c-16.7 0-32.7 3.2-47.4 9.1l30.9 24.4c5.4-.9 10.9-1.4 16.5-1.4c51 0 92.8 39.8 95.8 90.1l30.9 24.4c.9-6 1.3-12.2 1.3-18.5z"],
    "filter": [512,512,[],"f0b0","M0 71.5C0 49.7 17.7 32 39.5 32l432.9 0C494.3 32 512 49.7 512 71.5c0 9.2-3.2 18.1-9.1 25.2L320 317.8l0 128.4c0 18.7-15.2 33.9-33.9 33.9c-7.5 0-14.8-2.5-20.8-7.1l-61-47.4c-7.8-6.1-12.4-15.4-12.4-25.3l0-82.4L9.1 96.7C3.2 89.6 0 80.7 0 71.5zM39.5 64c-4.2 0-7.5 3.4-7.5 7.5c0 1.8 .6 3.4 1.7 4.8L220.3 301.8c2.4 2.9 3.7 6.5 3.7 10.2l0 88.2 61 47.4c.3 .3 .7 .4 1.1 .4c1 0 1.9-.8 1.9-1.9L288 312c0-3.7 1.3-7.3 3.7-10.2L478.3 76.3c1.1-1.3 1.7-3 1.7-4.8c0-4.2-3.4-7.5-7.5-7.5L39.5 64z"],
    "gear": [512,512,["9881","cog"],"f013","M223.3 37.8c.4-1.5 1.3-2.8 2.4-3.8c9.9-1.3 20-2 30.3-2s20.4 .7 30.3 2c1.1 1 1.9 2.3 2.4 3.8l13.7 47.7c3.5 12.1 12.2 21.1 22.5 26.1c7.6 3.6 14.8 7.8 21.7 12.5c9.4 6.5 21.7 9.5 33.9 6.5l48.2-12c1.5-.4 3-.3 4.4 .2c5.4 6.9 10.4 14.2 14.9 21.8l4.3 7.4c4.2 7.5 7.9 15.3 11.2 23.3c-.3 1.5-1 2.9-2.1 4L426.8 211c-8.7 9-12.2 21.1-11.3 32.5c.3 4.1 .5 8.3 .5 12.5s-.2 8.4-.5 12.5c-.9 11.4 2.6 23.5 11.3 32.5l34.5 35.7c1.1 1.1 1.8 2.5 2.1 4c-3.3 8-7 15.8-11.2 23.4l-4.2 7.3c-4.6 7.6-9.6 14.8-14.9 21.8c-1.4 .5-2.9 .5-4.4 .2l-48.2-12c-12.2-3-24.4 0-33.9 6.5c-6.9 4.7-14.1 8.9-21.7 12.5c-10.3 4.9-19.1 14-22.5 26.1l-13.7 47.7c-.4 1.5-1.3 2.8-2.4 3.8c-9.9 1.3-20 2-30.3 2s-20.4-.7-30.3-2c-1.1-1-1.9-2.3-2.4-3.8l-13.7-47.7c-3.5-12.1-12.2-21.1-22.5-26.1c-7.6-3.6-14.8-7.8-21.7-12.5c-9.4-6.5-21.7-9.5-33.9-6.5l-48.2 12c-1.5 .4-3 .3-4.4-.2c-5.4-7-10.4-14.2-15-21.8l-4.2-7.3c-4.2-7.5-7.9-15.3-11.2-23.4c.3-1.5 1-2.9 2.1-4L85.2 301c8.7-9 12.2-21.1 11.3-32.5c-.3-4.1-.5-8.3-.5-12.5s.2-8.4 .5-12.5c.9-11.4-2.6-23.5-11.3-32.5L50.7 175.2c-1.1-1.1-1.8-2.5-2.1-4c3.3-8 7-15.8 11.2-23.4l4.2-7.3c4.6-7.6 9.6-14.8 15-21.8c1.4-.5 2.9-.5 4.4-.2l48.2 12c12.2 3 24.4 0 33.9-6.5c6.9-4.7 14.1-8.9 21.7-12.5c10.3-4.9 19.1-14 22.5-26.1l13.7-47.7zM256 0c-13 0-25.9 1-38.4 2.9c-1.7 .3-3.4 .8-5 1.6c-9.5 4.9-16.9 13.6-20 24.5L178.9 76.7c-.6 2.2-2.5 4.5-5.6 6c-9.1 4.3-17.8 9.4-26 15c-2.8 1.9-5.8 2.4-8 1.8l-48.2-12C80.2 84.8 69 86.9 60 92.6c-1.5 .9-2.8 2.1-3.9 3.5C49 105 42.4 114.3 36.5 124.1l-.1 .3L32 132l-.1 .3c-5.4 9.8-10.2 19.9-14.3 30.4c-.6 1.6-1 3.3-1.1 5c-.5 10.8 3.3 21.6 11.2 29.8l34.5 35.7c1.6 1.7 2.7 4.4 2.4 7.8c-.4 5-.6 10-.6 15s.2 10.1 .6 15c.3 3.4-.8 6.2-2.4 7.8L27.7 314.6c-7.9 8.2-11.7 19-11.2 29.8c.1 1.7 .5 3.4 1.1 5c4.1 10.5 8.9 20.6 14.3 30.4l.1 .3 4.4 7.6 .1 .3c5.9 9.8 12.4 19.2 19.6 28.1c1.1 1.4 2.4 2.6 3.9 3.5c9 5.7 20.2 7.8 31.1 5.1l48.2-12c2.2-.6 5.2-.1 8 1.8c8.2 5.7 16.9 10.7 26 15c3.1 1.5 4.9 3.8 5.6 6L192.6 483c3.1 10.8 10.5 19.5 20 24.5c1.6 .8 3.2 1.4 5 1.6C230.1 511 243 512 256 512s25.9-1 38.4-2.9c1.7-.3 3.4-.8 5-1.6c9.5-4.9 16.9-13.6 20-24.5l13.7-47.7c.6-2.2 2.5-4.5 5.6-6c9.1-4.3 17.8-9.4 26-15c2.8-1.9 5.8-2.4 8-1.8l48.2 12c10.9 2.7 22.1 .7 31.1-5.1c1.5-.9 2.8-2.1 3.9-3.5c7.1-8.9 13.6-18.2 19.5-28l.2-.3L480 380l.1-.3c5.4-9.7 10.2-19.9 14.3-30.4c.6-1.6 1-3.3 1.1-5c.5-10.8-3.3-21.6-11.2-29.8l-34.5-35.7c-1.6-1.7-2.7-4.4-2.4-7.8c.4-5 .6-10 .6-15s-.2-10.1-.6-15c-.3-3.4 .8-6.2 2.4-7.8l34.5-35.7c7.9-8.2 11.7-19 11.2-29.8c-.1-1.7-.5-3.4-1.1-5c-4.1-10.5-8.9-20.6-14.3-30.4l-.1-.3-4.4-7.6-.2-.3c-5.9-9.8-12.4-19.2-19.5-28c-1.1-1.4-2.4-2.6-3.9-3.5c-9-5.7-20.2-7.8-31.1-5.1l-48.2 12c-2.2 .6-5.2 .1-8-1.8c-8.2-5.7-16.9-10.7-26-15c-3.1-1.5-4.9-3.8-5.6-6L319.4 29c-3.1-10.8-10.5-19.5-20-24.5c-1.6-.8-3.2-1.4-5-1.6C281.9 1 269 0 256 0zM200 256a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm144 0a88 88 0 1 0 -176 0 88 88 0 1 0 176 0z"],
    "gear-complex": [512,512,[],"e5e9","M215 62.8l4.9-24.3-15.7-3.1 15.7 3.1c.3-1.5 1-2.8 1.9-3.8C232.9 32.9 244.4 32 256 32s23.1 .9 34.2 2.6c1 1.1 1.6 2.4 1.9 3.8L297 62.8c2.9 14.4 13.2 25.2 25.5 30.3c0 0 0 0 0 0l1.5 .6c0 0 0 0 0 0c12.3 5.2 27.3 4.8 39.5-3.3l20.6-13.8c1.2-.8 2.6-1.3 4.1-1.3c9.1 6.7 17.7 14 25.6 21.9l.8 .8s0 0 0 0c7.9 8 15.3 16.5 21.9 25.6c-.1 1.4-.5 2.8-1.3 4.1l-13.8 20.6c-8.1 12.2-8.5 27.1-3.3 39.5c0 0 0 0 0 0l.6 1.5c0 0 0 0 0 0c5.1 12.4 15.9 22.6 30.3 25.5l24.3 4.9c1.5 .3 2.8 1 3.8 1.9c1.7 11.1 2.6 22.4 2.6 34l0 .4c0 11.6-.9 22.9-2.6 34c-1.1 1-2.4 1.6-3.8 1.9L449.2 297c-14.4 2.9-25.2 13.2-30.3 25.5c0 0 0 0 0 0l-.6 1.5c0 0 0 0 0 0c-5.2 12.3-4.8 27.3 3.3 39.5l13.8 20.6c.8 1.2 1.3 2.6 1.3 4.1c-13.6 18.5-29.9 34.9-48.4 48.4c-1.4-.1-2.8-.5-4.1-1.3l-20.6-13.8c-12.2-8.1-27.1-8.5-39.5-3.3c0 0 0 0 0 0l-1.5 .6c0 0 0 0 0 0c-12.4 5.1-22.6 15.9-25.5 30.3l-4.9 24.3c-.3 1.5-1 2.8-1.9 3.8c-11.1 1.7-22.6 2.6-34.2 2.6s-23.1-.9-34.2-2.6c-1-1.1-1.6-2.4-1.9-3.8L215 449.2c-2.9-14.4-13.2-25.2-25.5-30.3c0 0 0 0 0 0l-1.5-.6c0 0 0 0 0 0c-12.3-5.2-27.3-4.8-39.5 3.3l-20.6 13.8c-1.2 .8-2.6 1.3-4.1 1.3c-18.5-13.6-34.9-29.9-48.4-48.4c.1-1.4 .5-2.8 1.3-4.1l13.8-20.6c8.1-12.2 8.5-27.1 3.3-39.5c0 0 0 0 0 0l-.6-1.5c0 0 0 0 0 0c-5.1-12.4-15.9-22.6-30.3-25.5l-24.3-4.9c-1.5-.3-2.8-1-3.8-1.9C32.9 279.1 32 267.6 32 256s.9-23.1 2.6-34.2c1.1-1 2.4-1.6 3.8-1.9L62.8 215c14.4-2.9 25.2-13.2 30.3-25.5c0 0 0 0 0 0l.6-1.5c0 0 0 0 0 0c5.2-12.3 4.8-27.3-3.3-39.5L76.6 127.7c-.8-1.2-1.3-2.6-1.3-4.1c6.7-9.1 14-17.7 22-25.7l.8-.8s0 0 0 0c8-7.9 16.6-15.3 25.7-22c1.4 .1 2.8 .5 4.1 1.3l20.6 13.8c12.2 8.1 27.1 8.5 39.5 3.3c0 0 0 0 0 0l1.5-.6c0 0 0 0 0 0c12.4-5.1 22.7-15.9 25.5-30.3zM256 0c-14.8 0-29.3 1.3-43.4 3.7c-2 .3-3.9 1-5.6 2.1c-9.4 5.6-16.3 15.1-18.6 26.4l-4.9 24.3c-.5 2.6-2.6 5.4-6.3 6.9c0 0 0 0 0 0c0 0 0 0-.1 0l-1.7 .7s0 0 0 0c0 0 0 0-.1 0c-3.7 1.5-7.1 1-9.4-.4L145.5 50c-9.6-6.4-21.2-8.2-31.7-5.6c-1.9 .5-3.8 1.3-5.4 2.5C96.6 55.2 85.6 64.4 75.4 74.5c0 0 0 0 0 0l-.8 .8c0 0 0 0 0 0C64.4 85.6 55.2 96.6 46.9 108.3c-1.2 1.6-2 3.5-2.5 5.4c-2.6 10.6-.8 22.1 5.6 31.7l13.8 20.6c1.5 2.2 2 5.7 .4 9.4c0 0 0 0 0 .1l-.7 1.7s0 0 0 0c0 0 0 0 0 .1c-1.5 3.7-4.3 5.8-6.9 6.3l-24.3 4.9c-11.4 2.3-20.8 9.2-26.4 18.6c-1 1.7-1.7 3.6-2.1 5.6C1.3 226.7 0 241.2 0 256s1.3 29.3 3.7 43.4c.3 2 1 3.9 2.1 5.6c5.6 9.4 15.1 16.3 26.4 18.6l24.3 4.9c2.6 .5 5.4 2.6 6.9 6.3c0 0 0 0 0 .1l.7 1.7c0 0 0 0 0 .1c1.5 3.7 1 7.1-.4 9.4L50 366.5c-6.4 9.6-8.2 21.2-5.6 31.7c.5 1.9 1.3 3.8 2.5 5.4c16.8 23.8 37.6 44.6 61.5 61.5c1.6 1.2 3.5 2 5.4 2.5c10.6 2.6 22.1 .8 31.7-5.6l20.6-13.8c2.2-1.5 5.7-2 9.4-.4c0 0 0 0 .1 0l1.7 .7c0 0 0 0 .1 0c3.7 1.5 5.8 4.3 6.3 6.9l4.9 24.3c2.3 11.4 9.2 20.8 18.6 26.4c1.7 1 3.6 1.7 5.6 2.1c14.1 2.4 28.6 3.7 43.4 3.7s29.3-1.3 43.4-3.7c2-.3 3.9-1 5.6-2.1c9.4-5.6 16.3-15.1 18.6-26.4l4.9-24.3c.5-2.6 2.6-5.4 6.3-6.9c0 0 0 0 .1 0l1.7-.7c0 0 0 0 .1 0c3.7-1.5 7.1-1 9.4 .4L366.5 462c9.6 6.4 21.2 8.2 31.7 5.6c1.9-.5 3.8-1.3 5.4-2.5c23.8-16.8 44.6-37.6 61.5-61.4c1.2-1.6 2-3.5 2.5-5.4c2.6-10.6 .8-22.1-5.6-31.7l-13.8-20.6c-1.5-2.2-2-5.7-.4-9.4c0 0 0 0 0-.1l.7-1.7c0 0 0 0 0-.1c1.5-3.7 4.3-5.8 6.9-6.3l24.3-4.9-3.1-15.7 3.1 15.7c11.4-2.3 20.8-9.2 26.4-18.6c1-1.7 1.7-3.6 2.1-5.6c2.4-14 3.7-28.5 3.7-43.2c0 0 0 0 0 0l0-.4s0 0 0 0c0-14.7-1.3-29.1-3.7-43.2c-.3-2-1-3.9-2.1-5.6c-5.6-9.4-15.1-16.3-26.4-18.6l-24.3-4.9c-2.6-.5-5.4-2.6-6.9-6.3c0 0 0 0 0-.1l-.7-1.7c0 0 0 0 0-.1c-1.5-3.7-1-7.1 .4-9.4L462 145.5c6.4-9.6 8.2-21.2 5.6-31.7c-.5-1.9-1.3-3.8-2.5-5.4c-8.3-11.7-17.5-22.7-27.6-32.9c0 0 0 0 0 0l-.9-.9c0 0 0 0 0 0c-10.1-10.1-21.1-19.3-32.9-27.6c-1.6-1.2-3.5-2-5.4-2.5c-10.6-2.6-22.1-.8-31.7 5.6L345.9 63.7c-2.2 1.5-5.7 2-9.4 .4c0 0 0 0-.1 0l-1.7-.7c0 0 0 0-.1 0c-3.7-1.5-5.8-4.3-6.3-6.9l-4.9-24.3c-2.3-11.4-9.2-20.8-18.6-26.4c-1.7-1-3.6-1.7-5.6-2.1C285.3 1.3 270.8 0 256 0zM192 256a64 64 0 1 1 128 0 64 64 0 1 1 -128 0zm160 0a96 96 0 1 0 -192 0 96 96 0 1 0 192 0z"],
    "heart": [512,512,["61578","10084","9829","129505","129294","129293","128420","128156","128155","128154","128153"],"f004","M244 130.6l-12-13.5-4.2-4.7c-26-29.2-65.3-42.8-103.8-35.8c-53.3 9.7-92 56.1-92 110.3l0 3.5c0 32.3 13.4 63.1 37.1 85.1L253 446.8c.8 .7 1.9 1.2 3 1.2s2.2-.4 3-1.2L443 275.5c23.6-22 37-52.8 37-85.1l0-3.5c0-54.2-38.7-100.6-92-110.3c-38.5-7-77.8 6.6-103.8 35.8l-4.2 4.7-12 13.5c-3 3.4-7.4 5.4-12 5.4s-8.9-2-12-5.4zm34.9-57.1C311 48.4 352.7 37.7 393.7 45.1C462.2 57.6 512 117.3 512 186.9l0 3.5c0 36-13.1 70.6-36.6 97.5c-3.4 3.8-6.9 7.5-10.7 11l-184 171.3c-.8 .8-1.7 1.5-2.6 2.2c-6.3 4.9-14.1 7.5-22.1 7.5c-9.2 0-18-3.5-24.8-9.7L47.2 299c-3.8-3.5-7.3-7.2-10.7-11C13.1 261 0 226.4 0 190.4l0-3.5C0 117.3 49.8 57.6 118.3 45.1c40.9-7.4 82.6 3.2 114.7 28.4c6.7 5.3 13 11.1 18.7 17.6l4.2 4.7 4.2-4.7c4.2-4.7 8.6-9.1 13.3-13.1c1.8-1.5 3.6-3 5.4-4.5z"],
    "house": [576,512,["63500","63498","127968","home","home-alt","home-lg-alt"],"f015","M298.6 4c-6-5.3-15.1-5.3-21.2 0L5.4 244c-6.6 5.8-7.3 16-1.4 22.6s16 7.3 22.6 1.4L64 235l0 197c0 44.2 35.8 80 80 80l288 0c44.2 0 80-35.8 80-80l0-197 37.4 33c6.6 5.8 16.7 5.2 22.6-1.4s5.2-16.7-1.4-22.6L298.6 4zM96 432l0-225.3L288 37.3 480 206.7 480 432c0 26.5-21.5 48-48 48l-64 0 0-160c0-17.7-14.3-32-32-32l-96 0c-17.7 0-32 14.3-32 32l0 160-64 0c-26.5 0-48-21.5-48-48zm144 48l0-160 96 0 0 160-96 0z"],
    "house-blank": [576,512,["home-blank"],"e487","M277.4 4c6-5.3 15.1-5.3 21.2 0l272 240c6.6 5.8 7.3 16 1.4 22.6s-16 7.3-22.6 1.4L512 235l0 197c0 44.2-35.8 80-80 80l-288 0c-44.2 0-80-35.8-80-80l0-197L26.6 268C20 273.8 9.8 273.2 4 266.6S-1.2 249.8 5.4 244L277.4 4zM96 206.7L96 432c0 26.5 21.5 48 48 48l288 0c26.5 0 48-21.5 48-48l0-225.3L288 37.3 96 206.7z"],
    "link": [640,512,["128279","chain"],"f0c1","M591.5 256c50-50 50-131 0-181s-131-50-181 0L387.9 97.6c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l22.6-22.6c37.5-37.5 98.3-37.5 135.8 0s37.5 98.3 0 135.8L444.3 357.9c-37.4 37.4-98.1 37.4-135.6 0c-35.6-35.6-37.6-92.6-4.7-130.6l5.3-6.1c5.8-6.7 5.1-16.8-1.6-22.6s-16.8-5.1-22.6 1.6l-5.3 6.1c-43.9 50.7-41.2 126.7 6.2 174.1c49.9 49.9 130.9 49.9 180.8 0L591.5 256zM48.5 256c-50 50-50 131 0 181s131 50 181 0l22.6-22.6c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0l-22.6 22.6c-37.5 37.5-98.3 37.5-135.8 0s-37.5-98.3 0-135.8L195.7 154.1c37.4-37.4 98.1-37.4 135.6 0c35.6 35.6 37.6 92.6 4.7 130.6l-5.3 6.1c-5.8 6.7-5.1 16.8 1.6 22.6s16.8 5.1 22.6-1.6l5.3-6.1c43.9-50.7 41.2-126.7-6.2-174.1C303.9 81.5 223 81.5 173 131.4L48.5 256z"],
    "list": [512,512,["list-squares"],"f03a","M48 112l0-32 32 0 0 32-32 0zM16 72l0 48c0 13.3 10.7 24 24 24l48 0c13.3 0 24-10.7 24-24l0-48c0-13.3-10.7-24-24-24L40 48C26.7 48 16 58.7 16 72zm160 8c-8.8 0-16 7.2-16 16s7.2 16 16 16l320 0c8.8 0 16-7.2 16-16s-7.2-16-16-16L176 80zm0 160c-8.8 0-16 7.2-16 16s7.2 16 16 16l320 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-320 0zm0 160c-8.8 0-16 7.2-16 16s7.2 16 16 16l320 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-320 0zM48 240l32 0 0 32-32 0 0-32zm-8-32c-13.3 0-24 10.7-24 24l0 48c0 13.3 10.7 24 24 24l48 0c13.3 0 24-10.7 24-24l0-48c0-13.3-10.7-24-24-24l-48 0zm8 224l0-32 32 0 0 32-32 0zM16 392l0 48c0 13.3 10.7 24 24 24l48 0c13.3 0 24-10.7 24-24l0-48c0-13.3-10.7-24-24-24l-48 0c-13.3 0-24 10.7-24 24z"],
    "location-dot": [384,512,["map-marker-alt"],"f3c5","M352 192c0-88.4-71.6-160-160-160S32 103.6 32 192c0 15.6 5.4 37 16.6 63.4c10.9 25.9 26.2 54 43.6 82.1c34.1 55.3 74.4 108.2 99.9 140c25.4-31.8 65.8-84.7 99.9-140c17.3-28.1 32.7-56.3 43.6-82.1C346.6 229 352 207.6 352 192zm32 0c0 87.4-117 243-168.3 307.2c-12.3 15.3-35.1 15.3-47.4 0C117 435 0 279.4 0 192C0 86 86 0 192 0S384 86 384 192zm-240 0a48 48 0 1 0 96 0 48 48 0 1 0 -96 0zm48 80a80 80 0 1 1 0-160 80 80 0 1 1 0 160z"],
    "location-pin": [384,512,["map-marker"],"f041","M335.4 255.4c-10.9 25.9-26.2 54-43.6 82.1c-34.1 55.3-74.4 108.2-99.9 140c-25.4-31.8-65.8-84.7-99.9-140c-17.3-28.1-32.7-56.3-43.6-82.1C37.4 229 32 207.6 32 192c0-88.4 71.6-160 160-160s160 71.6 160 160c0 15.6-5.4 37-16.6 63.4zM215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0z"],
    "magnifying-glass": [512,512,["128269","search"],"f002","M384 208A176 176 0 1 0 32 208a176 176 0 1 0 352 0zM343.3 366C307 397.2 259.7 416 208 416C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208c0 51.7-18.8 99-50 135.3L507.3 484.7c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0L343.3 366z"],
    "megaphone": [576,512,["128227"],"f675","M560 32c-8.8 0-16 7.2-16 16l0 11.5L32 187.5 32 176c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 19.5L0 208l0 96 0 12.5L0 336c0 8.8 7.2 16 16 16s16-7.2 16-16l0-11.5 131.7 32.9c-2.4 8.4-3.7 17.4-3.7 26.6c0 53 43 96 96 96c46.2 0 84.7-32.6 93.9-76L544 452.5l0 11.5c0 8.8 7.2 16 16 16s16-7.2 16-16l0-24 0-368 0-24c0-8.8-7.2-16-16-16zM544 419.5L32 291.5l0-71 512-128 0 327zM192 384c0-6.5 1-12.9 2.8-18.8l124 31C313.1 425.7 287.2 448 256 448c-35.3 0-64-28.7-64-64z"],
    "message": [512,512,["comment-alt"],"f27a","M160 384c17.7 0 32 14.3 32 32l0 48 98.1-73.6c5.5-4.2 12.3-6.4 19.2-6.4L448 384c17.7 0 32-14.3 32-32l0-288c0-17.7-14.3-32-32-32L64 32C46.3 32 32 46.3 32 64l0 288c0 17.7 14.3 32 32 32l96 0zM0 64C0 28.7 28.7 0 64 0L448 0c35.3 0 64 28.7 64 64l0 288c0 35.3-28.7 64-64 64l-138.7 0L185.6 508.8c-4.8 3.6-11.3 4.2-16.8 1.5s-8.8-8.2-8.8-14.3l0-48 0-32-32 0-64 0c-35.3 0-64-28.7-64-64L0 64z"],
    "minus": [448,512,["10134","8722","8211","subtract"],"f068","M432 256c0 8.8-7.2 16-16 16L32 272c-8.8 0-16-7.2-16-16s7.2-16 16-16l384 0c8.8 0 16 7.2 16 16z"],
    "network-wired": [640,512,[],"f6ff","M400 32c8.8 0 16 7.2 16 16l0 96c0 8.8-7.2 16-16 16l-64 0-32 0-64 0c-8.8 0-16-7.2-16-16l0-96c0-8.8 7.2-16 16-16l160 0zM336 192l64 0c26.5 0 48-21.5 48-48l0-96c0-26.5-21.5-48-48-48L240 0c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48l64 0 0 48L16 240c-8.8 0-16 7.2-16 16s7.2 16 16 16l128 0 0 48-64 0c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48l160 0c26.5 0 48-21.5 48-48l0-96c0-26.5-21.5-48-48-48l-64 0 0-48 288 0 0 48-64 0c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48l160 0c26.5 0 48-21.5 48-48l0-96c0-26.5-21.5-48-48-48l-64 0 0-48 128 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-288 0 0-48zM496 352l64 0c8.8 0 16 7.2 16 16l0 96c0 8.8-7.2 16-16 16l-160 0c-8.8 0-16-7.2-16-16l0-96c0-8.8 7.2-16 16-16l64 0 32 0zm-320 0l64 0c8.8 0 16 7.2 16 16l0 96c0 8.8-7.2 16-16 16L80 480c-8.8 0-16-7.2-16-16l0-96c0-8.8 7.2-16 16-16l64 0 32 0z"],
    "people-group": [640,512,[],"e533","M128 64a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm0 80a56 56 0 1 0 0-112 56 56 0 1 0 0 112zM0 280c0 43.3 26.4 80.4 64 96l0 48c0 13.3 10.7 24 24 24l80 0c13.3 0 24-10.7 24-24l0-40c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 32-64 0 0-207.6c2.6-.3 5.3-.4 8-.4l48 0c9.3 0 18.1 1.7 26.2 4.9c8.2 3.2 17.5-.9 20.7-9.1s-.9-17.5-9.1-20.7c-11.7-4.6-24.5-7.1-37.8-7.1l-48 0C46.6 176 0 222.6 0 280zm64 59.9C44.7 327 32 304.9 32 280c0-25 12.7-47 32-59.9l0 119.8zM512 64a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm0 80a56 56 0 1 0 0-112 56 56 0 1 0 0 112zM640 280c0-57.4-46.6-104-104-104l-48 0c-13.3 0-26.1 2.5-37.8 7.1c-8.2 3.2-12.3 12.5-9.1 20.7s12.5 12.3 20.7 9.1c8.1-3.2 16.9-4.9 26.2-4.9l48 0c2.7 0 5.4 .1 8 .4L544 416l-64 0 0-32c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 40c0 13.3 10.7 24 24 24l80 0c13.3 0 24-10.7 24-24l0-48c37.6-15.7 64-52.7 64-96zm-64 59.9l0-119.8C595.3 233 608 255 608 280c0 24.9-12.7 47-32 59.9zM288 96a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm96 0A64 64 0 1 0 256 96a64 64 0 1 0 128 0zm-80 96c-57.4 0-104 46.6-104 104c0 40.1 22.7 74.9 56 92.3l0 67.7c0 13.3 10.7 24 24 24l80 0c13.3 0 24-10.7 24-24l0-67.7c33.3-17.3 56-52.1 56-92.3c0-57.4-46.6-104-104-104l-32 0zm-48 50.3l0 107.3c-14.7-13.2-24-32.4-24-53.7c0-21.3 9.3-40.5 24-53.7zM288 448l0-222.2c5.1-1.2 10.5-1.8 16-1.8l32 0c5.5 0 10.9 .6 16 1.8L352 448l-64 0zm96-98.3l0-107.3c14.7 13.2 24 32.3 24 53.7c0 21.3-9.3 40.5-24 53.7z"],
    "play": [384,512,["9654"],"f04b","M56.3 66.3c-4.9-3-11.1-3.1-16.2-.3s-8.2 8.2-8.2 14l0 352c0 5.8 3.1 11.1 8.2 14s11.2 2.7 16.2-.3l288-176c4.8-2.9 7.7-8.1 7.7-13.7s-2.9-10.7-7.7-13.7l-288-176zM24.5 38.1C39.7 29.6 58.2 30 73 39L361 215c14.3 8.7 23 24.2 23 41s-8.7 32.2-23 41L73 473c-14.8 9.1-33.4 9.4-48.5 .9S0 449.4 0 432L0 80C0 62.6 9.4 46.6 24.5 38.1z"],
    "plus": [448,512,["61543","10133","add"],"2b","M240 64c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 176L32 240c-8.8 0-16 7.2-16 16s7.2 16 16 16l176 0 0 176c0 8.8 7.2 16 16 16s16-7.2 16-16l0-176 176 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-176 0 0-176z"],
    "share-nodes": [448,512,["share-alt"],"f1e0","M448 112c0 44.2-35.8 80-80 80c-22.9 0-43.6-9.6-58.1-25l-151 75.5c.8 4.4 1.1 8.9 1.1 13.5s-.4 9.1-1.1 13.5l151 75.5c14.6-15.4 35.2-25 58.1-25c44.2 0 80 35.8 80 80s-35.8 80-80 80s-80-35.8-80-80c0-9.7 1.7-19 4.9-27.7L147.2 299.5c-14.3 22-39 36.5-67.2 36.5c-44.2 0-80-35.8-80-80s35.8-80 80-80c28.2 0 52.9 14.5 67.2 36.5l145.7-72.9c-3.2-8.6-4.9-17.9-4.9-27.7c0-44.2 35.8-80 80-80s80 35.8 80 80zM80 304a48 48 0 1 0 0-96 48 48 0 1 0 0 96zM416 112a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM368 448a48 48 0 1 0 0-96 48 48 0 1 0 0 96z"],
    "shield": [512,512,["128737","shield-blank"],"f132","M268.5 37.3c-8-3.4-17-3.4-25 0l-176.7 75C55.5 117 47.9 127.7 48 139.8c.5 94 39.3 259.8 195.4 334.5c7.9 3.8 17.2 3.8 25.1 0c156.1-74.7 195-240.4 195.5-334.5c.1-12.1-7.5-22.8-18.8-27.6l-176.7-75zM231 7.8c16-6.8 34-6.8 50 0l176.7 75c22 9.3 38.4 31 38.3 57.2c-.5 99.2-41.3 280.7-213.6 363.2c-16.7 8-36.1 8-52.8 0C57.3 420.7 16.5 239.2 16 140c-.1-26.2 16.3-47.9 38.3-57.2L231 7.8z"],
    "sitemap": [576,512,[],"f0e8","M320 64c8.8 0 16 7.2 16 16l0 64c0 8.8-7.2 16-16 16l-16 0-32 0-16 0c-8.8 0-16-7.2-16-16l0-64c0-8.8 7.2-16 16-16l64 0zM256 192l16 0 0 48-160 0c-26.5 0-48 21.5-48 48l0 32-16 0c-26.5 0-48 21.5-48 48l0 64c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-64c0-26.5-21.5-48-48-48l-16 0 0-32c0-8.8 7.2-16 16-16l160 0 0 48-16 0c-26.5 0-48 21.5-48 48l0 64c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-64c0-26.5-21.5-48-48-48l-16 0 0-48 160 0c8.8 0 16 7.2 16 16l0 32-16 0c-26.5 0-48 21.5-48 48l0 64c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-64c0-26.5-21.5-48-48-48l-16 0 0-32c0-26.5-21.5-48-48-48l-160 0 0-48 16 0c26.5 0 48-21.5 48-48l0-64c0-26.5-21.5-48-48-48l-64 0c-26.5 0-48 21.5-48 48l0 64c0 26.5 21.5 48 48 48zM48 352l64 0c8.8 0 16 7.2 16 16l0 64c0 8.8-7.2 16-16 16l-64 0c-8.8 0-16-7.2-16-16l0-64c0-8.8 7.2-16 16-16zm208 0l64 0c8.8 0 16 7.2 16 16l0 64c0 8.8-7.2 16-16 16l-64 0c-8.8 0-16-7.2-16-16l0-64c0-8.8 7.2-16 16-16zm208 0l64 0c8.8 0 16 7.2 16 16l0 64c0 8.8-7.2 16-16 16l-64 0c-8.8 0-16-7.2-16-16l0-64c0-8.8 7.2-16 16-16z"],
    "spinner": [512,512,[],"f110","M256 64a16 16 0 1 0 0-32 16 16 0 1 0 0 32zm0-64a48 48 0 1 1 0 96 48 48 0 1 1 0-96zm0 480a16 16 0 1 0 0-32 16 16 0 1 0 0 32zm0-64a48 48 0 1 1 0 96 48 48 0 1 1 0-96zM64 256a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zM0 256a48 48 0 1 1 96 0A48 48 0 1 1 0 256zm464 16a16 16 0 1 0 0-32 16 16 0 1 0 0 32zm0-64a48 48 0 1 1 0 96 48 48 0 1 1 0-96zM120.2 391.8A16 16 0 1 0 97.6 414.4a16 16 0 1 0 22.6-22.6zM75 437a48 48 0 1 1 67.9-67.9A48 48 0 1 1 75 437zM97.6 120.2a16 16 0 1 0 22.6-22.6A16 16 0 1 0 97.6 120.2zM142.9 75A48 48 0 1 1 75 142.9 48 48 0 1 1 142.9 75zM414.4 414.4a16 16 0 1 0 -22.6-22.6 16 16 0 1 0 22.6 22.6zm-45.3-45.3A48 48 0 1 1 437 437a48 48 0 1 1 -67.9-67.9z"],
    "square-chevron-up": [448,512,["chevron-square-up"],"f32c","M64 64C46.3 64 32 78.3 32 96l0 320c0 17.7 14.3 32 32 32l320 0c17.7 0 32-14.3 32-32l0-320c0-17.7-14.3-32-32-32L64 64zM0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zm235.3 68.7l112 112c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0L224 198.6 123.3 299.3c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l112-112c6.2-6.2 16.4-6.2 22.6 0z"],
    "star": [576,512,["61446","11088"],"f005","M226.5 168.8L287.9 42.3l61.4 126.5c4.6 9.5 13.6 16.1 24.1 17.7l137.4 20.3-99.8 98.8c-7.4 7.3-10.8 17.8-9 28.1l23.5 139.5L303 407.7c-9.4-5-20.7-5-30.2 0L150.2 473.2l23.5-139.5c1.7-10.3-1.6-20.7-9-28.1L65 206.8l137.4-20.3c10.5-1.5 19.5-8.2 24.1-17.7zM424.9 509.1c8.1 4.3 17.9 3.7 25.3-1.7s11.2-14.5 9.7-23.5L433.6 328.4 544.8 218.2c6.5-6.4 8.7-15.9 5.9-24.5s-10.3-14.9-19.3-16.3L378.1 154.8 309.5 13.5C305.5 5.2 297.1 0 287.9 0s-17.6 5.2-21.6 13.5L197.7 154.8 44.5 177.5c-9 1.3-16.5 7.6-19.3 16.3s-.5 18.1 5.9 24.5L142.2 328.4 116 483.9c-1.5 9 2.2 18.1 9.7 23.5s17.3 6 25.3 1.7l137-73.2 137 73.2z"],
    "tag": [448,512,["127991"],"f02b","M32 229.5L32 80c0-8.8 7.2-16 16-16l149.5 0c8.5 0 16.6 3.4 22.6 9.4l176 176c12.5 12.5 12.5 32.8 0 45.3L262.6 428.1c-12.5 12.5-32.8 12.5-45.3 0l-176-176L18.7 274.7l22.6-22.6c-6-6-9.4-14.1-9.4-22.6zm-32 0c0 17 6.7 33.3 18.7 45.3l176 176c25 25 65.5 25 90.5 0L418.7 317.3c25-25 25-65.5 0-90.5l-176-176c-12-12-28.3-18.7-45.3-18.7L48 32C21.5 32 0 53.5 0 80L0 229.5zM112 168a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"],
    "thumbs-down": [512,512,["61576","128078"],"f165","M288.8 430.3c3.5 12.8 16.7 20.3 29.5 16.8s20.3-16.7 16.8-29.5l-4.5-16.4c-5.5-20.2-13.9-39.3-24.7-56.9c-3.1-4.9-3.2-11.1-.4-16.2s8.2-8.2 14-8.2L448 320c17.7 0 32-14.3 32-32c0-11.3-5.9-21.3-14.8-27c-7.2-4.6-9.5-13.9-5.3-21.3c2.6-4.6 4.1-10 4.1-15.7c0-12.4-7-23.1-17.3-28.5c-4.2-2.2-7.3-6.1-8.3-10.8s.1-9.5 3-13.2c4.2-5.4 6.7-12.2 6.7-19.5c0-14.2-9.2-26.3-22.1-30.4c-7.8-2.5-12.4-10.6-10.7-18.6c.5-2.2 .7-4.5 .7-6.9c0-17.7-14.3-32-32-32l-89.5 0c-15.8 0-31.2 4.7-44.4 13.4l-38.5 25.7c-9 6-16.6 13.7-22.4 22.6c-4.9 7.4-14.8 9.4-22.2 4.6s-9.4-14.8-4.6-22.2c8.1-12.3 18.7-23.1 31.4-31.6l38.5-25.7c18.4-12.3 40-18.8 62.1-18.8L384 32c35.3 0 64 28.7 64 64l0 .6c19.1 11.1 32 31.7 32 55.4c0 8.7-1.8 17.1-4.9 24.7C487.9 188.4 496 205.2 496 224c0 6.5-1 12.8-2.8 18.7C504.8 254.3 512 270.3 512 288c0 35.3-28.7 64-64 64l-101.6 0c6.2 13.1 11.3 26.7 15.1 40.9l4.5 16.4c8.1 29.8-9.5 60.6-39.3 68.8s-60.6-9.5-68.8-39.3l-4.5-16.4c-8.9-32.6-29.6-60.8-58.2-79l-3.1-2 8.2-12.9-8.2 12.9c-11.8-7.5-21.7-17.1-29.5-28.2c-5.1-7.2-3.3-17.2 4-22.3s17.2-3.3 22.3 4c5.4 7.7 12.2 14.4 20.4 19.5l3.1 2c35.3 22.4 60.9 57.2 71.9 97.5l4.5 16.4zM32 352l64 0 0-224-64 0 0 224zM0 352L0 128c0-17.7 14.3-32 32-32l64 0c17.7 0 32 14.3 32 32l0 224c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32z"],
    "thumbs-up": [512,512,["61575","128077"],"f164","M288.8 81.7c3.5-12.8 16.7-20.3 29.5-16.8s20.3 16.7 16.8 29.5l-4.5 16.4c-5.5 20.2-13.9 39.3-24.7 56.9c-3.1 4.9-3.2 11.1-.4 16.2s8.2 8.2 14 8.2L448 192c17.7 0 32 14.3 32 32c0 11.3-5.9 21.3-14.8 27c-7.2 4.6-9.5 13.9-5.3 21.3c2.6 4.6 4.1 10 4.1 15.7c0 12.4-7 23.1-17.3 28.5c-4.2 2.2-7.3 6.1-8.3 10.8s.1 9.5 3 13.2c4.2 5.4 6.7 12.2 6.7 19.5c0 14.2-9.2 26.3-22.1 30.4c-7.8 2.5-12.4 10.6-10.7 18.6c.5 2.2 .7 4.5 .7 6.9c0 17.7-14.3 32-32 32l-89.5 0c-15.8 0-31.2-4.7-44.4-13.4l-38.5-25.7c-9-6-16.6-13.7-22.4-22.6c-4.9-7.4-14.8-9.4-22.2-4.6s-9.4 14.8-4.6 22.2c8.1 12.3 18.7 23.1 31.4 31.6l38.5 25.7c18.4 12.3 40 18.8 62.1 18.8l89.5 0c35.3 0 64-28.7 64-64l0-.6c19.1-11.1 32-31.7 32-55.4c0-8.7-1.8-17.1-4.9-24.7C487.9 323.6 496 306.8 496 288c0-6.5-1-12.8-2.8-18.7C504.8 257.7 512 241.7 512 224c0-35.3-28.7-64-64-64l-101.6 0c6.2-13.1 11.3-26.7 15.1-40.9l4.5-16.4c8.1-29.8-9.5-60.6-39.3-68.8s-60.6 9.5-68.8 39.3l-4.5 16.4c-8.9 32.6-29.6 60.8-58.2 79l-3.1 2c-11.8 7.5-21.7 17.1-29.5 28.2c-5.1 7.2-3.3 17.2 4 22.3s17.2 3.3 22.3-4c5.4-7.7 12.2-14.4 20.4-19.5l3.1-2c35.3-22.4 60.9-57.2 71.9-97.5l4.5-16.4zM32 224l64 0 0 224-64 0 0-224zM0 224L0 448c0 17.7 14.3 32 32 32l64 0c17.7 0 32-14.3 32-32l0-224c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32z"],
    "trash": [448,512,[],"f1f8","M177.7 32l92.5 0c5.5 0 10.6 2.8 13.6 7.5L299.1 64 148.9 64l15.3-24.5c2.9-4.7 8.1-7.5 13.6-7.5zM336.9 64L311 22.6C302.2 8.5 286.8 0 270.3 0L177.7 0C161.2 0 145.8 8.5 137 22.6L111.1 64 64.1 64 32 64 16 64C7.2 64 0 71.2 0 80s7.2 16 16 16l18.3 0L59.8 452.6C62.1 486.1 90 512 123.6 512l200.8 0c33.6 0 61.4-25.9 63.8-59.4L413.7 96 432 96c8.8 0 16-7.2 16-16s-7.2-16-16-16l-16 0-32.1 0-47.1 0zm44.8 32L356.3 450.3C355.1 467 341.2 480 324.4 480l-200.8 0c-16.8 0-30.7-13-31.9-29.7L66.4 96l315.3 0z"],
    "trash-can": [448,512,["61460","trash-alt"],"f2ed","M164.2 39.5L148.9 64l150.3 0L283.8 39.5c-2.9-4.7-8.1-7.5-13.6-7.5l-92.5 0c-5.5 0-10.6 2.8-13.6 7.5zM311 22.6L336.9 64 384 64l32 0 16 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-16 0 0 336c0 44.2-35.8 80-80 80l-224 0c-44.2 0-80-35.8-80-80L32 96 16 96C7.2 96 0 88.8 0 80s7.2-16 16-16l16 0 32 0 47.1 0L137 22.6C145.8 8.5 161.2 0 177.7 0l92.5 0c16.6 0 31.9 8.5 40.7 22.6zM64 96l0 336c0 26.5 21.5 48 48 48l224 0c26.5 0 48-21.5 48-48l0-336L64 96zm80 80l0 224c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-224c0-8.8 7.2-16 16-16s16 7.2 16 16zm96 0l0 224c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-224c0-8.8 7.2-16 16-16s16 7.2 16 16zm96 0l0 224c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-224c0-8.8 7.2-16 16-16s16 7.2 16 16z"],
    "triangle-exclamation": [512,512,["9888","exclamation-triangle","warning"],"f071","M34.5 420.4c-1.6 2.8-2.5 6-2.5 9.3c0 10.2 8.2 18.4 18.4 18.4l411.2 0c10.2 0 18.4-8.2 18.4-18.4c0-3.3-.9-6.4-2.5-9.3L276.5 75.8C272.2 68.5 264.4 64 256 64s-16.2 4.5-20.5 11.8L34.5 420.4zM6.9 404.2l201-344.6C217.9 42.5 236.2 32 256 32s38.1 10.5 48.1 27.6l201 344.6c4.5 7.7 6.9 16.5 6.9 25.4c0 27.8-22.6 50.4-50.4 50.4L50.4 480C22.6 480 0 457.4 0 429.6c0-8.9 2.4-17.7 6.9-25.4zM256 160c8.8 0 16 7.2 16 16l0 128c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-128c0-8.8 7.2-16 16-16zM232 384a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z"],
    "user": [448,512,["62144","128100"],"f007","M320 128a96 96 0 1 0 -192 0 96 96 0 1 0 192 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM32 480l384 0c-1.2-79.7-66.2-144-146.3-144l-91.4 0c-80 0-145 64.3-146.3 144zM0 482.3C0 383.8 79.8 304 178.3 304l91.4 0C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7L29.7 512C13.3 512 0 498.7 0 482.3z"],
    "user-group": [640,512,["128101","user-friends"],"f500","M128 128a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zM269.7 336c80 0 145 64.3 146.3 144L32 480c1.2-79.7 66.2-144 146.3-144l91.4 0zM224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0zm431 208c17 0 30.7-13.8 30.7-30.7C640 392.2 567.8 320 478.7 320l-61.4 0c-4.4 0-8.8 .2-13.2 .5c11.3 9.4 21.6 19.9 30.7 31.5l43.9 0c71 0 128.6 57.2 129.3 128l-128 0c0 .8 0 1.5 0 2.3c0 10.8-2.8 20.9-7.6 29.7l136.9 0zM432 256c61.9 0 112-50.1 112-112s-50.1-112-112-112c-24.8 0-47.7 8.1-66.3 21.7c5.2 9.8 9.3 20.3 12.4 31.2C392.3 71.9 411.2 64 432 64c44.2 0 80 35.8 80 80s-35.8 80-80 80c-25.2 0-47.6-11.6-62.3-29.8c-4.7 10.3-10.4 19.9-17 28.9C373 243.4 401 256 432 256z"],
    "user-large": [512,512,["user-alt"],"f406","M368 144a112 112 0 1 0 -224 0 112 112 0 1 0 224 0zm-256 0a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zM32 480l448 0c-.7-70.8-58.3-128-129.3-128l-189.4 0C90.3 352 32.7 409.2 32 480zM0 481.3C0 392.2 72.2 320 161.3 320l189.4 0C439.8 320 512 392.2 512 481.3c0 17-13.8 30.7-30.7 30.7L30.7 512C13.8 512 0 498.2 0 481.3z"],
    "user-plus": [640,512,[],"f234","M224 32a96 96 0 1 1 0 192 96 96 0 1 1 0-192zm0 224A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 80l91.4 0c80 0 145 64.3 146.3 144L32 480c1.2-79.7 66.2-144 146.3-144zm0-32C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0zM512 304c0 8.8 7.2 16 16 16s16-7.2 16-16l0-80 80 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-80 0 0-80c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 80-80 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l80 0 0 80z"],
    "users": [640,512,[],"f0c0","M96 80a48 48 0 1 1 96 0A48 48 0 1 1 96 80zm128 0A80 80 0 1 0 64 80a80 80 0 1 0 160 0zm96 80a64 64 0 1 1 0 128 64 64 0 1 1 0-128zm0 160a96 96 0 1 0 0-192 96 96 0 1 0 0 192zm-58.7 64l117.3 0c54.2 0 98.4 42.5 101.2 96l-319.7 0c2.8-53.5 47-96 101.2-96zm0-32C187.7 352 128 411.7 128 485.3c0 14.7 11.9 26.7 26.7 26.7l330.7 0c14.7 0 26.7-11.9 26.7-26.7C512 411.7 452.3 352 378.7 352l-117.3 0zM512 32a48 48 0 1 1 0 96 48 48 0 1 1 0-96zm0 128A80 80 0 1 0 512 0a80 80 0 1 0 0 160zm16 64c44.2 0 80 35.8 80 80c0 8.8 7.2 16 16 16s16-7.2 16-16c0-61.9-50.1-112-112-112l-84 0c2.6 10.2 4 21 4 32l80 0zm-336 0c0-11 1.4-21.8 4-32l-84 0C50.1 192 0 242.1 0 304c0 8.8 7.2 16 16 16s16-7.2 16-16c0-44.2 35.8-80 80-80l80 0z"],
    "xmark": [384,512,["215","10060","10006","10005","128473","close","multiply","remove","times"],"f00d","M324.5 411.1c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6L214.6 256 347.1 123.5c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0L192 233.4 59.6 100.9c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6L169.4 256 36.9 388.5c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0L192 278.6 324.5 411.1z"]

  };
  var prefixes = [null    ,'fal',
    ,'fa-light'
];
  bunker(() => {
    for (const prefix of prefixes) {
      if (!prefix) continue;
      defineIcons(prefix, icons);
    }
  });

}());

/*!
 * Font Awesome Pro 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license (Commercial License)
 * Copyright 2024 Fonticons, Inc.
 */
(function () {
  'use strict';

  function _defineProperty(e, r, t) {
    return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
      value: t,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[r] = t, e;
  }
  function _inherits(t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
    t.prototype = Object.create(e && e.prototype, {
      constructor: {
        value: t,
        writable: !0,
        configurable: !0
      }
    }), Object.defineProperty(t, "prototype", {
      writable: !1
    }), e && _setPrototypeOf(t, e);
  }
  function ownKeys(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      r && (o = o.filter(function (r) {
        return Object.getOwnPropertyDescriptor(e, r).enumerable;
      })), t.push.apply(t, o);
    }
    return t;
  }
  function _objectSpread2(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = null != arguments[r] ? arguments[r] : {};
      r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {
        _defineProperty(e, r, t[r]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
        Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
      });
    }
    return e;
  }
  function _setPrototypeOf(t, e) {
    return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
      return t.__proto__ = e, t;
    }, _setPrototypeOf(t, e);
  }
  function _toPrimitive(t, r) {
    if ("object" != typeof t || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
      var i = e.call(t, r || "default");
      if ("object" != typeof i) return i;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
  }
  function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == typeof i ? i : i + "";
  }
  function _wrapRegExp() {
    _wrapRegExp = function (e, r) {
      return new BabelRegExp(e, void 0, r);
    };
    var e = RegExp.prototype,
      r = new WeakMap();
    function BabelRegExp(e, t, p) {
      var o = RegExp(e, t);
      return r.set(o, p || r.get(e)), _setPrototypeOf(o, BabelRegExp.prototype);
    }
    function buildGroups(e, t) {
      var p = r.get(t);
      return Object.keys(p).reduce(function (r, t) {
        var o = p[t];
        if ("number" == typeof o) r[t] = e[o];else {
          for (var i = 0; void 0 === e[o[i]] && i + 1 < o.length;) i++;
          r[t] = e[o[i]];
        }
        return r;
      }, Object.create(null));
    }
    return _inherits(BabelRegExp, RegExp), BabelRegExp.prototype.exec = function (r) {
      var t = e.exec.call(this, r);
      if (t) {
        t.groups = buildGroups(t, this);
        var p = t.indices;
        p && (p.groups = buildGroups(p, this));
      }
      return t;
    }, BabelRegExp.prototype[Symbol.replace] = function (t, p) {
      if ("string" == typeof p) {
        var o = r.get(this);
        return e[Symbol.replace].call(this, t, p.replace(/\$<([^>]+)>/g, function (e, r) {
          var t = o[r];
          return "$" + (Array.isArray(t) ? t.join("$") : t);
        }));
      }
      if ("function" == typeof p) {
        var i = this;
        return e[Symbol.replace].call(this, t, function () {
          var e = arguments;
          return "object" != typeof e[e.length - 1] && (e = [].slice.call(e)).push(buildGroups(e, i)), p.apply(this, e);
        });
      }
      return e[Symbol.replace].call(this, t, p);
    }, _wrapRegExp.apply(this, arguments);
  }

  const noop = () => {};
  let _WINDOW = {};
  let _DOCUMENT = {};
  let _MUTATION_OBSERVER = null;
  let _PERFORMANCE = {
    mark: noop,
    measure: noop
  };
  try {
    if (typeof window !== 'undefined') _WINDOW = window;
    if (typeof document !== 'undefined') _DOCUMENT = document;
    if (typeof MutationObserver !== 'undefined') _MUTATION_OBSERVER = MutationObserver;
    if (typeof performance !== 'undefined') _PERFORMANCE = performance;
  } catch (e) {}
  const {
    userAgent = ''
  } = _WINDOW.navigator || {};
  const WINDOW = _WINDOW;
  const DOCUMENT = _DOCUMENT;
  const MUTATION_OBSERVER = _MUTATION_OBSERVER;
  const PERFORMANCE = _PERFORMANCE;
  const IS_BROWSER = !!WINDOW.document;
  const IS_DOM = !!DOCUMENT.documentElement && !!DOCUMENT.head && typeof DOCUMENT.addEventListener === 'function' && typeof DOCUMENT.createElement === 'function';
  const IS_IE = ~userAgent.indexOf('MSIE') || ~userAgent.indexOf('Trident/');

  var p = /fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,
    g = /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i;
  var S = {
      classic: {
        fa: "solid",
        fas: "solid",
        "fa-solid": "solid",
        far: "regular",
        "fa-regular": "regular",
        fal: "light",
        "fa-light": "light",
        fat: "thin",
        "fa-thin": "thin",
        fab: "brands",
        "fa-brands": "brands"
      },
      duotone: {
        fa: "solid",
        fad: "solid",
        "fa-solid": "solid",
        "fa-duotone": "solid",
        fadr: "regular",
        "fa-regular": "regular",
        fadl: "light",
        "fa-light": "light",
        fadt: "thin",
        "fa-thin": "thin"
      },
      sharp: {
        fa: "solid",
        fass: "solid",
        "fa-solid": "solid",
        fasr: "regular",
        "fa-regular": "regular",
        fasl: "light",
        "fa-light": "light",
        fast: "thin",
        "fa-thin": "thin"
      },
      "sharp-duotone": {
        fa: "solid",
        fasds: "solid",
        "fa-solid": "solid",
        fasdr: "regular",
        "fa-regular": "regular",
        fasdl: "light",
        "fa-light": "light",
        fasdt: "thin",
        "fa-thin": "thin"
      }
    },
    A = {
      GROUP: "duotone-group",
      SWAP_OPACITY: "swap-opacity",
      PRIMARY: "primary",
      SECONDARY: "secondary"
    },
    P = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone"];
  var s = "classic",
    t = "duotone",
    r = "sharp",
    o = "sharp-duotone",
    L = [s, t, r, o];
  var G = {
      classic: {
        900: "fas",
        400: "far",
        normal: "far",
        300: "fal",
        100: "fat"
      },
      duotone: {
        900: "fad",
        400: "fadr",
        300: "fadl",
        100: "fadt"
      },
      sharp: {
        900: "fass",
        400: "fasr",
        300: "fasl",
        100: "fast"
      },
      "sharp-duotone": {
        900: "fasds",
        400: "fasdr",
        300: "fasdl",
        100: "fasdt"
      }
    };
  var lt = {
      "Font Awesome 6 Free": {
        900: "fas",
        400: "far"
      },
      "Font Awesome 6 Pro": {
        900: "fas",
        400: "far",
        normal: "far",
        300: "fal",
        100: "fat"
      },
      "Font Awesome 6 Brands": {
        400: "fab",
        normal: "fab"
      },
      "Font Awesome 6 Duotone": {
        900: "fad",
        400: "fadr",
        normal: "fadr",
        300: "fadl",
        100: "fadt"
      },
      "Font Awesome 6 Sharp": {
        900: "fass",
        400: "fasr",
        normal: "fasr",
        300: "fasl",
        100: "fast"
      },
      "Font Awesome 6 Sharp Duotone": {
        900: "fasds",
        400: "fasdr",
        normal: "fasdr",
        300: "fasdl",
        100: "fasdt"
      }
    };
  var pt = new Map([["classic", {
      defaultShortPrefixId: "fas",
      defaultStyleId: "solid",
      styleIds: ["solid", "regular", "light", "thin", "brands"],
      futureStyleIds: [],
      defaultFontWeight: 900
    }], ["sharp", {
      defaultShortPrefixId: "fass",
      defaultStyleId: "solid",
      styleIds: ["solid", "regular", "light", "thin"],
      futureStyleIds: [],
      defaultFontWeight: 900
    }], ["duotone", {
      defaultShortPrefixId: "fad",
      defaultStyleId: "solid",
      styleIds: ["solid", "regular", "light", "thin"],
      futureStyleIds: [],
      defaultFontWeight: 900
    }], ["sharp-duotone", {
      defaultShortPrefixId: "fasds",
      defaultStyleId: "solid",
      styleIds: ["solid", "regular", "light", "thin"],
      futureStyleIds: [],
      defaultFontWeight: 900
    }]]),
    xt = {
      classic: {
        solid: "fas",
        regular: "far",
        light: "fal",
        thin: "fat",
        brands: "fab"
      },
      duotone: {
        solid: "fad",
        regular: "fadr",
        light: "fadl",
        thin: "fadt"
      },
      sharp: {
        solid: "fass",
        regular: "fasr",
        light: "fasl",
        thin: "fast"
      },
      "sharp-duotone": {
        solid: "fasds",
        regular: "fasdr",
        light: "fasdl",
        thin: "fasdt"
      }
    };
  var Ft = ["fak", "fa-kit", "fakd", "fa-kit-duotone"],
    St = {
      kit: {
        fak: "kit",
        "fa-kit": "kit"
      },
      "kit-duotone": {
        fakd: "kit-duotone",
        "fa-kit-duotone": "kit-duotone"
      }
    },
    At = ["kit"];
  var Ct = {
    kit: {
      "fa-kit": "fak"
    },
    "kit-duotone": {
      "fa-kit-duotone": "fakd"
    }
  };
  var Lt = ["fak", "fakd"],
    Wt = {
      kit: {
        fak: "fa-kit"
      },
      "kit-duotone": {
        fakd: "fa-kit-duotone"
      }
    };
  var Et = {
      kit: {
        kit: "fak"
      },
      "kit-duotone": {
        "kit-duotone": "fakd"
      }
    };

  var t$1 = {
      GROUP: "duotone-group",
      SWAP_OPACITY: "swap-opacity",
      PRIMARY: "primary",
      SECONDARY: "secondary"
    },
    r$1 = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone"];
  var bt$1 = ["fak", "fa-kit", "fakd", "fa-kit-duotone"];
  var Yt = {
      "Font Awesome Kit": {
        400: "fak",
        normal: "fak"
      },
      "Font Awesome Kit Duotone": {
        400: "fakd",
        normal: "fakd"
      }
    };
  var ua = {
      classic: {
        "fa-brands": "fab",
        "fa-duotone": "fad",
        "fa-light": "fal",
        "fa-regular": "far",
        "fa-solid": "fas",
        "fa-thin": "fat"
      },
      duotone: {
        "fa-regular": "fadr",
        "fa-light": "fadl",
        "fa-thin": "fadt"
      },
      sharp: {
        "fa-solid": "fass",
        "fa-regular": "fasr",
        "fa-light": "fasl",
        "fa-thin": "fast"
      },
      "sharp-duotone": {
        "fa-solid": "fasds",
        "fa-regular": "fasdr",
        "fa-light": "fasdl",
        "fa-thin": "fasdt"
      }
    },
    I$1 = {
      classic: ["fas", "far", "fal", "fat", "fad"],
      duotone: ["fadr", "fadl", "fadt"],
      sharp: ["fass", "fasr", "fasl", "fast"],
      "sharp-duotone": ["fasds", "fasdr", "fasdl", "fasdt"]
    },
    ga = {
      classic: {
        fab: "fa-brands",
        fad: "fa-duotone",
        fal: "fa-light",
        far: "fa-regular",
        fas: "fa-solid",
        fat: "fa-thin"
      },
      duotone: {
        fadr: "fa-regular",
        fadl: "fa-light",
        fadt: "fa-thin"
      },
      sharp: {
        fass: "fa-solid",
        fasr: "fa-regular",
        fasl: "fa-light",
        fast: "fa-thin"
      },
      "sharp-duotone": {
        fasds: "fa-solid",
        fasdr: "fa-regular",
        fasdl: "fa-light",
        fasdt: "fa-thin"
      }
    },
    x = ["fa-solid", "fa-regular", "fa-light", "fa-thin", "fa-duotone", "fa-brands"],
    Ia = ["fa", "fas", "far", "fal", "fat", "fad", "fadr", "fadl", "fadt", "fab", "fass", "fasr", "fasl", "fast", "fasds", "fasdr", "fasdl", "fasdt", ...r$1, ...x],
    m$1 = ["solid", "regular", "light", "thin", "duotone", "brands"],
    c$1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    F$1 = c$1.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]),
    ma = [...Object.keys(I$1), ...m$1, "2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "fw", "inverse", "layers-counter", "layers-text", "layers", "li", "pull-left", "pull-right", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", t$1.GROUP, t$1.SWAP_OPACITY, t$1.PRIMARY, t$1.SECONDARY].concat(c$1.map(a => "".concat(a, "x"))).concat(F$1.map(a => "w-".concat(a)));
  var wa = {
      "Font Awesome 5 Free": {
        900: "fas",
        400: "far"
      },
      "Font Awesome 5 Pro": {
        900: "fas",
        400: "far",
        normal: "far",
        300: "fal"
      },
      "Font Awesome 5 Brands": {
        400: "fab",
        normal: "fab"
      },
      "Font Awesome 5 Duotone": {
        900: "fad"
      }
    };

  const NAMESPACE_IDENTIFIER = '___FONT_AWESOME___';
  const UNITS_IN_GRID = 16;
  const DEFAULT_CSS_PREFIX = 'fa';
  const DEFAULT_REPLACEMENT_CLASS = 'svg-inline--fa';
  const DATA_FA_I2SVG = 'data-fa-i2svg';
  const DATA_FA_PSEUDO_ELEMENT = 'data-fa-pseudo-element';
  const DATA_FA_PSEUDO_ELEMENT_PENDING = 'data-fa-pseudo-element-pending';
  const DATA_PREFIX = 'data-prefix';
  const DATA_ICON = 'data-icon';
  const HTML_CLASS_I2SVG_BASE_CLASS = 'fontawesome-i2svg';
  const MUTATION_APPROACH_ASYNC = 'async';
  const TAGNAMES_TO_SKIP_FOR_PSEUDOELEMENTS = ['HTML', 'HEAD', 'STYLE', 'SCRIPT'];
  const PRODUCTION = (() => {
    try {
      return "production" === 'production';
    } catch (e$$1) {
      return false;
    }
  })();
  function familyProxy(obj) {
    // Defaults to the classic family if family is not available
    return new Proxy(obj, {
      get(target, prop) {
        return prop in target ? target[prop] : target[s];
      }
    });
  }
  const _PREFIX_TO_STYLE = _objectSpread2({}, S);

  // We changed FACSSClassesToStyleId in the icons repo to be canonical and as such, "classic" family does not have any
  // duotone styles.  But we do still need duotone in _PREFIX_TO_STYLE below, so we are manually adding
  // {'fa-duotone': 'duotone'}
  _PREFIX_TO_STYLE[s] = _objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2({}, {
    'fa-duotone': 'duotone'
  }), S[s]), St['kit']), St['kit-duotone']);
  const PREFIX_TO_STYLE = familyProxy(_PREFIX_TO_STYLE);
  const _STYLE_TO_PREFIX = _objectSpread2({}, xt);

  // We changed FAStyleIdToShortPrefixId in the icons repo to be canonical and as such, "classic" family does not have any
  // duotone styles.  But we do still need duotone in _STYLE_TO_PREFIX below, so we are manually adding {duotone: 'fad'}
  _STYLE_TO_PREFIX[s] = _objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2({}, {
    duotone: 'fad'
  }), _STYLE_TO_PREFIX[s]), Et['kit']), Et['kit-duotone']);
  const STYLE_TO_PREFIX = familyProxy(_STYLE_TO_PREFIX);
  const _PREFIX_TO_LONG_STYLE = _objectSpread2({}, ga);
  _PREFIX_TO_LONG_STYLE[s] = _objectSpread2(_objectSpread2({}, _PREFIX_TO_LONG_STYLE[s]), Wt['kit']);
  const PREFIX_TO_LONG_STYLE = familyProxy(_PREFIX_TO_LONG_STYLE);
  const _LONG_STYLE_TO_PREFIX = _objectSpread2({}, ua);
  _LONG_STYLE_TO_PREFIX[s] = _objectSpread2(_objectSpread2({}, _LONG_STYLE_TO_PREFIX[s]), Ct['kit']);
  const LONG_STYLE_TO_PREFIX = familyProxy(_LONG_STYLE_TO_PREFIX);
  const ICON_SELECTION_SYNTAX_PATTERN = p; // eslint-disable-line no-useless-escape

  const LAYERS_TEXT_CLASSNAME = 'fa-layers-text';
  const FONT_FAMILY_PATTERN = g;
  const _FONT_WEIGHT_TO_PREFIX = _objectSpread2({}, G);
  const FONT_WEIGHT_TO_PREFIX = familyProxy(_FONT_WEIGHT_TO_PREFIX);
  const ATTRIBUTES_WATCHED_FOR_MUTATION = ['class', 'data-prefix', 'data-icon', 'data-fa-transform', 'data-fa-mask'];
  const DUOTONE_CLASSES = A;
  const RESERVED_CLASSES = [...At, ...ma];

  const initial = WINDOW.FontAwesomeConfig || {};
  function getAttrConfig(attr) {
    var element = DOCUMENT.querySelector('script[' + attr + ']');
    if (element) {
      return element.getAttribute(attr);
    }
  }
  function coerce(val) {
    // Getting an empty string will occur if the attribute is set on the HTML tag but without a value
    // We'll assume that this is an indication that it should be toggled to true
    if (val === '') return true;
    if (val === 'false') return false;
    if (val === 'true') return true;
    return val;
  }
  if (DOCUMENT && typeof DOCUMENT.querySelector === 'function') {
    const attrs = [['data-family-prefix', 'familyPrefix'], ['data-css-prefix', 'cssPrefix'], ['data-family-default', 'familyDefault'], ['data-style-default', 'styleDefault'], ['data-replacement-class', 'replacementClass'], ['data-auto-replace-svg', 'autoReplaceSvg'], ['data-auto-add-css', 'autoAddCss'], ['data-auto-a11y', 'autoA11y'], ['data-search-pseudo-elements', 'searchPseudoElements'], ['data-observe-mutations', 'observeMutations'], ['data-mutate-approach', 'mutateApproach'], ['data-keep-original-source', 'keepOriginalSource'], ['data-measure-performance', 'measurePerformance'], ['data-show-missing-icons', 'showMissingIcons']];
    attrs.forEach(_ref => {
      let [attr, key] = _ref;
      const val = coerce(getAttrConfig(attr));
      if (val !== undefined && val !== null) {
        initial[key] = val;
      }
    });
  }
  const _default = {
    styleDefault: 'solid',
    familyDefault: s,
    cssPrefix: DEFAULT_CSS_PREFIX,
    replacementClass: DEFAULT_REPLACEMENT_CLASS,
    autoReplaceSvg: true,
    autoAddCss: true,
    autoA11y: true,
    searchPseudoElements: false,
    observeMutations: true,
    mutateApproach: 'async',
    keepOriginalSource: true,
    measurePerformance: false,
    showMissingIcons: true
  };

  // familyPrefix is deprecated but we must still support it if present
  if (initial.familyPrefix) {
    initial.cssPrefix = initial.familyPrefix;
  }
  const _config = _objectSpread2(_objectSpread2({}, _default), initial);
  if (!_config.autoReplaceSvg) _config.observeMutations = false;
  const config = {};
  Object.keys(_default).forEach(key => {
    Object.defineProperty(config, key, {
      enumerable: true,
      set: function (val) {
        _config[key] = val;
        _onChangeCb.forEach(cb => cb(config));
      },
      get: function () {
        return _config[key];
      }
    });
  });

  // familyPrefix is deprecated as of 6.2.0 and should be removed in 7.0.0
  Object.defineProperty(config, 'familyPrefix', {
    enumerable: true,
    set: function (val) {
      _config.cssPrefix = val;
      _onChangeCb.forEach(cb => cb(config));
    },
    get: function () {
      return _config.cssPrefix;
    }
  });
  WINDOW.FontAwesomeConfig = config;
  const _onChangeCb = [];
  function onChange(cb) {
    _onChangeCb.push(cb);
    return () => {
      _onChangeCb.splice(_onChangeCb.indexOf(cb), 1);
    };
  }

  const d$2 = UNITS_IN_GRID;
  const meaninglessTransform = {
    size: 16,
    x: 0,
    y: 0,
    rotate: 0,
    flipX: false,
    flipY: false
  };
  function bunker(fn) {
    try {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }
      fn(...args);
    } catch (e) {
      if (!PRODUCTION) {
        throw e;
      }
    }
  }
  function insertCss(css) {
    if (!css || !IS_DOM) {
      return;
    }
    const style = DOCUMENT.createElement('style');
    style.setAttribute('type', 'text/css');
    style.innerHTML = css;
    const headChildren = DOCUMENT.head.childNodes;
    let beforeChild = null;
    for (let i = headChildren.length - 1; i > -1; i--) {
      const child = headChildren[i];
      const tagName = (child.tagName || '').toUpperCase();
      if (['STYLE', 'LINK'].indexOf(tagName) > -1) {
        beforeChild = child;
      }
    }
    DOCUMENT.head.insertBefore(style, beforeChild);
    return css;
  }
  const idPool = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  function nextUniqueId() {
    let size = 12;
    let id = '';
    while (size-- > 0) {
      id += idPool[Math.random() * 62 | 0];
    }
    return id;
  }
  function toArray(obj) {
    const array = [];
    for (let i = (obj || []).length >>> 0; i--;) {
      array[i] = obj[i];
    }
    return array;
  }
  function classArray(node) {
    if (node.classList) {
      return toArray(node.classList);
    } else {
      return (node.getAttribute('class') || '').split(' ').filter(i => i);
    }
  }
  function htmlEscape(str) {
    return "".concat(str).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&#39;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }
  function joinAttributes(attributes) {
    return Object.keys(attributes || {}).reduce((acc, attributeName) => {
      return acc + "".concat(attributeName, "=\"").concat(htmlEscape(attributes[attributeName]), "\" ");
    }, '').trim();
  }
  function joinStyles(styles) {
    return Object.keys(styles || {}).reduce((acc, styleName) => {
      return acc + "".concat(styleName, ": ").concat(styles[styleName].trim(), ";");
    }, '');
  }
  function transformIsMeaningful(transform) {
    return transform.size !== meaninglessTransform.size || transform.x !== meaninglessTransform.x || transform.y !== meaninglessTransform.y || transform.rotate !== meaninglessTransform.rotate || transform.flipX || transform.flipY;
  }
  function transformForSvg(_ref) {
    let {
      transform,
      containerWidth,
      iconWidth
    } = _ref;
    const outer = {
      transform: "translate(".concat(containerWidth / 2, " 256)")
    };
    const innerTranslate = "translate(".concat(transform.x * 32, ", ").concat(transform.y * 32, ") ");
    const innerScale = "scale(".concat(transform.size / 16 * (transform.flipX ? -1 : 1), ", ").concat(transform.size / 16 * (transform.flipY ? -1 : 1), ") ");
    const innerRotate = "rotate(".concat(transform.rotate, " 0 0)");
    const inner = {
      transform: "".concat(innerTranslate, " ").concat(innerScale, " ").concat(innerRotate)
    };
    const path = {
      transform: "translate(".concat(iconWidth / 2 * -1, " -256)")
    };
    return {
      outer,
      inner,
      path
    };
  }
  function transformForCss(_ref2) {
    let {
      transform,
      width = UNITS_IN_GRID,
      height = UNITS_IN_GRID,
      startCentered = false
    } = _ref2;
    let val = '';
    if (startCentered && IS_IE) {
      val += "translate(".concat(transform.x / d$2 - width / 2, "em, ").concat(transform.y / d$2 - height / 2, "em) ");
    } else if (startCentered) {
      val += "translate(calc(-50% + ".concat(transform.x / d$2, "em), calc(-50% + ").concat(transform.y / d$2, "em)) ");
    } else {
      val += "translate(".concat(transform.x / d$2, "em, ").concat(transform.y / d$2, "em) ");
    }
    val += "scale(".concat(transform.size / d$2 * (transform.flipX ? -1 : 1), ", ").concat(transform.size / d$2 * (transform.flipY ? -1 : 1), ") ");
    val += "rotate(".concat(transform.rotate, "deg) ");
    return val;
  }

  var baseStyles = ":host,:root{--fa-font-solid:normal 900 1em/1 \"Font Awesome 6 Pro\";--fa-font-regular:normal 400 1em/1 \"Font Awesome 6 Pro\";--fa-font-light:normal 300 1em/1 \"Font Awesome 6 Pro\";--fa-font-thin:normal 100 1em/1 \"Font Awesome 6 Pro\";--fa-font-duotone:normal 900 1em/1 \"Font Awesome 6 Duotone\";--fa-font-duotone-regular:normal 400 1em/1 \"Font Awesome 6 Duotone\";--fa-font-duotone-light:normal 300 1em/1 \"Font Awesome 6 Duotone\";--fa-font-duotone-thin:normal 100 1em/1 \"Font Awesome 6 Duotone\";--fa-font-brands:normal 400 1em/1 \"Font Awesome 6 Brands\";--fa-font-sharp-solid:normal 900 1em/1 \"Font Awesome 6 Sharp\";--fa-font-sharp-regular:normal 400 1em/1 \"Font Awesome 6 Sharp\";--fa-font-sharp-light:normal 300 1em/1 \"Font Awesome 6 Sharp\";--fa-font-sharp-thin:normal 100 1em/1 \"Font Awesome 6 Sharp\";--fa-font-sharp-duotone-solid:normal 900 1em/1 \"Font Awesome 6 Sharp Duotone\";--fa-font-sharp-duotone-regular:normal 400 1em/1 \"Font Awesome 6 Sharp Duotone\";--fa-font-sharp-duotone-light:normal 300 1em/1 \"Font Awesome 6 Sharp Duotone\";--fa-font-sharp-duotone-thin:normal 100 1em/1 \"Font Awesome 6 Sharp Duotone\"}svg:not(:host).svg-inline--fa,svg:not(:root).svg-inline--fa{overflow:visible;box-sizing:content-box}.svg-inline--fa{display:var(--fa-display,inline-block);height:1em;overflow:visible;vertical-align:-.125em}.svg-inline--fa.fa-2xs{vertical-align:.1em}.svg-inline--fa.fa-xs{vertical-align:0}.svg-inline--fa.fa-sm{vertical-align:-.0714285705em}.svg-inline--fa.fa-lg{vertical-align:-.2em}.svg-inline--fa.fa-xl{vertical-align:-.25em}.svg-inline--fa.fa-2xl{vertical-align:-.3125em}.svg-inline--fa.fa-pull-left{margin-right:var(--fa-pull-margin,.3em);width:auto}.svg-inline--fa.fa-pull-right{margin-left:var(--fa-pull-margin,.3em);width:auto}.svg-inline--fa.fa-li{width:var(--fa-li-width,2em);top:.25em}.svg-inline--fa.fa-fw{width:var(--fa-fw-width,1.25em)}.fa-layers svg.svg-inline--fa{bottom:0;left:0;margin:auto;position:absolute;right:0;top:0}.fa-layers-counter,.fa-layers-text{display:inline-block;position:absolute;text-align:center}.fa-layers{display:inline-block;height:1em;position:relative;text-align:center;vertical-align:-.125em;width:1em}.fa-layers svg.svg-inline--fa{transform-origin:center center}.fa-layers-text{left:50%;top:50%;transform:translate(-50%,-50%);transform-origin:center center}.fa-layers-counter{background-color:var(--fa-counter-background-color,#ff253a);border-radius:var(--fa-counter-border-radius,1em);box-sizing:border-box;color:var(--fa-inverse,#fff);line-height:var(--fa-counter-line-height,1);max-width:var(--fa-counter-max-width,5em);min-width:var(--fa-counter-min-width,1.5em);overflow:hidden;padding:var(--fa-counter-padding,.25em .5em);right:var(--fa-right,0);text-overflow:ellipsis;top:var(--fa-top,0);transform:scale(var(--fa-counter-scale,.25));transform-origin:top right}.fa-layers-bottom-right{bottom:var(--fa-bottom,0);right:var(--fa-right,0);top:auto;transform:scale(var(--fa-layers-scale,.25));transform-origin:bottom right}.fa-layers-bottom-left{bottom:var(--fa-bottom,0);left:var(--fa-left,0);right:auto;top:auto;transform:scale(var(--fa-layers-scale,.25));transform-origin:bottom left}.fa-layers-top-right{top:var(--fa-top,0);right:var(--fa-right,0);transform:scale(var(--fa-layers-scale,.25));transform-origin:top right}.fa-layers-top-left{left:var(--fa-left,0);right:auto;top:var(--fa-top,0);transform:scale(var(--fa-layers-scale,.25));transform-origin:top left}.fa-1x{font-size:1em}.fa-2x{font-size:2em}.fa-3x{font-size:3em}.fa-4x{font-size:4em}.fa-5x{font-size:5em}.fa-6x{font-size:6em}.fa-7x{font-size:7em}.fa-8x{font-size:8em}.fa-9x{font-size:9em}.fa-10x{font-size:10em}.fa-2xs{font-size:.625em;line-height:.1em;vertical-align:.225em}.fa-xs{font-size:.75em;line-height:.0833333337em;vertical-align:.125em}.fa-sm{font-size:.875em;line-height:.0714285718em;vertical-align:.0535714295em}.fa-lg{font-size:1.25em;line-height:.05em;vertical-align:-.075em}.fa-xl{font-size:1.5em;line-height:.0416666682em;vertical-align:-.125em}.fa-2xl{font-size:2em;line-height:.03125em;vertical-align:-.1875em}.fa-fw{text-align:center;width:1.25em}.fa-ul{list-style-type:none;margin-left:var(--fa-li-margin,2.5em);padding-left:0}.fa-ul>li{position:relative}.fa-li{left:calc(-1 * var(--fa-li-width,2em));position:absolute;text-align:center;width:var(--fa-li-width,2em);line-height:inherit}.fa-border{border-color:var(--fa-border-color,#eee);border-radius:var(--fa-border-radius,.1em);border-style:var(--fa-border-style,solid);border-width:var(--fa-border-width,.08em);padding:var(--fa-border-padding,.2em .25em .15em)}.fa-pull-left{float:left;margin-right:var(--fa-pull-margin,.3em)}.fa-pull-right{float:right;margin-left:var(--fa-pull-margin,.3em)}.fa-beat{animation-name:fa-beat;animation-delay:var(--fa-animation-delay,0s);animation-direction:var(--fa-animation-direction,normal);animation-duration:var(--fa-animation-duration,1s);animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-timing-function:var(--fa-animation-timing,ease-in-out)}.fa-bounce{animation-name:fa-bounce;animation-delay:var(--fa-animation-delay,0s);animation-direction:var(--fa-animation-direction,normal);animation-duration:var(--fa-animation-duration,1s);animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-timing-function:var(--fa-animation-timing,cubic-bezier(.28,.84,.42,1))}.fa-fade{animation-name:fa-fade;animation-delay:var(--fa-animation-delay,0s);animation-direction:var(--fa-animation-direction,normal);animation-duration:var(--fa-animation-duration,1s);animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-timing-function:var(--fa-animation-timing,cubic-bezier(.4,0,.6,1))}.fa-beat-fade{animation-name:fa-beat-fade;animation-delay:var(--fa-animation-delay,0s);animation-direction:var(--fa-animation-direction,normal);animation-duration:var(--fa-animation-duration,1s);animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-timing-function:var(--fa-animation-timing,cubic-bezier(.4,0,.6,1))}.fa-flip{animation-name:fa-flip;animation-delay:var(--fa-animation-delay,0s);animation-direction:var(--fa-animation-direction,normal);animation-duration:var(--fa-animation-duration,1s);animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-timing-function:var(--fa-animation-timing,ease-in-out)}.fa-shake{animation-name:fa-shake;animation-delay:var(--fa-animation-delay,0s);animation-direction:var(--fa-animation-direction,normal);animation-duration:var(--fa-animation-duration,1s);animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-timing-function:var(--fa-animation-timing,linear)}.fa-spin{animation-name:fa-spin;animation-delay:var(--fa-animation-delay,0s);animation-direction:var(--fa-animation-direction,normal);animation-duration:var(--fa-animation-duration,2s);animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-timing-function:var(--fa-animation-timing,linear)}.fa-spin-reverse{--fa-animation-direction:reverse}.fa-pulse,.fa-spin-pulse{animation-name:fa-spin;animation-direction:var(--fa-animation-direction,normal);animation-duration:var(--fa-animation-duration,1s);animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-timing-function:var(--fa-animation-timing,steps(8))}@media (prefers-reduced-motion:reduce){.fa-beat,.fa-beat-fade,.fa-bounce,.fa-fade,.fa-flip,.fa-pulse,.fa-shake,.fa-spin,.fa-spin-pulse{animation-delay:-1ms;animation-duration:1ms;animation-iteration-count:1;transition-delay:0s;transition-duration:0s}}@keyframes fa-beat{0%,90%{transform:scale(1)}45%{transform:scale(var(--fa-beat-scale,1.25))}}@keyframes fa-bounce{0%{transform:scale(1,1) translateY(0)}10%{transform:scale(var(--fa-bounce-start-scale-x,1.1),var(--fa-bounce-start-scale-y,.9)) translateY(0)}30%{transform:scale(var(--fa-bounce-jump-scale-x,.9),var(--fa-bounce-jump-scale-y,1.1)) translateY(var(--fa-bounce-height,-.5em))}50%{transform:scale(var(--fa-bounce-land-scale-x,1.05),var(--fa-bounce-land-scale-y,.95)) translateY(0)}57%{transform:scale(1,1) translateY(var(--fa-bounce-rebound,-.125em))}64%{transform:scale(1,1) translateY(0)}100%{transform:scale(1,1) translateY(0)}}@keyframes fa-fade{50%{opacity:var(--fa-fade-opacity,.4)}}@keyframes fa-beat-fade{0%,100%{opacity:var(--fa-beat-fade-opacity,.4);transform:scale(1)}50%{opacity:1;transform:scale(var(--fa-beat-fade-scale,1.125))}}@keyframes fa-flip{50%{transform:rotate3d(var(--fa-flip-x,0),var(--fa-flip-y,1),var(--fa-flip-z,0),var(--fa-flip-angle,-180deg))}}@keyframes fa-shake{0%{transform:rotate(-15deg)}4%{transform:rotate(15deg)}24%,8%{transform:rotate(-18deg)}12%,28%{transform:rotate(18deg)}16%{transform:rotate(-22deg)}20%{transform:rotate(22deg)}32%{transform:rotate(-12deg)}36%{transform:rotate(12deg)}100%,40%{transform:rotate(0)}}@keyframes fa-spin{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}.fa-rotate-90{transform:rotate(90deg)}.fa-rotate-180{transform:rotate(180deg)}.fa-rotate-270{transform:rotate(270deg)}.fa-flip-horizontal{transform:scale(-1,1)}.fa-flip-vertical{transform:scale(1,-1)}.fa-flip-both,.fa-flip-horizontal.fa-flip-vertical{transform:scale(-1,-1)}.fa-rotate-by{transform:rotate(var(--fa-rotate-angle,0))}.fa-stack{display:inline-block;vertical-align:middle;height:2em;position:relative;width:2.5em}.fa-stack-1x,.fa-stack-2x{bottom:0;left:0;margin:auto;position:absolute;right:0;top:0;z-index:var(--fa-stack-z-index,auto)}.svg-inline--fa.fa-stack-1x{height:1em;width:1.25em}.svg-inline--fa.fa-stack-2x{height:2em;width:2.5em}.fa-inverse{color:var(--fa-inverse,#fff)}.fa-sr-only,.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border-width:0}.fa-sr-only-focusable:not(:focus),.sr-only-focusable:not(:focus){position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border-width:0}.svg-inline--fa .fa-primary{fill:var(--fa-primary-color,currentColor);opacity:var(--fa-primary-opacity,1)}.svg-inline--fa .fa-secondary{fill:var(--fa-secondary-color,currentColor);opacity:var(--fa-secondary-opacity,.4)}.svg-inline--fa.fa-swap-opacity .fa-primary{opacity:var(--fa-secondary-opacity,.4)}.svg-inline--fa.fa-swap-opacity .fa-secondary{opacity:var(--fa-primary-opacity,1)}.svg-inline--fa mask .fa-primary,.svg-inline--fa mask .fa-secondary{fill:#000}";

  function css() {
    const dcp = DEFAULT_CSS_PREFIX;
    const drc = DEFAULT_REPLACEMENT_CLASS;
    const fp = config.cssPrefix;
    const rc = config.replacementClass;
    let s = baseStyles;
    if (fp !== dcp || rc !== drc) {
      const dPatt = new RegExp("\\.".concat(dcp, "\\-"), 'g');
      const customPropPatt = new RegExp("\\--".concat(dcp, "\\-"), 'g');
      const rPatt = new RegExp("\\.".concat(drc), 'g');
      s = s.replace(dPatt, ".".concat(fp, "-")).replace(customPropPatt, "--".concat(fp, "-")).replace(rPatt, ".".concat(rc));
    }
    return s;
  }
  let _cssInserted = false;
  function ensureCss() {
    if (config.autoAddCss && !_cssInserted) {
      insertCss(css());
      _cssInserted = true;
    }
  }
  var InjectCSS = {
    mixout() {
      return {
        dom: {
          css,
          insertCss: ensureCss
        }
      };
    },
    hooks() {
      return {
        beforeDOMElementCreation() {
          ensureCss();
        },
        beforeI2svg() {
          ensureCss();
        }
      };
    }
  };

  const w = WINDOW || {};
  if (!w[NAMESPACE_IDENTIFIER]) w[NAMESPACE_IDENTIFIER] = {};
  if (!w[NAMESPACE_IDENTIFIER].styles) w[NAMESPACE_IDENTIFIER].styles = {};
  if (!w[NAMESPACE_IDENTIFIER].hooks) w[NAMESPACE_IDENTIFIER].hooks = {};
  if (!w[NAMESPACE_IDENTIFIER].shims) w[NAMESPACE_IDENTIFIER].shims = [];
  var namespace = w[NAMESPACE_IDENTIFIER];

  const functions = [];
  const listener = function () {
    DOCUMENT.removeEventListener('DOMContentLoaded', listener);
    loaded = 1;
    functions.map(fn => fn());
  };
  let loaded = false;
  if (IS_DOM) {
    loaded = (DOCUMENT.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(DOCUMENT.readyState);
    if (!loaded) DOCUMENT.addEventListener('DOMContentLoaded', listener);
  }
  function domready (fn) {
    if (!IS_DOM) return;
    loaded ? setTimeout(fn, 0) : functions.push(fn);
  }

  function toHtml(abstractNodes) {
    const {
      tag,
      attributes = {},
      children = []
    } = abstractNodes;
    if (typeof abstractNodes === 'string') {
      return htmlEscape(abstractNodes);
    } else {
      return "<".concat(tag, " ").concat(joinAttributes(attributes), ">").concat(children.map(toHtml).join(''), "</").concat(tag, ">");
    }
  }

  function iconFromMapping(mapping, prefix, iconName) {
    if (mapping && mapping[prefix] && mapping[prefix][iconName]) {
      return {
        prefix,
        iconName,
        icon: mapping[prefix][iconName]
      };
    }
  }

  /**
   * Internal helper to bind a function known to have 4 arguments
   * to a given context.
   */
  var bindInternal4 = function bindInternal4(func, thisContext) {
    return function (a, b, c, d) {
      return func.call(thisContext, a, b, c, d);
    };
  };

  /**
   * # Reduce
   *
   * A fast object `.reduce()` implementation.
   *
   * @param  {Object}   subject      The object to reduce over.
   * @param  {Function} fn           The reducer function.
   * @param  {mixed}    initialValue The initial value for the reducer, defaults to subject[0].
   * @param  {Object}   thisContext  The context for the reducer.
   * @return {mixed}                 The final result.
   */
  var reduce = function fastReduceObject(subject, fn, initialValue, thisContext) {
    var keys = Object.keys(subject),
      length = keys.length,
      iterator = thisContext !== undefined ? bindInternal4(fn, thisContext) : fn,
      i,
      key,
      result;
    if (initialValue === undefined) {
      i = 1;
      result = subject[keys[0]];
    } else {
      i = 0;
      result = initialValue;
    }
    for (; i < length; i++) {
      key = keys[i];
      result = iterator(result, subject[key], key, subject);
    }
    return result;
  };

  /**
   * ucs2decode() and codePointAt() are both works of Mathias Bynens and licensed under MIT
   *
   * Copyright Mathias Bynens <https://mathiasbynens.be/>

   * Permission is hereby granted, free of charge, to any person obtaining
   * a copy of this software and associated documentation files (the
   * "Software"), to deal in the Software without restriction, including
   * without limitation the rights to use, copy, modify, merge, publish,
   * distribute, sublicense, and/or sell copies of the Software, and to
   * permit persons to whom the Software is furnished to do so, subject to
   * the following conditions:

   * The above copyright notice and this permission notice shall be
   * included in all copies or substantial portions of the Software.

   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
   * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
   * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
   * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
   * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
   * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
   * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
   */

  function ucs2decode(string) {
    const output = [];
    let counter = 0;
    const length = string.length;
    while (counter < length) {
      const value = string.charCodeAt(counter++);
      if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
        const extra = string.charCodeAt(counter++);
        if ((extra & 0xFC00) == 0xDC00) {
          // eslint-disable-line eqeqeq
          output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
        } else {
          output.push(value);
          counter--;
        }
      } else {
        output.push(value);
      }
    }
    return output;
  }
  function toHex(unicode) {
    const decoded = ucs2decode(unicode);
    return decoded.length === 1 ? decoded[0].toString(16) : null;
  }
  function codePointAt(string, index) {
    const size = string.length;
    let first = string.charCodeAt(index);
    let second;
    if (first >= 0xD800 && first <= 0xDBFF && size > index + 1) {
      second = string.charCodeAt(index + 1);
      if (second >= 0xDC00 && second <= 0xDFFF) {
        return (first - 0xD800) * 0x400 + second - 0xDC00 + 0x10000;
      }
    }
    return first;
  }

  function normalizeIcons(icons) {
    return Object.keys(icons).reduce((acc, iconName) => {
      const icon = icons[iconName];
      const expanded = !!icon.icon;
      if (expanded) {
        acc[icon.iconName] = icon.icon;
      } else {
        acc[iconName] = icon;
      }
      return acc;
    }, {});
  }
  function defineIcons(prefix, icons) {
    let params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    const {
      skipHooks = false
    } = params;
    const normalized = normalizeIcons(icons);
    if (typeof namespace.hooks.addPack === 'function' && !skipHooks) {
      namespace.hooks.addPack(prefix, normalizeIcons(icons));
    } else {
      namespace.styles[prefix] = _objectSpread2(_objectSpread2({}, namespace.styles[prefix] || {}), normalized);
    }

    /**
     * Font Awesome 4 used the prefix of `fa` for all icons. With the introduction
     * of new styles we needed to differentiate between them. Prefix `fa` is now an alias
     * for `fas` so we'll ease the upgrade process for our users by automatically defining
     * this as well.
     */
    if (prefix === 'fas') {
      defineIcons('fa', icons);
    }
  }

  const duotonePathRe = [/*#__PURE__*/_wrapRegExp(/path d="([^"]+)".*path d="([^"]+)"/, {
    d1: 1,
    d2: 2
  }), /*#__PURE__*/_wrapRegExp(/path class="([^"]+)".*d="([^"]+)".*path class="([^"]+)".*d="([^"]+)"/, {
    cls1: 1,
    d1: 2,
    cls2: 3,
    d2: 4
  }), /*#__PURE__*/_wrapRegExp(/path class="([^"]+)".*d="([^"]+)"/, {
    cls1: 1,
    d1: 2
  })];

  const {
    styles,
    shims
  } = namespace;
  const FAMILY_NAMES = Object.keys(PREFIX_TO_LONG_STYLE);
  const PREFIXES_FOR_FAMILY = FAMILY_NAMES.reduce((acc, familyId) => {
    acc[familyId] = Object.keys(PREFIX_TO_LONG_STYLE[familyId]);
    return acc;
  }, {});
  let _defaultUsablePrefix = null;
  let _byUnicode = {};
  let _byLigature = {};
  let _byOldName = {};
  let _byOldUnicode = {};
  let _byAlias = {};
  function isReserved(name) {
    return ~RESERVED_CLASSES.indexOf(name);
  }
  function getIconName(cssPrefix, cls) {
    const parts = cls.split('-');
    const prefix = parts[0];
    const iconName = parts.slice(1).join('-');
    if (prefix === cssPrefix && iconName !== '' && !isReserved(iconName)) {
      return iconName;
    } else {
      return null;
    }
  }
  const build = () => {
    const lookup = reducer => {
      return reduce(styles, (o$$1, style, prefix) => {
        o$$1[prefix] = reduce(style, reducer, {});
        return o$$1;
      }, {});
    };
    _byUnicode = lookup((acc, icon, iconName) => {
      if (icon[3]) {
        acc[icon[3]] = iconName;
      }
      if (icon[2]) {
        const aliases = icon[2].filter(a$$1 => {
          return typeof a$$1 === 'number';
        });
        aliases.forEach(alias => {
          acc[alias.toString(16)] = iconName;
        });
      }
      return acc;
    });
    _byLigature = lookup((acc, icon, iconName) => {
      acc[iconName] = iconName;
      if (icon[2]) {
        const aliases = icon[2].filter(a$$1 => {
          return typeof a$$1 === 'string';
        });
        aliases.forEach(alias => {
          acc[alias] = iconName;
        });
      }
      return acc;
    });
    _byAlias = lookup((acc, icon, iconName) => {
      const aliases = icon[2];
      acc[iconName] = iconName;
      aliases.forEach(alias => {
        acc[alias] = iconName;
      });
      return acc;
    });

    // If we have a Kit, we can't determine if regular is available since we
    // could be auto-fetching it. We'll have to assume that it is available.
    const hasRegular = 'far' in styles || config.autoFetchSvg;
    const shimLookups = reduce(shims, (acc, shim) => {
      const maybeNameMaybeUnicode = shim[0];
      let prefix = shim[1];
      const iconName = shim[2];
      if (prefix === 'far' && !hasRegular) {
        prefix = 'fas';
      }
      if (typeof maybeNameMaybeUnicode === 'string') {
        acc.names[maybeNameMaybeUnicode] = {
          prefix,
          iconName
        };
      }
      if (typeof maybeNameMaybeUnicode === 'number') {
        acc.unicodes[maybeNameMaybeUnicode.toString(16)] = {
          prefix,
          iconName
        };
      }
      return acc;
    }, {
      names: {},
      unicodes: {}
    });
    _byOldName = shimLookups.names;
    _byOldUnicode = shimLookups.unicodes;
    _defaultUsablePrefix = getCanonicalPrefix(config.styleDefault, {
      family: config.familyDefault
    });
  };
  onChange(c$$1 => {
    _defaultUsablePrefix = getCanonicalPrefix(c$$1.styleDefault, {
      family: config.familyDefault
    });
  });
  build();
  function byUnicode(prefix, unicode) {
    return (_byUnicode[prefix] || {})[unicode];
  }
  function byLigature(prefix, ligature) {
    return (_byLigature[prefix] || {})[ligature];
  }
  function byAlias(prefix, alias) {
    return (_byAlias[prefix] || {})[alias];
  }
  function byOldName(name) {
    return _byOldName[name] || {
      prefix: null,
      iconName: null
    };
  }
  function byOldUnicode(unicode) {
    const oldUnicode = _byOldUnicode[unicode];
    const newUnicode = byUnicode('fas', unicode);
    return oldUnicode || (newUnicode ? {
      prefix: 'fas',
      iconName: newUnicode
    } : null) || {
      prefix: null,
      iconName: null
    };
  }
  function getDefaultUsablePrefix() {
    return _defaultUsablePrefix;
  }
  const emptyCanonicalIcon = () => {
    return {
      prefix: null,
      iconName: null,
      rest: []
    };
  };
  function getFamilyId(values) {
    let family = s;
    const famProps = FAMILY_NAMES.reduce((acc, familyId) => {
      acc[familyId] = "".concat(config.cssPrefix, "-").concat(familyId);
      return acc;
    }, {});
    L.forEach(familyId => {
      if (values.includes(famProps[familyId]) || values.some(v$$1 => PREFIXES_FOR_FAMILY[familyId].includes(v$$1))) {
        family = familyId;
      }
    });
    return family;
  }
  function getCanonicalPrefix(styleOrPrefix) {
    let params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    const {
      family = s
    } = params;
    const style = PREFIX_TO_STYLE[family][styleOrPrefix];

    // handles the exception of passing in only a family of 'duotone' with no style
    if (family === t && !styleOrPrefix) {
      return 'fad';
    }
    const prefix = STYLE_TO_PREFIX[family][styleOrPrefix] || STYLE_TO_PREFIX[family][style];
    const defined = styleOrPrefix in namespace.styles ? styleOrPrefix : null;
    const result = prefix || defined || null;
    return result;
  }
  function moveNonFaClassesToRest(classNames) {
    let rest = [];
    let iconName = null;
    classNames.forEach(cls => {
      const result = getIconName(config.cssPrefix, cls);
      if (result) {
        iconName = result;
      } else if (cls) {
        rest.push(cls);
      }
    });
    return {
      iconName,
      rest
    };
  }
  function sortedUniqueValues(arr) {
    return arr.sort().filter((value, index, arr) => {
      return arr.indexOf(value) === index;
    });
  }
  function getCanonicalIcon(values) {
    let params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    const {
      skipLookups = false
    } = params;
    let givenPrefix = null;
    const faCombinedClasses = Ia.concat(bt$1);
    const faStyleOrFamilyClasses = sortedUniqueValues(values.filter(cls => faCombinedClasses.includes(cls)));
    const nonStyleOrFamilyClasses = sortedUniqueValues(values.filter(cls => !Ia.includes(cls)));
    const faStyles = faStyleOrFamilyClasses.filter(cls => {
      givenPrefix = cls;
      return !P.includes(cls);
    });
    const [styleFromValues = null] = faStyles;
    const family = getFamilyId(faStyleOrFamilyClasses);
    const canonical = _objectSpread2(_objectSpread2({}, moveNonFaClassesToRest(nonStyleOrFamilyClasses)), {}, {
      prefix: getCanonicalPrefix(styleFromValues, {
        family
      })
    });
    return _objectSpread2(_objectSpread2(_objectSpread2({}, canonical), getDefaultCanonicalPrefix({
      values,
      family,
      styles,
      config,
      canonical,
      givenPrefix
    })), applyShimAndAlias(skipLookups, givenPrefix, canonical));
  }
  function applyShimAndAlias(skipLookups, givenPrefix, canonical) {
    let {
      prefix,
      iconName
    } = canonical;
    if (skipLookups || !prefix || !iconName) {
      return {
        prefix,
        iconName
      };
    }
    const shim = givenPrefix === 'fa' ? byOldName(iconName) : {};
    const aliasIconName = byAlias(prefix, iconName);
    iconName = shim.iconName || aliasIconName || iconName;
    prefix = shim.prefix || prefix;
    if (prefix === 'far' && !styles['far'] && styles['fas'] && !config.autoFetchSvg) {
      // Allow a fallback from the regular style to solid if regular is not available
      // but only if we aren't auto-fetching SVGs
      prefix = 'fas';
    }
    return {
      prefix,
      iconName
    };
  }
  const newCanonicalFamilies = L.filter(familyId => {
    return familyId !== s || familyId !== t;
  });
  const newCanonicalStyles = Object.keys(ga).filter(key => key !== s).map(key => Object.keys(ga[key])).flat();
  function getDefaultCanonicalPrefix(prefixOptions) {
    const {
      values,
      family,
      canonical,
      givenPrefix = '',
      styles = {},
      config: config$$1 = {}
    } = prefixOptions;
    const isDuotoneFamily = family === t;
    const valuesHasDuotone = values.includes('fa-duotone') || values.includes('fad');
    const defaultFamilyIsDuotone = config$$1.familyDefault === 'duotone';
    const canonicalPrefixIsDuotone = canonical.prefix === 'fad' || canonical.prefix === 'fa-duotone';
    if (!isDuotoneFamily && (valuesHasDuotone || defaultFamilyIsDuotone || canonicalPrefixIsDuotone)) {
      canonical.prefix = 'fad';
    }
    if (values.includes('fa-brands') || values.includes('fab')) {
      canonical.prefix = 'fab';
    }
    if (!canonical.prefix && newCanonicalFamilies.includes(family)) {
      const validPrefix = Object.keys(styles).find(key => newCanonicalStyles.includes(key));
      if (validPrefix || config$$1.autoFetchSvg) {
        const defaultPrefix = pt.get(family).defaultShortPrefixId;
        canonical.prefix = defaultPrefix;
        canonical.iconName = byAlias(canonical.prefix, canonical.iconName) || canonical.iconName;
      }
    }
    if (canonical.prefix === 'fa' || givenPrefix === 'fa') {
      // The fa prefix is not canonical. So if it has made it through until this point
      // we will shift it to the correct prefix.
      canonical.prefix = getDefaultUsablePrefix() || 'fas';
    }
    return canonical;
  }

  class Library {
    constructor() {
      this.definitions = {};
    }
    add() {
      for (var _len = arguments.length, definitions = new Array(_len), _key = 0; _key < _len; _key++) {
        definitions[_key] = arguments[_key];
      }
      const additions = definitions.reduce(this._pullDefinitions, {});
      Object.keys(additions).forEach(key => {
        this.definitions[key] = _objectSpread2(_objectSpread2({}, this.definitions[key] || {}), additions[key]);
        defineIcons(key, additions[key]);

        // TODO can we stop doing this? We can't get the icons by 'fa-solid' any longer so this probably needs to change
        const longPrefix = PREFIX_TO_LONG_STYLE[s][key];
        if (longPrefix) defineIcons(longPrefix, additions[key]);
        build();
      });
    }
    reset() {
      this.definitions = {};
    }
    _pullDefinitions(additions, definition) {
      const normalized = definition.prefix && definition.iconName && definition.icon ? {
        0: definition
      } : definition;
      Object.keys(normalized).map(key => {
        const {
          prefix,
          iconName,
          icon
        } = normalized[key];
        const aliases = icon[2];
        if (!additions[prefix]) additions[prefix] = {};
        if (aliases.length > 0) {
          aliases.forEach(alias => {
            if (typeof alias === 'string') {
              additions[prefix][alias] = icon;
            }
          });
        }
        additions[prefix][iconName] = icon;
      });
      return additions;
    }
  }

  let _plugins = [];
  let _hooks = {};
  const providers = {};
  const defaultProviderKeys = Object.keys(providers);
  function registerPlugins(nextPlugins, _ref) {
    let {
      mixoutsTo: obj
    } = _ref;
    _plugins = nextPlugins;
    _hooks = {};
    Object.keys(providers).forEach(k => {
      if (defaultProviderKeys.indexOf(k) === -1) {
        delete providers[k];
      }
    });
    _plugins.forEach(plugin => {
      const mixout = plugin.mixout ? plugin.mixout() : {};
      Object.keys(mixout).forEach(tk => {
        if (typeof mixout[tk] === 'function') {
          obj[tk] = mixout[tk];
        }
        if (typeof mixout[tk] === 'object') {
          Object.keys(mixout[tk]).forEach(sk => {
            if (!obj[tk]) {
              obj[tk] = {};
            }
            obj[tk][sk] = mixout[tk][sk];
          });
        }
      });
      if (plugin.hooks) {
        const hooks = plugin.hooks();
        Object.keys(hooks).forEach(hook => {
          if (!_hooks[hook]) {
            _hooks[hook] = [];
          }
          _hooks[hook].push(hooks[hook]);
        });
      }
      if (plugin.provides) {
        plugin.provides(providers);
      }
    });
    return obj;
  }
  function chainHooks(hook, accumulator) {
    for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      args[_key - 2] = arguments[_key];
    }
    const hookFns = _hooks[hook] || [];
    hookFns.forEach(hookFn => {
      accumulator = hookFn.apply(null, [accumulator, ...args]); // eslint-disable-line no-useless-call
    });
    return accumulator;
  }
  function callHooks(hook) {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }
    const hookFns = _hooks[hook] || [];
    hookFns.forEach(hookFn => {
      hookFn.apply(null, args);
    });
    return undefined;
  }
  function callProvided() {
    const hook = arguments[0];
    const args = Array.prototype.slice.call(arguments, 1);
    return providers[hook] ? providers[hook].apply(null, args) : undefined;
  }

  function findIconDefinition(iconLookup) {
    if (iconLookup.prefix === 'fa') {
      iconLookup.prefix = 'fas';
    }
    let {
      iconName
    } = iconLookup;
    const prefix = iconLookup.prefix || getDefaultUsablePrefix();
    if (!iconName) return;
    iconName = byAlias(prefix, iconName) || iconName;
    return iconFromMapping(library.definitions, prefix, iconName) || iconFromMapping(namespace.styles, prefix, iconName);
  }
  const library = new Library();
  const noAuto = () => {
    config.autoReplaceSvg = false;
    config.observeMutations = false;
    callHooks('noAuto');
  };
  const dom = {
    i2svg: function () {
      let params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      if (IS_DOM) {
        callHooks('beforeI2svg', params);
        callProvided('pseudoElements2svg', params);
        return callProvided('i2svg', params);
      } else {
        return Promise.reject(new Error('Operation requires a DOM of some kind.'));
      }
    },
    watch: function () {
      let params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      const {
        autoReplaceSvgRoot
      } = params;
      if (config.autoReplaceSvg === false) {
        config.autoReplaceSvg = true;
      }
      config.observeMutations = true;
      domready(() => {
        autoReplace({
          autoReplaceSvgRoot
        });
        callHooks('watch', params);
      });
    }
  };
  const parse = {
    icon: icon => {
      if (icon === null) {
        return null;
      }
      if (typeof icon === 'object' && icon.prefix && icon.iconName) {
        return {
          prefix: icon.prefix,
          iconName: byAlias(icon.prefix, icon.iconName) || icon.iconName
        };
      }
      if (Array.isArray(icon) && icon.length === 2) {
        const iconName = icon[1].indexOf('fa-') === 0 ? icon[1].slice(3) : icon[1];
        const prefix = getCanonicalPrefix(icon[0]);
        return {
          prefix,
          iconName: byAlias(prefix, iconName) || iconName
        };
      }
      if (typeof icon === 'string' && (icon.indexOf("".concat(config.cssPrefix, "-")) > -1 || icon.match(ICON_SELECTION_SYNTAX_PATTERN))) {
        const canonicalIcon = getCanonicalIcon(icon.split(' '), {
          skipLookups: true
        });
        return {
          prefix: canonicalIcon.prefix || getDefaultUsablePrefix(),
          iconName: byAlias(canonicalIcon.prefix, canonicalIcon.iconName) || canonicalIcon.iconName
        };
      }
      if (typeof icon === 'string') {
        const prefix = getDefaultUsablePrefix();
        return {
          prefix,
          iconName: byAlias(prefix, icon) || icon
        };
      }
    }
  };
  const api = {
    noAuto,
    config,
    dom,
    parse,
    library,
    findIconDefinition,
    toHtml
  };
  const autoReplace = function () {
    let params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    const {
      autoReplaceSvgRoot = DOCUMENT
    } = params;
    if ((Object.keys(namespace.styles).length > 0 || config.autoFetchSvg) && IS_DOM && config.autoReplaceSvg) api.dom.i2svg({
      node: autoReplaceSvgRoot
    });
  };
  function bootstrap(plugins) {
    if (IS_BROWSER) {
      if (!WINDOW.FontAwesome) {
        WINDOW.FontAwesome = api;
      }
      domready(() => {
        autoReplace();
        callHooks('bootstrap');
      });
    }
    namespace.hooks = _objectSpread2(_objectSpread2({}, namespace.hooks), {}, {
      addPack: (prefix, icons) => {
        namespace.styles[prefix] = _objectSpread2(_objectSpread2({}, namespace.styles[prefix] || {}), icons);
        build();
        autoReplace();
      },
      addPacks: packs => {
        packs.forEach(_ref => {
          let [prefix, icons] = _ref;
          namespace.styles[prefix] = _objectSpread2(_objectSpread2({}, namespace.styles[prefix] || {}), icons);
        });
        build();
        autoReplace();
      },
      addShims: shims => {
        namespace.shims.push(...shims);
        build();
        autoReplace();
      }
    });
  }

  function domVariants(val, abstractCreator) {
    Object.defineProperty(val, 'abstract', {
      get: abstractCreator
    });
    Object.defineProperty(val, 'html', {
      get: function () {
        return val.abstract.map(a => toHtml(a));
      }
    });
    Object.defineProperty(val, 'node', {
      get: function () {
        if (!IS_DOM) return;
        const container = DOCUMENT.createElement('div');
        container.innerHTML = val.html;
        return container.children;
      }
    });
    return val;
  }

  function asIcon (_ref) {
    let {
      children,
      main,
      mask,
      attributes,
      styles,
      transform
    } = _ref;
    if (transformIsMeaningful(transform) && main.found && !mask.found) {
      const {
        width,
        height
      } = main;
      const offset = {
        x: width / height / 2,
        y: 0.5
      };
      attributes['style'] = joinStyles(_objectSpread2(_objectSpread2({}, styles), {}, {
        'transform-origin': "".concat(offset.x + transform.x / 16, "em ").concat(offset.y + transform.y / 16, "em")
      }));
    }
    return [{
      tag: 'svg',
      attributes,
      children
    }];
  }

  function asSymbol (_ref) {
    let {
      prefix,
      iconName,
      children,
      attributes,
      symbol
    } = _ref;
    const id = symbol === true ? "".concat(prefix, "-").concat(config.cssPrefix, "-").concat(iconName) : symbol;
    return [{
      tag: 'svg',
      attributes: {
        style: 'display: none;'
      },
      children: [{
        tag: 'symbol',
        attributes: _objectSpread2(_objectSpread2({}, attributes), {}, {
          id
        }),
        children
      }]
    }];
  }

  function makeInlineSvgAbstract(params) {
    const {
      icons: {
        main,
        mask
      },
      prefix,
      iconName,
      transform,
      symbol,
      title,
      maskId,
      titleId,
      extra,
      watchable = false
    } = params;
    const {
      width,
      height
    } = mask.found ? mask : main;
    const isUploadedIcon = Lt.includes(prefix);
    const attrClass = [config.replacementClass, iconName ? "".concat(config.cssPrefix, "-").concat(iconName) : ''].filter(c$$1 => extra.classes.indexOf(c$$1) === -1).filter(c$$1 => c$$1 !== '' || !!c$$1).concat(extra.classes).join(' ');
    let content = {
      children: [],
      attributes: _objectSpread2(_objectSpread2({}, extra.attributes), {}, {
        'data-prefix': prefix,
        'data-icon': iconName,
        'class': attrClass,
        'role': extra.attributes.role || 'img',
        'xmlns': 'http://www.w3.org/2000/svg',
        'viewBox': "0 0 ".concat(width, " ").concat(height)
      })
    };
    const uploadedIconWidthStyle = isUploadedIcon && !~extra.classes.indexOf('fa-fw') ? {
      width: "".concat(width / height * 16 * 0.0625, "em")
    } : {};
    if (watchable) {
      content.attributes[DATA_FA_I2SVG] = '';
    }
    if (title) {
      content.children.push({
        tag: 'title',
        attributes: {
          id: content.attributes['aria-labelledby'] || "title-".concat(titleId || nextUniqueId())
        },
        children: [title]
      });
      delete content.attributes.title;
    }
    const args = _objectSpread2(_objectSpread2({}, content), {}, {
      prefix,
      iconName,
      main,
      mask,
      maskId,
      transform,
      symbol,
      styles: _objectSpread2(_objectSpread2({}, uploadedIconWidthStyle), extra.styles)
    });
    const {
      children,
      attributes
    } = mask.found && main.found ? callProvided('generateAbstractMask', args) || {
      children: [],
      attributes: {}
    } : callProvided('generateAbstractIcon', args) || {
      children: [],
      attributes: {}
    };
    args.children = children;
    args.attributes = attributes;
    if (symbol) {
      return asSymbol(args);
    } else {
      return asIcon(args);
    }
  }
  function makeLayersTextAbstract(params) {
    const {
      content,
      width,
      height,
      transform,
      title,
      extra,
      watchable = false
    } = params;
    const attributes = _objectSpread2(_objectSpread2(_objectSpread2({}, extra.attributes), title ? {
      'title': title
    } : {}), {}, {
      'class': extra.classes.join(' ')
    });
    if (watchable) {
      attributes[DATA_FA_I2SVG] = '';
    }
    const styles = _objectSpread2({}, extra.styles);
    if (transformIsMeaningful(transform)) {
      styles['transform'] = transformForCss({
        transform,
        startCentered: true,
        width,
        height
      });
      styles['-webkit-transform'] = styles['transform'];
    }
    const styleString = joinStyles(styles);
    if (styleString.length > 0) {
      attributes['style'] = styleString;
    }
    const val = [];
    val.push({
      tag: 'span',
      attributes,
      children: [content]
    });
    if (title) {
      val.push({
        tag: 'span',
        attributes: {
          class: 'sr-only'
        },
        children: [title]
      });
    }
    return val;
  }
  function makeLayersCounterAbstract(params) {
    const {
      content,
      title,
      extra
    } = params;
    const attributes = _objectSpread2(_objectSpread2(_objectSpread2({}, extra.attributes), title ? {
      'title': title
    } : {}), {}, {
      'class': extra.classes.join(' ')
    });
    const styleString = joinStyles(extra.styles);
    if (styleString.length > 0) {
      attributes['style'] = styleString;
    }
    const val = [];
    val.push({
      tag: 'span',
      attributes,
      children: [content]
    });
    if (title) {
      val.push({
        tag: 'span',
        attributes: {
          class: 'sr-only'
        },
        children: [title]
      });
    }
    return val;
  }

  const {
    styles: styles$1
  } = namespace;
  function asFoundIcon(icon) {
    const width = icon[0];
    const height = icon[1];
    const [vectorData] = icon.slice(4);
    let element = null;
    if (Array.isArray(vectorData)) {
      element = {
        tag: 'g',
        attributes: {
          class: "".concat(config.cssPrefix, "-").concat(DUOTONE_CLASSES.GROUP)
        },
        children: [{
          tag: 'path',
          attributes: {
            class: "".concat(config.cssPrefix, "-").concat(DUOTONE_CLASSES.SECONDARY),
            fill: 'currentColor',
            d: vectorData[0]
          }
        }, {
          tag: 'path',
          attributes: {
            class: "".concat(config.cssPrefix, "-").concat(DUOTONE_CLASSES.PRIMARY),
            fill: 'currentColor',
            d: vectorData[1]
          }
        }]
      };
    } else {
      element = {
        tag: 'path',
        attributes: {
          fill: 'currentColor',
          d: vectorData
        }
      };
    }
    return {
      found: true,
      width,
      height,
      icon: element
    };
  }
  const missingIconResolutionMixin = {
    found: false,
    width: 512,
    height: 512
  };
  function maybeNotifyMissing(iconName, prefix) {
    if (!PRODUCTION && !config.showMissingIcons && iconName) {
      console.error("Icon with name \"".concat(iconName, "\" and prefix \"").concat(prefix, "\" is missing."));
    }
  }
  function findIcon(iconName, prefix) {
    let givenPrefix = prefix;
    if (prefix === 'fa' && config.styleDefault !== null) {
      prefix = getDefaultUsablePrefix();
    }
    return new Promise((resolve, reject) => {
      if (givenPrefix === 'fa') {
        const shim = byOldName(iconName) || {};
        iconName = shim.iconName || iconName;
        prefix = shim.prefix || prefix;
      }
      if (iconName && prefix && styles$1[prefix] && styles$1[prefix][iconName]) {
        const icon = styles$1[prefix][iconName];
        return resolve(asFoundIcon(icon));
      }
      maybeNotifyMissing(iconName, prefix);
      resolve(_objectSpread2(_objectSpread2({}, missingIconResolutionMixin), {}, {
        icon: config.showMissingIcons && iconName ? callProvided('missingIconAbstract') || {} : {}
      }));
    });
  }

  const noop$1 = () => {};
  const p$2 = config.measurePerformance && PERFORMANCE && PERFORMANCE.mark && PERFORMANCE.measure ? PERFORMANCE : {
    mark: noop$1,
    measure: noop$1
  };
  const preamble = "FA \"6.7.2\"";
  const begin = name => {
    p$2.mark("".concat(preamble, " ").concat(name, " begins"));
    return () => end(name);
  };
  const end = name => {
    p$2.mark("".concat(preamble, " ").concat(name, " ends"));
    p$2.measure("".concat(preamble, " ").concat(name), "".concat(preamble, " ").concat(name, " begins"), "".concat(preamble, " ").concat(name, " ends"));
  };
  var perf = {
    begin,
    end
  };

  const noop$2 = () => {};
  function isWatched(node) {
    const i2svg = node.getAttribute ? node.getAttribute(DATA_FA_I2SVG) : null;
    return typeof i2svg === 'string';
  }
  function hasPrefixAndIcon(node) {
    const prefix = node.getAttribute ? node.getAttribute(DATA_PREFIX) : null;
    const icon = node.getAttribute ? node.getAttribute(DATA_ICON) : null;
    return prefix && icon;
  }
  function hasBeenReplaced(node) {
    return node && node.classList && node.classList.contains && node.classList.contains(config.replacementClass);
  }
  function getMutator() {
    if (config.autoReplaceSvg === true) {
      return mutators.replace;
    }
    const mutator = mutators[config.autoReplaceSvg];
    return mutator || mutators.replace;
  }
  function createElementNS(tag) {
    return DOCUMENT.createElementNS('http://www.w3.org/2000/svg', tag);
  }
  function createElement(tag) {
    return DOCUMENT.createElement(tag);
  }
  function convertSVG(abstractObj) {
    let params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    const {
      ceFn = abstractObj.tag === 'svg' ? createElementNS : createElement
    } = params;
    if (typeof abstractObj === 'string') {
      return DOCUMENT.createTextNode(abstractObj);
    }
    const tag = ceFn(abstractObj.tag);
    Object.keys(abstractObj.attributes || []).forEach(function (key) {
      tag.setAttribute(key, abstractObj.attributes[key]);
    });
    const children = abstractObj.children || [];
    children.forEach(function (child) {
      tag.appendChild(convertSVG(child, {
        ceFn
      }));
    });
    return tag;
  }
  function nodeAsComment(node) {
    let comment = " ".concat(node.outerHTML, " ");
    return comment;
  }
  const mutators = {
    replace: function (mutation) {
      const node = mutation[0];
      if (node.parentNode) {
        mutation[1].forEach(abstract => {
          node.parentNode.insertBefore(convertSVG(abstract), node);
        });
        if (node.getAttribute(DATA_FA_I2SVG) === null && config.keepOriginalSource) {
          let comment = DOCUMENT.createComment(nodeAsComment(node));
          node.parentNode.replaceChild(comment, node);
        } else {
          node.remove();
        }
      }
    },
    nest: function (mutation) {
      const node = mutation[0];
      const abstract = mutation[1];

      // If we already have a replaced node we do not want to continue nesting within it.
      // Short-circuit to the standard replacement
      if (~classArray(node).indexOf(config.replacementClass)) {
        return mutators.replace(mutation);
      }
      const forSvg = new RegExp("".concat(config.cssPrefix, "-.*"));
      delete abstract[0].attributes.id;
      if (abstract[0].attributes.class) {
        const splitClasses = abstract[0].attributes.class.split(' ').reduce((acc, cls) => {
          if (cls === config.replacementClass || cls.match(forSvg)) {
            acc.toSvg.push(cls);
          } else {
            acc.toNode.push(cls);
          }
          return acc;
        }, {
          toNode: [],
          toSvg: []
        });
        abstract[0].attributes.class = splitClasses.toSvg.join(' ');
        if (splitClasses.toNode.length === 0) {
          node.removeAttribute('class');
        } else {
          node.setAttribute('class', splitClasses.toNode.join(' '));
        }
      }
      const newInnerHTML = abstract.map(a => toHtml(a)).join('\n');
      node.setAttribute(DATA_FA_I2SVG, '');
      node.innerHTML = newInnerHTML;
    }
  };
  function performOperationSync(op) {
    op();
  }
  function perform(mutations, callback) {
    const callbackFunction = typeof callback === 'function' ? callback : noop$2;
    if (mutations.length === 0) {
      callbackFunction();
    } else {
      let frame = performOperationSync;
      if (config.mutateApproach === MUTATION_APPROACH_ASYNC) {
        frame = WINDOW.requestAnimationFrame || performOperationSync;
      }
      frame(() => {
        const mutator = getMutator();
        const mark = perf.begin('mutate');
        mutations.map(mutator);
        mark();
        callbackFunction();
      });
    }
  }
  let disabled = false;
  function disableObservation() {
    disabled = true;
  }
  function enableObservation() {
    disabled = false;
  }
  let mo = null;
  function observe(options) {
    if (!MUTATION_OBSERVER) {
      return;
    }
    if (!config.observeMutations) {
      return;
    }
    const {
      treeCallback = noop$2,
      nodeCallback = noop$2,
      pseudoElementsCallback = noop$2,
      observeMutationsRoot = DOCUMENT
    } = options;
    mo = new MUTATION_OBSERVER(objects => {
      if (disabled) return;
      const defaultPrefix = getDefaultUsablePrefix();
      toArray(objects).forEach(mutationRecord => {
        if (mutationRecord.type === 'childList' && mutationRecord.addedNodes.length > 0 && !isWatched(mutationRecord.addedNodes[0])) {
          if (config.searchPseudoElements) {
            pseudoElementsCallback(mutationRecord.target);
          }
          treeCallback(mutationRecord.target);
        }
        if (mutationRecord.type === 'attributes' && mutationRecord.target.parentNode && config.searchPseudoElements) {
          pseudoElementsCallback(mutationRecord.target.parentNode);
        }
        if (mutationRecord.type === 'attributes' && isWatched(mutationRecord.target) && ~ATTRIBUTES_WATCHED_FOR_MUTATION.indexOf(mutationRecord.attributeName)) {
          if (mutationRecord.attributeName === 'class' && hasPrefixAndIcon(mutationRecord.target)) {
            const {
              prefix,
              iconName
            } = getCanonicalIcon(classArray(mutationRecord.target));
            mutationRecord.target.setAttribute(DATA_PREFIX, prefix || defaultPrefix);
            if (iconName) mutationRecord.target.setAttribute(DATA_ICON, iconName);
          } else if (hasBeenReplaced(mutationRecord.target)) {
            nodeCallback(mutationRecord.target);
          }
        }
      });
    });
    if (!IS_DOM) return;
    mo.observe(observeMutationsRoot, {
      childList: true,
      attributes: true,
      characterData: true,
      subtree: true
    });
  }
  function disconnect() {
    if (!mo) return;
    mo.disconnect();
  }

  function styleParser (node) {
    const style = node.getAttribute('style');
    let val = [];
    if (style) {
      val = style.split(';').reduce((acc, style) => {
        const styles = style.split(':');
        const prop = styles[0];
        const value = styles.slice(1);
        if (prop && value.length > 0) {
          acc[prop] = value.join(':').trim();
        }
        return acc;
      }, {});
    }
    return val;
  }

  function classParser (node) {
    const existingPrefix = node.getAttribute('data-prefix');
    const existingIconName = node.getAttribute('data-icon');
    const innerText = node.innerText !== undefined ? node.innerText.trim() : '';
    let val = getCanonicalIcon(classArray(node));
    if (!val.prefix) {
      val.prefix = getDefaultUsablePrefix();
    }
    if (existingPrefix && existingIconName) {
      val.prefix = existingPrefix;
      val.iconName = existingIconName;
    }
    if (val.iconName && val.prefix) {
      return val;
    }
    if (val.prefix && innerText.length > 0) {
      val.iconName = byLigature(val.prefix, node.innerText) || byUnicode(val.prefix, toHex(node.innerText));
    }
    if (!val.iconName && config.autoFetchSvg && node.firstChild && node.firstChild.nodeType === Node.TEXT_NODE) {
      val.iconName = node.firstChild.data;
    }
    return val;
  }

  function attributesParser (node) {
    const extraAttributes = toArray(node.attributes).reduce((acc, attr) => {
      if (acc.name !== 'class' && acc.name !== 'style') {
        acc[attr.name] = attr.value;
      }
      return acc;
    }, {});
    const title = node.getAttribute('title');
    const titleId = node.getAttribute('data-fa-title-id');
    if (config.autoA11y) {
      if (title) {
        extraAttributes['aria-labelledby'] = "".concat(config.replacementClass, "-title-").concat(titleId || nextUniqueId());
      } else {
        extraAttributes['aria-hidden'] = 'true';
        extraAttributes['focusable'] = 'false';
      }
    }
    return extraAttributes;
  }

  function blankMeta() {
    return {
      iconName: null,
      title: null,
      titleId: null,
      prefix: null,
      transform: meaninglessTransform,
      symbol: false,
      mask: {
        iconName: null,
        prefix: null,
        rest: []
      },
      maskId: null,
      extra: {
        classes: [],
        styles: {},
        attributes: {}
      }
    };
  }
  function parseMeta(node) {
    let parser = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
      styleParser: true
    };
    const {
      iconName,
      prefix,
      rest: extraClasses
    } = classParser(node);
    const extraAttributes = attributesParser(node);
    const pluginMeta = chainHooks('parseNodeAttributes', {}, node);
    let extraStyles = parser.styleParser ? styleParser(node) : [];
    return _objectSpread2({
      iconName,
      title: node.getAttribute('title'),
      titleId: node.getAttribute('data-fa-title-id'),
      prefix,
      transform: meaninglessTransform,
      mask: {
        iconName: null,
        prefix: null,
        rest: []
      },
      maskId: null,
      symbol: false,
      extra: {
        classes: extraClasses,
        styles: extraStyles,
        attributes: extraAttributes
      }
    }, pluginMeta);
  }

  const {
    styles: styles$2
  } = namespace;
  function generateMutation(node) {
    const nodeMeta = config.autoReplaceSvg === 'nest' ? parseMeta(node, {
      styleParser: false
    }) : parseMeta(node);
    if (~nodeMeta.extra.classes.indexOf(LAYERS_TEXT_CLASSNAME)) {
      return callProvided('generateLayersText', node, nodeMeta);
    } else {
      return callProvided('generateSvgReplacementMutation', node, nodeMeta);
    }
  }
  function getKnownPrefixes() {
    return [...Ft, ...Ia];
  }
  function onTree(root) {
    let callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    if (!IS_DOM) return Promise.resolve();
    const htmlClassList = DOCUMENT.documentElement.classList;
    const hclAdd = suffix => htmlClassList.add("".concat(HTML_CLASS_I2SVG_BASE_CLASS, "-").concat(suffix));
    const hclRemove = suffix => htmlClassList.remove("".concat(HTML_CLASS_I2SVG_BASE_CLASS, "-").concat(suffix));
    const prefixes = config.autoFetchSvg ? getKnownPrefixes() : P.concat(Object.keys(styles$2));
    if (!prefixes.includes('fa')) {
      prefixes.push('fa');
    }
    const prefixesDomQuery = [".".concat(LAYERS_TEXT_CLASSNAME, ":not([").concat(DATA_FA_I2SVG, "])")].concat(prefixes.map(p$$1 => ".".concat(p$$1, ":not([").concat(DATA_FA_I2SVG, "])"))).join(', ');
    if (prefixesDomQuery.length === 0) {
      return Promise.resolve();
    }
    let candidates = [];
    try {
      candidates = toArray(root.querySelectorAll(prefixesDomQuery));
    } catch (e$$1) {
      // noop
    }
    if (candidates.length > 0) {
      hclAdd('pending');
      hclRemove('complete');
    } else {
      return Promise.resolve();
    }
    const mark = perf.begin('onTree');
    const mutations = candidates.reduce((acc, node) => {
      try {
        const mutation = generateMutation(node);
        if (mutation) {
          acc.push(mutation);
        }
      } catch (e$$1) {
        if (!PRODUCTION) {
          if (e$$1.name === 'MissingIcon') {
            console.error(e$$1);
          }
        }
      }
      return acc;
    }, []);
    return new Promise((resolve, reject) => {
      Promise.all(mutations).then(resolvedMutations => {
        perform(resolvedMutations, () => {
          hclAdd('active');
          hclAdd('complete');
          hclRemove('pending');
          if (typeof callback === 'function') callback();
          mark();
          resolve();
        });
      }).catch(e$$1 => {
        mark();
        reject(e$$1);
      });
    });
  }
  function onNode(node) {
    let callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    generateMutation(node).then(mutation => {
      if (mutation) {
        perform([mutation], callback);
      }
    });
  }
  function resolveIcons(next) {
    return function (maybeIconDefinition) {
      let params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      const iconDefinition = (maybeIconDefinition || {}).icon ? maybeIconDefinition : findIconDefinition(maybeIconDefinition || {});
      let {
        mask
      } = params;
      if (mask) {
        mask = (mask || {}).icon ? mask : findIconDefinition(mask || {});
      }
      return next(iconDefinition, _objectSpread2(_objectSpread2({}, params), {}, {
        mask
      }));
    };
  }
  const render = function (iconDefinition) {
    let params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    const {
      transform = meaninglessTransform,
      symbol = false,
      mask = null,
      maskId = null,
      title = null,
      titleId = null,
      classes = [],
      attributes = {},
      styles = {}
    } = params;
    if (!iconDefinition) return;
    const {
      prefix,
      iconName,
      icon
    } = iconDefinition;
    return domVariants(_objectSpread2({
      type: 'icon'
    }, iconDefinition), () => {
      callHooks('beforeDOMElementCreation', {
        iconDefinition,
        params
      });
      if (config.autoA11y) {
        if (title) {
          attributes['aria-labelledby'] = "".concat(config.replacementClass, "-title-").concat(titleId || nextUniqueId());
        } else {
          attributes['aria-hidden'] = 'true';
          attributes['focusable'] = 'false';
        }
      }
      return makeInlineSvgAbstract({
        icons: {
          main: asFoundIcon(icon),
          mask: mask ? asFoundIcon(mask.icon) : {
            found: false,
            width: null,
            height: null,
            icon: {}
          }
        },
        prefix,
        iconName,
        transform: _objectSpread2(_objectSpread2({}, meaninglessTransform), transform),
        symbol,
        title,
        maskId,
        titleId,
        extra: {
          attributes,
          styles,
          classes
        }
      });
    });
  };
  var ReplaceElements = {
    mixout() {
      return {
        icon: resolveIcons(render)
      };
    },
    hooks() {
      return {
        mutationObserverCallbacks(accumulator) {
          accumulator.treeCallback = onTree;
          accumulator.nodeCallback = onNode;
          return accumulator;
        }
      };
    },
    provides(providers$$1) {
      providers$$1.i2svg = function (params) {
        const {
          node = DOCUMENT,
          callback = () => {}
        } = params;
        return onTree(node, callback);
      };
      providers$$1.generateSvgReplacementMutation = function (node, nodeMeta) {
        const {
          iconName,
          title,
          titleId,
          prefix,
          transform,
          symbol,
          mask,
          maskId,
          extra
        } = nodeMeta;
        return new Promise((resolve, reject) => {
          Promise.all([findIcon(iconName, prefix), mask.iconName ? findIcon(mask.iconName, mask.prefix) : Promise.resolve({
            found: false,
            width: 512,
            height: 512,
            icon: {}
          })]).then(_ref => {
            let [main, mask] = _ref;
            resolve([node, makeInlineSvgAbstract({
              icons: {
                main,
                mask
              },
              prefix,
              iconName,
              transform,
              symbol,
              maskId,
              title,
              titleId,
              extra,
              watchable: true
            })]);
          }).catch(reject);
        });
      };
      providers$$1.generateAbstractIcon = function (_ref2) {
        let {
          children,
          attributes,
          main,
          transform,
          styles
        } = _ref2;
        const styleString = joinStyles(styles);
        if (styleString.length > 0) {
          attributes['style'] = styleString;
        }
        let nextChild;
        if (transformIsMeaningful(transform)) {
          nextChild = callProvided('generateAbstractTransformGrouping', {
            main,
            transform,
            containerWidth: main.width,
            iconWidth: main.width
          });
        }
        children.push(nextChild || main.icon);
        return {
          children,
          attributes
        };
      };
    }
  };

  var Layers = {
    mixout() {
      return {
        layer(assembler) {
          let params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          const {
            classes = []
          } = params;
          return domVariants({
            type: 'layer'
          }, () => {
            callHooks('beforeDOMElementCreation', {
              assembler,
              params
            });
            let children = [];
            assembler(args => {
              Array.isArray(args) ? args.map(a => {
                children = children.concat(a.abstract);
              }) : children = children.concat(args.abstract);
            });
            return [{
              tag: 'span',
              attributes: {
                class: ["".concat(config.cssPrefix, "-layers"), ...classes].join(' ')
              },
              children
            }];
          });
        }
      };
    }
  };

  var LayersCounter = {
    mixout() {
      return {
        counter(content) {
          let params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          const {
            title = null,
            classes = [],
            attributes = {},
            styles = {}
          } = params;
          return domVariants({
            type: 'counter',
            content
          }, () => {
            callHooks('beforeDOMElementCreation', {
              content,
              params
            });
            return makeLayersCounterAbstract({
              content: content.toString(),
              title,
              extra: {
                attributes,
                styles,
                classes: ["".concat(config.cssPrefix, "-layers-counter"), ...classes]
              }
            });
          });
        }
      };
    }
  };

  var LayersText = {
    mixout() {
      return {
        text(content) {
          let params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          const {
            transform = meaninglessTransform,
            title = null,
            classes = [],
            attributes = {},
            styles = {}
          } = params;
          return domVariants({
            type: 'text',
            content
          }, () => {
            callHooks('beforeDOMElementCreation', {
              content,
              params
            });
            return makeLayersTextAbstract({
              content,
              transform: _objectSpread2(_objectSpread2({}, meaninglessTransform), transform),
              title,
              extra: {
                attributes,
                styles,
                classes: ["".concat(config.cssPrefix, "-layers-text"), ...classes]
              }
            });
          });
        }
      };
    },
    provides(providers$$1) {
      providers$$1.generateLayersText = function (node, nodeMeta) {
        const {
          title,
          transform,
          extra
        } = nodeMeta;
        let width = null;
        let height = null;
        if (IS_IE) {
          const computedFontSize = parseInt(getComputedStyle(node).fontSize, 10);
          const boundingClientRect = node.getBoundingClientRect();
          width = boundingClientRect.width / computedFontSize;
          height = boundingClientRect.height / computedFontSize;
        }
        if (config.autoA11y && !title) {
          extra.attributes['aria-hidden'] = 'true';
        }
        return Promise.resolve([node, makeLayersTextAbstract({
          content: node.innerHTML,
          width,
          height,
          transform,
          title,
          extra,
          watchable: true
        })]);
      };
    }
  };

  const CLEAN_CONTENT_PATTERN = new RegExp('\u{22}', 'ug');
  const SECONDARY_UNICODE_RANGE = [1105920, 1112319];
  const _FONT_FAMILY_WEIGHT_TO_PREFIX = _objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2({}, {
    FontAwesome: {
      normal: 'fas',
      400: 'fas'
    }
  }), lt), wa), Yt);
  const FONT_FAMILY_WEIGHT_TO_PREFIX = Object.keys(_FONT_FAMILY_WEIGHT_TO_PREFIX).reduce((acc, key) => {
    acc[key.toLowerCase()] = _FONT_FAMILY_WEIGHT_TO_PREFIX[key];
    return acc;
  }, {});
  const FONT_FAMILY_WEIGHT_FALLBACK = Object.keys(FONT_FAMILY_WEIGHT_TO_PREFIX).reduce((acc, fontFamily) => {
    const weights = FONT_FAMILY_WEIGHT_TO_PREFIX[fontFamily];
    acc[fontFamily] = weights[900] || [...Object.entries(weights)][0][1];
    return acc;
  }, {});
  function hexValueFromContent(content) {
    const cleaned = content.replace(CLEAN_CONTENT_PATTERN, '');
    const codePoint = codePointAt(cleaned, 0);
    const isPrependTen = codePoint >= SECONDARY_UNICODE_RANGE[0] && codePoint <= SECONDARY_UNICODE_RANGE[1];
    const isDoubled = cleaned.length === 2 ? cleaned[0] === cleaned[1] : false;
    return {
      value: isDoubled ? toHex(cleaned[0]) : toHex(cleaned),
      isSecondary: isPrependTen || isDoubled
    };
  }
  function getPrefix(fontFamily, fontWeight) {
    const fontFamilySanitized = fontFamily.replace(/^['"]|['"]$/g, '').toLowerCase();
    const fontWeightInteger = parseInt(fontWeight);
    const fontWeightSanitized = isNaN(fontWeightInteger) ? 'normal' : fontWeightInteger;
    return (FONT_FAMILY_WEIGHT_TO_PREFIX[fontFamilySanitized] || {})[fontWeightSanitized] || FONT_FAMILY_WEIGHT_FALLBACK[fontFamilySanitized];
  }
  function replaceForPosition(node, position) {
    const pendingAttribute = "".concat(DATA_FA_PSEUDO_ELEMENT_PENDING).concat(position.replace(':', '-'));
    return new Promise((resolve, reject) => {
      if (node.getAttribute(pendingAttribute) !== null) {
        // This node is already being processed
        return resolve();
      }
      const children = toArray(node.children);
      const alreadyProcessedPseudoElement = children.filter(c$$1 => c$$1.getAttribute(DATA_FA_PSEUDO_ELEMENT) === position)[0];
      const styles = WINDOW.getComputedStyle(node, position);
      const fontFamily = styles.getPropertyValue('font-family');
      const fontFamilyMatch = fontFamily.match(FONT_FAMILY_PATTERN);
      const fontWeight = styles.getPropertyValue('font-weight');
      const content = styles.getPropertyValue('content');
      if (alreadyProcessedPseudoElement && !fontFamilyMatch) {
        // If we've already processed it but the current computed style does not result in a font-family,
        // that probably means that a class name that was previously present to make the icon has been
        // removed. So we now should delete the icon.
        node.removeChild(alreadyProcessedPseudoElement);
        return resolve();
      } else if (fontFamilyMatch && content !== 'none' && content !== '') {
        const content = styles.getPropertyValue('content');
        let prefix = getPrefix(fontFamily, fontWeight);
        const {
          value: hexValue,
          isSecondary
        } = hexValueFromContent(content);
        const isV4 = fontFamilyMatch[0].startsWith('FontAwesome');
        let iconName = byUnicode(prefix, hexValue);
        let iconIdentifier = iconName;
        if (isV4) {
          const iconName4 = byOldUnicode(hexValue);
          if (iconName4.iconName && iconName4.prefix) {
            iconName = iconName4.iconName;
            prefix = iconName4.prefix;
          }
        }

        // Only convert the pseudo element in this ::before/::after position into an icon if we haven't
        // already done so with the same prefix and iconName
        if (iconName && !isSecondary && (!alreadyProcessedPseudoElement || alreadyProcessedPseudoElement.getAttribute(DATA_PREFIX) !== prefix || alreadyProcessedPseudoElement.getAttribute(DATA_ICON) !== iconIdentifier)) {
          node.setAttribute(pendingAttribute, iconIdentifier);
          if (alreadyProcessedPseudoElement) {
            // Delete the old one, since we're replacing it with a new one
            node.removeChild(alreadyProcessedPseudoElement);
          }
          const meta = blankMeta();
          const {
            extra
          } = meta;
          extra.attributes[DATA_FA_PSEUDO_ELEMENT] = position;
          findIcon(iconName, prefix).then(main => {
            const abstract = makeInlineSvgAbstract(_objectSpread2(_objectSpread2({}, meta), {}, {
              icons: {
                main,
                mask: emptyCanonicalIcon()
              },
              prefix,
              iconName: iconIdentifier,
              extra,
              watchable: true
            }));
            const element = DOCUMENT.createElementNS('http://www.w3.org/2000/svg', 'svg');
            if (position === '::before') {
              node.insertBefore(element, node.firstChild);
            } else {
              node.appendChild(element);
            }
            element.outerHTML = abstract.map(a$$1 => toHtml(a$$1)).join('\n');
            node.removeAttribute(pendingAttribute);
            resolve();
          }).catch(reject);
        } else {
          resolve();
        }
      } else {
        resolve();
      }
    });
  }
  function replace(node) {
    return Promise.all([replaceForPosition(node, '::before'), replaceForPosition(node, '::after')]);
  }
  function processable(node) {
    return node.parentNode !== document.head && !~TAGNAMES_TO_SKIP_FOR_PSEUDOELEMENTS.indexOf(node.tagName.toUpperCase()) && !node.getAttribute(DATA_FA_PSEUDO_ELEMENT) && (!node.parentNode || node.parentNode.tagName !== 'svg');
  }
  function searchPseudoElements(root) {
    if (!IS_DOM) return;
    return new Promise((resolve, reject) => {
      const operations = toArray(root.querySelectorAll('*')).filter(processable).map(replace);
      const end = perf.begin('searchPseudoElements');
      disableObservation();
      Promise.all(operations).then(() => {
        end();
        enableObservation();
        resolve();
      }).catch(() => {
        end();
        enableObservation();
        reject();
      });
    });
  }
  var PseudoElements = {
    hooks() {
      return {
        mutationObserverCallbacks(accumulator) {
          accumulator.pseudoElementsCallback = searchPseudoElements;
          return accumulator;
        }
      };
    },
    provides(providers) {
      providers.pseudoElements2svg = function (params) {
        const {
          node = DOCUMENT
        } = params;
        if (config.searchPseudoElements) {
          searchPseudoElements(node);
        }
      };
    }
  };

  let _unwatched = false;
  var MutationObserver$1 = {
    mixout() {
      return {
        dom: {
          unwatch() {
            disableObservation();
            _unwatched = true;
          }
        }
      };
    },
    hooks() {
      return {
        bootstrap() {
          observe(chainHooks('mutationObserverCallbacks', {}));
        },
        noAuto() {
          disconnect();
        },
        watch(params) {
          const {
            observeMutationsRoot
          } = params;
          if (_unwatched) {
            enableObservation();
          } else {
            observe(chainHooks('mutationObserverCallbacks', {
              observeMutationsRoot
            }));
          }
        }
      };
    }
  };

  const parseTransformString = transformString => {
    let transform = {
      size: 16,
      x: 0,
      y: 0,
      flipX: false,
      flipY: false,
      rotate: 0
    };
    return transformString.toLowerCase().split(' ').reduce((acc, n) => {
      const parts = n.toLowerCase().split('-');
      const first = parts[0];
      let rest = parts.slice(1).join('-');
      if (first && rest === 'h') {
        acc.flipX = true;
        return acc;
      }
      if (first && rest === 'v') {
        acc.flipY = true;
        return acc;
      }
      rest = parseFloat(rest);
      if (isNaN(rest)) {
        return acc;
      }
      switch (first) {
        case 'grow':
          acc.size = acc.size + rest;
          break;
        case 'shrink':
          acc.size = acc.size - rest;
          break;
        case 'left':
          acc.x = acc.x - rest;
          break;
        case 'right':
          acc.x = acc.x + rest;
          break;
        case 'up':
          acc.y = acc.y - rest;
          break;
        case 'down':
          acc.y = acc.y + rest;
          break;
        case 'rotate':
          acc.rotate = acc.rotate + rest;
          break;
      }
      return acc;
    }, transform);
  };
  var PowerTransforms = {
    mixout() {
      return {
        parse: {
          transform: transformString => {
            return parseTransformString(transformString);
          }
        }
      };
    },
    hooks() {
      return {
        parseNodeAttributes(accumulator, node) {
          const transformString = node.getAttribute('data-fa-transform');
          if (transformString) {
            accumulator.transform = parseTransformString(transformString);
          }
          return accumulator;
        }
      };
    },
    provides(providers) {
      providers.generateAbstractTransformGrouping = function (_ref) {
        let {
          main,
          transform,
          containerWidth,
          iconWidth
        } = _ref;
        const outer = {
          transform: "translate(".concat(containerWidth / 2, " 256)")
        };
        const innerTranslate = "translate(".concat(transform.x * 32, ", ").concat(transform.y * 32, ") ");
        const innerScale = "scale(".concat(transform.size / 16 * (transform.flipX ? -1 : 1), ", ").concat(transform.size / 16 * (transform.flipY ? -1 : 1), ") ");
        const innerRotate = "rotate(".concat(transform.rotate, " 0 0)");
        const inner = {
          transform: "".concat(innerTranslate, " ").concat(innerScale, " ").concat(innerRotate)
        };
        const path = {
          transform: "translate(".concat(iconWidth / 2 * -1, " -256)")
        };
        const operations = {
          outer,
          inner,
          path
        };
        return {
          tag: 'g',
          attributes: _objectSpread2({}, operations.outer),
          children: [{
            tag: 'g',
            attributes: _objectSpread2({}, operations.inner),
            children: [{
              tag: main.icon.tag,
              children: main.icon.children,
              attributes: _objectSpread2(_objectSpread2({}, main.icon.attributes), operations.path)
            }]
          }]
        };
      };
    }
  };

  const ALL_SPACE = {
    x: 0,
    y: 0,
    width: '100%',
    height: '100%'
  };
  function fillBlack(abstract) {
    let force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    if (abstract.attributes && (abstract.attributes.fill || force)) {
      abstract.attributes.fill = 'black';
    }
    return abstract;
  }
  function deGroup(abstract) {
    if (abstract.tag === 'g') {
      return abstract.children;
    } else {
      return [abstract];
    }
  }
  var Masks = {
    hooks() {
      return {
        parseNodeAttributes(accumulator, node) {
          const maskData = node.getAttribute('data-fa-mask');
          const mask = !maskData ? emptyCanonicalIcon() : getCanonicalIcon(maskData.split(' ').map(i => i.trim()));
          if (!mask.prefix) {
            mask.prefix = getDefaultUsablePrefix();
          }
          accumulator.mask = mask;
          accumulator.maskId = node.getAttribute('data-fa-mask-id');
          return accumulator;
        }
      };
    },
    provides(providers) {
      providers.generateAbstractMask = function (_ref) {
        let {
          children,
          attributes,
          main,
          mask,
          maskId: explicitMaskId,
          transform
        } = _ref;
        const {
          width: mainWidth,
          icon: mainPath
        } = main;
        const {
          width: maskWidth,
          icon: maskPath
        } = mask;
        const trans = transformForSvg({
          transform,
          containerWidth: maskWidth,
          iconWidth: mainWidth
        });
        const maskRect = {
          tag: 'rect',
          attributes: _objectSpread2(_objectSpread2({}, ALL_SPACE), {}, {
            fill: 'white'
          })
        };
        const maskInnerGroupChildrenMixin = mainPath.children ? {
          children: mainPath.children.map(fillBlack)
        } : {};
        const maskInnerGroup = {
          tag: 'g',
          attributes: _objectSpread2({}, trans.inner),
          children: [fillBlack(_objectSpread2({
            tag: mainPath.tag,
            attributes: _objectSpread2(_objectSpread2({}, mainPath.attributes), trans.path)
          }, maskInnerGroupChildrenMixin))]
        };
        const maskOuterGroup = {
          tag: 'g',
          attributes: _objectSpread2({}, trans.outer),
          children: [maskInnerGroup]
        };
        const maskId = "mask-".concat(explicitMaskId || nextUniqueId());
        const clipId = "clip-".concat(explicitMaskId || nextUniqueId());
        const maskTag = {
          tag: 'mask',
          attributes: _objectSpread2(_objectSpread2({}, ALL_SPACE), {}, {
            id: maskId,
            maskUnits: 'userSpaceOnUse',
            maskContentUnits: 'userSpaceOnUse'
          }),
          children: [maskRect, maskOuterGroup]
        };
        const defs = {
          tag: 'defs',
          children: [{
            tag: 'clipPath',
            attributes: {
              id: clipId
            },
            children: deGroup(maskPath)
          }, maskTag]
        };
        children.push(defs, {
          tag: 'rect',
          attributes: _objectSpread2({
            fill: 'currentColor',
            'clip-path': "url(#".concat(clipId, ")"),
            mask: "url(#".concat(maskId, ")")
          }, ALL_SPACE)
        });
        return {
          children,
          attributes
        };
      };
    }
  };

  var MissingIconIndicator = {
    provides(providers) {
      let reduceMotion = false;
      if (WINDOW.matchMedia) {
        reduceMotion = WINDOW.matchMedia('(prefers-reduced-motion: reduce)').matches;
      }
      providers.missingIconAbstract = function () {
        const gChildren = [];
        const FILL = {
          fill: 'currentColor'
        };
        const ANIMATION_BASE = {
          attributeType: 'XML',
          repeatCount: 'indefinite',
          dur: '2s'
        };

        // Ring
        gChildren.push({
          tag: 'path',
          attributes: _objectSpread2(_objectSpread2({}, FILL), {}, {
            d: 'M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z'
          })
        });
        const OPACITY_ANIMATE = _objectSpread2(_objectSpread2({}, ANIMATION_BASE), {}, {
          attributeName: 'opacity'
        });
        const dot = {
          tag: 'circle',
          attributes: _objectSpread2(_objectSpread2({}, FILL), {}, {
            cx: '256',
            cy: '364',
            r: '28'
          }),
          children: []
        };
        if (!reduceMotion) {
          dot.children.push({
            tag: 'animate',
            attributes: _objectSpread2(_objectSpread2({}, ANIMATION_BASE), {}, {
              attributeName: 'r',
              values: '28;14;28;28;14;28;'
            })
          }, {
            tag: 'animate',
            attributes: _objectSpread2(_objectSpread2({}, OPACITY_ANIMATE), {}, {
              values: '1;0;1;1;0;1;'
            })
          });
        }
        gChildren.push(dot);
        gChildren.push({
          tag: 'path',
          attributes: _objectSpread2(_objectSpread2({}, FILL), {}, {
            opacity: '1',
            d: 'M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z'
          }),
          children: reduceMotion ? [] : [{
            tag: 'animate',
            attributes: _objectSpread2(_objectSpread2({}, OPACITY_ANIMATE), {}, {
              values: '1;0;0;0;0;1;'
            })
          }]
        });
        if (!reduceMotion) {
          // Exclamation
          gChildren.push({
            tag: 'path',
            attributes: _objectSpread2(_objectSpread2({}, FILL), {}, {
              opacity: '0',
              d: 'M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z'
            }),
            children: [{
              tag: 'animate',
              attributes: _objectSpread2(_objectSpread2({}, OPACITY_ANIMATE), {}, {
                values: '0;0;1;1;0;0;'
              })
            }]
          });
        }
        return {
          tag: 'g',
          attributes: {
            'class': 'missing'
          },
          children: gChildren
        };
      };
    }
  };

  var SvgSymbols = {
    hooks() {
      return {
        parseNodeAttributes(accumulator, node) {
          const symbolData = node.getAttribute('data-fa-symbol');
          const symbol = symbolData === null ? false : symbolData === '' ? true : symbolData;
          accumulator['symbol'] = symbol;
          return accumulator;
        }
      };
    }
  };

  var plugins = [InjectCSS, ReplaceElements, Layers, LayersCounter, LayersText, PseudoElements, MutationObserver$1, PowerTransforms, Masks, MissingIconIndicator, SvgSymbols];

  registerPlugins(plugins, {
    mixoutsTo: api
  });
  bunker(bootstrap);

}());
