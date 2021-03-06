# `12` Dynamic HTML String

Una de las cosas interesantes de javascript es que te permite crear string dinámicas en HTML durante el tiempo de ejecución, lo que significa que puedes crear HTML automáticamente mientras duermes. ¡Si! Acompañame y entenderás cómo...

Por favor, eche un vistazo a la siguiente string:
```javascript 
    let auxString = "<p>Hello!</p> <strong>My friend</strong>";
```
Como humanos, sabemos que este string tiene el formato como un HTML porque tiene una etiqueta `<p>` y una `<strong>` dentro. Pero javascript no sabe eso, javascript solo entiende un string como una serie de caracteres, no importa si los caracteres se configuran de manera similar a HTML.

Pero, ¿qué pasa si se escribe ese string en un documento HTML durante el tiempo de ejecución? El navegador interpretará ese string como HTML (es lo que hacen los navegadores) y la representará como HTML, eliminando las etiquetas y aplicando su formato respectivo en el texto restante.

Aquí está el código que necesitas para imprimir cualquier string en el documento html.
```js
    let auxString = "<p>Hello!</p> <strong>My friend</strong>";
    document.write(mystring);
```
## 📝 Instrucciones:
Usando la función getFullYear del objeto `Date()`, cambia el contenido del string de la variable `auxString` para que imprima el año de la fecha actual en el HTML de esta manera:

![](http://i.imgur.com/HpinbLP.png "")

Imprime el año actual utilizando el objeto de fecha, no establezca el string en un año en particular, agrega el año actual al final.