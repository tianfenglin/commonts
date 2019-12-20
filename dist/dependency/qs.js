var Qs =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/qs.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/qs/lib/formats.js":
/*!****************************************!*\
  !*** ./node_modules/qs/lib/formats.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar replace = String.prototype.replace;\nvar percentTwenties = /%20/g;\n\nvar util = __webpack_require__(/*! ./utils */ \"./node_modules/qs/lib/utils.js\");\n\nvar Format = {\n    RFC1738: 'RFC1738',\n    RFC3986: 'RFC3986'\n};\n\nmodule.exports = util.assign(\n    {\n        'default': Format.RFC3986,\n        formatters: {\n            RFC1738: function (value) {\n                return replace.call(value, percentTwenties, '+');\n            },\n            RFC3986: function (value) {\n                return String(value);\n            }\n        }\n    },\n    Format\n);\n\n\n//# sourceURL=webpack://Qs/./node_modules/qs/lib/formats.js?");

/***/ }),

/***/ "./node_modules/qs/lib/index.js":
/*!**************************************!*\
  !*** ./node_modules/qs/lib/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar stringify = __webpack_require__(/*! ./stringify */ \"./node_modules/qs/lib/stringify.js\");\nvar parse = __webpack_require__(/*! ./parse */ \"./node_modules/qs/lib/parse.js\");\nvar formats = __webpack_require__(/*! ./formats */ \"./node_modules/qs/lib/formats.js\");\n\nmodule.exports = {\n    formats: formats,\n    parse: parse,\n    stringify: stringify\n};\n\n\n//# sourceURL=webpack://Qs/./node_modules/qs/lib/index.js?");

/***/ }),

/***/ "./node_modules/qs/lib/parse.js":
/*!**************************************!*\
  !*** ./node_modules/qs/lib/parse.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar utils = __webpack_require__(/*! ./utils */ \"./node_modules/qs/lib/utils.js\");\n\nvar has = Object.prototype.hasOwnProperty;\n\nvar defaults = {\n    allowDots: false,\n    allowPrototypes: false,\n    arrayLimit: 20,\n    charset: 'utf-8',\n    charsetSentinel: false,\n    comma: false,\n    decoder: utils.decode,\n    delimiter: '&',\n    depth: 5,\n    ignoreQueryPrefix: false,\n    interpretNumericEntities: false,\n    parameterLimit: 1000,\n    parseArrays: true,\n    plainObjects: false,\n    strictNullHandling: false\n};\n\nvar interpretNumericEntities = function (str) {\n    return str.replace(/&#(\\d+);/g, function ($0, numberStr) {\n        return String.fromCharCode(parseInt(numberStr, 10));\n    });\n};\n\n// This is what browsers will submit when the ✓ character occurs in an\n// application/x-www-form-urlencoded body and the encoding of the page containing\n// the form is iso-8859-1, or when the submitted form has an accept-charset\n// attribute of iso-8859-1. Presumably also with other charsets that do not contain\n// the ✓ character, such as us-ascii.\nvar isoSentinel = 'utf8=%26%2310003%3B'; // encodeURIComponent('&#10003;')\n\n// These are the percent-encoded utf-8 octets representing a checkmark, indicating that the request actually is utf-8 encoded.\nvar charsetSentinel = 'utf8=%E2%9C%93'; // encodeURIComponent('✓')\n\nvar parseValues = function parseQueryStringValues(str, options) {\n    var obj = {};\n    var cleanStr = options.ignoreQueryPrefix ? str.replace(/^\\?/, '') : str;\n    var limit = options.parameterLimit === Infinity ? undefined : options.parameterLimit;\n    var parts = cleanStr.split(options.delimiter, limit);\n    var skipIndex = -1; // Keep track of where the utf8 sentinel was found\n    var i;\n\n    var charset = options.charset;\n    if (options.charsetSentinel) {\n        for (i = 0; i < parts.length; ++i) {\n            if (parts[i].indexOf('utf8=') === 0) {\n                if (parts[i] === charsetSentinel) {\n                    charset = 'utf-8';\n                } else if (parts[i] === isoSentinel) {\n                    charset = 'iso-8859-1';\n                }\n                skipIndex = i;\n                i = parts.length; // The eslint settings do not allow break;\n            }\n        }\n    }\n\n    for (i = 0; i < parts.length; ++i) {\n        if (i === skipIndex) {\n            continue;\n        }\n        var part = parts[i];\n\n        var bracketEqualsPos = part.indexOf(']=');\n        var pos = bracketEqualsPos === -1 ? part.indexOf('=') : bracketEqualsPos + 1;\n\n        var key, val;\n        if (pos === -1) {\n            key = options.decoder(part, defaults.decoder, charset);\n            val = options.strictNullHandling ? null : '';\n        } else {\n            key = options.decoder(part.slice(0, pos), defaults.decoder, charset);\n            val = options.decoder(part.slice(pos + 1), defaults.decoder, charset);\n        }\n\n        if (val && options.interpretNumericEntities && charset === 'iso-8859-1') {\n            val = interpretNumericEntities(val);\n        }\n\n        if (val && options.comma && val.indexOf(',') > -1) {\n            val = val.split(',');\n        }\n\n        if (has.call(obj, key)) {\n            obj[key] = utils.combine(obj[key], val);\n        } else {\n            obj[key] = val;\n        }\n    }\n\n    return obj;\n};\n\nvar parseObject = function (chain, val, options) {\n    var leaf = val;\n\n    for (var i = chain.length - 1; i >= 0; --i) {\n        var obj;\n        var root = chain[i];\n\n        if (root === '[]' && options.parseArrays) {\n            obj = [].concat(leaf);\n        } else {\n            obj = options.plainObjects ? Object.create(null) : {};\n            var cleanRoot = root.charAt(0) === '[' && root.charAt(root.length - 1) === ']' ? root.slice(1, -1) : root;\n            var index = parseInt(cleanRoot, 10);\n            if (!options.parseArrays && cleanRoot === '') {\n                obj = { 0: leaf };\n            } else if (\n                !isNaN(index)\n                && root !== cleanRoot\n                && String(index) === cleanRoot\n                && index >= 0\n                && (options.parseArrays && index <= options.arrayLimit)\n            ) {\n                obj = [];\n                obj[index] = leaf;\n            } else {\n                obj[cleanRoot] = leaf;\n            }\n        }\n\n        leaf = obj;\n    }\n\n    return leaf;\n};\n\nvar parseKeys = function parseQueryStringKeys(givenKey, val, options) {\n    if (!givenKey) {\n        return;\n    }\n\n    // Transform dot notation to bracket notation\n    var key = options.allowDots ? givenKey.replace(/\\.([^.[]+)/g, '[$1]') : givenKey;\n\n    // The regex chunks\n\n    var brackets = /(\\[[^[\\]]*])/;\n    var child = /(\\[[^[\\]]*])/g;\n\n    // Get the parent\n\n    var segment = options.depth > 0 && brackets.exec(key);\n    var parent = segment ? key.slice(0, segment.index) : key;\n\n    // Stash the parent if it exists\n\n    var keys = [];\n    if (parent) {\n        // If we aren't using plain objects, optionally prefix keys that would overwrite object prototype properties\n        if (!options.plainObjects && has.call(Object.prototype, parent)) {\n            if (!options.allowPrototypes) {\n                return;\n            }\n        }\n\n        keys.push(parent);\n    }\n\n    // Loop through children appending to the array until we hit depth\n\n    var i = 0;\n    while (options.depth > 0 && (segment = child.exec(key)) !== null && i < options.depth) {\n        i += 1;\n        if (!options.plainObjects && has.call(Object.prototype, segment[1].slice(1, -1))) {\n            if (!options.allowPrototypes) {\n                return;\n            }\n        }\n        keys.push(segment[1]);\n    }\n\n    // If there's a remainder, just add whatever is left\n\n    if (segment) {\n        keys.push('[' + key.slice(segment.index) + ']');\n    }\n\n    return parseObject(keys, val, options);\n};\n\nvar normalizeParseOptions = function normalizeParseOptions(opts) {\n    if (!opts) {\n        return defaults;\n    }\n\n    if (opts.decoder !== null && opts.decoder !== undefined && typeof opts.decoder !== 'function') {\n        throw new TypeError('Decoder has to be a function.');\n    }\n\n    if (typeof opts.charset !== 'undefined' && opts.charset !== 'utf-8' && opts.charset !== 'iso-8859-1') {\n        throw new Error('The charset option must be either utf-8, iso-8859-1, or undefined');\n    }\n    var charset = typeof opts.charset === 'undefined' ? defaults.charset : opts.charset;\n\n    return {\n        allowDots: typeof opts.allowDots === 'undefined' ? defaults.allowDots : !!opts.allowDots,\n        allowPrototypes: typeof opts.allowPrototypes === 'boolean' ? opts.allowPrototypes : defaults.allowPrototypes,\n        arrayLimit: typeof opts.arrayLimit === 'number' ? opts.arrayLimit : defaults.arrayLimit,\n        charset: charset,\n        charsetSentinel: typeof opts.charsetSentinel === 'boolean' ? opts.charsetSentinel : defaults.charsetSentinel,\n        comma: typeof opts.comma === 'boolean' ? opts.comma : defaults.comma,\n        decoder: typeof opts.decoder === 'function' ? opts.decoder : defaults.decoder,\n        delimiter: typeof opts.delimiter === 'string' || utils.isRegExp(opts.delimiter) ? opts.delimiter : defaults.delimiter,\n        // eslint-disable-next-line no-implicit-coercion, no-extra-parens\n        depth: (typeof opts.depth === 'number' || opts.depth === false) ? +opts.depth : defaults.depth,\n        ignoreQueryPrefix: opts.ignoreQueryPrefix === true,\n        interpretNumericEntities: typeof opts.interpretNumericEntities === 'boolean' ? opts.interpretNumericEntities : defaults.interpretNumericEntities,\n        parameterLimit: typeof opts.parameterLimit === 'number' ? opts.parameterLimit : defaults.parameterLimit,\n        parseArrays: opts.parseArrays !== false,\n        plainObjects: typeof opts.plainObjects === 'boolean' ? opts.plainObjects : defaults.plainObjects,\n        strictNullHandling: typeof opts.strictNullHandling === 'boolean' ? opts.strictNullHandling : defaults.strictNullHandling\n    };\n};\n\nmodule.exports = function (str, opts) {\n    var options = normalizeParseOptions(opts);\n\n    if (str === '' || str === null || typeof str === 'undefined') {\n        return options.plainObjects ? Object.create(null) : {};\n    }\n\n    var tempObj = typeof str === 'string' ? parseValues(str, options) : str;\n    var obj = options.plainObjects ? Object.create(null) : {};\n\n    // Iterate over the keys and setup the new object\n\n    var keys = Object.keys(tempObj);\n    for (var i = 0; i < keys.length; ++i) {\n        var key = keys[i];\n        var newObj = parseKeys(key, tempObj[key], options);\n        obj = utils.merge(obj, newObj, options);\n    }\n\n    return utils.compact(obj);\n};\n\n\n//# sourceURL=webpack://Qs/./node_modules/qs/lib/parse.js?");

/***/ }),

/***/ "./node_modules/qs/lib/stringify.js":
/*!******************************************!*\
  !*** ./node_modules/qs/lib/stringify.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar utils = __webpack_require__(/*! ./utils */ \"./node_modules/qs/lib/utils.js\");\nvar formats = __webpack_require__(/*! ./formats */ \"./node_modules/qs/lib/formats.js\");\nvar has = Object.prototype.hasOwnProperty;\n\nvar arrayPrefixGenerators = {\n    brackets: function brackets(prefix) { // eslint-disable-line func-name-matching\n        return prefix + '[]';\n    },\n    comma: 'comma',\n    indices: function indices(prefix, key) { // eslint-disable-line func-name-matching\n        return prefix + '[' + key + ']';\n    },\n    repeat: function repeat(prefix) { // eslint-disable-line func-name-matching\n        return prefix;\n    }\n};\n\nvar isArray = Array.isArray;\nvar push = Array.prototype.push;\nvar pushToArray = function (arr, valueOrArray) {\n    push.apply(arr, isArray(valueOrArray) ? valueOrArray : [valueOrArray]);\n};\n\nvar toISO = Date.prototype.toISOString;\n\nvar defaultFormat = formats['default'];\nvar defaults = {\n    addQueryPrefix: false,\n    allowDots: false,\n    charset: 'utf-8',\n    charsetSentinel: false,\n    delimiter: '&',\n    encode: true,\n    encoder: utils.encode,\n    encodeValuesOnly: false,\n    format: defaultFormat,\n    formatter: formats.formatters[defaultFormat],\n    // deprecated\n    indices: false,\n    serializeDate: function serializeDate(date) { // eslint-disable-line func-name-matching\n        return toISO.call(date);\n    },\n    skipNulls: false,\n    strictNullHandling: false\n};\n\nvar isNonNullishPrimitive = function isNonNullishPrimitive(v) { // eslint-disable-line func-name-matching\n    return typeof v === 'string'\n        || typeof v === 'number'\n        || typeof v === 'boolean'\n        || typeof v === 'symbol'\n        || typeof v === 'bigint'; // eslint-disable-line valid-typeof\n};\n\nvar stringify = function stringify( // eslint-disable-line func-name-matching\n    object,\n    prefix,\n    generateArrayPrefix,\n    strictNullHandling,\n    skipNulls,\n    encoder,\n    filter,\n    sort,\n    allowDots,\n    serializeDate,\n    formatter,\n    encodeValuesOnly,\n    charset\n) {\n    var obj = object;\n    if (typeof filter === 'function') {\n        obj = filter(prefix, obj);\n    } else if (obj instanceof Date) {\n        obj = serializeDate(obj);\n    } else if (generateArrayPrefix === 'comma' && isArray(obj)) {\n        obj = obj.join(',');\n    }\n\n    if (obj === null) {\n        if (strictNullHandling) {\n            return encoder && !encodeValuesOnly ? encoder(prefix, defaults.encoder, charset) : prefix;\n        }\n\n        obj = '';\n    }\n\n    if (isNonNullishPrimitive(obj) || utils.isBuffer(obj)) {\n        if (encoder) {\n            var keyValue = encodeValuesOnly ? prefix : encoder(prefix, defaults.encoder, charset);\n            return [formatter(keyValue) + '=' + formatter(encoder(obj, defaults.encoder, charset))];\n        }\n        return [formatter(prefix) + '=' + formatter(String(obj))];\n    }\n\n    var values = [];\n\n    if (typeof obj === 'undefined') {\n        return values;\n    }\n\n    var objKeys;\n    if (isArray(filter)) {\n        objKeys = filter;\n    } else {\n        var keys = Object.keys(obj);\n        objKeys = sort ? keys.sort(sort) : keys;\n    }\n\n    for (var i = 0; i < objKeys.length; ++i) {\n        var key = objKeys[i];\n\n        if (skipNulls && obj[key] === null) {\n            continue;\n        }\n\n        if (isArray(obj)) {\n            pushToArray(values, stringify(\n                obj[key],\n                typeof generateArrayPrefix === 'function' ? generateArrayPrefix(prefix, key) : prefix,\n                generateArrayPrefix,\n                strictNullHandling,\n                skipNulls,\n                encoder,\n                filter,\n                sort,\n                allowDots,\n                serializeDate,\n                formatter,\n                encodeValuesOnly,\n                charset\n            ));\n        } else {\n            pushToArray(values, stringify(\n                obj[key],\n                prefix + (allowDots ? '.' + key : '[' + key + ']'),\n                generateArrayPrefix,\n                strictNullHandling,\n                skipNulls,\n                encoder,\n                filter,\n                sort,\n                allowDots,\n                serializeDate,\n                formatter,\n                encodeValuesOnly,\n                charset\n            ));\n        }\n    }\n\n    return values;\n};\n\nvar normalizeStringifyOptions = function normalizeStringifyOptions(opts) {\n    if (!opts) {\n        return defaults;\n    }\n\n    if (opts.encoder !== null && opts.encoder !== undefined && typeof opts.encoder !== 'function') {\n        throw new TypeError('Encoder has to be a function.');\n    }\n\n    var charset = opts.charset || defaults.charset;\n    if (typeof opts.charset !== 'undefined' && opts.charset !== 'utf-8' && opts.charset !== 'iso-8859-1') {\n        throw new TypeError('The charset option must be either utf-8, iso-8859-1, or undefined');\n    }\n\n    var format = formats['default'];\n    if (typeof opts.format !== 'undefined') {\n        if (!has.call(formats.formatters, opts.format)) {\n            throw new TypeError('Unknown format option provided.');\n        }\n        format = opts.format;\n    }\n    var formatter = formats.formatters[format];\n\n    var filter = defaults.filter;\n    if (typeof opts.filter === 'function' || isArray(opts.filter)) {\n        filter = opts.filter;\n    }\n\n    return {\n        addQueryPrefix: typeof opts.addQueryPrefix === 'boolean' ? opts.addQueryPrefix : defaults.addQueryPrefix,\n        allowDots: typeof opts.allowDots === 'undefined' ? defaults.allowDots : !!opts.allowDots,\n        charset: charset,\n        charsetSentinel: typeof opts.charsetSentinel === 'boolean' ? opts.charsetSentinel : defaults.charsetSentinel,\n        delimiter: typeof opts.delimiter === 'undefined' ? defaults.delimiter : opts.delimiter,\n        encode: typeof opts.encode === 'boolean' ? opts.encode : defaults.encode,\n        encoder: typeof opts.encoder === 'function' ? opts.encoder : defaults.encoder,\n        encodeValuesOnly: typeof opts.encodeValuesOnly === 'boolean' ? opts.encodeValuesOnly : defaults.encodeValuesOnly,\n        filter: filter,\n        formatter: formatter,\n        serializeDate: typeof opts.serializeDate === 'function' ? opts.serializeDate : defaults.serializeDate,\n        skipNulls: typeof opts.skipNulls === 'boolean' ? opts.skipNulls : defaults.skipNulls,\n        sort: typeof opts.sort === 'function' ? opts.sort : null,\n        strictNullHandling: typeof opts.strictNullHandling === 'boolean' ? opts.strictNullHandling : defaults.strictNullHandling\n    };\n};\n\nmodule.exports = function (object, opts) {\n    var obj = object;\n    var options = normalizeStringifyOptions(opts);\n\n    var objKeys;\n    var filter;\n\n    if (typeof options.filter === 'function') {\n        filter = options.filter;\n        obj = filter('', obj);\n    } else if (isArray(options.filter)) {\n        filter = options.filter;\n        objKeys = filter;\n    }\n\n    var keys = [];\n\n    if (typeof obj !== 'object' || obj === null) {\n        return '';\n    }\n\n    var arrayFormat;\n    if (opts && opts.arrayFormat in arrayPrefixGenerators) {\n        arrayFormat = opts.arrayFormat;\n    } else if (opts && 'indices' in opts) {\n        arrayFormat = opts.indices ? 'indices' : 'repeat';\n    } else {\n        arrayFormat = 'indices';\n    }\n\n    var generateArrayPrefix = arrayPrefixGenerators[arrayFormat];\n\n    if (!objKeys) {\n        objKeys = Object.keys(obj);\n    }\n\n    if (options.sort) {\n        objKeys.sort(options.sort);\n    }\n\n    for (var i = 0; i < objKeys.length; ++i) {\n        var key = objKeys[i];\n\n        if (options.skipNulls && obj[key] === null) {\n            continue;\n        }\n        pushToArray(keys, stringify(\n            obj[key],\n            key,\n            generateArrayPrefix,\n            options.strictNullHandling,\n            options.skipNulls,\n            options.encode ? options.encoder : null,\n            options.filter,\n            options.sort,\n            options.allowDots,\n            options.serializeDate,\n            options.formatter,\n            options.encodeValuesOnly,\n            options.charset\n        ));\n    }\n\n    var joined = keys.join(options.delimiter);\n    var prefix = options.addQueryPrefix === true ? '?' : '';\n\n    if (options.charsetSentinel) {\n        if (options.charset === 'iso-8859-1') {\n            // encodeURIComponent('&#10003;'), the \"numeric entity\" representation of a checkmark\n            prefix += 'utf8=%26%2310003%3B&';\n        } else {\n            // encodeURIComponent('✓')\n            prefix += 'utf8=%E2%9C%93&';\n        }\n    }\n\n    return joined.length > 0 ? prefix + joined : '';\n};\n\n\n//# sourceURL=webpack://Qs/./node_modules/qs/lib/stringify.js?");

/***/ }),

/***/ "./node_modules/qs/lib/utils.js":
/*!**************************************!*\
  !*** ./node_modules/qs/lib/utils.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar has = Object.prototype.hasOwnProperty;\nvar isArray = Array.isArray;\n\nvar hexTable = (function () {\n    var array = [];\n    for (var i = 0; i < 256; ++i) {\n        array.push('%' + ((i < 16 ? '0' : '') + i.toString(16)).toUpperCase());\n    }\n\n    return array;\n}());\n\nvar compactQueue = function compactQueue(queue) {\n    while (queue.length > 1) {\n        var item = queue.pop();\n        var obj = item.obj[item.prop];\n\n        if (isArray(obj)) {\n            var compacted = [];\n\n            for (var j = 0; j < obj.length; ++j) {\n                if (typeof obj[j] !== 'undefined') {\n                    compacted.push(obj[j]);\n                }\n            }\n\n            item.obj[item.prop] = compacted;\n        }\n    }\n};\n\nvar arrayToObject = function arrayToObject(source, options) {\n    var obj = options && options.plainObjects ? Object.create(null) : {};\n    for (var i = 0; i < source.length; ++i) {\n        if (typeof source[i] !== 'undefined') {\n            obj[i] = source[i];\n        }\n    }\n\n    return obj;\n};\n\nvar merge = function merge(target, source, options) {\n    if (!source) {\n        return target;\n    }\n\n    if (typeof source !== 'object') {\n        if (isArray(target)) {\n            target.push(source);\n        } else if (target && typeof target === 'object') {\n            if ((options && (options.plainObjects || options.allowPrototypes)) || !has.call(Object.prototype, source)) {\n                target[source] = true;\n            }\n        } else {\n            return [target, source];\n        }\n\n        return target;\n    }\n\n    if (!target || typeof target !== 'object') {\n        return [target].concat(source);\n    }\n\n    var mergeTarget = target;\n    if (isArray(target) && !isArray(source)) {\n        mergeTarget = arrayToObject(target, options);\n    }\n\n    if (isArray(target) && isArray(source)) {\n        source.forEach(function (item, i) {\n            if (has.call(target, i)) {\n                var targetItem = target[i];\n                if (targetItem && typeof targetItem === 'object' && item && typeof item === 'object') {\n                    target[i] = merge(targetItem, item, options);\n                } else {\n                    target.push(item);\n                }\n            } else {\n                target[i] = item;\n            }\n        });\n        return target;\n    }\n\n    return Object.keys(source).reduce(function (acc, key) {\n        var value = source[key];\n\n        if (has.call(acc, key)) {\n            acc[key] = merge(acc[key], value, options);\n        } else {\n            acc[key] = value;\n        }\n        return acc;\n    }, mergeTarget);\n};\n\nvar assign = function assignSingleSource(target, source) {\n    return Object.keys(source).reduce(function (acc, key) {\n        acc[key] = source[key];\n        return acc;\n    }, target);\n};\n\nvar decode = function (str, decoder, charset) {\n    var strWithoutPlus = str.replace(/\\+/g, ' ');\n    if (charset === 'iso-8859-1') {\n        // unescape never throws, no try...catch needed:\n        return strWithoutPlus.replace(/%[0-9a-f]{2}/gi, unescape);\n    }\n    // utf-8\n    try {\n        return decodeURIComponent(strWithoutPlus);\n    } catch (e) {\n        return strWithoutPlus;\n    }\n};\n\nvar encode = function encode(str, defaultEncoder, charset) {\n    // This code was originally written by Brian White (mscdex) for the io.js core querystring library.\n    // It has been adapted here for stricter adherence to RFC 3986\n    if (str.length === 0) {\n        return str;\n    }\n\n    var string = str;\n    if (typeof str === 'symbol') {\n        string = Symbol.prototype.toString.call(str);\n    } else if (typeof str !== 'string') {\n        string = String(str);\n    }\n\n    if (charset === 'iso-8859-1') {\n        return escape(string).replace(/%u[0-9a-f]{4}/gi, function ($0) {\n            return '%26%23' + parseInt($0.slice(2), 16) + '%3B';\n        });\n    }\n\n    var out = '';\n    for (var i = 0; i < string.length; ++i) {\n        var c = string.charCodeAt(i);\n\n        if (\n            c === 0x2D // -\n            || c === 0x2E // .\n            || c === 0x5F // _\n            || c === 0x7E // ~\n            || (c >= 0x30 && c <= 0x39) // 0-9\n            || (c >= 0x41 && c <= 0x5A) // a-z\n            || (c >= 0x61 && c <= 0x7A) // A-Z\n        ) {\n            out += string.charAt(i);\n            continue;\n        }\n\n        if (c < 0x80) {\n            out = out + hexTable[c];\n            continue;\n        }\n\n        if (c < 0x800) {\n            out = out + (hexTable[0xC0 | (c >> 6)] + hexTable[0x80 | (c & 0x3F)]);\n            continue;\n        }\n\n        if (c < 0xD800 || c >= 0xE000) {\n            out = out + (hexTable[0xE0 | (c >> 12)] + hexTable[0x80 | ((c >> 6) & 0x3F)] + hexTable[0x80 | (c & 0x3F)]);\n            continue;\n        }\n\n        i += 1;\n        c = 0x10000 + (((c & 0x3FF) << 10) | (string.charCodeAt(i) & 0x3FF));\n        out += hexTable[0xF0 | (c >> 18)]\n            + hexTable[0x80 | ((c >> 12) & 0x3F)]\n            + hexTable[0x80 | ((c >> 6) & 0x3F)]\n            + hexTable[0x80 | (c & 0x3F)];\n    }\n\n    return out;\n};\n\nvar compact = function compact(value) {\n    var queue = [{ obj: { o: value }, prop: 'o' }];\n    var refs = [];\n\n    for (var i = 0; i < queue.length; ++i) {\n        var item = queue[i];\n        var obj = item.obj[item.prop];\n\n        var keys = Object.keys(obj);\n        for (var j = 0; j < keys.length; ++j) {\n            var key = keys[j];\n            var val = obj[key];\n            if (typeof val === 'object' && val !== null && refs.indexOf(val) === -1) {\n                queue.push({ obj: obj, prop: key });\n                refs.push(val);\n            }\n        }\n    }\n\n    compactQueue(queue);\n\n    return value;\n};\n\nvar isRegExp = function isRegExp(obj) {\n    return Object.prototype.toString.call(obj) === '[object RegExp]';\n};\n\nvar isBuffer = function isBuffer(obj) {\n    if (!obj || typeof obj !== 'object') {\n        return false;\n    }\n\n    return !!(obj.constructor && obj.constructor.isBuffer && obj.constructor.isBuffer(obj));\n};\n\nvar combine = function combine(a, b) {\n    return [].concat(a, b);\n};\n\nmodule.exports = {\n    arrayToObject: arrayToObject,\n    assign: assign,\n    combine: combine,\n    compact: compact,\n    decode: decode,\n    encode: encode,\n    isBuffer: isBuffer,\n    isRegExp: isRegExp,\n    merge: merge\n};\n\n\n//# sourceURL=webpack://Qs/./node_modules/qs/lib/utils.js?");

/***/ }),

/***/ "./src/qs.ts":
/*!*******************!*\
  !*** ./src/qs.ts ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst qs = __webpack_require__(/*! qs */ \"./node_modules/qs/lib/index.js\");\r\nexports.default = qs;\r\n\n\n//# sourceURL=webpack://Qs/./src/qs.ts?");

/***/ })

/******/ })["default"];
var qs = Qs;