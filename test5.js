function func_test_3(input_a, input_b){
    input_a = input_a.toUpperCase()
    input_b = input_b.toUpperCase()

    //Step1
    output1 = {}
    for (let i =0; i < input_a.length; i++) {
        if(!(input_a[i] in output1)){
            output1[input_a[i]] = 1
        }
        for(let j = 0 ; j < input_b.length ; j++){
            if(input_a[i] == input_b[j]){
                output1[input_a[i]]++
            }

        }
    }

        //Step 2
        keys = Object.keys(output1)
        for (let m =0; m < keys.length; m++) {
            for(let n = (m+1) ; n < keys.length ; n++){
                if(keys[m] > keys[n]){
                    temp = keys[m]
                    keys[m] = keys[n]
                    keys[n] = temp
                }
    
            }
        }
        console.log(keys)
    //Step 3
    output2 ={}
    keys.forEach(function(k){
        output2[k] = output1[k]
    });

    return output2
}

console.log(func_test_3('koranit','koranit'))

// INPUT ('koranit','koranit')
// OUTPUT { A: 3, I: 2, K: 1, N: 1, O: 1, R: 1, T: 1 }
// คิดว่าเป็นการนับตัวอักษรทั้ง input_a และ input_b ว่ามีจำนวนกี่ตัว
// โดย step 1  เป็นการนับจำนวน ตัวอักษร 
// step 2 เรียงลำดับ ตัวอักษร เช่นภาษาอังกฤษจะเป็น A-Z
// step 3 นำ output1 และ output2 มา map รวมกัน
