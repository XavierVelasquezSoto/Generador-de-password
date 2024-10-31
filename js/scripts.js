/* ## Normas del ejercicio

- El ejercicio debe ser capaz de generar un password de la logitud que le establezcamos.
- Los caracteres disponibles son:

```
  ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz01234567890!@#$%^&*()_+-={}[]:;<>,.?/
```

## Pistas y pasos a seguir

- Crear las 2 cajas iniciales
- Poner los textos
- Sincronizar el length del nuevo password con el input range
- Conseguir que se genere un string de esa longitud al pulsar el botón y se escriba en el primer input.

## Principios Importantes para la creación de aplicaciones.

- Las funciones deben tener UNA ÚNICA responsabilidad, Es mejor tener 5 funciones con 2 líneas cada una que tener una sola función que se encargue de 5 tareas distintas. */


const textPasswordElement = document.getElementById("textPassword")
const numbersElement = document.getElementById("numbers")
const rangeElement = document.getElementById("range")
const generatePasswordElement = document.getElementById("generate-password")
const generate = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz01234567890!@#$%^&*()_+-={}[]:;<>,.?/"

const generatePassword = () => {
  let textContent = ""

  for ( let i = 0; i < rangeElement.value; i++){
    textContent += generate.charAt(Math.floor(Math.random() * generate.length))
  }
  textPasswordElement.value = textContent
}


const changeLengthText = () => {
  numbersElement.textContent = rangeElement.value
}

generatePasswordElement.addEventListener("click", generatePassword)
rangeElement.addEventListener("input", changeLengthText)




/* const generatePassword = document.getElementById('password')
const passwordButton = document.getElementById("password-click")
const rangePassword = document.getElementById("range")
const lengthRange = document.getElementById("length-range")


const textGenerate = () => {
  const generate = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz01234567890!@#$%^&*()_+-={}[]:;<>,.?';
  let passwordWeb = ''

  for (i = 0; i < rangePassword.value; i++) {
    passwordWeb += generate.charAt(Math.floor(Math.random() * generate.length));
   
  }
  generatePassword.value = passwordWeb 
};
passwordButton.addEventListener('click', textGenerate)

const rangeLength = () => {
  lengthRange.textContent = rangePassword.value
}
rangePassword.addEventListener('input', rangeLength) */
