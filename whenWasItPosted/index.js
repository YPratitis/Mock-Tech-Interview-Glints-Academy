const whenWasItPosted = date => {
  // do code here
  const dateNow = Date.now()
  const day = 24*60*60*1000
  const week = 7*24*60*60*1000
  const month = 30*24*60*60*1000
  const year = 366*24*60*60*1000
  if (dateNow-Date.parse(date)>=year) {
    return `${Math.floor(((dateNow-Date.parse(date))/year))} year ago`
  } else if (dateNow-Date.parse(date)>=month) {
    return `${Math.floor(((dateNow-Date.parse(date))/month))} months ago`
  } else if (dateNow-Date.parse(date)>=week) {
    return `${Math.floor(((dateNow-Date.parse(date))/week))} weeks ago`
  } else {
    return `${Math.floor(((dateNow-Date.parse(date))/day))} days ago`
  }


}


// do not change this code below
const changeToString = __ => {
  const _ = new Date(__)
  const month = _.toLocaleString('default', { month: 'long' });
  const date = _.getDate()
  const year = _.getFullYear()
  return `${date} ${month} ${year}`
}
const test = (testCase, result) => console.log(testCase === result);

const date = new Date();
const date1 = new Date();
const date2 = new Date();
const date3 = new Date();
const date4 = new Date();

test(whenWasItPosted(changeToString(date.setMonth(date.getMonth() - 11))), '11 months ago')
test(whenWasItPosted(changeToString(date1.setDate(date.getDate() - 14))), '2 weeks ago')
test(whenWasItPosted(changeToString(date2.setDate(date.getDate() - 3))), '3 days ago')
test(whenWasItPosted(changeToString(date3.setFullYear(date.getFullYear() - 1))), '1 year ago')
test(whenWasItPosted(changeToString(date4.setFullYear(date.getFullYear() - 20))), '20 years ago')