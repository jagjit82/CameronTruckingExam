import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private baseUrl = environment.baseUrl+'/student';
  private baseUrl1 = '/camerondriveredu/export/student';

  constructor(private http: HttpClient) { }


  getStudent(email: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/email/${email}`);
  }

  createStudent(student: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/create`, student);
  }
  searchStudent(student: Object): Observable<any> {
    return this.http.post(`${this.baseUrl}/search`, student);
  }
  sumStudent(student: Object): Observable<any> {
    return this.http.post(`${this.baseUrl}/sumStudent`, student);
  }
  activateStudent(student: Object):Observable<any>{
    return this.http.post(`${this.baseUrl}/activatelog`,student);
  }
  deactivateStudent(student: Object):Observable<any>{
    return this.http.post(`${this.baseUrl}/deactivatelog`,student);
  }
  
  exportSearchStudent(student: Object){
    let authKey = sessionStorage.getItem('basicauth');
    const httpOptions = {
      responseType: 'blob' as 'json',
      headers: new HttpHeaders({
        'Authorization': authKey,
      })
    };
    //return this.http.get(`/ramdascoldchain/export/truck`,httpOptions);
    return this.http.post(this.baseUrl1,student, { headers: new HttpHeaders({
      'Authorization': 'bearer '+ sessionStorage.getItem('basicauth'),
      'Content-Type': 'application/json',
    }), responseType: 'blob'}).pipe (
    tap (
        // Log the result or error
        data => {console.log(data);
        var blob = new Blob([data], { type: 'application/vnd.ms-excel' });
        var url= window.URL.createObjectURL(blob);
        window.open(url);
        //error => console.log(error)}
        })
   );
  }

  updateStudent(student:object): Observable<Object> {
    return this.http.put(`${this.baseUrl}/update`, student);
  }

  deleteStudent(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }
  rejectstudent(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/rejectstudent/${id}`);
  }

  getStudentsById(id:number):Observable<any>{
    return this.http.get(`${this.baseUrl}/all/${id}`); 
  }
   
  getTotalPages():Observable<string>{
    return this.http.get<string>(`${this.baseUrl}/count`);
  }
  getSearchPageCount(student: Object):Observable<string>{
    return this.http.post<string>(`${this.baseUrl}/pageCount`,student);
  }
  getSearchedRecordsCount(student: Object):Observable<string>{
    return this.http.post<string>(`${this.baseUrl}/recordCount`,student);
  }
    
  getStudentsListPage(pageNum:number,sortField:string,sortOrder:string,company:string): Observable<any> {
    return this.http.get(`${this.baseUrl}/all/${pageNum}/${sortField}/${sortOrder}/${company}`);
  }
  getStudents(company:string): Observable<any> {
    return this.http.get(`${this.baseUrl}/all/${company}`);
  }
  
  allapprovals(company:string): Observable<any> {
    return this.http.get(`${this.baseUrl}/allapprovals/${company}`);
  }

  getStudentsList(): Observable<any> {
    return this.http.get(`${this.baseUrl}/all`);
  }

  createStudentResult(StudentResult: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/createstudentresult`, StudentResult);
  }

  updateStudentResult(StudentResult:object): Observable<Object> {
    return this.http.put(`${this.baseUrl}/updatestudentresult`, StudentResult);
  }

  deleteStudentResult(id: number):  Observable<any> {
    return this.http.delete(`${this.baseUrl}/studentresult/${id}`, { responseType: 'text' });
  }
  rejectStudentDeletion(id:number):Observable<any>{
    return this.http.get(`${this.baseUrl}/studentresult/rejectDeletion/${id}`, { responseType: 'text' });
  }
  getStudentResult(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/studentresult/${id}`);
  }
  getStudentResultListPage(company:string): Observable<any> {
    return this.http.get(`${this.baseUrl}/studentresult/all/${company}`);
  }
  getDeleteStudentResultListPage(company:string): Observable<any> {
    return this.http.get(`${this.baseUrl}/studentresult/alldelete/${company}`);
  }
  
  //Student Logs below
  
  createStudentLog(studentLog: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/createstudentlog`, studentLog);
  }

  updateStudentLog(studentLog:object): Observable<Object> {
    return this.http.put(`${this.baseUrl}/updatestudentlog`, studentLog);
  }

  deleteStudentLog(id: number):  Observable<any> {
    return this.http.delete(`${this.baseUrl}/studentlog/${id}`, { responseType: 'text' });
  }
  getStudentLog(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/studentlog/${id}`);
  }
  getStudentLogListPage(company:string): Observable<any> {
    return this.http.get(`${this.baseUrl}/studentlog/all/${company}`);
  }
  
  //End Student Logs

  createStudentCourse(studentCourse: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/createstudentcourse`, studentCourse);
  }
  createStudentCourseDetails(studentCourseDetails: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/createstudentcoursedetails`, studentCourseDetails);
  }
  updateStudentCourse(studentCourse:object): Observable<Object> {
    return this.http.put(`${this.baseUrl}/updatestudentcourse`, studentCourse);
  }

  deleteStudentCourse(id: number):  Observable<any> {
    return this.http.delete(`${this.baseUrl}/studentcourse/${id}`, { responseType: 'text' });
  }
  deleteStudentCourseDetails(id: number):Observable<any> {
    return this.http.delete(`${this.baseUrl}/studentcoursedetails/${id}`, { responseType: 'text' });
  }
  rejectStudentCourse(id:number):Observable<any>{
    return this.http.get(`${this.baseUrl}/studentcourse/rejectDeletion/${id}`, { responseType: 'text' });
  }
  getStudentCourse(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/studentcourse/${id}`);
  }
  getStudentCourseListPage(company:string): Observable<any> {
    return this.http.get(`${this.baseUrl}/studentcourse/all/${company}`);
  }
  getDeleteStudentCourseListPage(company:string): Observable<any> {
    return this.http.get(`${this.baseUrl}/studentcourse/alldelete/${company}`);
  }
  getStudentHoursWorked(id:number):Observable<string>{
    return this.http.get<string>(`${this.baseUrl}/studenthourlog/${id}`);
  }
}
