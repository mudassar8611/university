import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Signup } from '../signup.model';

@Component({
  selector: 'app-student-pannel',
  templateUrl: './student-pannel.component.html',
  styleUrls: ['./student-pannel.component.css']
})
export class StudentPannelComponent implements OnInit {
  readonly rootUrl = 'http://localhost:64848/';
  
  
  constructor(private router:Router,private http: HttpClient) { }

  ngOnInit(): void {
   
  }


}
