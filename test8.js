var a = [1,2,3];
a[10] = 99;
console.log(a[6]);
console.log(a[10])
// ได้ OUTPUT = undefined
// บรรทัด a[10] = 99; ทำงานได้ เนื่องจาก JS จะทำการจองพื้นที่ของ array ไว้
// ดังนั้น array ที่ index ที่ 10 จะมี่ค่า 99
// แต่ บรรทัด console.log(a[6]); ไม่มีการ assign ค่า ให้กับ index ที่6
// จึงทำให้การแสดงผลออกมา เป็น undefined