import { Component, OnInit } from '@angular/core';
import { StakaterServiceService } from './stakater-service.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [StakaterServiceService]
})
export class AppComponent implements OnInit{
  title = 'stackater-frontend';
  greetings: string = '';
  constructor(private stakaterService: StakaterServiceService,
    private datePipe: DatePipe) {}

  ngOnInit(): void {
    this.getGreetings();
  }
 

  getGreetings() {
    this.stakaterService.getGreetings().subscribe((response) => {
      this.greetings = this.datePipe.transform(new Date(), 'dd/MM/yyyy HH:mm') + ' ' + response;
    });
  }
}
