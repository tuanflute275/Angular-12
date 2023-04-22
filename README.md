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

  -->dùng if then này sẽ tạo dk cho cả một khối luôn chứ k phải là từng dòng như *ngIF ở trên
  -->ví dụ với user và admin áp dụng cái này khi là user thì hiển thị component về user và ngược lại

##  Data Binding - *ngFor - Viết vòng lặp trong HTML
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


