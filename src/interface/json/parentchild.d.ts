/**菜单参数类型 */
interface IParentChildJson {
  /**菜单编号 */
  id: string;
  /**菜单父节点 */
  parentId: string;
  /**菜单子数据 */
  children?: Array<IParentChild>;
}
export type IParentChild = IParentChildJson;
