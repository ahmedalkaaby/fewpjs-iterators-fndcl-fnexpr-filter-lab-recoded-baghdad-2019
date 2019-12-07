// Code your solution here
function findMatching(arr,string){
    arr=arr.filter(function(f){
        return f.toLowerCase().indexOf(string.toLowerCase()) === 0
    })
    return arr;
}

function fuzzyMatch(arr,string){
   arr= arr.filter(function(f){
    return f.toLowerCase().indexOf(string.toLowerCase()) === 0;
  })
  return arr;
}


function matchName(arr,string){
    arr=arr.filter(function(f){
        return f.name==string;
    })
    return arr;
}