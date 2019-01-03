import { Component, OnInit,Input } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { DomSanitizer } from '@angular/platform-browser';
import {UploadImgService} from "../../service/upload-img.service";

@Component({
  selector: 'app-up-loading-image',
  templateUrl: './up-loading-image.component.html',
  styleUrls: ['./up-loading-image.component.less']
})
export class UpLoadingImageComponent implements OnInit {
  @Input() content:string;
  @Input() uploadImgUrl:string = './assets/images/pageLoad.png';
  uploadImg:boolean=false;
  uploadUrl = "/apps/TransportMobile/Identify/IdcardIdentify/IdcardUpload"
  value;
  imgSrc;
  upload:boolean=true;
  imgMask:boolean=false;
  constructor(private upLoadImgService:UploadImgService,
              public _d: DomSanitizer, // 图片路径转换使用，使用见HMTL文件
              ) { }

  ngOnInit() {
  }
  inputChange(e){
    const obj = e.srcElement;
    const file = obj.files[0];
    this.upLoadImgService.compressImage(file,this.uploadUrl,300,function (data) {
      console.log("sssssssssssssss",data)
    })
    this.imgSrc = window.URL.createObjectURL(file);
    this.imgMask=true;
    this.uploadImg=true;
    setTimeout(()=>{
      this.imgMask=false;
      this.uploadImg=false;
    },3000)

 //   console.log(file)
  }

}
