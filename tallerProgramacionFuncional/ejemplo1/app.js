var arr = [1, 2, 3, 4];

function getMultiple(){

    function multipleBy10(val){
        let i = 10;
        return val * i;
    }

    for(let i = 0; i < arr.length; i++){
        arr[i] = multipleBy10(arr[i]);
    }
    console.log(arr);
    return arr;
}

getMultiple();