function isPalindrome(x){
    x = x.toString().split('');
    var len = x.length;
    for(var i=0; i<len/2;i++){
        if(x[i] !== x[len-1-i]){
            return false;
        }
    }
    return true;
}
function largestPalindrome(){
    var largest = 0;
    for(var i=999; i>=100; i--){
        for(var j=999; j>=100; j--){
            var mult = i*j;
            if(isPalindrome(mult) && mult > largest){
                largest = mult;
            }
        }
    }
    return largest;
}