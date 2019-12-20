<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE mapper
PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"
"http://mybatis.org/dtd/mybatis-3-mapper.dtd">
<mapper namespace="${allPackage}.mapper.${className}Mapper">
    
    <resultMap type="${className}" id="${className}Result">
<#list properties as property>
        <result property="${property.attrname}"  column="${property.columnName}"/>
</#list>
    </resultMap>
	
	<sql id="select${className}Vo">
        select <#list properties as property>${property.columnName}<#if (properties?size-1) != property_index>,</#if></#list> from ${tableName}
    </sql>
	
    <select id="select${className}List" parameterType="${className}" resultMap="${className}Result">
        <include refid="select${className}Vo"/>
        <where>  
<#list properties as property>
            <if test="${property.attrname} != null <#if property.attrType == 'String'> and ${property.attrname}.trim() != ''</#if>"> and ${property.columnName} = <#noparse>#{</#noparse>${property.attrname}}</if>
</#list>
        </where>
    </select>
    
    <select id="select${className}ById" parameterType="${primaryKey.attrType}" resultMap="${className}Result">
        <include refid="select${className}Vo"/>
        where ${primaryKey.columnName} = <#noparse>#{</#noparse>${primaryKey.attrname}}
    </select>
        
    <insert id="insert${className}" parameterType="${className}">
        insert into ${tableName}
		<trim prefix="(" suffix=")" suffixOverrides=",">
<#list properties as property>
<#if property.columnName != primaryKey.columnName>
			<if test="${property.attrname} != null <#if property.attrType == 'String'> and ${property.attrname} != ''</#if>">${property.columnName},</if>
</#if>
</#list>
         </trim>
        <trim prefix="values (" suffix=")" suffixOverrides=",">
<#list properties as property>
<#if property.columnName != primaryKey.columnName>
			<if test="${property.attrname} != null <#if property.attrType == 'String'> and ${property.attrname} != ''</#if>"><#noparse>#{</#noparse>${property.attrname}},</if>
</#if>			
</#list>
         </trim>
    </insert>
	 
    <update id="update${className}" parameterType="${className}">
        update ${tableName}
        <trim prefix="SET" suffixOverrides=",">
<#list properties as property>
<#if property.columnName != primaryKey.columnName>
            <if test="${property.attrname} != null <#if property.attrType == 'String'> and ${property.attrname} != ''</#if>">${property.columnName} = <#noparse>#{</#noparse>${property.attrname}},</if>
</#if>	
</#list>
        </trim>
        where ${primaryKey.columnName} = <#noparse>#{</#noparse>${primaryKey.attrname}}
    </update>

	<delete id="delete${className}ById" parameterType="${primaryKey.attrType}">
        delete from ${tableName} where ${primaryKey.columnName} = <#noparse>#{</#noparse>${primaryKey.attrname}}
    </delete>
	
    <delete id="delete${className}ByIds" parameterType="String">
        delete from ${tableName} where ${primaryKey.columnName} in 
        <foreach item="${primaryKey.attrname}" collection="array" open="(" separator="," close=")">
            <#noparse>#{</#noparse>${primaryKey.attrname}}
        </foreach>
    </delete>
    
</mapper>