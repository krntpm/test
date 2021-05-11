var x = 20
var test_func = function(){
    console.log(x);
    var x = 21;
}
var x= 22
test_func()
// OUTPUT undefined
// เนื่องจากเมื่อ call functtion fuction จะมองหา local variable ก่อนว่ามีหรือไม่
// ดังนั้นเมื่อทำงานที่  console.log(x); function ไม่เห็นค่า x จึงแสดงผลลัพท์เป็น undefined
