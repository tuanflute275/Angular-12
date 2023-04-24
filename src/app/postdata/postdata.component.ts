import { Component, OnInit } from '@angular/core';
import { HttpServerService } from '../services/http-server.service';

@Component({
  selector: 'app-postdata',
  templateUrl: './postdata.component.html',
  styleUrls: ['./postdata.component.scss']
})
export class GetDataComponent implements OnInit {
  constructor(private httpServerService: HttpServerService) {}

  public ngOnInit(): any {
    const payload = {/*nội dung body cần post */}
    this.httpServerService.postComments(payload).subscribe(data=>{
      console.log('post comment :', data);

    })
  }
}


export class PostdataComponent {

}

