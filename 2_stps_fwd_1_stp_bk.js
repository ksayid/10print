const w = process.stdout.columns
let attempt_number = 1
let strikes = 0
let best_score = 0
let cur_score = 0

console.log("don't make the same mistake twice")

function draw () {
  setTimeout(draw, 1000)
  let output = ''
  
  if (strikes == 0){
      output = '\033[92m' // green
  } else if (strikes == 1){
      output = '\033[93m' // yellow
  } else {
      console.clear()
      best_score = Math.max(score, best_score);
      console.log("\033[97mattempt " + `${attempt_number += 1}`)
      console.log("\033[97mbest: " + `${best_score}`)
      output = '\033[92m'
      strikes = 0
      cur_score = 0
  }
  
  for (let i = 0; i < w; i++) {
    if (Math.random() < (1 - 1E-2)) {
      output += '■'
    } else if (strikes == 0) {
      output += '\033[93m■'
      strikes += 1
    } else {
      output += '\033[91m■'
      strikes += 1
      break
    }
  }

  if (strikes == 0){
      console.log(output)
      console.log("\033[97m" + "don't mess up")
      cur_score += 1
  } else if (strikes == 1){ 
      console.log(output)
      console.log("\033[97m" + "can't mess up can't mess up (0__0)")
      cur_score += 1
  } else {
      console.log(output)
      console.log("\033[97m $#!+ $#!+ $#!+ $#!+ $#!+" + "(╯°□°)╯ ┻━┻")
  }
}

draw()
// k#@1!1