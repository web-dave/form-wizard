import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { FormdataService } from '../formdata.service';

@Component({
  selector: 'app-formular',
  templateUrl: './formular.component.html',
  styleUrls: ['./formular.component.scss'],
})
export class FormularComponent {
  formData: FormGroup;
  constructor(private service: FormdataService) {
    this.formData = this.service.getForm();
    this.formData.valueChanges.subscribe((data) => console.log(data));
  }
  foo() {
    return (
      this.formData.dirty ||
      this.formData.get('fall')?.dirty ||
      this.formData.get('daten')?.dirty ||
      (this.formData.get('dokumente') as FormArray)?.length >= 1
    );
  }
}
