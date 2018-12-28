import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {APP_BASE_HREF,HashLocationStrategy,LocationStrategy} from '@angular/common';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
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
import { SelectInputComponent } from './component/select-input/select-input.component';
import { DrawerComponent } from './component/drawer/drawer.component';
import { TopPageComponent } from './component/top-page/top-page.component';
import { AuthenticationComponent } from './view/authentication/authentication.component';
import { LoginComponent } from './view/login/login.component';
import { WarmPromptComponent } from './component/warm-prompt/warm-prompt.component';
import { UpLoadingImageComponent } from './component/up-loading-image/up-loading-image.component';

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
    SelectInputComponent,
    DrawerComponent,
    TopPageComponent,
    AuthenticationComponent,
    LoginComponent,
    WarmPromptComponent,
    UpLoadingImageComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgZorroAntdMobileModule,
    AppRoutingModule
  ],
  providers: [{provide:LocationStrategy, useClass: HashLocationStrategy},{provide: APP_BASE_HREF, useValue: '/page/SafeEduFronEnd'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
