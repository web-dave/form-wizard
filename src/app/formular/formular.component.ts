import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
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
}
