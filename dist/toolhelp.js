var ToolHelp =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/baseclass/files/images.ts":
/*!***************************************!*\
  !*** ./src/baseclass/files/images.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nclass Images {\r\n    getBase64Image(option) {\r\n        try {\r\n            let reader = new FileReader();\r\n            reader.readAsDataURL(option.file);\r\n            reader.onload = function (e) {\r\n                let url = e.target.result;\r\n                let image = new Image();\r\n                image.src = url;\r\n                image.onload = function () {\r\n                    let canvas = document.createElement(\"canvas\");\r\n                    if (option.scaling != null &&\r\n                        option.scaling > 0 &&\r\n                        option.scaling < 1) {\r\n                        image.width = image.width * option.scaling;\r\n                        image.height = image.height * option.scaling;\r\n                    }\r\n                    if (option.width != null) {\r\n                        image.width = option.width;\r\n                    }\r\n                    if (option.height != null) {\r\n                        image.height = option.height;\r\n                    }\r\n                    canvas.width = image.width;\r\n                    canvas.height = image.height;\r\n                    let ctx = canvas.getContext(\"2d\");\r\n                    ctx.drawImage(image, 0, 0, image.width, image.height);\r\n                    let ext = image.src\r\n                        .substring(image.src.lastIndexOf(\".\") + 1)\r\n                        .toLowerCase();\r\n                    let dataURL = canvas.toDataURL(\"image/\" + ext);\r\n                    if (option.success != null) {\r\n                        option.success(dataURL);\r\n                    }\r\n                };\r\n            };\r\n        }\r\n        catch (e) {\r\n            if (option.error != null) {\r\n                option.error(e);\r\n            }\r\n        }\r\n    }\r\n}\r\nexports.default = Images;\r\n\n\n//# sourceURL=webpack://ToolHelp/./src/baseclass/files/images.ts?");

/***/ }),

/***/ "./src/baseclass/files/index.ts":
/*!**************************************!*\
  !*** ./src/baseclass/files/index.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst images_1 = __webpack_require__(/*! ./images */ \"./src/baseclass/files/images.ts\");\r\nexports.Images = images_1.default;\r\nconst upfiles_1 = __webpack_require__(/*! ./upfiles */ \"./src/baseclass/files/upfiles.ts\");\r\nexports.UpFiles = upfiles_1.default;\r\n\n\n//# sourceURL=webpack://ToolHelp/./src/baseclass/files/index.ts?");

/***/ }),

/***/ "./src/baseclass/files/upfiles.ts":
/*!****************************************!*\
  !*** ./src/baseclass/files/upfiles.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst axiosapi_1 = __webpack_require__(/*! @/baseclass/https/axiosapi */ \"./src/baseclass/https/axiosapi.ts\");\r\nclass UpFileResult {\r\n    constructor() {\r\n        this.status = true;\r\n    }\r\n}\r\nclass UpFiles {\r\n    constructor() {\r\n        this.max = 5 * 1024 * 1024;\r\n        this.continue = false;\r\n        this.param = {\r\n            filepath: \"\",\r\n            fileMd5: \"\",\r\n            chunk: \"0\",\r\n            chunks: \"1\",\r\n            chunkSize: this.max.toString()\r\n        };\r\n        this.slicesRecord = [];\r\n        this.upnumbermax = 3;\r\n        this.upnumberRecord = [];\r\n        this.isUpLoad = true;\r\n    }\r\n    async ControlFlow() {\r\n        let result = new UpFileResult();\r\n        await this.GetFileMd5();\r\n        console.log(this.md5);\r\n        this.FileSlices();\r\n        await this.DetectionMd5();\r\n        await this.UpBinaryFiles();\r\n        if (this.isUpLoad) {\r\n            result = await this.MergeBinary();\r\n        }\r\n        else {\r\n            result.data = \"已暂停上传\";\r\n            result.status = false;\r\n        }\r\n        return result;\r\n    }\r\n    async ContinueUpLoad() {\r\n        let result = new UpFileResult();\r\n        await this.UpBinaryFiles();\r\n        if (this.isUpLoad) {\r\n            result = await this.MergeBinary();\r\n        }\r\n        else {\r\n            result.data = \"已暂停上传\";\r\n            result.status = false;\r\n        }\r\n        return result;\r\n    }\r\n    FileSlices() {\r\n        let filesize = this.file.size;\r\n        let count = Math.ceil(filesize / this.max);\r\n        let fileslice = [];\r\n        let start = 0;\r\n        let end;\r\n        for (let i = 1; i <= count; i++) {\r\n            if (i == count) {\r\n                end = filesize;\r\n            }\r\n            else {\r\n                end = start + this.max;\r\n            }\r\n            let json = {\r\n                index: i,\r\n                start: start,\r\n                end: end,\r\n                isok: false\r\n            };\r\n            fileslice.push(json);\r\n            start = end;\r\n        }\r\n        this.slicesRecord = fileslice;\r\n        this.param.chunks = count.toString();\r\n        if (count < this.upnumbermax) {\r\n            this.upnumbermax = count;\r\n        }\r\n        console.log(fileslice);\r\n        return fileslice;\r\n    }\r\n    GetFileMd5() {\r\n        let blobSlice = File.prototype.slice;\r\n        let chunkSize = 2097152;\r\n        let chunks = Math.ceil(this.file.size / chunkSize);\r\n        let currentChunk = 0;\r\n        let spark = new SparkMD5.ArrayBuffer();\r\n        let fileReader = new FileReader();\r\n        let result = new Promise((reslove, reject) => {\r\n            fileReader.onload = (e) => {\r\n                spark.append(e.target.result);\r\n                currentChunk++;\r\n                if (currentChunk < chunks) {\r\n                    loadNext();\r\n                }\r\n                else {\r\n                    this.md5 = spark.end();\r\n                    this.param.fileMd5 = this.md5;\r\n                    reslove();\r\n                }\r\n            };\r\n            fileReader.onerror = () => {\r\n                reject(\"错误\");\r\n            };\r\n        });\r\n        let loadNext = () => {\r\n            let start = currentChunk * chunkSize;\r\n            let end = start + chunkSize >= this.file.size\r\n                ? this.file.size\r\n                : start + chunkSize;\r\n            fileReader.readAsArrayBuffer(blobSlice.call(this.file, start, end));\r\n        };\r\n        loadNext();\r\n        return result;\r\n    }\r\n    async DetectionMd5() {\r\n        let _this = this;\r\n        let result = await new Promise((reslove, reject) => {\r\n            let axiosconfig = {\r\n                url: this.urlDetMd5,\r\n                method: \"post\",\r\n                data: qs.stringify({ md5: this.md5 })\r\n            };\r\n            axiosapi_1.default(axiosconfig)\r\n                .then(function (response) {\r\n                if (response.data.msg == \"1\") {\r\n                    reslove(true);\r\n                }\r\n                else {\r\n                    reslove(false);\r\n                }\r\n            })\r\n                .catch(function (error) {\r\n                console.log(error);\r\n                reject(false);\r\n            });\r\n        });\r\n        if (result) {\r\n            await this.DetectionBinary();\r\n        }\r\n    }\r\n    DetectionBinary() {\r\n        let _this = this;\r\n        let result = new Promise((reslove, reject) => {\r\n            for (let i = 0; i < this.slicesRecord.length; i++) {\r\n                this.param.chunk = (i + 1).toString();\r\n                if (i == this.slicesRecord.length - 1) {\r\n                    this.param.chunkSize = (this.slicesRecord[i].end - this.slicesRecord[i].start).toString();\r\n                }\r\n                let axiosconfig = {\r\n                    url: this.urlDetBin,\r\n                    method: \"post\",\r\n                    data: qs.stringify(this.param)\r\n                };\r\n                axiosapi_1.default(axiosconfig)\r\n                    .then(function (response) {\r\n                    if (response.data.msg == \"1\") {\r\n                        _this.slicesRecord[i].isok = true;\r\n                    }\r\n                    if (i == _this.slicesRecord.length - 1) {\r\n                        reslove();\r\n                    }\r\n                })\r\n                    .catch(function (error) {\r\n                    console.log(error);\r\n                    reject();\r\n                });\r\n            }\r\n        });\r\n        return result;\r\n    }\r\n    UpLoad(binaryFile) {\r\n        let _this = this;\r\n        let percent = Math.floor((binaryFile[\"index\"] / parseInt(_this.param.chunks)) * 100);\r\n        if (this.progressBar != undefined) {\r\n            this.progressBar(percent);\r\n        }\r\n        const formData = new FormData();\r\n        this.param.chunk = binaryFile[\"index\"].toString();\r\n        for (let p in this.param) {\r\n            formData.append(p, this.param[p]);\r\n        }\r\n        let binary = this.file.slice(binaryFile[\"start\"], binaryFile[\"end\"]);\r\n        formData.append(\"file\", binary);\r\n        let axiosconfig = {\r\n            headers: {\r\n                \"Content-Type\": \"multipart/form-data\"\r\n            },\r\n            url: this.url,\r\n            method: \"post\",\r\n            timeout: 60000,\r\n            data: formData\r\n        };\r\n        let result = new Promise((reslove, reject) => {\r\n            axiosapi_1.default(axiosconfig)\r\n                .then(function (response) {\r\n                _this.slicesRecord.filter(n => n.index == binaryFile[\"index\"])[0][\"isok\"] = true;\r\n                reslove();\r\n            })\r\n                .catch(function (errors) {\r\n                reject();\r\n            });\r\n        });\r\n        return result;\r\n    }\r\n    MergeBinary() {\r\n        let upFileResult = new UpFileResult();\r\n        let result = new Promise((reslove, reject) => {\r\n            let _this = this;\r\n            let axiosconfig = {\r\n                url: this.urlMerge,\r\n                method: \"post\",\r\n                data: qs.stringify({\r\n                    filename: _this.file.name,\r\n                    fileMd5: _this.md5,\r\n                    isoldname: \"0\"\r\n                })\r\n            };\r\n            axiosapi_1.default(axiosconfig)\r\n                .then(function (response) {\r\n                upFileResult.status = true;\r\n                upFileResult.data = response.data;\r\n                reslove(upFileResult);\r\n            })\r\n                .catch(function (error) {\r\n                console.log(error);\r\n                upFileResult.status = false;\r\n                upFileResult.data = error;\r\n                reject(upFileResult);\r\n            });\r\n        });\r\n        return result;\r\n    }\r\n    UpBinaryFiles() {\r\n        let result = new Promise((reslove, reject) => {\r\n            let upnumberrec = 0;\r\n            let _this = this;\r\n            let upnumbernow = {\r\n                get value() {\r\n                    return upnumberrec;\r\n                },\r\n                set value(now) {\r\n                    if (!_this.isUpLoad) {\r\n                        reslove();\r\n                        return;\r\n                    }\r\n                    let nextFile = _this.slicesRecord.filter(n => n.isok == false);\r\n                    if (nextFile.length > 0) {\r\n                        let ready = nextFile.filter(n => _this.upnumberRecord.indexOf(n.index) == -1);\r\n                        if (ready.length > 0) {\r\n                            _this.upnumberRecord.push(ready[0].index);\r\n                            _this.UpLoad(ready[0]).then(function () {\r\n                                upnumbernow.value--;\r\n                            });\r\n                        }\r\n                    }\r\n                    else {\r\n                        reslove();\r\n                    }\r\n                    upnumberrec = now;\r\n                }\r\n            };\r\n            for (let i = 0; i < this.upnumbermax; i++) {\r\n                upnumbernow.value++;\r\n            }\r\n        });\r\n        return result;\r\n    }\r\n}\r\nexports.default = UpFiles;\r\n\n\n//# sourceURL=webpack://ToolHelp/./src/baseclass/files/upfiles.ts?");

/***/ }),

/***/ "./src/baseclass/https/axiosapi.ts":
/*!*****************************************!*\
  !*** ./src/baseclass/https/axiosapi.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst webapi_1 = __webpack_require__(/*! ./webapi */ \"./src/baseclass/https/webapi.ts\");\r\naxios.defaults.timeout = 10000;\r\naxios.defaults.baseURL = webapi_1.default.backstagePath;\r\naxios.defaults.withCredentials = true;\r\nexports.default = axios;\r\n\n\n//# sourceURL=webpack://ToolHelp/./src/baseclass/https/axiosapi.ts?");

/***/ }),

/***/ "./src/baseclass/https/browser.ts":
/*!****************************************!*\
  !*** ./src/baseclass/https/browser.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nclass Browser {\r\n    constructor() {\r\n        this.isSupportBase64 = function () {\r\n            let data = new Image();\r\n            let support = true;\r\n            data.onload = data.onerror = function () {\r\n                if (data.width != 1 || data.height != 1) {\r\n                    support = false;\r\n                }\r\n            };\r\n            data.src =\r\n                \"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==\";\r\n            return support;\r\n        };\r\n    }\r\n    getFlashVersion() {\r\n        let version;\r\n        try {\r\n            version = navigator.plugins[\"Shockwave Flash\"];\r\n            version = version.description;\r\n        }\r\n        catch (ex) {\r\n            try {\r\n                version = new ActiveXObject(\"ShockwaveFlash.ShockwaveFlash\").GetVariable(\"$version\");\r\n            }\r\n            catch (ex2) {\r\n                version = \"0.0\";\r\n            }\r\n        }\r\n        version = version.match(/\\d+/g);\r\n        return parseFloat(version[0] + \".\" + version[1]);\r\n    }\r\n    getIEVersion() {\r\n        let userAgent = navigator.userAgent;\r\n        let isIE = userAgent.indexOf(\"compatible\") > -1 && userAgent.indexOf(\"MSIE\") > -1;\r\n        let isEdge = userAgent.indexOf(\"Edge\") > -1 && !isIE;\r\n        let isIE11 = userAgent.indexOf(\"Trident\") > -1 && userAgent.indexOf(\"rv:11.0\") > -1;\r\n        if (isIE) {\r\n            let reIE = new RegExp(\"MSIE (\\\\d+\\\\.\\\\d+);\");\r\n            reIE.test(userAgent);\r\n            let fIEVersion = parseFloat(RegExp[\"$1\"]);\r\n            if (fIEVersion == 7) {\r\n                return 7;\r\n            }\r\n            else if (fIEVersion == 8) {\r\n                return 8;\r\n            }\r\n            else if (fIEVersion == 9) {\r\n                return 9;\r\n            }\r\n            else if (fIEVersion == 10) {\r\n                return 10;\r\n            }\r\n            else {\r\n                return 6;\r\n            }\r\n        }\r\n        else if (isEdge) {\r\n            return 0;\r\n        }\r\n        else if (isIE11) {\r\n            return 11;\r\n        }\r\n        else {\r\n            return -1;\r\n        }\r\n    }\r\n    getDocumentPath() {\r\n        let windows = window.document.location;\r\n        let curWwwPath = windows.href;\r\n        let pathName = windows.pathname;\r\n        let pos = curWwwPath.indexOf(pathName);\r\n        let localhostPaht = curWwwPath.substring(0, pos);\r\n        let projectName = pathName.substring(0, pathName.substr(1).indexOf(\"/\") + 1);\r\n        return localhostPaht + projectName;\r\n    }\r\n    getWindowtPath() {\r\n        let windows = window.document.location;\r\n        let curWwwPath = windows.href;\r\n        let pathName = windows.pathname;\r\n        let pos = curWwwPath.indexOf(pathName);\r\n        let localhostPaht = curWwwPath.substring(0, pos);\r\n        return localhostPaht;\r\n    }\r\n    getUrlParams() {\r\n        let url = decodeURI(location.search);\r\n        let theRequest;\r\n        if (url.indexOf(\"?\") != -1) {\r\n            let str = url.substr(1);\r\n            let strs = str.split(\"&\");\r\n            for (let i = 0; i < strs.length; i++) {\r\n                theRequest[strs[i].split(\"=\")[0]] = decodeURI(strs[i].split(\"=\")[1]);\r\n            }\r\n        }\r\n        return theRequest;\r\n    }\r\n    getCookie(cookiename) {\r\n        var arrone = document.cookie.split(\";\");\r\n        for (let i = 0; i < arrone.length; i++) {\r\n            var arrtwo = arrone[i].split(\"=\");\r\n            if (arrtwo[0] == cookiename) {\r\n                return arrtwo[1];\r\n            }\r\n        }\r\n        return \"0\";\r\n    }\r\n}\r\nexports.default = Browser;\r\n\n\n//# sourceURL=webpack://ToolHelp/./src/baseclass/https/browser.ts?");

/***/ }),

/***/ "./src/baseclass/https/index.ts":
/*!**************************************!*\
  !*** ./src/baseclass/https/index.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst webapi_1 = __webpack_require__(/*! ./webapi */ \"./src/baseclass/https/webapi.ts\");\r\nexports.WebApi = webapi_1.default;\r\nconst browser_1 = __webpack_require__(/*! ./browser */ \"./src/baseclass/https/browser.ts\");\r\nexports.Browser = browser_1.default;\r\n\n\n//# sourceURL=webpack://ToolHelp/./src/baseclass/https/index.ts?");

/***/ }),

/***/ "./src/baseclass/https/webapi.ts":
/*!***************************************!*\
  !*** ./src/baseclass/https/webapi.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nclass WebApi {\r\n}\r\nWebApi.frontServePath = \"http://localhost:8080\";\r\nWebApi.fileServePath = \"http://localhost/myupfile\";\r\nWebApi.backstagePath = \"http://localhost/dream\";\r\nexports.default = WebApi;\r\n\n\n//# sourceURL=webpack://ToolHelp/./src/baseclass/https/webapi.ts?");

/***/ }),

/***/ "./src/baseclass/json/index.ts":
/*!*************************************!*\
  !*** ./src/baseclass/json/index.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst parentchild_1 = __webpack_require__(/*! ./parentchild */ \"./src/baseclass/json/parentchild.ts\");\r\nexports.ParentChild = parentchild_1.default;\r\nconst searchjson_1 = __webpack_require__(/*! ./searchjson */ \"./src/baseclass/json/searchjson.ts\");\r\nexports.SearchJson = searchjson_1.default;\r\n\n\n//# sourceURL=webpack://ToolHelp/./src/baseclass/json/index.ts?");

/***/ }),

/***/ "./src/baseclass/json/parentchild.ts":
/*!*******************************************!*\
  !*** ./src/baseclass/json/parentchild.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nclass ParentChild {\r\n    getParentOfChilds(menulist, menuid) {\r\n        let menus = menulist.filter(n => n.id == menuid);\r\n        if (menus.length == 0) {\r\n            return \"没有父节点\";\r\n        }\r\n        if (menus.length > 1) {\r\n            return \"多个父节点\";\r\n        }\r\n        for (var i = 0; i < menus.length; i++) {\r\n            this.getChilds(menulist, menus[i]);\r\n        }\r\n        let menu = menulist.filter(n => n.id == menuid)[0];\r\n        return menu;\r\n    }\r\n    getParentsOfChilds(menulist, parentId) {\r\n        let menus = menulist.filter(n => n.parentId == parentId);\r\n        if (menus.length == 0) {\r\n            return \"没有父节点\";\r\n        }\r\n        for (var i = 0; i < menus.length; i++) {\r\n            this.getChilds(menulist, menus[i]);\r\n        }\r\n        let menu = menulist.filter(n => n.parentId == parentId);\r\n        return menu;\r\n    }\r\n    getChilds(menulist, menu) {\r\n        if (menulist.length > 0) {\r\n            let menus = menulist.filter(n => n.parentId == menu.id);\r\n            if (menus.length > 0) {\r\n                menu.children = menus;\r\n                for (let i = 0; i < menus.length; i++) {\r\n                    this.getChilds(menulist, menus[i]);\r\n                }\r\n            }\r\n        }\r\n    }\r\n}\r\nexports.default = ParentChild;\r\n\n\n//# sourceURL=webpack://ToolHelp/./src/baseclass/json/parentchild.ts?");

/***/ }),

/***/ "./src/baseclass/json/searchjson.ts":
/*!******************************************!*\
  !*** ./src/baseclass/json/searchjson.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nclass SearchJson {\r\n    getParameterObject(sql, json) {\r\n        let returnfields = sql.match(/^(select)\\s+([a-z0-9_\\,\\.\\s\\*]+)\\s+from\\s+([a-z0-9_\\.]+)(?: where\\s+\\((.+)\\))?\\s*(?:order\\sby\\s+([a-z0-9_\\,]+))?\\s*(asc|desc|ascnum|descnum)?\\s*(?:limit\\s+([0-9_\\,]+))?/i);\r\n        let ops = {\r\n            fields: returnfields[2].replace(\" \", \"\").split(\",\"),\r\n            from: returnfields[3].replace(\" \", \"\"),\r\n            where: returnfields[4] == undefined ? \"true\" : returnfields[4],\r\n            orderby: returnfields[5] == undefined\r\n                ? []\r\n                : returnfields[5].replace(\" \", \"\").split(\",\"),\r\n            order: returnfields[6] == undefined ? \"asc\" : returnfields[6],\r\n            limit: returnfields[7] == undefined\r\n                ? []\r\n                : returnfields[7].replace(\" \", \"\").split(\",\")\r\n        };\r\n        return this.returnParse(json, ops);\r\n    }\r\n    returnParse(json, ops) {\r\n        let o = {\r\n            fields: [\"*\"],\r\n            from: \"json\",\r\n            where: \"\",\r\n            orderby: [],\r\n            order: \"asc\",\r\n            limit: []\r\n        };\r\n        for (let i in ops) {\r\n            o[i] = ops[i];\r\n        }\r\n        let result = [];\r\n        result = this.returnFilter(json, o);\r\n        result = this.returnOrderBy(result, o.orderby, o.order);\r\n        result = this.returnLimit(result, o.limit);\r\n        return result;\r\n    }\r\n    returnFilter(json, jsonsql_o) {\r\n        let jsonsql_scope = ([] = eval(jsonsql_o.from));\r\n        let jsonsql_result = [];\r\n        let jsonsql_rc = 0;\r\n        if (jsonsql_o.where == \"\") {\r\n            jsonsql_o.where = \"true\";\r\n        }\r\n        for (var i = 0; i < jsonsql_scope.length; i++) {\r\n            let test = jsonsql_scope[i];\r\n            demo(test);\r\n        }\r\n        function demo(info) {\r\n            let where = jsonsql_o.where;\r\n            let numberlike = where.match(/like/g);\r\n            if (numberlike != null) {\r\n                if (where.indexOf(\"||\") >= 0 || where.indexOf(\"&&\") >= 0) {\r\n                }\r\n                else {\r\n                    if (numberlike.length == 1) {\r\n                        let condition = where.replace(/info\\./, \"\");\r\n                        let shuzu = condition.split(\" \");\r\n                        let shuxing = shuzu[0];\r\n                        let zhi = shuzu[2];\r\n                        if (info[shuxing].indexOf(zhi) >= 0) {\r\n                            jsonsql_result[jsonsql_rc++] = SearchJson.returnFields(info, jsonsql_o.fields);\r\n                        }\r\n                    }\r\n                    else {\r\n                    }\r\n                }\r\n            }\r\n            else {\r\n                if (eval(jsonsql_o.where)) {\r\n                    jsonsql_result[jsonsql_rc++] = SearchJson.returnFields(info, jsonsql_o.fields);\r\n                }\r\n            }\r\n        }\r\n        return jsonsql_result;\r\n    }\r\n    static returnFields(scope, fields) {\r\n        if (fields.length == 0)\r\n            fields = [\"*\"];\r\n        if (fields[0] == \"*\")\r\n            return scope;\r\n        let returnobj = {};\r\n        for (let i in fields) {\r\n            returnobj[fields[i]] = scope[fields[i]];\r\n        }\r\n        return returnobj;\r\n    }\r\n    returnOrderBy(result, orderby, order) {\r\n        if (orderby.length == 0) {\r\n            return result;\r\n        }\r\n        result.sort(function (a, b) {\r\n            switch (order.toLowerCase()) {\r\n                case \"desc\":\r\n                    return eval(\"a.\" + orderby[0] + \" < b.\" + orderby[0]) ? 1 : -1;\r\n                case \"asc\":\r\n                    return eval(\"a.\" + orderby[0] + \" > b.\" + orderby[0]) ? 1 : -1;\r\n                case \"descnum\":\r\n                    return eval(\"a.\" + orderby[0] + \" - b.\" + orderby[0]);\r\n                case \"ascnum\":\r\n                    return eval(\"b.\" + orderby[0] + \" - a.\" + orderby[0]);\r\n            }\r\n        });\r\n        return result;\r\n    }\r\n    returnLimit(result, limit) {\r\n        switch (limit.length) {\r\n            case 0:\r\n                return result;\r\n            case 1:\r\n                return result.splice(0, limit[0]);\r\n            case 2:\r\n                return result.splice(limit[0] - 1, limit[1]);\r\n        }\r\n    }\r\n}\r\nexports.default = SearchJson;\r\n\n\n//# sourceURL=webpack://ToolHelp/./src/baseclass/json/searchjson.ts?");

/***/ }),

/***/ "./src/baseclass/time/format.ts":
/*!**************************************!*\
  !*** ./src/baseclass/time/format.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nclass Format {\r\n    formattime(date) {\r\n        let format = \"\";\r\n        let o = {\r\n            \"M+\": date.getMonth() + 1,\r\n            \"d+\": date.getDate(),\r\n            \"h+\": date.getHours(),\r\n            \"m+\": date.getMinutes(),\r\n            \"s+\": date.getSeconds(),\r\n            \"q+\": Math.floor((date.getMonth() + 3) / 3),\r\n            S: date.getMilliseconds()\r\n        };\r\n        if (/(y+)/.test(format))\r\n            format = format.replace(RegExp.$1, (date.getFullYear() + \"\").substr(4 - RegExp.$1.length));\r\n        for (var k in o) {\r\n            if (new RegExp(\"(\" + k + \")\").test(format))\r\n                format = format.replace(RegExp.$1, RegExp.$1.length == 1\r\n                    ? o[k]\r\n                    : (\"00\" + o[k]).substr((\"\" + o[k]).length));\r\n        }\r\n        return format;\r\n    }\r\n}\r\nexports.default = Format;\r\n\n\n//# sourceURL=webpack://ToolHelp/./src/baseclass/time/format.ts?");

/***/ }),

/***/ "./src/baseclass/time/index.ts":
/*!*************************************!*\
  !*** ./src/baseclass/time/index.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst format_1 = __webpack_require__(/*! ./format */ \"./src/baseclass/time/format.ts\");\r\nexports.Format = format_1.default;\r\n\n\n//# sourceURL=webpack://ToolHelp/./src/baseclass/time/index.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst fileshelp = __webpack_require__(/*! @/baseclass/files/index */ \"./src/baseclass/files/index.ts\");\r\nconst jsonhelp = __webpack_require__(/*! @/baseclass/json/index */ \"./src/baseclass/json/index.ts\");\r\nconst timehelp = __webpack_require__(/*! @/baseclass/time/index */ \"./src/baseclass/time/index.ts\");\r\nconst httpshelp = __webpack_require__(/*! @/baseclass/https/index */ \"./src/baseclass/https/index.ts\");\r\nclass ToolHelp {\r\n    constructor() {\r\n        this.files = fileshelp;\r\n        this.json = jsonhelp;\r\n        this.time = timehelp;\r\n        this.https = httpshelp;\r\n    }\r\n}\r\nexports.default = ToolHelp;\r\n\n\n//# sourceURL=webpack://ToolHelp/./src/index.ts?");

/***/ })

/******/ })["default"];