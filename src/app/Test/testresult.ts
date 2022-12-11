import { Company } from "app/company/company";
import { Test } from "./test";
import { Student } from "app/student/student";
import { Observable } from "rxjs";

export class TestResult {
   id: number;
   test:Test;
   student:Student;
	createdDate:string;
	modifiedDate:number;
   status:string;
   questionCount:number;
   testResDetailList:Observable<TestResult[]>;
}
