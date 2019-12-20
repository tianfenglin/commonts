package ${allPackage}.controller;

import java.util.List;
import org.apache.shiro.authz.annotation.RequiresPermissions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import ${allPackage}.domain.${className};
import ${allPackage}.service.I${className}Service;

/**
 * ${classDescribe} 信息操作处理
 *
 * @author ${author}
 * @date ${(creatDate?string("yyyy-MM-dd HH:mm:ss"))!}
 */
@Controller
@RequestMapping("/${moduleName}/${classname}")
public class ${className}Controller extends BaseController {
    private String prefix = "${moduleName}/${classname}";

	@Autowired
	private I${className}Service ${classname}Service;

	/**
	 * 查询${classDescribe}列表
	 */
	@PostMapping("/list")
	@ResponseBody
	public TableDataInfo list(${className} ${classname}){
		startPage();
        List<${className}> list = ${classname}Service.select${className}List(${classname});
		return getDataTable(list);
	}

	/**
	 * 新增保存${classDescribe}
	 */
	@PostMapping("/add")
	@ResponseBody
	public AjaxResult addSave(${className} ${classname}){
		return toAjax(${classname}Service.insert${className}(${classname}));
	}

	/**
	 * 修改保存${classDescribe}
	 */
	@PostMapping("/edit")
	@ResponseBody
	public AjaxResult editSave(${className} ${classname}){
		return toAjax(${classname}Service.update${className}(${classname}));
	}

	/**
	 * 删除${classDescribe}
	 */
	@PostMapping( "/remove")
	@ResponseBody
	public AjaxResult remove(String ids){
		return toAjax(${classname}Service.delete${className}ByIds(ids));
	}

}
