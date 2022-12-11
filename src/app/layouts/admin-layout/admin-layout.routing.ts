import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { AuthGaurdService } from 'app/authorization/auth-gaurd.service';
import { LogoutComponent } from 'app/logout/logout.component';
import { TestListComponent } from 'app/Test/test-list/test-list.component';
import { TestSummaryComponent } from 'app/Test/test-summary/test-summary.component';


export const AdminLayoutRoutes: Routes = [
    // {
    //   path: '',
    //   children: [ {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // }]}, {
    // path: '',
    // children: [ {
    //   path: 'userprofile',
    //   component: UserProfileComponent
    // }]
    // }, {
    //   path: '',
    //   children: [ {
    //     path: 'icons',
    //     component: IconsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'maps',
    //         component: MapsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'typography',
    //         component: TypographyComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'upgrade',
    //         component: UpgradeComponent
    //     }]
    // }
   { path: 'logout', component: LogoutComponent },
    { path: 'instructor',      component: DashboardComponent ,canActivate:[AuthGaurdService]},
    { path: 'dashboard',      component: DashboardComponent ,canActivate:[AuthGaurdService]},
    { path: 'user-profile',   component: UserProfileComponent ,canActivate:[AuthGaurdService]},
    { path: 'table-list',     component: TableListComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'upgrade',        component: UpgradeComponent },
    { path: 'testList',        component: TestListComponent },
    { path: 'testSummary',        component: TestSummaryComponent },
  
 
];
