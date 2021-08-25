import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminSignupComponent } from './admin-signup/admin-signup.component';
import { AdmissionFormComponent } from './admission-form/admission-form.component';

import { BbaComponent } from './bba/bba.component';
import { BscsComponent } from './bscs/bscs.component';
import { BsitComponent } from './bsit/bsit.component';
import { BsmathComponent } from './bsmath/bsmath.component';
import { BsseComponent } from './bsse/bsse.component';
import { CollegeComponent } from './college/college.component';
import { CollegeadmissionformComponent } from './collegeadmissionform/collegeadmissionform.component';
import { CollegeapprovedComponent } from './collegeapproved/collegeapproved.component';
import { CollegefeesComponent } from './collegefees/collegefees.component';
import { CollegeformlistComponent } from './collegeformlist/collegeformlist.component';
import { CollegeformviewComponent } from './collegeformview/collegeformview.component';
import { CollegerejectedComponent } from './collegerejected/collegerejected.component';
import { ContactComponent } from './contact/contact.component';
import { CoursesComponent } from './courses/courses.component';
import { CriteriaComponent } from './criteria/criteria.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditcollegeformComponent } from './editcollegeform/editcollegeform.component';
import { EditformComponent } from './editform/editform.component';
import { EnglishComponent } from './english/english.component';
import { EventComponent } from './event/event.component';
import { FaComponent } from './fa/fa.component';
import { FeemathematicsComponent } from './feemathematics/feemathematics.component';
import { FeesBSSEBSITBSCSComponent } from './fees-bssebsitbscs/fees-bssebsitbscs.component';
import { FeesbbaComponent } from './feesbba/feesbba.component';
import { FeesenglishComponent } from './feesenglish/feesenglish.component';
import { FeezoologyComponent } from './feezoology/feezoology.component';
import { FscmedicalComponent } from './fscmedical/fscmedical.component';
import { HomeComponent } from './home/home.component';
import { IcomComponent } from './icom/icom.component';
import { IcsComponent } from './ics/ics.component';
import { InterdashboardComponent } from './interdashboard/interdashboard.component';
import { LoginComponent } from './login/login.component';
import { MsgdashboardComponent } from './msgdashboard/msgdashboard.component';
import { AuthGuard } from './auth.guard';
import { ReadmsgComponent } from './readmsg/readmsg.component';
import { SignupComponent } from './signup/signup.component';
import { StudentLoginComponent } from './student-login/student-login.component';
import { StudentPannelComponent } from './student-pannel/student-pannel.component';
import { TeacherLoginComponent } from './teacher-login/teacher-login.component';
import { TeacherPanelComponent } from './teacher-panel/teacher-panel.component';
import { TeacherSignupComponent } from './teacher-signup/teacher-signup.component';
import { UniprovedComponent } from './uniproved/uniproved.component';
import { UnirejectedComponent } from './unirejected/unirejected.component';
import { UniversitylistComponent } from './universitylist/universitylist.component';
import { UnreadMsgViewComponent } from './unread-msg-view/unread-msg-view.component';
import { UnreadmsgComponent } from './unreadmsg/unreadmsg.component';
import { ViewComponent } from './view/view.component';
import { ZoologyComponent } from './zoology/zoology.component';
import { StudentGuardGuard } from './student-guard.guard';
import { TeacherGuardGuard } from './teacher-guard.guard';
import { StudentPasswordChangeComponent } from './student-password-change/student-password-change.component';
import { UploadAssignmentComponent } from './teacher-panel/upload-assignment/upload-assignment.component';
import { AssignmentListingComponent } from './teacher-panel/assignment-listing/assignment-listing.component';
import { AssignmentAdminComponent } from './teacher-panel/assignment-admin/assignment-admin.component';
import { UploadResultComponent } from './teacher-panel/upload-result/upload-result.component';
import { ResultListComponent } from './teacher-panel/result-list/result-list.component';
import { StudentPanel1Component } from './student-panel/student-panel1/student-panel1.component';
import { StudentFilterAssignmentComponent } from './student-panel/student-filter-assignment/student-filter-assignment.component';
import { StudentFilterResultComponent } from './student-panel/student-filter-result/student-filter-result.component';
import { UniDashboardComponent } from './dashboard/uni-dashboard/uni-dashboard.component';

const routes: Routes = [
 {
    path:'',component:HomeComponent
  },
  {
    path:'about',component:AboutComponent
  },
  {
    path:'contact',component:ContactComponent
  },
  {
    path:'courses',component:CoursesComponent
  },
  {
    path:'event',component:EventComponent
  },
  
  {
    path:'college',component:CollegeComponent
  },
  {
    path:'fscmedical',component:FscmedicalComponent
  },
  {
    path:'ics',component:IcsComponent
  },
  {
    path:'icom',component:IcomComponent
  },
  {
    path:'fa',component:FaComponent
  },
  {
    path:'bba',component:BbaComponent
  },
  {
    path:'bscs',component:BscsComponent
  },
  {
    path:'bsit',component:BsitComponent
  },
  {
    path:'bsse',component:BsseComponent
  },
  {
    path:'english',component:EnglishComponent
  },
  {
    path:'bsmath',component:BsmathComponent
  },
  {
    path:'zoology',component:ZoologyComponent
  },
  {
    path:'collegefees',component:CollegefeesComponent
  },
  {
    path:'feesbssebsitbscs',component:FeesBSSEBSITBSCSComponent
  },
  {
    path:'feezoology',component:FeezoologyComponent
  },
  {
    path:'feesenglish',component:FeesenglishComponent
  },
  {
    path:'feemathematics',component:FeemathematicsComponent
  },
  {
    path:'feesbba',component:FeesbbaComponent
  },
  {
    path:'criteria',component:CriteriaComponent
  },
  {
    path:'admissionform',component:AdmissionFormComponent
  },
  {
    path:'universitylist',component:UniversitylistComponent
  },
  {
    path:'editform/:id',component:EditformComponent
  },
  {
    path:'view/:id',component:ViewComponent
  },
  {
    path:'collegeform',component:CollegeadmissionformComponent
  },
  {
    path:'collegeformlist',component:CollegeformlistComponent
  },
  {
    path:'editcollegeform/:id',component:EditcollegeformComponent
  },
  {
    path:'collegeformview/:id',component:CollegeformviewComponent
  },
  {
    path:'login',component:LoginComponent
  },
  {
    path:'dashboard',component:DashboardComponent
    // ,canActivate:[AuthGuard]
  },
  
  {
    path:'interdashboard',component:InterdashboardComponent
  },
  {
    path:'universityapprove',component:UniprovedComponent
  },
  {
    path:'universityrejected',component:UnirejectedComponent
  },
  {
    path:'collegeapproved',component:CollegeapprovedComponent
  },
  {
    path:'collegerejected',component:CollegerejectedComponent
  },
  {
    path:'unreadmsglist',component:UnreadmsgComponent
  },
  {
    path:'message/:id',component:UnreadMsgViewComponent
  },
  {
    path:'readmsglist',component:ReadmsgComponent
  },
  {
    path:'msgdashboard',component:MsgdashboardComponent
  },
  {
    path:'signup',component:SignupComponent
  },
  {
    path:'student_login',component:StudentLoginComponent
  },
  {
    path:'panel',canActivate:[StudentGuardGuard],component:StudentPannelComponent
  },
  {
    path:'admin_signup',component:AdminSignupComponent
  },
  {
    path:'teacher_signup',component:TeacherSignupComponent
  },
  {
    path:'admin_login',component:AdminLoginComponent
  },
  {
    path:'teacher_login',component:TeacherLoginComponent
  },
  {
    path:'teacher_panel',component:TeacherPanelComponent
    // canActivate:[TeacherGuardGuard],
  },
  {
    path:'changepassword/:id',component:StudentPasswordChangeComponent
  },
  

{
  path:'uploadassignment', component:UploadAssignmentComponent
},
{
  path:'assignmentlisting', component:AssignmentListingComponent
},
{
  path:'assignmentadmin', component:AssignmentAdminComponent
},
{
  path:'uploadresult', component:UploadResultComponent
},
{
  path:'resultlist', component:ResultListComponent
},
{
  path:'studentpanel1', component:StudentPanel1Component
},
{
  path:'studentfilter', component:StudentFilterAssignmentComponent
},
{
  path:'sutdentfilterresult', component:StudentFilterResultComponent
},
{path:'unidashboard',component:UniDashboardComponent}
 
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
