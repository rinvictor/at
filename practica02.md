# Aplicaciones telemáticas. Práctica 2.

## Práctica 2.1. Análisis de selectores

>Ejemplo 1

- El color de fondo es beige, aplica para todo el documento (*).
- El primer párrafo es un párrafo sin clase, le aplica la segunda regla.
- El segundo tiene clase fep, aplica la segunda regla (.feo).
- El div con texto "Este aparace con los colores invertidos" tiene clase inverso, se referencia con esa regla.
- Para h1 aplica la última regla css.

>Ejemplo 2

Este ejemplo es más sencillo de explicar viendo las reglas css:
- 1. .españa .toledo, aplica a cualquier clase toledo que herede de un elemento con clase españa.
- 2. .toledo, aplica a la clase toledo.
- 3. .toledo, .cuenca, aplica a elementos con clase toledo o con clase cuenca.
- 4. .castilla-la-mancha, aplica a los elementos con clase castilla-la-mancha.

1. El país España, no le afecta ninguna de las clases anteriores.
2. La comunidad Castilla la mancha, le afecta la cuarta regla.
3. La ciudad de Cuenca, hereda el subrayado de su padre y le afecta la tercera regla.
4. La ciudad de Toledo, le afecta la primera clase, hereda el subrayado de su padre.
5. La ciudad Albacete, le afecta el subrayado de su padre, ninguna clase más.
6. El país Estados Unidos, no le afecta ninguna clase.
7. El estado de Ohio, ocurre lo mismo.
8. La ciudad de toledo, le afectan las reglas 2 y 3.

>Ejemplo 3

- Párrafo 1, no le afecta ninguna regla
- Párrafo 2, tiene id alfa, l afecta la segunda regla por ser un párrafo con dicho id, y por tener ese id también la primera regla. La última le afecta debido a que tiene id alfa y es hijo de un div.
- Párrafo 3, no le afecta ninguna regla.
- Párrafo 4, No le afecta ninguna regla.

>Ejemplo 4

- Párrafo 1, no le afecta ninguna regla.
- Párrafo 2, le afectan todas las reglas.
- Párrafo 2, le afecta la última regla.
- Párrafo 3, no le afecta ninguna regla.
- Párrafo 4, le afectan la primera y la útima regla,
- Párrafo 4, ninguna regla.

### Voy a hacer un breve resumen de lo más importante de esta práctica:
1. Las clases se heredan.
2. p.clase afectaría a un párrafo con esa clase.
3. p .aviso, elemento cualquiera con clase aviso hijo, nieto, bisnieto... de un elemento párrafo.
4. p. .aviso, es un or, afecta a un elemento párrrafo en general, o a cualquier elemento con clase aviso.
5. .urjc.reglamento, afecta un caso como por ejemplo class="reglamento urjc" (el orden de las clases de un elemento no importa).


## Práctica 2.2. Uso de selectores.
- Le afecta la clase uno
- Le afecta la clase tercera y primera, pero no la segunda porque no hereda de su padre.
- Le afecta la primera clase (por herencia), la segunda por heredar de clase uno, la tercera porque cumple una de las condiciones y la última, porque es un clase dos(valdría clase tres) que herede de un clase uno.
- Solo le afecta la cuarta regla
- Solo le afecta la tercera, no la segunda porque no hereda, es un or.
- Le afecta la segunda regla, también la última. Al div le afecta la primera, que hereda el párrafo pero en la representación se ve la última por ser más específica
- Le afecta la última regla pero la anterior aplica antes.

Así he jugado con las preferencias y la diferencia de formato entre dos casos similares. 


