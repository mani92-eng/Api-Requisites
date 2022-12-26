import { Injectable } from '@angular/core';
import{HttpClient}from '@angular/common/http'
import { map, Observable,throwError } from 'rxjs';
import { Employee, Departments } from './employee';
import { catchError } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class EmployeeinfoService {

  constructor(private http:HttpClient) { }

geEmployee():Observable <Employee[]>{
  return this.http.get<Employee[]>(`http://localhost:3000/posts`).pipe(
    catchError(this.errormesageIs),
    map(
      (res:any)=>{
        return this.geEmployee=res;
      }
    )
  );
  

}

geDeparts(): Observable <Departments[]> {
  return this.http.get<Departments[]>(`http://localhost:3000/Departments`).pipe(
    map(
      (res:any)=>{
        return this.geDeparts=res;
      }
    )
  );

}

AddEmpoyee(emp: Employee,){
return  this.http.post(`http://localhost:3000/posts/`,emp).pipe(
    map(
      (res:any)=>{
        return res;
      }
    )
  );

}

editEploye(emp:Employee,){
  return this.http.post(`http://localhost:3000/profile`,emp).pipe(
    map(
      (res:any)=>{
        return res;
      }
    )
  )

}

errormesageIs(error:any){
  let errormessage='';
  errormessage=errormessage + 'Status :' + error.message;
  return throwError(errormessage);
  

}



}


