//function scope

// let subject = 'create video'

// function createThink(subject) {
//   subject = 'study'
//   return subject
// }
// console.log(createThink(subject))
// console.log(subject);

///////////////////////////////////////

let subject

function createThink() {
  subject = 'study'
  return subject
}
console.log(subject);
// console.log(createThink())
createThink()
console.log(subject);