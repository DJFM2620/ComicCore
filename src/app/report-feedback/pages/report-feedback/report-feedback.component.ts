import { Component } from '@angular/core';

interface Ireport {

  email: string;
  user: string;
  option: string;
  description: string;
}

@Component({
  selector: 'app-report-feedback',
  templateUrl: './report-feedback.component.html',
  styleUrls: ['./report-feedback.component.css']
})

export class ReportFeedbackComponent {

  report = {

    email: '',
    user: '',
    option: 'Sugerencia',
    description: ''
  }

  onSubmit(){

    console.log("Los datos son: \n email -> " + this.report.email + 
                "\n user -> " + this.report.user + 
                "\n option -> "+ this.report.option +
                "\n description ->"+ this.report.description);
  }
}
