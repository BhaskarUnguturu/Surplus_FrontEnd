import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './views/admin/admin.component';
import { SessionComponent } from './views/session/session.component';
import { AuthGuardService } from './views/session/auth/auth-guard.service';
import { PublicComponent } from './views/public/public.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },
  {
    path: '',
    component: PublicComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./views/public/public.module').then(m => m.PublicModule)
      }
    ]
  },
  {
    path: '',
    component: AdminComponent,
    // canActivate: [AuthGuardService],
    children: [
      {
        path: 'admin',
        loadChildren: () => import('./views/admin/admin.module').then(m => m.AdminModule)
      }
    ]
  },
  {
    path: '',
    component: SessionComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./views/session/session.module').then(m => m.SessionModule)
      }
    ]
  },
  { path: '**', redirectTo: 'error' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
