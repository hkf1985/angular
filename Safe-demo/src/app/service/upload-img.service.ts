import { Injectable } from '@angular/core';
import {Observable, of, throwError} from "rxjs";
import {HttpClient, HttpErrorResponse, HttpEvent, HttpEventType, HttpRequest} from "@angular/common/http";
import {catchError, last, map, tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class UploadImgService {

  constructor(private http:HttpClient) { }

  compressImage(obj,uploadUrl:string,width:number,callback){
    const oThis = this;
    let imgFile = ""
    let imgWidth = width || 640;

    let file = obj;
    let myaimage = file['name'];
    let myimageindex =   myaimage.indexOf(".");
    let myimage = myaimage.substring(myimageindex).toUpperCase();
    let isPic = false;
    let imageType = /image.*/;
    if(myimage ==".BMP" || myimage ==".PNG" || myimage ==".GIF" || myimage ==".JPG" || myimage ==".JPEG"){
      isPic = true;
    }else if(file.type.match(imageType)){
      isPic = true;
    }else if(file.name.indexOf("image%")> -1){
      isPic = true;
    }
    if (!isPic) {
      return false;
      alert("不是图片！请选择某个相册中的图片！");
    } else {
      var image = new Image();
      var width = 0;
      var height = 0;
      var reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = function () {
        console.log('isPic',isPic)
        image.onload = function () {
          while (width == 0) {
            width = image.width;
            height = image.height;
          }
          console.log("file.size========" + file.size)
          console.log("file.size====width > imgWidth====" + (width > imgWidth))

          if (file.size > 1000000) {  //判断图片大小
            var scale = imgWidth / width //图片缩放比例
            var c = document.createElement('canvas');
            c.width = imgWidth;
            c.height = imgWidth * height / width;
            c.getContext('2d').scale(scale, scale) //设置缩小或者放大，注意为负数时，图片将会旋转
            c.getContext('2d').drawImage(image, 0, 0);
            let imgUrlBase = c.toDataURL("image/jpeg");
            let imgBase = oThis.convertBase64UrlToBlob(imgUrlBase);
            console.log(imgBase)
             oThis.upLoadImage(uploadUrl, imgBase, 'jpg', 'base', callback)
          } else {
            imgFile = file;
            console.warn("sss")
             oThis.upLoadImage(uploadUrl, imgFile, '', 'base', callback)
            //   uploadImage(picFlag,"",imgFile,pic_id,fileId,uploadUrl,otherFun,idcardSide,"file")
          }
          ;
        }
        image.src  = this.result;   // 编译后的图像编码，可直接用src显示
      }
    }
  }
  /**
   * 将以base64的图片url数据转换为Blob
   * @param urlData
   *            用url方式表示的base64图片数据
   *
   */
   convertBase64UrlToBlob(urlData){
    var bytes=window.atob(urlData.split(',')[1]);        //去掉url的头，并转换为byte
    //处理异常,将ascii码小于0的转换为大于0
    var ab = new ArrayBuffer(bytes.length);
    var ia = new Uint8Array(ab);
    for (var i = 0; i < bytes.length; i++) {
      ia[i] = bytes.charCodeAt(i);
    }
    return new Blob( [ab] , {type : 'image/jpeg'});
  }

  upLoadImage(uploadUrl,uploadFile,fileType,dataType,callback)  {
    var formData = new FormData();   //这里连带form里的其他参数也一起提交了,如果不需要提交其他参数可以直接FormData无参数的构造函数
    //convertBase64UrlToBlob函数是将base64编码转换为Blob
    formData.append("uploadFile",uploadFile);  //append函数的第一个参数是后台获取数据的参数名,和html标签的input的name属性功能相同
    formData.append("fileType",fileType);  //append函数的第一个参数是后台获取数据的参数名,和html标签的input的name属性功能相同
    //formData.append("qyzxFileId",qyzxFileId);  //append函数的第一个参数是后台获取数据的参数名,和html标签的input的name属性功能相同
    //formData.append("picFlag",qyzxFileId);
    //formData.append("idcardSide",idcardSide);
    formData.append("dataType",dataType);
    //ajax 提交form
    var myUrl = "/apps/MobileVersion/Comment/Comment/uploadFileReturn"
    if(uploadUrl!= ""){
      myUrl = uploadUrl
    }
    console.log("url------------------------:"+myUrl)

    this.http.post(myUrl,formData).subscribe(data=>{
      callback(data)
    },error=>{
      console.log(error)
    })
  }
 /* uploadImageProgress(uploadUrl,uploadFile,fileType,dataType,callback){
    var formData = new FormData();   //这里连带form里的其他参数也一起提交了,如果不需要提交其他参数可以直接FormData无参数的构造函数
    //convertBase64UrlToBlob函数是将base64编码转换为Blob
    formData.append("uploadFile",uploadFile);  //append函数的第一个参数是后台获取数据的参数名,和html标签的input的name属性功能相同
    formData.append("fileType",fileType);  //append函数的第一个参数是后台获取数据的参数名,和html标签的input的name属性功能相同
    //formData.append("qyzxFileId",qyzxFileId);  //append函数的第一个参数是后台获取数据的参数名,和html标签的input的name属性功能相同
    //formData.append("picFlag",qyzxFileId);
    //formData.append("idcardSide",idcardSide);
    formData.append("dataType",dataType);
    //ajax 提交form
    var myUrl = "/apps/MobileVersion/Comment/Comment/uploadFileReturn"
    if(uploadUrl!= ""){
      myUrl = uploadUrl
    }
    console.log("url------------------------:"+myUrl)
    const req = new HttpRequest('POST', uploadUrl, formData, {
      reportProgress: true
    });
    this.http.request(req).pipe(
      map(event => this.getEventMessage(event, formData)),
      tap(message => this.showProgress(message)),
      last(), // return last (completed) message to caller
      catchError(this.handleError(formData))
    );
  }*/
  private getEventMessage(event: HttpEvent<any>, file: File) {
    switch (event.type) {
      case HttpEventType.Sent:
        return `Uploading file "${file.name}" of size ${file.size}.`;

      case HttpEventType.UploadProgress:
        // Compute and show the % done:
        const percentDone = Math.round(100 * event.loaded / event.total);
        return `File "${file.name}" is ${percentDone}% uploaded.`;

      case HttpEventType.Response:
        return `File "${file.name}" was completely uploaded!`;

      default:
        return `File "${file.name}" surprising upload event: ${event.type}.`;
    }
  }
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };
   private showProgress(msg){
     console.log(msg)
   }
}
