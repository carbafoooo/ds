import { ValidationErrors, FormControl, FormGroup, FormsModule } from "@angular/forms";
import { FormlyField, FormlyForm, Field } from "@ngx-formly/core";
import { FormlyFieldInput } from "@ngx-formly/bootstrap";

export function passwordValidator(form: FormControl): ValidationErrors {
	console.log(form.value);
	return form.parent.get("confirmPassword").value === form.parent.get("password").value ||
		!form.parent.get("password").value || !form.parent.get("confirmPassword").value
		? null
		: { match: true };
}
