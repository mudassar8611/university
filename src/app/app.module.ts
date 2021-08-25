import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from "@angular/common";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from "./header/HeaderComponent";
import { FooterComponent } from './footer/footer.component';
import { CoursesComponent } from './courses/courses.component';
import { EventComponent } from './event/event.component';
import { CollegeComponent } from './college/college.component';
import { FscmedicalComponent } from './fscmedical/fscmedical.component';
import { IcsComponent } from './ics/ics.component';
import { FaComponent } from './fa/fa.component';
import { IcomComponent } from './icom/icom.component';
import { BbaComponent } from './bba/bba.component';
import { BscsComponent } from './bscs/bscs.component';
import { BsitComponent } from './bsit/bsit.component';
import { BsseComponent } from './bsse/bsse.component';
import { EnglishComponent } from './english/english.component';
import { BsmathComponent } from './bsmath/bsmath.component';
import { ZoologyComponent } from './zoology/zoology.component';
import { CollegefeesComponent } from './collegefees/collegefees.component';
import { FeesBSSEBSITBSCSComponent } from './fees-bssebsitbscs/fees-bssebsitbscs.component';
import { FeezoologyComponent } from './feezoology/feezoology.component';
import { FeesenglishComponent } from './feesenglish/feesenglish.component';
import { FeemathematicsComponent } from './feemathematics/feemathematics.component';
import { FeesbbaComponent } from './feesbba/feesbba.component';
import { CriteriaComponent } from './criteria/criteria.component';
import { AdmissionFormComponent } from './admission-form/admission-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { UserService } from './user.service';
import { UniversitylistComponent } from './universitylist/universitylist.component';
import { EditformComponent } from './editform/editform.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ViewComponent } from './view/view.component';
import { CollegeadmissionformComponent } from './collegeadmissionform/collegeadmissionform.component';
import { CollegeformlistComponent } from './collegeformlist/collegeformlist.component';
import { EditcollegeformComponent } from './editcollegeform/editcollegeform.component';
import { CollegeformviewComponent } from './collegeformview/collegeformview.component';
import { LoginComponent } from './login/login.component';


import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InterdashboardComponent } from './interdashboard/interdashboard.component';
import { UniprovedComponent } from './uniproved/uniproved.component';
import { UnirejectedComponent } from './unirejected/unirejected.component';
import { CollegeapprovedComponent } from './collegeapproved/collegeapproved.component';
import { CollegerejectedComponent } from './collegerejected/collegerejected.component';
import { UnreadmsgComponent } from './unreadmsg/unreadmsg.component';
import { ReadmsgComponent } from './readmsg/readmsg.component';

import { UnreadMsgViewComponent } from './unread-msg-view/unread-msg-view.component';

import { MsgdashboardComponent } from './msgdashboard/msgdashboard.component';
import { SignupComponent } from './signup/signup.component';
import { StudentLoginComponent } from './student-login/student-login.component';
import { StudentPannelComponent } from './student-pannel/student-pannel.component';
import { AdminSignupComponent } from './admin-signup/admin-signup.component';
import { TeacherSignupComponent } from './teacher-signup/teacher-signup.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { TeacherLoginComponent } from './teacher-login/teacher-login.component';
import { TeacherPanelComponent } from './teacher-panel/teacher-panel.component';
import { AuthGuard } from './auth.guard';
import { StudentGuardGuard } from './student-guard.guard';
import { TeacherGuardGuard } from './teacher-guard.guard';
import { StudentPasswordChangeComponent } from './student-password-change/student-password-change.component';
import { UploadAssignmentComponent } from './teacher-panel/upload-assignment/upload-assignment.component';
import { TeacherServiceService } from './teacher-panel/teacher-service.service';
import { AssignmentListingComponent } from './teacher-panel/assignment-listing/assignment-listing.component';
import { AssignmentAdminComponent } from './teacher-panel/assignment-admin/assignment-admin.component';
import { UploadResultComponent } from './teacher-panel/upload-result/upload-result.component';
import { ResultListComponent } from './teacher-panel/result-list/result-list.component';
import { StudentPanel1Component } from './student-panel/student-panel1/student-panel1.component';
import { StudentFilterAssignmentComponent } from './student-panel/student-filter-assignment/student-filter-assignment.component';
import { StudentFilterResultComponent } from './student-panel/student-filter-result/student-filter-result.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { UniDashboardComponent } from './dashboard/uni-dashboard/uni-dashboard.component';






/*const approutes: Routes = [
  {path:'', component: HomeComponent},
  {path:'courses', component: CoursesComponent},
  {path:'contact', component: ContactComponent},
  {path:'event', component: EventComponent},
  {path:'news', component: NewsComponent},
  {path:'about', component: AboutComponent}

]*/

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    HeaderComponent,
    FooterComponent,
    CoursesComponent,
    EventComponent,
    CollegeComponent,
    FscmedicalComponent,
    IcsComponent,
    FaComponent,
    IcomComponent,
    BbaComponent,
    BscsComponent,
    BsitComponent,
    BsseComponent,
    EnglishComponent,
    BsmathComponent,
    ZoologyComponent,
    CollegefeesComponent,
    FeesBSSEBSITBSCSComponent,
    FeezoologyComponent,
    FeesenglishComponent,
    FeemathematicsComponent,
    FeesbbaComponent,
    CriteriaComponent,
    AdmissionFormComponent,
    UniversitylistComponent,
    EditformComponent,
    ViewComponent,
    CollegeadmissionformComponent,
    CollegeformlistComponent,
    EditcollegeformComponent,
    CollegeformviewComponent,
    LoginComponent,

    DashboardComponent,

    InterdashboardComponent,

    UniprovedComponent,

    UnirejectedComponent,

    CollegeapprovedComponent,

    CollegerejectedComponent,

    UnreadmsgComponent,

    ReadmsgComponent,


    UnreadMsgViewComponent,



    MsgdashboardComponent,



    SignupComponent,



    StudentLoginComponent,



    StudentPannelComponent,


    AdminSignupComponent,


    TeacherSignupComponent,


    AdminLoginComponent,


    TeacherLoginComponent,


    TeacherPanelComponent,

    StudentPasswordChangeComponent,

    UploadAssignmentComponent,

    AssignmentListingComponent,

    AssignmentAdminComponent,
 UploadResultComponent,


    ResultListComponent,


    StudentPanel1Component,

    StudentFilterAssignmentComponent,


    StudentFilterResultComponent,
      UniDashboardComponent

  ],
  imports: [
    BrowserModule,
    CommonModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ModalModule.forRoot(),
    NgbModule,
    RouterModule,
    ToastrModule.forRoot(),
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    NgxSpinnerModule
    

    //RouterModule.forRoot(approutes)
  ],
  providers: [UserService, AuthGuard, StudentGuardGuard, TeacherGuardGuard,TeacherServiceService],
  // schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
