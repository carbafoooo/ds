import { Component, OnInit, ViewChild } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { FormlyField, FormlyFieldConfig } from "@ngx-formly/core";

@Component({
	selector: "app-register-form",
	templateUrl: "./register-form.component.html",
	styleUrls: ["./register-form.component.css"]
})
export class RegisterFormComponent implements OnInit {
	form = new FormGroup({});
	model = {
		fname: "",
		lname: "",
		email: "",
		mobile: "",
		userName: "",
		password: ""
	};

	fields: FormlyFieldConfig[] = [
		{
			fieldGroupClassName: "row",
			fieldGroup: [
				{
					className: "col-6",
					key: "fname",
					name: "first name",
					type: "input",
					templateOptions: {
						placeholder: "نام",
						label: "نام",
						required: true
					}
				},
				{
					className: "col-6",
					name: "last name",
					key: "lname",
					type: "input",

					templateOptions: {
						placeholder: "نام خانوادگی",
						label: "نام خانوادگی",
						required: true
					}
				}
			]
		},
		{
			fieldGroupClassName: "row",
			fieldGroup: [
				{
					className: "col-6",
					key: "userName",
					name: "user name",
					type: "input",
					templateOptions: {
						label: "نام کاربری",
						placeholder: "نام کاربری",
						required: true
					},
					validation: ["required"]
				},
				{
					className: "col-3",
					key: "password",
					name: "password",
					type: "input",
					templateOptions: {
						label: "رمز عبور",
						placeholder: "رمز عبور",
						required: true,
						type: "password"
					},
					validators: {
						validation: ["confirm"]
					}
				},
				{
					className: "col-3",
					key: "confirmPassword",
					name: "confirm password",
					type: "input",
					templateOptions: {
						label: "تکرار رمز عبور",
						placeholder: "تکرار رمز عبور",
						required: true,
						type: "password"
					},
					validators: {
						validation: ["confirm"]
					}
				}
			]
		}
	];

	constructor() {}

	ngOnInit() {}
}
