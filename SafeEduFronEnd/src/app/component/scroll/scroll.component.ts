import { Component,EventEmitter, OnInit ,Input,Output} from '@angular/core';
import {QueryDataService} from "../../service/query-data.service";

@Component({
  selector: 'app-scroll',
  templateUrl: './scroll.component.html',
  styleUrls: ['./scroll.component.less']
})
export class ScrollComponent implements OnInit {

  constructor(private queryDataService:QueryDataService) { }
  @Input() maxIndex:number;
   Data:any=[];
  @Input() pageIndex:number;
  @Input() url:string;
  @Output() resultData=new EventEmitter<any>();
  upLoadMore:boolean=false;
  upLoadNot:boolean=false;
  moveY:number = 0;
  startY:number =0;
  transform:string="translateY(0px)";
  transition:string='200ms'
  touchMove:boolean = true;
  downLoadText:string='放手加载更多数据';
  updateData=true;
  ngOnInit() {
    this.queryData(0)
  }
  scroll(e,h):number{
   //console.log(e)
   // console.log('height',h)
   // console.log('height',this.maxIndex)
   // console.log(e.target.scrollTop)
    let offOn = h - e.target.scrollTop - e.target.clientHeight-10;
    console.log(this.pageIndex,this.maxIndex-1 , offOn)
    if(this.pageIndex < this.maxIndex  && offOn<0){
      this.upLoadNot = false;
      this.upLoadMore =true;
      console.log("upLoadMore")
      this.queryData(this.pageIndex)
      return 0;
    }
    if(this.pageIndex >= this.maxIndex-1 && offOn<0){
      this.upLoadNot =true;
      this.upLoadMore = false;
      return 1;
    }
  }
  queryData(pageIndex,callback?):any{
    if(pageIndex == 0){
      this.Data = []
    }
    console.log(' this.updateData ', this.updateData )
    if(!this.updateData) return 0;
    console.log(' this.updateData ', this.updateData )
    this.updateData = false;
    console.log(' this.updateData ', this.updateData )
    return this.queryDataService.queryNewsList(this.url,{pageIndex:pageIndex}).subscribe(data=>{
     this.updateData=true;
     console.log("datadatadatadata",data)
     this.resultData.emit(data)
      this.pageIndex++;
     if(callback){
       callback()
     }
   },error=>{
     console.log('errorerrorerrorerror',error.status)
     this.downLoadText = "错误编码:"+error.status;
     setTimeout(()=>{
       this.transform = 'translateY(0px)';
       this.transition = '200ms'
     },300)
    })
  }
  touchstartFn(e){
    this.startY =e.targetTouches[0].pageY;
    this.transition = '0ms'
    this.touchMove = true
    console.log("sssssssssssssssssssssss")
  }
  touchmoveFn(e,top){
    this.downLoadText = "放手加载更多数据";
    console.log("toptoptoptoptoptop",e,top)
    this.moveY = e.targetTouches[0].pageY - this.startY;
    if(this.touchMove && this.moveY>0 && top == 0 ){
      e.preventDefault()
    }
    if(top == 0 && this.moveY>0){
      console.log(this.moveY)
      // if(this.moveY > 40 && this.moveY>0){
      //   this.transform = 'translateY('+40+'px)';
      // }
      this.transform = 'translateY('+this.moveY+'px)';
    }
  }
  touchendFn(e,top){
    if(this.moveY > 0 && top == 0){
      this.pageIndex = 0;
      this.downLoadText = "数据正在加载中..."
      this.queryData(0, ()=> {
        setTimeout(()=>{
          this.downLoadText = "数据加载完成..."
          this.transform = 'translateY(0px)';
          this.transition = '200ms'
        },300)
      })
      this.touchMove = false;
    }
  }
}
