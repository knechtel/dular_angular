import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadOsComponent } from './cad-os/cad-os.component';

const routes: Routes = [
  {path:'cad-os',component:CadOsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
