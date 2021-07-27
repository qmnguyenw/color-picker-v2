!(function (t, e) {
	"object" == typeof exports && "object" == typeof module
		? (module.exports = e())
		: "function" == typeof define && define.amd
		? define([], e)
		: "object" == typeof exports
		? (exports.EasyLogicColorPicker = e())
		: (t.EasyLogicColorPicker = e());
})(self, function () {
	var n = {
			317: function (t) {
				self,
					(t.exports = (() => {
						"use strict";
						var r = {
								d: (t, e) => {
									for (var n in e)
										r.o(e, n) &&
											!r.o(t, n) &&
											Object.defineProperty(t, n, {
												enumerable: !0,
												get: e[n],
											});
								},
								o: (t, e) => Object.prototype.hasOwnProperty.call(t, e),
							},
							t = {};
						function f(t, e) {
							var n =
								2 < arguments.length && void 0 !== arguments[2]
									? arguments[2]
									: "rgba(0, 0, 0, 0)";
							return (
								Array.isArray(t) &&
									(t = { r: t[0], g: t[1], b: t[2], a: t[3] }),
								"hex" == e ? o(t) : "rgb" == e ? i(t, n) : "hsl" == e ? a(t) : t
							);
						}
						function o(t) {
							var e = (t = Array.isArray(t)
								? { r: t[0], g: t[1], b: t[2], a: t[3] }
								: t).r.toString(16);
							t.r < 16 && (e = "0" + e);
							var n = t.g.toString(16);
							t.g < 16 && (n = "0" + n);
							var r = t.b.toString(16);
							t.b < 16 && (r = "0" + r);
							var o = "";
							return (
								t.a < 1 &&
									((o = (t = Math.floor(255 * t.a)).toString(16)),
									t < 16 && (o = "0" + o)),
								"#".concat(e).concat(n).concat(r).concat(o)
							);
						}
						function i(t) {
							var e =
								1 < arguments.length && void 0 !== arguments[1]
									? arguments[1]
									: "rgba(0, 0, 0, 0)";
							if (
								void 0 !==
								(t = Array.isArray(t)
									? { r: t[0], g: t[1], b: t[2], a: t[3] }
									: t)
							)
								return 1 == t.a || void 0 === t.a
									? isNaN(t.r)
										? e
										: "rgb(".concat(t.r, ",").concat(t.g, ",").concat(t.b, ")")
									: "rgba("
											.concat(t.r, ",")
											.concat(t.g, ",")
											.concat(t.b, ",")
											.concat(t.a, ")");
						}
						function a(t) {
							return 1 ==
								(t = Array.isArray(t)
									? { r: t[0], g: t[1], b: t[2], a: t[3] }
									: t).a || void 0 === t.a
								? "hsl(".concat(t.h, ",").concat(t.s, "%,").concat(t.l, "%)")
								: "hsla("
										.concat(t.h, ",")
										.concat(t.s, "%,")
										.concat(t.l, "%,")
										.concat(t.a, ")");
						}
						r.d(t, { default: () => nt });
						var e = { format: f, rgb: i, hsl: a, hex: o };
						function s(t, e) {
							return (e = void 0 === e ? 1 : e), Math.round(t * e) / e;
						}
						var n = { round: s },
							c = {
								aliceblue: "rgb(240, 248, 255)",
								antiquewhite: "rgb(250, 235, 215)",
								aqua: "rgb(0, 255, 255)",
								aquamarine: "rgb(127, 255, 212)",
								azure: "rgb(240, 255, 255)",
								beige: "rgb(245, 245, 220)",
								bisque: "rgb(255, 228, 196)",
								black: "rgb(0, 0, 0)",
								blanchedalmond: "rgb(255, 235, 205)",
								blue: "rgb(0, 0, 255)",
								blueviolet: "rgb(138, 43, 226)",
								brown: "rgb(165, 42, 42)",
								burlywood: "rgb(222, 184, 135)",
								cadetblue: "rgb(95, 158, 160)",
								chartreuse: "rgb(127, 255, 0)",
								chocolate: "rgb(210, 105, 30)",
								coral: "rgb(255, 127, 80)",
								cornflowerblue: "rgb(100, 149, 237)",
								cornsilk: "rgb(255, 248, 220)",
								crimson: "rgb(237, 20, 61)",
								cyan: "rgb(0, 255, 255)",
								darkblue: "rgb(0, 0, 139)",
								darkcyan: "rgb(0, 139, 139)",
								darkgoldenrod: "rgb(184, 134, 11)",
								darkgray: "rgb(169, 169, 169)",
								darkgrey: "rgb(169, 169, 169)",
								darkgreen: "rgb(0, 100, 0)",
								darkkhaki: "rgb(189, 183, 107)",
								darkmagenta: "rgb(139, 0, 139)",
								darkolivegreen: "rgb(85, 107, 47)",
								darkorange: "rgb(255, 140, 0)",
								darkorchid: "rgb(153, 50, 204)",
								darkred: "rgb(139, 0, 0)",
								darksalmon: "rgb(233, 150, 122)",
								darkseagreen: "rgb(143, 188, 143)",
								darkslateblue: "rgb(72, 61, 139)",
								darkslategray: "rgb(47, 79, 79)",
								darkslategrey: "rgb(47, 79, 79)",
								darkturquoise: "rgb(0, 206, 209)",
								darkviolet: "rgb(148, 0, 211)",
								deeppink: "rgb(255, 20, 147)",
								deepskyblue: "rgb(0, 191, 255)",
								dimgray: "rgb(105, 105, 105)",
								dimgrey: "rgb(105, 105, 105)",
								dodgerblue: "rgb(30, 144, 255)",
								firebrick: "rgb(178, 34, 34)",
								floralwhite: "rgb(255, 250, 240)",
								forestgreen: "rgb(34, 139, 34)",
								fuchsia: "rgb(255, 0, 255)",
								gainsboro: "rgb(220, 220, 220)",
								ghostwhite: "rgb(248, 248, 255)",
								gold: "rgb(255, 215, 0)",
								goldenrod: "rgb(218, 165, 32)",
								gray: "rgb(128, 128, 128)",
								grey: "rgb(128, 128, 128)",
								green: "rgb(0, 128, 0)",
								greenyellow: "rgb(173, 255, 47)",
								honeydew: "rgb(240, 255, 240)",
								hotpink: "rgb(255, 105, 180)",
								indianred: "rgb(205, 92, 92)",
								indigo: "rgb(75, 0, 130)",
								ivory: "rgb(255, 255, 240)",
								khaki: "rgb(240, 230, 140)",
								lavender: "rgb(230, 230, 250)",
								lavenderblush: "rgb(255, 240, 245)",
								lawngreen: "rgb(124, 252, 0)",
								lemonchiffon: "rgb(255, 250, 205)",
								lightblue: "rgb(173, 216, 230)",
								lightcoral: "rgb(240, 128, 128)",
								lightcyan: "rgb(224, 255, 255)",
								lightgoldenrodyellow: "rgb(250, 250, 210)",
								lightgreen: "rgb(144, 238, 144)",
								lightgray: "rgb(211, 211, 211)",
								lightgrey: "rgb(211, 211, 211)",
								lightpink: "rgb(255, 182, 193)",
								lightsalmon: "rgb(255, 160, 122)",
								lightseagreen: "rgb(32, 178, 170)",
								lightskyblue: "rgb(135, 206, 250)",
								lightslategray: "rgb(119, 136, 153)",
								lightslategrey: "rgb(119, 136, 153)",
								lightsteelblue: "rgb(176, 196, 222)",
								lightyellow: "rgb(255, 255, 224)",
								lime: "rgb(0, 255, 0)",
								limegreen: "rgb(50, 205, 50)",
								linen: "rgb(250, 240, 230)",
								magenta: "rgb(255, 0, 255)",
								maroon: "rgb(128, 0, 0)",
								mediumaquamarine: "rgb(102, 205, 170)",
								mediumblue: "rgb(0, 0, 205)",
								mediumorchid: "rgb(186, 85, 211)",
								mediumpurple: "rgb(147, 112, 219)",
								mediumseagreen: "rgb(60, 179, 113)",
								mediumslateblue: "rgb(123, 104, 238)",
								mediumspringgreen: "rgb(0, 250, 154)",
								mediumturquoise: "rgb(72, 209, 204)",
								mediumvioletred: "rgb(199, 21, 133)",
								midnightblue: "rgb(25, 25, 112)",
								mintcream: "rgb(245, 255, 250)",
								mistyrose: "rgb(255, 228, 225)",
								moccasin: "rgb(255, 228, 181)",
								navajowhite: "rgb(255, 222, 173)",
								navy: "rgb(0, 0, 128)",
								oldlace: "rgb(253, 245, 230)",
								olive: "rgb(128, 128, 0)",
								olivedrab: "rgb(107, 142, 35)",
								orange: "rgb(255, 165, 0)",
								orangered: "rgb(255, 69, 0)",
								orchid: "rgb(218, 112, 214)",
								palegoldenrod: "rgb(238, 232, 170)",
								palegreen: "rgb(152, 251, 152)",
								paleturquoise: "rgb(175, 238, 238)",
								palevioletred: "rgb(219, 112, 147)",
								papayawhip: "rgb(255, 239, 213)",
								peachpuff: "rgb(255, 218, 185)",
								peru: "rgb(205, 133, 63)",
								pink: "rgb(255, 192, 203)",
								plum: "rgb(221, 160, 221)",
								powderblue: "rgb(176, 224, 230)",
								purple: "rgb(128, 0, 128)",
								rebeccapurple: "rgb(102, 51, 153)",
								red: "rgb(255, 0, 0)",
								rosybrown: "rgb(188, 143, 143)",
								royalblue: "rgb(65, 105, 225)",
								saddlebrown: "rgb(139, 69, 19)",
								salmon: "rgb(250, 128, 114)",
								sandybrown: "rgb(244, 164, 96)",
								seagreen: "rgb(46, 139, 87)",
								seashell: "rgb(255, 245, 238)",
								sienna: "rgb(160, 82, 45)",
								silver: "rgb(192, 192, 192)",
								skyblue: "rgb(135, 206, 235)",
								slateblue: "rgb(106, 90, 205)",
								slategray: "rgb(112, 128, 144)",
								slategrey: "rgb(112, 128, 144)",
								snow: "rgb(255, 250, 250)",
								springgreen: "rgb(0, 255, 127)",
								steelblue: "rgb(70, 130, 180)",
								tan: "rgb(210, 180, 140)",
								teal: "rgb(0, 128, 128)",
								thistle: "rgb(216, 191, 216)",
								tomato: "rgb(255, 99, 71)",
								turquoise: "rgb(64, 224, 208)",
								violet: "rgb(238, 130, 238)",
								wheat: "rgb(245, 222, 179)",
								white: "rgb(255, 255, 255)",
								whitesmoke: "rgb(245, 245, 245)",
								yellow: "rgb(255, 255, 0)",
								yellowgreen: "rgb(154, 205, 50)",
								transparent: "rgba(0, 0, 0, 0)",
							};
						const l = {
							isColorName: function (t) {
								return !!c[t];
							},
							getColorByName: function (t) {
								return c[t];
							},
						};
						function u(t, e, n) {
							return (
								n < 0 && (n += 1),
								1 < n && --n,
								n < 1 / 6
									? t + 6 * (e - t) * n
									: n < 0.5
									? e
									: n < 2 / 3
									? t + (e - t) * (2 / 3 - n) * 6
									: t
							);
						}
						function h(t, e, n) {
							var r, o, i, a;
							return (
								1 == arguments.length &&
									((t = (r = arguments[0]).h), (e = r.s), (n = r.l)),
								(t /= 360),
								(n /= 100),
								0 == (e /= 100)
									? (o = i = a = n)
									: ((o = u(
											(e = 2 * n - (n = n < 0.5 ? n * (1 + e) : n + e - n * e)),
											n,
											t + 1 / 3
									  )),
									  (i = u(e, n, t)),
									  (a = u(e, n, t - 1 / 3))),
								{ r: s(255 * o), g: s(255 * i), b: s(255 * a) }
							);
						}
						var p = {
							HUEtoRGB: u,
							HSLtoHSV: function (t, e, n) {
								var r;
								1 == arguments.length &&
									((t = (r = arguments[0]).h), (e = r.s), (n = r.l));
								n = h(t, e, n);
								return $(n.r, n.g, n.b);
							},
							HSLtoRGB: h,
						};
						function v(t, e) {
							(null == e || e > t.length) && (e = t.length);
							for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
							return r;
						}
						var g =
							/(#(?:[\da-f]{3}){1,2}|#(?:[\da-f]{8})|rgb\((?:\s*\d{1,3},\s*){2}\d{1,3}\s*\)|rgba\((?:\s*\d{1,3},\s*){3}\d*\.?\d+\s*\)|hsl\(\s*\d{1,3}(?:,\s*\d{1,3}%){2}\s*\)|hsla\(\s*\d{1,3}(?:,\s*\d{1,3}%){2},\s*\d*\.?\d+\s*\)|([\w_\-]+))/gi;
						function y(n) {
							var t = n.match(g),
								e = [];
							if (!t) return e;
							for (var r, o = 0, i = t.length; o < i; o++)
								-1 < t[o].indexOf("#") ||
								-1 < t[o].indexOf("rgb") ||
								-1 < t[o].indexOf("hsl")
									? e.push({ color: t[o] })
									: (r = l.getColorByName(t[o])) &&
									  e.push({ color: t[o], nameColor: r });
							var a = { next: 0 };
							return (
								e.forEach(function (t) {
									var e = n.indexOf(t.color, a.next);
									(t.startIndex = e),
										(t.endIndex = e + t.color.length),
										(a.next = t.endIndex);
								}),
								e
							);
						}
						function d(n) {
							var t = y(n);
							return (
								t.forEach(function (t, e) {
									n = n.replace(t.color, "@" + e);
								}),
								{ str: n, matches: t }
							);
						}
						function b(t) {
							var e =
									1 < arguments.length && void 0 !== arguments[1]
										? arguments[1]
										: ",",
								n = d(t);
							return n.str.split(e).map(function (t, e) {
								return (
									(t = k(t)),
									(t = n.matches[e]
										? t.replace("@" + e, n.matches[e].color)
										: t)
								);
							});
						}
						function m(n, t) {
							return (
								t.forEach(function (t, e) {
									n = n.replace("@" + e, t.color);
								}),
								n
							);
						}
						function k(t) {
							return t.replace(/^\s+|\s+$/g, "");
						}
						function w(t) {
							if ("string" == typeof t) {
								if (
									-1 <
									(t = l.isColorName(t) ? l.getColorByName(t) : t).indexOf(
										"rgb("
									)
								) {
									for (
										var e = 0,
											n = (o = t
												.replace("rgb(", "")
												.replace(")", "")
												.split(",")).length;
										e < n;
										e++
									)
										o[e] = parseInt(k(o[e]), 10);
									var r = { type: "rgb", r: o[0], g: o[1], b: o[2], a: 1 };
									return Object.assign(r, R(r));
								}
								if (-1 < t.indexOf("rgba(")) {
									for (
										e = 0,
											n = (o = t
												.replace("rgba(", "")
												.replace(")", "")
												.split(",")).length;
										e < n;
										e++
									)
										o[e] =
											n - 1 == e ? parseFloat(k(o[e])) : parseInt(k(o[e]), 10);
									return (
										(r = { type: "rgb", r: o[0], g: o[1], b: o[2], a: o[3] }),
										Object.assign(r, R(r))
									);
								}
								if (-1 < t.indexOf("hsl(")) {
									for (
										e = 0,
											n = (o = t
												.replace("hsl(", "")
												.replace(")", "")
												.split(",")).length;
										e < n;
										e++
									)
										o[e] = parseFloat(k(o[e]));
									return (
										(r = { type: "hsl", h: o[0], s: o[1], l: o[2], a: 1 }),
										Object.assign(r, h(r))
									);
								}
								if (-1 < t.indexOf("hsla(")) {
									for (
										e = 0,
											n = (o = t
												.replace("hsla(", "")
												.replace(")", "")
												.split(",")).length;
										e < n;
										e++
									)
										o[e] =
											n - 1 == e ? parseFloat(k(o[e])) : parseInt(k(o[e]), 10);
									return (
										(r = { type: "hsl", h: o[0], s: o[1], l: o[2], a: o[3] }),
										Object.assign(r, h(r))
									);
								}
								if (0 == t.indexOf("#")) {
									var o = [],
										i = 1;
									if (3 == (t = t.replace("#", "")).length)
										for (e = 0, n = t.length; e < n; e++) {
											var a = t.substr(e, 1);
											o.push(parseInt(a + a, 16));
										}
									else if (8 === t.length) {
										for (e = 0, n = t.length; e < n; e += 2)
											o.push(parseInt(t.substr(e, 2), 16));
										i = o.pop() / 255;
									} else
										for (e = 0, n = t.length; e < n; e += 2)
											o.push(parseInt(t.substr(e, 2), 16));
									return (
										(r = { type: "hex", r: o[0], g: o[1], b: o[2], a: i }),
										Object.assign(r, R(r))
									);
								}
							} else if ("number" == typeof t) {
								if (0 <= t && t <= 16777215)
									return (
										(r = {
											type: "hex",
											r: (16711680 & t) >> 16,
											g: (65280 & t) >> 8,
											b: (255 & t) >> 0,
											a: 1,
										}),
										Object.assign(r, R(r))
									);
								if (0 <= t && t <= 4294967295)
									return (
										(r = {
											type: "hex",
											r: (4278190080 & t) >> 24,
											g: (16711680 & t) >> 16,
											b: (65280 & t) >> 8,
											a: (255 & t) / 255,
										}),
										Object.assign(r, R(r))
									);
							}
							return t;
						}
						function C(n) {
							var r,
								t = (n = (n = "string" == typeof n ? b(n) : n).map(function (
									t
								) {
									if ("string" == typeof t) {
										var e = d(t),
											n = k(e.str).split(" ");
										return (
											n[1]
												? n[1].includes("%")
													? (n[1] = parseFloat(n[1].replace(/%/, "")) / 100)
													: (n[1] = parseFloat(n[1]))
												: (n[1] = "*"),
											(n[0] = m(n[0], e.matches)),
											n
										);
									}
									if (Array.isArray(t))
										return (
											t[1]
												? "string" == typeof t[1] &&
												  (t[1].includes("%")
														? (t[1] = parseFloat(t[1].replace(/%/, "")) / 100)
														: (t[1] = +t[1]))
												: (t[1] = "*"),
											(function (t) {
												if (Array.isArray(t)) return v(t);
											})((r = t)) ||
												(function () {
													if (
														("undefined" != typeof Symbol &&
															null != r[Symbol.iterator]) ||
														null != r["@@iterator"]
													)
														return Array.from(r);
												})() ||
												(function (t) {
													if (t) {
														if ("string" == typeof t) return v(t, void 0);
														var e = Object.prototype.toString
															.call(t)
															.slice(8, -1);
														return "Map" ===
															(e =
																"Object" === e && t.constructor
																	? t.constructor.name
																	: e) || "Set" === e
															? Array.from(t)
															: "Arguments" === e ||
															  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
																	e
															  )
															? v(t, void 0)
															: void 0;
													}
												})(r) ||
												(function () {
													throw new TypeError(
														"Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
													);
												})()
										);
									var r;
								})).filter(function (t) {
									return "*" === t[1];
								}).length;
							return (
								0 < t &&
									((r =
										(1 -
											n
												.filter(function (t) {
													return "*" != t[1] && 1 != t[1];
												})
												.map(function (t) {
													return t[1];
												})
												.reduce(function (t, e) {
													return t + e;
												}, 0)) /
										t),
									n.forEach(function (t, e) {
										"*" == t[1] && 0 < e && (n.length - 1 == e || (t[1] = r));
									})),
								n
							);
						}
						var O = {
							matches: y,
							convertMatches: d,
							convertMatchesArray: b,
							reverseMatches: m,
							parse: w,
							parseGradient: C,
							trim: k,
							color_regexp: g,
							color_split: ",",
						};
						function $(t, e, n) {
							1 == arguments.length &&
								((t = (i = arguments[0]).r), (e = i.g), (n = i.b));
							var r = t / 255,
								o = e / 255,
								i = n / 255,
								t = Math.max(r, o, i),
								e = t - Math.min(r, o, i),
								n = 0;
							return (
								0 == e
									? (n = 0)
									: t == r
									? (n = (((o - i) / e) % 6) * 60)
									: t == o
									? (n = 60 * ((i - r) / e + 2))
									: t == i && (n = 60 * ((r - o) / e + 4)),
								{ h: (n = n < 0 ? 360 + n : n), s: 0 == t ? 0 : e / t, v: t }
							);
						}
						function R(t, e, n) {
							1 == arguments.length &&
								((t = (a = arguments[0]).r), (e = a.g), (n = a.b)),
								(t /= 255),
								(e /= 255),
								(n /= 255);
							var r,
								o = Math.max(t, e, n),
								i = Math.min(t, e, n),
								a = (o + i) / 2;
							if (o == i) r = l = 0;
							else {
								var c = o - i,
									l = 0.5 < a ? c / (2 - o - i) : c / (o + i);
								switch (o) {
									case t:
										r = (e - n) / c + (e < n ? 6 : 0);
										break;
									case e:
										r = (n - t) / c + 2;
										break;
									case n:
										r = (t - e) / c + 4;
								}
								r /= 6;
							}
							return { h: s(360 * r), s: s(100 * l), l: s(100 * a) };
						}
						function x(t) {
							return { r: t, g: t, b: t };
						}
						function _(t, e, n) {
							return Math.ceil(0.2126 * t + 0.7152 * e + 0.0722 * n);
						}
						function P(t, e, n) {
							var r;
							1 == arguments.length &&
								((t = (r = arguments[0]).r), (e = r.g), (n = r.b));
							e = _(t, e, n);
							return { y: e, cr: 0.713 * (t - e), cb: 0.564 * (n - e) };
						}
						function j(t, e) {
							return (
								100 *
								((1 < arguments.length && void 0 !== e ? e : 0.04045) < t
									? Math.pow((t + 0.055) / 1.055, 2.4)
									: t / 12.92)
							);
						}
						function B(t, e, n) {
							var r;
							1 == arguments.length &&
								((t = (r = arguments[0]).r), (e = r.g), (n = r.b));
							(e /= 255), (n /= 255);
							return {
								x:
									0.4124 * (t = j((t = t / 255))) +
									0.3576 * (e = j(e)) +
									0.1805 * (n = j(n)),
								y: 0.2126 * t + 0.7152 * e + 0.0722 * n,
								z: 0.0193 * t + 0.1192 * e + 0.9505 * n,
							};
						}
						var S = {
							RGBtoCMYK: function (t, e, n) {
								1 == arguments.length &&
									((t = (r = arguments[0]).r), (e = r.g), (n = r.b));
								var r = t / 255,
									t = e / 255,
									e = n / 255,
									n = 1 - Math.max(r, t, e);
								return {
									c: (1 - r - n) / (1 - n),
									m: (1 - t - n) / (1 - n),
									y: (1 - e - n) / (1 - n),
									k: n,
								};
							},
							RGBtoGray: function (t, e, n) {
								var r;
								return (
									1 == arguments.length &&
										((t = (r = arguments[0]).r), (e = r.g), (n = r.b)),
									x(P(t, e, n).y)
								);
							},
							RGBtoHSL: R,
							RGBtoHSV: $,
							RGBtoLAB: function (t, e, n) {
								var r;
								return (
									1 == arguments.length &&
										((t = (r = arguments[0]).r), (e = r.g), (n = r.b)),
									XYZtoLAB(B(t, e, n))
								);
							},
							RGBtoSimpleGray: function (t, e, n) {
								var r;
								return (
									1 == arguments.length &&
										((t = (r = arguments[0]).r), (e = r.g), (n = r.b)),
									x(Math.ceil((t + e + n) / 3))
								);
							},
							RGBtoXYZ: B,
							RGBtoYCrCb: P,
							c: function (t, e, n) {
								var r;
								return (
									1 == arguments.length &&
										((t = (r = arguments[0]).r), (e = r.g), (n = r.b)),
									x(90 < (t + e + n) / 3 ? 0 : 255)
								);
							},
							brightness: _,
							gray: x,
						};
						function D(t) {
							return 0.008856 < Math.pow(t, 3)
								? Math.pow(t, 3)
								: (t - 16 / 116) / 7.787;
						}
						function E(t) {
							return 0.0031308 < t
								? 1.055 * Math.pow(t, 1 / 2.4) - 0.055
								: 12.92 * t;
						}
						function M(t, e, n) {
							1 == arguments.length &&
								((t = (o = arguments[0]).x), (e = o.y), (n = o.z));
							var r = t / 100,
								o = e / 100,
								t = n / 100,
								e = -0.9689 * r + 1.8758 * o + 0.0415 * t,
								n = 0.0557 * r + -0.204 * o + 1.057 * t,
								t = E((t = 3.2406 * r + -1.5372 * o + -0.4986 * t)),
								e = E(e),
								n = E(n);
							return { r: s(255 * t), g: s(255 * e), b: s(255 * n) };
						}
						function I(t, e, n) {
							var r;
							1 == arguments.length &&
								((t = (r = arguments[0]).l), (e = r.a), (n = r.b));
							(t = e / 500 + (e = (t + 16) / 116)),
								(n = e - n / 200),
								(e = D(e));
							return {
								x: 95.047 * (t = D(t)),
								y: 100 * e,
								z: 108.883 * (n = D(n)),
							};
						}
						var H = {
							XYZtoRGB: M,
							LABtoRGB: function (t, e, n) {
								var r;
								return (
									1 == arguments.length &&
										((t = (r = arguments[0]).l), (e = r.a), (n = r.b)),
									M(I(t, e, n))
								);
							},
							LABtoXYZ: I,
						};
						function A(t, e, n) {
							1 == arguments.length &&
								((t = (o = arguments[0]).h), (e = o.s), (n = o.v));
							var r = t,
								o = n;
							360 <= r && (r = 0);
							(t = e * o),
								(n = t * (1 - Math.abs(((r / 60) % 2) - 1))),
								(e = o - t),
								(o = []);
							return (
								0 <= r && r < 60
									? (o = [t, n, 0])
									: 60 <= r && r < 120
									? (o = [n, t, 0])
									: 120 <= r && r < 180
									? (o = [0, t, n])
									: 180 <= r && r < 240
									? (o = [0, n, t])
									: 240 <= r && r < 300
									? (o = [n, 0, t])
									: 300 <= r && r < 360 && (o = [t, 0, n]),
								{
									r: s(255 * (o[0] + e)),
									g: s(255 * (o[1] + e)),
									b: s(255 * (o[2] + e)),
								}
							);
						}
						var V = {
								HSVtoHSL: function (t, e, n) {
									var r;
									1 == arguments.length &&
										((t = (r = arguments[0]).h), (e = r.s), (n = r.v));
									n = A(t, e, n);
									return R(n.r, n.g, n.b);
								},
								HSVtoRGB: A,
							},
							L = {
								YCrCbtoRGB: function (t, e, n, r) {
									1 == arguments.length &&
										((t = (o = arguments[0]).y),
										(e = o.cr),
										(n = o.cb),
										(r = o.bit || 0));
									var o = t - 0.344 * (n - r) - 0.714 * (e - r),
										n = t + 1.772 * (n - r);
									return {
										r: Math.ceil(t + 1.402 * (e - r)),
										g: Math.ceil(o),
										b: Math.ceil(n),
									};
								},
							};
						function U(t, e) {
							var n =
									2 < arguments.length && void 0 !== arguments[2]
										? arguments[2]
										: 0.5,
								r =
									3 < arguments.length && void 0 !== arguments[3]
										? arguments[3]
										: "hex",
								n = {
									r: s(t.r + (e.r - t.r) * n),
									g: s(t.g + (e.g - t.g) * n),
									b: s(t.b + (e.b - t.b) * n),
									a: s(t.a + (e.a - t.a) * n, 100),
								};
							return f(n, n.a < 1 ? "rgb" : r);
						}
						function F(t) {
							var e =
								1 < arguments.length && void 0 !== arguments[1]
									? arguments[1]
									: 5;
							if (!t) return [];
							for (
								var n = (t = (t = "string" == typeof t ? b(t) : t) || [])
										.length,
									r = [],
									o = 0;
								o < n - 1;
								o++
							)
								for (var i = 0; i < e; i++) r.push(T(t[o], t[o + 1], i / e));
							return r;
						}
						function T(t, e) {
							var n =
									2 < arguments.length && void 0 !== arguments[2]
										? arguments[2]
										: 0.5,
								r =
									3 < arguments.length && void 0 !== arguments[3]
										? arguments[3]
										: "hex";
							return U(w(t), w(e), n, r);
						}
						function z(t) {
							return (
								(t = w(t)),
								(Math.round(299 * t.r) +
									Math.round(587 * t.g) +
									Math.round(114 * t.b)) /
									1e3
							);
						}
						function G(t) {
							for (
								var e =
										1 < arguments.length && void 0 !== arguments[1]
											? arguments[1]
											: "h",
									n =
										2 < arguments.length && void 0 !== arguments[2]
											? arguments[2]
											: 9,
									r =
										3 < arguments.length && void 0 !== arguments[3]
											? arguments[3]
											: "rgb",
									o =
										4 < arguments.length && void 0 !== arguments[4]
											? arguments[4]
											: 0,
									i =
										5 < arguments.length && void 0 !== arguments[5]
											? arguments[5]
											: 1,
									a =
										6 < arguments.length && void 0 !== arguments[6]
											? arguments[6]
											: 100,
									c = $(w(t)),
									l = ((i - o) * a) / n,
									s = [],
									u = 1;
								u <= n;
								u++
							)
								(c[e] = Math.abs((a - l * u) / a)), s.push(f(A(c), r));
							return s;
						}
						(F.parula = function (t) {
							return F(
								["#352a87", "#0f5cdd", "#00b5a6", "#ffc337", "#fdff00"],
								t
							);
						}),
							(F.jet = function (t) {
								return F(
									[
										"#00008f",
										"#0020ff",
										"#00ffff",
										"#51ff77",
										"#fdff00",
										"#ff0000",
										"#800000",
									],
									t
								);
							}),
							(F.hsv = function (t) {
								return F(
									[
										"#ff0000",
										"#ffff00",
										"#00ff00",
										"#00ffff",
										"#0000ff",
										"#ff00ff",
										"#ff0000",
									],
									t
								);
							}),
							(F.hot = function (t) {
								return F(["#0b0000", "#ff0000", "#ffff00", "#ffffff"], t);
							}),
							(F.pink = function (t) {
								return F(["#1e0000", "#bd7b7b", "#e7e5b2", "#ffffff"], t);
							}),
							(F.bone = function (t) {
								return F(["#000000", "#4a4a68", "#a6c6c6", "#ffffff"], t);
							}),
							(F.copper = function (t) {
								return F(
									["#000000", "#3d2618", "#9d623e", "#ffa167", "#ffc77f"],
									t
								);
							});
						var X = {
							interpolateRGB: U,
							blend: T,
							mix: function (t, e) {
								return T(
									t,
									e,
									2 < arguments.length && void 0 !== arguments[2]
										? arguments[2]
										: 0.5,
									3 < arguments.length && void 0 !== arguments[3]
										? arguments[3]
										: "hex"
								);
							},
							scale: F,
							contrast: z,
							contrastColor: function (t) {
								return 128 <= z(t) ? "black" : "white";
							},
							gradient: function (t) {
								for (
									var e = [],
										n =
											(1 < arguments.length && void 0 !== arguments[1]
												? arguments[1]
												: 10) -
											((t = C(t)).length - 1),
										r = n,
										o = 1,
										i = t.length;
									o < i;
									o++
								) {
									var a = t[o - 1][0],
										c = t[o][0],
										l = 1 == o ? t[o][1] : t[o][1] - t[o - 1][1],
										l = o == t.length - 1 ? r : Math.floor(l * n),
										e = e.concat(F([a, c], l), [c]);
									r -= l;
								}
								return e;
							},
							scaleHSV: G,
							scaleH: function (t) {
								return G(
									t,
									"h",
									1 < arguments.length && void 0 !== arguments[1]
										? arguments[1]
										: 9,
									2 < arguments.length && void 0 !== arguments[2]
										? arguments[2]
										: "rgb",
									3 < arguments.length && void 0 !== arguments[3]
										? arguments[3]
										: 0,
									4 < arguments.length && void 0 !== arguments[4]
										? arguments[4]
										: 360,
									1
								);
							},
							scaleS: function (t) {
								return G(
									t,
									"s",
									1 < arguments.length && void 0 !== arguments[1]
										? arguments[1]
										: 9,
									2 < arguments.length && void 0 !== arguments[2]
										? arguments[2]
										: "rgb",
									3 < arguments.length && void 0 !== arguments[3]
										? arguments[3]
										: 0,
									4 < arguments.length && void 0 !== arguments[4]
										? arguments[4]
										: 1,
									100
								);
							},
							scaleV: function (t) {
								return G(
									t,
									"v",
									1 < arguments.length && void 0 !== arguments[1]
										? arguments[1]
										: 9,
									2 < arguments.length && void 0 !== arguments[2]
										? arguments[2]
										: "rgb",
									3 < arguments.length && void 0 !== arguments[3]
										? arguments[3]
										: 0,
									4 < arguments.length && void 0 !== arguments[4]
										? arguments[4]
										: 1,
									100
								);
							},
						};
						function Y(e, t) {
							var n,
								r = Object.keys(e);
							return (
								Object.getOwnPropertySymbols &&
									((n = Object.getOwnPropertySymbols(e)),
									t &&
										(n = n.filter(function (t) {
											return Object.getOwnPropertyDescriptor(e, t).enumerable;
										})),
									r.push.apply(r, n)),
								r
							);
						}
						function N(r) {
							for (var t = 1; t < arguments.length; t++) {
								var o = null != arguments[t] ? arguments[t] : {};
								t % 2
									? Y(Object(o), !0).forEach(function (t) {
											var e, n;
											(e = r),
												(t = o[(n = t)]),
												n in e
													? Object.defineProperty(e, n, {
															value: t,
															enumerable: !0,
															configurable: !0,
															writable: !0,
													  })
													: (e[n] = t);
									  })
									: Object.getOwnPropertyDescriptors
									? Object.defineProperties(
											r,
											Object.getOwnPropertyDescriptors(o)
									  )
									: Y(Object(o)).forEach(function (t) {
											Object.defineProperty(
												r,
												t,
												Object.getOwnPropertyDescriptor(o, t)
											);
									  });
							}
							return r;
						}
						const q = N(
							N(
								N(
									N(N(N(N(N(N(N({}, e), n), X), O), L), S), {
										CMYKtoRGB: function (t, e, n, r) {
											var o;
											return (
												1 == arguments.length &&
													((t = (o = arguments[0]).c),
													(e = o.m),
													(n = o.y),
													(r = o.k)),
												{
													r: 255 * (1 - t) * (1 - r),
													g: 255 * (1 - e) * (1 - r),
													b: 255 * (1 - n) * (1 - r),
												}
											);
										},
									}),
									V
								),
								p
							),
							H
						);
						function W(t) {
							return null == t;
						}
						function K(e, t) {
							var n,
								r = Object.keys(e);
							return (
								Object.getOwnPropertySymbols &&
									((n = Object.getOwnPropertySymbols(e)),
									t &&
										(n = n.filter(function (t) {
											return Object.getOwnPropertyDescriptor(e, t).enumerable;
										})),
									r.push.apply(r, n)),
								r
							);
						}
						function Z(r) {
							for (var t = 1; t < arguments.length; t++) {
								var o = null != arguments[t] ? arguments[t] : {};
								t % 2
									? K(Object(o), !0).forEach(function (t) {
											var e, n;
											(e = r),
												(t = o[(n = t)]),
												n in e
													? Object.defineProperty(e, n, {
															value: t,
															enumerable: !0,
															configurable: !0,
															writable: !0,
													  })
													: (e[n] = t);
									  })
									: Object.getOwnPropertyDescriptors
									? Object.defineProperties(
											r,
											Object.getOwnPropertyDescriptors(o)
									  )
									: K(Object(o)).forEach(function (t) {
											Object.defineProperty(
												r,
												t,
												Object.getOwnPropertyDescriptor(o, t)
											);
									  });
							}
							return r;
						}
						var J = [
							Z({ rgb: "#ff0000", start: 0 }, q.parse("#ff0000")),
							Z({ rgb: "#ffff00", start: 0.17 }, q.parse("#ffff00")),
							Z({ rgb: "#00ff00", start: 0.33 }, q.parse("#00ff00")),
							Z({ rgb: "#00ffff", start: 0.5 }, q.parse("#00ffff")),
							Z({ rgb: "#0000ff", start: 0.67 }, q.parse("#0000ff")),
							Z({ rgb: "#ff00ff", start: 0.83 }, q.parse("#ff00ff")),
							Z({ rgb: "#ff0000", start: 1 }, q.parse("#ff0000")),
						];
						function Q(t) {
							for (var e, n, r = 0; r < J.length; r++)
								if (J[r].start >= t) {
									(e = J[r - 1]), (n = J[r]);
									break;
								}
							return e && n
								? q.mix(e.rgb, n.rgb, (t - e.start) / (n.start - e.start))
								: J[0].rgb;
						}
						H = {
							colors: J,
							checkHueColor: Q,
							getHueScale: function (t) {
								for (
									var e =
											1 < arguments.length && void 0 !== arguments[1]
												? arguments[1]
												: 0.1,
										n = 2 < arguments.length ? arguments[2] : void 0,
										r = W(n) ? t - e : e,
										o = W(n) ? t + scale : n,
										i = [],
										a = 0;
									a < J.length;
									a++
								) {
									var c = J[a];
									r <= c.start && c.start < o
										? i.push({ rgb: c.rgb, start: c.start })
										: J[a + 1] && c.start < r && r < J[a + 1].start
										? i.push({ rgb: Q(r), start: r })
										: J[a - 1] && J[a - 1].start < o && o < c.start
										? i.push({ rgb: Q(o), start: o })
										: c.start < r ||
										  c.start > o ||
										  i.push({ rgb: c.rgb, start: c.start });
								}
								return i;
							},
						};
						function tt(e, t) {
							var n,
								r = Object.keys(e);
							return (
								Object.getOwnPropertySymbols &&
									((n = Object.getOwnPropertySymbols(e)),
									t &&
										(n = n.filter(function (t) {
											return Object.getOwnPropertyDescriptor(e, t).enumerable;
										})),
									r.push.apply(r, n)),
								r
							);
						}
						function et(r) {
							for (var t = 1; t < arguments.length; t++) {
								var o = null != arguments[t] ? arguments[t] : {};
								t % 2
									? tt(Object(o), !0).forEach(function (t) {
											var e, n;
											(e = r),
												(t = o[(n = t)]),
												n in e
													? Object.defineProperty(e, n, {
															value: t,
															enumerable: !0,
															configurable: !0,
															writable: !0,
													  })
													: (e[n] = t);
									  })
									: Object.getOwnPropertyDescriptors
									? Object.defineProperties(
											r,
											Object.getOwnPropertyDescriptors(o)
									  )
									: tt(Object(o)).forEach(function (t) {
											Object.defineProperty(
												r,
												t,
												Object.getOwnPropertyDescriptor(o, t)
											);
									  });
							}
							return r;
						}
						const nt = et(et(et({}, q), H), l);
						return t.default;
					})());
			},
		},
		r = {};
	function Tt(t) {
		var e = r[t];
		if (void 0 !== e) return e.exports;
		e = r[t] = { exports: {} };
		return n[t](e, e.exports, Tt), e.exports;
	}
	(Tt.n = function (t) {
		var e =
			t && t.__esModule
				? function () {
						return t.default;
				  }
				: function () {
						return t;
				  };
		return Tt.d(e, { a: e }), e;
	}),
		(Tt.d = function (t, e) {
			for (var n in e)
				Tt.o(e, n) &&
					!Tt.o(t, n) &&
					Object.defineProperty(t, n, { enumerable: !0, get: e[n] });
		}),
		(Tt.o = function (t, e) {
			return Object.prototype.hasOwnProperty.call(t, e);
		});
	var zt = {};
	return (
		(function () {
			"use strict";
			function a(t, e) {
				if (!(t instanceof e))
					throw new TypeError("Cannot call a class as a function");
			}
			function r(t, e) {
				for (var n = 0; n < e.length; n++) {
					var r = e[n];
					(r.enumerable = r.enumerable || !1),
						(r.configurable = !0),
						"value" in r && (r.writable = !0),
						Object.defineProperty(t, r.key, r);
				}
			}
			function o(t, e, n) {
				return e && r(t.prototype, e), n && r(t, n), t;
			}
			function n(t, e) {
				return (n =
					Object.setPrototypeOf ||
					function (t, e) {
						return (t.__proto__ = e), t;
					})(t, e);
			}
			function i(t, e) {
				if ("function" != typeof e && null !== e)
					throw new TypeError(
						"Super expression must either be null or a function"
					);
				(t.prototype = Object.create(e && e.prototype, {
					constructor: { value: t, writable: !0, configurable: !0 },
				})),
					e && n(t, e);
			}
			function c(t) {
				return (c =
					"function" == typeof Symbol && "symbol" == typeof Symbol.iterator
						? function (t) {
								return typeof t;
						  }
						: function (t) {
								return t &&
									"function" == typeof Symbol &&
									t.constructor === Symbol &&
									t !== Symbol.prototype
									? "symbol"
									: typeof t;
						  })(t);
			}
			function l(t, e) {
				return !e || ("object" !== c(e) && "function" != typeof e)
					? (function (t) {
							if (void 0 === t)
								throw new ReferenceError(
									"this hasn't been initialised - super() hasn't been called"
								);
							return t;
					  })(t)
					: e;
			}
			function s(t) {
				return (s = Object.setPrototypeOf
					? Object.getPrototypeOf
					: function (t) {
							return t.__proto__ || Object.getPrototypeOf(t);
					  })(t);
			}
			function u(t, e, n) {
				return (u =
					"undefined" != typeof Reflect && Reflect.get
						? Reflect.get
						: function (t, e, n) {
								t = (function (t, e) {
									for (
										;
										!Object.prototype.hasOwnProperty.call(t, e) &&
										null !== (t = s(t));

									);
									return t;
								})(t, e);
								if (t) {
									e = Object.getOwnPropertyDescriptor(t, e);
									return e.get ? e.get.call(n) : e.value;
								}
						  })(t, e, n || t);
			}
			function f(t, e) {
				(null == e || e > t.length) && (e = t.length);
				for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
				return r;
			}
			function h(t) {
				if (
					("undefined" != typeof Symbol && null != t[Symbol.iterator]) ||
					null != t["@@iterator"]
				)
					return Array.from(t);
			}
			function p(t, e) {
				if (t) {
					if ("string" == typeof t) return f(t, e);
					var n = Object.prototype.toString.call(t).slice(8, -1);
					return "Map" ===
						(n = "Object" === n && t.constructor ? t.constructor.name : n) ||
						"Set" === n
						? Array.from(t)
						: "Arguments" === n ||
						  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
						? f(t, e)
						: void 0;
				}
			}
			function v(t) {
				return (
					(function (t) {
						if (Array.isArray(t)) return f(t);
					})(t) ||
					h(t) ||
					p(t) ||
					(function () {
						throw new TypeError(
							"Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
						);
					})()
				);
			}
			Tt.d(zt, {
				default: function () {
					return Ft;
				},
			});
			var g = 0,
				y = [],
				d = (function () {
					function i(t, e, n) {
						if ((a(this, i), "string" != typeof t)) this.el = t;
						else {
							var r,
								o = document.createElement(t);
							for (r in ((this.uniqId = g++),
							e && (o.className = e),
							(n = n || {})))
								o.setAttribute(r, n[r]);
							this.el = o;
						}
					}
					return (
						o(
							i,
							[
								{
									key: "attr",
									value: function (t, e) {
										return 1 === arguments.length
											? this.el.getAttribute(t)
											: (this.el.setAttribute(t, e), this);
									},
								},
								{
									key: "html",
									value: function (t) {
										try {
											"string" == typeof t
												? (this.el.innerHTML = t)
												: this.empty().append(t);
										} catch (t) {}
										return this;
									},
								},
								{
									key: "find",
									value: function (t) {
										return this.el.querySelector(t);
									},
								},
								{
									key: "$",
									value: function (t) {
										return new i(this.find(t));
									},
								},
								{
									key: "findAll",
									value: function (t) {
										return this.el.querySelectorAll(t);
									},
								},
								{
									key: "$$",
									value: function (t) {
										return v(this.findAll(t)).map(function (t) {
											return new i(t);
										});
									},
								},
								{
									key: "empty",
									value: function () {
										return this.html("");
									},
								},
								{
									key: "append",
									value: function (t) {
										return (
											"string" == typeof t
												? this.el.appendChild(document.createTextNode(t))
												: this.el.appendChild(t.el || t),
											this
										);
									},
								},
								{
									key: "appendTo",
									value: function (t) {
										return (t.el || t).appendChild(this.el), this;
									},
								},
								{
									key: "css",
									value: function (t, e) {
										var n = this;
										if (2 === arguments.length) this.el.style[t] = e;
										else if (1 === arguments.length) {
											if ("string" == typeof t)
												return getComputedStyle(this.el)[t];
											var r = t || {};
											Object.keys(r).forEach(function (t) {
												n.el.style[t] = r[t];
											});
										}
										return this;
									},
								},
								{
									key: "offset",
									value: function () {
										var t = this.el.getBoundingClientRect();
										return {
											top: t.top + i.getScrollTop(),
											left: t.left + i.getScrollLeft(),
										};
									},
								},
								{
									key: "position",
									value: function () {
										return this.el.style.top
											? {
													top: parseFloat(this.css("top")),
													left: parseFloat(this.css("left")),
											  }
											: this.el.getBoundingClientRect();
									},
								},
								{
									key: "size",
									value: function () {
										return [this.width(), this.height()];
									},
								},
								{
									key: "width",
									value: function () {
										return (
											this.el.offsetWidth ||
											this.el.getBoundingClientRect().width
										);
									},
								},
								{
									key: "height",
									value: function () {
										return (
											this.el.offsetHeight ||
											this.el.getBoundingClientRect().height
										);
									},
								},
								{
									key: "dataKey",
									value: function (t) {
										return this.uniqId + "." + t;
									},
								},
								{
									key: "data",
									value: function (t, e) {
										if (2 === arguments.length)
											return (y[this.dataKey(t)] = e), this;
										if (1 === arguments.length) return y[this.dataKey(t)];
										var t = Object.keys(y),
											n = this.uniqId + ".";
										return t
											.filter(function (t) {
												return 0 === t.indexOf(n);
											})
											.map(function (t) {
												return y[t];
											});
									},
								},
								{
									key: "val",
									value: function (t) {
										return 0 === arguments.length
											? this.el.value
											: (1 === arguments.length && (this.el.value = t), this);
									},
								},
								{
									key: "int",
									value: function () {
										return parseInt(this.val(), 10);
									},
								},
								{
									key: "float",
									value: function () {
										return parseFloat(this.val());
									},
								},
								{
									key: "scrollTop",
									value: function () {
										return this.el === document.body
											? i.getScrollTop()
											: this.el.scrollTop;
									},
								},
								{
									key: "scrollLeft",
									value: function () {
										return this.el === document.body
											? i.getScrollLeft()
											: this.el.scrollLeft;
									},
								},
								{
									key: "on",
									value: function (t, e, n, r) {
										return this.el.addEventListener(t, e, n, r), this;
									},
								},
								{
									key: "off",
									value: function (t, e) {
										return this.el.removeEventListener(t, e), this;
									},
								},
								{
									key: "getElement",
									value: function () {
										return this.el;
									},
								},
								{
									key: "createChild",
									value: function (t) {
										var e =
												1 < arguments.length && void 0 !== arguments[1]
													? arguments[1]
													: "",
											n =
												2 < arguments.length && void 0 !== arguments[2]
													? arguments[2]
													: {},
											r =
												3 < arguments.length && void 0 !== arguments[3]
													? arguments[3]
													: {},
											n = new i(t, e, n);
										return n.css(r), this.append(n), n;
									},
								},
								{
									key: "firstChild",
									value: function () {
										return new i(this.el.firstElementChild);
									},
								},
								{
									key: "replace",
									value: function (t, e) {
										return this.el.replaceChild(e, t), this;
									},
								},
							],
							[
								{
									key: "getScrollTop",
									value: function () {
										return Math.max(
											window.pageYOffset,
											document.documentElement.scrollTop,
											document.body.scrollTop
										);
									},
								},
								{
									key: "getScrollLeft",
									value: function () {
										return Math.max(
											window.pageXOffset,
											document.documentElement.scrollLeft,
											document.body.scrollLeft
										);
									},
								},
							]
						),
						i
					);
				})();
			function b(t) {
				if (Array.isArray(t)) return t;
			}
			function m() {
				throw new TypeError(
					"Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
				);
			}
			var k = {
					addEvent: function (t, e, n, r) {
						t && t.addEventListener(e, n, r);
					},
					removeEvent: function (t, e, n) {
						t && t.removeEventListener(e, n);
					},
					pos: function (t) {
						return t.touches && t.touches[0] ? t.touches[0] : t;
					},
					posXY: function (t) {
						t = this.pos(t);
						return { x: t.pageX, y: t.pageY };
					},
				},
				e = (function () {
					function n(t) {
						var e =
							1 < arguments.length && void 0 !== arguments[1]
								? arguments[1]
								: {};
						a(this, n), (this.masterObj = t), (this.settingObj = e);
					}
					return (
						o(n, [
							{
								key: "set",
								value: function (t, e) {
									this.settingObj[t] =
										e ||
										(2 < arguments.length && void 0 !== arguments[2]
											? arguments[2]
											: void 0);
								},
							},
							{
								key: "init",
								value: function (t) {
									if (!this.has(t) || !this.settingObj[t]) {
										var e = t.split("."),
											n =
												this.masterObj.refs[e[0]] ||
												this.masterObj[e[0]] ||
												this.masterObj,
											e = e.pop();
										if (n[e]) {
											for (
												var r = arguments.length,
													o = new Array(1 < r ? r - 1 : 0),
													i = 1;
												i < r;
												i++
											)
												o[i - 1] = arguments[i];
											n = n[e].apply(n, o);
											this.set(t, n);
										}
									}
								},
							},
							{
								key: "get",
								value: function (t) {
									var e =
										1 < arguments.length && void 0 !== arguments[1]
											? arguments[1]
											: "";
									return this.init(t, e), this.settingObj[t] || e;
								},
							},
							{
								key: "has",
								value: function (t) {
									return !!this.settingObj[t];
								},
							},
						]),
						n
					);
				})(),
				w =
					/^(click|mouse(down|up|move|enter|leave)|touch(start|move|end)|key(down|up|press)|contextmenu|change|input)/gi,
				C = /^load (.*)/gi,
				O = ["Control", "Shift", "Alt", "Meta"],
				t = (function () {
					function t() {
						a(this, t),
							(this.state = new e(this)),
							(this.refs = {}),
							(this.childComponents = this.components());
					}
					return (
						o(t, [
							{
								key: "newChildComponents",
								value: function () {
									var n = this;
									Object.keys(this.childComponents).forEach(function (t) {
										var e = n.childComponents[t];
										n[t] = new e(n);
									});
								},
							},
							{
								key: "render",
								value: function (t) {
									this.template() &&
										((this.$el = this.template()
											? this.parseTemplate(this.template())
											: null),
										(this.refs.$el = this.$el),
										t && t.append(this.$el),
										this.parseTarget(),
										this.load(),
										this.afterRender());
								},
							},
							{ key: "afterRender", value: function () {} },
							{
								key: "components",
								value: function () {
									return {};
								},
							},
							{
								key: "parseTemplate",
								value: function (t) {
									var n = this,
										t = new d("div").html(t).firstChild();
									return (
										v(t.findAll("[ref]")).forEach(function (t) {
											var e = t.getAttribute("ref");
											n.refs[e] = new d(t);
										}),
										t
									);
								},
							},
							{
								key: "parseTarget",
								value: function () {
									var r = this;
									v(this.$el.findAll("[target]")).forEach(function (t) {
										var e = t.getAttribute("target"),
											n = t.getAttribute("ref") || e,
											e = new r.childComponents[e](r);
										(r[n] = e),
											(r.refs[n] = e.$el),
											e &&
												(e.render(),
												(n = new d(t.parentNode)),
												e.$el && n.replace(t, e.$el.el));
									});
								},
							},
							{
								key: "load",
								value: function () {
									var n = this;
									this.filterProps(C).forEach(function (t) {
										var e = t.split("load ")[1];
										n.refs[e] && n.refs[e].html(n.parseTemplate(n[t].call(n)));
									});
								},
							},
							{
								key: "template",
								value: function () {
									return "<div></div>";
								},
							},
							{ key: "initialize", value: function () {} },
							{
								key: "initializeEvent",
								value: function () {
									var e = this;
									this.initializeEventMachine(),
										Object.keys(this.childComponents).forEach(function (t) {
											e[t] && e[t].initializeEvent();
										});
								},
							},
							{
								key: "destroy",
								value: function () {
									var e = this;
									this.destroyEventMachine(),
										Object.keys(this.childComponents).forEach(function (t) {
											e[t] && e[t].destroy();
										});
								},
							},
							{
								key: "destroyEventMachine",
								value: function () {
									this.removeEventAll();
								},
							},
							{
								key: "initializeEventMachine",
								value: function () {
									this.filterProps(w).forEach(this.parseEvent.bind(this));
								},
							},
							{
								key: "collectProps",
								value: function () {
									if (!this.collapsedProps) {
										for (
											var t = this.__proto__, e = [];
											e.push.apply(e, v(Object.getOwnPropertyNames(t))),
												(t = t.__proto__);

										);
										this.collapsedProps = e;
									}
									return this.collapsedProps;
								},
							},
							{
								key: "filterProps",
								value: function (e) {
									return this.collectProps().filter(function (t) {
										return t.match(e);
									});
								},
							},
							{
								key: "parseEvent",
								value: function (t) {
									var e = t.split(" ");
									this.bindingEvent(e, this[t].bind(this));
								},
							},
							{
								key: "getDefaultDomElement",
								value: function (t) {
									t = t
										? this.refs[t] || this[t] || window[t]
										: this.el || this.$el || this.$root;
									return t instanceof d ? t.getElement() : t;
								},
							},
							{
								key: "getDefaultEventObject",
								value: function (t) {
									var e = this,
										n = t.split("."),
										r = n.shift(),
										o = n.includes("Control"),
										i = n.includes("Shift"),
										a = n.includes("Alt"),
										t = n.includes("Meta"),
										c = (n = n.filter(function (t) {
											return !1 === O.includes(t);
										})).filter(function (t) {
											return !!e[t];
										});
									return {
										eventName: r,
										isControl: o,
										isShift: i,
										isAlt: a,
										isMeta: t,
										codes: (n = n
											.filter(function (t) {
												return !1 === c.includes(t);
											})
											.map(function (t) {
												return t.toLowerCase();
											})),
										checkMethodList: c,
									};
								},
							},
							{
								key: "bindingEvent",
								value: function (t, e) {
									var n = b((r = t)) || h(r) || p(r) || m(),
										t = n[0],
										r = n[1],
										n = n.slice(2),
										r = this.getDefaultDomElement(r),
										t = this.getDefaultEventObject(t);
									(t.dom = r), (t.delegate = n.join(" ")), this.addEvent(t, e);
								},
							},
							{
								key: "matchPath",
								value: function (t, e) {
									return t
										? t.matches(e)
											? t
											: this.matchPath(t.parentElement, e)
										: null;
								},
							},
							{
								key: "getBindings",
								value: function () {
									return this._bindings || this.initBindings(), this._bindings;
								},
							},
							{
								key: "addBinding",
								value: function (t) {
									this.getBindings().push(t);
								},
							},
							{
								key: "initBindings",
								value: function () {
									this._bindings = [];
								},
							},
							{
								key: "checkEventType",
								value: function (e, t) {
									var n = this,
										r = !t.isControl || e.ctrlKey,
										o = !t.isShift || e.shiftKey,
										i = !t.isAlt || e.altKey,
										a = !t.isMeta || e.metaKey,
										c = !0;
									t.codes.length &&
										(c =
											t.codes.includes(e.code.toLowerCase()) ||
											t.codes.includes(e.key.toLowerCase()));
									var l = !0;
									return (
										t.checkMethodList.length &&
											(l = t.checkMethodList.every(function (t) {
												return n[t].call(n, e);
											})),
										r && i && o && a && c && l
									);
								},
							},
							{
								key: "makeCallback",
								value: function (n, r) {
									var o = this;
									return n.delegate
										? function (t) {
												if (((t.xy = k.posXY(t)), o.checkEventType(t, n))) {
													var e = o.matchPath(
														t.target || t.srcElement,
														n.delegate
													);
													if (e)
														return (
															(t.delegateTarget = e),
															(t.$delegateTarget = new d(e)),
															r(t)
														);
												}
										  }
										: function (t) {
												if (((t.xy = k.posXY(t)), o.checkEventType(t, n)))
													return r(t);
										  };
								},
							},
							{
								key: "addEvent",
								value: function (t, e) {
									(t.callback = this.makeCallback(t, e)), this.addBinding(t);
									e = !0;
									"touchstart" === t.eventName && (e = { passive: !0 }),
										k.addEvent(t.dom, t.eventName, t.callback, e);
								},
							},
							{
								key: "removeEventAll",
								value: function () {
									var e = this;
									this.getBindings().forEach(function (t) {
										e.removeEvent(t);
									}),
										this.initBindings();
								},
							},
							{
								key: "removeEvent",
								value: function (t) {
									var e = t.eventName,
										n = t.dom,
										t = t.callback;
									k.removeEvent(n, e, t);
								},
							},
						]),
						t
					);
				})();
			function $(n) {
				var r = (function () {
					if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
					if (Reflect.construct.sham) return !1;
					if ("function" == typeof Proxy) return !0;
					try {
						return (
							Boolean.prototype.valueOf.call(
								Reflect.construct(Boolean, [], function () {})
							),
							!0
						);
					} catch (t) {
						return !1;
					}
				})();
				return function () {
					var t,
						e = s(n);
					return l(
						this,
						r
							? ((t = s(this).constructor), Reflect.construct(e, arguments, t))
							: e.apply(this, arguments)
					);
				};
			}
			var R = /^@/,
				x = (function () {
					i(r, t);
					var n = $(r);
					function r(t) {
						var e;
						return (
							a(this, r),
							((e = n.call(this, t)).opt = t && t.opt ? t.opt : t || {}),
							t && t.$store && (e.$store = t.$store),
							e.initialize(),
							e.initializeStoreEvent(),
							e
						);
					}
					return (
						o(r, [
							{
								key: "initializeStoreEvent",
								value: function () {
									var n = this;
									(this.storeEvents = {}),
										this.filterProps(R).forEach(function (t) {
											var e = t.split("@");
											e.shift();
											e = e.join("@");
											(n.storeEvents[e] = n[t].bind(n)),
												n.$store.on(e, n.storeEvents[e]);
										});
								},
							},
						]),
						r
					);
				})();
			function _(t, e, n) {
				return (
					e in t
						? Object.defineProperty(t, e, {
								value: n,
								enumerable: !0,
								configurable: !0,
								writable: !0,
						  })
						: (t[e] = n),
					t
				);
			}
			var P = Tt(317),
				j = Tt.n(P),
				B = (function () {
					function e(t) {
						a(this, e), (this.$store = t), this.initialize();
					}
					return (
						o(e, [
							{
								key: "initialize",
								value: function () {
									var e = this;
									this.filterProps().forEach(function (t) {
										e.$store.action(t, e);
									});
								},
							},
							{
								key: "filterProps",
								value: function () {
									var e =
										0 < arguments.length && void 0 !== arguments[0]
											? arguments[0]
											: "/";
									return Object.getOwnPropertyNames(this.__proto__).filter(
										function (t) {
											return t.startsWith(e);
										}
									);
								},
							},
						]),
						e
					);
				})();
			function S(e, t) {
				var n,
					r = Object.keys(e);
				return (
					Object.getOwnPropertySymbols &&
						((n = Object.getOwnPropertySymbols(e)),
						t &&
							(n = n.filter(function (t) {
								return Object.getOwnPropertyDescriptor(e, t).enumerable;
							})),
						r.push.apply(r, n)),
					r
				);
			}
			function D(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2
						? S(Object(n), !0).forEach(function (t) {
								_(e, t, n[t]);
						  })
						: Object.getOwnPropertyDescriptors
						? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
						: S(Object(n)).forEach(function (t) {
								Object.defineProperty(
									e,
									t,
									Object.getOwnPropertyDescriptor(n, t)
								);
						  });
				}
				return e;
			}
			function E(n) {
				var r = (function () {
					if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
					if (Reflect.construct.sham) return !1;
					if ("function" == typeof Proxy) return !0;
					try {
						return (
							Boolean.prototype.valueOf.call(
								Reflect.construct(Boolean, [], function () {})
							),
							!0
						);
					} catch (t) {
						return !1;
					}
				})();
				return function () {
					var t,
						e = s(n);
					return l(
						this,
						r
							? ((t = s(this).constructor), Reflect.construct(e, arguments, t))
							: e.apply(this, arguments)
					);
				};
			}
			var M = (function () {
				i(e, B);
				var t = E(e);
				function e() {
					return a(this, e), t.apply(this, arguments);
				}
				return (
					o(e, [
						{
							key: "initialize",
							value: function () {
								u(s(e.prototype), "initialize", this).call(this),
									(this.$store.rgb = {}),
									(this.$store.hsl = {}),
									(this.$store.hsv = {}),
									(this.$store.alpha = 1),
									(this.$store.format = "hex");
							},
						},
						{
							key: "/changeFormat",
							value: function (t, e) {
								(t.format = e), t.emit("changeFormat");
							},
						},
						{
							key: "/initColor",
							value: function (t, e) {
								t.dispatch("/changeColor", e, !0), t.emit("initColor");
							},
						},
						{
							key: "/changeColor",
							value: function (t, e, n) {
								switch (
									("string" == typeof (e = e || "#ffffff") &&
										(e = j().parse(e)),
									(t.alpha = void 0 === e.a || null === e.a ? t.alpha : e.a),
									t.format ||
										(t.format = ("hsv" !== e.type && e.type) || "hex"),
									e.type)
								) {
									case "hsl":
										(t.hsl = Object.assign(t.hsl, e)),
											(t.rgb = j().HSLtoRGB(t.hsl)),
											(t.hsv = j().HSLtoHSV(e));
										break;
									case "hex":
									case "rgb":
										(t.rgb = Object.assign(t.rgb, e)),
											(t.hsl = j().RGBtoHSL(t.rgb)),
											(t.hsv = j().RGBtoHSV(e));
										break;
									case "hsv":
										(t.hsv = Object.assign(t.hsv, e)),
											(t.rgb = j().HSVtoRGB(t.hsv)),
											(t.hsl = j().HSVtoHSL(t.hsv));
								}
								n || t.emit("changeColor", e);
							},
						},
						{
							key: "/getHueColor",
							value: function (t) {
								return j().checkHueColor(t.hsv.h / 360);
							},
						},
						{
							key: "/toString",
							value: function (t, e) {
								var n = t[(e = e || t.format)] || t.rgb;
								return j().format(D(D({}, n), {}, { a: t.alpha }), e);
							},
						},
						{
							key: "/toColor",
							value: function (t, e) {
								switch ((e = e || t.format)) {
									case "rgb":
										return t.dispatch("/toRGB");
									case "hsl":
										return t.dispatch("/toHSL");
									case "hex":
										return t.dispatch("/toHEX");
									default:
										return t.dispatch("/toString", e);
								}
							},
						},
						{
							key: "/toRGB",
							value: function (t) {
								return t.dispatch("/toString", "rgb");
							},
						},
						{
							key: "/toHSL",
							value: function (t) {
								return t.dispatch("/toString", "hsl");
							},
						},
						{
							key: "/toHEX",
							value: function (t) {
								return t.dispatch("/toString", "hex").toUpperCase();
							},
						},
					]),
					e
				);
			})();
			function I(n) {
				var r = (function () {
					if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
					if (Reflect.construct.sham) return !1;
					if ("function" == typeof Proxy) return !0;
					try {
						return (
							Boolean.prototype.valueOf.call(
								Reflect.construct(Boolean, [], function () {})
							),
							!0
						);
					} catch (t) {
						return !1;
					}
				})();
				return function () {
					var t,
						e = s(n);
					return l(
						this,
						r
							? ((t = s(this).constructor), Reflect.construct(e, arguments, t))
							: e.apply(this, arguments)
					);
				};
			}
			var H = (function () {
					i(e, B);
					var t = I(e);
					function e() {
						return a(this, e), t.apply(this, arguments);
					}
					return (
						o(e, [
							{
								key: "initialize",
								value: function () {
									u(s(e.prototype), "initialize", this).call(this),
										(this.$store.swatch = []);
								},
							},
							{
								key: "/swatch.index",
								value: function (t) {
									return t.swatch &&
										Array.isArray(t.swatch) &&
										0 < t.swatch.length
										? t.swatch
										: [];
								},
							},
							{
								key: "/swatch.set",
								value: function (t) {
									var e =
										1 < arguments.length && void 0 !== arguments[1]
											? arguments[1]
											: [];
									t.swatch = e && Array.isArray(e) ? e : [];
								},
							},
						]),
						e
					);
				})(),
				A = (function () {
					function e(t) {
						a(this, e),
							(this.callbacks = []),
							(this.actions = []),
							(this.modules = t.modules || []),
							this.initialize();
					}
					return (
						o(e, [
							{
								key: "initialize",
								value: function () {
									this.initializeModule();
								},
							},
							{
								key: "initializeModule",
								value: function () {
									var e = this;
									this.modules.forEach(function (t) {
										new t(e);
									});
								},
							},
							{
								key: "action",
								value: function (t, e) {
									this.actions[t] = { context: e, callback: e[t] };
								},
							},
							{
								key: "dispatch",
								value: function (t) {
									var e = Array.prototype.slice.call(arguments);
									t = e.shift();
									t = this.actions[t];
									if (t)
										return t.callback.apply(t.context, [this].concat(v(e)));
								},
							},
							{ key: "module", value: function (t) {} },
							{
								key: "on",
								value: function (t, e) {
									this.callbacks.push({ event: t, callback: e });
								},
							},
							{
								key: "off",
								value: function (e, n) {
									switch (arguments.length) {
										case 0:
											this.callbacks = [];
											break;
										case 1:
											this.callbacks = this.callbacks.filter(function (t) {
												return t.event !== e;
											});
											break;
										case 2:
											this.callbacks = this.callbacks.filter(function (t) {
												return t.event !== e && t.callback !== n;
											});
									}
								},
							},
							{
								key: "emit",
								value: function () {
									var e = Array.prototype.slice.call(arguments),
										n = e.shift();
									this.callbacks
										.filter(function (t) {
											return t.event === n;
										})
										.forEach(function (t) {
											t &&
												"function" == typeof t.callback &&
												t.callback.apply(t, v(e));
										});
								},
							},
						]),
						e
					);
				})();
			function V(n) {
				var r = (function () {
					if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
					if (Reflect.construct.sham) return !1;
					if ("function" == typeof Proxy) return !0;
					try {
						return (
							Boolean.prototype.valueOf.call(
								Reflect.construct(Boolean, [], function () {})
							),
							!0
						);
					} catch (t) {
						return !1;
					}
				})();
				return function () {
					var t,
						e = s(n);
					return l(
						this,
						r
							? ((t = s(this).constructor), Reflect.construct(e, arguments, t))
							: e.apply(this, arguments)
					);
				};
			}
			var L = (function () {
				i(n, x);
				var e = V(n);
				function n(t) {
					return a(this, n), e.call(this, t);
				}
				return (
					o(n, [
						{
							key: "initialize",
							value: function () {
								var t,
									e = this;
								if (!this.$store) {
									switch (
										((this.$store = new A({ modules: [M, H] })),
										this.$store.on("changeColor", function () {
											e.opt.onChange &&
												"function" == typeof e.opt.onChange &&
												e.opt.onChange(e.getColor());
										}),
										this.$store.on("lastUpdateColor", function () {
											e.opt.onChanged &&
												"function" == typeof e.opt.onChanged &&
												e.opt.onChanged(e.getColor());
										}),
										this.$store.on("changeFormat", function () {
											e.opt.onChangeFormat &&
												"function" == typeof e.opt.onChangeFormat &&
												e.opt.onChangeFormat(e.$store.format);
										}),
										(this.$body = new d(this.opt.container || document.body)),
										(this.$root = new d("div", "el-colorpicker", {})),
										this.$body.append(this.$root),
										this.opt.type)
									) {
										case "circle":
										case "ring":
										case "mini":
										case "none":
											t = this.opt.type;
											break;
										default:
											t = "default";
									}
									this.$root.el.classList.add("el-colorpicker--".concat(t)),
										this.$store.dispatch("/swatch.set", this.opt.swatchColors),
										this.render(this.$root),
										this.$store.dispatch("/changeFormat", this.opt.format),
										this.$store.dispatch("/initColor", this.opt.color),
										this.initializeEvent(),
										this.opt.onInit &&
											"function" == typeof this.opt.onInit &&
											this.opt.onInit(this);
								}
							},
						},
						{
							key: "getColor",
							value: function () {
								return this.$store.dispatch(
									"/toColor",
									(0 < arguments.length && void 0 !== arguments[0]
										? arguments[0]
										: void 0) || this.opt.outputFormat
								);
							},
						},
						{
							key: "setColor",
							value: function (t) {
								this.$store.dispatch("/changeColor", t);
							},
						},
						{
							key: "setOption",
							value: function (t) {
								t &&
									((this.opt = Object.assign(this.opt, t)),
									this.destroy(),
									this.initialize());
							},
						},
						{
							key: "destroy",
							value: function () {
								u(s(n.prototype), "destroy", this).call(this),
									this.$store.off("changeColor"),
									this.$store.off("lastUpdateColor"),
									this.$store.off("changeFormat"),
									this.$body.html(""),
									delete this.$store,
									this.opt.onDestroy &&
										"function" == typeof this.opt.onDestroy &&
										this.opt.onDestroy();
							},
						},
					]),
					n
				);
			})();
			function U(t, e) {
				return (
					b(t) ||
					(function (t, e) {
						var n =
							null == t
								? null
								: ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
								  t["@@iterator"];
						if (null != n) {
							var r,
								o,
								i = [],
								a = !0,
								c = !1;
							try {
								for (
									n = n.call(t);
									!(a = (r = n.next()).done) &&
									(i.push(r.value), !e || i.length !== e);
									a = !0
								);
							} catch (t) {
								(c = !0), (o = t);
							} finally {
								try {
									a || null == n.return || n.return();
								} finally {
									if (c) throw o;
								}
							}
							return i;
						}
					})(t, e) ||
					p(t, e) ||
					m()
				);
			}
			function F(n) {
				var r = (function () {
					if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
					if (Reflect.construct.sham) return !1;
					if ("function" == typeof Proxy) return !0;
					try {
						return (
							Boolean.prototype.valueOf.call(
								Reflect.construct(Boolean, [], function () {})
							),
							!0
						);
					} catch (t) {
						return !1;
					}
				})();
				return function () {
					var t,
						e = s(n);
					return l(
						this,
						r
							? ((t = s(this).constructor), Reflect.construct(e, arguments, t))
							: e.apply(this, arguments)
					);
				};
			}
			var T = (function () {
				i(e, x);
				var t = F(e);
				function e() {
					return a(this, e), t.apply(this, arguments);
				}
				return (
					o(e, [
						{
							key: "template",
							value: function () {
								var t = [
									this.opt.paletteHeight &&
										"--cp-palette-height: ".concat(
											this.opt.paletteHeight,
											"px;"
										),
								]
									.filter(Boolean)
									.join("");
								return '\n<nav class="el-cp-palette" style="'.concat(
									t,
									'">\n<span ref="$drag_pointer" data-axis-value="all" class="el-cp-palette__pointer"></span>\n</nav>\n'
								);
							},
						},
						{
							key: "setBackgroundColor",
							value: function (t) {
								this.$el.el.style.setProperty("--palette-bg", t);
							},
						},
						{
							key: "refresh",
							value: function () {
								this.cacheSize(), this.setColorUI();
							},
						},
						{
							key: "calculateSV",
							value: function () {
								var t = this.drag_pointer_pos || { x: 0, y: 0 },
									e = t.x / 100,
									t = (100 - t.y) / 100;
								this.$store.dispatch("/changeColor", {
									type: "hsv",
									s: e,
									v: t,
								});
							},
						},
						{
							key: "setColorUI",
							value: function () {
								var t = 100 * this.$store.hsv.s,
									e = 100 * (1 - this.$store.hsv.v);
								this.refs.$drag_pointer.css({
									left: "".concat(t, "%"),
									top: "".concat(e, "%"),
								}),
									(this.drag_pointer_pos = { x: t, y: e }),
									this.setBackgroundColor(this.$store.dispatch("/getHueColor"));
							},
						},
						{
							key: "setMainColor",
							value: function (t) {
								var e = this.$el.offset(),
									n = ((k.pos(t).pageX - e.left) / this.w) * 100,
									e = ((k.pos(t).pageY - e.top) / this.h) * 100,
									n = Math.max(0, Math.min(100, n)),
									e = Math.max(0, Math.min(100, e));
								this.refs.$drag_pointer.css({
									left: "".concat(n, "%"),
									top: "".concat(e, "%"),
								}),
									(this.drag_pointer_pos = { x: n, y: e }),
									this.calculateSV();
							},
						},
						{
							key: "@changeColor",
							value: function () {
								this.refresh();
							},
						},
						{
							key: "@initColor",
							value: function () {
								this.refresh();
							},
						},
						{
							key: "mouseup document",
							value: function () {
								this.isDown &&
									((this.isDown = !1), this.$store.emit("lastUpdateColor"));
							},
						},
						{
							key: "mousemove document",
							value: function (t) {
								this.isDown && (this.cacheSize(), this.setMainColor(t));
							},
						},
						{
							key: "mousedown",
							value: function (t) {
								(this.isDown = !0),
									this.cacheSize(),
									(this.axis = new d(t.target).attr("data-axis-value")),
									(this.x = t.pageX),
									(this.y = t.pageY),
									this.setMainColor(t);
							},
						},
						{
							key: "touchend document",
							value: function () {
								this["mouseup document"]();
							},
						},
						{
							key: "touchmove document",
							value: function (t) {
								this.isDown && this.setMainColor(t);
							},
						},
						{
							key: "touchstart",
							value: function (t) {
								t.preventDefault(),
									(this.isDown = !0),
									this.cacheSize(),
									this.setMainColor(t);
							},
						},
						{
							key: "contextmenu",
							value: function () {
								this["mouseup document"]();
							},
						},
						{
							key: "cacheSize",
							value: function () {
								var t = U(this.$el.size(), 2),
									e = t[0],
									t = t[1];
								(this.w = e), (this.h = t);
							},
						},
					]),
					e
				);
			})();
			function z(n) {
				var r = (function () {
					if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
					if (Reflect.construct.sham) return !1;
					if ("function" == typeof Proxy) return !0;
					try {
						return (
							Boolean.prototype.valueOf.call(
								Reflect.construct(Boolean, [], function () {})
							),
							!0
						);
					} catch (t) {
						return !1;
					}
				})();
				return function () {
					var t,
						e = s(n);
					return l(
						this,
						r
							? ((t = s(this).constructor), Reflect.construct(e, arguments, t))
							: e.apply(this, arguments)
					);
				};
			}
			var G = (function () {
				i(e, x);
				var t = z(e);
				function e() {
					return a(this, e), t.apply(this, arguments);
				}
				return (
					o(e, [
						{
							key: "template",
							value: function () {
								return this.opt.useInformation
									? '\n<fieldset class="el-cp-color-form">\n<legend>change color code</legend>\n<div class="el-cp-color-form__wrap">\n<div class="el-cp-color-field">\n<label>\n<input ref="$hexCode" type="text"/>\n<span>HEX</span>\n</label>\n</div>\n<div class="el-cp-color-field">\n<label>\n<input ref="$rgb_r" type="number" step="1" min="0" max="255"/>\n<span>R</span>\n</label>\n<label>\n<input ref="$rgb_g" type="number" step="1" min="0" max="255"/>\n<span>G</span>\n</label>\n<label>\n<input ref="$rgb_b" type="number" step="1" min="0" max="255"/>\n<span>B</span>\n</label>\n<label>\n<input ref="$rgb_a" type="number" step="0.01" min="0" max="1"/>\n<span>A</span>\n</label>\n</div>\n<div class="el-cp-color-field">\n<label>\n<input ref="$hsl_h" type="number" step="1" min="0" max="360"/>\n<span>H</span>\n</label>\n<label>\n<input ref="$hsl_s" type="number" step="1" min="0" max="100"/>\n<span>S</span>\n</label>\n<label>\n<input ref="$hsl_l" type="number" step="1" min="0" max="100"/>\n<span>L</span>\n</label>\n<label>\n<input ref="$hsl_a" type="number" step="0.01" min="0" max="1"/>\n<span>A</span>\n</label>\n</div>\n<nav ref="$informationChange" class="el-cp-color-nav">\n<label title="Change color model" class="el-cp-color-nav__label">\n<select ref="$changeColorModel">\n<option value="hex">HEX</option>\n<option value="rgb">RGB</option>\n<option value="hsl">HSL</option>\n</select>\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">\n<polyline points="6 9 12 15 18 9"></polyline>\n</svg>\n</label>\n</nav>\n</div>\n</fieldset>\n'
									: null;
							},
						},
						{
							key: "setCurrentFormat",
							value: function (t) {
								(this.format = t), this.initFormat();
							},
						},
						{
							key: "initFormat",
							value: function () {
								var e = this,
									n = this.format || "hex";
								["hex", "rgb", "hsl"]
									.filter(function (t) {
										return t !== n;
									})
									.forEach(function (t) {
										e.$el.el.classList.remove(t);
									}),
									this.$el.el.classList.add(n);
							},
						},
						{
							key: "goToFormat",
							value: function (t) {
								("rgb" !== (this.format = t) && "hsl" !== t) ||
									this.initFormat(),
									this.$store.dispatch("/changeFormat", this.format);
							},
						},
						{
							key: "getFormat",
							value: function () {
								return this.format || "hex";
							},
						},
						{
							key: "checkNumberKey",
							value: function (t) {
								t = t.which;
								return !(
									!(37 !== t && 39 !== t && 8 !== t && 46 !== t && 9 !== t
										? !1
										: !0) &&
									(t < 48 || 57 < t)
								);
							},
						},
						{
							key: "checkNotNumberKey",
							value: function (t) {
								return !this.checkNumberKey(t);
							},
						},
						{
							key: "changeRgbColor",
							value: function () {
								this.$store.dispatch("/changeColor", {
									type: "rgb",
									r: this.refs.$rgb_r.int(),
									g: this.refs.$rgb_g.int(),
									b: this.refs.$rgb_b.int(),
									a: this.refs.$rgb_a.float(),
								}),
									this.$store.emit("lastUpdateColor");
							},
						},
						{
							key: "changeHslColor",
							value: function () {
								this.$store.dispatch("/changeColor", {
									type: "hsl",
									h: this.refs.$hsl_h.int(),
									s: this.refs.$hsl_s.int(),
									l: this.refs.$hsl_l.int(),
									a: this.refs.$hsl_a.float(),
								}),
									this.$store.emit("lastUpdateColor");
							},
						},
						{
							key: "@changeColor",
							value: function () {
								this.refresh();
							},
						},
						{
							key: "@initColor",
							value: function () {
								this.refresh();
							},
						},
						{
							key: "input $rgb_r",
							value: function () {
								this.changeRgbColor();
							},
						},
						{
							key: "input $rgb_g",
							value: function () {
								this.changeRgbColor();
							},
						},
						{
							key: "input $rgb_b",
							value: function () {
								this.changeRgbColor();
							},
						},
						{
							key: "input $rgb_a",
							value: function () {
								this.changeRgbColor();
							},
						},
						{
							key: "input $hsl_h",
							value: function () {
								this.changeHslColor();
							},
						},
						{
							key: "input $hsl_s",
							value: function () {
								this.changeHslColor();
							},
						},
						{
							key: "input $hsl_l",
							value: function () {
								this.changeHslColor();
							},
						},
						{
							key: "input $hsl_a",
							value: function () {
								this.changeHslColor();
							},
						},
						{
							key: "keyup $hexCode",
							value: function () {
								var t = this.refs.$hexCode.val();
								"#" !== t.charAt(0) ||
									(7 !== t.length && 9 !== t.length) ||
									(this.$store.dispatch("/changeColor", t),
									this.$store.emit("lastUpdateColor"));
							},
						},
						{
							key: "change $changeColorModel",
							value: function (t) {
								switch (t.target.value) {
									case "hex":
									case "rgb":
									case "hsl":
										this.format = t.target.value;
										break;
									default:
										this.format = "hex";
								}
								this.initFormat(),
									this.$store.dispatch("/changeFormat", this.format),
									this.$store.emit("lastUpdateColor");
							},
						},
						{
							key: "setRGBInput",
							value: function () {
								this.refs.$rgb_r.val(this.$store.rgb.r),
									this.refs.$rgb_g.val(this.$store.rgb.g),
									this.refs.$rgb_b.val(this.$store.rgb.b),
									this.refs.$rgb_a.val(this.$store.alpha);
							},
						},
						{
							key: "setHSLInput",
							value: function () {
								this.refs.$hsl_h.val(this.$store.hsl.h),
									this.refs.$hsl_s.val(this.$store.hsl.s),
									this.refs.$hsl_l.val(this.$store.hsl.l),
									this.refs.$hsl_a.val(this.$store.alpha);
							},
						},
						{
							key: "setHexInput",
							value: function () {
								this.refs.$hexCode.val(this.$store.dispatch("/toHEX"));
							},
						},
						{
							key: "refresh",
							value: function () {
								this.opt.useInformation &&
									(this.setCurrentFormat(this.$store.format),
									this.setRGBInput(),
									this.setHSLInput(),
									this.setHexInput());
							},
						},
					]),
					e
				);
			})();
			function X(n) {
				var r = (function () {
					if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
					if (Reflect.construct.sham) return !1;
					if ("function" == typeof Proxy) return !0;
					try {
						return (
							Boolean.prototype.valueOf.call(
								Reflect.construct(Boolean, [], function () {})
							),
							!0
						);
					} catch (t) {
						return !1;
					}
				})();
				return function () {
					var t,
						e = s(n);
					return l(
						this,
						r
							? ((t = s(this).constructor), Reflect.construct(e, arguments, t))
							: e.apply(this, arguments)
					);
				};
			}
			var Y = (function () {
				i(e, x);
				var t = X(e);
				function e() {
					return a(this, e), t.apply(this, arguments);
				}
				return (
					o(e, [
						{
							key: "template",
							value: function () {
								return 0 < this.$store.dispatch("/swatch.index").length
									? '\n<div class="el-cp-swatches">\n'.concat(
											this.opt.swatchTitle
												? '\n<header class="el-cp-swatches__header">\n<h2 ref="$colorSwatchTitle">'.concat(
														this.opt.swatchTitle,
														"</h2>\n</header>\n"
												  )
												: "",
											'\n<div ref="$index"></div>\n</div>\n'
									  )
									: null;
							},
						},
						{
							key: "load $index",
							value: function () {
								var t = this.$store.dispatch("/swatch.index");
								return '\n<ul class="el-cp-colors">\n'.concat(
									t
										.map(function (t) {
											return '\n<li>\n<button\ntype="button"\ndata-color="'
												.concat(
													t,
													'"\nclass="el-cp-colors__item"\nstyle="--color: '
												)
												.concat(t, '">\n')
												.concat(t, "\n</button>\n</li>\n");
										})
										.join(""),
									"\n</ul>\n"
								);
							},
						},
						{
							key: "refresh",
							value: function () {
								this.load();
							},
						},
						{
							key: "addColor",
							value: function (t) {
								this.$store.dispatch("/addCurrentColor", t);
							},
						},
						{
							key: "click $index button",
							value: function (t) {
								this.$store.dispatch(
									"/changeColor",
									t.$delegateTarget.attr("data-color")
								),
									this.$store.emit("lastUpdateColor");
							},
						},
					]),
					e
				);
			})();
			function N(n) {
				var r = (function () {
					if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
					if (Reflect.construct.sham) return !1;
					if ("function" == typeof Proxy) return !0;
					try {
						return (
							Boolean.prototype.valueOf.call(
								Reflect.construct(Boolean, [], function () {})
							),
							!0
						);
					} catch (t) {
						return !1;
					}
				})();
				return function () {
					var t,
						e = s(n);
					return l(
						this,
						r
							? ((t = s(this).constructor), Reflect.construct(e, arguments, t))
							: e.apply(this, arguments)
					);
				};
			}
			var q = (function () {
				i(n, x);
				var e = N(n);
				function n(t) {
					return a(this, n), e.call(this, t);
				}
				return (
					o(n, [
						{ key: "refresh", value: function () {} },
						{ key: "refreshColorUI", value: function (t) {} },
						{
							key: "changeColor",
							value: function (t) {
								this.$store.dispatch("/changeColor", t);
							},
						},
						{
							key: "mouseup document",
							value: function (t) {
								this.onDragEnd(t);
							},
						},
						{
							key: "mousemove document",
							value: function (t) {
								this.onDragMove(t);
							},
						},
						{
							key: "mousedown $bar",
							value: function (t) {
								t.preventDefault(), (this.isDown = !0);
							},
						},
						{
							key: "mousedown $container",
							value: function (t) {
								(this.isDown = !0), this.onDragStart(t);
							},
						},
						{
							key: "touchend document",
							value: function (t) {
								this.onDragEnd(t);
							},
						},
						{
							key: "touchmove document",
							value: function (t) {
								this.onDragMove(t);
							},
						},
						{
							key: "touchstart $bar",
							value: function (t) {
								t.preventDefault(), (this.isDown = !0);
							},
						},
						{
							key: "touchstart $container",
							value: function (t) {
								this.onDragStart(t);
							},
						},
						{
							key: "onDragStart",
							value: function (t) {
								(this.isDown = !0), this.refreshColorUI(t);
							},
						},
						{
							key: "onDragMove",
							value: function (t) {
								this.isDown && this.refreshColorUI(t);
							},
						},
						{
							key: "onDragEnd",
							value: function () {
								this.isDown &&
									(this.$store.emit("lastUpdateColor"), (this.isDown = !1));
							},
						},
						{
							key: "contextmenu",
							value: function () {
								this.onDragEnd();
							},
						},
						{
							key: "@changeColor",
							value: function () {
								this.refresh();
							},
						},
						{
							key: "@initColor",
							value: function () {
								this.refresh();
							},
						},
					]),
					n
				);
			})();
			function W(n) {
				var r = (function () {
					if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
					if (Reflect.construct.sham) return !1;
					if ("function" == typeof Proxy) return !0;
					try {
						return (
							Boolean.prototype.valueOf.call(
								Reflect.construct(Boolean, [], function () {})
							),
							!0
						);
					} catch (t) {
						return !1;
					}
				})();
				return function () {
					var t,
						e = s(n);
					return l(
						this,
						r
							? ((t = s(this).constructor), Reflect.construct(e, arguments, t))
							: e.apply(this, arguments)
					);
				};
			}
			var K = (function () {
				i(n, q);
				var e = W(n);
				function n(t) {
					return (
						a(this, n),
						((t = e.call(this, t)).minValue = 0),
						(t.maxValue = 1),
						t
					);
				}
				return (
					o(n, [
						{
							key: "getMinMaxPosition",
							value: function () {
								var t = this.getMinPosition(),
									e = this.getMaxDist();
								return { min: t, max: t + e, width: e };
							},
						},
						{
							key: "getCurrent",
							value: function (t) {
								return this.getMaxDist() * t;
							},
						},
						{
							key: "getMinPosition",
							value: function () {
								return this.refs.$container.offset().left;
							},
						},
						{
							key: "getMaxDist",
							value: function () {
								return this.refs.$container.size()[0];
							},
						},
						{
							key: "getDist",
							value: function (t) {
								var e = this.getMinMaxPosition(),
									n = e.min,
									e = e.max,
									n = t < n ? 0 : e < t ? 100 : ((t - n) / (e - n)) * 100;
								return n;
							},
						},
						{
							key: "getCalculatedDist",
							value: function (t) {
								t = t
									? this.getMousePosition(t)
									: this.getCurrent(this.getDefaultValue() / this.maxValue);
								return this.getDist(t);
							},
						},
						{
							key: "getDefaultValue",
							value: function () {
								return 0;
							},
						},
						{
							key: "setMousePosition",
							value: function (t) {
								this.refs.$bar.css({ left: "".concat(t, "%") });
							},
						},
						{
							key: "getMousePosition",
							value: function (t) {
								return k.pos(t).pageX;
							},
						},
						{
							key: "setColorUI",
							value: function () {
								var t =
									(t =
										0 < arguments.length && void 0 !== arguments[0]
											? arguments[0]
											: null) || this.getDefaultValue();
								this.lastV !== t &&
									((this.lastV = t),
									this.setMousePosition(((t || 0) / this.maxValue) * 100));
							},
						},
						{
							key: "refresh",
							value: function () {
								this.setColorUI();
							},
						},
					]),
					n
				);
			})();
			function Z(n) {
				var r = (function () {
					if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
					if (Reflect.construct.sham) return !1;
					if ("function" == typeof Proxy) return !0;
					try {
						return (
							Boolean.prototype.valueOf.call(
								Reflect.construct(Boolean, [], function () {})
							),
							!0
						);
					} catch (t) {
						return !1;
					}
				})();
				return function () {
					var t,
						e = s(n);
					return l(
						this,
						r
							? ((t = s(this).constructor), Reflect.construct(e, arguments, t))
							: e.apply(this, arguments)
					);
				};
			}
			var J = (function () {
				i(n, K);
				var e = Z(n);
				function n(t) {
					return (
						a(this, n),
						((t = e.call(this, t)).minValue = 0),
						(t.maxValue = 360),
						t
					);
				}
				return (
					o(n, [
						{
							key: "template",
							value: function () {
								return '\n<nav class="el-cp-slider el-cp-slider--hue">\n<p ref="$container" class="el-cp-slider__body">\n<i ref="$bar" class="el-cp-slider__circle"></i>\n</p>\n</nav>\n';
							},
						},
						{
							key: "getDefaultValue",
							value: function () {
								return this.$store.hsv.h;
							},
						},
						{
							key: "refreshColorUI",
							value: function (t) {
								t = this.getCalculatedDist(t);
								this.changeColor({ h: (t / 100) * this.maxValue, type: "hsv" });
							},
						},
					]),
					n
				);
			})();
			function Q(e, t) {
				var n,
					r = Object.keys(e);
				return (
					Object.getOwnPropertySymbols &&
						((n = Object.getOwnPropertySymbols(e)),
						t &&
							(n = n.filter(function (t) {
								return Object.getOwnPropertyDescriptor(e, t).enumerable;
							})),
						r.push.apply(r, n)),
					r
				);
			}
			function tt(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2
						? Q(Object(n), !0).forEach(function (t) {
								_(e, t, n[t]);
						  })
						: Object.getOwnPropertyDescriptors
						? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
						: Q(Object(n)).forEach(function (t) {
								Object.defineProperty(
									e,
									t,
									Object.getOwnPropertyDescriptor(n, t)
								);
						  });
				}
				return e;
			}
			function et(n) {
				var r = (function () {
					if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
					if (Reflect.construct.sham) return !1;
					if ("function" == typeof Proxy) return !0;
					try {
						return (
							Boolean.prototype.valueOf.call(
								Reflect.construct(Boolean, [], function () {})
							),
							!0
						);
					} catch (t) {
						return !1;
					}
				})();
				return function () {
					var t,
						e = s(n);
					return l(
						this,
						r
							? ((t = s(this).constructor), Reflect.construct(e, arguments, t))
							: e.apply(this, arguments)
					);
				};
			}
			var nt = (function () {
				i(n, K);
				var e = et(n);
				function n(t) {
					return (
						a(this, n),
						((t = e.call(this, t)).minValue = 0),
						(t.maxValue = 1),
						t
					);
				}
				return (
					o(n, [
						{
							key: "template",
							value: function () {
								return '\n<nav class="el-cp-slider el-cp-slider--alpha">\n<p ref="$container" class="el-cp-slider__body">\n<span ref="$colorbar" class="el-cp-slider__bar"></span>\n<i ref="$bar" class="el-cp-slider__circle"></i>\n</p>\n</nav>\n';
							},
						},
						{
							key: "refresh",
							value: function () {
								u(s(n.prototype), "refresh", this).call(this),
									this.setOpacityColorBar();
							},
						},
						{
							key: "setOpacityColorBar",
							value: function () {
								var t = j().format(
										tt(tt({}, this.$store.rgb), {}, { a: 0 }),
										"rgb"
									),
									e = j().format(
										tt(tt({}, this.$store.rgb), {}, { a: 1 }),
										"rgb"
									);
								this.refs.$colorbar.css(
									"background",
									"linear-gradient(to right, ".concat(t, ", ").concat(e, ")")
								);
							},
						},
						{
							key: "getDefaultValue",
							value: function () {
								return this.$store.alpha;
							},
						},
						{
							key: "refreshColorUI",
							value: function (t) {
								t = this.getCalculatedDist(t);
								this.setColorUI((t / 100) * this.maxValue),
									this.changeColor({
										a: (Math.floor(t) / 100) * this.maxValue,
									});
							},
						},
					]),
					n
				);
			})();
			function rt(n) {
				var r = (function () {
					if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
					if (Reflect.construct.sham) return !1;
					if ("function" == typeof Proxy) return !0;
					try {
						return (
							Boolean.prototype.valueOf.call(
								Reflect.construct(Boolean, [], function () {})
							),
							!0
						);
					} catch (t) {
						return !1;
					}
				})();
				return function () {
					var t,
						e = s(n);
					return l(
						this,
						r
							? ((t = s(this).constructor), Reflect.construct(e, arguments, t))
							: e.apply(this, arguments)
					);
				};
			}
			var ot = (function () {
				i(e, x);
				var t = rt(e);
				function e() {
					return a(this, e), t.apply(this, arguments);
				}
				return (
					o(e, [
						{
							key: "template",
							value: function () {
								return '\n<i class="el-cp-color-preview">\n<em ref="$color"></em>\n</i>\n';
							},
						},
						{
							key: "refresh",
							value: function () {
								this.refs.$color.css(
									"background-color",
									this.$store.dispatch("/toRGB")
								);
							},
						},
						{
							key: "@changeColor",
							value: function () {
								this.refresh();
							},
						},
						{
							key: "@initColor",
							value: function () {
								this.refresh();
							},
						},
					]),
					e
				);
			})();
			function it(n) {
				var r = (function () {
					if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
					if (Reflect.construct.sham) return !1;
					if ("function" == typeof Proxy) return !0;
					try {
						return (
							Boolean.prototype.valueOf.call(
								Reflect.construct(Boolean, [], function () {})
							),
							!0
						);
					} catch (t) {
						return !1;
					}
				})();
				return function () {
					var t,
						e = s(n);
					return l(
						this,
						r
							? ((t = s(this).constructor), Reflect.construct(e, arguments, t))
							: e.apply(this, arguments)
					);
				};
			}
			var at = (function () {
				i(e, x);
				var t = it(e);
				function e() {
					return a(this, e), t.apply(this, arguments);
				}
				return (
					o(e, [
						{
							key: "components",
							value: function () {
								return { Hue: J, Opacity: nt, ColorPreview: ot };
							},
						},
						{
							key: "template",
							value: function () {
								return '\n<article class="el-cp-color-control">\n<div class="el-cp-color-control__body">\n<template target="Hue"></template>\n<template target="Opacity"></template>\n</div>\n<div class="el-cp-color-control__preview">\n<template target="ColorPreview"></template>\n</div>\n</article>\n';
							},
						},
						{
							key: "refresh",
							value: function () {
								this.Hue.setColorUI(), this.Opacity.setColorUI();
							},
						},
						{
							key: "@changeColor",
							value: function () {
								this.refresh();
							},
						},
						{
							key: "@initColor",
							value: function () {
								this.refresh();
							},
						},
					]),
					e
				);
			})();
			function ct(n) {
				var r = (function () {
					if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
					if (Reflect.construct.sham) return !1;
					if ("function" == typeof Proxy) return !0;
					try {
						return (
							Boolean.prototype.valueOf.call(
								Reflect.construct(Boolean, [], function () {})
							),
							!0
						);
					} catch (t) {
						return !1;
					}
				})();
				return function () {
					var t,
						e = s(n);
					return l(
						this,
						r
							? ((t = s(this).constructor), Reflect.construct(e, arguments, t))
							: e.apply(this, arguments)
					);
				};
			}
			var lt = (function () {
				i(e, L);
				var t = ct(e);
				function e() {
					return a(this, e), t.apply(this, arguments);
				}
				return (
					o(e, [
						{
							key: "components",
							value: function () {
								return { Palette: T, Control: at, Forms: G, Swatch: Y };
							},
						},
						{
							key: "template",
							value: function () {
								return '\n<div class="el-colorpicker__wrap">\n<template target="Palette"></template>\n<template target="Control"></template>\n<template target="Forms"></template>\n<template target="Swatch"></template>\n</div>\n';
							},
						},
					]),
					e
				);
			})();
			function st(t) {
				return (t * Math.PI) / 180;
			}
			function ut(t, e, n, r) {
				(n = 2 < arguments.length && void 0 !== n ? n : 0),
					(r = 3 < arguments.length && void 0 !== r ? r : 0);
				return {
					x: (function (t, e, n) {
						return (
							(2 < arguments.length && void 0 !== n ? n : 0) +
							e * Math.cos(st(t))
						);
					})(t, e, n),
					y: (function (t, e, n) {
						return (
							(2 < arguments.length && void 0 !== n ? n : 0) +
							e * Math.sin(st(t))
						);
					})(t, e, r),
				};
			}
			function ft(t, e) {
				return (t =
					(t = (180 * (t = Math.atan2(e, t))) / Math.PI) < 0 ? 360 + t : t);
			}
			function ht(n) {
				var r = (function () {
					if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
					if (Reflect.construct.sham) return !1;
					if ("function" == typeof Proxy) return !0;
					try {
						return (
							Boolean.prototype.valueOf.call(
								Reflect.construct(Boolean, [], function () {})
							),
							!0
						);
					} catch (t) {
						return !1;
					}
				})();
				return function () {
					var t,
						e = s(n);
					return l(
						this,
						r
							? ((t = s(this).constructor), Reflect.construct(e, arguments, t))
							: e.apply(this, arguments)
					);
				};
			}
			var pt = (function () {
				i(n, x);
				var e = ht(n);
				function n(t) {
					return (
						a(this, n),
						((t = e.call(this, t)).width = t.opt.paletteWidth || 200),
						(t.height = t.opt.paletteWidth || 200),
						(t.thickness = 0),
						t
					);
				}
				return (
					o(n, [
						{
							key: "template",
							value: function () {
								return '\n<div class="el-cp-palette-circle">\n<div ref="$wrap" class="el-cp-palette-circle__wrap">\n<canvas ref="$colorwheel" class="el-cp-palette-circle__canvas"></canvas>\n<span ref="$valuewheel" class="el-cp-palette-circle__brightness"></span>\n<i ref="$drag_pointer" class="el-cp-palette-circle__pointer"></i>\n</div>\n</div>\n';
							},
						},
						{
							key: "afterRender",
							value: function () {
								this.refresh();
							},
						},
						{
							key: "refresh",
							value: function (t) {
								this.setColorUI(t);
							},
						},
						{
							key: "setColorUI",
							value: function (t) {
								this.renderCanvas(),
									this.renderValue(),
									this.setHueColor(null, t);
							},
						},
						{
							key: "renderValue",
							value: function () {
								var t = 1 - this.$store.hsv.v;
								this.refs.$valuewheel.css({
									"background-color": "rgba(0, 0, 0, ".concat(t, ")"),
								});
							},
						},
						{
							key: "renderWheel",
							value: function (t, e) {
								var n = new d("canvas"),
									r = n.el.getContext("2d");
								(n.el.width = t), (n.el.height = e);
								for (
									var o = r.getImageData(0, 0, t, e),
										i = o.data,
										a = Math.floor(t / 2),
										c = Math.floor(e / 2),
										l = e < t ? c : a,
										s = a,
										u = c,
										f = 0;
									f < e;
									f++
								)
									for (var h = 0; h < t; h++) {
										var p = h - s + 1,
											v = f - u + 1,
											g = p * p + v * v,
											v = ft(p, v),
											v = j().HSVtoRGB(v, Math.min(Math.sqrt(g) / l, 1), 1),
											g = 4 * (f * t + h);
										(i[g] = v.r),
											(i[1 + g] = v.g),
											(i[2 + g] = v.b),
											(i[3 + g] = 255);
									}
								return (
									r.putImageData(o, 0, 0),
									0 < this.thickness &&
										((r.globalCompositeOperation = "destination-out"),
										(r.fillStyle = "black"),
										r.beginPath(),
										r.arc(s, u, l - this.thickness, 0, 2 * Math.PI),
										r.closePath(),
										r.fill()),
									n
								);
							},
						},
						{
							key: "renderCanvas",
							value: function () {
								var t, e;
								this.$store.createdWheelCanvas ||
									(((e = this.refs.$colorwheel).el.width = this.width),
									(e.el.height = this.height),
									(t = e.el.getContext("2d")),
									(e = this.renderWheel(this.width, this.height)),
									t.drawImage(e.el, 0, 0),
									(this.$store.createdWheelCanvas = !0));
							},
						},
						{
							key: "getDefaultValue",
							value: function () {
								return this.$store.hsv.h;
							},
						},
						{
							key: "getDefaultSaturation",
							value: function () {
								return this.$store.hsv.s;
							},
						},
						{
							key: "getCurrentXY",
							value: function (t, e, n, r, o) {
								return t ? k.posXY(t) : ut(e, n, r, o);
							},
						},
						{
							key: "getRectangle",
							value: function () {
								var t = this.state.get("$wrap.width"),
									e = this.state.get("$wrap.height"),
									n = this.state.get("$colorwheel.width") / 2,
									r = this.refs.$wrap.offset().left,
									o = this.refs.$wrap.offset().top;
								return {
									minX: r,
									minY: o,
									width: t,
									height: e,
									radius: n,
									centerX: r + t / 2,
									centerY: o + e / 2,
								};
							},
						},
						{
							key: "setHueColor",
							value: function (t, e) {
								var n, r, o, i, a, c, l, s, u, f, h;
								this.state.get("$wrap.width") &&
									((n = (u = this.getRectangle()).minX),
									(r = u.minY),
									(f = u.radius),
									(o = u.centerX),
									(l = u.centerY),
									(i = u.width),
									(h = u.height),
									(c =
										(a =
											(s = (c = this.getCurrentXY(
												t,
												this.getDefaultValue(),
												this.getDefaultSaturation() * f,
												o,
												l
											)).x) - o) *
											a +
										(t = (u = c.y) - l) * t),
									(t = ft(a, t)),
									f * f < c &&
										((s = (l = this.getCurrentXY(null, t, f, o, l)).x),
										(u = l.y)),
									(f = Math.min(Math.sqrt(c) / f, 1)),
									(h = ((u - r) / h) * 100),
									this.refs.$drag_pointer.css({
										left: "".concat(((s - n) / i) * 100, "%"),
										top: "".concat(h, "%"),
									}),
									e || this.changeColor({ type: "hsv", h: t, s: f }));
							},
						},
						{
							key: "changeColor",
							value: function (t) {
								this.$store.dispatch("/changeColor", t);
							},
						},
						{
							key: "@changeColor",
							value: function () {
								this.refresh(!0);
							},
						},
						{
							key: "@initColor",
							value: function () {
								this.refresh(!0);
							},
						},
						{
							key: "mouseup document",
							value: function () {
								this.isDown &&
									((this.isDown = !1), this.$store.emit("lastUpdateColor"));
							},
						},
						{
							key: "mousemove document",
							value: function (t) {
								this.isDown && this.setHueColor(t);
							},
						},
						{
							key: "mousedown $drag_pointer",
							value: function (t) {
								t.preventDefault(), (this.isDown = !0);
							},
						},
						{
							key: "mousedown $wrap",
							value: function (t) {
								(this.isDown = !0), this.setHueColor(t);
							},
						},
						{
							key: "touchend document",
							value: function () {
								this.isDown &&
									((this.isDown = !1), this.$store.emit("lastUpdateColor"));
							},
						},
						{
							key: "touchmove document",
							value: function (t) {
								this.isDown && this.setHueColor(t);
							},
						},
						{
							key: "touchstart $drag_pointer",
							value: function (t) {
								t.preventDefault(), (this.isDown = !0);
							},
						},
						{
							key: "touchstart $wrap",
							value: function (t) {
								t.preventDefault(), (this.isDown = !0), this.setHueColor(t);
							},
						},
						{
							key: "contextmenu",
							value: function () {
								this["mouseup document"]();
							},
						},
					]),
					n
				);
			})();
			function vt(n) {
				var r = (function () {
					if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
					if (Reflect.construct.sham) return !1;
					if ("function" == typeof Proxy) return !0;
					try {
						return (
							Boolean.prototype.valueOf.call(
								Reflect.construct(Boolean, [], function () {})
							),
							!0
						);
					} catch (t) {
						return !1;
					}
				})();
				return function () {
					var t,
						e = s(n);
					return l(
						this,
						r
							? ((t = s(this).constructor), Reflect.construct(e, arguments, t))
							: e.apply(this, arguments)
					);
				};
			}
			var gt = (function () {
				i(n, K);
				var e = vt(n);
				function n(t) {
					return (
						a(this, n),
						((t = e.call(this, t)).minValue = 0),
						(t.maxValue = 1),
						t
					);
				}
				return (
					o(n, [
						{
							key: "template",
							value: function () {
								return '\n<nav class="el-cp-slider el-cp-slider--brightness">\n<p ref="$container" class="el-cp-slider__body">\n<i ref="$bar" class="el-cp-slider__circle"></i>\n</p>\n</nav>\n';
							},
						},
						{
							key: "getDefaultValue",
							value: function () {
								return this.$store.hsv.v;
							},
						},
						{
							key: "refreshColorUI",
							value: function (t) {
								t = this.getCalculatedDist(t);
								this.setColorUI((t / 100) * this.maxValue),
									this.changeColor({
										type: "hsv",
										v: (t / 100) * this.maxValue,
									});
							},
						},
					]),
					n
				);
			})();
			function yt(n) {
				var r = (function () {
					if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
					if (Reflect.construct.sham) return !1;
					if ("function" == typeof Proxy) return !0;
					try {
						return (
							Boolean.prototype.valueOf.call(
								Reflect.construct(Boolean, [], function () {})
							),
							!0
						);
					} catch (t) {
						return !1;
					}
				})();
				return function () {
					var t,
						e = s(n);
					return l(
						this,
						r
							? ((t = s(this).constructor), Reflect.construct(e, arguments, t))
							: e.apply(this, arguments)
					);
				};
			}
			var dt = (function () {
				i(e, x);
				var t = yt(e);
				function e() {
					return a(this, e), t.apply(this, arguments);
				}
				return (
					o(e, [
						{
							key: "components",
							value: function () {
								return { Brightness: gt, Opacity: nt, ColorPreview: ot };
							},
						},
						{
							key: "template",
							value: function () {
								return '\n<article class="el-cp-color-control">\n<div class="el-cp-color-control__body">\n<template target="Brightness"></template>\n<template target="Opacity"></template>\n</div>\n<div class="el-cp-color-control__preview">\n<template target="ColorPreview"></template>\n</div>\n</article>\n';
							},
						},
						{
							key: "refresh",
							value: function () {
								this.Brightness.setColorUI(), this.Opacity.setColorUI();
							},
						},
						{
							key: "@changeColor",
							value: function () {
								this.refresh();
							},
						},
						{
							key: "@initColor",
							value: function () {
								this.refresh();
							},
						},
					]),
					e
				);
			})();
			function bt(n) {
				var r = (function () {
					if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
					if (Reflect.construct.sham) return !1;
					if ("function" == typeof Proxy) return !0;
					try {
						return (
							Boolean.prototype.valueOf.call(
								Reflect.construct(Boolean, [], function () {})
							),
							!0
						);
					} catch (t) {
						return !1;
					}
				})();
				return function () {
					var t,
						e = s(n);
					return l(
						this,
						r
							? ((t = s(this).constructor), Reflect.construct(e, arguments, t))
							: e.apply(this, arguments)
					);
				};
			}
			var mt = (function () {
				i(e, L);
				var t = bt(e);
				function e() {
					return a(this, e), t.apply(this, arguments);
				}
				return (
					o(e, [
						{
							key: "components",
							value: function () {
								return { PaletteWheel: pt, Control: dt, Forms: G, Swatch: Y };
							},
						},
						{
							key: "template",
							value: function () {
								return '\n<div class="el-colorpicker__wrap">\n<template target="PaletteWheel"></template>\n<template target="Control"></template>\n<template target="Forms"></template>\n<template target="Swatch"></template>\n</div>\n';
							},
						},
					]),
					e
				);
			})();
			function kt(n) {
				var r = (function () {
					if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
					if (Reflect.construct.sham) return !1;
					if ("function" == typeof Proxy) return !0;
					try {
						return (
							Boolean.prototype.valueOf.call(
								Reflect.construct(Boolean, [], function () {})
							),
							!0
						);
					} catch (t) {
						return !1;
					}
				})();
				return function () {
					var t,
						e = s(n);
					return l(
						this,
						r
							? ((t = s(this).constructor), Reflect.construct(e, arguments, t))
							: e.apply(this, arguments)
					);
				};
			}
			var wt = (function () {
				i(n, pt);
				var e = kt(n);
				function n(t) {
					return (
						a(this, n),
						((t = e.call(this, t)).width = t.opt.paletteWidth || 200),
						(t.height = t.opt.paletteWidth || 200),
						(t.thickness = t.opt.paletteThickness || 16),
						t
					);
				}
				return (
					o(n, [
						{
							key: "template",
							value: function () {
								return '\n<div data-type="ring" class="el-cp-palette-ring">\n<div ref="$wrap" class="el-cp-palette-ring__wrap">\n<canvas ref="$colorwheel" class="el-cp-palette-ring__canvas"></canvas>\n<i ref="$drag_pointer" class="el-cp-palette-ring__pointer"></i>\n</div>\n</div>\n';
							},
						},
						{
							key: "setColorUI",
							value: function (t) {
								this.renderCanvas(), this.setHueColor(null, t);
							},
						},
						{
							key: "getDefaultValue",
							value: function () {
								return this.$store.hsv.h;
							},
						},
						{
							key: "setHueColor",
							value: function (t, e) {
								var n, r, o, i, a, c, l;
								this.state.get("$el.width") &&
									((n = (l = this.getRectangle()).minX),
									(r = l.minY),
									(o = l.width),
									(i = l.height),
									(a = l.radius),
									(c = l.centerX),
									(l = l.centerY),
									(t = ft(
										(t = this.getCurrentXY(t, this.getDefaultValue(), a, c, l))
											.x - c,
										t.y - l
									)),
									(l = this.getCurrentXY(
										null,
										t,
										a - 0.5 * this.thickness,
										c,
										l
									)),
									this.refs.$drag_pointer.css({
										left: "".concat(((l.x - n) / o) * 100, "%"),
										top: "".concat(((l.y - r) / i) * 100, "%"),
									}),
									e || this.changeColor({ type: "hsv", h: t }));
							},
						},
					]),
					n
				);
			})();
			function Ct(n) {
				var r = (function () {
					if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
					if (Reflect.construct.sham) return !1;
					if ("function" == typeof Proxy) return !0;
					try {
						return (
							Boolean.prototype.valueOf.call(
								Reflect.construct(Boolean, [], function () {})
							),
							!0
						);
					} catch (t) {
						return !1;
					}
				})();
				return function () {
					var t,
						e = s(n);
					return l(
						this,
						r
							? ((t = s(this).constructor), Reflect.construct(e, arguments, t))
							: e.apply(this, arguments)
					);
				};
			}
			var Ot = (function () {
				i(e, x);
				var t = Ct(e);
				function e() {
					return a(this, e), t.apply(this, arguments);
				}
				return (
					o(e, [
						{
							key: "components",
							value: function () {
								return { Opacity: nt, ColorPreview: ot };
							},
						},
						{
							key: "template",
							value: function () {
								return '\n<article class="el-cp-color-control">\n<div class="el-cp-color-control__body">\n<template target="Opacity"></template>\n</div>\n<div class="el-cp-color-control__preview">\n<template target="ColorPreview"></template>\n</div>\n</article>\n';
							},
						},
						{
							key: "refresh",
							value: function () {
								this.Opacity.setColorUI();
							},
						},
						{
							key: "@changeColor",
							value: function () {
								this.refresh();
							},
						},
						{
							key: "@initColor",
							value: function () {
								this.refresh();
							},
						},
					]),
					e
				);
			})();
			function $t(n) {
				var r = (function () {
					if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
					if (Reflect.construct.sham) return !1;
					if ("function" == typeof Proxy) return !0;
					try {
						return (
							Boolean.prototype.valueOf.call(
								Reflect.construct(Boolean, [], function () {})
							),
							!0
						);
					} catch (t) {
						return !1;
					}
				})();
				return function () {
					var t,
						e = s(n);
					return l(
						this,
						r
							? ((t = s(this).constructor), Reflect.construct(e, arguments, t))
							: e.apply(this, arguments)
					);
				};
			}
			var Rt = (function () {
				i(e, L);
				var t = $t(e);
				function e() {
					return a(this, e), t.apply(this, arguments);
				}
				return (
					o(e, [
						{
							key: "components",
							value: function () {
								return {
									PaletteRing: wt,
									Palette: T,
									Control: Ot,
									Forms: G,
									Swatch: Y,
								};
							},
						},
						{
							key: "template",
							value: function () {
								var t = this.opt,
									e = t.paletteWidth,
									t = t.paletteThickness,
									t = [
										e && "--width: ".concat(e, "px;"),
										e && "--height: ".concat(e, "px;"),
										"--thickness: ".concat(t || 16, "px;"),
									]
										.filter(Boolean)
										.join("");
								return '\n<div class="el-colorpicker__wrap">\n<div class="el-colorpicker__body" style="'.concat(
									t,
									'">\n<template target="PaletteRing"></template>\n<template target="Palette"></template>\n</div>\n<template target="Control"></template>\n<template target="Forms"></template>\n<template target="Swatch"></template>\n</div>\n'
								);
							},
						},
					]),
					e
				);
			})();
			function xt(n) {
				var r = (function () {
					if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
					if (Reflect.construct.sham) return !1;
					if ("function" == typeof Proxy) return !0;
					try {
						return (
							Boolean.prototype.valueOf.call(
								Reflect.construct(Boolean, [], function () {})
							),
							!0
						);
					} catch (t) {
						return !1;
					}
				})();
				return function () {
					var t,
						e = s(n);
					return l(
						this,
						r
							? ((t = s(this).constructor), Reflect.construct(e, arguments, t))
							: e.apply(this, arguments)
					);
				};
			}
			var _t = (function () {
				i(n, K);
				var e = xt(n);
				function n(t) {
					return a(this, n), e.call(this, t);
				}
				return (
					o(n, [
						{
							key: "getMaxDist",
							value: function () {
								return this.state.get("$container.height");
							},
						},
						{
							key: "setMousePosition",
							value: function (t) {
								this.refs.$bar.css({ top: "".concat(t, "%") });
							},
						},
						{
							key: "getMousePosition",
							value: function (t) {
								return k.pos(t).pageY;
							},
						},
						{
							key: "getMinPosition",
							value: function () {
								return this.refs.$container.offset().top;
							},
						},
					]),
					n
				);
			})();
			function Pt(n) {
				var r = (function () {
					if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
					if (Reflect.construct.sham) return !1;
					if ("function" == typeof Proxy) return !0;
					try {
						return (
							Boolean.prototype.valueOf.call(
								Reflect.construct(Boolean, [], function () {})
							),
							!0
						);
					} catch (t) {
						return !1;
					}
				})();
				return function () {
					var t,
						e = s(n);
					return l(
						this,
						r
							? ((t = s(this).constructor), Reflect.construct(e, arguments, t))
							: e.apply(this, arguments)
					);
				};
			}
			var jt = (function () {
				i(n, _t);
				var e = Pt(n);
				function n(t) {
					return (
						a(this, n),
						((t = e.call(this, t)).minValue = 0),
						(t.maxValue = 360),
						t
					);
				}
				return (
					o(n, [
						{
							key: "template",
							value: function () {
								return '\n<nav class="el-cp-slider el-cp-slider--vertical el-cp-slider--hue">\n<p ref="$container" class="el-cp-slider__body">\n<i ref="$bar" class="el-cp-slider__brick"></i>\n</p>\n</nav>\n';
							},
						},
						{
							key: "getDefaultValue",
							value: function () {
								return this.$store.hsv.h;
							},
						},
						{
							key: "refreshColorUI",
							value: function (t) {
								t = this.getCalculatedDist(t);
								this.changeColor({ h: (t / 100) * this.maxValue, type: "hsv" });
							},
						},
					]),
					n
				);
			})();
			function Bt(e, t) {
				var n,
					r = Object.keys(e);
				return (
					Object.getOwnPropertySymbols &&
						((n = Object.getOwnPropertySymbols(e)),
						t &&
							(n = n.filter(function (t) {
								return Object.getOwnPropertyDescriptor(e, t).enumerable;
							})),
						r.push.apply(r, n)),
					r
				);
			}
			function St(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2
						? Bt(Object(n), !0).forEach(function (t) {
								_(e, t, n[t]);
						  })
						: Object.getOwnPropertyDescriptors
						? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
						: Bt(Object(n)).forEach(function (t) {
								Object.defineProperty(
									e,
									t,
									Object.getOwnPropertyDescriptor(n, t)
								);
						  });
				}
				return e;
			}
			function Dt(n) {
				var r = (function () {
					if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
					if (Reflect.construct.sham) return !1;
					if ("function" == typeof Proxy) return !0;
					try {
						return (
							Boolean.prototype.valueOf.call(
								Reflect.construct(Boolean, [], function () {})
							),
							!0
						);
					} catch (t) {
						return !1;
					}
				})();
				return function () {
					var t,
						e = s(n);
					return l(
						this,
						r
							? ((t = s(this).constructor), Reflect.construct(e, arguments, t))
							: e.apply(this, arguments)
					);
				};
			}
			var Et = (function () {
				i(n, _t);
				var e = Dt(n);
				function n(t) {
					return a(this, n), e.call(this, t);
				}
				return (
					o(n, [
						{
							key: "template",
							value: function () {
								return '\n<div class="el-cp-slider el-cp-slider--vertical el-cp-slider--alpha">\n<p ref="$container" class="el-cp-slider__body">\n<span ref="$colorbar" class="el-cp-slider__bar"></span>\n<i ref="$bar" class="el-cp-slider__brick"></i>\n</p>\n</div>\n';
							},
						},
						{
							key: "refresh",
							value: function () {
								u(s(n.prototype), "refresh", this).call(this),
									this.setOpacityColorBar();
							},
						},
						{
							key: "setOpacityColorBar",
							value: function () {
								var t = j().format(
										St(St({}, this.$store.rgb), {}, { a: 0 }),
										"rgb"
									),
									e = j().format(
										St(St({}, this.$store.rgb), {}, { a: 1 }),
										"rgb"
									);
								this.refs.$colorbar.css(
									"background",
									"linear-gradient(to top, ".concat(t, ", ").concat(e, ")")
								);
							},
						},
						{
							key: "getDefaultValue",
							value: function () {
								return this.$store.alpha;
							},
						},
						{
							key: "refreshColorUI",
							value: function (t) {
								t = this.getCalculatedDist(t);
								this.setColorUI((t / 100) * this.maxValue),
									this.changeColor({
										a: (Math.floor(t) / 100) * this.maxValue,
									});
							},
						},
					]),
					n
				);
			})();
			function Mt(n) {
				var r = (function () {
					if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
					if (Reflect.construct.sham) return !1;
					if ("function" == typeof Proxy) return !0;
					try {
						return (
							Boolean.prototype.valueOf.call(
								Reflect.construct(Boolean, [], function () {})
							),
							!0
						);
					} catch (t) {
						return !1;
					}
				})();
				return function () {
					var t,
						e = s(n);
					return l(
						this,
						r
							? ((t = s(this).constructor), Reflect.construct(e, arguments, t))
							: e.apply(this, arguments)
					);
				};
			}
			var It = (function () {
				i(e, x);
				var t = Mt(e);
				function e() {
					return a(this, e), t.apply(this, arguments);
				}
				return (
					o(e, [
						{
							key: "components",
							value: function () {
								return { HueVertical: jt, OpacityVertical: Et };
							},
						},
						{
							key: "template",
							value: function () {
								return '\n<div class="el-cp-color-control">\n<template target="HueVertical"></template>\n<template target="OpacityVertical"></template>\n</div>\n';
							},
						},
						{
							key: "refresh",
							value: function () {
								this.HueVertical.setColorUI(),
									this.OpacityVertical.setColorUI();
							},
						},
						{
							key: "@changeColor",
							value: function () {
								this.refresh();
							},
						},
						{
							key: "@initColor",
							value: function () {
								this.refresh();
							},
						},
					]),
					e
				);
			})();
			function Ht(n) {
				var r = (function () {
					if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
					if (Reflect.construct.sham) return !1;
					if ("function" == typeof Proxy) return !0;
					try {
						return (
							Boolean.prototype.valueOf.call(
								Reflect.construct(Boolean, [], function () {})
							),
							!0
						);
					} catch (t) {
						return !1;
					}
				})();
				return function () {
					var t,
						e = s(n);
					return l(
						this,
						r
							? ((t = s(this).constructor), Reflect.construct(e, arguments, t))
							: e.apply(this, arguments)
					);
				};
			}
			var At = (function () {
				i(e, L);
				var t = Ht(e);
				function e() {
					return a(this, e), t.apply(this, arguments);
				}
				return (
					o(e, [
						{
							key: "components",
							value: function () {
								return { Palette: T, Control: It, Swatch: Y };
							},
						},
						{
							key: "template",
							value: function () {
								return '\n<div class="el-colorpicker__wrap">\n<div class="el-colorpicker__body">\n<div class="el-colorpicker__palette">\n<template target="Palette"></template>\n</div>\n<template target="Control"></template>\n</div>\n<template target="Swatch"></template>\n</div>\n';
							},
						},
					]),
					e
				);
			})();
			function Vt(n) {
				var r = (function () {
					if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
					if (Reflect.construct.sham) return !1;
					if ("function" == typeof Proxy) return !0;
					try {
						return (
							Boolean.prototype.valueOf.call(
								Reflect.construct(Boolean, [], function () {})
							),
							!0
						);
					} catch (t) {
						return !1;
					}
				})();
				return function () {
					var t,
						e = s(n);
					return l(
						this,
						r
							? ((t = s(this).constructor), Reflect.construct(e, arguments, t))
							: e.apply(this, arguments)
					);
				};
			}
			var Lt = (function () {
					i(e, L);
					var t = Vt(e);
					function e() {
						return a(this, e), t.apply(this, arguments);
					}
					return (
						o(e, [
							{
								key: "components",
								value: function () {
									return { Swatch: Y };
								},
							},
							{
								key: "template",
								value: function () {
									var t = this.$store.dispatch("/swatch.index");
									return '\n<div class="el-colorpicker__wrap">\n'.concat(
										0 < t.length
											? '\n<template target="Swatch"></template>\n'
											: '\n<div class="el-colorpicker__empty">No colorSet</div>\n',
										"\n</div>\n"
									);
								},
							},
						]),
						e
					);
				})(),
				Ut = {
					container: void 0,
					type: null,
					color: "#ffffff",
					format: "hex",
					outputFormat: void 0,
					useInformation: !0,
					paletteWidth: 200,
					paletteHeight: void 0,
					paletteThickness: 16,
					swatchTitle: "Color palette",
					swatchColors: [],
					onInit: void 0,
					onDestroy: void 0,
					onChange: void 0,
					onChanged: void 0,
					onChangeFormat: void 0,
				};
			var Ft = function (e) {
				var n;
				function r(t) {
					switch (t) {
						case "circle":
							n = new mt(e);
							break;
						case "ring":
							n = new Rt(e);
							break;
						case "mini":
							n = new At(e);
							break;
						case "none":
							n = new Lt(e);
							break;
						default:
							n = new lt(e);
					}
				}
				return (
					r((e = Object.assign({}, Ut, e)).type),
					(n.setType = function (t) {
						(e = Object.assign({}, n.opt, { type: t, color: n.getColor() })),
							n.destroy(),
							r(t);
					}),
					n
				);
			};
		})(),
		zt.default
	);
});
