/**
* * (Input)
* Ô nhập mảng số nguyên (id="arrayInput").
* Tạo giao diện HTML với các ô nhập liệu:
* Ô nhập vị trí đổi chỗ (id="pos1", id="pos2").
* Ô nhập mảng số thực (id="floatArrayInput").
* Nút bấm để gọi các hàm xử lý (ví dụ: nút "Tính tổng số dương", "Đổi chỗ", ...).
* Lấy dữ liệu từ giao diện bằng JavaScript:
* Dùng document.getElementById(...).value để lấy giá trị người dùng nhập.
* * (Process)
* Xử lý dữ liệu đầu vào:
* Chuyển chuỗi nhập thành mảng số bằng .split(/\s+/).map(Number).
* Lọc bỏ giá trị không phải số với .filter(n => !isNaN(n)).
* Viết các hàm xử lý cho từng chức năng:
* Tính tổng số dương: .filter(x => x > 0).reduce(...).
* Đếm số dương: .filter(x => x > 0).length.
* Tìm số nhỏ nhất: Math.min(...arr).
* Tìm số dương nhỏ nhất: lọc số dương rồi dùng Math.min.
* Tìm số chẵn cuối cùng: duyệt mảng từ cuối lên, kiểm tra % 2 === 0.
* Đổi chỗ: kiểm tra vị trí, dùng destructuring [a, b] = [b, a].
* Sắp xếp tăng dần: .sort((a, b) => a - b).
* Tìm số nguyên tố đầu tiên: viết hàm kiểm tra nguyên tố, dùng .find.
* Đếm số nguyên trong mảng số thực: dùng Number.isInteger.
* So sánh số lượng số dương và số âm: dùng .filter rồi so sánh.
* Tách mỗi chức năng thành một hàm riêng để dễ quản lý và gọi từ giao diện.
* * (Output)
* Hiển thị kết quả lên giao diện:
* Viết hàm showOutput(msg) để gán kết quả vào phần tử có id="output".
* Mỗi hàm xử lý sau khi tính toán xong đều gọi showOutput để hiển thị kết quả.
 */