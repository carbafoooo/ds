import { ValidationErrors, FormControl, FormGroup } from "@angular/forms";
import { FormlyField, FormlyForm, Field } from "@ngx-formly/core";
import { FormlyFieldInput } from "@ngx-formly/bootstrap";

export function passwodValidator(form: FormGroup): ValidationErrors {
	console.log(form.parent.get("password"));
	return form.parent.get("password") === form.parent.get("confirmPassword") ? null : { match: true };
}
