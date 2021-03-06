import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SetupPageComponent } from './setup-page/setup-page.component';
import { DashboardGroupComponent } from './dashboard-group/dashboard-group.component';
import { ProgramEditorComponent } from './automation/program-editor/program-editor.component';


const routes: Routes = [
  { path: '', redirectTo: 'groups/', pathMatch: 'full' },
  { path: 'groups/:name', component: DashboardGroupComponent },
  { path: 'setup', component: SetupPageComponent },
  { path: 'editor', component: ProgramEditorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
