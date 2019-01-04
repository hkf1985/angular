import { Component, OnInit } from '@angular/core';
import {News} from "../../data/News";
import {NewsListService} from "../../service/news-list.service";
import {Router} from "@angular/router"


@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.less']
})
export class NewsListComponent implements OnInit {
  newsList:News[] = [];
  news:News= new News();
  constructor(
    private newsListService:NewsListService,
    private router:Router
  ) { }

  ngOnInit() {
    this.getNewsList(0)
  }

  getNewsList(pageIndex){
    console.log(this)
    this.newsListService.queryNewsList(pageIndex).subscribe(result=>{
      console.log(result.dataMap.dataList)
      let data = result.dataMap.dataList
      for(let i=0;i<data.length;i++){
        this.news.newsMainPic=data[i].newsMainPic;
        this.news.publishTime=data[i].publishTime
        this.news.webNewsTitle=data[i].webNewsTitle
        this.news.newsBrief=data[i].newsBrief
        this.news.webNewsId=data[i].webNewsId
        this.news.titleLink=data[i].titleLink
        console.log("thisNews",this.news)
        this.newsList.push(this.news)
      }
    })
  }
  routeAddNews(){
    this.router.navigate(['/addNews'])
  }
}
