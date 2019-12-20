///<reference types="spark-md5" />
///<reference types="qs" />
import axios from "@/baseclass/https/axiosapi";
/**返回结果封装 */
class UpFileResult {
  status: boolean = true;
  data: any;
}
/**上传文件封装 */
class UpFiles {
  /**切片大小 */
  public max = 5 * 1024 * 1024;
  /**上传路径 */
  public url;
  /**合并方法地址 */
  public urlMerge;
  /**校验是否断点续传地址 */
  public urlDetMd5;
  /**校验分片是否完整地址 */
  public urlDetBin;
  /**文件附件 */
  public file;
  /**md5值 */
  public md5;
  /**续传标识 */
  public continue = false;
  /**额外参数 */
  public param = {
    filepath: "",
    fileMd5: "",
    chunk: "0",
    chunks: "1",
    chunkSize: this.max.toString()
  };
  /**记录切片数据集合 */
  public slicesRecord: any[] = [];
  /**切片同时最大上传数量 默认3 */
  public upnumbermax = 3;
  /**记录已经上传或正在上传的索引*/
  public upnumberRecord: any[] = [];

  /**允许上传 */
  public isUpLoad = true;
  /**进度条控制方法 */
  public progressBar?: Function;
  /**文件上传控制器 */
  public async ControlFlow() {
    let result = new UpFileResult();
    //先等待MD5获取完成
    await this.GetFileMd5();
    console.log(this.md5);
    //获取切片封装
    this.FileSlices();
    //校验是否续传以及校验切片完整性
    await this.DetectionMd5();
    //等待分片全部上传完成
    await this.UpBinaryFiles();
    //等待分片合并完成
    if (this.isUpLoad) {
      result = await this.MergeBinary();
    } else {
      result.data = "已暂停上传";
      result.status = false;
    }
    return result;
  }
  /**
   * 手动暂停的断点续传
   */
  public async ContinueUpLoad() {
    let result = new UpFileResult();
    //等待分片全部上传完成
    await this.UpBinaryFiles();
    //等待分片合并完成
    if (this.isUpLoad) {
      result = await this.MergeBinary();
    } else {
      result.data = "已暂停上传";
      result.status = false;
    }
    return result;
  }
  /**
   * 文件切片封装
   */
  public FileSlices(): any[] {
    /**文件大小 */
    let filesize = this.file.size;
    /**切片数量进一取整 */
    let count = Math.ceil(filesize / this.max);
    let fileslice: any[] = [];
    let start = 0;
    let end;
    //配置每个切片的初始值信息
    for (let i = 1; i <= count; i++) {
      if (i == count) {
        end = filesize;
      } else {
        end = start + this.max;
      }
      let json = {
        index: i,
        start: start,
        end: end,
        isok: false
      };
      fileslice.push(json);
      start = end;
    }
    //记录切片信息集合
    this.slicesRecord = fileslice;
    //赋值切片总数量
    this.param.chunks = count.toString();
    //如果切片数量小于设置的最大上传数量，则以切片数量为准
    if (count < this.upnumbermax) {
      this.upnumbermax = count;
    }
    console.log(fileslice);
    return fileslice;
  }
  /** 获取文件MD5值 */
  public GetFileMd5(): Promise<void> {
    let blobSlice = File.prototype.slice;
    let chunkSize = 2097152;
    let chunks = Math.ceil(this.file.size / chunkSize);
    let currentChunk = 0;
    let spark = new SparkMD5.ArrayBuffer();
    let fileReader = new FileReader();
    let result = new Promise<void>((reslove, reject) => {
      fileReader.onload = (e: any) => {
        spark.append(e.target.result);
        currentChunk++;
        if (currentChunk < chunks) {
          loadNext();
        } else {
          //读取完成赋值MD5
          this.md5 = spark.end();
          this.param.fileMd5 = this.md5;
          reslove();
        }
      };
      fileReader.onerror = () => {
        reject("错误");
      };
    });
    //分块读取文件信息
    let loadNext = () => {
      let start = currentChunk * chunkSize;
      let end =
        start + chunkSize >= this.file.size
          ? this.file.size
          : start + chunkSize;
      fileReader.readAsArrayBuffer(blobSlice.call(this.file, start, end));
    };
    loadNext();
    return result;
  }
  /** 校验是否存在MD5文件夹，是否断点续传 */
  public async DetectionMd5(): Promise<void> {
    let _this = this;
    let result = await new Promise<boolean>((reslove, reject) => {
      let axiosconfig = {
        url: this.urlDetMd5,
        method: "post",
        data: qs.stringify({ md5: this.md5 })
      };
      axios(axiosconfig)
        .then(function(response) {
          if (response.data.msg == "1") {
            reslove(true);
          } else {
            reslove(false);
          }
        })
        .catch(function(error) {
          console.log(error);
          reject(false);
        });
    });
    //如果存在则校验切片完整性
    if (result) {
      await this.DetectionBinary();
    }
  }
  /** 校验切片完整性 */
  public DetectionBinary(): Promise<void> {
    let _this = this;
    let result = new Promise<void>((reslove, reject) => {
      for (let i = 0; i < this.slicesRecord.length; i++) {
        this.param.chunk = (i + 1).toString();
        if (i == this.slicesRecord.length - 1) {
          this.param.chunkSize = (
            this.slicesRecord[i].end - this.slicesRecord[i].start
          ).toString();
        }
        let axiosconfig = {
          url: this.urlDetBin,
          method: "post",
          data: qs.stringify(this.param)
        };
        axios(axiosconfig)
          .then(function(response) {
            if (response.data.msg == "1") {
              _this.slicesRecord[i].isok = true;
            }
            if (i == _this.slicesRecord.length - 1) {
              reslove();
            }
          })
          .catch(function(error) {
            console.log(error);
            reject();
          });
      }
    });
    return result;
  }
  /**
   * 开始上传文件
   * @param binaryFile 二进制切片文件
   */
  public UpLoad(binaryFile): Promise<void> {
    let _this = this;
    //进度条
    let percent = Math.floor(
      (binaryFile["index"] / parseInt(_this.param.chunks)) * 100
    );
    if (this.progressBar != undefined) {
      this.progressBar(percent);
    }
    //_this.fileParam.onProgress({ percent: percent });
    const formData = new FormData();
    //配置当前切块编号
    this.param.chunk = binaryFile["index"].toString();
    //额外参数
    for (let p in this.param) {
      formData.append(p, this.param[p]);
    }
    //切割文件的起始点与终止点
    let binary = this.file.slice(binaryFile["start"], binaryFile["end"]);
    //文件 放在最后
    formData.append("file", binary);
    let axiosconfig = {
      headers: {
        "Content-Type": "multipart/form-data"
      },
      url: this.url,
      method: "post",
      timeout: 60000,
      data: formData
    };
    //使用Promise进行回调
    let result = new Promise<void>((reslove, reject) => {
      axios(axiosconfig)
        .then(function(response) {
          _this.slicesRecord.filter(n => n.index == binaryFile["index"])[0][
            "isok"
          ] = true;
          reslove();
        })
        .catch(function(errors) {
          reject();
        });
    });
    return result;
  }
  /**合并分片方法 */
  public MergeBinary(): Promise<UpFileResult> {
    let upFileResult = new UpFileResult();
    let result = new Promise<UpFileResult>((reslove, reject) => {
      let _this = this;
      //isoldname:0：不采用原名称 1：采用原名称
      let axiosconfig = {
        url: this.urlMerge,
        method: "post",
        data: qs.stringify({
          filename: _this.file.name,
          fileMd5: _this.md5,
          isoldname: "0"
        })
      };
      axios(axiosconfig)
        .then(function(response) {
          upFileResult.status = true;
          upFileResult.data = response.data;
          reslove(upFileResult);
        })
        .catch(function(error) {
          console.log(error);
          upFileResult.status = false;
          upFileResult.data = error;
          reject(upFileResult);
        });
    });
    return result;
  }

  /**上传切片控制 */
  public UpBinaryFiles() {
    let result = new Promise<void>((reslove, reject) => {
      /**切片此时上传数量 */
      let upnumberrec = 0;
      let _this = this;
      let upnumbernow = {
        get value(): number {
          return upnumberrec;
        },
        set value(now: number) {
          /**如果暂停则停止上传 */
          if (!_this.isUpLoad) {
            reslove();
            return;
          }
          //获取未上传成功的分片
          let nextFile = _this.slicesRecord.filter(n => n.isok == false);
          if (nextFile.length > 0) {
            let ready = nextFile.filter(
              n => _this.upnumberRecord.indexOf(n.index) == -1
            );
            //此处判断防止是最后的文件已经在上传过程中，其他文件上传成功会在回调触发上传导致报错
            if (ready.length > 0) {
              _this.upnumberRecord.push(ready[0].index);
              _this.UpLoad(ready[0]).then(function() {
                //上传成功触发上传下一个文件
                upnumbernow.value--;
              });
            }
          } else {
            //分片全部上传完成
            reslove();
          }
          upnumberrec = now;
        }
      };
      //开启多个上传通道
      for (let i = 0; i < this.upnumbermax; i++) {
        upnumbernow.value++;
      }
    });
    return result;
  }
}
export default UpFiles;
