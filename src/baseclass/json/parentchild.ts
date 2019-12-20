import { IParentChild } from "@/interface/json/parentchild";
/**菜单帮助 */
class ParentChild {
  /**
   * 获取节点下所有子节点,只有允许有一个父节点
   * @param menulist 父子节点对象
   * @param menuid 父节点id
   */
  public getParentOfChilds(
    menulist: Array<IParentChild>,
    menuid: string
  ): IParentChild | string {
    //查找是否有首菜单
    let menus: Array<IParentChild> = menulist.filter(n => n.id == menuid);
    //没有首菜单
    if (menus.length == 0) {
      return "没有父节点";
    }

    //有多个首菜单
    if (menus.length > 1) {
      return "多个父节点";
    }
    for (var i = 0; i < menus.length; i++) {
      this.getChilds(menulist, menus[i]);
    }
    let menu: IParentChild = menulist.filter(n => n.id == menuid)[0];
    return menu;
  }
  /**
   * 获取父节点为**的节点下所有子节点,可以多个节点
   * @param menulist 菜单集合
   * @param parentId 父节点id
   */
  public getParentsOfChilds(
    menulist: Array<IParentChild>,
    parentId: string
  ): Array<IParentChild> | string {
    //查找是否有父节点
    let menus: Array<IParentChild> = menulist.filter(
      n => n.parentId == parentId
    );
    //没有首菜单
    if (menus.length == 0) {
      return "没有父节点";
    }
    for (var i = 0; i < menus.length; i++) {
      this.getChilds(menulist, menus[i]);
    }
    let menu: Array<IParentChild> = menulist.filter(
      n => n.parentId == parentId
    );
    return menu;
  }
  /**
   * 获取子节点
   * @param menulist
   * @param menu
   */
  public getChilds(menulist: Array<IParentChild>, menu: IParentChild) {
    if (menulist.length > 0) {
      let menus: Array<IParentChild> = menulist.filter(
        n => n.parentId == menu.id
      );
      if (menus.length > 0) {
        menu.children = menus;
        for (let i = 0; i < menus.length; i++) {
          this.getChilds(menulist, menus[i]);
        }
      }
    }
  }
}

export default ParentChild;
