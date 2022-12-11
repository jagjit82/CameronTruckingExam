import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authorization/authentication.service';
import { Company } from 'app/company/company';
import { Observable } from 'rxjs';
import { CommonService } from 'app/common/common.service';
import { StudentService } from 'app/student/studentservice';
import { TestService } from 'app/Test/service/test.service';
import { Student } from 'app/student/student';
import { Test } from 'app/Test/test';
import { TestResult } from 'app/Test/testresult';
import { QuestionService } from 'app/question/service/question.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email='';
  student:Student;
  test:Test;
  temp:string="temp";
  questionsCount:number=0;
  testResult:TestResult;
  invalidLogin = false
  company:Company=null;
  tests:Test[];
  id:number;
  
  constructor(private router: Router,
    private loginservice: AuthenticationService,private questionService:QuestionService,private commonService:CommonService,private studentService:StudentService,private testService:TestService) { }

  ngOnInit() {
    }
  getTests(){
    sessionStorage.removeItem('testResult');
    this.studentService.getStudent(this.email).subscribe(data=>{
      this.student=data;

      this.testService.gettestsList(this.student.company.company).subscribe(data=>{
          this.tests=data;
          sessionStorage.setItem('student',this.student.email);
      },error=>{
        this.commonService.showErrorNotification('top','center',"tests not found.");
      })
    })
  }

  checkLogin() {
    console.log(this.company);
    if(this.email==null || this.email=="" ){
      this.commonService.showErrorNotification('top','center',"Email is blank.");
    }
    this.id=this.test.id;
    sessionStorage.setItem('test', this.id.toString());
    this.questionService.getTestQuestionsCount(this.test.id).subscribe(
      data=>{
        this.questionsCount=data;
     
    let testResult:TestResult=new TestResult();
    testResult.student=this.student;
    testResult.test=this.test;
    testResult.questionCount=this.questionsCount;
    this.testService.createTestResult(testResult).subscribe(res=>{
      this.testResult=res;
      sessionStorage.setItem('testResult', this.testResult.id.toString());
      this.router.navigate(['/testList']);
    });
  }
  );

    //else
  //   if(this.company==null){
  //     this.commonService.showErrorNotification('top','center',"Please select the Company.");
  // //   }else if (this.loginservice.authenticate(this.username, this.password,this.company.company)
  //   ) {
  //     this.loginservice.getUser();
  //     this.invalidLogin = false;
  //     this.router.navigate(['/listVehicle'])
  //     } else
  //     this.invalidLogin = true
  // }
    
  }
}