/**
 *注意：接口参数，必要参数在上面，剩余参数在下面！！！！！！
 *图片预览配置
 */
interface IPreviewOption {
  /**
   *图片信息
   */
  file?: any;
  /**
   *图片宽度，与指定百分比只能存在一个
   */
  width?: number;
  /**
   *图片高度，与指定百分比只能存在一个
   */
  height?: number;
  /**
   *图片缩略百分比0-1之间，与指定宽高只能存在一个
   */
  scaling?: number;
  /**
   *成功返回的回调函数 参数：图片url编码
   */
  success?: (...parameters: any[]) => {};
  /**
   *失败返回的回调函数
   */
  error?: (...parameters: any[]) => {};
}

/**图片预览配置 */
export type PreviewOption = IPreviewOption;
