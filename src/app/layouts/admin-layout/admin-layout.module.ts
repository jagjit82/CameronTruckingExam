import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';

import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatSelectModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatCheckboxModule,
  MatRadioModule,
  
} from '@angular/material';
import { LogoutComponent } from 'app/logout/logout.component';
import { TestListComponent } from 'app/Test/test-list/test-list.component';
import { LoginComponent } from 'app/login/login.component';
import { TestSummaryComponent } from 'app/Test/test-summary/test-summary.component';
//import { AgmCoreModule } from '@agm/core';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    MatButtonModule,
    MatRadioModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    MatCheckboxModule,
    MatDatepickerModule, MatInputModule,MatNativeDateModule,
    // AgmCoreModule.forRoot({
    //   apiKey: 'AIzaSyDgpd3g079X0QBeZV0MuWGWyP2yj-qtPpw'
    // })
    
  ],
  declarations: [
    DashboardComponent,
    LogoutComponent,
    UserProfileComponent,
    TableListComponent,
    TypographyComponent,
    IconsComponent,
    UpgradeComponent,
    TestListComponent,
    TestSummaryComponent

    //TestListComponent,
    //LoginComponent
    
  ],
  
  
})

export class AdminLayoutModule {}
