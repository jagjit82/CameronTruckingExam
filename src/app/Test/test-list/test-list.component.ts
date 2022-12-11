import { Observable } from "rxjs";

import { Component, OnInit, Input } from "@angular/core";
import { Router } from '@angular/router';
import { CommonService } from "app/common/common.service";
import { Test } from "../test";
import { TestService } from "../service/test.service";
import { Student } from "app/student/student";
import { QuestionService } from "app/question/service/question.service";
import { Question } from "app/question/question";
import { TestResultDetail } from "../testresultdetail";
import { TestResult } from "../testresult";

@Component({
  selector: "app-Test-list",
  templateUrl: "./test-list.component.html",
  styleUrls: ["./test-list.component.css"],
  providers:[TestService]
})
export class TestListComponent implements OnInit {
  questions: Observable<Question[]>;
  email:string=sessionStorage.getItem('student');
  test:string=sessionStorage.getItem('test');
  testResult:TestResult;
  count:number=0;
  question:Question;
  size:number=0;
  checkedFlag:boolean=false;
  disableFlag:boolean=false;
  checkA:boolean=false;
  checkB:boolean=false;
  checkC:boolean=false;
  checkD:boolean=false;
  //items: any[] = [];
  constructor(private questionService:QuestionService,private commonService:CommonService,
    private router: Router,private testService:TestService) {}

  ngOnInit() {
     this.questionService.getAllQuestionsByTest(this.test).subscribe(
      data=>{
        this.questions=data;
        this.questions.forEach(res=>{this.size++});
        sessionStorage.setItem('questionCount',this.size.toString());
      }
    );
    let testResultId:string=sessionStorage.getItem('testResult');
    this.testService.getTestResultById(testResultId).subscribe(
      data=>{
        this.testResult=data;
      }
    ); 
    }

  next(){
    if(this.count<this.size){
      this.count++;
    }
    this.resetAll();  
  }
 
  radioClick(question:Question,answer:string){
    this.disableFlag=true;
    let testResultDetail:TestResultDetail= new TestResultDetail();
    testResultDetail.question=question;
    testResultDetail.answer=answer;
    testResultDetail.testResult=this.testResult;
    this.setCheckFlag(question.correctAnswer);
    if(question.correctAnswer==answer){
      testResultDetail.correct=1;
    }
    this.testService.createTestResultDetail(testResultDetail).subscribe(data=>{});
    
  }
    
  setCheckFlag(answer:string){
    if(answer=="optionA"){
      this.checkA=true;
    }else if(answer=="optionB"){
      this.checkB=true;
    }else if(answer=="optionC"){
      this.checkC=true;
    }else{
      this.checkD=true;
    }
  }
  resetAll(){
    this.disableFlag=false;
    this.checkedFlag=false;
    this.checkA=false;
    this.checkB=false;
    this.checkC=false;
    this.checkD=false;
    this.checkedFlag=false;
    this.question=null;
  }
  submit(){
    this.router.navigate(['/testSummary']);
    this.questionService.getAllQuestionsByTest(this.test).subscribe(
      data=>{
        this.questions=data;
        this.questions.forEach(res=>{this.size++});
      }
    );
  }
  }
  