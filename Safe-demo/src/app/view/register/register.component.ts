import { Component, OnInit,HostBinding } from '@angular/core';
import {CompanyService} from "../../service/company.service";
import { LicenseService} from "../../service/license.service";
import { FormGroup,FormControl } from '@angular/forms';
import {RegisterService} from "../../service/register.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.less'],
})
export class RegisterComponent implements OnInit {
  width=document.documentElement.clientWidth;
  height: number = document.documentElement.clientHeight;
  logoSrc:string='../../../assets/images/headerImg.png';
  companyList;
  selectedCompany;
  licenseList;
  selectedLicense;
  loading:boolean=false;
  form:FormGroup;
  userTel:FormGroup;

  constructor(private companyService:CompanyService,private licenseService:LicenseService,private registerService:RegisterService) { }
  state = {
    open: false
  };
  companyState={
    open:false
  }
  countyState={
    open:false
  }
  licenseState={
    open:false
  }
  ngOnInit() {
  }
  onLeftClick(){
    console.log("onleftclick")
    window.history.back()
  }
  onOpenChange(){
    this.state.open = !this.state.open;
  }
  showCounty(){
    this.state.open=false;
    this.countyState.open=true;
  }
  showCompany(){
    this.state.open=false;
    this.companyState.open=true;
    this.companyService.getCompany().subscribe(company=>{
      console.log(company)
      this.companyList=company.companyList;
    })
  }
  chooseCompany(e){
    console.log('company',e)
    this.selectedCompany=e.companyName
    this.companyState.open=false;
  }
  onOpenLicense(){
    this.licenseState.open = !this.licenseState.open
    this.licenseService.getLicenseList().subscribe(license=>{
      console.log(license)
      this.licenseList = license.DVList
    })
  }
  registerAccount(name,verify,password,certification,company,license){
  this.loading = true;
  let data = {
    telNum:name,
    certNum:verify,
    pwd:password,
    employmentCertificate:certification,
    companyName:company,
    drivingVehicle:license
  }
  this.registerService.submitUserInfo(data).subscribe(result=>{
    console.log('submitUserInfo',result)
    this.loading = false;
    window.location.assign('#/page/SafeEduFronEnd/authentication')
  },error=>{
    console.log('error',error)
  })
  }
  chooseDriving(e){
    console.log('driving',e)
    this.selectedLicense=e.drivingVehicleName;
    this.licenseState.open=false;
  }
  onSubmit(){
    console.log()
  }
}
