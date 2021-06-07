
//callback function
function sayMyName(name) {
  console.log('antes de executar a callback');

  name()

  console.log('depois de executar a callback');
}

sayMyName(
  //pode-se passar qualquer parametro

  () => {
    console.log('Estou em uma callback')

  }
)

