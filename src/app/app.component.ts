import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  profile = {
    image: 'assets/img2.jpg',
    name: 'Kalyani Pawde',
    title: 'Business Analyst | Scrum master | LinkedIn Top Agile Methologies Voice 2024'
  };

  basicInfo = {
    email: 'Kalyanipawde@gmail.com',
    phone: '+1-6479153524',
    address: 'Toronto, Ontario, Canada',
    language: 'English, Hindi, Deutsch, French'
  };

  handleFormSubmission(data: any) {
    console.log('Form Submitted:', data);
    // Handle the form submission logic here
  }
}
