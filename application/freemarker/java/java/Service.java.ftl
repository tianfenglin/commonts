package ${allPackage}.service;

import ${allPackage}.domain.${className};
import java.util.List;

/**
 * ${classDescribe} 服务层
 *
 * @author ${author}
 * @date ${(creatDate?string("yyyy-MM-dd HH:mm:ss"))!}
 */
public interface I${className}Service {
	/**
     * 查询${classDescribe}信息
     *
     * @param ${primaryKey.attrname} ${classDescribe}ID
     * @return ${classDescribe}信息
     */
	${className} select${className}ById(${primaryKey.attrType} ${primaryKey.attrname});

	/**
     * 查询${classDescribe}列表
     *
     * @param ${classname} ${classDescribe}信息
     * @return ${classDescribe}集合
     */
    List<${className}> select${className}List(${className} ${classname});

	/**
     * 新增${classDescribe}
     *
     * @param ${classname} ${classDescribe}信息
     * @return 结果
     */
    int insert${className}(${className} ${classname});

	/**
     * 修改${classDescribe}
     *
     * @param ${classname} ${classDescribe}信息
     * @return 结果
     */
    int update${className}(${className} ${classname});

	/**
     * 删除${classDescribe}信息
     *
     * @param ids 需要删除的数据ID
     * @return 结果
     */
    int delete${className}ByIds(String ids);

}
