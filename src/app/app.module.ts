import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { GuestLayoutComponent } from './layouts/guest-layout/guest-layout.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ManageUserComponent } from './pages/manage/manage-user/manage-user.component';
import { ManageClubComponent } from './pages/manage/manage-club/manage-club.component';
import { ManageEventComponent } from './pages/manage/manage-event/manage-event.component';
import { ManageMeetingComponent } from './pages/manage/manage-meeting/manage-meeting.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    UserProfileComponent,
    GuestLayoutComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    PageNotFoundComponent,
    HomeComponent,
    DashboardComponent,
    ManageUserComponent,
    ManageClubComponent,
    ManageEventComponent,
    ManageMeetingComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [SidebarComponent, FooterComponent, UserProfileComponent, GuestLayoutComponent, AdminLayoutComponent, AuthLayoutComponent, PageNotFoundComponent, HomeComponent, DashboardComponent]
})
export class AppModule { }
