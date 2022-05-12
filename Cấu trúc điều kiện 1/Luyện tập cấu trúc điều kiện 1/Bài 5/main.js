// Xếp hạng học lực của học sinh dựa trên các điểm bài kiểm tra, điểm thi giữa kỳ, điểm thi cuối kỳ
let diemkt = +prompt(`Hãy nhập điểm kiểm tra`);
let diemgt = +prompt(`Hãy nhập điểm giữa kỳ`);
let diemck = +prompt(`Hãy nhập điểm cuối kỳ`);
let diemTB = (diemkt + diemgt + diemck) / 3;
if (diemTB >= 9){
    alert('Học sinh giỏi');
}else if (diemTB >= 6){
    alert('Học sinh tiên tiến');
}else if (diemTB >= 4){
    alert('Học sinh trung bình');
}else {
    alert('Học sinh yếu');
}
