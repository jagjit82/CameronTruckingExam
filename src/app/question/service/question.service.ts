import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { RequestOptions, ResponseContentType } from '@angular/http';
import { tap } from 'rxjs/operators';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  private baseUrl = environment.baseUrl+'/exam';
  private baseUrl1 ='/export/question'; 

  constructor(private http: HttpClient) { }

  
  getAllQuestionsByTest(test:string): Observable<any> {
    return this.http.get(`${this.baseUrl}/allTestQuestion/${test}`);
  }
  getTestQuestionsCount(test:number): Observable<any> {
    return this.http.get(`${this.baseUrl}/testQuestionCount/${test}`);
  }
  
  testResultByMailTest(mail:string,test:string): Observable<any> {
    return this.http.get(`${this.baseUrl}/testresultbymailtest/${mail}/${test}`);
  }
  

}
