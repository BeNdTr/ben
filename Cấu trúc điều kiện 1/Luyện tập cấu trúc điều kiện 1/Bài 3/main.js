// Nhập một số nguyên bất kỳ và in kết quả ra màn hình để nói cho người dùng biết số đó là lớn hay nhỏ hơn 0
let number = +prompt(`Nhập vào số`);
if (number > 0) {
    alert('Lớn hơn 0');
}
if (number < 0) {
    alert('Nhỏ hơn 0');
} else {
    alert(`0 - Xin nhập số khác`);
}
