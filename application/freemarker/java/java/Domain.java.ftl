package ${allPackage}.domain;

/**
 * ${classDescribe}表 ${className}
 *
 * @author ${author}
 * @date ${(creatDate?string("yyyy-MM-dd HH:mm:ss"))!}
*/
public class ${className} {
	private static final long serialVersionUID = 1L;

<#list properties as property>
	/** ${property.attrDescribe}*/
	private ${property.attrType} ${property.attrname};
</#list>


<#list properties as property>
    /** ${property.attrDescribe}*/
	public void set${property.attrName}(${property.attrType} ${property.attrname}){
		this.${property.attrname} = ${property.attrname};
	}
    /** ${property.attrDescribe}*/
	public ${property.attrType} get${property.attrName}(){
		return ${property.attrname};
	}

</#list>

    public String toString() {
        return new ToStringBuilder(this,ToStringStyle.MULTI_LINE_STYLE)
<#list properties as property>
            .append("${property.attrname}", get${property.attrName}())
</#list>
            .toString();
    }
}
