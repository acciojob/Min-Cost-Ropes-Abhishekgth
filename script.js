/*function mincost(arr)
{ 
//write your code here
// return the min cost
/*if (arr.length === 0) return 0;
  arr.sort((a, b) => a - b);

  let cost = 0;

  while (arr.length > 1) {
    const first = arr.shift();
    const second = arr.shift();
    const sum = first + second;
    cost += sum;

    arr.push(sum);
    arr.sort((a, b) => a - b);
  }

  return cost;
	
  
}*/
function mincost(arr){ 
  let sum=0;
while(arr.length>1){
	arr.sort((a,b)=>a-b);
	let a = arr.shift();
	let b = arr.shift();
	sum+=a+b;
	arr.push(a+b);
}
	return sum;
}

module.exports=mincost;
