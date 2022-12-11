import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';


import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';

// import {
//   AgmCoreModule
// } from '@agm/core';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BasicAuthHtppInterceptorService } from './authorization/basic-auth-htpp-interceptor.service';
import { MatDialogModule, MatDatepickerInput, MatOption, MatOptionModule, MatSelectModule, MatCheckboxModule, MatRadioButton, MatRadioModule } from '@angular/material';
import { LoginComponent } from './login/login.component';
import { TestListComponent } from './Test/test-list/test-list.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    MatDialogModule,
    MatOptionModule,
    MatSelectModule,
    MatCheckboxModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    MatRadioModule
    
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    LoginComponent,
    

  ],
  providers: [{ provide:HTTP_INTERCEPTORS, useClass:BasicAuthHtppInterceptorService, multi:true }],
  bootstrap: [AppComponent],

})
export class AppModule { }
