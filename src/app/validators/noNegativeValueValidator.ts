import { FormControl } from "@angular/forms";

export function noNegativeNumberValidator(control: FormControl) {
    const reg = /^\d+$/;
    const isValid = reg.test(control.value);
    return isValid ? null : { 'negativeNumber': true };
}
