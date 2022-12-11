import { Observable } from "rxjs";

import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import { CommonService } from "app/common/common.service";
import { Test } from "../test";
import { TestService } from "../service/test.service";
import { TestResult } from "../testresult";
import { TestResultDetail } from "../testresultdetail";
import { count } from "rxjs/operators";

@Component({
  selector: "app-Test-list",
  templateUrl: "./test-summary.component.html",
  styleUrls: ["./test-summary.component.css"],
  providers:[TestService]
})
export class TestSummaryComponent implements OnInit {
  tests: Observable<Test[]>;
  correctAns:number=0;
  questionCount:string=sessionStorage.getItem('questionCount');
  testResultDetails: Observable<TestResultDetail[]>;
  email:string=sessionStorage.getItem('student');
  test:string=sessionStorage.getItem('test');
  
  //items: any[] = [];
  constructor(private testService: TestService,private commonService:CommonService,
    private router: Router) {}

  ngOnInit() {
    let testResultId:string=sessionStorage.getItem('testResult');
    this.testService.getTestResultDetailById(testResultId).subscribe(
      data=>{
        this.testResultDetails=data;
        for(let a of data){
          this.correctAns+=a.correct;
        }
        console.log("val is"+this.correctAns);
      })
  }

  }
  