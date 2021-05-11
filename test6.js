(function() {
    console.log('A')
    setTimeout(function(){console.log('B')}, 1000);
    setTimeout(function(){console.log('C')}, 0);
    console.log('D')
})();
// OUTPUT ที่ได้จะเป็น A D C B
// จากการทำงาน บรรทัด console.log('A') จะทำงานเสร็จก่อนเนื่องจากไม่มี timeout
// บรรทัด console.log('D') จะทำงานเสร็จเป็นอันดับ 2 เนื่องจากไม่มี timeout
// บรรทัด setTimeout(function(){console.log('C')}, 0); ทำงานเสร็จเป็นอันดับ 3 เพราะมีการ settimeout 0
// บรรทัด setTimeout(function(){console.log('B')}, 1000); ทำงานเสร็จเป็นอันดับสุดท้าย เพราะมีการ settimeout 1000 millisecs
// เพราะเป็นการทำงาน แบบ Single thread หรือ asynchronous 
// คือ จะทำ return ฟังก์ชัน ที่ทำงานเสร็จก่อน โดยที่ไม่ต้องรอการทำงานของ function อื่น เป็น step
// หากต้องการรอ อาจทำ callback() มา apply ใช้ร่วมด้วย เช่น async await
