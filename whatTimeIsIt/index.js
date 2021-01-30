const whatTimeIsIt = time => {
//   // do code here
//   const a = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve',
// 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen' ]
// const b = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty']
// if (time.includes('am') {

// })

const a = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
const b = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty']
if (time.includes('am')) {
  if (time.includes('12:00')) {
    return "It's midnight"
  } else {
    const h = time.slice(0,-3).split(':')[0]
    const m = time.slice(0,-3).split(':')[1]
    const p = Math.floor(m/10)
    if (p<2) {
      return `It's ${a[h]} past ${a[m]} in the morning`
    }
    const s = m%10
    return `It's ${a[h]} past ${b[p]} ${a[s]} in the morning`
  }
} else if (time.includes('pm')) {
  if (time.includes('12:00')) {
    return "It's noon"
  } else {
    const h = time.slice(0,-3).split(':')[0]
    const m = time.slice(0,-3).split(':')[1]
    const p = Math.floor(m/10)
    if (p<2) {
      return `It's ${a[h]} past ${a[m]} in the afternoon`
    }
    const s = m%10
    return `It's ${a[h]} past ${b[p]} ${a[s]} in the afternoon`
  }
}



}


// do not change this code below
const test = (testCase, result) => console.log(testCase === result);

test(whatTimeIsIt("12:00 pm"), "It's noon")
test(whatTimeIsIt("3:49 pm"), "It's three past forty nine in the afternoon")
test(whatTimeIsIt('12:00 am'), "It's midnight")
test(whatTimeIsIt("5:31 am"), "It's five past thirty one in the morning")
test(whatTimeIsIt("9:11 am"), "It's nine past eleven in the morning")