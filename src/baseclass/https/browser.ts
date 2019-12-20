/**获取配置信息等 */
class Browser {
  /**
   * 获取flash版本
   */
  public getFlashVersion(): number {
    let version;

    try {
      version = navigator.plugins["Shockwave Flash"];
      version = version.description;
    } catch (ex) {
      try {
        version = new ActiveXObject(
          "ShockwaveFlash.ShockwaveFlash"
        ).GetVariable("$version");
      } catch (ex2) {
        version = "0.0";
      }
    }
    version = version.match(/\d+/g);
    return parseFloat(version[0] + "." + version[1]);
  }
  /**
   * 获取IE版本
   */
  public getIEVersion(): number {
    let userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
    let isIE =
      userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1; //判断是否IE<11浏览器
    let isEdge = userAgent.indexOf("Edge") > -1 && !isIE; //判断是否IE的Edge浏览器
    let isIE11 =
      userAgent.indexOf("Trident") > -1 && userAgent.indexOf("rv:11.0") > -1;
    if (isIE) {
      let reIE = new RegExp("MSIE (\\d+\\.\\d+);");
      reIE.test(userAgent);
      let fIEVersion = parseFloat(RegExp["$1"]);
      if (fIEVersion == 7) {
        return 7;
      } else if (fIEVersion == 8) {
        return 8;
      } else if (fIEVersion == 9) {
        return 9;
      } else if (fIEVersion == 10) {
        return 10;
      } else {
        return 6; //IE版本<=7
      }
    } else if (isEdge) {
      return 0; //ie的edge浏览器
    } else if (isIE11) {
      return 11; //IE11
    } else {
      return -1; //不是ie浏览器
    }
  }

  /**
   * 判断浏览器是否支持图片的base64
   */
  public isSupportBase64: () => {} = function(): boolean {
    let data = new Image();
    let support = true;
    data.onload = data.onerror = function() {
      if (data.width != 1 || data.height != 1) {
        support = false;
      }
    };
    data.src =
      "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
    return support;
  };

  /**
   * 获取网址路径(含第一个文件目录)
   */
  public getDocumentPath(): string {
    let windows: Location = window.document.location as Location;
    let curWwwPath = windows.href;
    let pathName = windows.pathname;
    let pos = curWwwPath.indexOf(pathName);
    let localhostPaht = curWwwPath.substring(0, pos);
    let projectName = pathName.substring(
      0,
      pathName.substr(1).indexOf("/") + 1
    );
    return localhostPaht + projectName;
  }
  /**
   * 获取网址路径(ip+端口号)
   */
  public getWindowtPath(): string {
    let windows: Location = window.document.location as Location;
    let curWwwPath: string = windows.href;
    let pathName = windows.pathname;
    let pos = curWwwPath.indexOf(pathName);
    let localhostPaht = curWwwPath.substring(0, pos);
    return localhostPaht;
  }

  /**
   * 获取url参数部分
   */
  public getUrlParams(): { [x: string]: string } {
    let url = decodeURI(location.search); //获取url中"?"符后的字串
    let theRequest;
    if (url.indexOf("?") != -1) {
      let str = url.substr(1);
      let strs = str.split("&");
      for (let i = 0; i < strs.length; i++) {
        theRequest[strs[i].split("=")[0]] = decodeURI(strs[i].split("=")[1]);
      }
    }
    return theRequest;
  }
  /**
   * 获取对应cookie值
   * @param cookiename cookie键名称
   */
  public getCookie(cookiename: string) {
    var arrone = document.cookie.split(";");
    for (let i = 0; i < arrone.length; i++) {
      var arrtwo = arrone[i].split("=");
      if (arrtwo[0] == cookiename) {
        return arrtwo[1];
      }
    }
    //否则返回0:没有找到对应的cookie
    return "0";
  }
}
export default Browser;
