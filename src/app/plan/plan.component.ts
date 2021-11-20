import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { noNegativeNumberValidator } from '../validators/noNegativeValueValidator';
import { noWhitespaceValidator } from '../validators/noWhitespaceValidator';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.scss']
})
export class PlanComponent implements OnInit {

  planForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.initForm();
  }
  /* Create Reactive form */
  initForm() {
    this.planForm = this.formBuilder.group({
      'name': [null, [Validators.required, noWhitespaceValidator]],
      'amount': [null, [Validators.required, noWhitespaceValidator, noNegativeNumberValidator]]
    });
  }

  get name() {
    return this.planForm.get('name') as FormControl;

  }
  get amount() {
    return this.planForm.get('amount') as FormControl;
  }

  get nameError() {
    if (this.planForm.get('name')?.hasError('required'))
      return 'Name field is required';

    if (this.planForm.get('name')?.hasError('whitespace'))
      return 'Please enter a valid Name';

    else
      return '';
  }
  get amountError() {
    if (this.planForm.get('amount')?.hasError('required'))
      return 'Amount field is required';

    if (this.planForm.get('amount')?.hasError('whitespace'))
      return 'Please enter a valid Amount';

    if (this.planForm.get('amount')?.hasError('negativeNumber'))
      return 'Please enter a valid Value';

    else
      return '';
  }
  submitForm() {

  }
}
