import { Component, OnInit } from '@angular/core';
import {News} from "./News";

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.less']
})
export class NewsListComponent implements OnInit {
//  height = document.documentElement.clientHeight + 'px';
  height = document.documentElement.clientHeight + 'px';
  newsList:News[] = [];
  constructor() { }
  maxIndex:number;
  pageIndex:number=0;
  url:string='/apps/TransportMobile/UserCenter/newsList/queryNewsList?pageSize=10';
  ngOnInit() {

  }
  resultData(e,p){
    console.log(e.dataMap.maxIndex,p)
    if(p == 0){
      this.maxIndex=e.dataMap.maxIndex;
      this.newsList = [];
    }

    let data = e.dataMap.dataList;
   // let dataLists:any = [];
    for(let i=0;i<data.length;i++){
      this.newsList.push(data[i])
    }
  }
}
