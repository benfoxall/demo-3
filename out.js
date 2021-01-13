#!/usr/bin/env node
var __commonJS = (callback, module2) => () => {
  if (!module2) {
    module2 = {exports: {}};
    callback(module2.exports, module2);
  }
  return module2.exports;
};

// node_modules/escape-string-regexp/index.js
var require_escape_string_regexp = __commonJS((exports2, module2) => {
  "use strict";
  var matchOperatorsRe = /[|\\{}()[\]^$+*?.]/g;
  module2.exports = function(str) {
    if (typeof str !== "string") {
      throw new TypeError("Expected a string");
    }
    return str.replace(matchOperatorsRe, "\\$&");
  };
});

// node_modules/chalk-animation/node_modules/color-name/index.js
var require_color_name = __commonJS((exports2, module2) => {
  "use strict";
  module2.exports = {
    aliceblue: [240, 248, 255],
    antiquewhite: [250, 235, 215],
    aqua: [0, 255, 255],
    aquamarine: [127, 255, 212],
    azure: [240, 255, 255],
    beige: [245, 245, 220],
    bisque: [255, 228, 196],
    black: [0, 0, 0],
    blanchedalmond: [255, 235, 205],
    blue: [0, 0, 255],
    blueviolet: [138, 43, 226],
    brown: [165, 42, 42],
    burlywood: [222, 184, 135],
    cadetblue: [95, 158, 160],
    chartreuse: [127, 255, 0],
    chocolate: [210, 105, 30],
    coral: [255, 127, 80],
    cornflowerblue: [100, 149, 237],
    cornsilk: [255, 248, 220],
    crimson: [220, 20, 60],
    cyan: [0, 255, 255],
    darkblue: [0, 0, 139],
    darkcyan: [0, 139, 139],
    darkgoldenrod: [184, 134, 11],
    darkgray: [169, 169, 169],
    darkgreen: [0, 100, 0],
    darkgrey: [169, 169, 169],
    darkkhaki: [189, 183, 107],
    darkmagenta: [139, 0, 139],
    darkolivegreen: [85, 107, 47],
    darkorange: [255, 140, 0],
    darkorchid: [153, 50, 204],
    darkred: [139, 0, 0],
    darksalmon: [233, 150, 122],
    darkseagreen: [143, 188, 143],
    darkslateblue: [72, 61, 139],
    darkslategray: [47, 79, 79],
    darkslategrey: [47, 79, 79],
    darkturquoise: [0, 206, 209],
    darkviolet: [148, 0, 211],
    deeppink: [255, 20, 147],
    deepskyblue: [0, 191, 255],
    dimgray: [105, 105, 105],
    dimgrey: [105, 105, 105],
    dodgerblue: [30, 144, 255],
    firebrick: [178, 34, 34],
    floralwhite: [255, 250, 240],
    forestgreen: [34, 139, 34],
    fuchsia: [255, 0, 255],
    gainsboro: [220, 220, 220],
    ghostwhite: [248, 248, 255],
    gold: [255, 215, 0],
    goldenrod: [218, 165, 32],
    gray: [128, 128, 128],
    green: [0, 128, 0],
    greenyellow: [173, 255, 47],
    grey: [128, 128, 128],
    honeydew: [240, 255, 240],
    hotpink: [255, 105, 180],
    indianred: [205, 92, 92],
    indigo: [75, 0, 130],
    ivory: [255, 255, 240],
    khaki: [240, 230, 140],
    lavender: [230, 230, 250],
    lavenderblush: [255, 240, 245],
    lawngreen: [124, 252, 0],
    lemonchiffon: [255, 250, 205],
    lightblue: [173, 216, 230],
    lightcoral: [240, 128, 128],
    lightcyan: [224, 255, 255],
    lightgoldenrodyellow: [250, 250, 210],
    lightgray: [211, 211, 211],
    lightgreen: [144, 238, 144],
    lightgrey: [211, 211, 211],
    lightpink: [255, 182, 193],
    lightsalmon: [255, 160, 122],
    lightseagreen: [32, 178, 170],
    lightskyblue: [135, 206, 250],
    lightslategray: [119, 136, 153],
    lightslategrey: [119, 136, 153],
    lightsteelblue: [176, 196, 222],
    lightyellow: [255, 255, 224],
    lime: [0, 255, 0],
    limegreen: [50, 205, 50],
    linen: [250, 240, 230],
    magenta: [255, 0, 255],
    maroon: [128, 0, 0],
    mediumaquamarine: [102, 205, 170],
    mediumblue: [0, 0, 205],
    mediumorchid: [186, 85, 211],
    mediumpurple: [147, 112, 219],
    mediumseagreen: [60, 179, 113],
    mediumslateblue: [123, 104, 238],
    mediumspringgreen: [0, 250, 154],
    mediumturquoise: [72, 209, 204],
    mediumvioletred: [199, 21, 133],
    midnightblue: [25, 25, 112],
    mintcream: [245, 255, 250],
    mistyrose: [255, 228, 225],
    moccasin: [255, 228, 181],
    navajowhite: [255, 222, 173],
    navy: [0, 0, 128],
    oldlace: [253, 245, 230],
    olive: [128, 128, 0],
    olivedrab: [107, 142, 35],
    orange: [255, 165, 0],
    orangered: [255, 69, 0],
    orchid: [218, 112, 214],
    palegoldenrod: [238, 232, 170],
    palegreen: [152, 251, 152],
    paleturquoise: [175, 238, 238],
    palevioletred: [219, 112, 147],
    papayawhip: [255, 239, 213],
    peachpuff: [255, 218, 185],
    peru: [205, 133, 63],
    pink: [255, 192, 203],
    plum: [221, 160, 221],
    powderblue: [176, 224, 230],
    purple: [128, 0, 128],
    rebeccapurple: [102, 51, 153],
    red: [255, 0, 0],
    rosybrown: [188, 143, 143],
    royalblue: [65, 105, 225],
    saddlebrown: [139, 69, 19],
    salmon: [250, 128, 114],
    sandybrown: [244, 164, 96],
    seagreen: [46, 139, 87],
    seashell: [255, 245, 238],
    sienna: [160, 82, 45],
    silver: [192, 192, 192],
    skyblue: [135, 206, 235],
    slateblue: [106, 90, 205],
    slategray: [112, 128, 144],
    slategrey: [112, 128, 144],
    snow: [255, 250, 250],
    springgreen: [0, 255, 127],
    steelblue: [70, 130, 180],
    tan: [210, 180, 140],
    teal: [0, 128, 128],
    thistle: [216, 191, 216],
    tomato: [255, 99, 71],
    turquoise: [64, 224, 208],
    violet: [238, 130, 238],
    wheat: [245, 222, 179],
    white: [255, 255, 255],
    whitesmoke: [245, 245, 245],
    yellow: [255, 255, 0],
    yellowgreen: [154, 205, 50]
  };
});

// node_modules/chalk-animation/node_modules/color-convert/conversions.js
var require_conversions = __commonJS((exports2, module2) => {
  var cssKeywords = require_color_name();
  var reverseKeywords = {};
  for (var key in cssKeywords) {
    if (cssKeywords.hasOwnProperty(key)) {
      reverseKeywords[cssKeywords[key]] = key;
    }
  }
  var convert = module2.exports = {
    rgb: {channels: 3, labels: "rgb"},
    hsl: {channels: 3, labels: "hsl"},
    hsv: {channels: 3, labels: "hsv"},
    hwb: {channels: 3, labels: "hwb"},
    cmyk: {channels: 4, labels: "cmyk"},
    xyz: {channels: 3, labels: "xyz"},
    lab: {channels: 3, labels: "lab"},
    lch: {channels: 3, labels: "lch"},
    hex: {channels: 1, labels: ["hex"]},
    keyword: {channels: 1, labels: ["keyword"]},
    ansi16: {channels: 1, labels: ["ansi16"]},
    ansi256: {channels: 1, labels: ["ansi256"]},
    hcg: {channels: 3, labels: ["h", "c", "g"]},
    apple: {channels: 3, labels: ["r16", "g16", "b16"]},
    gray: {channels: 1, labels: ["gray"]}
  };
  for (var model in convert) {
    if (convert.hasOwnProperty(model)) {
      if (!("channels" in convert[model])) {
        throw new Error("missing channels property: " + model);
      }
      if (!("labels" in convert[model])) {
        throw new Error("missing channel labels property: " + model);
      }
      if (convert[model].labels.length !== convert[model].channels) {
        throw new Error("channel and label counts mismatch: " + model);
      }
      channels = convert[model].channels;
      labels = convert[model].labels;
      delete convert[model].channels;
      delete convert[model].labels;
      Object.defineProperty(convert[model], "channels", {value: channels});
      Object.defineProperty(convert[model], "labels", {value: labels});
    }
  }
  var channels;
  var labels;
  convert.rgb.hsl = function(rgb) {
    var r = rgb[0] / 255;
    var g = rgb[1] / 255;
    var b = rgb[2] / 255;
    var min = Math.min(r, g, b);
    var max = Math.max(r, g, b);
    var delta = max - min;
    var h;
    var s;
    var l;
    if (max === min) {
      h = 0;
    } else if (r === max) {
      h = (g - b) / delta;
    } else if (g === max) {
      h = 2 + (b - r) / delta;
    } else if (b === max) {
      h = 4 + (r - g) / delta;
    }
    h = Math.min(h * 60, 360);
    if (h < 0) {
      h += 360;
    }
    l = (min + max) / 2;
    if (max === min) {
      s = 0;
    } else if (l <= 0.5) {
      s = delta / (max + min);
    } else {
      s = delta / (2 - max - min);
    }
    return [h, s * 100, l * 100];
  };
  convert.rgb.hsv = function(rgb) {
    var rdif;
    var gdif;
    var bdif;
    var h;
    var s;
    var r = rgb[0] / 255;
    var g = rgb[1] / 255;
    var b = rgb[2] / 255;
    var v = Math.max(r, g, b);
    var diff = v - Math.min(r, g, b);
    var diffc = function(c) {
      return (v - c) / 6 / diff + 1 / 2;
    };
    if (diff === 0) {
      h = s = 0;
    } else {
      s = diff / v;
      rdif = diffc(r);
      gdif = diffc(g);
      bdif = diffc(b);
      if (r === v) {
        h = bdif - gdif;
      } else if (g === v) {
        h = 1 / 3 + rdif - bdif;
      } else if (b === v) {
        h = 2 / 3 + gdif - rdif;
      }
      if (h < 0) {
        h += 1;
      } else if (h > 1) {
        h -= 1;
      }
    }
    return [
      h * 360,
      s * 100,
      v * 100
    ];
  };
  convert.rgb.hwb = function(rgb) {
    var r = rgb[0];
    var g = rgb[1];
    var b = rgb[2];
    var h = convert.rgb.hsl(rgb)[0];
    var w = 1 / 255 * Math.min(r, Math.min(g, b));
    b = 1 - 1 / 255 * Math.max(r, Math.max(g, b));
    return [h, w * 100, b * 100];
  };
  convert.rgb.cmyk = function(rgb) {
    var r = rgb[0] / 255;
    var g = rgb[1] / 255;
    var b = rgb[2] / 255;
    var c;
    var m;
    var y;
    var k;
    k = Math.min(1 - r, 1 - g, 1 - b);
    c = (1 - r - k) / (1 - k) || 0;
    m = (1 - g - k) / (1 - k) || 0;
    y = (1 - b - k) / (1 - k) || 0;
    return [c * 100, m * 100, y * 100, k * 100];
  };
  function comparativeDistance(x, y) {
    return Math.pow(x[0] - y[0], 2) + Math.pow(x[1] - y[1], 2) + Math.pow(x[2] - y[2], 2);
  }
  convert.rgb.keyword = function(rgb) {
    var reversed = reverseKeywords[rgb];
    if (reversed) {
      return reversed;
    }
    var currentClosestDistance = Infinity;
    var currentClosestKeyword;
    for (var keyword in cssKeywords) {
      if (cssKeywords.hasOwnProperty(keyword)) {
        var value = cssKeywords[keyword];
        var distance = comparativeDistance(rgb, value);
        if (distance < currentClosestDistance) {
          currentClosestDistance = distance;
          currentClosestKeyword = keyword;
        }
      }
    }
    return currentClosestKeyword;
  };
  convert.keyword.rgb = function(keyword) {
    return cssKeywords[keyword];
  };
  convert.rgb.xyz = function(rgb) {
    var r = rgb[0] / 255;
    var g = rgb[1] / 255;
    var b = rgb[2] / 255;
    r = r > 0.04045 ? Math.pow((r + 0.055) / 1.055, 2.4) : r / 12.92;
    g = g > 0.04045 ? Math.pow((g + 0.055) / 1.055, 2.4) : g / 12.92;
    b = b > 0.04045 ? Math.pow((b + 0.055) / 1.055, 2.4) : b / 12.92;
    var x = r * 0.4124 + g * 0.3576 + b * 0.1805;
    var y = r * 0.2126 + g * 0.7152 + b * 0.0722;
    var z = r * 0.0193 + g * 0.1192 + b * 0.9505;
    return [x * 100, y * 100, z * 100];
  };
  convert.rgb.lab = function(rgb) {
    var xyz = convert.rgb.xyz(rgb);
    var x = xyz[0];
    var y = xyz[1];
    var z = xyz[2];
    var l;
    var a;
    var b;
    x /= 95.047;
    y /= 100;
    z /= 108.883;
    x = x > 8856e-6 ? Math.pow(x, 1 / 3) : 7.787 * x + 16 / 116;
    y = y > 8856e-6 ? Math.pow(y, 1 / 3) : 7.787 * y + 16 / 116;
    z = z > 8856e-6 ? Math.pow(z, 1 / 3) : 7.787 * z + 16 / 116;
    l = 116 * y - 16;
    a = 500 * (x - y);
    b = 200 * (y - z);
    return [l, a, b];
  };
  convert.hsl.rgb = function(hsl) {
    var h = hsl[0] / 360;
    var s = hsl[1] / 100;
    var l = hsl[2] / 100;
    var t1;
    var t2;
    var t3;
    var rgb;
    var val;
    if (s === 0) {
      val = l * 255;
      return [val, val, val];
    }
    if (l < 0.5) {
      t2 = l * (1 + s);
    } else {
      t2 = l + s - l * s;
    }
    t1 = 2 * l - t2;
    rgb = [0, 0, 0];
    for (var i = 0; i < 3; i++) {
      t3 = h + 1 / 3 * -(i - 1);
      if (t3 < 0) {
        t3++;
      }
      if (t3 > 1) {
        t3--;
      }
      if (6 * t3 < 1) {
        val = t1 + (t2 - t1) * 6 * t3;
      } else if (2 * t3 < 1) {
        val = t2;
      } else if (3 * t3 < 2) {
        val = t1 + (t2 - t1) * (2 / 3 - t3) * 6;
      } else {
        val = t1;
      }
      rgb[i] = val * 255;
    }
    return rgb;
  };
  convert.hsl.hsv = function(hsl) {
    var h = hsl[0];
    var s = hsl[1] / 100;
    var l = hsl[2] / 100;
    var smin = s;
    var lmin = Math.max(l, 0.01);
    var sv;
    var v;
    l *= 2;
    s *= l <= 1 ? l : 2 - l;
    smin *= lmin <= 1 ? lmin : 2 - lmin;
    v = (l + s) / 2;
    sv = l === 0 ? 2 * smin / (lmin + smin) : 2 * s / (l + s);
    return [h, sv * 100, v * 100];
  };
  convert.hsv.rgb = function(hsv) {
    var h = hsv[0] / 60;
    var s = hsv[1] / 100;
    var v = hsv[2] / 100;
    var hi = Math.floor(h) % 6;
    var f = h - Math.floor(h);
    var p = 255 * v * (1 - s);
    var q = 255 * v * (1 - s * f);
    var t = 255 * v * (1 - s * (1 - f));
    v *= 255;
    switch (hi) {
      case 0:
        return [v, t, p];
      case 1:
        return [q, v, p];
      case 2:
        return [p, v, t];
      case 3:
        return [p, q, v];
      case 4:
        return [t, p, v];
      case 5:
        return [v, p, q];
    }
  };
  convert.hsv.hsl = function(hsv) {
    var h = hsv[0];
    var s = hsv[1] / 100;
    var v = hsv[2] / 100;
    var vmin = Math.max(v, 0.01);
    var lmin;
    var sl;
    var l;
    l = (2 - s) * v;
    lmin = (2 - s) * vmin;
    sl = s * vmin;
    sl /= lmin <= 1 ? lmin : 2 - lmin;
    sl = sl || 0;
    l /= 2;
    return [h, sl * 100, l * 100];
  };
  convert.hwb.rgb = function(hwb) {
    var h = hwb[0] / 360;
    var wh = hwb[1] / 100;
    var bl = hwb[2] / 100;
    var ratio = wh + bl;
    var i;
    var v;
    var f;
    var n;
    if (ratio > 1) {
      wh /= ratio;
      bl /= ratio;
    }
    i = Math.floor(6 * h);
    v = 1 - bl;
    f = 6 * h - i;
    if ((i & 1) !== 0) {
      f = 1 - f;
    }
    n = wh + f * (v - wh);
    var r;
    var g;
    var b;
    switch (i) {
      default:
      case 6:
      case 0:
        r = v;
        g = n;
        b = wh;
        break;
      case 1:
        r = n;
        g = v;
        b = wh;
        break;
      case 2:
        r = wh;
        g = v;
        b = n;
        break;
      case 3:
        r = wh;
        g = n;
        b = v;
        break;
      case 4:
        r = n;
        g = wh;
        b = v;
        break;
      case 5:
        r = v;
        g = wh;
        b = n;
        break;
    }
    return [r * 255, g * 255, b * 255];
  };
  convert.cmyk.rgb = function(cmyk) {
    var c = cmyk[0] / 100;
    var m = cmyk[1] / 100;
    var y = cmyk[2] / 100;
    var k = cmyk[3] / 100;
    var r;
    var g;
    var b;
    r = 1 - Math.min(1, c * (1 - k) + k);
    g = 1 - Math.min(1, m * (1 - k) + k);
    b = 1 - Math.min(1, y * (1 - k) + k);
    return [r * 255, g * 255, b * 255];
  };
  convert.xyz.rgb = function(xyz) {
    var x = xyz[0] / 100;
    var y = xyz[1] / 100;
    var z = xyz[2] / 100;
    var r;
    var g;
    var b;
    r = x * 3.2406 + y * -1.5372 + z * -0.4986;
    g = x * -0.9689 + y * 1.8758 + z * 0.0415;
    b = x * 0.0557 + y * -0.204 + z * 1.057;
    r = r > 31308e-7 ? 1.055 * Math.pow(r, 1 / 2.4) - 0.055 : r * 12.92;
    g = g > 31308e-7 ? 1.055 * Math.pow(g, 1 / 2.4) - 0.055 : g * 12.92;
    b = b > 31308e-7 ? 1.055 * Math.pow(b, 1 / 2.4) - 0.055 : b * 12.92;
    r = Math.min(Math.max(0, r), 1);
    g = Math.min(Math.max(0, g), 1);
    b = Math.min(Math.max(0, b), 1);
    return [r * 255, g * 255, b * 255];
  };
  convert.xyz.lab = function(xyz) {
    var x = xyz[0];
    var y = xyz[1];
    var z = xyz[2];
    var l;
    var a;
    var b;
    x /= 95.047;
    y /= 100;
    z /= 108.883;
    x = x > 8856e-6 ? Math.pow(x, 1 / 3) : 7.787 * x + 16 / 116;
    y = y > 8856e-6 ? Math.pow(y, 1 / 3) : 7.787 * y + 16 / 116;
    z = z > 8856e-6 ? Math.pow(z, 1 / 3) : 7.787 * z + 16 / 116;
    l = 116 * y - 16;
    a = 500 * (x - y);
    b = 200 * (y - z);
    return [l, a, b];
  };
  convert.lab.xyz = function(lab) {
    var l = lab[0];
    var a = lab[1];
    var b = lab[2];
    var x;
    var y;
    var z;
    y = (l + 16) / 116;
    x = a / 500 + y;
    z = y - b / 200;
    var y2 = Math.pow(y, 3);
    var x2 = Math.pow(x, 3);
    var z2 = Math.pow(z, 3);
    y = y2 > 8856e-6 ? y2 : (y - 16 / 116) / 7.787;
    x = x2 > 8856e-6 ? x2 : (x - 16 / 116) / 7.787;
    z = z2 > 8856e-6 ? z2 : (z - 16 / 116) / 7.787;
    x *= 95.047;
    y *= 100;
    z *= 108.883;
    return [x, y, z];
  };
  convert.lab.lch = function(lab) {
    var l = lab[0];
    var a = lab[1];
    var b = lab[2];
    var hr;
    var h;
    var c;
    hr = Math.atan2(b, a);
    h = hr * 360 / 2 / Math.PI;
    if (h < 0) {
      h += 360;
    }
    c = Math.sqrt(a * a + b * b);
    return [l, c, h];
  };
  convert.lch.lab = function(lch) {
    var l = lch[0];
    var c = lch[1];
    var h = lch[2];
    var a;
    var b;
    var hr;
    hr = h / 360 * 2 * Math.PI;
    a = c * Math.cos(hr);
    b = c * Math.sin(hr);
    return [l, a, b];
  };
  convert.rgb.ansi16 = function(args) {
    var r = args[0];
    var g = args[1];
    var b = args[2];
    var value = 1 in arguments ? arguments[1] : convert.rgb.hsv(args)[2];
    value = Math.round(value / 50);
    if (value === 0) {
      return 30;
    }
    var ansi = 30 + (Math.round(b / 255) << 2 | Math.round(g / 255) << 1 | Math.round(r / 255));
    if (value === 2) {
      ansi += 60;
    }
    return ansi;
  };
  convert.hsv.ansi16 = function(args) {
    return convert.rgb.ansi16(convert.hsv.rgb(args), args[2]);
  };
  convert.rgb.ansi256 = function(args) {
    var r = args[0];
    var g = args[1];
    var b = args[2];
    if (r === g && g === b) {
      if (r < 8) {
        return 16;
      }
      if (r > 248) {
        return 231;
      }
      return Math.round((r - 8) / 247 * 24) + 232;
    }
    var ansi = 16 + 36 * Math.round(r / 255 * 5) + 6 * Math.round(g / 255 * 5) + Math.round(b / 255 * 5);
    return ansi;
  };
  convert.ansi16.rgb = function(args) {
    var color = args % 10;
    if (color === 0 || color === 7) {
      if (args > 50) {
        color += 3.5;
      }
      color = color / 10.5 * 255;
      return [color, color, color];
    }
    var mult = (~~(args > 50) + 1) * 0.5;
    var r = (color & 1) * mult * 255;
    var g = (color >> 1 & 1) * mult * 255;
    var b = (color >> 2 & 1) * mult * 255;
    return [r, g, b];
  };
  convert.ansi256.rgb = function(args) {
    if (args >= 232) {
      var c = (args - 232) * 10 + 8;
      return [c, c, c];
    }
    args -= 16;
    var rem;
    var r = Math.floor(args / 36) / 5 * 255;
    var g = Math.floor((rem = args % 36) / 6) / 5 * 255;
    var b = rem % 6 / 5 * 255;
    return [r, g, b];
  };
  convert.rgb.hex = function(args) {
    var integer = ((Math.round(args[0]) & 255) << 16) + ((Math.round(args[1]) & 255) << 8) + (Math.round(args[2]) & 255);
    var string = integer.toString(16).toUpperCase();
    return "000000".substring(string.length) + string;
  };
  convert.hex.rgb = function(args) {
    var match = args.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
    if (!match) {
      return [0, 0, 0];
    }
    var colorString = match[0];
    if (match[0].length === 3) {
      colorString = colorString.split("").map(function(char) {
        return char + char;
      }).join("");
    }
    var integer = parseInt(colorString, 16);
    var r = integer >> 16 & 255;
    var g = integer >> 8 & 255;
    var b = integer & 255;
    return [r, g, b];
  };
  convert.rgb.hcg = function(rgb) {
    var r = rgb[0] / 255;
    var g = rgb[1] / 255;
    var b = rgb[2] / 255;
    var max = Math.max(Math.max(r, g), b);
    var min = Math.min(Math.min(r, g), b);
    var chroma = max - min;
    var grayscale;
    var hue;
    if (chroma < 1) {
      grayscale = min / (1 - chroma);
    } else {
      grayscale = 0;
    }
    if (chroma <= 0) {
      hue = 0;
    } else if (max === r) {
      hue = (g - b) / chroma % 6;
    } else if (max === g) {
      hue = 2 + (b - r) / chroma;
    } else {
      hue = 4 + (r - g) / chroma + 4;
    }
    hue /= 6;
    hue %= 1;
    return [hue * 360, chroma * 100, grayscale * 100];
  };
  convert.hsl.hcg = function(hsl) {
    var s = hsl[1] / 100;
    var l = hsl[2] / 100;
    var c = 1;
    var f = 0;
    if (l < 0.5) {
      c = 2 * s * l;
    } else {
      c = 2 * s * (1 - l);
    }
    if (c < 1) {
      f = (l - 0.5 * c) / (1 - c);
    }
    return [hsl[0], c * 100, f * 100];
  };
  convert.hsv.hcg = function(hsv) {
    var s = hsv[1] / 100;
    var v = hsv[2] / 100;
    var c = s * v;
    var f = 0;
    if (c < 1) {
      f = (v - c) / (1 - c);
    }
    return [hsv[0], c * 100, f * 100];
  };
  convert.hcg.rgb = function(hcg) {
    var h = hcg[0] / 360;
    var c = hcg[1] / 100;
    var g = hcg[2] / 100;
    if (c === 0) {
      return [g * 255, g * 255, g * 255];
    }
    var pure = [0, 0, 0];
    var hi = h % 1 * 6;
    var v = hi % 1;
    var w = 1 - v;
    var mg = 0;
    switch (Math.floor(hi)) {
      case 0:
        pure[0] = 1;
        pure[1] = v;
        pure[2] = 0;
        break;
      case 1:
        pure[0] = w;
        pure[1] = 1;
        pure[2] = 0;
        break;
      case 2:
        pure[0] = 0;
        pure[1] = 1;
        pure[2] = v;
        break;
      case 3:
        pure[0] = 0;
        pure[1] = w;
        pure[2] = 1;
        break;
      case 4:
        pure[0] = v;
        pure[1] = 0;
        pure[2] = 1;
        break;
      default:
        pure[0] = 1;
        pure[1] = 0;
        pure[2] = w;
    }
    mg = (1 - c) * g;
    return [
      (c * pure[0] + mg) * 255,
      (c * pure[1] + mg) * 255,
      (c * pure[2] + mg) * 255
    ];
  };
  convert.hcg.hsv = function(hcg) {
    var c = hcg[1] / 100;
    var g = hcg[2] / 100;
    var v = c + g * (1 - c);
    var f = 0;
    if (v > 0) {
      f = c / v;
    }
    return [hcg[0], f * 100, v * 100];
  };
  convert.hcg.hsl = function(hcg) {
    var c = hcg[1] / 100;
    var g = hcg[2] / 100;
    var l = g * (1 - c) + 0.5 * c;
    var s = 0;
    if (l > 0 && l < 0.5) {
      s = c / (2 * l);
    } else if (l >= 0.5 && l < 1) {
      s = c / (2 * (1 - l));
    }
    return [hcg[0], s * 100, l * 100];
  };
  convert.hcg.hwb = function(hcg) {
    var c = hcg[1] / 100;
    var g = hcg[2] / 100;
    var v = c + g * (1 - c);
    return [hcg[0], (v - c) * 100, (1 - v) * 100];
  };
  convert.hwb.hcg = function(hwb) {
    var w = hwb[1] / 100;
    var b = hwb[2] / 100;
    var v = 1 - b;
    var c = v - w;
    var g = 0;
    if (c < 1) {
      g = (v - c) / (1 - c);
    }
    return [hwb[0], c * 100, g * 100];
  };
  convert.apple.rgb = function(apple) {
    return [apple[0] / 65535 * 255, apple[1] / 65535 * 255, apple[2] / 65535 * 255];
  };
  convert.rgb.apple = function(rgb) {
    return [rgb[0] / 255 * 65535, rgb[1] / 255 * 65535, rgb[2] / 255 * 65535];
  };
  convert.gray.rgb = function(args) {
    return [args[0] / 100 * 255, args[0] / 100 * 255, args[0] / 100 * 255];
  };
  convert.gray.hsl = convert.gray.hsv = function(args) {
    return [0, 0, args[0]];
  };
  convert.gray.hwb = function(gray) {
    return [0, 100, gray[0]];
  };
  convert.gray.cmyk = function(gray) {
    return [0, 0, 0, gray[0]];
  };
  convert.gray.lab = function(gray) {
    return [gray[0], 0, 0];
  };
  convert.gray.hex = function(gray) {
    var val = Math.round(gray[0] / 100 * 255) & 255;
    var integer = (val << 16) + (val << 8) + val;
    var string = integer.toString(16).toUpperCase();
    return "000000".substring(string.length) + string;
  };
  convert.rgb.gray = function(rgb) {
    var val = (rgb[0] + rgb[1] + rgb[2]) / 3;
    return [val / 255 * 100];
  };
});

// node_modules/chalk-animation/node_modules/color-convert/route.js
var require_route = __commonJS((exports2, module2) => {
  var conversions = require_conversions();
  function buildGraph() {
    var graph = {};
    var models = Object.keys(conversions);
    for (var len = models.length, i = 0; i < len; i++) {
      graph[models[i]] = {
        distance: -1,
        parent: null
      };
    }
    return graph;
  }
  function deriveBFS(fromModel) {
    var graph = buildGraph();
    var queue = [fromModel];
    graph[fromModel].distance = 0;
    while (queue.length) {
      var current = queue.pop();
      var adjacents = Object.keys(conversions[current]);
      for (var len = adjacents.length, i = 0; i < len; i++) {
        var adjacent = adjacents[i];
        var node = graph[adjacent];
        if (node.distance === -1) {
          node.distance = graph[current].distance + 1;
          node.parent = current;
          queue.unshift(adjacent);
        }
      }
    }
    return graph;
  }
  function link(from, to) {
    return function(args) {
      return to(from(args));
    };
  }
  function wrapConversion(toModel, graph) {
    var path = [graph[toModel].parent, toModel];
    var fn = conversions[graph[toModel].parent][toModel];
    var cur = graph[toModel].parent;
    while (graph[cur].parent) {
      path.unshift(graph[cur].parent);
      fn = link(conversions[graph[cur].parent][cur], fn);
      cur = graph[cur].parent;
    }
    fn.conversion = path;
    return fn;
  }
  module2.exports = function(fromModel) {
    var graph = deriveBFS(fromModel);
    var conversion = {};
    var models = Object.keys(graph);
    for (var len = models.length, i = 0; i < len; i++) {
      var toModel = models[i];
      var node = graph[toModel];
      if (node.parent === null) {
        continue;
      }
      conversion[toModel] = wrapConversion(toModel, graph);
    }
    return conversion;
  };
});

// node_modules/chalk-animation/node_modules/color-convert/index.js
var require_color_convert = __commonJS((exports2, module2) => {
  var conversions = require_conversions();
  var route = require_route();
  var convert = {};
  var models = Object.keys(conversions);
  function wrapRaw(fn) {
    var wrappedFn = function(args) {
      if (args === void 0 || args === null) {
        return args;
      }
      if (arguments.length > 1) {
        args = Array.prototype.slice.call(arguments);
      }
      return fn(args);
    };
    if ("conversion" in fn) {
      wrappedFn.conversion = fn.conversion;
    }
    return wrappedFn;
  }
  function wrapRounded(fn) {
    var wrappedFn = function(args) {
      if (args === void 0 || args === null) {
        return args;
      }
      if (arguments.length > 1) {
        args = Array.prototype.slice.call(arguments);
      }
      var result = fn(args);
      if (typeof result === "object") {
        for (var len = result.length, i = 0; i < len; i++) {
          result[i] = Math.round(result[i]);
        }
      }
      return result;
    };
    if ("conversion" in fn) {
      wrappedFn.conversion = fn.conversion;
    }
    return wrappedFn;
  }
  models.forEach(function(fromModel) {
    convert[fromModel] = {};
    Object.defineProperty(convert[fromModel], "channels", {value: conversions[fromModel].channels});
    Object.defineProperty(convert[fromModel], "labels", {value: conversions[fromModel].labels});
    var routes = route(fromModel);
    var routeModels = Object.keys(routes);
    routeModels.forEach(function(toModel) {
      var fn = routes[toModel];
      convert[fromModel][toModel] = wrapRounded(fn);
      convert[fromModel][toModel].raw = wrapRaw(fn);
    });
  });
  module2.exports = convert;
});

// node_modules/chalk-animation/node_modules/ansi-styles/index.js
var require_ansi_styles = __commonJS((exports2, module2) => {
  "use strict";
  var colorConvert = require_color_convert();
  var wrapAnsi16 = (fn, offset) => function() {
    const code = fn.apply(colorConvert, arguments);
    return `[${code + offset}m`;
  };
  var wrapAnsi256 = (fn, offset) => function() {
    const code = fn.apply(colorConvert, arguments);
    return `[${38 + offset};5;${code}m`;
  };
  var wrapAnsi16m = (fn, offset) => function() {
    const rgb = fn.apply(colorConvert, arguments);
    return `[${38 + offset};2;${rgb[0]};${rgb[1]};${rgb[2]}m`;
  };
  function assembleStyles() {
    const codes = new Map();
    const styles = {
      modifier: {
        reset: [0, 0],
        bold: [1, 22],
        dim: [2, 22],
        italic: [3, 23],
        underline: [4, 24],
        inverse: [7, 27],
        hidden: [8, 28],
        strikethrough: [9, 29]
      },
      color: {
        black: [30, 39],
        red: [31, 39],
        green: [32, 39],
        yellow: [33, 39],
        blue: [34, 39],
        magenta: [35, 39],
        cyan: [36, 39],
        white: [37, 39],
        gray: [90, 39],
        redBright: [91, 39],
        greenBright: [92, 39],
        yellowBright: [93, 39],
        blueBright: [94, 39],
        magentaBright: [95, 39],
        cyanBright: [96, 39],
        whiteBright: [97, 39]
      },
      bgColor: {
        bgBlack: [40, 49],
        bgRed: [41, 49],
        bgGreen: [42, 49],
        bgYellow: [43, 49],
        bgBlue: [44, 49],
        bgMagenta: [45, 49],
        bgCyan: [46, 49],
        bgWhite: [47, 49],
        bgBlackBright: [100, 49],
        bgRedBright: [101, 49],
        bgGreenBright: [102, 49],
        bgYellowBright: [103, 49],
        bgBlueBright: [104, 49],
        bgMagentaBright: [105, 49],
        bgCyanBright: [106, 49],
        bgWhiteBright: [107, 49]
      }
    };
    styles.color.grey = styles.color.gray;
    for (const groupName of Object.keys(styles)) {
      const group = styles[groupName];
      for (const styleName of Object.keys(group)) {
        const style = group[styleName];
        styles[styleName] = {
          open: `[${style[0]}m`,
          close: `[${style[1]}m`
        };
        group[styleName] = styles[styleName];
        codes.set(style[0], style[1]);
      }
      Object.defineProperty(styles, groupName, {
        value: group,
        enumerable: false
      });
      Object.defineProperty(styles, "codes", {
        value: codes,
        enumerable: false
      });
    }
    const ansi2ansi = (n) => n;
    const rgb2rgb = (r, g, b) => [r, g, b];
    styles.color.close = "[39m";
    styles.bgColor.close = "[49m";
    styles.color.ansi = {
      ansi: wrapAnsi16(ansi2ansi, 0)
    };
    styles.color.ansi256 = {
      ansi256: wrapAnsi256(ansi2ansi, 0)
    };
    styles.color.ansi16m = {
      rgb: wrapAnsi16m(rgb2rgb, 0)
    };
    styles.bgColor.ansi = {
      ansi: wrapAnsi16(ansi2ansi, 10)
    };
    styles.bgColor.ansi256 = {
      ansi256: wrapAnsi256(ansi2ansi, 10)
    };
    styles.bgColor.ansi16m = {
      rgb: wrapAnsi16m(rgb2rgb, 10)
    };
    for (let key of Object.keys(colorConvert)) {
      if (typeof colorConvert[key] !== "object") {
        continue;
      }
      const suite = colorConvert[key];
      if (key === "ansi16") {
        key = "ansi";
      }
      if ("ansi16" in suite) {
        styles.color.ansi[key] = wrapAnsi16(suite.ansi16, 0);
        styles.bgColor.ansi[key] = wrapAnsi16(suite.ansi16, 10);
      }
      if ("ansi256" in suite) {
        styles.color.ansi256[key] = wrapAnsi256(suite.ansi256, 0);
        styles.bgColor.ansi256[key] = wrapAnsi256(suite.ansi256, 10);
      }
      if ("rgb" in suite) {
        styles.color.ansi16m[key] = wrapAnsi16m(suite.rgb, 0);
        styles.bgColor.ansi16m[key] = wrapAnsi16m(suite.rgb, 10);
      }
    }
    return styles;
  }
  Object.defineProperty(module2, "exports", {
    enumerable: true,
    get: assembleStyles
  });
});

// node_modules/chalk-animation/node_modules/has-flag/index.js
var require_has_flag = __commonJS((exports2, module2) => {
  "use strict";
  module2.exports = (flag, argv) => {
    argv = argv || process.argv;
    const prefix = flag.startsWith("-") ? "" : flag.length === 1 ? "-" : "--";
    const pos = argv.indexOf(prefix + flag);
    const terminatorPos = argv.indexOf("--");
    return pos !== -1 && (terminatorPos === -1 ? true : pos < terminatorPos);
  };
});

// node_modules/chalk-animation/node_modules/supports-color/index.js
var require_supports_color = __commonJS((exports2, module2) => {
  "use strict";
  var os = require("os");
  var hasFlag = require_has_flag();
  var env = process.env;
  var forceColor;
  if (hasFlag("no-color") || hasFlag("no-colors") || hasFlag("color=false")) {
    forceColor = false;
  } else if (hasFlag("color") || hasFlag("colors") || hasFlag("color=true") || hasFlag("color=always")) {
    forceColor = true;
  }
  if ("FORCE_COLOR" in env) {
    forceColor = env.FORCE_COLOR.length === 0 || parseInt(env.FORCE_COLOR, 10) !== 0;
  }
  function translateLevel(level) {
    if (level === 0) {
      return false;
    }
    return {
      level,
      hasBasic: true,
      has256: level >= 2,
      has16m: level >= 3
    };
  }
  function supportsColor(stream) {
    if (forceColor === false) {
      return 0;
    }
    if (hasFlag("color=16m") || hasFlag("color=full") || hasFlag("color=truecolor")) {
      return 3;
    }
    if (hasFlag("color=256")) {
      return 2;
    }
    if (stream && !stream.isTTY && forceColor !== true) {
      return 0;
    }
    const min = forceColor ? 1 : 0;
    if (process.platform === "win32") {
      const osRelease = os.release().split(".");
      if (Number(process.versions.node.split(".")[0]) >= 8 && Number(osRelease[0]) >= 10 && Number(osRelease[2]) >= 10586) {
        return Number(osRelease[2]) >= 14931 ? 3 : 2;
      }
      return 1;
    }
    if ("CI" in env) {
      if (["TRAVIS", "CIRCLECI", "APPVEYOR", "GITLAB_CI"].some((sign) => sign in env) || env.CI_NAME === "codeship") {
        return 1;
      }
      return min;
    }
    if ("TEAMCITY_VERSION" in env) {
      return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(env.TEAMCITY_VERSION) ? 1 : 0;
    }
    if (env.COLORTERM === "truecolor") {
      return 3;
    }
    if ("TERM_PROGRAM" in env) {
      const version = parseInt((env.TERM_PROGRAM_VERSION || "").split(".")[0], 10);
      switch (env.TERM_PROGRAM) {
        case "iTerm.app":
          return version >= 3 ? 3 : 2;
        case "Apple_Terminal":
          return 2;
      }
    }
    if (/-256(color)?$/i.test(env.TERM)) {
      return 2;
    }
    if (/^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(env.TERM)) {
      return 1;
    }
    if ("COLORTERM" in env) {
      return 1;
    }
    if (env.TERM === "dumb") {
      return min;
    }
    return min;
  }
  function getSupportLevel(stream) {
    const level = supportsColor(stream);
    return translateLevel(level);
  }
  module2.exports = {
    supportsColor: getSupportLevel,
    stdout: getSupportLevel(process.stdout),
    stderr: getSupportLevel(process.stderr)
  };
});

// node_modules/chalk-animation/node_modules/chalk/templates.js
var require_templates = __commonJS((exports2, module2) => {
  "use strict";
  var TEMPLATE_REGEX = /(?:\\(u[a-f\d]{4}|x[a-f\d]{2}|.))|(?:\{(~)?(\w+(?:\([^)]*\))?(?:\.\w+(?:\([^)]*\))?)*)(?:[ \t]|(?=\r?\n)))|(\})|((?:.|[\r\n\f])+?)/gi;
  var STYLE_REGEX = /(?:^|\.)(\w+)(?:\(([^)]*)\))?/g;
  var STRING_REGEX = /^(['"])((?:\\.|(?!\1)[^\\])*)\1$/;
  var ESCAPE_REGEX = /\\(u[a-f\d]{4}|x[a-f\d]{2}|.)|([^\\])/gi;
  var ESCAPES = new Map([
    ["n", "\n"],
    ["r", "\r"],
    ["t", "	"],
    ["b", "\b"],
    ["f", "\f"],
    ["v", "\v"],
    ["0", "\0"],
    ["\\", "\\"],
    ["e", ""],
    ["a", "\x07"]
  ]);
  function unescape(c) {
    if (c[0] === "u" && c.length === 5 || c[0] === "x" && c.length === 3) {
      return String.fromCharCode(parseInt(c.slice(1), 16));
    }
    return ESCAPES.get(c) || c;
  }
  function parseArguments(name, args) {
    const results = [];
    const chunks = args.trim().split(/\s*,\s*/g);
    let matches;
    for (const chunk of chunks) {
      if (!isNaN(chunk)) {
        results.push(Number(chunk));
      } else if (matches = chunk.match(STRING_REGEX)) {
        results.push(matches[2].replace(ESCAPE_REGEX, (m, escape, chr) => escape ? unescape(escape) : chr));
      } else {
        throw new Error(`Invalid Chalk template style argument: ${chunk} (in style '${name}')`);
      }
    }
    return results;
  }
  function parseStyle(style) {
    STYLE_REGEX.lastIndex = 0;
    const results = [];
    let matches;
    while ((matches = STYLE_REGEX.exec(style)) !== null) {
      const name = matches[1];
      if (matches[2]) {
        const args = parseArguments(name, matches[2]);
        results.push([name].concat(args));
      } else {
        results.push([name]);
      }
    }
    return results;
  }
  function buildStyle(chalk, styles) {
    const enabled = {};
    for (const layer of styles) {
      for (const style of layer.styles) {
        enabled[style[0]] = layer.inverse ? null : style.slice(1);
      }
    }
    let current = chalk;
    for (const styleName of Object.keys(enabled)) {
      if (Array.isArray(enabled[styleName])) {
        if (!(styleName in current)) {
          throw new Error(`Unknown Chalk style: ${styleName}`);
        }
        if (enabled[styleName].length > 0) {
          current = current[styleName].apply(current, enabled[styleName]);
        } else {
          current = current[styleName];
        }
      }
    }
    return current;
  }
  module2.exports = (chalk, tmp) => {
    const styles = [];
    const chunks = [];
    let chunk = [];
    tmp.replace(TEMPLATE_REGEX, (m, escapeChar, inverse, style, close, chr) => {
      if (escapeChar) {
        chunk.push(unescape(escapeChar));
      } else if (style) {
        const str = chunk.join("");
        chunk = [];
        chunks.push(styles.length === 0 ? str : buildStyle(chalk, styles)(str));
        styles.push({inverse, styles: parseStyle(style)});
      } else if (close) {
        if (styles.length === 0) {
          throw new Error("Found extraneous } in Chalk template literal");
        }
        chunks.push(buildStyle(chalk, styles)(chunk.join("")));
        chunk = [];
        styles.pop();
      } else {
        chunk.push(chr);
      }
    });
    chunks.push(chunk.join(""));
    if (styles.length > 0) {
      const errMsg = `Chalk template literal is missing ${styles.length} closing bracket${styles.length === 1 ? "" : "s"} (\`}\`)`;
      throw new Error(errMsg);
    }
    return chunks.join("");
  };
});

// node_modules/chalk-animation/node_modules/chalk/index.js
var require_chalk = __commonJS((exports2, module2) => {
  "use strict";
  var escapeStringRegexp = require_escape_string_regexp();
  var ansiStyles = require_ansi_styles();
  var stdoutColor = require_supports_color().stdout;
  var template = require_templates();
  var isSimpleWindowsTerm = process.platform === "win32" && !(process.env.TERM || "").toLowerCase().startsWith("xterm");
  var levelMapping = ["ansi", "ansi", "ansi256", "ansi16m"];
  var skipModels = new Set(["gray"]);
  var styles = Object.create(null);
  function applyOptions(obj, options) {
    options = options || {};
    const scLevel = stdoutColor ? stdoutColor.level : 0;
    obj.level = options.level === void 0 ? scLevel : options.level;
    obj.enabled = "enabled" in options ? options.enabled : obj.level > 0;
  }
  function Chalk(options) {
    if (!this || !(this instanceof Chalk) || this.template) {
      const chalk = {};
      applyOptions(chalk, options);
      chalk.template = function() {
        const args = [].slice.call(arguments);
        return chalkTag.apply(null, [chalk.template].concat(args));
      };
      Object.setPrototypeOf(chalk, Chalk.prototype);
      Object.setPrototypeOf(chalk.template, chalk);
      chalk.template.constructor = Chalk;
      return chalk.template;
    }
    applyOptions(this, options);
  }
  if (isSimpleWindowsTerm) {
    ansiStyles.blue.open = "[94m";
  }
  for (const key of Object.keys(ansiStyles)) {
    ansiStyles[key].closeRe = new RegExp(escapeStringRegexp(ansiStyles[key].close), "g");
    styles[key] = {
      get() {
        const codes = ansiStyles[key];
        return build.call(this, this._styles ? this._styles.concat(codes) : [codes], this._empty, key);
      }
    };
  }
  styles.visible = {
    get() {
      return build.call(this, this._styles || [], true, "visible");
    }
  };
  ansiStyles.color.closeRe = new RegExp(escapeStringRegexp(ansiStyles.color.close), "g");
  for (const model of Object.keys(ansiStyles.color.ansi)) {
    if (skipModels.has(model)) {
      continue;
    }
    styles[model] = {
      get() {
        const level = this.level;
        return function() {
          const open = ansiStyles.color[levelMapping[level]][model].apply(null, arguments);
          const codes = {
            open,
            close: ansiStyles.color.close,
            closeRe: ansiStyles.color.closeRe
          };
          return build.call(this, this._styles ? this._styles.concat(codes) : [codes], this._empty, model);
        };
      }
    };
  }
  ansiStyles.bgColor.closeRe = new RegExp(escapeStringRegexp(ansiStyles.bgColor.close), "g");
  for (const model of Object.keys(ansiStyles.bgColor.ansi)) {
    if (skipModels.has(model)) {
      continue;
    }
    const bgModel = "bg" + model[0].toUpperCase() + model.slice(1);
    styles[bgModel] = {
      get() {
        const level = this.level;
        return function() {
          const open = ansiStyles.bgColor[levelMapping[level]][model].apply(null, arguments);
          const codes = {
            open,
            close: ansiStyles.bgColor.close,
            closeRe: ansiStyles.bgColor.closeRe
          };
          return build.call(this, this._styles ? this._styles.concat(codes) : [codes], this._empty, model);
        };
      }
    };
  }
  var proto = Object.defineProperties(() => {
  }, styles);
  function build(_styles, _empty, key) {
    const builder = function() {
      return applyStyle.apply(builder, arguments);
    };
    builder._styles = _styles;
    builder._empty = _empty;
    const self = this;
    Object.defineProperty(builder, "level", {
      enumerable: true,
      get() {
        return self.level;
      },
      set(level) {
        self.level = level;
      }
    });
    Object.defineProperty(builder, "enabled", {
      enumerable: true,
      get() {
        return self.enabled;
      },
      set(enabled) {
        self.enabled = enabled;
      }
    });
    builder.hasGrey = this.hasGrey || key === "gray" || key === "grey";
    builder.__proto__ = proto;
    return builder;
  }
  function applyStyle() {
    const args = arguments;
    const argsLen = args.length;
    let str = String(arguments[0]);
    if (argsLen === 0) {
      return "";
    }
    if (argsLen > 1) {
      for (let a = 1; a < argsLen; a++) {
        str += " " + args[a];
      }
    }
    if (!this.enabled || this.level <= 0 || !str) {
      return this._empty ? "" : str;
    }
    const originalDim = ansiStyles.dim.open;
    if (isSimpleWindowsTerm && this.hasGrey) {
      ansiStyles.dim.open = "";
    }
    for (const code of this._styles.slice().reverse()) {
      str = code.open + str.replace(code.closeRe, code.open) + code.close;
      str = str.replace(/\r?\n/g, `${code.close}$&${code.open}`);
    }
    ansiStyles.dim.open = originalDim;
    return str;
  }
  function chalkTag(chalk, strings) {
    if (!Array.isArray(strings)) {
      return [].slice.call(arguments, 1).join(" ");
    }
    const args = [].slice.call(arguments, 2);
    const parts = [strings.raw[0]];
    for (let i = 1; i < strings.length; i++) {
      parts.push(String(args[i - 1]).replace(/[{}\\]/g, "\\$&"));
      parts.push(String(strings.raw[i]));
    }
    return template(chalk, parts.join(""));
  }
  Object.defineProperties(Chalk.prototype, styles);
  module2.exports = Chalk();
  module2.exports.supportsColor = stdoutColor;
  module2.exports.default = module2.exports;
});

// node_modules/gradient-string/node_modules/color-name/index.js
var require_color_name2 = __commonJS((exports2, module2) => {
  "use strict";
  module2.exports = {
    aliceblue: [240, 248, 255],
    antiquewhite: [250, 235, 215],
    aqua: [0, 255, 255],
    aquamarine: [127, 255, 212],
    azure: [240, 255, 255],
    beige: [245, 245, 220],
    bisque: [255, 228, 196],
    black: [0, 0, 0],
    blanchedalmond: [255, 235, 205],
    blue: [0, 0, 255],
    blueviolet: [138, 43, 226],
    brown: [165, 42, 42],
    burlywood: [222, 184, 135],
    cadetblue: [95, 158, 160],
    chartreuse: [127, 255, 0],
    chocolate: [210, 105, 30],
    coral: [255, 127, 80],
    cornflowerblue: [100, 149, 237],
    cornsilk: [255, 248, 220],
    crimson: [220, 20, 60],
    cyan: [0, 255, 255],
    darkblue: [0, 0, 139],
    darkcyan: [0, 139, 139],
    darkgoldenrod: [184, 134, 11],
    darkgray: [169, 169, 169],
    darkgreen: [0, 100, 0],
    darkgrey: [169, 169, 169],
    darkkhaki: [189, 183, 107],
    darkmagenta: [139, 0, 139],
    darkolivegreen: [85, 107, 47],
    darkorange: [255, 140, 0],
    darkorchid: [153, 50, 204],
    darkred: [139, 0, 0],
    darksalmon: [233, 150, 122],
    darkseagreen: [143, 188, 143],
    darkslateblue: [72, 61, 139],
    darkslategray: [47, 79, 79],
    darkslategrey: [47, 79, 79],
    darkturquoise: [0, 206, 209],
    darkviolet: [148, 0, 211],
    deeppink: [255, 20, 147],
    deepskyblue: [0, 191, 255],
    dimgray: [105, 105, 105],
    dimgrey: [105, 105, 105],
    dodgerblue: [30, 144, 255],
    firebrick: [178, 34, 34],
    floralwhite: [255, 250, 240],
    forestgreen: [34, 139, 34],
    fuchsia: [255, 0, 255],
    gainsboro: [220, 220, 220],
    ghostwhite: [248, 248, 255],
    gold: [255, 215, 0],
    goldenrod: [218, 165, 32],
    gray: [128, 128, 128],
    green: [0, 128, 0],
    greenyellow: [173, 255, 47],
    grey: [128, 128, 128],
    honeydew: [240, 255, 240],
    hotpink: [255, 105, 180],
    indianred: [205, 92, 92],
    indigo: [75, 0, 130],
    ivory: [255, 255, 240],
    khaki: [240, 230, 140],
    lavender: [230, 230, 250],
    lavenderblush: [255, 240, 245],
    lawngreen: [124, 252, 0],
    lemonchiffon: [255, 250, 205],
    lightblue: [173, 216, 230],
    lightcoral: [240, 128, 128],
    lightcyan: [224, 255, 255],
    lightgoldenrodyellow: [250, 250, 210],
    lightgray: [211, 211, 211],
    lightgreen: [144, 238, 144],
    lightgrey: [211, 211, 211],
    lightpink: [255, 182, 193],
    lightsalmon: [255, 160, 122],
    lightseagreen: [32, 178, 170],
    lightskyblue: [135, 206, 250],
    lightslategray: [119, 136, 153],
    lightslategrey: [119, 136, 153],
    lightsteelblue: [176, 196, 222],
    lightyellow: [255, 255, 224],
    lime: [0, 255, 0],
    limegreen: [50, 205, 50],
    linen: [250, 240, 230],
    magenta: [255, 0, 255],
    maroon: [128, 0, 0],
    mediumaquamarine: [102, 205, 170],
    mediumblue: [0, 0, 205],
    mediumorchid: [186, 85, 211],
    mediumpurple: [147, 112, 219],
    mediumseagreen: [60, 179, 113],
    mediumslateblue: [123, 104, 238],
    mediumspringgreen: [0, 250, 154],
    mediumturquoise: [72, 209, 204],
    mediumvioletred: [199, 21, 133],
    midnightblue: [25, 25, 112],
    mintcream: [245, 255, 250],
    mistyrose: [255, 228, 225],
    moccasin: [255, 228, 181],
    navajowhite: [255, 222, 173],
    navy: [0, 0, 128],
    oldlace: [253, 245, 230],
    olive: [128, 128, 0],
    olivedrab: [107, 142, 35],
    orange: [255, 165, 0],
    orangered: [255, 69, 0],
    orchid: [218, 112, 214],
    palegoldenrod: [238, 232, 170],
    palegreen: [152, 251, 152],
    paleturquoise: [175, 238, 238],
    palevioletred: [219, 112, 147],
    papayawhip: [255, 239, 213],
    peachpuff: [255, 218, 185],
    peru: [205, 133, 63],
    pink: [255, 192, 203],
    plum: [221, 160, 221],
    powderblue: [176, 224, 230],
    purple: [128, 0, 128],
    rebeccapurple: [102, 51, 153],
    red: [255, 0, 0],
    rosybrown: [188, 143, 143],
    royalblue: [65, 105, 225],
    saddlebrown: [139, 69, 19],
    salmon: [250, 128, 114],
    sandybrown: [244, 164, 96],
    seagreen: [46, 139, 87],
    seashell: [255, 245, 238],
    sienna: [160, 82, 45],
    silver: [192, 192, 192],
    skyblue: [135, 206, 235],
    slateblue: [106, 90, 205],
    slategray: [112, 128, 144],
    slategrey: [112, 128, 144],
    snow: [255, 250, 250],
    springgreen: [0, 255, 127],
    steelblue: [70, 130, 180],
    tan: [210, 180, 140],
    teal: [0, 128, 128],
    thistle: [216, 191, 216],
    tomato: [255, 99, 71],
    turquoise: [64, 224, 208],
    violet: [238, 130, 238],
    wheat: [245, 222, 179],
    white: [255, 255, 255],
    whitesmoke: [245, 245, 245],
    yellow: [255, 255, 0],
    yellowgreen: [154, 205, 50]
  };
});

// node_modules/gradient-string/node_modules/color-convert/conversions.js
var require_conversions2 = __commonJS((exports2, module2) => {
  var cssKeywords = require_color_name2();
  var reverseKeywords = {};
  for (var key in cssKeywords) {
    if (cssKeywords.hasOwnProperty(key)) {
      reverseKeywords[cssKeywords[key]] = key;
    }
  }
  var convert = module2.exports = {
    rgb: {channels: 3, labels: "rgb"},
    hsl: {channels: 3, labels: "hsl"},
    hsv: {channels: 3, labels: "hsv"},
    hwb: {channels: 3, labels: "hwb"},
    cmyk: {channels: 4, labels: "cmyk"},
    xyz: {channels: 3, labels: "xyz"},
    lab: {channels: 3, labels: "lab"},
    lch: {channels: 3, labels: "lch"},
    hex: {channels: 1, labels: ["hex"]},
    keyword: {channels: 1, labels: ["keyword"]},
    ansi16: {channels: 1, labels: ["ansi16"]},
    ansi256: {channels: 1, labels: ["ansi256"]},
    hcg: {channels: 3, labels: ["h", "c", "g"]},
    apple: {channels: 3, labels: ["r16", "g16", "b16"]},
    gray: {channels: 1, labels: ["gray"]}
  };
  for (var model in convert) {
    if (convert.hasOwnProperty(model)) {
      if (!("channels" in convert[model])) {
        throw new Error("missing channels property: " + model);
      }
      if (!("labels" in convert[model])) {
        throw new Error("missing channel labels property: " + model);
      }
      if (convert[model].labels.length !== convert[model].channels) {
        throw new Error("channel and label counts mismatch: " + model);
      }
      channels = convert[model].channels;
      labels = convert[model].labels;
      delete convert[model].channels;
      delete convert[model].labels;
      Object.defineProperty(convert[model], "channels", {value: channels});
      Object.defineProperty(convert[model], "labels", {value: labels});
    }
  }
  var channels;
  var labels;
  convert.rgb.hsl = function(rgb) {
    var r = rgb[0] / 255;
    var g = rgb[1] / 255;
    var b = rgb[2] / 255;
    var min = Math.min(r, g, b);
    var max = Math.max(r, g, b);
    var delta = max - min;
    var h;
    var s;
    var l;
    if (max === min) {
      h = 0;
    } else if (r === max) {
      h = (g - b) / delta;
    } else if (g === max) {
      h = 2 + (b - r) / delta;
    } else if (b === max) {
      h = 4 + (r - g) / delta;
    }
    h = Math.min(h * 60, 360);
    if (h < 0) {
      h += 360;
    }
    l = (min + max) / 2;
    if (max === min) {
      s = 0;
    } else if (l <= 0.5) {
      s = delta / (max + min);
    } else {
      s = delta / (2 - max - min);
    }
    return [h, s * 100, l * 100];
  };
  convert.rgb.hsv = function(rgb) {
    var rdif;
    var gdif;
    var bdif;
    var h;
    var s;
    var r = rgb[0] / 255;
    var g = rgb[1] / 255;
    var b = rgb[2] / 255;
    var v = Math.max(r, g, b);
    var diff = v - Math.min(r, g, b);
    var diffc = function(c) {
      return (v - c) / 6 / diff + 1 / 2;
    };
    if (diff === 0) {
      h = s = 0;
    } else {
      s = diff / v;
      rdif = diffc(r);
      gdif = diffc(g);
      bdif = diffc(b);
      if (r === v) {
        h = bdif - gdif;
      } else if (g === v) {
        h = 1 / 3 + rdif - bdif;
      } else if (b === v) {
        h = 2 / 3 + gdif - rdif;
      }
      if (h < 0) {
        h += 1;
      } else if (h > 1) {
        h -= 1;
      }
    }
    return [
      h * 360,
      s * 100,
      v * 100
    ];
  };
  convert.rgb.hwb = function(rgb) {
    var r = rgb[0];
    var g = rgb[1];
    var b = rgb[2];
    var h = convert.rgb.hsl(rgb)[0];
    var w = 1 / 255 * Math.min(r, Math.min(g, b));
    b = 1 - 1 / 255 * Math.max(r, Math.max(g, b));
    return [h, w * 100, b * 100];
  };
  convert.rgb.cmyk = function(rgb) {
    var r = rgb[0] / 255;
    var g = rgb[1] / 255;
    var b = rgb[2] / 255;
    var c;
    var m;
    var y;
    var k;
    k = Math.min(1 - r, 1 - g, 1 - b);
    c = (1 - r - k) / (1 - k) || 0;
    m = (1 - g - k) / (1 - k) || 0;
    y = (1 - b - k) / (1 - k) || 0;
    return [c * 100, m * 100, y * 100, k * 100];
  };
  function comparativeDistance(x, y) {
    return Math.pow(x[0] - y[0], 2) + Math.pow(x[1] - y[1], 2) + Math.pow(x[2] - y[2], 2);
  }
  convert.rgb.keyword = function(rgb) {
    var reversed = reverseKeywords[rgb];
    if (reversed) {
      return reversed;
    }
    var currentClosestDistance = Infinity;
    var currentClosestKeyword;
    for (var keyword in cssKeywords) {
      if (cssKeywords.hasOwnProperty(keyword)) {
        var value = cssKeywords[keyword];
        var distance = comparativeDistance(rgb, value);
        if (distance < currentClosestDistance) {
          currentClosestDistance = distance;
          currentClosestKeyword = keyword;
        }
      }
    }
    return currentClosestKeyword;
  };
  convert.keyword.rgb = function(keyword) {
    return cssKeywords[keyword];
  };
  convert.rgb.xyz = function(rgb) {
    var r = rgb[0] / 255;
    var g = rgb[1] / 255;
    var b = rgb[2] / 255;
    r = r > 0.04045 ? Math.pow((r + 0.055) / 1.055, 2.4) : r / 12.92;
    g = g > 0.04045 ? Math.pow((g + 0.055) / 1.055, 2.4) : g / 12.92;
    b = b > 0.04045 ? Math.pow((b + 0.055) / 1.055, 2.4) : b / 12.92;
    var x = r * 0.4124 + g * 0.3576 + b * 0.1805;
    var y = r * 0.2126 + g * 0.7152 + b * 0.0722;
    var z = r * 0.0193 + g * 0.1192 + b * 0.9505;
    return [x * 100, y * 100, z * 100];
  };
  convert.rgb.lab = function(rgb) {
    var xyz = convert.rgb.xyz(rgb);
    var x = xyz[0];
    var y = xyz[1];
    var z = xyz[2];
    var l;
    var a;
    var b;
    x /= 95.047;
    y /= 100;
    z /= 108.883;
    x = x > 8856e-6 ? Math.pow(x, 1 / 3) : 7.787 * x + 16 / 116;
    y = y > 8856e-6 ? Math.pow(y, 1 / 3) : 7.787 * y + 16 / 116;
    z = z > 8856e-6 ? Math.pow(z, 1 / 3) : 7.787 * z + 16 / 116;
    l = 116 * y - 16;
    a = 500 * (x - y);
    b = 200 * (y - z);
    return [l, a, b];
  };
  convert.hsl.rgb = function(hsl) {
    var h = hsl[0] / 360;
    var s = hsl[1] / 100;
    var l = hsl[2] / 100;
    var t1;
    var t2;
    var t3;
    var rgb;
    var val;
    if (s === 0) {
      val = l * 255;
      return [val, val, val];
    }
    if (l < 0.5) {
      t2 = l * (1 + s);
    } else {
      t2 = l + s - l * s;
    }
    t1 = 2 * l - t2;
    rgb = [0, 0, 0];
    for (var i = 0; i < 3; i++) {
      t3 = h + 1 / 3 * -(i - 1);
      if (t3 < 0) {
        t3++;
      }
      if (t3 > 1) {
        t3--;
      }
      if (6 * t3 < 1) {
        val = t1 + (t2 - t1) * 6 * t3;
      } else if (2 * t3 < 1) {
        val = t2;
      } else if (3 * t3 < 2) {
        val = t1 + (t2 - t1) * (2 / 3 - t3) * 6;
      } else {
        val = t1;
      }
      rgb[i] = val * 255;
    }
    return rgb;
  };
  convert.hsl.hsv = function(hsl) {
    var h = hsl[0];
    var s = hsl[1] / 100;
    var l = hsl[2] / 100;
    var smin = s;
    var lmin = Math.max(l, 0.01);
    var sv;
    var v;
    l *= 2;
    s *= l <= 1 ? l : 2 - l;
    smin *= lmin <= 1 ? lmin : 2 - lmin;
    v = (l + s) / 2;
    sv = l === 0 ? 2 * smin / (lmin + smin) : 2 * s / (l + s);
    return [h, sv * 100, v * 100];
  };
  convert.hsv.rgb = function(hsv) {
    var h = hsv[0] / 60;
    var s = hsv[1] / 100;
    var v = hsv[2] / 100;
    var hi = Math.floor(h) % 6;
    var f = h - Math.floor(h);
    var p = 255 * v * (1 - s);
    var q = 255 * v * (1 - s * f);
    var t = 255 * v * (1 - s * (1 - f));
    v *= 255;
    switch (hi) {
      case 0:
        return [v, t, p];
      case 1:
        return [q, v, p];
      case 2:
        return [p, v, t];
      case 3:
        return [p, q, v];
      case 4:
        return [t, p, v];
      case 5:
        return [v, p, q];
    }
  };
  convert.hsv.hsl = function(hsv) {
    var h = hsv[0];
    var s = hsv[1] / 100;
    var v = hsv[2] / 100;
    var vmin = Math.max(v, 0.01);
    var lmin;
    var sl;
    var l;
    l = (2 - s) * v;
    lmin = (2 - s) * vmin;
    sl = s * vmin;
    sl /= lmin <= 1 ? lmin : 2 - lmin;
    sl = sl || 0;
    l /= 2;
    return [h, sl * 100, l * 100];
  };
  convert.hwb.rgb = function(hwb) {
    var h = hwb[0] / 360;
    var wh = hwb[1] / 100;
    var bl = hwb[2] / 100;
    var ratio = wh + bl;
    var i;
    var v;
    var f;
    var n;
    if (ratio > 1) {
      wh /= ratio;
      bl /= ratio;
    }
    i = Math.floor(6 * h);
    v = 1 - bl;
    f = 6 * h - i;
    if ((i & 1) !== 0) {
      f = 1 - f;
    }
    n = wh + f * (v - wh);
    var r;
    var g;
    var b;
    switch (i) {
      default:
      case 6:
      case 0:
        r = v;
        g = n;
        b = wh;
        break;
      case 1:
        r = n;
        g = v;
        b = wh;
        break;
      case 2:
        r = wh;
        g = v;
        b = n;
        break;
      case 3:
        r = wh;
        g = n;
        b = v;
        break;
      case 4:
        r = n;
        g = wh;
        b = v;
        break;
      case 5:
        r = v;
        g = wh;
        b = n;
        break;
    }
    return [r * 255, g * 255, b * 255];
  };
  convert.cmyk.rgb = function(cmyk) {
    var c = cmyk[0] / 100;
    var m = cmyk[1] / 100;
    var y = cmyk[2] / 100;
    var k = cmyk[3] / 100;
    var r;
    var g;
    var b;
    r = 1 - Math.min(1, c * (1 - k) + k);
    g = 1 - Math.min(1, m * (1 - k) + k);
    b = 1 - Math.min(1, y * (1 - k) + k);
    return [r * 255, g * 255, b * 255];
  };
  convert.xyz.rgb = function(xyz) {
    var x = xyz[0] / 100;
    var y = xyz[1] / 100;
    var z = xyz[2] / 100;
    var r;
    var g;
    var b;
    r = x * 3.2406 + y * -1.5372 + z * -0.4986;
    g = x * -0.9689 + y * 1.8758 + z * 0.0415;
    b = x * 0.0557 + y * -0.204 + z * 1.057;
    r = r > 31308e-7 ? 1.055 * Math.pow(r, 1 / 2.4) - 0.055 : r * 12.92;
    g = g > 31308e-7 ? 1.055 * Math.pow(g, 1 / 2.4) - 0.055 : g * 12.92;
    b = b > 31308e-7 ? 1.055 * Math.pow(b, 1 / 2.4) - 0.055 : b * 12.92;
    r = Math.min(Math.max(0, r), 1);
    g = Math.min(Math.max(0, g), 1);
    b = Math.min(Math.max(0, b), 1);
    return [r * 255, g * 255, b * 255];
  };
  convert.xyz.lab = function(xyz) {
    var x = xyz[0];
    var y = xyz[1];
    var z = xyz[2];
    var l;
    var a;
    var b;
    x /= 95.047;
    y /= 100;
    z /= 108.883;
    x = x > 8856e-6 ? Math.pow(x, 1 / 3) : 7.787 * x + 16 / 116;
    y = y > 8856e-6 ? Math.pow(y, 1 / 3) : 7.787 * y + 16 / 116;
    z = z > 8856e-6 ? Math.pow(z, 1 / 3) : 7.787 * z + 16 / 116;
    l = 116 * y - 16;
    a = 500 * (x - y);
    b = 200 * (y - z);
    return [l, a, b];
  };
  convert.lab.xyz = function(lab) {
    var l = lab[0];
    var a = lab[1];
    var b = lab[2];
    var x;
    var y;
    var z;
    y = (l + 16) / 116;
    x = a / 500 + y;
    z = y - b / 200;
    var y2 = Math.pow(y, 3);
    var x2 = Math.pow(x, 3);
    var z2 = Math.pow(z, 3);
    y = y2 > 8856e-6 ? y2 : (y - 16 / 116) / 7.787;
    x = x2 > 8856e-6 ? x2 : (x - 16 / 116) / 7.787;
    z = z2 > 8856e-6 ? z2 : (z - 16 / 116) / 7.787;
    x *= 95.047;
    y *= 100;
    z *= 108.883;
    return [x, y, z];
  };
  convert.lab.lch = function(lab) {
    var l = lab[0];
    var a = lab[1];
    var b = lab[2];
    var hr;
    var h;
    var c;
    hr = Math.atan2(b, a);
    h = hr * 360 / 2 / Math.PI;
    if (h < 0) {
      h += 360;
    }
    c = Math.sqrt(a * a + b * b);
    return [l, c, h];
  };
  convert.lch.lab = function(lch) {
    var l = lch[0];
    var c = lch[1];
    var h = lch[2];
    var a;
    var b;
    var hr;
    hr = h / 360 * 2 * Math.PI;
    a = c * Math.cos(hr);
    b = c * Math.sin(hr);
    return [l, a, b];
  };
  convert.rgb.ansi16 = function(args) {
    var r = args[0];
    var g = args[1];
    var b = args[2];
    var value = 1 in arguments ? arguments[1] : convert.rgb.hsv(args)[2];
    value = Math.round(value / 50);
    if (value === 0) {
      return 30;
    }
    var ansi = 30 + (Math.round(b / 255) << 2 | Math.round(g / 255) << 1 | Math.round(r / 255));
    if (value === 2) {
      ansi += 60;
    }
    return ansi;
  };
  convert.hsv.ansi16 = function(args) {
    return convert.rgb.ansi16(convert.hsv.rgb(args), args[2]);
  };
  convert.rgb.ansi256 = function(args) {
    var r = args[0];
    var g = args[1];
    var b = args[2];
    if (r === g && g === b) {
      if (r < 8) {
        return 16;
      }
      if (r > 248) {
        return 231;
      }
      return Math.round((r - 8) / 247 * 24) + 232;
    }
    var ansi = 16 + 36 * Math.round(r / 255 * 5) + 6 * Math.round(g / 255 * 5) + Math.round(b / 255 * 5);
    return ansi;
  };
  convert.ansi16.rgb = function(args) {
    var color = args % 10;
    if (color === 0 || color === 7) {
      if (args > 50) {
        color += 3.5;
      }
      color = color / 10.5 * 255;
      return [color, color, color];
    }
    var mult = (~~(args > 50) + 1) * 0.5;
    var r = (color & 1) * mult * 255;
    var g = (color >> 1 & 1) * mult * 255;
    var b = (color >> 2 & 1) * mult * 255;
    return [r, g, b];
  };
  convert.ansi256.rgb = function(args) {
    if (args >= 232) {
      var c = (args - 232) * 10 + 8;
      return [c, c, c];
    }
    args -= 16;
    var rem;
    var r = Math.floor(args / 36) / 5 * 255;
    var g = Math.floor((rem = args % 36) / 6) / 5 * 255;
    var b = rem % 6 / 5 * 255;
    return [r, g, b];
  };
  convert.rgb.hex = function(args) {
    var integer = ((Math.round(args[0]) & 255) << 16) + ((Math.round(args[1]) & 255) << 8) + (Math.round(args[2]) & 255);
    var string = integer.toString(16).toUpperCase();
    return "000000".substring(string.length) + string;
  };
  convert.hex.rgb = function(args) {
    var match = args.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
    if (!match) {
      return [0, 0, 0];
    }
    var colorString = match[0];
    if (match[0].length === 3) {
      colorString = colorString.split("").map(function(char) {
        return char + char;
      }).join("");
    }
    var integer = parseInt(colorString, 16);
    var r = integer >> 16 & 255;
    var g = integer >> 8 & 255;
    var b = integer & 255;
    return [r, g, b];
  };
  convert.rgb.hcg = function(rgb) {
    var r = rgb[0] / 255;
    var g = rgb[1] / 255;
    var b = rgb[2] / 255;
    var max = Math.max(Math.max(r, g), b);
    var min = Math.min(Math.min(r, g), b);
    var chroma = max - min;
    var grayscale;
    var hue;
    if (chroma < 1) {
      grayscale = min / (1 - chroma);
    } else {
      grayscale = 0;
    }
    if (chroma <= 0) {
      hue = 0;
    } else if (max === r) {
      hue = (g - b) / chroma % 6;
    } else if (max === g) {
      hue = 2 + (b - r) / chroma;
    } else {
      hue = 4 + (r - g) / chroma + 4;
    }
    hue /= 6;
    hue %= 1;
    return [hue * 360, chroma * 100, grayscale * 100];
  };
  convert.hsl.hcg = function(hsl) {
    var s = hsl[1] / 100;
    var l = hsl[2] / 100;
    var c = 1;
    var f = 0;
    if (l < 0.5) {
      c = 2 * s * l;
    } else {
      c = 2 * s * (1 - l);
    }
    if (c < 1) {
      f = (l - 0.5 * c) / (1 - c);
    }
    return [hsl[0], c * 100, f * 100];
  };
  convert.hsv.hcg = function(hsv) {
    var s = hsv[1] / 100;
    var v = hsv[2] / 100;
    var c = s * v;
    var f = 0;
    if (c < 1) {
      f = (v - c) / (1 - c);
    }
    return [hsv[0], c * 100, f * 100];
  };
  convert.hcg.rgb = function(hcg) {
    var h = hcg[0] / 360;
    var c = hcg[1] / 100;
    var g = hcg[2] / 100;
    if (c === 0) {
      return [g * 255, g * 255, g * 255];
    }
    var pure = [0, 0, 0];
    var hi = h % 1 * 6;
    var v = hi % 1;
    var w = 1 - v;
    var mg = 0;
    switch (Math.floor(hi)) {
      case 0:
        pure[0] = 1;
        pure[1] = v;
        pure[2] = 0;
        break;
      case 1:
        pure[0] = w;
        pure[1] = 1;
        pure[2] = 0;
        break;
      case 2:
        pure[0] = 0;
        pure[1] = 1;
        pure[2] = v;
        break;
      case 3:
        pure[0] = 0;
        pure[1] = w;
        pure[2] = 1;
        break;
      case 4:
        pure[0] = v;
        pure[1] = 0;
        pure[2] = 1;
        break;
      default:
        pure[0] = 1;
        pure[1] = 0;
        pure[2] = w;
    }
    mg = (1 - c) * g;
    return [
      (c * pure[0] + mg) * 255,
      (c * pure[1] + mg) * 255,
      (c * pure[2] + mg) * 255
    ];
  };
  convert.hcg.hsv = function(hcg) {
    var c = hcg[1] / 100;
    var g = hcg[2] / 100;
    var v = c + g * (1 - c);
    var f = 0;
    if (v > 0) {
      f = c / v;
    }
    return [hcg[0], f * 100, v * 100];
  };
  convert.hcg.hsl = function(hcg) {
    var c = hcg[1] / 100;
    var g = hcg[2] / 100;
    var l = g * (1 - c) + 0.5 * c;
    var s = 0;
    if (l > 0 && l < 0.5) {
      s = c / (2 * l);
    } else if (l >= 0.5 && l < 1) {
      s = c / (2 * (1 - l));
    }
    return [hcg[0], s * 100, l * 100];
  };
  convert.hcg.hwb = function(hcg) {
    var c = hcg[1] / 100;
    var g = hcg[2] / 100;
    var v = c + g * (1 - c);
    return [hcg[0], (v - c) * 100, (1 - v) * 100];
  };
  convert.hwb.hcg = function(hwb) {
    var w = hwb[1] / 100;
    var b = hwb[2] / 100;
    var v = 1 - b;
    var c = v - w;
    var g = 0;
    if (c < 1) {
      g = (v - c) / (1 - c);
    }
    return [hwb[0], c * 100, g * 100];
  };
  convert.apple.rgb = function(apple) {
    return [apple[0] / 65535 * 255, apple[1] / 65535 * 255, apple[2] / 65535 * 255];
  };
  convert.rgb.apple = function(rgb) {
    return [rgb[0] / 255 * 65535, rgb[1] / 255 * 65535, rgb[2] / 255 * 65535];
  };
  convert.gray.rgb = function(args) {
    return [args[0] / 100 * 255, args[0] / 100 * 255, args[0] / 100 * 255];
  };
  convert.gray.hsl = convert.gray.hsv = function(args) {
    return [0, 0, args[0]];
  };
  convert.gray.hwb = function(gray) {
    return [0, 100, gray[0]];
  };
  convert.gray.cmyk = function(gray) {
    return [0, 0, 0, gray[0]];
  };
  convert.gray.lab = function(gray) {
    return [gray[0], 0, 0];
  };
  convert.gray.hex = function(gray) {
    var val = Math.round(gray[0] / 100 * 255) & 255;
    var integer = (val << 16) + (val << 8) + val;
    var string = integer.toString(16).toUpperCase();
    return "000000".substring(string.length) + string;
  };
  convert.rgb.gray = function(rgb) {
    var val = (rgb[0] + rgb[1] + rgb[2]) / 3;
    return [val / 255 * 100];
  };
});

// node_modules/gradient-string/node_modules/color-convert/route.js
var require_route2 = __commonJS((exports2, module2) => {
  var conversions = require_conversions2();
  function buildGraph() {
    var graph = {};
    var models = Object.keys(conversions);
    for (var len = models.length, i = 0; i < len; i++) {
      graph[models[i]] = {
        distance: -1,
        parent: null
      };
    }
    return graph;
  }
  function deriveBFS(fromModel) {
    var graph = buildGraph();
    var queue = [fromModel];
    graph[fromModel].distance = 0;
    while (queue.length) {
      var current = queue.pop();
      var adjacents = Object.keys(conversions[current]);
      for (var len = adjacents.length, i = 0; i < len; i++) {
        var adjacent = adjacents[i];
        var node = graph[adjacent];
        if (node.distance === -1) {
          node.distance = graph[current].distance + 1;
          node.parent = current;
          queue.unshift(adjacent);
        }
      }
    }
    return graph;
  }
  function link(from, to) {
    return function(args) {
      return to(from(args));
    };
  }
  function wrapConversion(toModel, graph) {
    var path = [graph[toModel].parent, toModel];
    var fn = conversions[graph[toModel].parent][toModel];
    var cur = graph[toModel].parent;
    while (graph[cur].parent) {
      path.unshift(graph[cur].parent);
      fn = link(conversions[graph[cur].parent][cur], fn);
      cur = graph[cur].parent;
    }
    fn.conversion = path;
    return fn;
  }
  module2.exports = function(fromModel) {
    var graph = deriveBFS(fromModel);
    var conversion = {};
    var models = Object.keys(graph);
    for (var len = models.length, i = 0; i < len; i++) {
      var toModel = models[i];
      var node = graph[toModel];
      if (node.parent === null) {
        continue;
      }
      conversion[toModel] = wrapConversion(toModel, graph);
    }
    return conversion;
  };
});

// node_modules/gradient-string/node_modules/color-convert/index.js
var require_color_convert2 = __commonJS((exports2, module2) => {
  var conversions = require_conversions2();
  var route = require_route2();
  var convert = {};
  var models = Object.keys(conversions);
  function wrapRaw(fn) {
    var wrappedFn = function(args) {
      if (args === void 0 || args === null) {
        return args;
      }
      if (arguments.length > 1) {
        args = Array.prototype.slice.call(arguments);
      }
      return fn(args);
    };
    if ("conversion" in fn) {
      wrappedFn.conversion = fn.conversion;
    }
    return wrappedFn;
  }
  function wrapRounded(fn) {
    var wrappedFn = function(args) {
      if (args === void 0 || args === null) {
        return args;
      }
      if (arguments.length > 1) {
        args = Array.prototype.slice.call(arguments);
      }
      var result = fn(args);
      if (typeof result === "object") {
        for (var len = result.length, i = 0; i < len; i++) {
          result[i] = Math.round(result[i]);
        }
      }
      return result;
    };
    if ("conversion" in fn) {
      wrappedFn.conversion = fn.conversion;
    }
    return wrappedFn;
  }
  models.forEach(function(fromModel) {
    convert[fromModel] = {};
    Object.defineProperty(convert[fromModel], "channels", {value: conversions[fromModel].channels});
    Object.defineProperty(convert[fromModel], "labels", {value: conversions[fromModel].labels});
    var routes = route(fromModel);
    var routeModels = Object.keys(routes);
    routeModels.forEach(function(toModel) {
      var fn = routes[toModel];
      convert[fromModel][toModel] = wrapRounded(fn);
      convert[fromModel][toModel].raw = wrapRaw(fn);
    });
  });
  module2.exports = convert;
});

// node_modules/gradient-string/node_modules/ansi-styles/index.js
var require_ansi_styles2 = __commonJS((exports2, module2) => {
  "use strict";
  var colorConvert = require_color_convert2();
  var wrapAnsi16 = (fn, offset) => function() {
    const code = fn.apply(colorConvert, arguments);
    return `[${code + offset}m`;
  };
  var wrapAnsi256 = (fn, offset) => function() {
    const code = fn.apply(colorConvert, arguments);
    return `[${38 + offset};5;${code}m`;
  };
  var wrapAnsi16m = (fn, offset) => function() {
    const rgb = fn.apply(colorConvert, arguments);
    return `[${38 + offset};2;${rgb[0]};${rgb[1]};${rgb[2]}m`;
  };
  function assembleStyles() {
    const codes = new Map();
    const styles = {
      modifier: {
        reset: [0, 0],
        bold: [1, 22],
        dim: [2, 22],
        italic: [3, 23],
        underline: [4, 24],
        inverse: [7, 27],
        hidden: [8, 28],
        strikethrough: [9, 29]
      },
      color: {
        black: [30, 39],
        red: [31, 39],
        green: [32, 39],
        yellow: [33, 39],
        blue: [34, 39],
        magenta: [35, 39],
        cyan: [36, 39],
        white: [37, 39],
        gray: [90, 39],
        redBright: [91, 39],
        greenBright: [92, 39],
        yellowBright: [93, 39],
        blueBright: [94, 39],
        magentaBright: [95, 39],
        cyanBright: [96, 39],
        whiteBright: [97, 39]
      },
      bgColor: {
        bgBlack: [40, 49],
        bgRed: [41, 49],
        bgGreen: [42, 49],
        bgYellow: [43, 49],
        bgBlue: [44, 49],
        bgMagenta: [45, 49],
        bgCyan: [46, 49],
        bgWhite: [47, 49],
        bgBlackBright: [100, 49],
        bgRedBright: [101, 49],
        bgGreenBright: [102, 49],
        bgYellowBright: [103, 49],
        bgBlueBright: [104, 49],
        bgMagentaBright: [105, 49],
        bgCyanBright: [106, 49],
        bgWhiteBright: [107, 49]
      }
    };
    styles.color.grey = styles.color.gray;
    for (const groupName of Object.keys(styles)) {
      const group = styles[groupName];
      for (const styleName of Object.keys(group)) {
        const style = group[styleName];
        styles[styleName] = {
          open: `[${style[0]}m`,
          close: `[${style[1]}m`
        };
        group[styleName] = styles[styleName];
        codes.set(style[0], style[1]);
      }
      Object.defineProperty(styles, groupName, {
        value: group,
        enumerable: false
      });
      Object.defineProperty(styles, "codes", {
        value: codes,
        enumerable: false
      });
    }
    const ansi2ansi = (n) => n;
    const rgb2rgb = (r, g, b) => [r, g, b];
    styles.color.close = "[39m";
    styles.bgColor.close = "[49m";
    styles.color.ansi = {
      ansi: wrapAnsi16(ansi2ansi, 0)
    };
    styles.color.ansi256 = {
      ansi256: wrapAnsi256(ansi2ansi, 0)
    };
    styles.color.ansi16m = {
      rgb: wrapAnsi16m(rgb2rgb, 0)
    };
    styles.bgColor.ansi = {
      ansi: wrapAnsi16(ansi2ansi, 10)
    };
    styles.bgColor.ansi256 = {
      ansi256: wrapAnsi256(ansi2ansi, 10)
    };
    styles.bgColor.ansi16m = {
      rgb: wrapAnsi16m(rgb2rgb, 10)
    };
    for (let key of Object.keys(colorConvert)) {
      if (typeof colorConvert[key] !== "object") {
        continue;
      }
      const suite = colorConvert[key];
      if (key === "ansi16") {
        key = "ansi";
      }
      if ("ansi16" in suite) {
        styles.color.ansi[key] = wrapAnsi16(suite.ansi16, 0);
        styles.bgColor.ansi[key] = wrapAnsi16(suite.ansi16, 10);
      }
      if ("ansi256" in suite) {
        styles.color.ansi256[key] = wrapAnsi256(suite.ansi256, 0);
        styles.bgColor.ansi256[key] = wrapAnsi256(suite.ansi256, 10);
      }
      if ("rgb" in suite) {
        styles.color.ansi16m[key] = wrapAnsi16m(suite.rgb, 0);
        styles.bgColor.ansi16m[key] = wrapAnsi16m(suite.rgb, 10);
      }
    }
    return styles;
  }
  Object.defineProperty(module2, "exports", {
    enumerable: true,
    get: assembleStyles
  });
});

// node_modules/gradient-string/node_modules/has-flag/index.js
var require_has_flag2 = __commonJS((exports2, module2) => {
  "use strict";
  module2.exports = (flag, argv) => {
    argv = argv || process.argv;
    const prefix = flag.startsWith("-") ? "" : flag.length === 1 ? "-" : "--";
    const pos = argv.indexOf(prefix + flag);
    const terminatorPos = argv.indexOf("--");
    return pos !== -1 && (terminatorPos === -1 ? true : pos < terminatorPos);
  };
});

// node_modules/gradient-string/node_modules/supports-color/index.js
var require_supports_color2 = __commonJS((exports2, module2) => {
  "use strict";
  var os = require("os");
  var hasFlag = require_has_flag2();
  var env = process.env;
  var forceColor;
  if (hasFlag("no-color") || hasFlag("no-colors") || hasFlag("color=false")) {
    forceColor = false;
  } else if (hasFlag("color") || hasFlag("colors") || hasFlag("color=true") || hasFlag("color=always")) {
    forceColor = true;
  }
  if ("FORCE_COLOR" in env) {
    forceColor = env.FORCE_COLOR.length === 0 || parseInt(env.FORCE_COLOR, 10) !== 0;
  }
  function translateLevel(level) {
    if (level === 0) {
      return false;
    }
    return {
      level,
      hasBasic: true,
      has256: level >= 2,
      has16m: level >= 3
    };
  }
  function supportsColor(stream) {
    if (forceColor === false) {
      return 0;
    }
    if (hasFlag("color=16m") || hasFlag("color=full") || hasFlag("color=truecolor")) {
      return 3;
    }
    if (hasFlag("color=256")) {
      return 2;
    }
    if (stream && !stream.isTTY && forceColor !== true) {
      return 0;
    }
    const min = forceColor ? 1 : 0;
    if (process.platform === "win32") {
      const osRelease = os.release().split(".");
      if (Number(process.versions.node.split(".")[0]) >= 8 && Number(osRelease[0]) >= 10 && Number(osRelease[2]) >= 10586) {
        return Number(osRelease[2]) >= 14931 ? 3 : 2;
      }
      return 1;
    }
    if ("CI" in env) {
      if (["TRAVIS", "CIRCLECI", "APPVEYOR", "GITLAB_CI"].some((sign) => sign in env) || env.CI_NAME === "codeship") {
        return 1;
      }
      return min;
    }
    if ("TEAMCITY_VERSION" in env) {
      return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(env.TEAMCITY_VERSION) ? 1 : 0;
    }
    if (env.COLORTERM === "truecolor") {
      return 3;
    }
    if ("TERM_PROGRAM" in env) {
      const version = parseInt((env.TERM_PROGRAM_VERSION || "").split(".")[0], 10);
      switch (env.TERM_PROGRAM) {
        case "iTerm.app":
          return version >= 3 ? 3 : 2;
        case "Apple_Terminal":
          return 2;
      }
    }
    if (/-256(color)?$/i.test(env.TERM)) {
      return 2;
    }
    if (/^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(env.TERM)) {
      return 1;
    }
    if ("COLORTERM" in env) {
      return 1;
    }
    if (env.TERM === "dumb") {
      return min;
    }
    return min;
  }
  function getSupportLevel(stream) {
    const level = supportsColor(stream);
    return translateLevel(level);
  }
  module2.exports = {
    supportsColor: getSupportLevel,
    stdout: getSupportLevel(process.stdout),
    stderr: getSupportLevel(process.stderr)
  };
});

// node_modules/gradient-string/node_modules/chalk/templates.js
var require_templates2 = __commonJS((exports2, module2) => {
  "use strict";
  var TEMPLATE_REGEX = /(?:\\(u[a-f\d]{4}|x[a-f\d]{2}|.))|(?:\{(~)?(\w+(?:\([^)]*\))?(?:\.\w+(?:\([^)]*\))?)*)(?:[ \t]|(?=\r?\n)))|(\})|((?:.|[\r\n\f])+?)/gi;
  var STYLE_REGEX = /(?:^|\.)(\w+)(?:\(([^)]*)\))?/g;
  var STRING_REGEX = /^(['"])((?:\\.|(?!\1)[^\\])*)\1$/;
  var ESCAPE_REGEX = /\\(u[a-f\d]{4}|x[a-f\d]{2}|.)|([^\\])/gi;
  var ESCAPES = new Map([
    ["n", "\n"],
    ["r", "\r"],
    ["t", "	"],
    ["b", "\b"],
    ["f", "\f"],
    ["v", "\v"],
    ["0", "\0"],
    ["\\", "\\"],
    ["e", ""],
    ["a", "\x07"]
  ]);
  function unescape(c) {
    if (c[0] === "u" && c.length === 5 || c[0] === "x" && c.length === 3) {
      return String.fromCharCode(parseInt(c.slice(1), 16));
    }
    return ESCAPES.get(c) || c;
  }
  function parseArguments(name, args) {
    const results = [];
    const chunks = args.trim().split(/\s*,\s*/g);
    let matches;
    for (const chunk of chunks) {
      if (!isNaN(chunk)) {
        results.push(Number(chunk));
      } else if (matches = chunk.match(STRING_REGEX)) {
        results.push(matches[2].replace(ESCAPE_REGEX, (m, escape, chr) => escape ? unescape(escape) : chr));
      } else {
        throw new Error(`Invalid Chalk template style argument: ${chunk} (in style '${name}')`);
      }
    }
    return results;
  }
  function parseStyle(style) {
    STYLE_REGEX.lastIndex = 0;
    const results = [];
    let matches;
    while ((matches = STYLE_REGEX.exec(style)) !== null) {
      const name = matches[1];
      if (matches[2]) {
        const args = parseArguments(name, matches[2]);
        results.push([name].concat(args));
      } else {
        results.push([name]);
      }
    }
    return results;
  }
  function buildStyle(chalk, styles) {
    const enabled = {};
    for (const layer of styles) {
      for (const style of layer.styles) {
        enabled[style[0]] = layer.inverse ? null : style.slice(1);
      }
    }
    let current = chalk;
    for (const styleName of Object.keys(enabled)) {
      if (Array.isArray(enabled[styleName])) {
        if (!(styleName in current)) {
          throw new Error(`Unknown Chalk style: ${styleName}`);
        }
        if (enabled[styleName].length > 0) {
          current = current[styleName].apply(current, enabled[styleName]);
        } else {
          current = current[styleName];
        }
      }
    }
    return current;
  }
  module2.exports = (chalk, tmp) => {
    const styles = [];
    const chunks = [];
    let chunk = [];
    tmp.replace(TEMPLATE_REGEX, (m, escapeChar, inverse, style, close, chr) => {
      if (escapeChar) {
        chunk.push(unescape(escapeChar));
      } else if (style) {
        const str = chunk.join("");
        chunk = [];
        chunks.push(styles.length === 0 ? str : buildStyle(chalk, styles)(str));
        styles.push({inverse, styles: parseStyle(style)});
      } else if (close) {
        if (styles.length === 0) {
          throw new Error("Found extraneous } in Chalk template literal");
        }
        chunks.push(buildStyle(chalk, styles)(chunk.join("")));
        chunk = [];
        styles.pop();
      } else {
        chunk.push(chr);
      }
    });
    chunks.push(chunk.join(""));
    if (styles.length > 0) {
      const errMsg = `Chalk template literal is missing ${styles.length} closing bracket${styles.length === 1 ? "" : "s"} (\`}\`)`;
      throw new Error(errMsg);
    }
    return chunks.join("");
  };
});

// node_modules/gradient-string/node_modules/chalk/index.js
var require_chalk2 = __commonJS((exports2, module2) => {
  "use strict";
  var escapeStringRegexp = require_escape_string_regexp();
  var ansiStyles = require_ansi_styles2();
  var stdoutColor = require_supports_color2().stdout;
  var template = require_templates2();
  var isSimpleWindowsTerm = process.platform === "win32" && !(process.env.TERM || "").toLowerCase().startsWith("xterm");
  var levelMapping = ["ansi", "ansi", "ansi256", "ansi16m"];
  var skipModels = new Set(["gray"]);
  var styles = Object.create(null);
  function applyOptions(obj, options) {
    options = options || {};
    const scLevel = stdoutColor ? stdoutColor.level : 0;
    obj.level = options.level === void 0 ? scLevel : options.level;
    obj.enabled = "enabled" in options ? options.enabled : obj.level > 0;
  }
  function Chalk(options) {
    if (!this || !(this instanceof Chalk) || this.template) {
      const chalk = {};
      applyOptions(chalk, options);
      chalk.template = function() {
        const args = [].slice.call(arguments);
        return chalkTag.apply(null, [chalk.template].concat(args));
      };
      Object.setPrototypeOf(chalk, Chalk.prototype);
      Object.setPrototypeOf(chalk.template, chalk);
      chalk.template.constructor = Chalk;
      return chalk.template;
    }
    applyOptions(this, options);
  }
  if (isSimpleWindowsTerm) {
    ansiStyles.blue.open = "[94m";
  }
  for (const key of Object.keys(ansiStyles)) {
    ansiStyles[key].closeRe = new RegExp(escapeStringRegexp(ansiStyles[key].close), "g");
    styles[key] = {
      get() {
        const codes = ansiStyles[key];
        return build.call(this, this._styles ? this._styles.concat(codes) : [codes], this._empty, key);
      }
    };
  }
  styles.visible = {
    get() {
      return build.call(this, this._styles || [], true, "visible");
    }
  };
  ansiStyles.color.closeRe = new RegExp(escapeStringRegexp(ansiStyles.color.close), "g");
  for (const model of Object.keys(ansiStyles.color.ansi)) {
    if (skipModels.has(model)) {
      continue;
    }
    styles[model] = {
      get() {
        const level = this.level;
        return function() {
          const open = ansiStyles.color[levelMapping[level]][model].apply(null, arguments);
          const codes = {
            open,
            close: ansiStyles.color.close,
            closeRe: ansiStyles.color.closeRe
          };
          return build.call(this, this._styles ? this._styles.concat(codes) : [codes], this._empty, model);
        };
      }
    };
  }
  ansiStyles.bgColor.closeRe = new RegExp(escapeStringRegexp(ansiStyles.bgColor.close), "g");
  for (const model of Object.keys(ansiStyles.bgColor.ansi)) {
    if (skipModels.has(model)) {
      continue;
    }
    const bgModel = "bg" + model[0].toUpperCase() + model.slice(1);
    styles[bgModel] = {
      get() {
        const level = this.level;
        return function() {
          const open = ansiStyles.bgColor[levelMapping[level]][model].apply(null, arguments);
          const codes = {
            open,
            close: ansiStyles.bgColor.close,
            closeRe: ansiStyles.bgColor.closeRe
          };
          return build.call(this, this._styles ? this._styles.concat(codes) : [codes], this._empty, model);
        };
      }
    };
  }
  var proto = Object.defineProperties(() => {
  }, styles);
  function build(_styles, _empty, key) {
    const builder = function() {
      return applyStyle.apply(builder, arguments);
    };
    builder._styles = _styles;
    builder._empty = _empty;
    const self = this;
    Object.defineProperty(builder, "level", {
      enumerable: true,
      get() {
        return self.level;
      },
      set(level) {
        self.level = level;
      }
    });
    Object.defineProperty(builder, "enabled", {
      enumerable: true,
      get() {
        return self.enabled;
      },
      set(enabled) {
        self.enabled = enabled;
      }
    });
    builder.hasGrey = this.hasGrey || key === "gray" || key === "grey";
    builder.__proto__ = proto;
    return builder;
  }
  function applyStyle() {
    const args = arguments;
    const argsLen = args.length;
    let str = String(arguments[0]);
    if (argsLen === 0) {
      return "";
    }
    if (argsLen > 1) {
      for (let a = 1; a < argsLen; a++) {
        str += " " + args[a];
      }
    }
    if (!this.enabled || this.level <= 0 || !str) {
      return this._empty ? "" : str;
    }
    const originalDim = ansiStyles.dim.open;
    if (isSimpleWindowsTerm && this.hasGrey) {
      ansiStyles.dim.open = "";
    }
    for (const code of this._styles.slice().reverse()) {
      str = code.open + str.replace(code.closeRe, code.open) + code.close;
      str = str.replace(/\r?\n/g, `${code.close}$&${code.open}`);
    }
    ansiStyles.dim.open = originalDim;
    return str;
  }
  function chalkTag(chalk, strings) {
    if (!Array.isArray(strings)) {
      return [].slice.call(arguments, 1).join(" ");
    }
    const args = [].slice.call(arguments, 2);
    const parts = [strings.raw[0]];
    for (let i = 1; i < strings.length; i++) {
      parts.push(String(args[i - 1]).replace(/[{}\\]/g, "\\$&"));
      parts.push(String(strings.raw[i]));
    }
    return template(chalk, parts.join(""));
  }
  Object.defineProperties(Chalk.prototype, styles);
  module2.exports = Chalk();
  module2.exports.supportsColor = stdoutColor;
  module2.exports.default = module2.exports;
});

// node_modules/tinycolor2/tinycolor.js
var require_tinycolor = __commonJS((exports2, module2) => {
  (function(Math2) {
    var trimLeft = /^\s+/, trimRight = /\s+$/, tinyCounter = 0, mathRound = Math2.round, mathMin = Math2.min, mathMax = Math2.max, mathRandom = Math2.random;
    function tinycolor(color, opts) {
      color = color ? color : "";
      opts = opts || {};
      if (color instanceof tinycolor) {
        return color;
      }
      if (!(this instanceof tinycolor)) {
        return new tinycolor(color, opts);
      }
      var rgb = inputToRGB(color);
      this._originalInput = color, this._r = rgb.r, this._g = rgb.g, this._b = rgb.b, this._a = rgb.a, this._roundA = mathRound(100 * this._a) / 100, this._format = opts.format || rgb.format;
      this._gradientType = opts.gradientType;
      if (this._r < 1) {
        this._r = mathRound(this._r);
      }
      if (this._g < 1) {
        this._g = mathRound(this._g);
      }
      if (this._b < 1) {
        this._b = mathRound(this._b);
      }
      this._ok = rgb.ok;
      this._tc_id = tinyCounter++;
    }
    tinycolor.prototype = {
      isDark: function() {
        return this.getBrightness() < 128;
      },
      isLight: function() {
        return !this.isDark();
      },
      isValid: function() {
        return this._ok;
      },
      getOriginalInput: function() {
        return this._originalInput;
      },
      getFormat: function() {
        return this._format;
      },
      getAlpha: function() {
        return this._a;
      },
      getBrightness: function() {
        var rgb = this.toRgb();
        return (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1e3;
      },
      getLuminance: function() {
        var rgb = this.toRgb();
        var RsRGB, GsRGB, BsRGB, R, G, B;
        RsRGB = rgb.r / 255;
        GsRGB = rgb.g / 255;
        BsRGB = rgb.b / 255;
        if (RsRGB <= 0.03928) {
          R = RsRGB / 12.92;
        } else {
          R = Math2.pow((RsRGB + 0.055) / 1.055, 2.4);
        }
        if (GsRGB <= 0.03928) {
          G = GsRGB / 12.92;
        } else {
          G = Math2.pow((GsRGB + 0.055) / 1.055, 2.4);
        }
        if (BsRGB <= 0.03928) {
          B = BsRGB / 12.92;
        } else {
          B = Math2.pow((BsRGB + 0.055) / 1.055, 2.4);
        }
        return 0.2126 * R + 0.7152 * G + 0.0722 * B;
      },
      setAlpha: function(value) {
        this._a = boundAlpha(value);
        this._roundA = mathRound(100 * this._a) / 100;
        return this;
      },
      toHsv: function() {
        var hsv = rgbToHsv(this._r, this._g, this._b);
        return {h: hsv.h * 360, s: hsv.s, v: hsv.v, a: this._a};
      },
      toHsvString: function() {
        var hsv = rgbToHsv(this._r, this._g, this._b);
        var h = mathRound(hsv.h * 360), s = mathRound(hsv.s * 100), v = mathRound(hsv.v * 100);
        return this._a == 1 ? "hsv(" + h + ", " + s + "%, " + v + "%)" : "hsva(" + h + ", " + s + "%, " + v + "%, " + this._roundA + ")";
      },
      toHsl: function() {
        var hsl = rgbToHsl(this._r, this._g, this._b);
        return {h: hsl.h * 360, s: hsl.s, l: hsl.l, a: this._a};
      },
      toHslString: function() {
        var hsl = rgbToHsl(this._r, this._g, this._b);
        var h = mathRound(hsl.h * 360), s = mathRound(hsl.s * 100), l = mathRound(hsl.l * 100);
        return this._a == 1 ? "hsl(" + h + ", " + s + "%, " + l + "%)" : "hsla(" + h + ", " + s + "%, " + l + "%, " + this._roundA + ")";
      },
      toHex: function(allow3Char) {
        return rgbToHex(this._r, this._g, this._b, allow3Char);
      },
      toHexString: function(allow3Char) {
        return "#" + this.toHex(allow3Char);
      },
      toHex8: function(allow4Char) {
        return rgbaToHex(this._r, this._g, this._b, this._a, allow4Char);
      },
      toHex8String: function(allow4Char) {
        return "#" + this.toHex8(allow4Char);
      },
      toRgb: function() {
        return {r: mathRound(this._r), g: mathRound(this._g), b: mathRound(this._b), a: this._a};
      },
      toRgbString: function() {
        return this._a == 1 ? "rgb(" + mathRound(this._r) + ", " + mathRound(this._g) + ", " + mathRound(this._b) + ")" : "rgba(" + mathRound(this._r) + ", " + mathRound(this._g) + ", " + mathRound(this._b) + ", " + this._roundA + ")";
      },
      toPercentageRgb: function() {
        return {r: mathRound(bound01(this._r, 255) * 100) + "%", g: mathRound(bound01(this._g, 255) * 100) + "%", b: mathRound(bound01(this._b, 255) * 100) + "%", a: this._a};
      },
      toPercentageRgbString: function() {
        return this._a == 1 ? "rgb(" + mathRound(bound01(this._r, 255) * 100) + "%, " + mathRound(bound01(this._g, 255) * 100) + "%, " + mathRound(bound01(this._b, 255) * 100) + "%)" : "rgba(" + mathRound(bound01(this._r, 255) * 100) + "%, " + mathRound(bound01(this._g, 255) * 100) + "%, " + mathRound(bound01(this._b, 255) * 100) + "%, " + this._roundA + ")";
      },
      toName: function() {
        if (this._a === 0) {
          return "transparent";
        }
        if (this._a < 1) {
          return false;
        }
        return hexNames[rgbToHex(this._r, this._g, this._b, true)] || false;
      },
      toFilter: function(secondColor) {
        var hex8String = "#" + rgbaToArgbHex(this._r, this._g, this._b, this._a);
        var secondHex8String = hex8String;
        var gradientType = this._gradientType ? "GradientType = 1, " : "";
        if (secondColor) {
          var s = tinycolor(secondColor);
          secondHex8String = "#" + rgbaToArgbHex(s._r, s._g, s._b, s._a);
        }
        return "progid:DXImageTransform.Microsoft.gradient(" + gradientType + "startColorstr=" + hex8String + ",endColorstr=" + secondHex8String + ")";
      },
      toString: function(format) {
        var formatSet = !!format;
        format = format || this._format;
        var formattedString = false;
        var hasAlpha = this._a < 1 && this._a >= 0;
        var needsAlphaFormat = !formatSet && hasAlpha && (format === "hex" || format === "hex6" || format === "hex3" || format === "hex4" || format === "hex8" || format === "name");
        if (needsAlphaFormat) {
          if (format === "name" && this._a === 0) {
            return this.toName();
          }
          return this.toRgbString();
        }
        if (format === "rgb") {
          formattedString = this.toRgbString();
        }
        if (format === "prgb") {
          formattedString = this.toPercentageRgbString();
        }
        if (format === "hex" || format === "hex6") {
          formattedString = this.toHexString();
        }
        if (format === "hex3") {
          formattedString = this.toHexString(true);
        }
        if (format === "hex4") {
          formattedString = this.toHex8String(true);
        }
        if (format === "hex8") {
          formattedString = this.toHex8String();
        }
        if (format === "name") {
          formattedString = this.toName();
        }
        if (format === "hsl") {
          formattedString = this.toHslString();
        }
        if (format === "hsv") {
          formattedString = this.toHsvString();
        }
        return formattedString || this.toHexString();
      },
      clone: function() {
        return tinycolor(this.toString());
      },
      _applyModification: function(fn, args) {
        var color = fn.apply(null, [this].concat([].slice.call(args)));
        this._r = color._r;
        this._g = color._g;
        this._b = color._b;
        this.setAlpha(color._a);
        return this;
      },
      lighten: function() {
        return this._applyModification(lighten, arguments);
      },
      brighten: function() {
        return this._applyModification(brighten, arguments);
      },
      darken: function() {
        return this._applyModification(darken, arguments);
      },
      desaturate: function() {
        return this._applyModification(desaturate, arguments);
      },
      saturate: function() {
        return this._applyModification(saturate, arguments);
      },
      greyscale: function() {
        return this._applyModification(greyscale, arguments);
      },
      spin: function() {
        return this._applyModification(spin, arguments);
      },
      _applyCombination: function(fn, args) {
        return fn.apply(null, [this].concat([].slice.call(args)));
      },
      analogous: function() {
        return this._applyCombination(analogous, arguments);
      },
      complement: function() {
        return this._applyCombination(complement, arguments);
      },
      monochromatic: function() {
        return this._applyCombination(monochromatic, arguments);
      },
      splitcomplement: function() {
        return this._applyCombination(splitcomplement, arguments);
      },
      triad: function() {
        return this._applyCombination(triad, arguments);
      },
      tetrad: function() {
        return this._applyCombination(tetrad, arguments);
      }
    };
    tinycolor.fromRatio = function(color, opts) {
      if (typeof color == "object") {
        var newColor = {};
        for (var i in color) {
          if (color.hasOwnProperty(i)) {
            if (i === "a") {
              newColor[i] = color[i];
            } else {
              newColor[i] = convertToPercentage(color[i]);
            }
          }
        }
        color = newColor;
      }
      return tinycolor(color, opts);
    };
    function inputToRGB(color) {
      var rgb = {r: 0, g: 0, b: 0};
      var a = 1;
      var s = null;
      var v = null;
      var l = null;
      var ok = false;
      var format = false;
      if (typeof color == "string") {
        color = stringInputToObject(color);
      }
      if (typeof color == "object") {
        if (isValidCSSUnit(color.r) && isValidCSSUnit(color.g) && isValidCSSUnit(color.b)) {
          rgb = rgbToRgb(color.r, color.g, color.b);
          ok = true;
          format = String(color.r).substr(-1) === "%" ? "prgb" : "rgb";
        } else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.v)) {
          s = convertToPercentage(color.s);
          v = convertToPercentage(color.v);
          rgb = hsvToRgb(color.h, s, v);
          ok = true;
          format = "hsv";
        } else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.l)) {
          s = convertToPercentage(color.s);
          l = convertToPercentage(color.l);
          rgb = hslToRgb(color.h, s, l);
          ok = true;
          format = "hsl";
        }
        if (color.hasOwnProperty("a")) {
          a = color.a;
        }
      }
      a = boundAlpha(a);
      return {
        ok,
        format: color.format || format,
        r: mathMin(255, mathMax(rgb.r, 0)),
        g: mathMin(255, mathMax(rgb.g, 0)),
        b: mathMin(255, mathMax(rgb.b, 0)),
        a
      };
    }
    function rgbToRgb(r, g, b) {
      return {
        r: bound01(r, 255) * 255,
        g: bound01(g, 255) * 255,
        b: bound01(b, 255) * 255
      };
    }
    function rgbToHsl(r, g, b) {
      r = bound01(r, 255);
      g = bound01(g, 255);
      b = bound01(b, 255);
      var max = mathMax(r, g, b), min = mathMin(r, g, b);
      var h, s, l = (max + min) / 2;
      if (max == min) {
        h = s = 0;
      } else {
        var d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
          case r:
            h = (g - b) / d + (g < b ? 6 : 0);
            break;
          case g:
            h = (b - r) / d + 2;
            break;
          case b:
            h = (r - g) / d + 4;
            break;
        }
        h /= 6;
      }
      return {h, s, l};
    }
    function hslToRgb(h, s, l) {
      var r, g, b;
      h = bound01(h, 360);
      s = bound01(s, 100);
      l = bound01(l, 100);
      function hue2rgb(p2, q2, t) {
        if (t < 0)
          t += 1;
        if (t > 1)
          t -= 1;
        if (t < 1 / 6)
          return p2 + (q2 - p2) * 6 * t;
        if (t < 1 / 2)
          return q2;
        if (t < 2 / 3)
          return p2 + (q2 - p2) * (2 / 3 - t) * 6;
        return p2;
      }
      if (s === 0) {
        r = g = b = l;
      } else {
        var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        var p = 2 * l - q;
        r = hue2rgb(p, q, h + 1 / 3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1 / 3);
      }
      return {r: r * 255, g: g * 255, b: b * 255};
    }
    function rgbToHsv(r, g, b) {
      r = bound01(r, 255);
      g = bound01(g, 255);
      b = bound01(b, 255);
      var max = mathMax(r, g, b), min = mathMin(r, g, b);
      var h, s, v = max;
      var d = max - min;
      s = max === 0 ? 0 : d / max;
      if (max == min) {
        h = 0;
      } else {
        switch (max) {
          case r:
            h = (g - b) / d + (g < b ? 6 : 0);
            break;
          case g:
            h = (b - r) / d + 2;
            break;
          case b:
            h = (r - g) / d + 4;
            break;
        }
        h /= 6;
      }
      return {h, s, v};
    }
    function hsvToRgb(h, s, v) {
      h = bound01(h, 360) * 6;
      s = bound01(s, 100);
      v = bound01(v, 100);
      var i = Math2.floor(h), f = h - i, p = v * (1 - s), q = v * (1 - f * s), t = v * (1 - (1 - f) * s), mod = i % 6, r = [v, q, p, p, t, v][mod], g = [t, v, v, q, p, p][mod], b = [p, p, t, v, v, q][mod];
      return {r: r * 255, g: g * 255, b: b * 255};
    }
    function rgbToHex(r, g, b, allow3Char) {
      var hex = [
        pad2(mathRound(r).toString(16)),
        pad2(mathRound(g).toString(16)),
        pad2(mathRound(b).toString(16))
      ];
      if (allow3Char && hex[0].charAt(0) == hex[0].charAt(1) && hex[1].charAt(0) == hex[1].charAt(1) && hex[2].charAt(0) == hex[2].charAt(1)) {
        return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0);
      }
      return hex.join("");
    }
    function rgbaToHex(r, g, b, a, allow4Char) {
      var hex = [
        pad2(mathRound(r).toString(16)),
        pad2(mathRound(g).toString(16)),
        pad2(mathRound(b).toString(16)),
        pad2(convertDecimalToHex(a))
      ];
      if (allow4Char && hex[0].charAt(0) == hex[0].charAt(1) && hex[1].charAt(0) == hex[1].charAt(1) && hex[2].charAt(0) == hex[2].charAt(1) && hex[3].charAt(0) == hex[3].charAt(1)) {
        return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0) + hex[3].charAt(0);
      }
      return hex.join("");
    }
    function rgbaToArgbHex(r, g, b, a) {
      var hex = [
        pad2(convertDecimalToHex(a)),
        pad2(mathRound(r).toString(16)),
        pad2(mathRound(g).toString(16)),
        pad2(mathRound(b).toString(16))
      ];
      return hex.join("");
    }
    tinycolor.equals = function(color1, color2) {
      if (!color1 || !color2) {
        return false;
      }
      return tinycolor(color1).toRgbString() == tinycolor(color2).toRgbString();
    };
    tinycolor.random = function() {
      return tinycolor.fromRatio({
        r: mathRandom(),
        g: mathRandom(),
        b: mathRandom()
      });
    };
    function desaturate(color, amount) {
      amount = amount === 0 ? 0 : amount || 10;
      var hsl = tinycolor(color).toHsl();
      hsl.s -= amount / 100;
      hsl.s = clamp01(hsl.s);
      return tinycolor(hsl);
    }
    function saturate(color, amount) {
      amount = amount === 0 ? 0 : amount || 10;
      var hsl = tinycolor(color).toHsl();
      hsl.s += amount / 100;
      hsl.s = clamp01(hsl.s);
      return tinycolor(hsl);
    }
    function greyscale(color) {
      return tinycolor(color).desaturate(100);
    }
    function lighten(color, amount) {
      amount = amount === 0 ? 0 : amount || 10;
      var hsl = tinycolor(color).toHsl();
      hsl.l += amount / 100;
      hsl.l = clamp01(hsl.l);
      return tinycolor(hsl);
    }
    function brighten(color, amount) {
      amount = amount === 0 ? 0 : amount || 10;
      var rgb = tinycolor(color).toRgb();
      rgb.r = mathMax(0, mathMin(255, rgb.r - mathRound(255 * -(amount / 100))));
      rgb.g = mathMax(0, mathMin(255, rgb.g - mathRound(255 * -(amount / 100))));
      rgb.b = mathMax(0, mathMin(255, rgb.b - mathRound(255 * -(amount / 100))));
      return tinycolor(rgb);
    }
    function darken(color, amount) {
      amount = amount === 0 ? 0 : amount || 10;
      var hsl = tinycolor(color).toHsl();
      hsl.l -= amount / 100;
      hsl.l = clamp01(hsl.l);
      return tinycolor(hsl);
    }
    function spin(color, amount) {
      var hsl = tinycolor(color).toHsl();
      var hue = (hsl.h + amount) % 360;
      hsl.h = hue < 0 ? 360 + hue : hue;
      return tinycolor(hsl);
    }
    function complement(color) {
      var hsl = tinycolor(color).toHsl();
      hsl.h = (hsl.h + 180) % 360;
      return tinycolor(hsl);
    }
    function triad(color) {
      var hsl = tinycolor(color).toHsl();
      var h = hsl.h;
      return [
        tinycolor(color),
        tinycolor({h: (h + 120) % 360, s: hsl.s, l: hsl.l}),
        tinycolor({h: (h + 240) % 360, s: hsl.s, l: hsl.l})
      ];
    }
    function tetrad(color) {
      var hsl = tinycolor(color).toHsl();
      var h = hsl.h;
      return [
        tinycolor(color),
        tinycolor({h: (h + 90) % 360, s: hsl.s, l: hsl.l}),
        tinycolor({h: (h + 180) % 360, s: hsl.s, l: hsl.l}),
        tinycolor({h: (h + 270) % 360, s: hsl.s, l: hsl.l})
      ];
    }
    function splitcomplement(color) {
      var hsl = tinycolor(color).toHsl();
      var h = hsl.h;
      return [
        tinycolor(color),
        tinycolor({h: (h + 72) % 360, s: hsl.s, l: hsl.l}),
        tinycolor({h: (h + 216) % 360, s: hsl.s, l: hsl.l})
      ];
    }
    function analogous(color, results, slices) {
      results = results || 6;
      slices = slices || 30;
      var hsl = tinycolor(color).toHsl();
      var part = 360 / slices;
      var ret = [tinycolor(color)];
      for (hsl.h = (hsl.h - (part * results >> 1) + 720) % 360; --results; ) {
        hsl.h = (hsl.h + part) % 360;
        ret.push(tinycolor(hsl));
      }
      return ret;
    }
    function monochromatic(color, results) {
      results = results || 6;
      var hsv = tinycolor(color).toHsv();
      var h = hsv.h, s = hsv.s, v = hsv.v;
      var ret = [];
      var modification = 1 / results;
      while (results--) {
        ret.push(tinycolor({h, s, v}));
        v = (v + modification) % 1;
      }
      return ret;
    }
    tinycolor.mix = function(color1, color2, amount) {
      amount = amount === 0 ? 0 : amount || 50;
      var rgb1 = tinycolor(color1).toRgb();
      var rgb2 = tinycolor(color2).toRgb();
      var p = amount / 100;
      var rgba = {
        r: (rgb2.r - rgb1.r) * p + rgb1.r,
        g: (rgb2.g - rgb1.g) * p + rgb1.g,
        b: (rgb2.b - rgb1.b) * p + rgb1.b,
        a: (rgb2.a - rgb1.a) * p + rgb1.a
      };
      return tinycolor(rgba);
    };
    tinycolor.readability = function(color1, color2) {
      var c1 = tinycolor(color1);
      var c2 = tinycolor(color2);
      return (Math2.max(c1.getLuminance(), c2.getLuminance()) + 0.05) / (Math2.min(c1.getLuminance(), c2.getLuminance()) + 0.05);
    };
    tinycolor.isReadable = function(color1, color2, wcag2) {
      var readability = tinycolor.readability(color1, color2);
      var wcag2Parms, out;
      out = false;
      wcag2Parms = validateWCAG2Parms(wcag2);
      switch (wcag2Parms.level + wcag2Parms.size) {
        case "AAsmall":
        case "AAAlarge":
          out = readability >= 4.5;
          break;
        case "AAlarge":
          out = readability >= 3;
          break;
        case "AAAsmall":
          out = readability >= 7;
          break;
      }
      return out;
    };
    tinycolor.mostReadable = function(baseColor, colorList, args) {
      var bestColor = null;
      var bestScore = 0;
      var readability;
      var includeFallbackColors, level, size;
      args = args || {};
      includeFallbackColors = args.includeFallbackColors;
      level = args.level;
      size = args.size;
      for (var i = 0; i < colorList.length; i++) {
        readability = tinycolor.readability(baseColor, colorList[i]);
        if (readability > bestScore) {
          bestScore = readability;
          bestColor = tinycolor(colorList[i]);
        }
      }
      if (tinycolor.isReadable(baseColor, bestColor, {level, size}) || !includeFallbackColors) {
        return bestColor;
      } else {
        args.includeFallbackColors = false;
        return tinycolor.mostReadable(baseColor, ["#fff", "#000"], args);
      }
    };
    var names = tinycolor.names = {
      aliceblue: "f0f8ff",
      antiquewhite: "faebd7",
      aqua: "0ff",
      aquamarine: "7fffd4",
      azure: "f0ffff",
      beige: "f5f5dc",
      bisque: "ffe4c4",
      black: "000",
      blanchedalmond: "ffebcd",
      blue: "00f",
      blueviolet: "8a2be2",
      brown: "a52a2a",
      burlywood: "deb887",
      burntsienna: "ea7e5d",
      cadetblue: "5f9ea0",
      chartreuse: "7fff00",
      chocolate: "d2691e",
      coral: "ff7f50",
      cornflowerblue: "6495ed",
      cornsilk: "fff8dc",
      crimson: "dc143c",
      cyan: "0ff",
      darkblue: "00008b",
      darkcyan: "008b8b",
      darkgoldenrod: "b8860b",
      darkgray: "a9a9a9",
      darkgreen: "006400",
      darkgrey: "a9a9a9",
      darkkhaki: "bdb76b",
      darkmagenta: "8b008b",
      darkolivegreen: "556b2f",
      darkorange: "ff8c00",
      darkorchid: "9932cc",
      darkred: "8b0000",
      darksalmon: "e9967a",
      darkseagreen: "8fbc8f",
      darkslateblue: "483d8b",
      darkslategray: "2f4f4f",
      darkslategrey: "2f4f4f",
      darkturquoise: "00ced1",
      darkviolet: "9400d3",
      deeppink: "ff1493",
      deepskyblue: "00bfff",
      dimgray: "696969",
      dimgrey: "696969",
      dodgerblue: "1e90ff",
      firebrick: "b22222",
      floralwhite: "fffaf0",
      forestgreen: "228b22",
      fuchsia: "f0f",
      gainsboro: "dcdcdc",
      ghostwhite: "f8f8ff",
      gold: "ffd700",
      goldenrod: "daa520",
      gray: "808080",
      green: "008000",
      greenyellow: "adff2f",
      grey: "808080",
      honeydew: "f0fff0",
      hotpink: "ff69b4",
      indianred: "cd5c5c",
      indigo: "4b0082",
      ivory: "fffff0",
      khaki: "f0e68c",
      lavender: "e6e6fa",
      lavenderblush: "fff0f5",
      lawngreen: "7cfc00",
      lemonchiffon: "fffacd",
      lightblue: "add8e6",
      lightcoral: "f08080",
      lightcyan: "e0ffff",
      lightgoldenrodyellow: "fafad2",
      lightgray: "d3d3d3",
      lightgreen: "90ee90",
      lightgrey: "d3d3d3",
      lightpink: "ffb6c1",
      lightsalmon: "ffa07a",
      lightseagreen: "20b2aa",
      lightskyblue: "87cefa",
      lightslategray: "789",
      lightslategrey: "789",
      lightsteelblue: "b0c4de",
      lightyellow: "ffffe0",
      lime: "0f0",
      limegreen: "32cd32",
      linen: "faf0e6",
      magenta: "f0f",
      maroon: "800000",
      mediumaquamarine: "66cdaa",
      mediumblue: "0000cd",
      mediumorchid: "ba55d3",
      mediumpurple: "9370db",
      mediumseagreen: "3cb371",
      mediumslateblue: "7b68ee",
      mediumspringgreen: "00fa9a",
      mediumturquoise: "48d1cc",
      mediumvioletred: "c71585",
      midnightblue: "191970",
      mintcream: "f5fffa",
      mistyrose: "ffe4e1",
      moccasin: "ffe4b5",
      navajowhite: "ffdead",
      navy: "000080",
      oldlace: "fdf5e6",
      olive: "808000",
      olivedrab: "6b8e23",
      orange: "ffa500",
      orangered: "ff4500",
      orchid: "da70d6",
      palegoldenrod: "eee8aa",
      palegreen: "98fb98",
      paleturquoise: "afeeee",
      palevioletred: "db7093",
      papayawhip: "ffefd5",
      peachpuff: "ffdab9",
      peru: "cd853f",
      pink: "ffc0cb",
      plum: "dda0dd",
      powderblue: "b0e0e6",
      purple: "800080",
      rebeccapurple: "663399",
      red: "f00",
      rosybrown: "bc8f8f",
      royalblue: "4169e1",
      saddlebrown: "8b4513",
      salmon: "fa8072",
      sandybrown: "f4a460",
      seagreen: "2e8b57",
      seashell: "fff5ee",
      sienna: "a0522d",
      silver: "c0c0c0",
      skyblue: "87ceeb",
      slateblue: "6a5acd",
      slategray: "708090",
      slategrey: "708090",
      snow: "fffafa",
      springgreen: "00ff7f",
      steelblue: "4682b4",
      tan: "d2b48c",
      teal: "008080",
      thistle: "d8bfd8",
      tomato: "ff6347",
      turquoise: "40e0d0",
      violet: "ee82ee",
      wheat: "f5deb3",
      white: "fff",
      whitesmoke: "f5f5f5",
      yellow: "ff0",
      yellowgreen: "9acd32"
    };
    var hexNames = tinycolor.hexNames = flip(names);
    function flip(o) {
      var flipped = {};
      for (var i in o) {
        if (o.hasOwnProperty(i)) {
          flipped[o[i]] = i;
        }
      }
      return flipped;
    }
    function boundAlpha(a) {
      a = parseFloat(a);
      if (isNaN(a) || a < 0 || a > 1) {
        a = 1;
      }
      return a;
    }
    function bound01(n, max) {
      if (isOnePointZero(n)) {
        n = "100%";
      }
      var processPercent = isPercentage(n);
      n = mathMin(max, mathMax(0, parseFloat(n)));
      if (processPercent) {
        n = parseInt(n * max, 10) / 100;
      }
      if (Math2.abs(n - max) < 1e-6) {
        return 1;
      }
      return n % max / parseFloat(max);
    }
    function clamp01(val) {
      return mathMin(1, mathMax(0, val));
    }
    function parseIntFromHex(val) {
      return parseInt(val, 16);
    }
    function isOnePointZero(n) {
      return typeof n == "string" && n.indexOf(".") != -1 && parseFloat(n) === 1;
    }
    function isPercentage(n) {
      return typeof n === "string" && n.indexOf("%") != -1;
    }
    function pad2(c) {
      return c.length == 1 ? "0" + c : "" + c;
    }
    function convertToPercentage(n) {
      if (n <= 1) {
        n = n * 100 + "%";
      }
      return n;
    }
    function convertDecimalToHex(d) {
      return Math2.round(parseFloat(d) * 255).toString(16);
    }
    function convertHexToDecimal(h) {
      return parseIntFromHex(h) / 255;
    }
    var matchers = function() {
      var CSS_INTEGER = "[-\\+]?\\d+%?";
      var CSS_NUMBER = "[-\\+]?\\d*\\.\\d+%?";
      var CSS_UNIT = "(?:" + CSS_NUMBER + ")|(?:" + CSS_INTEGER + ")";
      var PERMISSIVE_MATCH3 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";
      var PERMISSIVE_MATCH4 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";
      return {
        CSS_UNIT: new RegExp(CSS_UNIT),
        rgb: new RegExp("rgb" + PERMISSIVE_MATCH3),
        rgba: new RegExp("rgba" + PERMISSIVE_MATCH4),
        hsl: new RegExp("hsl" + PERMISSIVE_MATCH3),
        hsla: new RegExp("hsla" + PERMISSIVE_MATCH4),
        hsv: new RegExp("hsv" + PERMISSIVE_MATCH3),
        hsva: new RegExp("hsva" + PERMISSIVE_MATCH4),
        hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
        hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
      };
    }();
    function isValidCSSUnit(color) {
      return !!matchers.CSS_UNIT.exec(color);
    }
    function stringInputToObject(color) {
      color = color.replace(trimLeft, "").replace(trimRight, "").toLowerCase();
      var named = false;
      if (names[color]) {
        color = names[color];
        named = true;
      } else if (color == "transparent") {
        return {r: 0, g: 0, b: 0, a: 0, format: "name"};
      }
      var match;
      if (match = matchers.rgb.exec(color)) {
        return {r: match[1], g: match[2], b: match[3]};
      }
      if (match = matchers.rgba.exec(color)) {
        return {r: match[1], g: match[2], b: match[3], a: match[4]};
      }
      if (match = matchers.hsl.exec(color)) {
        return {h: match[1], s: match[2], l: match[3]};
      }
      if (match = matchers.hsla.exec(color)) {
        return {h: match[1], s: match[2], l: match[3], a: match[4]};
      }
      if (match = matchers.hsv.exec(color)) {
        return {h: match[1], s: match[2], v: match[3]};
      }
      if (match = matchers.hsva.exec(color)) {
        return {h: match[1], s: match[2], v: match[3], a: match[4]};
      }
      if (match = matchers.hex8.exec(color)) {
        return {
          r: parseIntFromHex(match[1]),
          g: parseIntFromHex(match[2]),
          b: parseIntFromHex(match[3]),
          a: convertHexToDecimal(match[4]),
          format: named ? "name" : "hex8"
        };
      }
      if (match = matchers.hex6.exec(color)) {
        return {
          r: parseIntFromHex(match[1]),
          g: parseIntFromHex(match[2]),
          b: parseIntFromHex(match[3]),
          format: named ? "name" : "hex"
        };
      }
      if (match = matchers.hex4.exec(color)) {
        return {
          r: parseIntFromHex(match[1] + "" + match[1]),
          g: parseIntFromHex(match[2] + "" + match[2]),
          b: parseIntFromHex(match[3] + "" + match[3]),
          a: convertHexToDecimal(match[4] + "" + match[4]),
          format: named ? "name" : "hex8"
        };
      }
      if (match = matchers.hex3.exec(color)) {
        return {
          r: parseIntFromHex(match[1] + "" + match[1]),
          g: parseIntFromHex(match[2] + "" + match[2]),
          b: parseIntFromHex(match[3] + "" + match[3]),
          format: named ? "name" : "hex"
        };
      }
      return false;
    }
    function validateWCAG2Parms(parms) {
      var level, size;
      parms = parms || {level: "AA", size: "small"};
      level = (parms.level || "AA").toUpperCase();
      size = (parms.size || "small").toLowerCase();
      if (level !== "AA" && level !== "AAA") {
        level = "AA";
      }
      if (size !== "small" && size !== "large") {
        size = "small";
      }
      return {level, size};
    }
    if (typeof module2 !== "undefined" && module2.exports) {
      module2.exports = tinycolor;
    } else if (typeof define === "function" && define.amd) {
      define(function() {
        return tinycolor;
      });
    } else {
      window.tinycolor = tinycolor;
    }
  })(Math);
});

// node_modules/tinygradient/tinygradient.js
var require_tinygradient = __commonJS((exports2, module2) => {
  /*!
   * TinyGradient 0.4.3
   * Copyright 2014-2018 Damien "Mistic" Sorel (http://www.strangeplanet.fr)
   * Licensed under MIT (http://opensource.org/licenses/MIT)
   */
  (function(root, factory) {
    if (typeof module2 !== "undefined" && module2.exports) {
      module2.exports = factory(require_tinycolor());
    } else if (typeof define === "function" && define.amd) {
      define(["tinycolor2"], factory);
    } else {
      root.tinygradient = factory(root.tinycolor);
    }
  })(exports2, function(tinycolor) {
    "use strict";
    var RGBA_MAX = {r: 256, g: 256, b: 256, a: 1};
    var HSVA_MAX = {h: 360, s: 1, v: 1, a: 1};
    function stepize(start, end, steps) {
      var step = {};
      for (var k in start) {
        if (start.hasOwnProperty(k)) {
          step[k] = steps === 0 ? 0 : (end[k] - start[k]) / steps;
        }
      }
      return step;
    }
    function interpolate(step, start, i, max) {
      var color = {};
      for (var k in start) {
        if (start.hasOwnProperty(k)) {
          color[k] = step[k] * i + start[k];
          color[k] = color[k] < 0 ? color[k] + max[k] : max[k] !== 1 ? color[k] % max[k] : color[k];
        }
      }
      return color;
    }
    function interpolateRgb(stop1, stop2, steps) {
      var start = stop1.color.toRgb(), end = stop2.color.toRgb(), gradient = [stop1.color], step = stepize(start, end, steps), color;
      for (var i = 1; i < steps; i++) {
        color = interpolate(step, start, i, RGBA_MAX);
        gradient.push(tinycolor(color));
      }
      return gradient;
    }
    function interpolateHsv(stop1, stop2, steps, trigonometric) {
      var start = stop1.color.toHsv(), end = stop2.color.toHsv(), gradient = [stop1.color], step = stepize(start, end, steps), diff, color;
      if (start.h <= end.h && !trigonometric || start.h >= end.h && trigonometric) {
        diff = end.h - start.h;
      } else if (trigonometric) {
        diff = 360 - end.h + start.h;
      } else {
        diff = 360 - start.h + end.h;
      }
      step.h = Math.pow(-1, trigonometric ? 1 : 0) * Math.abs(diff) / steps;
      for (var i = 1; i < steps; i++) {
        color = interpolate(step, start, i, HSVA_MAX);
        gradient.push(tinycolor(color));
      }
      return gradient;
    }
    function computeSubsteps(stops, steps) {
      var l = stops.length;
      steps = parseInt(steps);
      if (isNaN(steps) || steps < 2) {
        throw new Error("Invalid number of steps (< 2)");
      }
      if (steps < l) {
        throw new Error("Number of steps cannot be inferior to number of stops");
      }
      var substeps = [];
      for (var i = 1; i < l; i++) {
        var step = (steps - 1) * (stops[i].pos - stops[i - 1].pos);
        substeps.push(Math.max(1, Math.round(step)));
      }
      var totalSubsteps = 1;
      for (var n = l - 1; n--; )
        totalSubsteps += substeps[n];
      while (totalSubsteps !== steps) {
        if (totalSubsteps < steps) {
          var min = Math.min.apply(null, substeps);
          substeps[substeps.indexOf(min)]++;
          totalSubsteps++;
        } else {
          var max = Math.max.apply(null, substeps);
          substeps[substeps.indexOf(max)]--;
          totalSubsteps--;
        }
      }
      return substeps;
    }
    function computeAt(stops, pos, method, max) {
      if (pos < 0 || pos > 1) {
        throw new Error("Position must be between 0 and 1");
      }
      var start, end;
      for (var i = 0, l = stops.length; i < l - 1; i++) {
        if (pos >= stops[i].pos && pos < stops[i + 1].pos) {
          start = stops[i];
          end = stops[i + 1];
          break;
        }
      }
      if (!start) {
        start = end = stops[stops.length - 1];
      }
      var step = stepize(start.color[method](), end.color[method](), (end.pos - start.pos) * 100);
      var color = interpolate(step, start.color[method](), Math.round((pos - start.pos) * 100), max);
      return tinycolor(color);
    }
    var TinyGradient = function(stops) {
      if (arguments.length === 1) {
        if (!(arguments[0] instanceof Array)) {
          throw new Error('"stops" is not an array');
        }
        stops = arguments[0];
      } else {
        stops = Array.prototype.slice.call(arguments);
      }
      if (!(this instanceof TinyGradient)) {
        return new TinyGradient(stops);
      }
      if (stops.length < 2) {
        throw new Error("Invalid number of stops (< 2)");
      }
      var havingPositions = stops[0].pos !== void 0, l = stops.length, p = -1;
      this.stops = stops.map(function(stop, i) {
        var hasPosition = stop.pos !== void 0;
        if (havingPositions ^ hasPosition) {
          throw new Error("Cannot mix positionned and not posionned color stops");
        }
        if (hasPosition) {
          stop = {
            color: tinycolor(stop.color),
            pos: stop.pos
          };
          if (stop.pos < 0 || stop.pos > 1) {
            throw new Error("Color stops positions must be between 0 and 1");
          } else if (stop.pos <= p) {
            throw new Error("Color stops positions are not ordered");
          }
          p = stop.pos;
        } else {
          stop = {
            color: tinycolor(stop),
            pos: i / (l - 1)
          };
        }
        return stop;
      });
      if (this.stops[0].pos !== 0) {
        this.stops.unshift({
          color: this.stops[0].color,
          pos: 0
        });
      }
      if (this.stops[this.stops.length - 1].pos !== 1) {
        this.stops.push({
          color: this.stops[this.stops.length - 1].color,
          pos: 1
        });
      }
    };
    TinyGradient.prototype.reverse = function() {
      var stops = [];
      this.stops.forEach(function(stop) {
        stops.push({
          color: stop.color,
          pos: 1 - stop.pos
        });
      });
      return new TinyGradient(stops.reverse());
    };
    TinyGradient.prototype.rgb = function(steps) {
      var substeps = computeSubsteps(this.stops, steps), gradient = [];
      for (var i = 0, l = this.stops.length; i < l - 1; i++) {
        gradient = gradient.concat(interpolateRgb(this.stops[i], this.stops[i + 1], substeps[i]));
      }
      gradient.push(this.stops[l - 1].color);
      return gradient;
    };
    TinyGradient.prototype.hsv = function(steps, mode) {
      var substeps = computeSubsteps(this.stops, steps), trigonometric = mode === true, parametrized = typeof mode === "string", gradient = [], start, end, trig;
      for (var i = 0, l = this.stops.length; i < l - 1; i++) {
        start = this.stops[i].color.toHsv();
        end = this.stops[i + 1].color.toHsv();
        if (parametrized) {
          trig = start.h < end.h && end.h - start.h < 180 || start.h > end.h && start.h - end.h > 180;
        }
        if (start.s === 0 || end.s === 0) {
          gradient = gradient.concat(interpolateRgb(this.stops[i], this.stops[i + 1], substeps[i]));
        } else {
          gradient = gradient.concat(interpolateHsv(this.stops[i], this.stops[i + 1], substeps[i], mode === "long" && trig || mode === "short" && !trig || !parametrized && trigonometric));
        }
      }
      gradient.push(this.stops[l - 1].color);
      return gradient;
    };
    TinyGradient.prototype.css = function(mode, direction) {
      mode = mode || "linear";
      direction = direction || (mode === "linear" ? "to right" : "ellipse at center");
      var css = mode + "-gradient(" + direction;
      this.stops.forEach(function(stop) {
        css += ", " + stop.color.toRgbString() + " " + stop.pos * 100 + "%";
      });
      css += ")";
      return css;
    };
    TinyGradient.prototype.rgbAt = function(pos) {
      return computeAt(this.stops, pos, "toRgb", RGBA_MAX);
    };
    TinyGradient.prototype.hsvAt = function(pos) {
      return computeAt(this.stops, pos, "toHsv", HSVA_MAX);
    };
    var STATIC_FNS = {
      rgb: 1,
      hsv: 2,
      css: 2,
      rgbAt: 1,
      hsvAt: 1
    };
    Object.keys(STATIC_FNS).forEach(function(fn) {
      TinyGradient[fn] = function() {
        var colors = Array.prototype.slice.call(arguments);
        var args = colors.splice(-STATIC_FNS[fn]);
        var gradient = new TinyGradient(colors);
        return gradient[fn].apply(gradient, args);
      };
    });
    return TinyGradient;
  });
});

// node_modules/gradient-string/index.js
var require_gradient_string = __commonJS((exports2, module2) => {
  "use strict";
  var chalk = require_chalk2();
  var tinygradient = require_tinygradient();
  var forbiddenChars = /\s/g;
  function InitGradient(...args) {
    const grad = tinygradient.apply(this, args);
    const ret = (str, opts) => applyGradient(str ? str.toString() : "", grad, opts);
    ret.multiline = (str, opts) => multilineGradient(str ? str.toString() : "", grad, opts);
    return ret;
  }
  var getColors = (gradient, options, count) => options.interpolation.toLowerCase() === "hsv" ? gradient.hsv(count, options.hsvSpin.toLowerCase()) : gradient.rgb(count);
  function applyGradient(str, gradient, opts) {
    const options = validateOptions(opts);
    const colorsCount = Math.max(str.replace(forbiddenChars, "").length, gradient.stops.length);
    const colors = getColors(gradient, options, colorsCount);
    let result = "";
    for (const s of str) {
      result += s.match(forbiddenChars) ? s : chalk.hex(colors.shift().toHex())(s);
    }
    return result;
  }
  function multilineGradient(str, gradient, opts) {
    const options = validateOptions(opts);
    const lines = str.split("\n");
    const maxLength = Math.max.apply(null, lines.map((l) => l.length).concat([gradient.stops.length]));
    const colors = getColors(gradient, options, maxLength);
    const results = [];
    for (const line of lines) {
      const lineColors = colors.slice(0);
      let lineResult = "";
      for (const l of line) {
        lineResult += chalk.hex(lineColors.shift().toHex())(l);
      }
      results.push(lineResult);
    }
    return results.join("\n");
  }
  function validateOptions(opts) {
    const options = Object.assign({interpolation: "rgb", hsvSpin: "short"}, opts);
    if (opts !== void 0 && typeof opts !== "object") {
      throw new TypeError(`Expected \`options\` to be an \`object\`, got \`${typeof opts}\``);
    }
    if (typeof options.interpolation !== "string") {
      throw new TypeError(`Expected \`options.interpolation\` to be a \`string\`, got \`${typeof options.interpolation}\``);
    }
    if (options.interpolation.toLowerCase() === "hsv" && typeof options.hsvSpin !== "string") {
      throw new TypeError(`Expected \`options.hsvSpin\` to be a \`string\`, got \`${typeof options.hsvSpin}\``);
    }
    return options;
  }
  var aliases = {
    atlas: {colors: ["#feac5e", "#c779d0", "#4bc0c8"], options: {}},
    cristal: {colors: ["#bdfff3", "#4ac29a"], options: {}},
    teen: {colors: ["#77a1d3", "#79cbca", "#e684ae"], options: {}},
    mind: {colors: ["#473b7b", "#3584a7", "#30d2be"], options: {}},
    morning: {colors: ["#ff5f6d", "#ffc371"], options: {interpolation: "hsv"}},
    vice: {colors: ["#5ee7df", "#b490ca"], options: {interpolation: "hsv"}},
    passion: {colors: ["#f43b47", "#453a94"], options: {}},
    fruit: {colors: ["#ff4e50", "#f9d423"], options: {}},
    instagram: {colors: ["#833ab4", "#fd1d1d", "#fcb045"], options: {}},
    retro: {colors: ["#3f51b1", "#5a55ae", "#7b5fac", "#8f6aae", "#a86aa4", "#cc6b8e", "#f18271", "#f3a469", "#f7c978"], options: {}},
    summer: {colors: ["#fdbb2d", "#22c1c3"], options: {}},
    rainbow: {colors: ["#ff0000", "#ff0100"], options: {interpolation: "hsv", hsvSpin: "long"}},
    pastel: {colors: ["#74ebd5", "#74ecd5"], options: {interpolation: "hsv", hsvSpin: "long"}}
  };
  module2.exports = InitGradient;
  for (const a in aliases) {
    module2.exports[a] = (str) => new InitGradient(aliases[a].colors)(str, aliases[a].options);
    module2.exports[a].multiline = (str) => new InitGradient(aliases[a].colors).multiline(str, aliases[a].options);
  }
});

// node_modules/chalk-animation/index.js
var require_chalk_animation = __commonJS((exports2, module2) => {
  "use strict";
  var chalk = require_chalk();
  var gradient = require_gradient_string();
  var log = console.log;
  var currentAnimation = null;
  var consoleFunctions = {
    log: log.bind(console),
    info: console.info.bind(console),
    warn: console.warn.bind(console),
    error: console.error.bind(console)
  };
  for (const k in consoleFunctions) {
    console[k] = function() {
      stopLastAnimation();
      consoleFunctions[k].apply(console, arguments);
    };
  }
  var glitchChars = "x*0987654321[]0-~@#(____!!!!\\|?????....0000																";
  var longHsv = {interpolation: "hsv", hsvSpin: "long"};
  var effects = {
    rainbow(str, frame) {
      const hue = 5 * frame;
      const leftColor = {h: hue % 360, s: 1, v: 1};
      const rightColor = {h: (hue + 1) % 360, s: 1, v: 1};
      return gradient(leftColor, rightColor)(str, longHsv);
    },
    pulse(str, frame) {
      frame = frame % 120 + 1;
      const transition = 6;
      const duration = 10;
      const on = "#ff1010";
      const off = "#e6e6e6";
      if (frame >= 2 * transition + duration) {
        return chalk.hex(off)(str);
      }
      if (frame >= transition && frame <= transition + duration) {
        return chalk.hex(on)(str);
      }
      frame = frame >= transition + duration ? 2 * transition + duration - frame : frame;
      const g = frame <= transition / 2 ? gradient([
        {color: off, pos: 0.5 - frame / transition},
        {color: on, pos: 0.5},
        {color: off, pos: 0.5 + frame / transition}
      ]) : gradient([
        {color: off, pos: 0},
        {color: on, pos: 1 - frame / transition},
        {color: on, pos: frame / transition},
        {color: off, pos: 1}
      ]);
      return g(str);
    },
    glitch(str, frame) {
      if (frame % 2 + frame % 3 + frame % 11 + frame % 29 + frame % 37 > 52) {
        return str.replace(/[^\r\n]/g, " ");
      }
      const chunkSize = Math.max(3, Math.round(str.length * 0.02));
      const chunks = [];
      for (let i = 0, length = str.length; i < length; i++) {
        const skip = Math.round(Math.max(0, (Math.random() - 0.8) * chunkSize));
        chunks.push(str.substring(i, i + skip).replace(/[^\r\n]/g, " "));
        i += skip;
        if (str[i]) {
          if (str[i] !== "\n" && str[i] !== "\r" && Math.random() > 0.995) {
            chunks.push(glitchChars[Math.floor(Math.random() * glitchChars.length)]);
          } else if (Math.random() > 5e-3) {
            chunks.push(str[i]);
          }
        }
      }
      let result = chunks.join("");
      if (Math.random() > 0.99) {
        result = result.toUpperCase();
      } else if (Math.random() < 0.01) {
        result = result.toLowerCase();
      }
      return result;
    },
    radar(str, frame) {
      const depth = Math.floor(Math.min(str.length, str.length * 0.2));
      const step = Math.floor(255 / depth);
      const globalPos = frame % (str.length + depth);
      const chars = [];
      for (let i = 0, length = str.length; i < length; i++) {
        const pos = -(i - globalPos);
        if (pos > 0 && pos <= depth - 1) {
          const shade = (depth - pos) * step;
          chars.push(chalk.rgb(shade, shade, shade)(str[i]));
        } else {
          chars.push(" ");
        }
      }
      return chars.join("");
    },
    neon(str, frame) {
      const color = frame % 2 === 0 ? chalk.dim.rgb(88, 80, 85) : chalk.bold.rgb(213, 70, 242);
      return color(str);
    },
    karaoke(str, frame) {
      const chars = frame % (str.length + 20) - 10;
      if (chars < 0) {
        return chalk.white(str);
      }
      return chalk.rgb(255, 187, 0).bold(str.substr(0, chars)) + chalk.white(str.substr(chars));
    }
  };
  function animateString(str, effect, delay, speed) {
    stopLastAnimation();
    speed = speed === void 0 ? 1 : parseFloat(speed);
    if (!speed || speed <= 0) {
      throw new Error(`Expected \`speed\` to be an number greater than 0`);
    }
    currentAnimation = {
      text: str.split(/\r\n|\r|\n/),
      lines: str.split(/\r\n|\r|\n/).length,
      stopped: false,
      init: false,
      f: 0,
      render() {
        const self = this;
        if (!this.init) {
          log("\n".repeat(this.lines - 1));
          this.init = true;
        }
        log(this.frame());
        setTimeout(() => {
          if (!self.stopped) {
            self.render();
          }
        }, delay / speed);
      },
      frame() {
        this.f++;
        return "[" + this.lines + "F[G[2K" + this.text.map((str2) => effect(str2, this.f)).join("\n");
      },
      replace(str2) {
        this.text = str2.split(/\r\n|\r|\n/);
        this.lines = str2.split(/\r\n|\r|\n/).length;
        return this;
      },
      stop() {
        this.stopped = true;
        return this;
      },
      start() {
        this.stopped = false;
        this.render();
        return this;
      }
    };
    setTimeout(() => {
      if (!currentAnimation.stopped) {
        currentAnimation.start();
      }
    }, delay / speed);
    return currentAnimation;
  }
  function stopLastAnimation() {
    if (currentAnimation) {
      currentAnimation.stop();
    }
  }
  module2.exports = {
    rainbow: (str, speed) => animateString(str, effects.rainbow, 15, speed),
    pulse: (str, speed) => animateString(str, effects.pulse, 16, speed),
    glitch: (str, speed) => animateString(str, effects.glitch, 55, speed),
    radar: (str, speed) => animateString(str, effects.radar, 50, speed),
    neon: (str, speed) => animateString(str, effects.neon, 500, speed),
    karaoke: (str, speed) => animateString(str, effects.karaoke, 50, speed)
  };
});

// node_modules/color-name/index.js
var require_color_name3 = __commonJS((exports2, module2) => {
  "use strict";
  module2.exports = {
    aliceblue: [240, 248, 255],
    antiquewhite: [250, 235, 215],
    aqua: [0, 255, 255],
    aquamarine: [127, 255, 212],
    azure: [240, 255, 255],
    beige: [245, 245, 220],
    bisque: [255, 228, 196],
    black: [0, 0, 0],
    blanchedalmond: [255, 235, 205],
    blue: [0, 0, 255],
    blueviolet: [138, 43, 226],
    brown: [165, 42, 42],
    burlywood: [222, 184, 135],
    cadetblue: [95, 158, 160],
    chartreuse: [127, 255, 0],
    chocolate: [210, 105, 30],
    coral: [255, 127, 80],
    cornflowerblue: [100, 149, 237],
    cornsilk: [255, 248, 220],
    crimson: [220, 20, 60],
    cyan: [0, 255, 255],
    darkblue: [0, 0, 139],
    darkcyan: [0, 139, 139],
    darkgoldenrod: [184, 134, 11],
    darkgray: [169, 169, 169],
    darkgreen: [0, 100, 0],
    darkgrey: [169, 169, 169],
    darkkhaki: [189, 183, 107],
    darkmagenta: [139, 0, 139],
    darkolivegreen: [85, 107, 47],
    darkorange: [255, 140, 0],
    darkorchid: [153, 50, 204],
    darkred: [139, 0, 0],
    darksalmon: [233, 150, 122],
    darkseagreen: [143, 188, 143],
    darkslateblue: [72, 61, 139],
    darkslategray: [47, 79, 79],
    darkslategrey: [47, 79, 79],
    darkturquoise: [0, 206, 209],
    darkviolet: [148, 0, 211],
    deeppink: [255, 20, 147],
    deepskyblue: [0, 191, 255],
    dimgray: [105, 105, 105],
    dimgrey: [105, 105, 105],
    dodgerblue: [30, 144, 255],
    firebrick: [178, 34, 34],
    floralwhite: [255, 250, 240],
    forestgreen: [34, 139, 34],
    fuchsia: [255, 0, 255],
    gainsboro: [220, 220, 220],
    ghostwhite: [248, 248, 255],
    gold: [255, 215, 0],
    goldenrod: [218, 165, 32],
    gray: [128, 128, 128],
    green: [0, 128, 0],
    greenyellow: [173, 255, 47],
    grey: [128, 128, 128],
    honeydew: [240, 255, 240],
    hotpink: [255, 105, 180],
    indianred: [205, 92, 92],
    indigo: [75, 0, 130],
    ivory: [255, 255, 240],
    khaki: [240, 230, 140],
    lavender: [230, 230, 250],
    lavenderblush: [255, 240, 245],
    lawngreen: [124, 252, 0],
    lemonchiffon: [255, 250, 205],
    lightblue: [173, 216, 230],
    lightcoral: [240, 128, 128],
    lightcyan: [224, 255, 255],
    lightgoldenrodyellow: [250, 250, 210],
    lightgray: [211, 211, 211],
    lightgreen: [144, 238, 144],
    lightgrey: [211, 211, 211],
    lightpink: [255, 182, 193],
    lightsalmon: [255, 160, 122],
    lightseagreen: [32, 178, 170],
    lightskyblue: [135, 206, 250],
    lightslategray: [119, 136, 153],
    lightslategrey: [119, 136, 153],
    lightsteelblue: [176, 196, 222],
    lightyellow: [255, 255, 224],
    lime: [0, 255, 0],
    limegreen: [50, 205, 50],
    linen: [250, 240, 230],
    magenta: [255, 0, 255],
    maroon: [128, 0, 0],
    mediumaquamarine: [102, 205, 170],
    mediumblue: [0, 0, 205],
    mediumorchid: [186, 85, 211],
    mediumpurple: [147, 112, 219],
    mediumseagreen: [60, 179, 113],
    mediumslateblue: [123, 104, 238],
    mediumspringgreen: [0, 250, 154],
    mediumturquoise: [72, 209, 204],
    mediumvioletred: [199, 21, 133],
    midnightblue: [25, 25, 112],
    mintcream: [245, 255, 250],
    mistyrose: [255, 228, 225],
    moccasin: [255, 228, 181],
    navajowhite: [255, 222, 173],
    navy: [0, 0, 128],
    oldlace: [253, 245, 230],
    olive: [128, 128, 0],
    olivedrab: [107, 142, 35],
    orange: [255, 165, 0],
    orangered: [255, 69, 0],
    orchid: [218, 112, 214],
    palegoldenrod: [238, 232, 170],
    palegreen: [152, 251, 152],
    paleturquoise: [175, 238, 238],
    palevioletred: [219, 112, 147],
    papayawhip: [255, 239, 213],
    peachpuff: [255, 218, 185],
    peru: [205, 133, 63],
    pink: [255, 192, 203],
    plum: [221, 160, 221],
    powderblue: [176, 224, 230],
    purple: [128, 0, 128],
    rebeccapurple: [102, 51, 153],
    red: [255, 0, 0],
    rosybrown: [188, 143, 143],
    royalblue: [65, 105, 225],
    saddlebrown: [139, 69, 19],
    salmon: [250, 128, 114],
    sandybrown: [244, 164, 96],
    seagreen: [46, 139, 87],
    seashell: [255, 245, 238],
    sienna: [160, 82, 45],
    silver: [192, 192, 192],
    skyblue: [135, 206, 235],
    slateblue: [106, 90, 205],
    slategray: [112, 128, 144],
    slategrey: [112, 128, 144],
    snow: [255, 250, 250],
    springgreen: [0, 255, 127],
    steelblue: [70, 130, 180],
    tan: [210, 180, 140],
    teal: [0, 128, 128],
    thistle: [216, 191, 216],
    tomato: [255, 99, 71],
    turquoise: [64, 224, 208],
    violet: [238, 130, 238],
    wheat: [245, 222, 179],
    white: [255, 255, 255],
    whitesmoke: [245, 245, 245],
    yellow: [255, 255, 0],
    yellowgreen: [154, 205, 50]
  };
});

// node_modules/color-convert/conversions.js
var require_conversions3 = __commonJS((exports2, module2) => {
  var cssKeywords = require_color_name3();
  var reverseKeywords = {};
  for (const key of Object.keys(cssKeywords)) {
    reverseKeywords[cssKeywords[key]] = key;
  }
  var convert = {
    rgb: {channels: 3, labels: "rgb"},
    hsl: {channels: 3, labels: "hsl"},
    hsv: {channels: 3, labels: "hsv"},
    hwb: {channels: 3, labels: "hwb"},
    cmyk: {channels: 4, labels: "cmyk"},
    xyz: {channels: 3, labels: "xyz"},
    lab: {channels: 3, labels: "lab"},
    lch: {channels: 3, labels: "lch"},
    hex: {channels: 1, labels: ["hex"]},
    keyword: {channels: 1, labels: ["keyword"]},
    ansi16: {channels: 1, labels: ["ansi16"]},
    ansi256: {channels: 1, labels: ["ansi256"]},
    hcg: {channels: 3, labels: ["h", "c", "g"]},
    apple: {channels: 3, labels: ["r16", "g16", "b16"]},
    gray: {channels: 1, labels: ["gray"]}
  };
  module2.exports = convert;
  for (const model of Object.keys(convert)) {
    if (!("channels" in convert[model])) {
      throw new Error("missing channels property: " + model);
    }
    if (!("labels" in convert[model])) {
      throw new Error("missing channel labels property: " + model);
    }
    if (convert[model].labels.length !== convert[model].channels) {
      throw new Error("channel and label counts mismatch: " + model);
    }
    const {channels, labels} = convert[model];
    delete convert[model].channels;
    delete convert[model].labels;
    Object.defineProperty(convert[model], "channels", {value: channels});
    Object.defineProperty(convert[model], "labels", {value: labels});
  }
  convert.rgb.hsl = function(rgb) {
    const r = rgb[0] / 255;
    const g = rgb[1] / 255;
    const b = rgb[2] / 255;
    const min = Math.min(r, g, b);
    const max = Math.max(r, g, b);
    const delta = max - min;
    let h;
    let s;
    if (max === min) {
      h = 0;
    } else if (r === max) {
      h = (g - b) / delta;
    } else if (g === max) {
      h = 2 + (b - r) / delta;
    } else if (b === max) {
      h = 4 + (r - g) / delta;
    }
    h = Math.min(h * 60, 360);
    if (h < 0) {
      h += 360;
    }
    const l = (min + max) / 2;
    if (max === min) {
      s = 0;
    } else if (l <= 0.5) {
      s = delta / (max + min);
    } else {
      s = delta / (2 - max - min);
    }
    return [h, s * 100, l * 100];
  };
  convert.rgb.hsv = function(rgb) {
    let rdif;
    let gdif;
    let bdif;
    let h;
    let s;
    const r = rgb[0] / 255;
    const g = rgb[1] / 255;
    const b = rgb[2] / 255;
    const v = Math.max(r, g, b);
    const diff = v - Math.min(r, g, b);
    const diffc = function(c) {
      return (v - c) / 6 / diff + 1 / 2;
    };
    if (diff === 0) {
      h = 0;
      s = 0;
    } else {
      s = diff / v;
      rdif = diffc(r);
      gdif = diffc(g);
      bdif = diffc(b);
      if (r === v) {
        h = bdif - gdif;
      } else if (g === v) {
        h = 1 / 3 + rdif - bdif;
      } else if (b === v) {
        h = 2 / 3 + gdif - rdif;
      }
      if (h < 0) {
        h += 1;
      } else if (h > 1) {
        h -= 1;
      }
    }
    return [
      h * 360,
      s * 100,
      v * 100
    ];
  };
  convert.rgb.hwb = function(rgb) {
    const r = rgb[0];
    const g = rgb[1];
    let b = rgb[2];
    const h = convert.rgb.hsl(rgb)[0];
    const w = 1 / 255 * Math.min(r, Math.min(g, b));
    b = 1 - 1 / 255 * Math.max(r, Math.max(g, b));
    return [h, w * 100, b * 100];
  };
  convert.rgb.cmyk = function(rgb) {
    const r = rgb[0] / 255;
    const g = rgb[1] / 255;
    const b = rgb[2] / 255;
    const k = Math.min(1 - r, 1 - g, 1 - b);
    const c = (1 - r - k) / (1 - k) || 0;
    const m = (1 - g - k) / (1 - k) || 0;
    const y = (1 - b - k) / (1 - k) || 0;
    return [c * 100, m * 100, y * 100, k * 100];
  };
  function comparativeDistance(x, y) {
    return (x[0] - y[0]) ** 2 + (x[1] - y[1]) ** 2 + (x[2] - y[2]) ** 2;
  }
  convert.rgb.keyword = function(rgb) {
    const reversed = reverseKeywords[rgb];
    if (reversed) {
      return reversed;
    }
    let currentClosestDistance = Infinity;
    let currentClosestKeyword;
    for (const keyword of Object.keys(cssKeywords)) {
      const value = cssKeywords[keyword];
      const distance = comparativeDistance(rgb, value);
      if (distance < currentClosestDistance) {
        currentClosestDistance = distance;
        currentClosestKeyword = keyword;
      }
    }
    return currentClosestKeyword;
  };
  convert.keyword.rgb = function(keyword) {
    return cssKeywords[keyword];
  };
  convert.rgb.xyz = function(rgb) {
    let r = rgb[0] / 255;
    let g = rgb[1] / 255;
    let b = rgb[2] / 255;
    r = r > 0.04045 ? ((r + 0.055) / 1.055) ** 2.4 : r / 12.92;
    g = g > 0.04045 ? ((g + 0.055) / 1.055) ** 2.4 : g / 12.92;
    b = b > 0.04045 ? ((b + 0.055) / 1.055) ** 2.4 : b / 12.92;
    const x = r * 0.4124 + g * 0.3576 + b * 0.1805;
    const y = r * 0.2126 + g * 0.7152 + b * 0.0722;
    const z = r * 0.0193 + g * 0.1192 + b * 0.9505;
    return [x * 100, y * 100, z * 100];
  };
  convert.rgb.lab = function(rgb) {
    const xyz = convert.rgb.xyz(rgb);
    let x = xyz[0];
    let y = xyz[1];
    let z = xyz[2];
    x /= 95.047;
    y /= 100;
    z /= 108.883;
    x = x > 8856e-6 ? x ** (1 / 3) : 7.787 * x + 16 / 116;
    y = y > 8856e-6 ? y ** (1 / 3) : 7.787 * y + 16 / 116;
    z = z > 8856e-6 ? z ** (1 / 3) : 7.787 * z + 16 / 116;
    const l = 116 * y - 16;
    const a = 500 * (x - y);
    const b = 200 * (y - z);
    return [l, a, b];
  };
  convert.hsl.rgb = function(hsl) {
    const h = hsl[0] / 360;
    const s = hsl[1] / 100;
    const l = hsl[2] / 100;
    let t2;
    let t3;
    let val;
    if (s === 0) {
      val = l * 255;
      return [val, val, val];
    }
    if (l < 0.5) {
      t2 = l * (1 + s);
    } else {
      t2 = l + s - l * s;
    }
    const t1 = 2 * l - t2;
    const rgb = [0, 0, 0];
    for (let i = 0; i < 3; i++) {
      t3 = h + 1 / 3 * -(i - 1);
      if (t3 < 0) {
        t3++;
      }
      if (t3 > 1) {
        t3--;
      }
      if (6 * t3 < 1) {
        val = t1 + (t2 - t1) * 6 * t3;
      } else if (2 * t3 < 1) {
        val = t2;
      } else if (3 * t3 < 2) {
        val = t1 + (t2 - t1) * (2 / 3 - t3) * 6;
      } else {
        val = t1;
      }
      rgb[i] = val * 255;
    }
    return rgb;
  };
  convert.hsl.hsv = function(hsl) {
    const h = hsl[0];
    let s = hsl[1] / 100;
    let l = hsl[2] / 100;
    let smin = s;
    const lmin = Math.max(l, 0.01);
    l *= 2;
    s *= l <= 1 ? l : 2 - l;
    smin *= lmin <= 1 ? lmin : 2 - lmin;
    const v = (l + s) / 2;
    const sv = l === 0 ? 2 * smin / (lmin + smin) : 2 * s / (l + s);
    return [h, sv * 100, v * 100];
  };
  convert.hsv.rgb = function(hsv) {
    const h = hsv[0] / 60;
    const s = hsv[1] / 100;
    let v = hsv[2] / 100;
    const hi = Math.floor(h) % 6;
    const f = h - Math.floor(h);
    const p = 255 * v * (1 - s);
    const q = 255 * v * (1 - s * f);
    const t = 255 * v * (1 - s * (1 - f));
    v *= 255;
    switch (hi) {
      case 0:
        return [v, t, p];
      case 1:
        return [q, v, p];
      case 2:
        return [p, v, t];
      case 3:
        return [p, q, v];
      case 4:
        return [t, p, v];
      case 5:
        return [v, p, q];
    }
  };
  convert.hsv.hsl = function(hsv) {
    const h = hsv[0];
    const s = hsv[1] / 100;
    const v = hsv[2] / 100;
    const vmin = Math.max(v, 0.01);
    let sl;
    let l;
    l = (2 - s) * v;
    const lmin = (2 - s) * vmin;
    sl = s * vmin;
    sl /= lmin <= 1 ? lmin : 2 - lmin;
    sl = sl || 0;
    l /= 2;
    return [h, sl * 100, l * 100];
  };
  convert.hwb.rgb = function(hwb) {
    const h = hwb[0] / 360;
    let wh = hwb[1] / 100;
    let bl = hwb[2] / 100;
    const ratio = wh + bl;
    let f;
    if (ratio > 1) {
      wh /= ratio;
      bl /= ratio;
    }
    const i = Math.floor(6 * h);
    const v = 1 - bl;
    f = 6 * h - i;
    if ((i & 1) !== 0) {
      f = 1 - f;
    }
    const n = wh + f * (v - wh);
    let r;
    let g;
    let b;
    switch (i) {
      default:
      case 6:
      case 0:
        r = v;
        g = n;
        b = wh;
        break;
      case 1:
        r = n;
        g = v;
        b = wh;
        break;
      case 2:
        r = wh;
        g = v;
        b = n;
        break;
      case 3:
        r = wh;
        g = n;
        b = v;
        break;
      case 4:
        r = n;
        g = wh;
        b = v;
        break;
      case 5:
        r = v;
        g = wh;
        b = n;
        break;
    }
    return [r * 255, g * 255, b * 255];
  };
  convert.cmyk.rgb = function(cmyk) {
    const c = cmyk[0] / 100;
    const m = cmyk[1] / 100;
    const y = cmyk[2] / 100;
    const k = cmyk[3] / 100;
    const r = 1 - Math.min(1, c * (1 - k) + k);
    const g = 1 - Math.min(1, m * (1 - k) + k);
    const b = 1 - Math.min(1, y * (1 - k) + k);
    return [r * 255, g * 255, b * 255];
  };
  convert.xyz.rgb = function(xyz) {
    const x = xyz[0] / 100;
    const y = xyz[1] / 100;
    const z = xyz[2] / 100;
    let r;
    let g;
    let b;
    r = x * 3.2406 + y * -1.5372 + z * -0.4986;
    g = x * -0.9689 + y * 1.8758 + z * 0.0415;
    b = x * 0.0557 + y * -0.204 + z * 1.057;
    r = r > 31308e-7 ? 1.055 * r ** (1 / 2.4) - 0.055 : r * 12.92;
    g = g > 31308e-7 ? 1.055 * g ** (1 / 2.4) - 0.055 : g * 12.92;
    b = b > 31308e-7 ? 1.055 * b ** (1 / 2.4) - 0.055 : b * 12.92;
    r = Math.min(Math.max(0, r), 1);
    g = Math.min(Math.max(0, g), 1);
    b = Math.min(Math.max(0, b), 1);
    return [r * 255, g * 255, b * 255];
  };
  convert.xyz.lab = function(xyz) {
    let x = xyz[0];
    let y = xyz[1];
    let z = xyz[2];
    x /= 95.047;
    y /= 100;
    z /= 108.883;
    x = x > 8856e-6 ? x ** (1 / 3) : 7.787 * x + 16 / 116;
    y = y > 8856e-6 ? y ** (1 / 3) : 7.787 * y + 16 / 116;
    z = z > 8856e-6 ? z ** (1 / 3) : 7.787 * z + 16 / 116;
    const l = 116 * y - 16;
    const a = 500 * (x - y);
    const b = 200 * (y - z);
    return [l, a, b];
  };
  convert.lab.xyz = function(lab) {
    const l = lab[0];
    const a = lab[1];
    const b = lab[2];
    let x;
    let y;
    let z;
    y = (l + 16) / 116;
    x = a / 500 + y;
    z = y - b / 200;
    const y2 = y ** 3;
    const x2 = x ** 3;
    const z2 = z ** 3;
    y = y2 > 8856e-6 ? y2 : (y - 16 / 116) / 7.787;
    x = x2 > 8856e-6 ? x2 : (x - 16 / 116) / 7.787;
    z = z2 > 8856e-6 ? z2 : (z - 16 / 116) / 7.787;
    x *= 95.047;
    y *= 100;
    z *= 108.883;
    return [x, y, z];
  };
  convert.lab.lch = function(lab) {
    const l = lab[0];
    const a = lab[1];
    const b = lab[2];
    let h;
    const hr = Math.atan2(b, a);
    h = hr * 360 / 2 / Math.PI;
    if (h < 0) {
      h += 360;
    }
    const c = Math.sqrt(a * a + b * b);
    return [l, c, h];
  };
  convert.lch.lab = function(lch) {
    const l = lch[0];
    const c = lch[1];
    const h = lch[2];
    const hr = h / 360 * 2 * Math.PI;
    const a = c * Math.cos(hr);
    const b = c * Math.sin(hr);
    return [l, a, b];
  };
  convert.rgb.ansi16 = function(args, saturation = null) {
    const [r, g, b] = args;
    let value = saturation === null ? convert.rgb.hsv(args)[2] : saturation;
    value = Math.round(value / 50);
    if (value === 0) {
      return 30;
    }
    let ansi = 30 + (Math.round(b / 255) << 2 | Math.round(g / 255) << 1 | Math.round(r / 255));
    if (value === 2) {
      ansi += 60;
    }
    return ansi;
  };
  convert.hsv.ansi16 = function(args) {
    return convert.rgb.ansi16(convert.hsv.rgb(args), args[2]);
  };
  convert.rgb.ansi256 = function(args) {
    const r = args[0];
    const g = args[1];
    const b = args[2];
    if (r === g && g === b) {
      if (r < 8) {
        return 16;
      }
      if (r > 248) {
        return 231;
      }
      return Math.round((r - 8) / 247 * 24) + 232;
    }
    const ansi = 16 + 36 * Math.round(r / 255 * 5) + 6 * Math.round(g / 255 * 5) + Math.round(b / 255 * 5);
    return ansi;
  };
  convert.ansi16.rgb = function(args) {
    let color = args % 10;
    if (color === 0 || color === 7) {
      if (args > 50) {
        color += 3.5;
      }
      color = color / 10.5 * 255;
      return [color, color, color];
    }
    const mult = (~~(args > 50) + 1) * 0.5;
    const r = (color & 1) * mult * 255;
    const g = (color >> 1 & 1) * mult * 255;
    const b = (color >> 2 & 1) * mult * 255;
    return [r, g, b];
  };
  convert.ansi256.rgb = function(args) {
    if (args >= 232) {
      const c = (args - 232) * 10 + 8;
      return [c, c, c];
    }
    args -= 16;
    let rem;
    const r = Math.floor(args / 36) / 5 * 255;
    const g = Math.floor((rem = args % 36) / 6) / 5 * 255;
    const b = rem % 6 / 5 * 255;
    return [r, g, b];
  };
  convert.rgb.hex = function(args) {
    const integer = ((Math.round(args[0]) & 255) << 16) + ((Math.round(args[1]) & 255) << 8) + (Math.round(args[2]) & 255);
    const string = integer.toString(16).toUpperCase();
    return "000000".substring(string.length) + string;
  };
  convert.hex.rgb = function(args) {
    const match = args.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
    if (!match) {
      return [0, 0, 0];
    }
    let colorString = match[0];
    if (match[0].length === 3) {
      colorString = colorString.split("").map((char) => {
        return char + char;
      }).join("");
    }
    const integer = parseInt(colorString, 16);
    const r = integer >> 16 & 255;
    const g = integer >> 8 & 255;
    const b = integer & 255;
    return [r, g, b];
  };
  convert.rgb.hcg = function(rgb) {
    const r = rgb[0] / 255;
    const g = rgb[1] / 255;
    const b = rgb[2] / 255;
    const max = Math.max(Math.max(r, g), b);
    const min = Math.min(Math.min(r, g), b);
    const chroma = max - min;
    let grayscale;
    let hue;
    if (chroma < 1) {
      grayscale = min / (1 - chroma);
    } else {
      grayscale = 0;
    }
    if (chroma <= 0) {
      hue = 0;
    } else if (max === r) {
      hue = (g - b) / chroma % 6;
    } else if (max === g) {
      hue = 2 + (b - r) / chroma;
    } else {
      hue = 4 + (r - g) / chroma;
    }
    hue /= 6;
    hue %= 1;
    return [hue * 360, chroma * 100, grayscale * 100];
  };
  convert.hsl.hcg = function(hsl) {
    const s = hsl[1] / 100;
    const l = hsl[2] / 100;
    const c = l < 0.5 ? 2 * s * l : 2 * s * (1 - l);
    let f = 0;
    if (c < 1) {
      f = (l - 0.5 * c) / (1 - c);
    }
    return [hsl[0], c * 100, f * 100];
  };
  convert.hsv.hcg = function(hsv) {
    const s = hsv[1] / 100;
    const v = hsv[2] / 100;
    const c = s * v;
    let f = 0;
    if (c < 1) {
      f = (v - c) / (1 - c);
    }
    return [hsv[0], c * 100, f * 100];
  };
  convert.hcg.rgb = function(hcg) {
    const h = hcg[0] / 360;
    const c = hcg[1] / 100;
    const g = hcg[2] / 100;
    if (c === 0) {
      return [g * 255, g * 255, g * 255];
    }
    const pure = [0, 0, 0];
    const hi = h % 1 * 6;
    const v = hi % 1;
    const w = 1 - v;
    let mg = 0;
    switch (Math.floor(hi)) {
      case 0:
        pure[0] = 1;
        pure[1] = v;
        pure[2] = 0;
        break;
      case 1:
        pure[0] = w;
        pure[1] = 1;
        pure[2] = 0;
        break;
      case 2:
        pure[0] = 0;
        pure[1] = 1;
        pure[2] = v;
        break;
      case 3:
        pure[0] = 0;
        pure[1] = w;
        pure[2] = 1;
        break;
      case 4:
        pure[0] = v;
        pure[1] = 0;
        pure[2] = 1;
        break;
      default:
        pure[0] = 1;
        pure[1] = 0;
        pure[2] = w;
    }
    mg = (1 - c) * g;
    return [
      (c * pure[0] + mg) * 255,
      (c * pure[1] + mg) * 255,
      (c * pure[2] + mg) * 255
    ];
  };
  convert.hcg.hsv = function(hcg) {
    const c = hcg[1] / 100;
    const g = hcg[2] / 100;
    const v = c + g * (1 - c);
    let f = 0;
    if (v > 0) {
      f = c / v;
    }
    return [hcg[0], f * 100, v * 100];
  };
  convert.hcg.hsl = function(hcg) {
    const c = hcg[1] / 100;
    const g = hcg[2] / 100;
    const l = g * (1 - c) + 0.5 * c;
    let s = 0;
    if (l > 0 && l < 0.5) {
      s = c / (2 * l);
    } else if (l >= 0.5 && l < 1) {
      s = c / (2 * (1 - l));
    }
    return [hcg[0], s * 100, l * 100];
  };
  convert.hcg.hwb = function(hcg) {
    const c = hcg[1] / 100;
    const g = hcg[2] / 100;
    const v = c + g * (1 - c);
    return [hcg[0], (v - c) * 100, (1 - v) * 100];
  };
  convert.hwb.hcg = function(hwb) {
    const w = hwb[1] / 100;
    const b = hwb[2] / 100;
    const v = 1 - b;
    const c = v - w;
    let g = 0;
    if (c < 1) {
      g = (v - c) / (1 - c);
    }
    return [hwb[0], c * 100, g * 100];
  };
  convert.apple.rgb = function(apple) {
    return [apple[0] / 65535 * 255, apple[1] / 65535 * 255, apple[2] / 65535 * 255];
  };
  convert.rgb.apple = function(rgb) {
    return [rgb[0] / 255 * 65535, rgb[1] / 255 * 65535, rgb[2] / 255 * 65535];
  };
  convert.gray.rgb = function(args) {
    return [args[0] / 100 * 255, args[0] / 100 * 255, args[0] / 100 * 255];
  };
  convert.gray.hsl = function(args) {
    return [0, 0, args[0]];
  };
  convert.gray.hsv = convert.gray.hsl;
  convert.gray.hwb = function(gray) {
    return [0, 100, gray[0]];
  };
  convert.gray.cmyk = function(gray) {
    return [0, 0, 0, gray[0]];
  };
  convert.gray.lab = function(gray) {
    return [gray[0], 0, 0];
  };
  convert.gray.hex = function(gray) {
    const val = Math.round(gray[0] / 100 * 255) & 255;
    const integer = (val << 16) + (val << 8) + val;
    const string = integer.toString(16).toUpperCase();
    return "000000".substring(string.length) + string;
  };
  convert.rgb.gray = function(rgb) {
    const val = (rgb[0] + rgb[1] + rgb[2]) / 3;
    return [val / 255 * 100];
  };
});

// node_modules/color-convert/route.js
var require_route3 = __commonJS((exports2, module2) => {
  var conversions = require_conversions3();
  function buildGraph() {
    const graph = {};
    const models = Object.keys(conversions);
    for (let len = models.length, i = 0; i < len; i++) {
      graph[models[i]] = {
        distance: -1,
        parent: null
      };
    }
    return graph;
  }
  function deriveBFS(fromModel) {
    const graph = buildGraph();
    const queue = [fromModel];
    graph[fromModel].distance = 0;
    while (queue.length) {
      const current = queue.pop();
      const adjacents = Object.keys(conversions[current]);
      for (let len = adjacents.length, i = 0; i < len; i++) {
        const adjacent = adjacents[i];
        const node = graph[adjacent];
        if (node.distance === -1) {
          node.distance = graph[current].distance + 1;
          node.parent = current;
          queue.unshift(adjacent);
        }
      }
    }
    return graph;
  }
  function link(from, to) {
    return function(args) {
      return to(from(args));
    };
  }
  function wrapConversion(toModel, graph) {
    const path = [graph[toModel].parent, toModel];
    let fn = conversions[graph[toModel].parent][toModel];
    let cur = graph[toModel].parent;
    while (graph[cur].parent) {
      path.unshift(graph[cur].parent);
      fn = link(conversions[graph[cur].parent][cur], fn);
      cur = graph[cur].parent;
    }
    fn.conversion = path;
    return fn;
  }
  module2.exports = function(fromModel) {
    const graph = deriveBFS(fromModel);
    const conversion = {};
    const models = Object.keys(graph);
    for (let len = models.length, i = 0; i < len; i++) {
      const toModel = models[i];
      const node = graph[toModel];
      if (node.parent === null) {
        continue;
      }
      conversion[toModel] = wrapConversion(toModel, graph);
    }
    return conversion;
  };
});

// node_modules/color-convert/index.js
var require_color_convert3 = __commonJS((exports2, module2) => {
  var conversions = require_conversions3();
  var route = require_route3();
  var convert = {};
  var models = Object.keys(conversions);
  function wrapRaw(fn) {
    const wrappedFn = function(...args) {
      const arg0 = args[0];
      if (arg0 === void 0 || arg0 === null) {
        return arg0;
      }
      if (arg0.length > 1) {
        args = arg0;
      }
      return fn(args);
    };
    if ("conversion" in fn) {
      wrappedFn.conversion = fn.conversion;
    }
    return wrappedFn;
  }
  function wrapRounded(fn) {
    const wrappedFn = function(...args) {
      const arg0 = args[0];
      if (arg0 === void 0 || arg0 === null) {
        return arg0;
      }
      if (arg0.length > 1) {
        args = arg0;
      }
      const result = fn(args);
      if (typeof result === "object") {
        for (let len = result.length, i = 0; i < len; i++) {
          result[i] = Math.round(result[i]);
        }
      }
      return result;
    };
    if ("conversion" in fn) {
      wrappedFn.conversion = fn.conversion;
    }
    return wrappedFn;
  }
  models.forEach((fromModel) => {
    convert[fromModel] = {};
    Object.defineProperty(convert[fromModel], "channels", {value: conversions[fromModel].channels});
    Object.defineProperty(convert[fromModel], "labels", {value: conversions[fromModel].labels});
    const routes = route(fromModel);
    const routeModels = Object.keys(routes);
    routeModels.forEach((toModel) => {
      const fn = routes[toModel];
      convert[fromModel][toModel] = wrapRounded(fn);
      convert[fromModel][toModel].raw = wrapRaw(fn);
    });
  });
  module2.exports = convert;
});

// node_modules/ansi-styles/index.js
var require_ansi_styles3 = __commonJS((exports2, module2) => {
  "use strict";
  var wrapAnsi16 = (fn, offset) => (...args) => {
    const code = fn(...args);
    return `[${code + offset}m`;
  };
  var wrapAnsi256 = (fn, offset) => (...args) => {
    const code = fn(...args);
    return `[${38 + offset};5;${code}m`;
  };
  var wrapAnsi16m = (fn, offset) => (...args) => {
    const rgb = fn(...args);
    return `[${38 + offset};2;${rgb[0]};${rgb[1]};${rgb[2]}m`;
  };
  var ansi2ansi = (n) => n;
  var rgb2rgb = (r, g, b) => [r, g, b];
  var setLazyProperty = (object, property, get) => {
    Object.defineProperty(object, property, {
      get: () => {
        const value = get();
        Object.defineProperty(object, property, {
          value,
          enumerable: true,
          configurable: true
        });
        return value;
      },
      enumerable: true,
      configurable: true
    });
  };
  var colorConvert;
  var makeDynamicStyles = (wrap, targetSpace, identity, isBackground) => {
    if (colorConvert === void 0) {
      colorConvert = require_color_convert3();
    }
    const offset = isBackground ? 10 : 0;
    const styles = {};
    for (const [sourceSpace, suite] of Object.entries(colorConvert)) {
      const name = sourceSpace === "ansi16" ? "ansi" : sourceSpace;
      if (sourceSpace === targetSpace) {
        styles[name] = wrap(identity, offset);
      } else if (typeof suite === "object") {
        styles[name] = wrap(suite[targetSpace], offset);
      }
    }
    return styles;
  };
  function assembleStyles() {
    const codes = new Map();
    const styles = {
      modifier: {
        reset: [0, 0],
        bold: [1, 22],
        dim: [2, 22],
        italic: [3, 23],
        underline: [4, 24],
        inverse: [7, 27],
        hidden: [8, 28],
        strikethrough: [9, 29]
      },
      color: {
        black: [30, 39],
        red: [31, 39],
        green: [32, 39],
        yellow: [33, 39],
        blue: [34, 39],
        magenta: [35, 39],
        cyan: [36, 39],
        white: [37, 39],
        blackBright: [90, 39],
        redBright: [91, 39],
        greenBright: [92, 39],
        yellowBright: [93, 39],
        blueBright: [94, 39],
        magentaBright: [95, 39],
        cyanBright: [96, 39],
        whiteBright: [97, 39]
      },
      bgColor: {
        bgBlack: [40, 49],
        bgRed: [41, 49],
        bgGreen: [42, 49],
        bgYellow: [43, 49],
        bgBlue: [44, 49],
        bgMagenta: [45, 49],
        bgCyan: [46, 49],
        bgWhite: [47, 49],
        bgBlackBright: [100, 49],
        bgRedBright: [101, 49],
        bgGreenBright: [102, 49],
        bgYellowBright: [103, 49],
        bgBlueBright: [104, 49],
        bgMagentaBright: [105, 49],
        bgCyanBright: [106, 49],
        bgWhiteBright: [107, 49]
      }
    };
    styles.color.gray = styles.color.blackBright;
    styles.bgColor.bgGray = styles.bgColor.bgBlackBright;
    styles.color.grey = styles.color.blackBright;
    styles.bgColor.bgGrey = styles.bgColor.bgBlackBright;
    for (const [groupName, group] of Object.entries(styles)) {
      for (const [styleName, style] of Object.entries(group)) {
        styles[styleName] = {
          open: `[${style[0]}m`,
          close: `[${style[1]}m`
        };
        group[styleName] = styles[styleName];
        codes.set(style[0], style[1]);
      }
      Object.defineProperty(styles, groupName, {
        value: group,
        enumerable: false
      });
    }
    Object.defineProperty(styles, "codes", {
      value: codes,
      enumerable: false
    });
    styles.color.close = "[39m";
    styles.bgColor.close = "[49m";
    setLazyProperty(styles.color, "ansi", () => makeDynamicStyles(wrapAnsi16, "ansi16", ansi2ansi, false));
    setLazyProperty(styles.color, "ansi256", () => makeDynamicStyles(wrapAnsi256, "ansi256", ansi2ansi, false));
    setLazyProperty(styles.color, "ansi16m", () => makeDynamicStyles(wrapAnsi16m, "rgb", rgb2rgb, false));
    setLazyProperty(styles.bgColor, "ansi", () => makeDynamicStyles(wrapAnsi16, "ansi16", ansi2ansi, true));
    setLazyProperty(styles.bgColor, "ansi256", () => makeDynamicStyles(wrapAnsi256, "ansi256", ansi2ansi, true));
    setLazyProperty(styles.bgColor, "ansi16m", () => makeDynamicStyles(wrapAnsi16m, "rgb", rgb2rgb, true));
    return styles;
  }
  Object.defineProperty(module2, "exports", {
    enumerable: true,
    get: assembleStyles
  });
});

// node_modules/has-flag/index.js
var require_has_flag3 = __commonJS((exports2, module2) => {
  "use strict";
  module2.exports = (flag, argv = process.argv) => {
    const prefix = flag.startsWith("-") ? "" : flag.length === 1 ? "-" : "--";
    const position = argv.indexOf(prefix + flag);
    const terminatorPosition = argv.indexOf("--");
    return position !== -1 && (terminatorPosition === -1 || position < terminatorPosition);
  };
});

// node_modules/supports-color/index.js
var require_supports_color3 = __commonJS((exports2, module2) => {
  "use strict";
  var os = require("os");
  var tty = require("tty");
  var hasFlag = require_has_flag3();
  var {env} = process;
  var forceColor;
  if (hasFlag("no-color") || hasFlag("no-colors") || hasFlag("color=false") || hasFlag("color=never")) {
    forceColor = 0;
  } else if (hasFlag("color") || hasFlag("colors") || hasFlag("color=true") || hasFlag("color=always")) {
    forceColor = 1;
  }
  if ("FORCE_COLOR" in env) {
    if (env.FORCE_COLOR === "true") {
      forceColor = 1;
    } else if (env.FORCE_COLOR === "false") {
      forceColor = 0;
    } else {
      forceColor = env.FORCE_COLOR.length === 0 ? 1 : Math.min(parseInt(env.FORCE_COLOR, 10), 3);
    }
  }
  function translateLevel(level) {
    if (level === 0) {
      return false;
    }
    return {
      level,
      hasBasic: true,
      has256: level >= 2,
      has16m: level >= 3
    };
  }
  function supportsColor(haveStream, streamIsTTY) {
    if (forceColor === 0) {
      return 0;
    }
    if (hasFlag("color=16m") || hasFlag("color=full") || hasFlag("color=truecolor")) {
      return 3;
    }
    if (hasFlag("color=256")) {
      return 2;
    }
    if (haveStream && !streamIsTTY && forceColor === void 0) {
      return 0;
    }
    const min = forceColor || 0;
    if (env.TERM === "dumb") {
      return min;
    }
    if (process.platform === "win32") {
      const osRelease = os.release().split(".");
      if (Number(osRelease[0]) >= 10 && Number(osRelease[2]) >= 10586) {
        return Number(osRelease[2]) >= 14931 ? 3 : 2;
      }
      return 1;
    }
    if ("CI" in env) {
      if (["TRAVIS", "CIRCLECI", "APPVEYOR", "GITLAB_CI", "GITHUB_ACTIONS", "BUILDKITE"].some((sign) => sign in env) || env.CI_NAME === "codeship") {
        return 1;
      }
      return min;
    }
    if ("TEAMCITY_VERSION" in env) {
      return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(env.TEAMCITY_VERSION) ? 1 : 0;
    }
    if (env.COLORTERM === "truecolor") {
      return 3;
    }
    if ("TERM_PROGRAM" in env) {
      const version = parseInt((env.TERM_PROGRAM_VERSION || "").split(".")[0], 10);
      switch (env.TERM_PROGRAM) {
        case "iTerm.app":
          return version >= 3 ? 3 : 2;
        case "Apple_Terminal":
          return 2;
      }
    }
    if (/-256(color)?$/i.test(env.TERM)) {
      return 2;
    }
    if (/^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(env.TERM)) {
      return 1;
    }
    if ("COLORTERM" in env) {
      return 1;
    }
    return min;
  }
  function getSupportLevel(stream) {
    const level = supportsColor(stream, stream && stream.isTTY);
    return translateLevel(level);
  }
  module2.exports = {
    supportsColor: getSupportLevel,
    stdout: translateLevel(supportsColor(true, tty.isatty(1))),
    stderr: translateLevel(supportsColor(true, tty.isatty(2)))
  };
});

// node_modules/chalk/source/util.js
var require_util = __commonJS((exports2, module2) => {
  "use strict";
  var stringReplaceAll = (string, substring, replacer) => {
    let index = string.indexOf(substring);
    if (index === -1) {
      return string;
    }
    const substringLength = substring.length;
    let endIndex = 0;
    let returnValue = "";
    do {
      returnValue += string.substr(endIndex, index - endIndex) + substring + replacer;
      endIndex = index + substringLength;
      index = string.indexOf(substring, endIndex);
    } while (index !== -1);
    returnValue += string.substr(endIndex);
    return returnValue;
  };
  var stringEncaseCRLFWithFirstIndex = (string, prefix, postfix, index) => {
    let endIndex = 0;
    let returnValue = "";
    do {
      const gotCR = string[index - 1] === "\r";
      returnValue += string.substr(endIndex, (gotCR ? index - 1 : index) - endIndex) + prefix + (gotCR ? "\r\n" : "\n") + postfix;
      endIndex = index + 1;
      index = string.indexOf("\n", endIndex);
    } while (index !== -1);
    returnValue += string.substr(endIndex);
    return returnValue;
  };
  module2.exports = {
    stringReplaceAll,
    stringEncaseCRLFWithFirstIndex
  };
});

// node_modules/chalk/source/templates.js
var require_templates3 = __commonJS((exports2, module2) => {
  "use strict";
  var TEMPLATE_REGEX = /(?:\\(u(?:[a-f\d]{4}|\{[a-f\d]{1,6}\})|x[a-f\d]{2}|.))|(?:\{(~)?(\w+(?:\([^)]*\))?(?:\.\w+(?:\([^)]*\))?)*)(?:[ \t]|(?=\r?\n)))|(\})|((?:.|[\r\n\f])+?)/gi;
  var STYLE_REGEX = /(?:^|\.)(\w+)(?:\(([^)]*)\))?/g;
  var STRING_REGEX = /^(['"])((?:\\.|(?!\1)[^\\])*)\1$/;
  var ESCAPE_REGEX = /\\(u(?:[a-f\d]{4}|{[a-f\d]{1,6}})|x[a-f\d]{2}|.)|([^\\])/gi;
  var ESCAPES = new Map([
    ["n", "\n"],
    ["r", "\r"],
    ["t", "	"],
    ["b", "\b"],
    ["f", "\f"],
    ["v", "\v"],
    ["0", "\0"],
    ["\\", "\\"],
    ["e", ""],
    ["a", "\x07"]
  ]);
  function unescape(c) {
    const u = c[0] === "u";
    const bracket = c[1] === "{";
    if (u && !bracket && c.length === 5 || c[0] === "x" && c.length === 3) {
      return String.fromCharCode(parseInt(c.slice(1), 16));
    }
    if (u && bracket) {
      return String.fromCodePoint(parseInt(c.slice(2, -1), 16));
    }
    return ESCAPES.get(c) || c;
  }
  function parseArguments(name, arguments_) {
    const results = [];
    const chunks = arguments_.trim().split(/\s*,\s*/g);
    let matches;
    for (const chunk of chunks) {
      const number = Number(chunk);
      if (!Number.isNaN(number)) {
        results.push(number);
      } else if (matches = chunk.match(STRING_REGEX)) {
        results.push(matches[2].replace(ESCAPE_REGEX, (m, escape, character) => escape ? unescape(escape) : character));
      } else {
        throw new Error(`Invalid Chalk template style argument: ${chunk} (in style '${name}')`);
      }
    }
    return results;
  }
  function parseStyle(style) {
    STYLE_REGEX.lastIndex = 0;
    const results = [];
    let matches;
    while ((matches = STYLE_REGEX.exec(style)) !== null) {
      const name = matches[1];
      if (matches[2]) {
        const args = parseArguments(name, matches[2]);
        results.push([name].concat(args));
      } else {
        results.push([name]);
      }
    }
    return results;
  }
  function buildStyle(chalk, styles) {
    const enabled = {};
    for (const layer of styles) {
      for (const style of layer.styles) {
        enabled[style[0]] = layer.inverse ? null : style.slice(1);
      }
    }
    let current = chalk;
    for (const [styleName, styles2] of Object.entries(enabled)) {
      if (!Array.isArray(styles2)) {
        continue;
      }
      if (!(styleName in current)) {
        throw new Error(`Unknown Chalk style: ${styleName}`);
      }
      current = styles2.length > 0 ? current[styleName](...styles2) : current[styleName];
    }
    return current;
  }
  module2.exports = (chalk, temporary) => {
    const styles = [];
    const chunks = [];
    let chunk = [];
    temporary.replace(TEMPLATE_REGEX, (m, escapeCharacter, inverse, style, close, character) => {
      if (escapeCharacter) {
        chunk.push(unescape(escapeCharacter));
      } else if (style) {
        const string = chunk.join("");
        chunk = [];
        chunks.push(styles.length === 0 ? string : buildStyle(chalk, styles)(string));
        styles.push({inverse, styles: parseStyle(style)});
      } else if (close) {
        if (styles.length === 0) {
          throw new Error("Found extraneous } in Chalk template literal");
        }
        chunks.push(buildStyle(chalk, styles)(chunk.join("")));
        chunk = [];
        styles.pop();
      } else {
        chunk.push(character);
      }
    });
    chunks.push(chunk.join(""));
    if (styles.length > 0) {
      const errMessage = `Chalk template literal is missing ${styles.length} closing bracket${styles.length === 1 ? "" : "s"} (\`}\`)`;
      throw new Error(errMessage);
    }
    return chunks.join("");
  };
});

// node_modules/chalk/source/index.js
var require_source = __commonJS((exports2, module2) => {
  "use strict";
  var ansiStyles = require_ansi_styles3();
  var {stdout: stdoutColor, stderr: stderrColor} = require_supports_color3();
  var {
    stringReplaceAll,
    stringEncaseCRLFWithFirstIndex
  } = require_util();
  var {isArray} = Array;
  var levelMapping = [
    "ansi",
    "ansi",
    "ansi256",
    "ansi16m"
  ];
  var styles = Object.create(null);
  var applyOptions = (object, options = {}) => {
    if (options.level && !(Number.isInteger(options.level) && options.level >= 0 && options.level <= 3)) {
      throw new Error("The `level` option should be an integer from 0 to 3");
    }
    const colorLevel = stdoutColor ? stdoutColor.level : 0;
    object.level = options.level === void 0 ? colorLevel : options.level;
  };
  var ChalkClass = class {
    constructor(options) {
      return chalkFactory(options);
    }
  };
  var chalkFactory = (options) => {
    const chalk2 = {};
    applyOptions(chalk2, options);
    chalk2.template = (...arguments_) => chalkTag(chalk2.template, ...arguments_);
    Object.setPrototypeOf(chalk2, Chalk.prototype);
    Object.setPrototypeOf(chalk2.template, chalk2);
    chalk2.template.constructor = () => {
      throw new Error("`chalk.constructor()` is deprecated. Use `new chalk.Instance()` instead.");
    };
    chalk2.template.Instance = ChalkClass;
    return chalk2.template;
  };
  function Chalk(options) {
    return chalkFactory(options);
  }
  for (const [styleName, style] of Object.entries(ansiStyles)) {
    styles[styleName] = {
      get() {
        const builder = createBuilder(this, createStyler(style.open, style.close, this._styler), this._isEmpty);
        Object.defineProperty(this, styleName, {value: builder});
        return builder;
      }
    };
  }
  styles.visible = {
    get() {
      const builder = createBuilder(this, this._styler, true);
      Object.defineProperty(this, "visible", {value: builder});
      return builder;
    }
  };
  var usedModels = ["rgb", "hex", "keyword", "hsl", "hsv", "hwb", "ansi", "ansi256"];
  for (const model of usedModels) {
    styles[model] = {
      get() {
        const {level} = this;
        return function(...arguments_) {
          const styler = createStyler(ansiStyles.color[levelMapping[level]][model](...arguments_), ansiStyles.color.close, this._styler);
          return createBuilder(this, styler, this._isEmpty);
        };
      }
    };
  }
  for (const model of usedModels) {
    const bgModel = "bg" + model[0].toUpperCase() + model.slice(1);
    styles[bgModel] = {
      get() {
        const {level} = this;
        return function(...arguments_) {
          const styler = createStyler(ansiStyles.bgColor[levelMapping[level]][model](...arguments_), ansiStyles.bgColor.close, this._styler);
          return createBuilder(this, styler, this._isEmpty);
        };
      }
    };
  }
  var proto = Object.defineProperties(() => {
  }, {
    ...styles,
    level: {
      enumerable: true,
      get() {
        return this._generator.level;
      },
      set(level) {
        this._generator.level = level;
      }
    }
  });
  var createStyler = (open, close, parent) => {
    let openAll;
    let closeAll;
    if (parent === void 0) {
      openAll = open;
      closeAll = close;
    } else {
      openAll = parent.openAll + open;
      closeAll = close + parent.closeAll;
    }
    return {
      open,
      close,
      openAll,
      closeAll,
      parent
    };
  };
  var createBuilder = (self, _styler, _isEmpty) => {
    const builder = (...arguments_) => {
      if (isArray(arguments_[0]) && isArray(arguments_[0].raw)) {
        return applyStyle(builder, chalkTag(builder, ...arguments_));
      }
      return applyStyle(builder, arguments_.length === 1 ? "" + arguments_[0] : arguments_.join(" "));
    };
    Object.setPrototypeOf(builder, proto);
    builder._generator = self;
    builder._styler = _styler;
    builder._isEmpty = _isEmpty;
    return builder;
  };
  var applyStyle = (self, string) => {
    if (self.level <= 0 || !string) {
      return self._isEmpty ? "" : string;
    }
    let styler = self._styler;
    if (styler === void 0) {
      return string;
    }
    const {openAll, closeAll} = styler;
    if (string.indexOf("") !== -1) {
      while (styler !== void 0) {
        string = stringReplaceAll(string, styler.close, styler.open);
        styler = styler.parent;
      }
    }
    const lfIndex = string.indexOf("\n");
    if (lfIndex !== -1) {
      string = stringEncaseCRLFWithFirstIndex(string, closeAll, openAll, lfIndex);
    }
    return openAll + string + closeAll;
  };
  var template;
  var chalkTag = (chalk2, ...strings) => {
    const [firstString] = strings;
    if (!isArray(firstString) || !isArray(firstString.raw)) {
      return strings.join(" ");
    }
    const arguments_ = strings.slice(1);
    const parts = [firstString.raw[0]];
    for (let i = 1; i < firstString.length; i++) {
      parts.push(String(arguments_[i - 1]).replace(/[{}\\]/g, "\\$&"), String(firstString.raw[i]));
    }
    if (template === void 0) {
      template = require_templates3();
    }
    return template(chalk2, parts.join(""));
  };
  Object.defineProperties(Chalk.prototype, styles);
  var chalk = Chalk();
  chalk.supportsColor = stdoutColor;
  chalk.stderr = Chalk({level: stderrColor ? stderrColor.level : 0});
  chalk.stderr.supportsColor = stderrColor;
  module2.exports = chalk;
});

// node_modules/cfonts/lib/Chalk.js
var require_Chalk = __commonJS((exports2, module2) => {
  /***************************************************************************************************************************************************************
   *
   * cfonts
   *
   * Sexy fonts for the console. (CLI output)
   *
   * @license     https://github.com/dominikwilkowski/cfonts/blob/released/LICENSE  GNU GPLv2
   * @author      Dominik Wilkowski  hi@dominik-wilkowski.com
   * @repository  https://github.com/dominikwilkowski/cfonts
   *
   * Chalk
   *   We pass on the FORCE_COLOR env var to chalk so we can force it in ci
   *
   **************************************************************************************************************************************************************/
  "use strict";
  var chalkOriginal = require_source();
  var level = {
    "0": 0,
    "1": 1,
    "2": 2,
    "3": 3
  };
  var Chalk = new chalkOriginal.Instance({
    ...process.env.FORCE_COLOR ? {
      level: level[process.env.FORCE_COLOR]
    } : null
  });
  module2.exports = exports2 = {
    Chalk
  };
});

// node_modules/cfonts/package.json
var require_package = __commonJS((exports2, module2) => {
  module2.exports = {
    _from: "cfonts@^2.9.1",
    _id: "cfonts@2.9.1",
    _inBundle: false,
    _integrity: "sha512-POZzm27BA8J/fgTeTpfKMmZKdij6L+8k2JsYJsrM5V7+HSFy0I03IEysng/IxGnzhteM7+PyH0rmZx+NeNMR2Q==",
    _location: "/cfonts",
    _phantomChildren: {},
    _requested: {
      type: "range",
      registry: true,
      raw: "cfonts@^2.9.1",
      name: "cfonts",
      escapedName: "cfonts",
      rawSpec: "^2.9.1",
      saveSpec: null,
      fetchSpec: "^2.9.1"
    },
    _requiredBy: [
      "#DEV:/",
      "#USER"
    ],
    _resolved: "https://registry.npmjs.org/cfonts/-/cfonts-2.9.1.tgz",
    _shasum: "90befec39cf0c779cbf82859c342aad44df1bc06",
    _spec: "cfonts@^2.9.1",
    _where: "/home/node/workspace/demo-3",
    author: {
      name: "Dominik Wilkowski",
      email: "Hi@Dominik-Wilkowski.com",
      url: "http://dominik-wilkowski.com/"
    },
    bin: {
      cfonts: "bin/index.js"
    },
    browserslist: [
      "node >= 10"
    ],
    bugs: {
      url: "https://github.com/dominikwilkowski/cfonts/issues"
    },
    bundleDependencies: false,
    contributors: {
      name: "Dominik Wilkowski",
      email: "Hi@Dominik-Wilkowski.com",
      url: "http://dominik-wilkowski.com/"
    },
    dependencies: {
      chalk: "^4.1.0",
      "window-size": "^1.1.1"
    },
    deprecated: false,
    description: "Sexy fonts for the console",
    devDependencies: {
      "@babel/cli": "^7.12.10",
      "@babel/core": "^7.12.10",
      "@babel/preset-env": "^7.12.11",
      "@types/node": "latest",
      coveralls: "^3.1.0",
      eslint: "^7.16.0",
      "jest-cli": "^26.6.3",
      onchange: "^7.1.0",
      typescript: "^4.1.3"
    },
    engines: {
      node: ">=10"
    },
    eslintConfig: {
      env: {
        node: true,
        commonjs: true,
        es6: true
      },
      extends: "eslint:recommended",
      globals: {
        Atomics: "readonly",
        SharedArrayBuffer: "readonly"
      },
      parserOptions: {
        ecmaVersion: 2018
      },
      rules: {
        "no-async-promise-executor": "off",
        "no-console": "off",
        "no-unused-vars": [
          "error",
          {
            argsIgnorePattern: "_"
          }
        ]
      }
    },
    files: [
      "lib/*.js",
      "bin/*",
      "fonts/*"
    ],
    homepage: "https://github.com/dominikwilkowski/cfonts",
    jest: {
      displayName: "CFonts",
      testEnvironment: "node",
      testRegex: "\\.spec.js$",
      collectCoverageFrom: [
        "src/*.js"
      ],
      setupFiles: [
        "<rootDir>/test/env.js"
      ],
      coverageThreshold: {
        global: {
          branches: 95,
          functions: 100,
          lines: 95,
          statements: 95
        }
      }
    },
    keywords: [
      "font",
      "banner",
      "logo",
      "CLI",
      "console",
      "ascii",
      "pretty"
    ],
    license: "GPL-2.0",
    licenses: [
      {
        type: "GPL-2.0",
        url: "https://github.com/dominikwilkowski/cfonts/blob/released/LICENSE"
      }
    ],
    main: "lib/index.js",
    name: "cfonts",
    peerDependencies: {},
    repository: {
      type: "git",
      url: "git://github.com/dominikwilkowski/cfonts.git"
    },
    resolutions: {
      lodash: ">=4.17.11"
    },
    scripts: {
      build: "yarn build:lib && yarn build:bin",
      "build:bin": "npx mkdirp bin && mv lib/bin.js bin/index.js",
      "build:lib": "npx mkdirp lib && babel src --out-dir lib",
      coveralls: "jest --coverage --coverageReporters=text-lcov | coveralls",
      nuke: "rm -rf lib && rm -rf node_modules && rm yarn.lock",
      prepublish: "yarn build && yarn test",
      test: "yarn build && yarn test:unit && yarn test:lint && yarn test:types && yarn test:fonts",
      "test:fonts": "node ./test/fonttest.js",
      "test:lint": "eslint src/",
      "test:types": "yarn types:clean && yarn types:declaration && yarn types:clean",
      "test:unit": "npx cross-env FORCE_COLOR=3 jest",
      "test:watch": "jest --watchAll --coverage",
      "types:clean": "find lib/ -type f -name '*.d.ts' -exec rm {} +",
      "types:declaration": "tsc -p declaration.tsconfig.json --resolveJsonModule",
      watch: "yarn build:lib && onchange 'src/**/*' -- yarn build:lib"
    },
    version: "2.9.1"
  };
});

// node_modules/cfonts/lib/constants.js
var require_constants = __commonJS((exports2, module2) => {
  /***************************************************************************************************************************************************************
   *
   * cfonts
   *
   * Sexy fonts for the console. (CLI output)
   *
   * @license     https://github.com/dominikwilkowski/cfonts/blob/released/LICENSE  GNU GPLv2
   * @author      Dominik Wilkowski  hi@dominik-wilkowski.com
   * @repository  https://github.com/dominikwilkowski/cfonts
   *
   * Constants
   *   CHARS
   *   COLORS
   *   BGCOLORS
   *   GRADIENTCOLORS
   *   ALIGNMENT
   *   FONTFACES
   *   CLIOPTIONS
   *   PACKAGE
   *   HEXTEST
   *
   **************************************************************************************************************************************************************/
  "use strict";
  var {
    Chalk
  } = require_Chalk();
  var CHARS = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "|", "!", "?", ".", "+", "-", "_", "=", "@", "#", "$", "%", "&", "(", ")", "/", ":", ";", ",", " ", "'", '"'];
  var COLORS = {
    system: "system",
    black: "black",
    red: "red",
    green: "green",
    yellow: "yellow",
    blue: "blue",
    magenta: "magenta",
    cyan: "cyan",
    white: "white",
    gray: "gray",
    redbright: "redBright",
    greenbright: "greenBright",
    yellowbright: "yellowBright",
    bluebright: "blueBright",
    magentabright: "magentaBright",
    cyanbright: "cyanBright",
    whitebright: "whiteBright"
  };
  var BGCOLORS = {
    transparent: "transparent",
    black: "black",
    red: "red",
    green: "green",
    yellow: "yellow",
    blue: "blue",
    magenta: "magenta",
    cyan: "cyan",
    white: "white",
    blackbright: "blackBright",
    redbright: "redBright",
    greenbright: "greenBright",
    yellowbright: "yellowBright",
    bluebright: "blueBright",
    magentabright: "magentaBright",
    cyanbright: "cyanBright",
    whitebright: "whiteBright"
  };
  var GRADIENTCOLORS = {
    transparent: "transparent",
    black: "black",
    red: "red",
    green: "green",
    yellow: "yellow",
    blue: "blue",
    magenta: "magenta",
    cyan: "cyan",
    white: "white"
  };
  var GRADIENTS = {
    lgbt: ["#750787", "#004dff", "#008026", "#ffed00", "#ff8c00", "#e40303"],
    lgbtq: ["#750787", "#004dff", "#008026", "#ffed00", "#ff8c00", "#e40303"],
    pride: ["#750787", "#004dff", "#008026", "#ffed00", "#ff8c00", "#e40303"],
    agender: ["#000000", "#b9b9b9", "#ffffff", "#b8f483", "#ffffff", "#b9b9b9", "#000000"],
    aromantic: ["#3da542", "#a7d379", "#ffffff", "#a9a9a9", "#000000"],
    asexual: ["#000000", "#a3a3a3", "#ffffff", "#800080"],
    bisexual: ["#d60270", "#d60270", "#9b4f96", "#0038a8", "#0038a8"],
    genderfluid: ["#ff75a2", "#ffffff", "#be18d6", "#000000", "#333ebd"],
    genderqueer: ["#b57edc", "#ffffff", "#4a8123"],
    intersex: ["#ffd800", "#ffd800", "#7902aa", "#ffd800", "#ffd800"],
    lesbian: ["#d52d00", "#ff9a56", "#ffffff", "#d362a4", "#a30262"],
    nonbinary: ["#fcf434", "#ffffff", "#9c5cd4", "#2c2c2c"],
    pansexual: ["#ff218c", "#ffd800", "#21b1ff"],
    polysexual: ["#f61cb9", "#07d569", "#1c92f6"],
    transgender: ["#5bcefa", "#f5a9b8", "#ffffff", "#f5a9b8", "#5bcefa"]
  };
  var ALIGNMENT = ["left", "center", "right", "top", "bottom"];
  var FONTFACES = {
    console: "console",
    block: "block",
    simpleblock: "simpleBlock",
    simple: "simple",
    "3d": "3d",
    simple3d: "simple3d",
    chrome: "chrome",
    huge: "huge",
    shade: "shade",
    slick: "slick",
    grid: "grid",
    pallet: "pallet",
    tiny: "tiny"
  };
  var CLIOPTIONS = {
    "--version": {
      description: "Use to display the version of cfonts",
      example: "--version",
      short: "-v",
      default: false
    },
    "--help": {
      description: "Use to display this help",
      example: "--help",
      short: "-h",
      default: false
    },
    "--font": {
      description: "Use to define the font face",
      example: `--font block ${Chalk.green(`( ${Object.keys(FONTFACES).map((font) => FONTFACES[font]).join(", ")} )`)}`,
      short: "-f",
      options: Object.keys(FONTFACES).map((color) => FONTFACES[color]),
      default: "block"
    },
    "--colors": {
      description: "Use to define the font color",
      example: `--colors red ${Chalk.green(`( ${Object.keys(COLORS).map((color) => COLORS[color]).join(", ")}, #ff8800, hex-colors etc... )`)}`,
      short: "-c",
      options: true,
      default: "system"
    },
    "--background": {
      description: "Use to define background color",
      example: `--background blue ${Chalk.green(`( ${Object.keys(BGCOLORS).map((bgcolor) => BGCOLORS[bgcolor]).join(", ")} )`)}`,
      short: "-b",
      options: Object.keys(BGCOLORS).map((color) => BGCOLORS[color]),
      default: "transparent"
    },
    "--align": {
      description: "Use to align your text output",
      example: `--align ${Chalk.green(`( ${ALIGNMENT.join(", ")} )`)}`,
      short: "-a",
      options: ALIGNMENT,
      default: "left"
    },
    "--letter-spacing": {
      description: "Use to define your letter spacing",
      example: "--letter-spacing 2",
      short: "-l",
      options: true,
      default: void 0
    },
    "--line-height": {
      description: "Use to define your line height",
      example: "--line-height 5",
      short: "-z",
      options: true,
      default: void 0
    },
    "--spaceless": {
      description: "Use to disable the padding around your output",
      example: "--spaceless",
      short: "-s",
      default: false
    },
    "--max-length": {
      description: "Use to define the amount of maximum characters per line",
      example: "--max-length 10",
      short: "-m",
      options: true,
      default: 0
    },
    "--gradient": {
      description: "Use to define a start and end color of a gradient",
      example: "--gradient red,blue",
      short: "-g",
      options: true,
      default: false
    },
    "--independent-gradient": {
      description: "Use to define that a gradient is applied independently for each line",
      example: "--gradient red,blue --independent-gradient",
      short: "-i",
      default: false
    },
    "--transition-gradient": {
      description: "Use to define that a gradient is a transition between the colors",
      example: "--gradient red,blue,green --transition-gradient",
      short: "-t",
      default: false
    },
    "--env": {
      description: "Use to define what environment you run CFonts in.",
      example: `--env ${Chalk.green('"node", "browser"')}`,
      short: "-e",
      options: true,
      default: "node"
    },
    "--debug": {
      description: "Use to enable debug mode",
      example: "--debug",
      short: "-d",
      default: false
    },
    "--debug-level": {
      description: "Use to define the debug level. The higher, the less debug infos",
      example: "--debug-level 2",
      short: "-x",
      options: true,
      default: 1
    }
  };
  var PACKAGE = require_package();
  var HEXTEST = RegExp("^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$");
  module2.exports = exports2 = {
    CHARS,
    COLORS,
    BGCOLORS,
    GRADIENTCOLORS,
    GRADIENTS,
    ALIGNMENT,
    FONTFACES,
    CLIOPTIONS,
    PACKAGE,
    HEXTEST
  };
});

// node_modules/cfonts/lib/DisplayVersion.js
var require_DisplayVersion = __commonJS((exports2, module2) => {
  /***************************************************************************************************************************************************************
   *
   * cfonts
   *
   * Sexy fonts for the console. (CLI output)
   *
   * @license     https://github.com/dominikwilkowski/cfonts/blob/released/LICENSE  GNU GPLv2
   * @author      Dominik Wilkowski  hi@dominik-wilkowski.com
   * @repository  https://github.com/dominikwilkowski/cfonts
   *
   * DisplayVersion
   *   Display the version of this package
   *
   **************************************************************************************************************************************************************/
  "use strict";
  var {
    PACKAGE
  } = require_constants();
  var DisplayVersion = () => {
    console.log(PACKAGE.version);
  };
  module2.exports = exports2 = {
    DisplayVersion
  };
});

// node_modules/cfonts/lib/Debugging.js
var require_Debugging = __commonJS((exports2, module2) => {
  /***************************************************************************************************************************************************************
   *
   * cfonts
   *
   * Sexy fonts for the console. (CLI output)
   *
   * @license     https://github.com/dominikwilkowski/cfonts/blob/released/LICENSE  GNU GPLv2
   * @author      Dominik Wilkowski  hi@dominik-wilkowski.com
   * @repository  https://github.com/dominikwilkowski/cfonts
   *
   * Debugging
   *   Debugging prettiness
   *
   **************************************************************************************************************************************************************/
  "use strict";
  var {
    Chalk
  } = require_Chalk();
  var DEBUG = {
    store: {
      enabled: false,
      level: 2
    },
    set enabled(value) {
      this.store.enabled = value;
    },
    get enabled() {
      return this.store.enabled;
    },
    set level(value) {
      this.store.level = value;
    },
    get level() {
      return this.store.level;
    }
  };
  var Debugging = {
    headline: (text, level = 99, debug = DEBUG.enabled, debuglevel = DEBUG.level) => {
      if (debug && level >= debuglevel) {
        console.log(Chalk.bgWhite(`
${Chalk.bold(" \u2611  ")} ${text}`));
      }
    },
    report: (text, level = 99, debug = DEBUG.enabled, debuglevel = DEBUG.level) => {
      if (debug && level >= debuglevel) {
        console.log(Chalk.bgWhite(`
${Chalk.bold.green(" \u2611  ")} ${Chalk.black(`${text} `)}`));
      }
    },
    error: (text, level = 99, debug = DEBUG.enabled, debuglevel = DEBUG.level) => {
      if (debug && level >= debuglevel) {
        console.error(Chalk.bgWhite(`
${Chalk.red(" \u2612  ")} ${Chalk.black(`${text} `)}`));
      }
    }
  };
  module2.exports = exports2 = {
    DEBUG,
    Debugging
  };
});

// node_modules/cfonts/lib/UpperCaseFirst.js
var require_UpperCaseFirst = __commonJS((exports2, module2) => {
  /***************************************************************************************************************************************************************
   *
   * cfonts
   *
   * Sexy fonts for the console. (CLI output)
   *
   * @license     https://github.com/dominikwilkowski/cfonts/blob/released/LICENSE  GNU GPLv2
   * @author      Dominik Wilkowski  hi@dominik-wilkowski.com
   * @repository  https://github.com/dominikwilkowski/cfonts
   *
   * UpperCaseFirst
   *   Upper case the first character of an input string
   *
   **************************************************************************************************************************************************************/
  "use strict";
  var UpperCaseFirst = (input) => typeof input === "string" ? input.charAt(0).toUpperCase() + input.substr(1) : input;
  module2.exports = exports2 = {
    UpperCaseFirst
  };
});

// node_modules/cfonts/lib/Options.js
var require_Options = __commonJS((exports2, module2) => {
  /***************************************************************************************************************************************************************
   *
   * cfonts
   *
   * Sexy fonts for the console. (CLI output)
   *
   * @license     https://github.com/dominikwilkowski/cfonts/blob/released/LICENSE  GNU GPLv2
   * @author      Dominik Wilkowski  hi@dominik-wilkowski.com
   * @repository  https://github.com/dominikwilkowski/cfonts
   *
   * Options
   *   Merge user settings with default options
   *
   **************************************************************************************************************************************************************/
  "use strict";
  var {
    COLORS,
    BGCOLORS,
    FONTFACES
  } = require_constants();
  var Options = {
    store: {},
    reset() {
      const defaults = {
        font: "block",
        align: "left",
        colors: [],
        background: "transparent",
        letterSpacing: 1,
        lineHeight: 1,
        space: true,
        maxLength: 0,
        gradient: false,
        independentGradient: false,
        transitionGradient: false,
        env: "node"
      };
      this.store = {
        ...defaults
      };
    },
    get get() {
      return this.store;
    },
    set set({
      font = "",
      align,
      colors,
      background,
      backgroundColor,
      letterSpacing,
      lineHeight,
      space,
      maxLength,
      gradient,
      independentGradient,
      transitionGradient,
      env,
      allowedColors = COLORS,
      allowedBG = BGCOLORS,
      allowedFont = FONTFACES
    }) {
      this.store.font = font !== "" ? allowedFont[font.toLowerCase()] || font : this.store.font;
      this.store.align = align !== void 0 ? align.toLowerCase() : this.store.align;
      this.store.colors = Array.isArray(colors) ? colors.map((color) => allowedColors[color.toLowerCase()] || color) : this.store.colors;
      const bg = backgroundColor || background;
      this.store.background = bg !== void 0 ? allowedBG[bg.toLowerCase()] || bg : this.store.background;
      this.store.letterSpacing = letterSpacing !== void 0 ? parseInt(letterSpacing.toString()) : font.toLowerCase() === "console" ? 0 : this.store.letterSpacing;
      this.store.lineHeight = lineHeight !== void 0 ? parseInt(lineHeight.toString()) : font.toLowerCase() === "console" ? 0 : this.store.lineHeight;
      this.store.space = typeof space === "boolean" ? space : this.store.space;
      this.store.maxLength = maxLength !== void 0 ? maxLength : this.store.maxLength;
      this.store.gradient = gradient !== void 0 && typeof gradient !== "boolean" ? Array.isArray(gradient) ? gradient : gradient.split(",") : gradient === false ? false : this.store.gradient;
      this.store.independentGradient = independentGradient !== void 0 ? independentGradient : this.store.independentGradient;
      this.store.transitionGradient = transitionGradient !== void 0 ? transitionGradient : this.store.transitionGradient;
      this.store.env = env !== void 0 ? env : this.store.env;
    }
  };
  module2.exports = exports2 = {
    Options
  };
});

// node_modules/cfonts/lib/Color.js
var require_Color = __commonJS((exports2, module2) => {
  /***************************************************************************************************************************************************************
   *
   * cfonts
   *
   * Sexy fonts for the console. (CLI output)
   *
   * @license     https://github.com/dominikwilkowski/cfonts/blob/released/LICENSE  GNU GPLv2
   * @author      Dominik Wilkowski  hi@dominik-wilkowski.com
   * @repository  https://github.com/dominikwilkowski/cfonts
   *
   * Color
   *   Abstraction for coloring hex-, keyword- and background-colors
   *
   **************************************************************************************************************************************************************/
  "use strict";
  var {
    UpperCaseFirst
  } = require_UpperCaseFirst();
  var {
    Debugging
  } = require_Debugging();
  var {
    HEXTEST
  } = require_constants();
  var {
    Options
  } = require_Options();
  var {
    Chalk
  } = require_Chalk();
  var Color = (color, bg = false) => {
    if (color === "system" || process.env.FORCE_COLOR == "0") {
      return {
        open: "",
        close: ""
      };
    }
    const OPTIONS = Options.get;
    if (OPTIONS.env === "node") {
      if (color.includes("Bright")) {
        if (bg) {
          color = `bg${UpperCaseFirst(color)}`;
        }
        return {
          open: Chalk[color]._styler.open,
          close: Chalk[color]._styler.close
        };
      }
      const kind = HEXTEST.test(color) ? "hex" : `${bg ? "bgK" : "k"}eyword`;
      let styles;
      try {
        styles = Chalk[kind](color)._styler;
      } catch (error) {
        Debugging.error(`The color ${Chalk.yellow(color)} could not be found. Sorry about this.`);
        return {
          open: "",
          close: ""
        };
      }
      return {
        open: styles.open,
        close: styles.close
      };
    } else {
      const COLORS = {
        black: "#000",
        red: "#ea3223",
        green: "#377d22",
        yellow: "#fffd54",
        blue: "#0020f5",
        magenta: "#ea3df7",
        cyan: "#74fbfd",
        white: "#fff",
        gray: "#808080",
        redbright: "#ee776d",
        greenbright: "#8cf57b",
        yellowbright: "#fffb7f",
        bluebright: "#6974f6",
        magentabright: "#ee82f8",
        cyanbright: "#8dfafd",
        whitebright: "#fff"
      };
      if (!HEXTEST.test(color)) {
        color = COLORS[color.toLowerCase()];
      }
      if (bg) {
        return {
          open: color,
          close: ""
        };
      }
      return {
        open: `<span style="color:${color}">`,
        close: "</span>"
      };
    }
  };
  module2.exports = exports2 = {
    Color
  };
});

// node_modules/cfonts/lib/Colorize.js
var require_Colorize = __commonJS((exports2, module2) => {
  /***************************************************************************************************************************************************************
   *
   * cfonts
   *
   * Sexy fonts for the console. (CLI output)
   *
   * @license     https://github.com/dominikwilkowski/cfonts/blob/released/LICENSE  GNU GPLv2
   * @author      Dominik Wilkowski  hi@dominik-wilkowski.com
   * @repository  https://github.com/dominikwilkowski/cfonts
   *
   * Colorize
   *   Replace placeholders with color information
   *
   **************************************************************************************************************************************************************/
  "use strict";
  var {
    Debugging
  } = require_Debugging();
  var {
    Color
  } = require_Color();
  var Colorize = (character, fontColors, optionColors) => {
    Debugging.report(`Running Colorize`, 1);
    let candyColors = [
      "red",
      "green",
      "yellow",
      "magenta",
      "cyan",
      "redBright",
      "greenBright",
      "yellowBright",
      "blueBright",
      "magentaBright",
      "cyanBright"
    ];
    if (character !== void 0) {
      if (fontColors > 1) {
        for (let i = 0; i < fontColors; i++) {
          const color = optionColors[i] === "candy" ? candyColors[Math.floor(Math.random() * candyColors.length)] : optionColors[i] || "system";
          const {
            open: openNew,
            close: closeNew
          } = Color(color);
          const open = new RegExp(`<c${i + 1}>`, "g");
          const close = new RegExp(`</c${i + 1}>`, "g");
          character = character.replace(open, openNew);
          character = character.replace(close, closeNew);
        }
      }
      if (fontColors === 1) {
        const color = optionColors[0] === "candy" ? candyColors[Math.floor(Math.random() * candyColors.length)] : optionColors[0] || "system";
        const {
          open: openNew,
          close: closeNew
        } = Color(color);
        character = openNew + character + closeNew;
      }
    }
    return character;
  };
  module2.exports = exports2 = {
    Colorize
  };
});

// node_modules/cfonts/lib/AddLetterSpacing.js
var require_AddLetterSpacing = __commonJS((exports2, module2) => {
  /***************************************************************************************************************************************************************
   *
   * cfonts
   *
   * Sexy fonts for the console. (CLI output)
   *
   * @license     https://github.com/dominikwilkowski/cfonts/blob/released/LICENSE  GNU GPLv2
   * @author      Dominik Wilkowski  hi@dominik-wilkowski.com
   * @repository  https://github.com/dominikwilkowski/cfonts
   *
   * AddLetterSpacing
   *   Add letter spacing for the next character
   *
   **************************************************************************************************************************************************************/
  "use strict";
  var {
    Debugging
  } = require_Debugging();
  var {
    Colorize
  } = require_Colorize();
  var AddLetterSpacing = (output, fontLines, fontLetterspace, fontColors, colors, letterSpacing) => {
    Debugging.report(`Running AddLetterSpacing`, 1);
    let lines = output.length - fontLines;
    for (let i = lines; i < output.length; i++) {
      let index = i - lines;
      let space = Colorize(fontLetterspace[index], fontColors, colors);
      if (space.length === 0 && letterSpacing > 0) {
        Debugging.report(`AddLetterSpacing: Adding space to letter spacing`, 1);
        space = " ";
      }
      output[i] += space.repeat(letterSpacing);
    }
    return output;
  };
  module2.exports = exports2 = {
    AddLetterSpacing
  };
});

// node_modules/kind-of/index.js
var require_kind_of = __commonJS((exports2, module2) => {
  var toString = Object.prototype.toString;
  module2.exports = function kindOf(val) {
    if (val === void 0)
      return "undefined";
    if (val === null)
      return "null";
    var type = typeof val;
    if (type === "boolean")
      return "boolean";
    if (type === "string")
      return "string";
    if (type === "number")
      return "number";
    if (type === "symbol")
      return "symbol";
    if (type === "function") {
      return isGeneratorFn(val) ? "generatorfunction" : "function";
    }
    if (isArray(val))
      return "array";
    if (isBuffer(val))
      return "buffer";
    if (isArguments(val))
      return "arguments";
    if (isDate(val))
      return "date";
    if (isError(val))
      return "error";
    if (isRegexp(val))
      return "regexp";
    switch (ctorName(val)) {
      case "Symbol":
        return "symbol";
      case "Promise":
        return "promise";
      case "WeakMap":
        return "weakmap";
      case "WeakSet":
        return "weakset";
      case "Map":
        return "map";
      case "Set":
        return "set";
      case "Int8Array":
        return "int8array";
      case "Uint8Array":
        return "uint8array";
      case "Uint8ClampedArray":
        return "uint8clampedarray";
      case "Int16Array":
        return "int16array";
      case "Uint16Array":
        return "uint16array";
      case "Int32Array":
        return "int32array";
      case "Uint32Array":
        return "uint32array";
      case "Float32Array":
        return "float32array";
      case "Float64Array":
        return "float64array";
    }
    if (isGeneratorObj(val)) {
      return "generator";
    }
    type = toString.call(val);
    switch (type) {
      case "[object Object]":
        return "object";
      case "[object Map Iterator]":
        return "mapiterator";
      case "[object Set Iterator]":
        return "setiterator";
      case "[object String Iterator]":
        return "stringiterator";
      case "[object Array Iterator]":
        return "arrayiterator";
    }
    return type.slice(8, -1).toLowerCase().replace(/\s/g, "");
  };
  function ctorName(val) {
    return typeof val.constructor === "function" ? val.constructor.name : null;
  }
  function isArray(val) {
    if (Array.isArray)
      return Array.isArray(val);
    return val instanceof Array;
  }
  function isError(val) {
    return val instanceof Error || typeof val.message === "string" && val.constructor && typeof val.constructor.stackTraceLimit === "number";
  }
  function isDate(val) {
    if (val instanceof Date)
      return true;
    return typeof val.toDateString === "function" && typeof val.getDate === "function" && typeof val.setDate === "function";
  }
  function isRegexp(val) {
    if (val instanceof RegExp)
      return true;
    return typeof val.flags === "string" && typeof val.ignoreCase === "boolean" && typeof val.multiline === "boolean" && typeof val.global === "boolean";
  }
  function isGeneratorFn(name, val) {
    return ctorName(name) === "GeneratorFunction";
  }
  function isGeneratorObj(val) {
    return typeof val.throw === "function" && typeof val.return === "function" && typeof val.next === "function";
  }
  function isArguments(val) {
    try {
      if (typeof val.length === "number" && typeof val.callee === "function") {
        return true;
      }
    } catch (err) {
      if (err.message.indexOf("callee") !== -1) {
        return true;
      }
    }
    return false;
  }
  function isBuffer(val) {
    if (val.constructor && typeof val.constructor.isBuffer === "function") {
      return val.constructor.isBuffer(val);
    }
    return false;
  }
});

// node_modules/is-accessor-descriptor/index.js
var require_is_accessor_descriptor = __commonJS((exports2, module2) => {
  /*!
   * is-accessor-descriptor <https://github.com/jonschlinkert/is-accessor-descriptor>
   *
   * Copyright (c) 2015-2017, Jon Schlinkert.
   * Released under the MIT License.
   */
  "use strict";
  var typeOf = require_kind_of();
  var accessor = {
    get: "function",
    set: "function",
    configurable: "boolean",
    enumerable: "boolean"
  };
  function isAccessorDescriptor(obj, prop) {
    if (typeof prop === "string") {
      var val = Object.getOwnPropertyDescriptor(obj, prop);
      return typeof val !== "undefined";
    }
    if (typeOf(obj) !== "object") {
      return false;
    }
    if (has(obj, "value") || has(obj, "writable")) {
      return false;
    }
    if (!has(obj, "get") || typeof obj.get !== "function") {
      return false;
    }
    if (has(obj, "set") && typeof obj[key] !== "function" && typeof obj[key] !== "undefined") {
      return false;
    }
    for (var key in obj) {
      if (!accessor.hasOwnProperty(key)) {
        continue;
      }
      if (typeOf(obj[key]) === accessor[key]) {
        continue;
      }
      if (typeof obj[key] !== "undefined") {
        return false;
      }
    }
    return true;
  }
  function has(obj, key) {
    return {}.hasOwnProperty.call(obj, key);
  }
  module2.exports = isAccessorDescriptor;
});

// node_modules/is-data-descriptor/index.js
var require_is_data_descriptor = __commonJS((exports2, module2) => {
  /*!
   * is-data-descriptor <https://github.com/jonschlinkert/is-data-descriptor>
   *
   * Copyright (c) 2015-2017, Jon Schlinkert.
   * Released under the MIT License.
   */
  "use strict";
  var typeOf = require_kind_of();
  module2.exports = function isDataDescriptor(obj, prop) {
    var data = {
      configurable: "boolean",
      enumerable: "boolean",
      writable: "boolean"
    };
    if (typeOf(obj) !== "object") {
      return false;
    }
    if (typeof prop === "string") {
      var val = Object.getOwnPropertyDescriptor(obj, prop);
      return typeof val !== "undefined";
    }
    if (!("value" in obj) && !("writable" in obj)) {
      return false;
    }
    for (var key in obj) {
      if (key === "value")
        continue;
      if (!data.hasOwnProperty(key)) {
        continue;
      }
      if (typeOf(obj[key]) === data[key]) {
        continue;
      }
      if (typeof obj[key] !== "undefined") {
        return false;
      }
    }
    return true;
  };
});

// node_modules/is-descriptor/index.js
var require_is_descriptor = __commonJS((exports2, module2) => {
  /*!
   * is-descriptor <https://github.com/jonschlinkert/is-descriptor>
   *
   * Copyright (c) 2015-2017, Jon Schlinkert.
   * Released under the MIT License.
   */
  "use strict";
  var typeOf = require_kind_of();
  var isAccessor = require_is_accessor_descriptor();
  var isData = require_is_data_descriptor();
  module2.exports = function isDescriptor(obj, key) {
    if (typeOf(obj) !== "object") {
      return false;
    }
    if ("get" in obj) {
      return isAccessor(obj, key);
    }
    return isData(obj, key);
  };
});

// node_modules/define-property/index.js
var require_define_property = __commonJS((exports2, module2) => {
  /*!
   * define-property <https://github.com/jonschlinkert/define-property>
   *
   * Copyright (c) 2015, 2017, Jon Schlinkert.
   * Released under the MIT License.
   */
  "use strict";
  var isDescriptor = require_is_descriptor();
  module2.exports = function defineProperty(obj, prop, val) {
    if (typeof obj !== "object" && typeof obj !== "function") {
      throw new TypeError("expected an object or function.");
    }
    if (typeof prop !== "string") {
      throw new TypeError("expected `prop` to be a string.");
    }
    if (isDescriptor(val) && ("set" in val || "get" in val)) {
      return Object.defineProperty(obj, prop, val);
    }
    return Object.defineProperty(obj, prop, {
      configurable: true,
      enumerable: false,
      writable: true,
      value: val
    });
  };
});

// node_modules/is-buffer/index.js
var require_is_buffer = __commonJS((exports2, module2) => {
  /*!
   * Determine if an object is a Buffer
   *
   * @author   Feross Aboukhadijeh <https://feross.org>
   * @license  MIT
   */
  module2.exports = function(obj) {
    return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer);
  };
  function isBuffer(obj) {
    return !!obj.constructor && typeof obj.constructor.isBuffer === "function" && obj.constructor.isBuffer(obj);
  }
  function isSlowBuffer(obj) {
    return typeof obj.readFloatLE === "function" && typeof obj.slice === "function" && isBuffer(obj.slice(0, 0));
  }
});

// node_modules/is-number/node_modules/kind-of/index.js
var require_kind_of2 = __commonJS((exports2, module2) => {
  var isBuffer = require_is_buffer();
  var toString = Object.prototype.toString;
  module2.exports = function kindOf(val) {
    if (typeof val === "undefined") {
      return "undefined";
    }
    if (val === null) {
      return "null";
    }
    if (val === true || val === false || val instanceof Boolean) {
      return "boolean";
    }
    if (typeof val === "string" || val instanceof String) {
      return "string";
    }
    if (typeof val === "number" || val instanceof Number) {
      return "number";
    }
    if (typeof val === "function" || val instanceof Function) {
      return "function";
    }
    if (typeof Array.isArray !== "undefined" && Array.isArray(val)) {
      return "array";
    }
    if (val instanceof RegExp) {
      return "regexp";
    }
    if (val instanceof Date) {
      return "date";
    }
    var type = toString.call(val);
    if (type === "[object RegExp]") {
      return "regexp";
    }
    if (type === "[object Date]") {
      return "date";
    }
    if (type === "[object Arguments]") {
      return "arguments";
    }
    if (type === "[object Error]") {
      return "error";
    }
    if (isBuffer(val)) {
      return "buffer";
    }
    if (type === "[object Set]") {
      return "set";
    }
    if (type === "[object WeakSet]") {
      return "weakset";
    }
    if (type === "[object Map]") {
      return "map";
    }
    if (type === "[object WeakMap]") {
      return "weakmap";
    }
    if (type === "[object Symbol]") {
      return "symbol";
    }
    if (type === "[object Int8Array]") {
      return "int8array";
    }
    if (type === "[object Uint8Array]") {
      return "uint8array";
    }
    if (type === "[object Uint8ClampedArray]") {
      return "uint8clampedarray";
    }
    if (type === "[object Int16Array]") {
      return "int16array";
    }
    if (type === "[object Uint16Array]") {
      return "uint16array";
    }
    if (type === "[object Int32Array]") {
      return "int32array";
    }
    if (type === "[object Uint32Array]") {
      return "uint32array";
    }
    if (type === "[object Float32Array]") {
      return "float32array";
    }
    if (type === "[object Float64Array]") {
      return "float64array";
    }
    return "object";
  };
});

// node_modules/is-number/index.js
var require_is_number = __commonJS((exports2, module2) => {
  /*!
   * is-number <https://github.com/jonschlinkert/is-number>
   *
   * Copyright (c) 2014-2015, Jon Schlinkert.
   * Licensed under the MIT License.
   */
  "use strict";
  var typeOf = require_kind_of2();
  module2.exports = function isNumber(num) {
    var type = typeOf(num);
    if (type === "string") {
      if (!num.trim())
        return false;
    } else if (type !== "number") {
      return false;
    }
    return num - num + 1 >= 0;
  };
});

// node_modules/window-size/utils.js
var require_utils = __commonJS((exports2, module2) => {
  /*!
   * window-size <https://github.com/jonschlinkert/window-size>
   *
   * Copyright (c) 2014-2017, Jon Schlinkert.
   * Released under the MIT License.
   */
  "use strict";
  var os = require("os");
  var isNumber = require_is_number();
  var cp = require("child_process");
  function windowSize(options) {
    options = options || {};
    return streamSize(options, "stdout") || streamSize(options, "stderr") || envSize() || ttySize(options);
  }
  function streamSize(options, name) {
    var stream = process && process[name] || options[name];
    var size;
    if (!stream)
      return;
    if (typeof stream.getWindowSize === "function") {
      size = stream.getWindowSize();
      if (isSize(size)) {
        return {
          width: size[0],
          height: size[1],
          type: name
        };
      }
    }
    size = [stream.columns, stream.rows];
    if (isSize(size)) {
      return {
        width: Number(size[0]),
        height: Number(size[1]),
        type: name
      };
    }
  }
  function envSize() {
    if (process && process.env) {
      var size = [process.env.COLUMNS, process.env.ROWS];
      if (isSize(size)) {
        return {
          width: Number(size[0]),
          height: Number(size[1]),
          type: "process.env"
        };
      }
    }
  }
  function ttySize(options, stdout) {
    var tty = options.tty || require("tty");
    if (tty && typeof tty.getWindowSize === "function") {
      var size = tty.getWindowSize(stdout);
      if (isSize(size)) {
        return {
          width: Number(size[1]),
          height: Number(size[0]),
          type: "tty"
        };
      }
    }
  }
  function winSize() {
    if (os.release().startsWith("10")) {
      var cmd = "wmic path Win32_VideoController get CurrentHorizontalResolution,CurrentVerticalResolution";
      var numberPattern = /\d+/g;
      var code = cp.execSync(cmd).toString();
      var size = code.match(numberPattern);
      if (isSize(size)) {
        return {
          width: Number(size[0]),
          height: Number(size[1]),
          type: "windows"
        };
      }
    }
  }
  function tputSize() {
    try {
      var buf = cp.execSync("tput cols && tput lines", {stdio: ["ignore", "pipe", process.stderr]});
      var size = buf.toString().trim().split("\n");
      if (isSize(size)) {
        return {
          width: Number(size[0]),
          height: Number(size[1]),
          type: "tput"
        };
      }
    } catch (err) {
    }
  }
  function isSize(size) {
    return Array.isArray(size) && isNumber(size[0]) && isNumber(size[1]);
  }
  module2.exports = {
    get: windowSize,
    env: envSize,
    tty: ttySize,
    tput: tputSize,
    win: winSize
  };
});

// node_modules/window-size/index.js
var require_window_size = __commonJS((exports2, module2) => {
  /*!
   * window-size <https://github.com/jonschlinkert/window-size>
   *
   * Copyright (c) 2014-2017, Jon Schlinkert.
   * Released under the MIT License.
   */
  "use strict";
  var define2 = require_define_property();
  var utils = require_utils();
  module2.exports = utils.get();
  if (module2.exports) {
    define2(module2.exports, "get", utils.get);
    define2(module2.exports, "env", utils.env);
    define2(module2.exports, "tty", utils.tty);
    define2(module2.exports, "tput", utils.tput);
    define2(module2.exports, "win", utils.win);
  }
});

// node_modules/cfonts/lib/Size.js
var require_Size = __commonJS((exports2, module2) => {
  /***************************************************************************************************************************************************************
   *
   * cfonts
   *
   * Sexy fonts for the console. (CLI output)
   *
   * @license     https://github.com/dominikwilkowski/cfonts/blob/released/LICENSE  GNU GPLv2
   * @author      Dominik Wilkowski  hi@dominik-wilkowski.com
   * @repository  https://github.com/dominikwilkowski/cfonts
   *
   * Size
   *   Abstraction for windows size
   *
   **************************************************************************************************************************************************************/
  "use strict";
  var WinSize = require_window_size();
  var Size = {
    width: WinSize ? WinSize.width > 0 ? WinSize.width : 80 : 80,
    height: WinSize ? WinSize.height > 0 ? WinSize.height : 24 : 24
  };
  module2.exports = exports2 = {
    Size
  };
});

// node_modules/cfonts/lib/AlignText.js
var require_AlignText = __commonJS((exports2, module2) => {
  /***************************************************************************************************************************************************************
   *
   * cfonts
   *
   * Sexy fonts for the console. (CLI output)
   *
   * @license     https://github.com/dominikwilkowski/cfonts/blob/released/LICENSE  GNU GPLv2
   * @author      Dominik Wilkowski  hi@dominik-wilkowski.com
   * @repository  https://github.com/dominikwilkowski/cfonts
   *
   * AlignText
   *   Calculate the spaces to be added to the left of each line to align them either center or right
   *
   **************************************************************************************************************************************************************/
  "use strict";
  var {
    Debugging
  } = require_Debugging();
  var {
    Size
  } = require_Size();
  var AlignText = (output, lineLength, characterLines, align, size = Size) => {
    Debugging.report(`Running AlignText`, 1);
    let space = 0;
    if (align === "center") {
      space = Math.floor((size.width - lineLength) / 2);
      Debugging.report(`AlignText: Center lineLength: ${lineLength}, size.width: ${size.width}, space: ${space}`, 2);
    }
    if (align === "right") {
      space = size.width - lineLength;
      Debugging.report(`AlignText: Right lineLength: ${lineLength}, size.width: ${size.width}, space: ${space}`, 2);
    }
    if (space > 0) {
      let lines = output.length - characterLines;
      const spaces = " ".repeat(space);
      for (let i = lines; i < output.length; i++) {
        output[i] = spaces + output[i];
      }
    }
    return output;
  };
  module2.exports = exports2 = {
    AlignText
  };
});

// node_modules/cfonts/lib/RenderConsole.js
var require_RenderConsole = __commonJS((exports2, module2) => {
  /***************************************************************************************************************************************************************
   *
   * cfonts
   *
   * Sexy fonts for the console. (CLI output)
   *
   * @license     https://github.com/dominikwilkowski/cfonts/blob/released/LICENSE  GNU GPLv2
   * @author      Dominik Wilkowski  hi@dominik-wilkowski.com
   * @repository  https://github.com/dominikwilkowski/cfonts
   *
   * RenderConsole
   *   Render our input with the console font
   *
   **************************************************************************************************************************************************************/
  "use strict";
  var {
    AlignText
  } = require_AlignText();
  var {
    Colorize
  } = require_Colorize();
  var {
    Size
  } = require_Size();
  var RenderConsole = (INPUT, OPTIONS, size = Size) => {
    const width = OPTIONS.maxLength < size.width && OPTIONS.maxLength !== 0 ? OPTIONS.maxLength : size.width;
    let lines = 0;
    let output = [];
    let i = 0;
    let space = "";
    if (OPTIONS.letterSpacing > 0) {
      space = " ".repeat(OPTIONS.letterSpacing);
    }
    const outputLines = INPUT.replace(/(?:\r\n|\r|\n)/g, "|").split("|").map((line) => line.split("").join(space));
    while (i < outputLines.length) {
      let line = outputLines[i];
      if (line.length > width) {
        outputLines[i] = line.slice(0, width);
        outputLines.splice(i + 1, 0, line.slice(width));
        line = outputLines[i];
      }
      if (OPTIONS.colors[0] === "candy") {
        output.push(line.split("").map((character) => Colorize(character, 1, OPTIONS.colors)).join(""));
      } else {
        output.push(Colorize(line, 1, OPTIONS.colors));
      }
      if (OPTIONS.env !== "browser") {
        output = AlignText(output, line.length, 1, OPTIONS.align, size);
      }
      if (i !== outputLines.length - 1) {
        output = [...output, ...Array(OPTIONS.lineHeight).fill("")];
      }
      lines++;
      i++;
    }
    return {
      output,
      lines
    };
  };
  module2.exports = exports2 = {
    RenderConsole
  };
});

// node_modules/cfonts/lib/GetFirstCharacterPosition.js
var require_GetFirstCharacterPosition = __commonJS((exports2, module2) => {
  /***************************************************************************************************************************************************************
   *
   * cfonts
   *
   * Sexy fonts for the console. (CLI output)
   *
   * @license     https://github.com/dominikwilkowski/cfonts/blob/released/LICENSE  GNU GPLv2
   * @author      Dominik Wilkowski  hi@dominik-wilkowski.com
   * @repository  https://github.com/dominikwilkowski/cfonts
   *
   * GetFirstCharacterPosition
   *   Get the position of the first character out of all strings inside an array
   *
   **************************************************************************************************************************************************************/
  "use strict";
  function GetFirstCharacterPosition(lines) {
    const earliest = lines.reduce((prevLine, line) => line.length - line.trimStart().length < prevLine.length - prevLine.trimStart().length && line !== "" ? line : prevLine, lines[0]);
    return earliest.length - earliest.trimStart().length;
  }
  module2.exports = exports2 = {
    GetFirstCharacterPosition
  };
});

// node_modules/cfonts/lib/GetLongestLine.js
var require_GetLongestLine = __commonJS((exports2, module2) => {
  /***************************************************************************************************************************************************************
   *
   * cfonts
   *
   * Sexy fonts for the console. (CLI output)
   *
   * @license     https://github.com/dominikwilkowski/cfonts/blob/released/LICENSE  GNU GPLv2
   * @author      Dominik Wilkowski  hi@dominik-wilkowski.com
   * @repository  https://github.com/dominikwilkowski/cfonts
   *
   * GetLongestLine
   *   Return the longest line of an Array
   *
   **************************************************************************************************************************************************************/
  "use strict";
  var GetLongestLine = (lines) => lines.reduce((longestLine, line) => line.length > longestLine.length && line.length !== 0 ? line : longestLine, "");
  module2.exports = exports2 = {
    GetLongestLine
  };
});

// node_modules/cfonts/lib/Gradient.js
var require_Gradient = __commonJS((exports2, module2) => {
  /***************************************************************************************************************************************************************
   *
   * cfonts
   *
   * Sexy fonts for the console. (CLI output)
   *
   * @license     https://github.com/dominikwilkowski/cfonts/blob/released/LICENSE  GNU GPLv2
   * @author      Dominik Wilkowski  hi@dominik-wilkowski.com
   * @repository  https://github.com/dominikwilkowski/cfonts
   *
   * Rgb2hsv              - Converts an RGB color value to HSV
   * Hsv2rgb              - Converts an HSV color value to RGB
   * Rgb2hex              - Converts RGB to HEX
   * Hex2rgb              - Convert HEX to RGB
   * Hsv2hsvRad           - Convert HSV coordinate to HSVrad (degree to radian)
   * HsvRad2hsv           - Convert HSVrad color to HSV (radian to degree)
   * Hex2hsvRad           - Convert HEX to HSVrad
   * HsvRad2hex           - Convert HSVrad to HEX
   * GetLinear            - Interpolate a linear path from a number to another number
   * GetTheta             - Interpolate a radial path from a number to another number
   * GetGradientColors    - Generate the most colorful delta between two colors
   * PaintLines           - Take a bunch of lines and color them in the colors provided
   * Color2hex            - Make sure a color is hex
   * GetGaps              - Calculate the gaps between an array of points
   * TransitionBetweenHex - Generate colors between two given colors
   * Transition           - Generate n colors between x colors
   * PaintGradient        - Paint finished output in a gradient
   *
   **************************************************************************************************************************************************************/
  "use strict";
  var {
    GetFirstCharacterPosition
  } = require_GetFirstCharacterPosition();
  var {
    GetLongestLine
  } = require_GetLongestLine();
  var {
    GRADIENTS
  } = require_constants();
  var {
    Debugging
  } = require_Debugging();
  var {
    Color
  } = require_Color();
  function Rgb2hsv({
    r,
    g,
    b
  }) {
    r /= 255;
    g /= 255;
    b /= 255;
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const diff = max - min;
    let h = 0;
    let v = max;
    let s = max === 0 ? 0 : diff / max;
    if (max === min) {
      h = 0;
    } else if (max === r && g >= b) {
      h = 60 * ((g - b) / diff);
    } else if (max === r && g < b) {
      h = 60 * ((g - b) / diff) + 360;
    } else if (max === g) {
      h = 60 * ((b - r) / diff) + 120;
    } else {
      h = 60 * ((r - g) / diff) + 240;
    }
    return [h, s * 100, v * 100];
  }
  function Hsv2rgb(h, s, v) {
    h /= 60;
    s /= 100;
    v /= 100;
    const hi = Math.floor(h) % 6;
    const f = h - Math.floor(h);
    const p = 255 * v * (1 - s);
    const q = 255 * v * (1 - s * f);
    const t = 255 * v * (1 - s * (1 - f));
    v *= 255;
    switch (hi) {
      case 0:
        return {
          r: v,
          g: t,
          b: p
        };
      case 1:
        return {
          r: q,
          g: v,
          b: p
        };
      case 2:
        return {
          r: p,
          g: v,
          b: t
        };
      case 3:
        return {
          r: p,
          g: q,
          b: v
        };
      case 4:
        return {
          r: t,
          g: p,
          b: v
        };
      case 5:
        return {
          r: v,
          g: p,
          b: q
        };
    }
  }
  function Rgb2hex(r, g, b) {
    const val = (b | g << 8 | r << 16 | 1 << 24).toString(16).slice(1);
    return "#" + val.toLowerCase();
  }
  function Hex2rgb(hex) {
    hex = hex.replace(/^#/, "");
    if (hex.length > 6) {
      hex = hex.slice(0, 6);
    }
    if (hex.length === 4) {
      hex = hex.slice(0, 3);
    }
    if (hex.length === 3) {
      hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }
    const num = parseInt(hex, 16);
    const r = num >> 16;
    const g = num >> 8 & 255;
    const b = num & 255;
    const rgb = [r, g, b];
    return rgb;
  }
  function Hsv2hsvRad([h, s, v]) {
    return [h * Math.PI / 180, s, v];
  }
  function HsvRad2hsv(hRad, s, v) {
    return [hRad * 180 / Math.PI, s, v];
  }
  function Hex2hsvRad(hex) {
    const [r, g, b] = Hex2rgb(hex);
    const hsv = Rgb2hsv({
      r,
      g,
      b
    });
    const hsvRad = Hsv2hsvRad(hsv);
    return hsvRad;
  }
  function HsvRad2hex(hRad, s, v) {
    const [h] = HsvRad2hsv(hRad, s, v);
    const {
      r,
      g,
      b
    } = Hsv2rgb(h, s, v);
    const hex = Rgb2hex(r, g, b);
    return hex;
  }
  function GetLinear(pointA, pointB, n, steps) {
    if (steps === 0) {
      return pointB;
    }
    return pointA + n * ((pointB - pointA) / steps);
  }
  function GetTheta(fromTheta, toTheta, n, steps) {
    const TAU = 2 * Math.PI;
    let longDistance;
    if (steps === 0) {
      return toTheta;
    }
    if (fromTheta > toTheta) {
      if (fromTheta - toTheta < Math.PI) {
        longDistance = TAU - (fromTheta - toTheta);
      } else {
        longDistance = toTheta - fromTheta;
      }
    } else {
      if (toTheta - fromTheta < Math.PI) {
        longDistance = toTheta - fromTheta - TAU;
      } else {
        longDistance = -1 * (fromTheta - toTheta);
      }
    }
    let result = fromTheta + n * (longDistance / steps);
    if (result < 0) {
      result += TAU;
    }
    if (result > TAU) {
      result -= TAU;
    }
    return result;
  }
  function GetGradientColors(fromColor, toColor, steps) {
    const [fromHRad, fromS, fromV] = Hex2hsvRad(fromColor);
    const [toHRad, toS, toV] = Hex2hsvRad(toColor);
    const hexColors = [];
    for (let n = 0; n < steps; n++) {
      const hRad = GetTheta(fromHRad, toHRad, n, steps - 1);
      const s = GetLinear(fromS, toS, n, steps - 1);
      const v = GetLinear(fromV, toV, n, steps - 1);
      hexColors.push(HsvRad2hex(hRad, s, v));
    }
    return hexColors;
  }
  function PaintLines(lines, colors, firstCharacterPosition) {
    Debugging.report(`Running PaintLines`, 1);
    Debugging.report(colors, 2);
    const space = " ".repeat(firstCharacterPosition);
    return lines.map((line) => {
      const coloredLine = line.slice(firstCharacterPosition).split("").map((char, i) => {
        const {
          open,
          close
        } = Color(colors[i]);
        return `${open}${char}${close}`;
      }).join("");
      return `${space}${coloredLine}`;
    });
  }
  function Color2hex(color) {
    const colorMap = {
      black: "#000000",
      red: "#ff0000",
      green: "#00ff00",
      yellow: "#ffff00",
      blue: "#0000ff",
      magenta: "#ff00ff",
      cyan: "#00ffff",
      white: "#ffffff",
      gray: "#808080",
      grey: "#808080"
    };
    return colorMap[color] || color;
  }
  function GetGaps(points, steps) {
    const gapSteps = Math.floor((steps - points.length) / (points.length - 1));
    const rest = steps - (points.length + gapSteps * (points.length - 1));
    const gaps = Array(points.length - 1).fill(gapSteps);
    for (let i = 0; i < rest; i++) {
      gaps[gaps.length - 1 - i]++;
    }
    return gaps;
  }
  function TransitionBetweenHex(fromHex, toHex, steps) {
    const fromRgb = Hex2rgb(fromHex);
    const toRgb = Hex2rgb(toHex);
    const hexColors = [];
    steps++;
    for (let n = 1; n < steps; n++) {
      const red = GetLinear(fromRgb[0], toRgb[0], n, steps);
      const green = GetLinear(fromRgb[1], toRgb[1], n, steps);
      const blue = GetLinear(fromRgb[2], toRgb[2], n, steps);
      hexColors.push(Rgb2hex(red, green, blue));
    }
    return hexColors;
  }
  function Transition(colors, steps, gradients = GRADIENTS) {
    let hexColors = [];
    if (colors.length === 1) {
      colors = gradients[colors[0].toLowerCase()];
    } else {
      colors = colors.map((color) => Color2hex(color));
    }
    const gaps = GetGaps(colors, steps);
    if (steps <= 1) {
      return [colors[colors.length - 1]];
    }
    for (let i = 0; i < colors.length; i++) {
      const gap = gaps[i - 1];
      if (colors[i - 1]) {
        const gapColors = TransitionBetweenHex(colors[i - 1], colors[i], gap);
        hexColors = [...hexColors, ...gapColors];
      }
      if (gap !== -1) {
        hexColors.push(colors[i]);
      }
    }
    return hexColors;
  }
  function PaintGradient({
    output,
    gradient,
    lines,
    lineHeight,
    fontLines,
    independentGradient,
    transitionGradient
  }) {
    Debugging.report(`Running PaintGradient`, 1);
    let newOutput = [];
    if (transitionGradient) {
      Debugging.report(`Gradient transition with colors: ${JSON.stringify(gradient)}`, 2);
    } else {
      Debugging.report(`Gradient start: ${gradient[0]} | Gradient end: ${gradient[1]}`, 2);
    }
    let firstCharacterPosition;
    let longestLine;
    if (!independentGradient) {
      firstCharacterPosition = GetFirstCharacterPosition(output);
      longestLine = GetLongestLine(output).length;
    }
    for (let i = 0; i < lines; i++) {
      const start = i * (fontLines + lineHeight);
      const end = fontLines + start;
      const thisLine = output.slice(start, end);
      if (independentGradient) {
        firstCharacterPosition = GetFirstCharacterPosition(thisLine);
        longestLine = GetLongestLine(thisLine).length;
      }
      const colorsNeeded = longestLine - firstCharacterPosition;
      const linesInbetween = i === 0 ? [] : Array(lineHeight).fill("");
      Debugging.report(`longestLine: ${longestLine} | firstCharacterPosition: ${firstCharacterPosition}`, 2);
      const colors = transitionGradient ? Transition(gradient, colorsNeeded) : GetGradientColors(Color2hex(gradient[0]), Color2hex(gradient[1]), colorsNeeded);
      newOutput = [...newOutput, ...linesInbetween, ...PaintLines(thisLine, colors, firstCharacterPosition)];
    }
    return newOutput;
  }
  module2.exports = exports2 = {
    Rgb2hsv,
    Hsv2rgb,
    Rgb2hex,
    Hex2rgb,
    Hsv2hsvRad,
    HsvRad2hsv,
    Hex2hsvRad,
    HsvRad2hex,
    GetLinear,
    GetTheta,
    GetGradientColors,
    PaintLines,
    Color2hex,
    GetGaps,
    TransitionBetweenHex,
    Transition,
    PaintGradient
  };
});

// node_modules/cfonts/lib/CharLength.js
var require_CharLength = __commonJS((exports2, module2) => {
  /***************************************************************************************************************************************************************
   *
   * cfonts
   *
   * Sexy fonts for the console. (CLI output)
   *
   * @license     https://github.com/dominikwilkowski/cfonts/blob/released/LICENSE  GNU GPLv2
   * @author      Dominik Wilkowski  hi@dominik-wilkowski.com
   * @repository  https://github.com/dominikwilkowski/cfonts
   *
   * CharLength
   *   Return the max width of a character by looking at its longest line
   *
   **************************************************************************************************************************************************************/
  "use strict";
  var {
    Debugging
  } = require_Debugging();
  var CharLength = (character, fontLines, letterSpacing) => {
    Debugging.report(`Running CharLength`, 1);
    let charWidth = 0;
    for (let i = 0; i < fontLines; i++) {
      let char = character[i].replace(/(<([^>]+)>)/ig, "");
      if (char.length > charWidth) {
        charWidth = char.length;
      }
    }
    if (charWidth === 0 && letterSpacing > 0) {
      Debugging.report(`CharLength: Adding space to letter spacing`, 1);
      charWidth = 1;
    }
    return charWidth;
  };
  module2.exports = exports2 = {
    CharLength
  };
});

// node_modules/cfonts/lib/CheckInput.js
var require_CheckInput = __commonJS((exports2, module2) => {
  /***************************************************************************************************************************************************************
   *
   * cfonts
   *
   * Sexy fonts for the console. (CLI output)
   *
   * @license     https://github.com/dominikwilkowski/cfonts/blob/released/LICENSE  GNU GPLv2
   * @author      Dominik Wilkowski  hi@dominik-wilkowski.com
   * @repository  https://github.com/dominikwilkowski/cfonts
   *
   * CheckInput
   *   Check input for human errors
   *
   **************************************************************************************************************************************************************/
  "use strict";
  var {
    Chalk
  } = require_Chalk();
  var {
    COLORS,
    BGCOLORS,
    GRADIENTCOLORS,
    GRADIENTS,
    ALIGNMENT,
    FONTFACES,
    HEXTEST
  } = require_constants();
  var CheckInput = (INPUT, userFont, userColors, userBackground, userAlign, userGradient, userTransitionGradient, userEnv, fontfaces = FONTFACES, colors = COLORS, bgcolors = BGCOLORS, gradientcolors = GRADIENTCOLORS, gradients = GRADIENTS, alignment = ALIGNMENT) => {
    let result = {
      message: "",
      pass: true
    };
    if (INPUT === void 0 || INPUT === "") {
      return {
        message: "Please provide text to convert",
        pass: false
      };
    }
    if (Object.keys(fontfaces).indexOf(userFont.toLowerCase()) === -1) {
      return {
        message: `"${Chalk.red(userFont)}" is not a valid font option.
Please use a font from the supported stack:
${Chalk.green(Object.keys(fontfaces).map((font) => fontfaces[font]).join(", "))}`,
        pass: false
      };
    }
    userColors.forEach((color) => {
      if (Object.keys(colors).indexOf(color.toLowerCase()) === -1 && color !== "candy" && !HEXTEST.test(color)) {
        result = {
          message: `"${Chalk.red(color)}" is not a valid font color option.
Please use a color from the supported stack or any valid hex color:
${Chalk.green(`${Object.keys(colors).map((color2) => colors[color2]).join(", ")}, candy, "#3456ff", "#f80", etc...`)}`,
          pass: false
        };
      }
    });
    if (Object.keys(bgcolors).indexOf(userBackground.toLowerCase()) === -1) {
      return {
        message: `"${Chalk.red(userBackground)}" is not a valid background option.
Please use a color from the supported stack:
${Chalk.green(Object.keys(bgcolors).map((bgcolor) => bgcolors[bgcolor]).join(", "))}`,
        pass: false
      };
    }
    if (alignment.indexOf(userAlign.toLowerCase()) === -1) {
      return {
        message: `"${Chalk.red(userAlign)}" is not a valid alignment option.
Please use an alignment option from the supported stack:
${Chalk.green(alignment.join(" | "))}`,
        pass: false
      };
    }
    if (userGradient) {
      if (userGradient.length === 1 && Object.keys(gradients).indexOf(userGradient[0].toLowerCase()) !== -1 && userTransitionGradient) {
        return result;
      } else {
        if (userGradient.length < 2) {
          return {
            message: `"${Chalk.red(userGradient)}" is not a valid gradient option.
Please pass in${userTransitionGradient ? " at least" : ""} two colors.`,
            pass: false
          };
        }
        if (userGradient.length !== 2 && !userTransitionGradient) {
          return {
            message: `"${Chalk.red(userGradient)}" is not a valid gradient option.
Please pass in two colors.`,
            pass: false
          };
        }
        userGradient.forEach((color) => {
          if (Object.keys(gradientcolors).indexOf(color.toLowerCase()) === -1 && !HEXTEST.test(color)) {
            result = {
              message: `"${Chalk.red(color)}" is not a valid gradient color option.
Please use a color from the supported stack or any valid hex color:
${Chalk.green(`${Object.keys(gradientcolors).map((color2) => colors[color2]).join(", ")}, "#3456ff", "#f80", etc...`)}`,
              pass: false
            };
          }
        });
      }
    }
    if (userEnv !== "node" && userEnv !== "browser") {
      return {
        message: `"${Chalk.red(userEnv)}" is not a valid environment option.
Please use onlythe supported options:
${Chalk.green("node | browser")}`,
        pass: false
      };
    }
    return result;
  };
  module2.exports = exports2 = {
    CheckInput
  };
});

// node_modules/cfonts/lib/CleanInput.js
var require_CleanInput = __commonJS((exports2, module2) => {
  /***************************************************************************************************************************************************************
   *
   * cfonts
   *
   * Sexy fonts for the console. (CLI output)
   *
   * @license     https://github.com/dominikwilkowski/cfonts/blob/released/LICENSE  GNU GPLv2
   * @author      Dominik Wilkowski  hi@dominik-wilkowski.com
   * @repository  https://github.com/dominikwilkowski/cfonts
   *
   * CleanInput
   *   Filter only allowed character
   *
   **************************************************************************************************************************************************************/
  "use strict";
  var {
    CHARS
  } = require_constants();
  var CleanInput = (INPUT, chars = CHARS) => {
    if (typeof INPUT === "string") {
      const clean = INPUT.replace(/(?:\r\n|\r|\n)/g, "|").split("").filter((char) => chars.includes(char.toUpperCase())).join("");
      return clean;
    } else {
      return "";
    }
  };
  module2.exports = exports2 = {
    CleanInput
  };
});

// node_modules/cfonts/lib/AddLine.js
var require_AddLine = __commonJS((exports2, module2) => {
  /***************************************************************************************************************************************************************
   *
   * cfonts
   *
   * Sexy fonts for the console. (CLI output)
   *
   * @license     https://github.com/dominikwilkowski/cfonts/blob/released/LICENSE  GNU GPLv2
   * @author      Dominik Wilkowski  hi@dominik-wilkowski.com
   * @repository  https://github.com/dominikwilkowski/cfonts
   *
   * AddLine
   *   Add a new line to the output array
   *
   **************************************************************************************************************************************************************/
  "use strict";
  var {
    Debugging
  } = require_Debugging();
  var AddLine = (output, fontLines, FontBuffer, lineHeight) => {
    Debugging.report(`Running AddLine`, 1);
    if (output.length === 0) {
      lineHeight = 0;
    }
    let lines = fontLines + output.length + lineHeight;
    let length = output.length;
    for (let i = length; i < lines; i++) {
      let index = i - length;
      if (index > lineHeight) {
        output[i] = FontBuffer[index - lineHeight];
      } else {
        output[i] = "";
      }
    }
    return output;
  };
  module2.exports = exports2 = {
    AddLine
  };
});

// node_modules/cfonts/lib/AddChar.js
var require_AddChar = __commonJS((exports2, module2) => {
  /***************************************************************************************************************************************************************
   *
   * cfonts
   *
   * Sexy fonts for the console. (CLI output)
   *
   * @license     https://github.com/dominikwilkowski/cfonts/blob/released/LICENSE  GNU GPLv2
   * @author      Dominik Wilkowski  hi@dominik-wilkowski.com
   * @repository  https://github.com/dominikwilkowski/cfonts
   *
   * AddChar
   *   Add a new character to the output array
   *
   **************************************************************************************************************************************************************/
  "use strict";
  var {
    Debugging
  } = require_Debugging();
  var {
    Colorize
  } = require_Colorize();
  var AddChar = (CHAR, output, fontLines, fontChars, fontColors, colors) => {
    Debugging.report(`Running AddChar with "${CHAR}"`, 1);
    let lines = output.length - fontLines;
    for (let i = lines; i < output.length; i++) {
      let index = i - lines;
      output[i] += Colorize(fontChars[CHAR][index], fontColors, colors);
    }
    return output;
  };
  module2.exports = exports2 = {
    AddChar
  };
});

// node_modules/cfonts/lib/GetFont.js
var require_GetFont = __commonJS((exports2, module2) => {
  /***************************************************************************************************************************************************************
   *
   * cfonts
   *
   * Sexy fonts for the console. (CLI output)
   *
   * @license     https://github.com/dominikwilkowski/cfonts/blob/released/LICENSE  GNU GPLv2
   * @author      Dominik Wilkowski  hi@dominik-wilkowski.com
   * @repository  https://github.com/dominikwilkowski/cfonts
   *
   * GetFont
   *   Get a selected JSON font-file object
   *
   **************************************************************************************************************************************************************/
  "use strict";
  var {
    Debugging
  } = require_Debugging();
  var GetFont = (font) => {
    Debugging.report(`Running GetFont`, 1);
    try {
      let FONTFACE = require(`../fonts/${font}.json`);
      Debugging.report(`GetFont: Fontface path selected: "${font}.json"`, 2);
      return FONTFACE;
    } catch (error) {
      Debugging.error(`Font file for "${font}" errored out: ${error}`, 2);
      return false;
    }
  };
  module2.exports = exports2 = {
    GetFont
  };
});

// node_modules/cfonts/lib/Log.js
var require_Log = __commonJS((exports2, module2) => {
  /***************************************************************************************************************************************************************
   *
   * cfonts
   *
   * Sexy fonts for the console. (CLI output)
   *
   * @license     https://github.com/dominikwilkowski/cfonts/blob/released/LICENSE  GNU GPLv2
   * @author      Dominik Wilkowski  hi@dominik-wilkowski.com
   * @repository  https://github.com/dominikwilkowski/cfonts
   *
   * Log
   *   Logging prettiness
   *
   **************************************************************************************************************************************************************/
  "use strict";
  var {
    Chalk
  } = require_Chalk();
  var Log = {
    error: (text) => {
      text = text.replace(/(?:\r\n|\r|\n)/g, "\n       ");
      console.error(`
 ${Chalk.bold.red("Ouch:")} ${text}
`);
    }
  };
  module2.exports = exports2 = {
    Log
  };
});

// node_modules/cfonts/lib/Render.js
var require_Render = __commonJS((exports2, module2) => {
  /***************************************************************************************************************************************************************
   *
   * cfonts
   *
   * Sexy fonts for the console. (CLI output)
   *
   * @license     https://github.com/dominikwilkowski/cfonts/blob/released/LICENSE  GNU GPLv2
   * @author      Dominik Wilkowski  hi@dominik-wilkowski.com
   * @repository  https://github.com/dominikwilkowski/cfonts
   *
   * Render
   *   Main method to get the ANSI output for a string
   *
   **************************************************************************************************************************************************************/
  "use strict";
  var {
    AddLetterSpacing
  } = require_AddLetterSpacing();
  var {
    RenderConsole
  } = require_RenderConsole();
  var {
    Debugging,
    DEBUG
  } = require_Debugging();
  var {
    PaintGradient
  } = require_Gradient();
  var {
    CharLength
  } = require_CharLength();
  var {
    CheckInput
  } = require_CheckInput();
  var {
    CleanInput
  } = require_CleanInput();
  var {
    AlignText
  } = require_AlignText();
  var {
    AddLine
  } = require_AddLine();
  var {
    AddChar
  } = require_AddChar();
  var {
    Options
  } = require_Options();
  var {
    GetFont
  } = require_GetFont();
  var {
    CHARS
  } = require_constants();
  var {
    Color
  } = require_Color();
  var {
    Size
  } = require_Size();
  var {
    Log
  } = require_Log();
  var Render = (input, SETTINGS = {}, debug = DEBUG.enabled, debuglevel = DEBUG.level, size = Size) => {
    Debugging.report(`Running render`, 1);
    DEBUG.enabled = debug;
    DEBUG.level = debuglevel;
    const INPUT = CleanInput(input, CHARS);
    Options.reset();
    Options.set = SETTINGS;
    const OPTIONS = Options.get;
    let output = [];
    let lines = 0;
    let FONTFACE = {};
    const _isGoodHuman = CheckInput(INPUT, OPTIONS.font, OPTIONS.colors, OPTIONS.background, OPTIONS.align, OPTIONS.gradient, OPTIONS.transitionGradient, OPTIONS.env);
    if (!_isGoodHuman.pass) {
      Log.error(_isGoodHuman.message);
      return false;
    }
    if (OPTIONS.gradient) {
      OPTIONS.colors = [];
    }
    if (DEBUG.enabled) {
      let outOption = `OPTIONS:
  Text: ${INPUT}`;
      for (let key in OPTIONS) {
        outOption += `
  Options.${key}: ${OPTIONS[key]}`;
      }
      Debugging.report(outOption, 3);
    }
    if (OPTIONS.env === "browser") {
      size = {
        ...size
      };
      size.width = OPTIONS.maxLength === 0 ? 999999999999 : OPTIONS.maxLength;
    }
    if (OPTIONS.font === "console") {
      FONTFACE = {
        colors: 1,
        lines: 1
      };
      const consoleOutput = RenderConsole(INPUT, OPTIONS, size);
      output = consoleOutput.output;
      lines = consoleOutput.lines;
    } else {
      FONTFACE = GetFont(OPTIONS.font);
      if (!FONTFACE) {
        Log.error(`Font file for the font "${OPTIONS.font}" could not be found.
Try reinstalling this package.`);
        return false;
      }
      if (SETTINGS.letterSpacing === void 0) {
        Debugging.report(`Looking up letter spacing from font face`, 1);
        let width = 0;
        FONTFACE.letterspace.forEach((item) => {
          let char = item.replace(/(<([^>]+)>)/ig, "");
          if (width < char.length) {
            width = char.length;
          }
        });
        Debugging.report(`Letter spacing set to font face default: "${width}"`, 2);
        OPTIONS.letterSpacing = width;
      }
      let lineLength = CharLength(FONTFACE.buffer, FONTFACE.lines, OPTIONS);
      let maxChars = 0;
      output = AddLine([], FONTFACE.lines, FONTFACE.buffer, OPTIONS.lineHeight);
      lines++;
      output = AddLetterSpacing(output, FONTFACE.lines, FONTFACE.letterspace, FONTFACE.colors, OPTIONS.colors, OPTIONS.letterSpacing);
      lineLength += CharLength(FONTFACE.letterspace, FONTFACE.lines, OPTIONS) * OPTIONS.letterSpacing;
      for (let i = 0; i < INPUT.length; i++) {
        let CHAR = INPUT.charAt(i).toUpperCase();
        let lastLineLength = lineLength;
        Debugging.report(`Character found in font: "${CHAR}"`, 2);
        if (CHAR !== `|`) {
          lineLength += CharLength(FONTFACE.chars[CHAR], FONTFACE.lines, OPTIONS);
          lineLength += CharLength(FONTFACE.letterspace, FONTFACE.lines, OPTIONS) * OPTIONS.letterSpacing;
        }
        if (maxChars >= OPTIONS.maxLength && OPTIONS.maxLength != 0 || CHAR === `|` || lineLength > size.width) {
          lines++;
          Debugging.report(`NEWLINE: maxChars: ${maxChars}, OPTIONS.maxLength: ${OPTIONS.maxLength}, CHAR: ${CHAR}, lineLength: ${lineLength}, Size.width: ${size.width} `, 2);
          if (OPTIONS.env === "node") {
            output = AlignText(output, lastLineLength, FONTFACE.lines, OPTIONS.align, size);
          }
          lineLength = CharLength(FONTFACE.buffer, FONTFACE.lines, OPTIONS);
          lineLength += CharLength(FONTFACE.letterspace, FONTFACE.lines, OPTIONS) * OPTIONS.letterSpacing;
          if (CHAR !== `|`) {
            lineLength += CharLength(FONTFACE.chars[CHAR], FONTFACE.lines, OPTIONS);
            lineLength += CharLength(FONTFACE.letterspace, FONTFACE.lines, OPTIONS) * OPTIONS.letterSpacing;
          }
          maxChars = 0;
          output = AddLine(output, FONTFACE.lines, FONTFACE.buffer, OPTIONS.lineHeight);
          output = AddLetterSpacing(output, FONTFACE.lines, FONTFACE.letterspace, FONTFACE.colors, OPTIONS.colors, OPTIONS.letterSpacing);
        }
        Debugging.report(`lineLength at: "${lineLength}"`, 2);
        if (CHAR !== `|`) {
          maxChars++;
          output = AddChar(CHAR, output, FONTFACE.lines, FONTFACE.chars, FONTFACE.colors, OPTIONS.colors);
          output = AddLetterSpacing(output, FONTFACE.lines, FONTFACE.letterspace, FONTFACE.colors, OPTIONS.colors, OPTIONS.letterSpacing);
        }
      }
      if (OPTIONS.env === "node") {
        output = AlignText(output, lineLength, FONTFACE.lines, OPTIONS.align, size);
      }
    }
    if (OPTIONS.gradient) {
      output = PaintGradient({
        output,
        gradient: OPTIONS.gradient,
        lines,
        lineHeight: OPTIONS.lineHeight,
        fontLines: FONTFACE.lines,
        independentGradient: OPTIONS.independentGradient,
        transitionGradient: OPTIONS.transitionGradient
      });
    }
    if (OPTIONS.space) {
      if (OPTIONS.align === "top") {
        output[output.length - 1] = `${output[output.length - 1]}



`;
      } else if (OPTIONS.align === "bottom") {
        output[0] = `



${output[0]}`;
      } else {
        output[0] = `

${output[0]}`;
        output[output.length - 1] = `${output[output.length - 1]}

`;
      }
    }
    if (OPTIONS.background !== "transparent" && OPTIONS.env === "node") {
      const {
        open: openNew,
        close: closeNew
      } = Color(OPTIONS.background, true);
      output[0] = `${openNew}
${output[0]}`;
      output[output.length - 1] = `${output[output.length - 1]}${closeNew}`;
    }
    let write = output.join(OPTIONS.env === "node" ? `
` : "<br>");
    if (OPTIONS.env === "browser") {
      const {
        open: bgColor
      } = Color(OPTIONS.background, true);
      write = `<div style="font-family:monospace;white-space:pre;text-align:${OPTIONS.align};max-width:100%;overflow:scroll;background:${bgColor ? bgColor : "transparent"}">${write}</div>`;
    }
    return {
      string: write,
      array: output,
      lines,
      options: OPTIONS
    };
  };
  module2.exports = exports2 = {
    Render
  };
});

// node_modules/cfonts/lib/DisplayHelp.js
var require_DisplayHelp = __commonJS((exports2, module2) => {
  /***************************************************************************************************************************************************************
   *
   * cfonts
   *
   * Sexy fonts for the console. (CLI output)
   *
   * @license     https://github.com/dominikwilkowski/cfonts/blob/released/LICENSE  GNU GPLv2
   * @author      Dominik Wilkowski  hi@dominik-wilkowski.com
   * @repository  https://github.com/dominikwilkowski/cfonts
   *
   * DisplayHelp
   *   Display the help generated from our CLIOPTIONS
   *
   **************************************************************************************************************************************************************/
  "use strict";
  var {
    CLIOPTIONS
  } = require_constants();
  var {
    Render
  } = require_Render();
  var {
    Chalk
  } = require_Chalk();
  var DisplayHelp = () => {
    const {
      string: headline
    } = Render("cfonts", {
      align: "left",
      gradient: ["red", "green"]
    });
    console.log(` ${headline}This is a tool for sexy fonts in the console. Give your cli some love.

Usage: cfonts "<value>" [option1] <input1> [option2] <input1>,<input2> [option3]
Example: ${Chalk.bold('$ cfonts "sexy font" -f chrome -a center -c red,green,gray')}

Options:
`);
    Object.keys(CLIOPTIONS).forEach((option) => {
      console.log(Chalk.bold(`${option}, ${CLIOPTIONS[option].short}`));
      console.log(CLIOPTIONS[option].description);
      console.log(`${Chalk.bold("$")} cfonts ${CLIOPTIONS[option].example}
`);
    });
  };
  module2.exports = exports2 = {
    DisplayHelp
  };
});

// node_modules/cfonts/lib/AddShortcuts.js
var require_AddShortcuts = __commonJS((exports2, module2) => {
  /***************************************************************************************************************************************************************
   *
   * cfonts
   *
   * Sexy fonts for the console. (CLI output)
   *
   * @license     https://github.com/dominikwilkowski/cfonts/blob/released/LICENSE  GNU GPLv2
   * @author      Dominik Wilkowski  hi@dominik-wilkowski.com
   * @repository  https://github.com/dominikwilkowski/cfonts
   *
   * AddShortcuts
   *   Flatten the shortcuts in our cli options object
   *
   **************************************************************************************************************************************************************/
  "use strict";
  var AddShortcuts = (options) => {
    const flatOptions = Object.assign({}, options);
    Object.keys(flatOptions).forEach((option) => {
      flatOptions[option]._name = option;
      flatOptions[flatOptions[option].short] = flatOptions[option];
    });
    return flatOptions;
  };
  module2.exports = exports2 = {
    AddShortcuts
  };
});

// node_modules/cfonts/lib/ParseArgs.js
var require_ParseArgs = __commonJS((exports2, module2) => {
  /***************************************************************************************************************************************************************
   *
   * cfonts
   *
   * Sexy fonts for the console. (CLI output)
   *
   * @license     https://github.com/dominikwilkowski/cfonts/blob/released/LICENSE  GNU GPLv2
   * @author      Dominik Wilkowski  hi@dominik-wilkowski.com
   * @repository  https://github.com/dominikwilkowski/cfonts
   *
   * ParseArgs
   *   Parse cli arguments into a nice object
   *
   **************************************************************************************************************************************************************/
  "use strict";
  var {
    AddShortcuts
  } = require_AddShortcuts();
  var {
    CLIOPTIONS
  } = require_constants();
  var {
    Debugging
  } = require_Debugging();
  var ParseArgs = (inputOptions = CLIOPTIONS, inputArgs = process.argv) => {
    const parsedArgs = {
      text: inputArgs[2]
    };
    Object.keys(inputOptions).forEach((option) => {
      const name = option.replace("--", "");
      parsedArgs[name] = inputOptions[option].default;
    });
    if (inputArgs[2] === "--help" || inputArgs[2] === "-h") {
      parsedArgs.help = true;
    }
    if (inputArgs[2] === "--version" || inputArgs[2] === "-v") {
      parsedArgs.version = true;
    }
    const args = inputArgs.splice(3);
    const options = AddShortcuts(inputOptions);
    for (let index = 0; args.length > index; index++) {
      const option = options[args[index]];
      if (option) {
        const name = option._name.replace("--", "");
        if (option.options !== void 0) {
          index++;
          const value = args[index];
          parsedArgs[name] = value;
        } else {
          parsedArgs[name] = true;
        }
      } else {
        Debugging.report(`The cli argument ${args[index]} was not found and ignored`, 2);
      }
    }
    return parsedArgs;
  };
  module2.exports = exports2 = {
    ParseArgs
  };
});

// node_modules/cfonts/lib/Say.js
var require_Say = __commonJS((exports2, module2) => {
  /***************************************************************************************************************************************************************
   *
   * cfonts
   *
   * Sexy fonts for the console. (CLI output)
   *
   * @license     https://github.com/dominikwilkowski/cfonts/blob/released/LICENSE  GNU GPLv2
   * @author      Dominik Wilkowski  hi@dominik-wilkowski.com
   * @repository  https://github.com/dominikwilkowski/cfonts
   *
   * Say
   *   Print to console
   *
   **************************************************************************************************************************************************************/
  "use strict";
  var {
    Debugging,
    DEBUG
  } = require_Debugging();
  var {
    Render
  } = require_Render();
  var {
    Size
  } = require_Size();
  var Say = (INPUT, SETTINGS = {}, debug = DEBUG.enabled, debuglevel = DEBUG.level, size = Size) => {
    Debugging.report(`Running say`, 1);
    DEBUG.enabled = debug;
    DEBUG.level = debuglevel;
    const write = Render(INPUT, SETTINGS, debug, debuglevel, size);
    if (write) {
      console.log(write.string);
    }
  };
  module2.exports = exports2 = {
    Say
  };
});

// node_modules/cfonts/lib/index.js
var require_lib = __commonJS((exports2, module2) => {
  /***************************************************************************************************************************************************************
   *
   * cfonts
   *
   * Sexy fonts for the console. (CLI output)
   *
   * @license     https://github.com/dominikwilkowski/cfonts/blob/released/LICENSE  GNU GPLv2
   * @author      Dominik Wilkowski  hi@dominik-wilkowski.com
   * @repository  https://github.com/dominikwilkowski/cfonts
   *
   * Cli
   *   Run cli commands
   *
   **************************************************************************************************************************************************************/
  "use strict";
  var {
    DisplayVersion
  } = require_DisplayVersion();
  var {
    DisplayHelp
  } = require_DisplayHelp();
  var {
    CLIOPTIONS
  } = require_constants();
  var {
    Debugging
  } = require_Debugging();
  var {
    ParseArgs
  } = require_ParseArgs();
  var {
    Render
  } = require_Render();
  var {
    Chalk
  } = require_Chalk();
  var {
    Log
  } = require_Log();
  var {
    Say
  } = require_Say();
  var Cli = (inputOptions = CLIOPTIONS, inputArgs = process.argv) => {
    const args = ParseArgs(inputOptions, inputArgs);
    Debugging.report(`OPTIONS:
  CFonts.say("${args.text}", {
    font: "${args.font}",
    align: "${args.align}",
    colors: ${args.colors ? JSON.stringify(args.colors.split(",")) : []},
    background: "${args.background}",
    letterSpacing: ${args["letter-spacing"]},
    lineHeight: ${args["line-height"]},
    space: ${!args.spaceless},
    maxLength: ${args["max-length"]},
    gradient: ${args.gradient},
    independentGradient: ${args["independent-gradient"]},
    transitionGradient: ${args["transition-gradient"]},
    env: ${args.env},
  }, ${args.debug}, ${args.debugLevel} );`, 3, args.debug, args.debugLevel);
    if (args.help) {
      DisplayHelp();
      return;
    }
    if (args.version) {
      DisplayVersion();
      return;
    }
    if (!args.text) {
      Log.error(`Please provide text to convert with ${Chalk.green(`cfonts "Text"`)}
Run ${Chalk.green(`cfonts --help`)} for more infos`);
      return;
    }
    Say(args.text, {
      font: args.font,
      align: args.align,
      colors: args.colors ? args.colors.split(",") : [],
      background: args.background,
      letterSpacing: args["letter-spacing"],
      lineHeight: args["line-height"],
      space: !args.spaceless,
      maxLength: args["max-length"],
      gradient: args.gradient,
      independentGradient: args["independent-gradient"],
      transitionGradient: args["transition-gradient"],
      env: args.env
    }, args.debug, args.debugLevel);
  };
  module2.exports = exports2 = {
    render: Render,
    say: Say,
    Cli
  };
});

// src/index.js
var chalkAnimation = require_chalk_animation();
var CFonts = require_lib();
var prettyFont = CFonts.render("Demo 3");
chalkAnimation.rainbow(prettyFont.string);
