/**搜索json数据 */
class SearchJson {
  /**
   * js根据条件获取json数据 格式：select * from json where (info.参数 like/== "")
   * @param sql
   * @param json
   */
  //----------------------------------------start---------------------------------------------
  public getParameterObject(sql: string, json: object): object {
    let returnfields: any = sql.match(
      /^(select)\s+([a-z0-9_\,\.\s\*]+)\s+from\s+([a-z0-9_\.]+)(?: where\s+\((.+)\))?\s*(?:order\sby\s+([a-z0-9_\,]+))?\s*(asc|desc|ascnum|descnum)?\s*(?:limit\s+([0-9_\,]+))?/i
    );

    let ops = {
      fields: returnfields[2].replace(" ", "").split(","),
      from: returnfields[3].replace(" ", ""),
      where: returnfields[4] == undefined ? "true" : returnfields[4],
      orderby:
        returnfields[5] == undefined
          ? []
          : returnfields[5].replace(" ", "").split(","),
      order: returnfields[6] == undefined ? "asc" : returnfields[6],
      limit:
        returnfields[7] == undefined
          ? []
          : returnfields[7].replace(" ", "").split(",")
    };
    return this.returnParse(json, ops);
  }

  public returnParse(json, ops) {
    let o = {
      fields: ["*"],
      from: "json",
      where: "",
      orderby: [],
      order: "asc",
      limit: []
    };
    for (let i in ops) {
      o[i] = ops[i];
    }

    let result: any = [];
    result = this.returnFilter(json, o);
    result = this.returnOrderBy(result, o.orderby, o.order);
    result = this.returnLimit(result, o.limit);

    return result;
  }

  public returnFilter(json, jsonsql_o) {
    let jsonsql_scope: Array<any> = ([] = eval(jsonsql_o.from));
    let jsonsql_result: Array<any> = [];
    let jsonsql_rc = 0;

    if (jsonsql_o.where == "") {
      jsonsql_o.where = "true";
    }
    for (var i = 0; i < jsonsql_scope.length; i++) {
      let test: object = jsonsql_scope[i];
      demo(test);
    }
    function demo(info: object) {
      let where: string = jsonsql_o.where;
      let numberlike: Array<any> | null = where.match(/like/g);
      if (numberlike != null) {
        //如果包含like

        if (where.indexOf("||") >= 0 || where.indexOf("&&") >= 0) {
          //如果进行多条件搜索
        } else {
          if (numberlike.length == 1) {
            //只有一个like
            let condition = where.replace(/info\./, "");
            let shuzu = condition.split(" ");
            let shuxing: string = shuzu[0];
            let zhi: string = shuzu[2];
            if (info[shuxing].indexOf(zhi) >= 0) {
              jsonsql_result[jsonsql_rc++] = SearchJson.returnFields(
                info,
                jsonsql_o.fields
              );
            }
          } else {
            //多个like
          }
        }
      } else {
        //不包含like的查询语句
        // let condition = jsonsql_o.where.replace(/\s+/g, "").replace(/info\./, "").replace(/\'/g, "")
        // let shuzu = condition.split('==');
        // console.log(shuzu);
        if (eval(jsonsql_o.where)) {
          jsonsql_result[jsonsql_rc++] = SearchJson.returnFields(
            info,
            jsonsql_o.fields
          );
        }
      }
    }
    return jsonsql_result;
  }

  public static returnFields(scope, fields) {
    if (fields.length == 0) fields = ["*"];

    if (fields[0] == "*") return scope;

    let returnobj = {};
    for (let i in fields) {
      returnobj[fields[i]] = scope[fields[i]];
    }

    return returnobj;
  }

  public returnOrderBy(result, orderby, order) {
    if (orderby.length == 0) {
      return result;
    }

    result.sort(function(a, b) {
      switch (order.toLowerCase()) {
        case "desc":
          return eval("a." + orderby[0] + " < b." + orderby[0]) ? 1 : -1;
        case "asc":
          return eval("a." + orderby[0] + " > b." + orderby[0]) ? 1 : -1;
        case "descnum":
          return eval("a." + orderby[0] + " - b." + orderby[0]);
        case "ascnum":
          return eval("b." + orderby[0] + " - a." + orderby[0]);
      }
    });

    return result;
  }

  public returnLimit(result, limit) {
    switch (limit.length) {
      case 0:
        return result;
      case 1:
        return result.splice(0, limit[0]);
      case 2:
        return result.splice(limit[0] - 1, limit[1]);
    }
  }

  //--------------------------------end------------------------------------------
}
export default SearchJson;
