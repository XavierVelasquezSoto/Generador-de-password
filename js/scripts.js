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

const generatePassword = code => {
  const generate = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz01234567890!@#$%^&*()_+-={}[]:;<>,.?';

  for (i = 0; i < generate.length; i++) {
    generate.Math.floor(Math.random() * generate.length);
  }
};
