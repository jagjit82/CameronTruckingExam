import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { RequestOptions, ResponseContentType } from '@angular/http';
import { tap } from 'rxjs/operators';
import { environment } from 'environments/environment';
import { TestResult } from '../testresult';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  private baseUrl = environment.baseUrl+'/exam';
  private baseUrl1 ='/export/test'; 

  constructor(private http: HttpClient) { }

  
  
  getTestsById(id: number):Observable<any>{
    return this.http.get(`${this.baseUrl}/tests/${id}`);
  }
  
  gettestsList(email:string): Observable<any> {
    return this.http.get(`${this.baseUrl}/all/${email}`);
  }
  

  createTestResult(testResult: TestResult): Observable<TestResult> {
    return this.http.post<TestResult>(`${this.baseUrl}/testresultcreate`, testResult);
  }
  createTestResultDetail(testResultDetail: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/testresultdetailcreate`, testResultDetail);
  }
  getTestResultById(id: string):Observable<any>{
    return this.http.get(`${this.baseUrl}/testresult/${id}`);
  }
  getTestResultDetailById(id: string):Observable<any>{
    return this.http.get(`${this.baseUrl}/testresultdetail/${id}`);
  }
  
}
