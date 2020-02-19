import { FormControl } from "@angular/forms";
import { FormlyFieldConfig } from "@ngx-formly/core";

export function RequiredValidatorMessage(err, field: FormlyFieldConfig) {
	return `"${field.name} is required"`;
}
