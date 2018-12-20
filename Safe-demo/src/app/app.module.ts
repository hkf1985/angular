import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdMobileModule } from 'ng-zorro-antd-mobile';
import { ButtonComponent } from './component/button/button.component';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { RegisterComponent } from './view/register/register.component';
import { AppRoutingModule } from './app-routing.module';
import { LogoComponent } from './component/logo/logo.component';
import { FontIconComponent } from './component/font-icon/font-icon.component';
import { InputItemComponent } from './component/input-item/input-item.component';
import { VerifyPhoneComponent } from './component/verify-phone/verify-phone.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    NavBarComponent,
    RegisterComponent,
    LogoComponent,
    FontIconComponent,
    InputItemComponent,
    VerifyPhoneComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    NgZorroAntdMobileModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
