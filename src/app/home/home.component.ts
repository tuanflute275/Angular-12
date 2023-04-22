import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public name = 'tuna';
  public age = 18;
  public traicay = ['táo', 'nho', 'xoai']
  public traicay2 = [
    { ten: 'táo', gia: 15, hagia: 6, dhg: true },
    { ten: 'nho', gia: 10, hagia: 0, dhg: true },
    { ten: 'xoài', gia: 8, hagia: -1, dhg: true },
    { ten: 'mít', gia: 20, hagia: 10, dhg: false },
    { ten: 'cam', gia: 18, hagia: 18, dhg: false },
  ]

  constructor() { }

  public ngOnInit(): void {
  }
}
