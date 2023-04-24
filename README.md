## cài đặt môi trường

      bước 1: npm i angular -g
      bước 2: npm i -g @angular/cli @angular/core
      bước 3: tạo project angular bằng câu lệnh trong cmd của máy
        -- ng new tên_dự_án
        --ví dụ: ng new project_angular
      bước 4: di chuyển vào file project_angular bằng câu lệnh cd project_angular
      bước 5: mở file bằng câu lệnh : ng serve --open

## Component là gì ?

    --> tạo component: ng generate component tên_component   ____ viết tắt : ng g c tên
    -->ví dụ: ng g c Home

    ---> component dc coi như một khối như div vậy nhưng nó dc viết riêng lẻ ra
    để sử dựng ta chỉ cần đưa khối div này vào

    ==>vào thư mục home vừa tạo tìm tới file ts chính k có spec
    --->thấy phần selector có tên app-home -->vậy app-home ở đây sẽ dc coi như 1 div
    --->để sử dụng ta chèn như sau <app-home></app-home> -->như vậy là dùng dc r
    -->ở đây ta chèn vào file app.component.html

## Build - Deploy- Xây dựng và ra sản phẩm lên GitHub và Web riêng

    step1: ng build

## Module - Mô-đun là gì ?

- là tập hợp các component vào một chỗ
  --ví dụ các component về user thì 1 module riêng, các component về admin thì 1 module riêng
  --- nó sẽ xử lí khi là user thì chỉ hiển thị component về uservaf ngược lại

## Data Binding - Value - Kết nối giá trị từ code ra HTML

để kết nối dữ liệu từ file ts ra html thì trong file html ta dùng dấu {{tên_biến_trong_ts}}

ví dụ: trong file html:

  <h2>chào bạn {{name}}</h2>

trong file ts
public name = 'tuna';

---

## Data Binding - Value - Kết nối giá trị từ code ra HTML vào thẻ Input ...

**cách1**
--->cơ bản vẫn dùng dấu {{tên_biến}} để trong giá trị của value
**cách 2**
<input type="text" [value]="name" name="" id="">
--->đóng ngoặc vuông value và giá trị vẫn là biến trong ts

**cách3**
<input type="text" [value]="name" title="'đây là' + name" name="" id="">
--->dùng pp cộng chuỗi để ngoặc vuông value hoặc ngoặc xoắn tên biến đều dc

## Data Binding - \*ngIf

*** câu lệnh *ngIf giống như là if bthg của ngôn ngữ khác nhưng cách viết k giống viết thẳng vào html **
---> có thể kết hợp nhiều dk như: \*ngIf="age < 18 && name ='tuan' "

**_ví dụ_**

<h2 *ngIf="age < 18">bạn rất trẻ</h2>
<h2 *ngIf="age > 18">bạn đã già</h2>

## Events binding - ngModel - Two-way binding - Liên kết 2 chiều

<button (click)="resetName()">Reset Tên</button>
--->bắt sự kiện trong thẻ html như bthg và khởi tạo function trong file ts của nó --->hiển thị từ ts - html

<input type="text" [(ngModel)]="name" >
----> thêm ngModel như trên để lấy dữ liệu từ html - ts - html
-->khi thêm ngModel vào sẽ lỗi ta cần import thư viện from vào file app.model
import { FormsModule } from '@angular/forms'; --> thêm vào cả import phía dưới
---->imports: [
BrowserModule,
AppRoutingModule,
FormsModule
],

## ng-template - Viết if then else trong HTML

    <input type="text" [(ngModel)]="age">
    <h3>Tuổi của bạn là {{age}}</h3>
     <div *ngIf='age <= 18; then tre; else gia'></div>
    <ng-template #tre><h2>bạn rất trẻ</h2></ng-template>
     <ng-template #gia><h2>bạn đã già</h2></ng-template>

-->dùng if then này sẽ tạo dk cho cả một khối luôn chứ k phải là từng dòng như \*ngIF ở trên
-->ví dụ với user và admin áp dụng cái này khi là user thì hiển thị component về user và ngược lại

## Data Binding - \*ngFor - Viết vòng lặp trong HTML

<div *ngFor="let item of traicay, let i = index">
    <li>{{i+1}}.{{item}}</li>
  </div>
---------------
trong file ts khai báo mảng traicay: public traicay = ['táo', 'nho', 'xoai']
==========
trong html dùng *ngFor để loop mảng traicay
*ngFor="let item of traicay, let i = index"
--->hiển thị dữ liệu ra bằng dấu {{}}

## câu lệnh [ngClass]

      <td><span [ngClass]="{'red':item.hagia<=0}">{{item.hagia}}</span></td>

---> [ngClass]="{'thuộc tính css':dkien}"

## Pipe - Định dạng dữ liệu trong HTML. Cách dùng + viết Pipe riêng

--các hàm có sẵn hoặc mình tự viết riêng
currency:'USD':'symbol':'1.2' ==> thêm kí hiệu tiền symbol: lấy bn số thập phân
--các hàm như uppercase, lowercase, number ->ép về số, currency:'USD':'symbol':'1.2'
===>cách dùng như sau
<td>{{item.ten | uppercase | gì gì đó..}}</td>
-->sau mỗi chỗ muốn dùng pipe thì viết sau dấu | có thể viết nhiều pipe 1 lúc dc

**cách tạo pipe**
ng generate pipe tên_pipe
----> ví dụ ng g p OnSale

## Cascading ComboBox. Viết danh sách chọn tỉnh/thành rồi quận/huyện

## routing setup

----- trong file app-routing cần định nghĩa đường dẫn cho nó
const routes: Routes = [{ path: 'about', component: AboutComponent },
{ path: 'home', component: HomeComponent },
{ path: '', component: HomeComponent },
{ path: '**', component: PageNotFoundComponent }, // Wildcard route for a 404 page
];
--trong file app-html chỉ ra dc dẫn cho nó
<!-- <h1>welcome to angular_12</h1>
      <nav>
        <ul>
          <li><a routerLink="/about" routerLinkActive="active" ariaCurrentWhenActive="page">About</a></li>
          <li><a routerLink="/home" routerLinkActive="active" ariaCurrentWhenActive="page">Home</a>
          </li>
        </ul>
      </nav>
      <router-outlet></router-outlet> -->

## ngSwitch. Dùng cho sự lựa chọn trong HTML

[ngSwitch]="loginName" -->các case của loginName ->nếu vào case nào hiện ra case đó ->if else dùng cho ít trường hợp . switch case dùng cho nhiều trg hợp
*ngSwitchCase="'user'" ->case user ->nếu loginName = user thì hiện cái componennt này
*ngSwitchCase="'admin' ->case admin ->nếu loginName = admin thì hiện cái componennt này
\*ngSwitchDefault --->k thuộc hai trg hợp trên thì vào cái mặc định

**ví dụ**
file ts --->loginName = admin

      <!-- <p>about works!</p>
      <ul [ngSwitch]="loginName">
        <li *ngSwitchCase="'user'">
          <p>User is logged in..</p>
        </li>
        <li *ngSwitchCase="'admin'">
          <p>admin is logged in</p>
          <app-home></app-home>
        </li>
        <li *ngSwitchDefault>
          <p>Please choose login name</p>
        </li>
      </ul> -->


## attribute directives

---> tạo directives: ng g directive Directives/HightLight
  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    this.el.nativeElement.style.color = this.appHighLight;
  }

--->ts public myColor = 'red';
-->html : <p [appHighLight]="'orange'">about works!</p>


## qr code Angular
----npm i angular2-qrcode
**html**
    <!-- qr code
    <label for="">base url</label>
    <input type="text" (change)="change($event)">
    <br>
    <p>{{qrInfo}}</p>
    <qr-code [value]="qrInfo" [size]="with" [background]="color"></qr-code> -->
**ts**
    public qrInfo = 'https://www.facebook.com/profile.php?id=100047425502024'
    public baseInfo = ''
    public with = 200;
    public color = 'white'
    public name: any = ''
    public age: any = 18

    constructor() { }

    public ngOnInit(): void {
    }
    public change(event: any): void {
      console.log('event ', event.target.value);
      this.qrInfo = event.target.value
    }

## Service - Dịch vụ như tiệm tạp hóa. Cách viết + xài Services
ng g service services/common
--services giống như tiệm tạp hóa cung cấp các chức năng cho chương trình
--component nào muốn sử dụng chỉ cần gọi nó vào 
------> ví dụ sử dụng trong component about 
  public counter = 0;

    constructor(private common: CommonService) { }

    ngOnInit(): void {
      this.counter = this.common.counter
    }


## Reactive Form - Model-Driven Form.
import { ReactiveFormsModule } from '@angular/forms';
---> trong file app.model
--định nghĩa router cho nó 

**html**
    <!-- <form [formGroup]="formData" (ngSubmit)="onSubmit()">
      name: <input type="text" formControlName="name">
      <br>
      age: <input type="text" formControlName="age">
      <br>
      <button type="submit">submit</button>
    </form> -->

**ts**
      public formData: FormGroup = new FormGroup({
        name: new FormControl(''),
        age: new FormControl('')
      })
      constructor(private common:CommonService){}
      public onSubmit():void{
        console.log('submit from: name = ' + this.formData);
        this.common.submitData(this.formData.value)
      }

***form builder***
$$ html
    <form [formGroup]="formData" (ngSubmit)="onSubmit()">
      name: <input type="text" formControlName="name">
      <div *ngIf="!formData.controls.name.valid" style="color: red;">Name is require!</div>
      <br>
      age: <input type="text" formControlName="age">
      <div *ngIf="!formData.controls.age.valid" style="color: red;">Age is require!</div>

      <br>
      <button type="submit" [disabled]="!formData.valid">submit</button>
    </form>

$$ ts
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

## Http GET method - Observable



