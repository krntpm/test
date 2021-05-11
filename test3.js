function func_test_1(input){
    let output = ""
    for (let i = 0 ; i < input.length; i++) {
        if(!input[i] == " ") output += input[i];

    }
    return output
}
console.log(func_test_1("aaa bbb ccc"))
// func_test_1 //
// เป็นฟังก์ชันสำหรับการตัด space ของ input ออก
// เช่น input "aaa bbb ccc" output จะได้เป็น "aaabbbccc"
// จากฟังก์ชันอาจจะไม่สมบูรณ์เมื่อทำการ compile 
// อาจจะแก้จาก (!input[i] == " ") เป็น (input[i] !== " ")
// หรือ แก้เป็น input.replace(/[\s]*/g,'')