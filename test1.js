function separeate(num){
    let splitDecimal = num.split('.')[1]
    let splitDigit = (num.split('.')[0].replace(',','')).split('')
    for(let i = 0 ; i < splitDigit.length-1 ;i++){
        let result = (splitDigit[i] != 0 ) ? splitDigit[i] += '0'.repeat((splitDigit.length-i)-1) : 0
    }
    return (splitDigit.filter(ele=>ele != '0'))

}

console.log(separeate('1052.30'))