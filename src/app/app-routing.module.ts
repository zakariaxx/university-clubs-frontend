import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { HomeComponent } from './pages/home/home.component';
import { GuestLayoutComponent } from './layouts/guest-layout/guest-layout.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { LoginComponent } from './pages/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './pages/register/register.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';


const routes: Routes = [

  { path: 'auth',
     component: AuthLayoutComponent,

     children: [
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },

    ]
  },
   { path: 'home',
     component: GuestLayoutComponent,
     children: [
      { path: 'user-profile',   component: UserProfileComponent },
      { path: '',   component: HomeComponent },
    ]
  },
  { path: 'admin',
     component: AdminLayoutComponent,
     children: [
      { path: 'user-profile',   component: UserProfileComponent },
      { path: 'dashboard',   component: DashboardComponent },

    ]
  },
  { path: '',   redirectTo: 'home', pathMatch: 'full' }, // redirect to `first-component`
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
