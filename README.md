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

    