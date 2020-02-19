import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormlyModule } from "@ngx-formly/core";
import { FormlyBootstrapModule } from "@ngx-formly/bootstrap";

import { AppComponent } from "./app.component";
import { IconsProviderModule } from "./icons-provider.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "./app-routing.module";
import { HomeComponent } from "./pages/home/home.component";
import { MainNewsComponent } from "./components/main-news/main-news.component";
import { RegisterFormComponent } from "./components/forms/register-form/register-form.component";
import { RequiredValidatorMessage } from "./utils/forms-validator/required.validator";
import { passwodValidator } from "./utils/forms-validator/password.validator";

@NgModule({
	declarations: [AppComponent, HomeComponent, MainNewsComponent, RegisterFormComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		IconsProviderModule,
		ReactiveFormsModule,
		FormsModule,
		HttpClientModule,
		BrowserAnimationsModule,
		FormlyModule.forRoot({
			validators: [{ name: "confirm", validation: passwodValidator }],
			validationMessages: [
				{ name: "required", message: RequiredValidatorMessage },
				{ name: "match", message: "password not match" }
			]
		}),
		FormlyBootstrapModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
