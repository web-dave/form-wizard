import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormdataService } from '../formdata.service';

@Component({
  selector: 'app-daten',
  templateUrl: './daten.component.html',
  styleUrls: ['./daten.component.scss'],
})
export class DatenComponent {
  fgroup: FormGroup;
  constructor(private service: FormdataService) {
    this.fgroup = service.getFormByName('daten') as FormGroup;
  }
}
