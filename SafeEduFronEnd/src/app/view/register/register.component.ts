import { Component, OnInit } from '@angular/core';
import {CompanyService} from "../../service/company.service";
import {DrawerEle} from "../../component/left-drawer/drawerEle"
import {RegisterService} from "../../service/register.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.less']
})
export class RegisterComponent implements OnInit {
  inputWrap:string = "clear input-list";
  topTitle:string = "注册";
  showBack:boolean=false;
  userIcon:string = "pull-left icon-user";
  pwdIcon:string = "pull-left icon-pwd";
  chooseIcon:string = "pull-left icon-company";
  selectedCompany:any="";
  companyList:DrawerEle[];
  constructor(private companyService:CompanyService,private registerService:RegisterService) { }
  telNum:string;
  ngOnInit() {
    this.getCompanyList();
 //   console.log(this.companyList)
  }

  getCompanyList():void{
    this.companyService.getCompanyData().subscribe((data)=>{
      this.companyList = data.companyList;
      // console.log(data.companyList.length);
      // let dataL = data.companyList;
      // for (let i=0;i<dataL.length;i++){
      //   for (let key in dataL[i]) {
      //     this.drawerEle.selected=false;
      //     this.drawerEle.isSelect=false;
      //     this.drawerEle[key] = dataL[i][key]
      //   }
      //   console.log(this.drawerEle)
      // this.companyList.push(this.drawerEle);
      //   console.log( this.companyList)
      // }


    })
  }
  submitUserInfo(tel:string,verify:string,password:string,company:string):void{
    this.registerService.submitUserName({telNum:tel,certNum:verify,pwd:password,companyName:company})
      .subscribe(data=>console.log(data))
    console.log("提交用户信息")
  }
}
