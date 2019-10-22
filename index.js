// Code your solution here
function findMatching(arr,string){
    arr=arr.filter(function(f){
        return f===string;
    })
    return arr;
}

function fuzzyMatch(arr,string){
    arr.filter(function(f){
        return f.indexof(string)===0;
    })
    return arr;
}

function matchName(arr,string){
    arr=arr.filter(function(f){
        return f.name==string;
    })
    return arr;
}