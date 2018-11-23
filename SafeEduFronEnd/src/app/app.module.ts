import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {APP_BASE_HREF} from '@angular/common';
import { HttpClientModule }    from '@angular/common/http';
import { AppComponent } from './app.component';
import { TopComponent } from './component/top/top.component';
import { RegisterComponent } from './view/register/register.component';
import { InputComponent } from './component/input/input.component';
import { ChooseInputComponent } from './component/choose-input/choose-input.component';
import { LeftDrawerComponent } from './component/left-drawer/left-drawer.component';
import { UserCenterComponent } from './view/user-center/user-center.component';
import { AppRoutingModule } from './app-routing.module';
import { VerifyInputComponent } from './component/verify-input/verify-input.component';
import { BtnGgComponent } from './component/btn-gg/btn-gg.component';
import { FormsModule }   from '@angular/forms';
import { PasswordInputComponent } from './component/password-input/password-input.component';
import { LoginComponent } from './view/login/login.component';
import { ScrollComponent } from './component/scroll/scroll.component';
import { NewsListComponent } from './view/news-list/news-list.component';
// import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
// import { InMemoryDataService }  from './in-memory-data.service';
@NgModule({
  declarations: [
    AppComponent,
    TopComponent,
    RegisterComponent,
    InputComponent,
    ChooseInputComponent,
    LeftDrawerComponent,
    UserCenterComponent,
    VerifyInputComponent,
    BtnGgComponent,
    PasswordInputComponent,
    LoginComponent,
    ScrollComponent,
    NewsListComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/page/SafeEduFronEnd'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
