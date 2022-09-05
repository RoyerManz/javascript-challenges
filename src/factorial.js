const factorial = (number) => {
  let f=1
  let i=1
  while(i<=number){
    f*=i
  }  
  return f
}

module.exports = factorial;
