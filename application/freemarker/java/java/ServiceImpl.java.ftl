package ${allPackage}.service.impl;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ${allPackage}.mapper.${className}Mapper;
import ${allPackage}.domain.${className};
import ${allPackage}.service.I${className}Service;

/**
 * ${classDescribe} 服务层实现
 *
 * @author ${author}
 * @date ${(creatDate?string("yyyy-MM-dd HH:mm:ss"))!}
 */
@Service
public class ${className}ServiceImpl implements I${className}Service {
	@Autowired
	private ${className}Mapper ${classname}Mapper;

	/**
     * 查询${classDescribe}信息
     *
     * @param ${primaryKey.attrname} ${classDescribe}ID
     * @return ${classDescribe}信息
     */
    @Override
	public ${className} select${className}ById(${primaryKey.attrType} ${primaryKey.attrname}) {
	    return ${classname}Mapper.select${className}ById(${primaryKey.attrname});
	}

	/**
     * 查询${classDescribe}列表
     *
     * @param ${classname} ${classDescribe}信息
     * @return ${classDescribe}集合
     */
	@Override
	public List<${className}> select${className}List(${className} ${classname}) {
	    return ${classname}Mapper.select${className}List(${classname});
	}

    /**
     * 新增${classDescribe}
     *
     * @param ${classname} ${classDescribe}信息
     * @return 结果
     */
	@Override
	public int insert${className}(${className} ${classname}) {
	    return ${classname}Mapper.insert${className}(${classname});
	}

	/**
     * 修改${classDescribe}
     *
     * @param ${classname} ${classDescribe}信息
     * @return 结果
     */
	@Override
	public int update${className}(${className} ${classname}) {
	    return ${classname}Mapper.update${className}(${classname});
	}

	/**
     * 删除${classDescribe}对象
     *
     * @param ids 需要删除的数据ID
     * @return 结果
     */
	@Override
	public int delete${className}ByIds(String ids) {
		return ${classname}Mapper.delete${className}ByIds(Convert.toStrArray(ids));
	}

}
