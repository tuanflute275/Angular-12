import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public qrInfo = 'https://www.facebook.com/profile.php?id=100047425502024'
  public baseInfo = ''
  public with = 200;
  public color = 'white'
  public name: any = ''
  public age: any = 18
  public counter = 0;
  public counterBinhPhuong = 0;

  constructor(private common: CommonService) { }

  public ngOnInit(): void {
    this.counter = this.common.counter;
    this.counterBinhPhuong = this.common.binhPhuong(this.counter);
    this.common.counter++;
  }
  public change(event: any): void {
    console.log('event ', event.target.value);
    this.qrInfo = event.target.value
  }
}
