import { Component, OnInit } from "@angular/core";
import { NgForm, FormControl } from "@angular/forms";

@Component({
	selector: "app-register-form",
	templateUrl: "./register-form.component.html",
	styleUrls: ["./register-form.component.css"]
})
export class RegisterFormComponent implements OnInit {
	constructor() {}

	ngOnInit() {}

	onSubmitRegisterForm(form: NgForm) {
		event.preventDefault();
		console.log(form);
	}

	checkFiled(formControl: FormControl): boolean {
		console.log(formControl);
		if (!formControl.valid && formControl.touched) {
			formControl.errors.push("erro");
			return false;
		}
		return true;
	}
}
