import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatenComponent } from './daten/daten.component';
import { DokumenteComponent } from './dokumente/dokumente.component';
import { FallComponent } from './fall/fall.component';
import { FormularComponent } from './formular/formular.component';

const routes: Routes = [
  {
    path: '',
    component: FormularComponent,
    children: [
      {
        path: 'fall',
        component: FallComponent,
      },
      {
        path: 'daten',
        component: DatenComponent,
      },
      {
        path: 'dokumente',
        component: DokumenteComponent,
      },
      {
        path: '',
        redirectTo: 'fall',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
