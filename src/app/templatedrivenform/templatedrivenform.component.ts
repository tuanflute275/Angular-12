import { Component } from '@angular/core';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-templatedrivenform',
  templateUrl: './templatedrivenform.component.html',
  styleUrls: ['./templatedrivenform.component.scss']
})
export class TemplatedrivenformComponent {
  public name = ''
  public age = ''
  constructor(private common:CommonService){}
  public submitForm(): void{
    console.log('submit form: ', this.name);
    this.common.submitData(this.name)
    this.common.submitData({name:this.name, age:this.age})
  }
}
