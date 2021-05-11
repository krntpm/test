function test1() {
    return {
        name: "truevoice"
    }
}

function test2(){
        {
           
            return {
                name : "truevoice"
            }
        }
}

console.log(test1())
console.log(test2())
// OUTPUT { name: 'truevoice' } ทั้งสอง ฟังก์ชัน
// ความยืดหยุ่นของ ภาษา Javascripts จะไม่มอง {} ที่เกินมา ใน func test2()
// เป็นแค่ block {} ที่ไม่มีการนำมาใช้