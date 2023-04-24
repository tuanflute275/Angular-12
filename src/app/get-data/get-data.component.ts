import { Component, OnInit } from '@angular/core';
import { HttpServerService } from '../services/http-server.service';

@Component({
  selector: 'app-get-data',
  templateUrl: './get-data.component.html',
  styleUrls: ['./get-data.component.scss'],
})
export class GetDataComponent implements OnInit {
  constructor(private httpServerService: HttpServerService) {}

  public ngOnInit(): any {
    this.httpServerService.getComments().subscribe((data) => {
      console.log('getComments', data);
    });

    this.httpServerService.getRandomUsers(5).subscribe((data) => {
      console.log('getRandomUsers', data.results);
    });
  }
}
