import { Injectable } from '@angular/core';
import {
  AbstractControl,
  FormGroup,
  NonNullableFormBuilder,
  Validators,
} from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class FormdataService {
  private formData = this.builder.group({
    fall: this.builder.group({
      id: ['', [Validators.required]],
      name: '',
    }),
    daten: this.builder.group({
      firstname: '',
      lastname: '',
    }),
    dokumente: this.builder.array([]),
  });
  constructor(private builder: NonNullableFormBuilder) {}

  getFormByName(name: string): AbstractControl {
    return this.formData.get(name) as AbstractControl;
  }
  getForm(): FormGroup {
    return this.formData;
  }
}
