import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent {
  public formData = this.formBuilder.group({
    name: ['', Validators.required],
    age:['', Validators.required]
  })
  constructor(private common:CommonService, private formBuilder: FormBuilder){}
  public onSubmit():void{
    console.log('submit from: name = ' + this.formData);
    this.common.submitData(this.formData.value)

  }
}
