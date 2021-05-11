function func_test_2(input_a, input_b){
    let output = -1
    for (let i = 0 ; i < input_a.length; i++) {
        if(input_a[i] == input_b){
            output = i;
            break
        }
    }
    return output
}
func_test_2([3,5],5)
// func_test_2 //
// เป็นฟังก์ชันสำหรับเช็กว่า input_b มีค่าที่เหมือนกัน ภายใน list input_a หรือไม่
// เช่น input_a = [1,2,3,4] input_b = 5 output จะได้เป็น -1
// แต่ ถ้า input_a = [1,2,4,5] input_b = 5 output จะได้เป็น 1