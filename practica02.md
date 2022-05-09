#Aplicaciones telemáticas. Práctica 2.

##Práctica 2.1. Análisis de selectores

>Ejemplo 1

El color de fondo es beige, para el primer párrafo aplica la regla p, en el caso del segundo párrafo se indica su clase, está definido en .feo. En el caso del div también se indica la clase en concreto.

>Ejemplo 2

En este caso se ilustra el orden de preferencia de las etiquetas.
- 1, por defecto
- 2, .castilla-la-mancha, esta subrayado
- 3, .toledo, un div dentro de .castilla-la-mancha, subrayado en rojo (dentro de .españa)
- 4, .cuenca, un div dentro de .castilla-la-macha, subrayado y centrado 
- 5, .albacete, un div dentro de .catilla-la-mancha, .albacete no existe como etiqueta, así que el estilo seráel de catilla la mancha
- 6 Por defecto
- 7 .ohio no existe, y está dentro del div de estados unidos, por defecto.
- 8 .toledo pero fuera de españa por lo que será en color azul y centrado

> Ejemplo 3

- Párrafo 1,
