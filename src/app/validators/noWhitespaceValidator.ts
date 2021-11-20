import { FormControl, Validators } from "@angular/forms";

export function noWhitespaceValidator(control: FormControl) {

    // check if the value ends withspace
    if (control.value?.length > 0 && control.value?.endsWith(' ')) {
        return { 'whitespace': true };
    }
    // check whitespace in the value
    const isWhitespace = (control.value || '').trim().length === 0;
    const isValid = !isWhitespace;
    return isValid ? null : { 'whitespace': true };

}
