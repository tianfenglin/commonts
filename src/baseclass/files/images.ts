import { PreviewOption } from "@/interface/files/images";
class Images {
  /**
   * 预览图片
   * @param option
   */
  public getBase64Image(option: PreviewOption): void {
    try {
      let reader = new FileReader();
      reader.readAsDataURL(option.file);
      reader.onload = function(e: any) {
        let url = e.target.result;
        let image = new Image();
        image.src = url;
        image.onload = function() {
          let canvas = document.createElement("canvas");
          if (
            option.scaling != null &&
            option.scaling > 0 &&
            option.scaling < 1
          ) {
            image.width = image.width * option.scaling;
            image.height = image.height * option.scaling;
          }
          if (option.width != null) {
            image.width = option.width;
          }
          if (option.height != null) {
            image.height = option.height;
          }
          canvas.width = image.width;
          canvas.height = image.height;
          let ctx: any = canvas.getContext("2d");
          ctx.drawImage(image, 0, 0, image.width, image.height);
          let ext = image.src
            .substring(image.src.lastIndexOf(".") + 1)
            .toLowerCase();
          let dataURL = canvas.toDataURL("image/" + ext);
          if (option.success != null) {
            option.success(dataURL);
          }
        };
      };
    } catch (e) {
      if (option.error != null) {
        option.error(e);
      }
    }
  }
}
export default Images;
