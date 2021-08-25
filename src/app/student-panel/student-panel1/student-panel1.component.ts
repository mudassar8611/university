import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-panel1',
  templateUrl: './student-panel1.component.html',
  styleUrls: ['./student-panel1.component.css']
})
export class StudentPanel1Component implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }


assignmentfilter(){
this.router.navigate(['/studentfilter']);
}

resultfilter(){
this.router.navigate(['/sutdentfilterresult']);
}

}
