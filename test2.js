function addArray(arr1,arr2){
    let result = []
    let int1 = ''
    let int2 = ''
    if (arr1 && arr2 && arr1.length === arr2.length ) {
       for(let i = 0 ; i < arr1.length ; i++){
            int1 += arr1[i].toString()
            int2 += arr2[i].toString()
       }
       result = (parseInt(int1)+parseInt(int2)).toString()
       return (result.split('')).map(ele => parseInt(ele))

    } else{
        return 'Something wrong'
    }
}

console.log(addArray([3,4,5,6,7,8,9],[0,1,2,3,4,5,6]))
