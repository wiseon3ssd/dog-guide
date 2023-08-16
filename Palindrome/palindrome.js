function firstPalindrome (wordarray){
    let i = 0; 
    while (i < wordarray.length){
        if(checkPalindrome(wordarray[i])) return wordarray[i]
        i++;
    }
    return "";
}

function checkPalindrome (coolword){
    let i=0,n=coolword.length;

    while(i<n){
        if(coolword[i]!==coolword[n-1])return false;
        else {
            n--;
            i++;
        }
    }
    return true;
}
console.log(firstPalindrome(["abc","car","ada","racecar","cool"]))