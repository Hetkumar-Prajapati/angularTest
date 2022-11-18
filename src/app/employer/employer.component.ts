import { Component } from '@angular/core';

// class for employer 
export class Employer{
  id: number | undefined
  name: string | undefined
  location: string | undefined
}


@Component({
  selector: 'app-employer',
  templateUrl: './employer.component.html',
  styleUrls: ['./employer.component.css']
})
export class EmployerComponent {
  // array for employers
  EMPLOYERS: Employer[] = [
   { id: 500, name:'Ministry of Community ans Social Services', location: 'North York'},
   { id: 501, name:'CIBC', location: 'Toronto'},
   { id: 502, name:'Rogers', location: 'Barrie'},
  ]

selectedEmployer:Employer | undefined
  onSelect(employer: Employer):void {
    this.selectedEmployer = employer
    console.log(this.selectedEmployer)
  }
}

reset(): void{
  this.selectedEmployer= undefined
}