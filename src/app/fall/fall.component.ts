import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormdataService } from '../formdata.service';

@Component({
  selector: 'app-fall',
  templateUrl: './fall.component.html',
  styleUrls: ['./fall.component.scss'],
})
export class FallComponent {
  fgroup: FormGroup;
  constructor(private service: FormdataService) {
    this.fgroup = service.getFormByName('fall') as FormGroup;
  }
}
