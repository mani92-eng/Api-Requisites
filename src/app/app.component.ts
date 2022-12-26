import { Component,OnInit } from '@angular/core';
import { EmployeeinfoService } from './employeeinfo.service';
import { Employee } from './employee';
import { FormBuilder, FormGroup, FormControl , Validator, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
[x: string]: any;
  title = 'a';
  emplist!:any;
  deptlist!:any;
  myform:any=FormGroup;
  submited:boolean=false;
  res: any;
 


  constructor(private employeeinfo:EmployeeinfoService,private fbuilder:FormBuilder){
   
  }

  ngOnInit(){



    this.myform=this.fbuilder.group({
      first_name : new FormControl("",Validators.required),
      last_name : new FormControl("",Validators.required),
      Gender : new FormControl("",Validators.required),
      email :new FormControl("",Validators.required),
      dptname :new FormControl("",Validators.required)

    });
    this.geempdata();


    
    this.employeeinfo.geDeparts().subscribe(
      (res:any)=>{
        this.deptlist=res;
        console.log(res);
      }
    )
    

 
  }
  submit(){
    this.submited=true;

    if(this.myform.invalid)
    {
      alert ("please Fill All Filds")
      return;
    }
   

 if(this.myform.value["Gender"] =="FeMale")this.myform.value["Gender"]=false;
 return this.myform.value['Gender']=true,

 this.employeeinfo.AddEmpoyee(this.myform.value).subscribe(
  (x:any)=>{
    console.log(x);
    if(x["flag"]==true) alert("success")

    alert("Succuss");
    this.myform.controls["Gender"].setValue("");
    this.myform.reset();
    this.submited=false;
    this.geempdata();
    
    
   
  },
  error=>{
    alert("data not add");
  }
  
  
 );


  }
  geempdata(){
    this.employeeinfo.geEmployee().subscribe(
      res=>{
        this.emplist=res;

        
        
        console.log(res);
        this.geempdata();
        
      },error=>{
        console.log(error);
        alert(error)
      }
    );
  }

  
  
  Edit(emp:Employee){
    alert(emp);
    this.myform.value['id']=emp;
    console.log(this.myform.value);
    this.employeeinfo.editEploye(this.myform.value).subscribe(
      (res)=>{
        this.myform.setValue({
          first_name:res.first_name,
          last_name:res.last_name,
          Gender:res.Gender,
          email:res.email,
          dptname:res.dptname,
          
        })
       
        })
    
      
      }
    
   
      
  }



  

 



