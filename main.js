function getArray() {
    const arr = document.getElementById("arrayInput").value.trim().split(/\s+/).map(Number);
    return arr.filter(n => !isNaN(n));
}

function tongSoDuong() {
    const arr = getArray();
    const tong = arr.filter(x => x > 0).reduce((a, b) => a + b, 0);
    showOutput("Tổng số dương: " + tong);
}

function demSoDuong() {
    const arr = getArray();
    const dem = arr.filter(x => x > 0).length;
    showOutput("Có " + dem + " số dương");
}

function timSoNhoNhat() {
    const arr = getArray();
    const min = Math.min(...arr);
    showOutput("Số nhỏ nhất: " + min);
}

function timSoDuongNhoNhat() {
    const arr = getArray().filter(x => x > 0);
    const result = arr.length ? Math.min(...arr) : "Không có số dương";
    showOutput("Số dương nhỏ nhất: " + result);
}

function timSoChanCuoi() {
    const arr = getArray();
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] % 2 === 0) return showOutput("Số chẵn cuối cùng: " + arr[i]);
    }
    showOutput("-1 (Không có số chẵn)");
}

function doiCho() {
    const arr = getArray();
    const pos1 = +document.getElementById("pos1").value;
    const pos2 = +document.getElementById("pos2").value;
    if (arr[pos1] == null || arr[pos2] == null) return showOutput("Vị trí không hợp lệ");
    [arr[pos1], arr[pos2]] = [arr[pos2], arr[pos1]];
    showOutput("Mảng sau khi đổi: " + arr.join(", "));
}

function sapXepTangDan() {
    const arr = getArray().sort((a, b) => a - b);
    showOutput("Mảng sau khi sắp xếp: " + arr.join(", "));
}

function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) if (n % i === 0) return false;
    return true;
}

function timSoNguyenToDau() {
    const arr = getArray();
    const result = arr.find(x => isPrime(x)) ?? -1;
    showOutput("Số nguyên tố đầu tiên: " + result);
}

function demSoNguyenTrongMangThuc() {
    const floatArr = document.getElementById("floatArrayInput").value.trim().split(/\s+/).map(Number);
    const count = floatArr.filter(x => Number.isInteger(x)).length;
    showOutput("Số nguyên trong mảng số thực: " + count);
}

function soSanhDuongAm() {
    const arr = getArray();
    const duong = arr.filter(x => x > 0).length;
    const am = arr.filter(x => x < 0).length;
    let result = duong > am ? "Nhiều số dương hơn" : am > duong ? "Nhiều số âm hơn" : "Số lượng bằng nhau";
    showOutput(result);
}

function showOutput(msg) {
    document.getElementById("output").textContent = msg;
}
