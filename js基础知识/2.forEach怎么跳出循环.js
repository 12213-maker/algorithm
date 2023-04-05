[1,2,3,4,5,6].forEach((item)=>{
  if(item===3){
    throw new Error()
  }
  console.log(item);
})

