var data = [
  [409, 194, 207, 470, 178],
  [454, 235, 333, 511, 103],
  [474, 293, 525, 372, 408],
  [428, 4321, 2786, 6683, 3921],
  [265, 262, 6206, 2207, 5712]
]

function checkSum(data){
  let checkSum = 0
  data.forEach(function(row){
    checkSum = checkSum + (Math.max.apply(Math, row) - Math.min.apply(Math, row))
    console.log(checkSum)
  })
  console.log('Final result is: ', checkSum)
}

checkSum(data)
