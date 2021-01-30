const whoIsit = (firstDay, secondDay) => {
  // do code here
  return firstDay.filter(el => secondDay.includes(el))

}

// do not change this code below
const test = (testCase, result) => {
  if (testCase.sort().join() === result.sort().join()) {
    return console.log(true)
  }
  return console.log(false)
}

test(whoIsit(["Joko", "Ani", "Budi"], ["Joko"]), ['Joko'])
test(whoIsit(["Andi", "Prabowo", "Jokowi", "Roberto"], ["Sebastian", "Rachel", "Jokowi", "Prabowo"]), ["Jokowi", "Prabowo"])
test(whoIsit(["Zoe", 'Pearson', 'Dona', 'Luis'], ["Dona", "Robert", "Forstman", "Katrina"]), ['Dona'])
test(whoIsit(["Badu", 'Gilang', 'Silvy'], ['Amal', 'Adrian', 'Margi']), [])
test(whoIsit(['Ian', 'Aron', 'Udin', 'Adit', 'Natalia', 'Lia'], ['Ian', 'Aron', 'Udin', 'Adit', 'Natalia', 'Lia']), ['Ian', 'Aron', 'Udin', 'Adit', 'Natalia', 'Lia'])
