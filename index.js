// Code your solution here
function findMatching(arr,string){
    arr=arr.filter(function(f){
        return f===string;
    })
    return arr;
}

function fuzzyMatch(arr,s){
   arr= arr.filter(function(v){
    return v.toLowerCase().indexOf(s.toLowerCase()) === 0;
  })
  return arr;
}


function matchName(arr,string){
    arr=arr.filter(function(f){
        return f.name==string;
    })
    return arr;
}