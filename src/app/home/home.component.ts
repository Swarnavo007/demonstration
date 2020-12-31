import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private _service:HomeService,private fb:FormBuilder) { }

  public details=[];

  createForm=this.fb.group({
    name:['',[Validators.required,Validators.pattern(/^[a-zA-Z0-9]{4,10}$/)]],
    age:['',Validators.required]
  })

  ngOnInit(): void {
    
  }

  onSubmit(){
    console.log(this.createForm.value);
    this._service.createDetails(this.createForm.value);
  }


}
