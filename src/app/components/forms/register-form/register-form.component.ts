import { Component, OnInit, ViewChild } from "@angular/core";
import { FormGroup, AbstractControl } from "@angular/forms";
import { FormlyFieldConfig, FormlyFormOptions } from "@ngx-formly/core";

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
		password: "",
		confirmPassword: "",
		province: ""
	};
	options: FormlyFormOptions = {};

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
						required: true,
						minLength: 3,
						maxLength: 20
					},
					validators: {
						justString: {
							expression: (control: AbstractControl) => /\D/.test(control.value)
						},
						message: (err: any, field: FormlyFieldConfig) => "not accept"
					},
					validation: {
						messages: {
							required: "name is required",
							minlength: "name must grater than 3 character",
							justString: "not valid"
						}
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
					},
					validation: {
						messages: {
							required: "last name required"
						}
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
						placeholder: "شماره ملی",
						required: true,
						maxLength: 10
					},
					validators: {
						nationalId: {
							expression: (control: AbstractControl) => /\d{10}/.test(control.value)
						}
					},
					validation: {
						messages: {
							required: "user name required",
							nationalId: "user is not valid"
						}
					}
				}
			]
		},

		{
			key: "password",
			validators: {
				fieldMatch: {
					expression: (control: AbstractControl) => {
						const value = control.value;
						console.log(value);
						return (
							value.confirmPassword === value.password ||
							// avoid displaying the message error when values are empty
							!value.confirmPassword ||
							!value.password
						);
					},
					messages: (err: any, field: FormlyFieldConfig) => "not match",
					errorPath: "confirmPassword"
				}
			},
			fieldGroupClassName: "row",
			fieldGroup: [
				{
					className: "col-3",
					key: "password",
					name: "password",
					type: "input",
					templateOptions: {
						label: "رمز عبور",
						placeholder: "رمز عبور",
						required: true,
						type: "password",
						pattern: /(?=(.*[0-9]))(?=.*[\!@#$%^&*()\\[\]{}\-_+=~`|:;"'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{8,}/gm
					},
					validation: {
						messages: {
							required: "password is required"
						}
					}
				},
				{
					className: "col-3",
					key: "confirmPassword",
					name: "confirmPassword",
					type: "input",
					templateOptions: {
						label: "تکرار رمز عبور",
						placeholder: "تکرار رمز عبور",
						required: true,
						type: "password"
					},
					validation: {
						messages: {
							required: "password is required",
							fieldMatch: "password dosent Match"
						}
					}
				}
			]
		}
	];

	constructor() {}

	ngOnInit() {}
}
