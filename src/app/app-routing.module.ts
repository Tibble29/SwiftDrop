import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LiveDeliveriesComponent } from './live-deliveries/live-deliveries.component';
import { LoginComponent } from './login/login.component';
import { MemosComponent } from './memos/memos.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redirect empty path to login
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'memos', component: MemosComponent },
  { path: 'find-deliveries', component: LiveDeliveriesComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
