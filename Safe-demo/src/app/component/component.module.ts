import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonComponent } from './button/button.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LogoComponent } from './logo/logo.component';
import { FontIconComponent } from './font-icon/font-icon.component';
import { InputItemComponent } from './input-item/input-item.component';
import { VerifyPhoneComponent } from './verify-phone/verify-phone.component';
import { SelectInputComponent } from './select-input/select-input.component';
import { DrawerComponent } from './drawer/drawer.component';
import { TopPageComponent } from './top-page/top-page.component';
import { WarmPromptComponent } from './warm-prompt/warm-prompt.component';
import { UpLoadingImageComponent } from './up-loading-image/up-loading-image.component';
import {NgZorroAntdMobileModule} from "ng-zorro-antd-mobile";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
@NgModule({
  declarations:[
    ButtonComponent,
    NavBarComponent,
    LogoComponent,
    FontIconComponent,
    InputItemComponent,
    VerifyPhoneComponent,
    SelectInputComponent,
    DrawerComponent,
    TopPageComponent,
    WarmPromptComponent,
    UpLoadingImageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgZorroAntdMobileModule,
  ],
  exports:[
    ButtonComponent,
    NavBarComponent,
    LogoComponent,
    FontIconComponent,
    InputItemComponent,
    VerifyPhoneComponent,
    SelectInputComponent,
    DrawerComponent,
    TopPageComponent,
    WarmPromptComponent,
    UpLoadingImageComponent
  ]
})
export class ComponentModule { }
