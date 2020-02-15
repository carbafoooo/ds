import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { IconsProviderModule } from "./icons-provider.module";
//import { NgZorroAntdModule, NZ_I18N, fa_IR, NzNoAnimationModule } from 'ng-zorro-antd';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { registerLocaleData, CommonModule } from "@angular/common";
//import fa from '@angular/common/locales/fa';
import { AppRoutingModule } from "./app-routing.module";
import { HomeComponent } from "./pages/home/home.component";
import { MainNewsComponent } from "./components/main-news/main-news.component";
import { RegisterFormComponent } from "./components/forms/register-form/register-form.component";

//registerLocaleData(fa);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MainNewsComponent,
    RegisterFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IconsProviderModule,
    //NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
