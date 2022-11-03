import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { FormdataService } from '../formdata.service';

@Component({
  selector: 'app-dokumente',
  templateUrl: './dokumente.component.html',
  styleUrls: ['./dokumente.component.scss'],
})
export class DokumenteComponent {
  farray: FormArray;
  fgroup: FormGroup;
  constructor(private service: FormdataService) {
    this.farray = this.service.getFormByName('dokumente') as FormArray;
    this.fgroup = this.service.getForm();
  }
  addFile(e: Event) {
    console.log((e.target as HTMLInputElement).files?.item(0));
    const file = (e.target as HTMLInputElement).files?.item(0);
    if (file) {
      this.farray.push(new FormControl(file));
    }
  }
}
