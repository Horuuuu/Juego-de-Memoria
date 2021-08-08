# Juego-de-Memoria
Hecho con Javascript , Html y Css

![](img/Screenshot_5.jpg)

El juego consta de un tablero y doce cartas,se termina cuando se encuentran todos los pares iguales.Cada carta tiene dos caras, una igual para todas(backface)y una singular(frontface).
<p>Para girar las cartas,primero tome la clase de todas las cartas a  travez de **QuerySelectorAll**, luego con el metodo forEach recorre el arreglo de cartas y adjunta un  **addEventListener** con un evento click ,para que al clickeraese la carta ,se ejecute la funcion de girar.Para que gire  le puse  una clase de css a las cartas,que roten 180°.</p>
<p>Para que el emparejamiento primero necesitaba saber cual es la primera carta clickeada ,para eso use dos variables una  cuando se gire la carta que se establece en falso y la otra identificando la primer y segunda carta,luego a a travez de un condicional ,si la variable se establece en true significa que la carta girada es la primera y sino es la segunda.</p>
<p>Despues, use un operador ternario en donde ,si la primera carta coincide con la segunda,es un emparejamiento,(y se deshabilitan esas cartas)sino  vuelven a ser elegibles.Para deshabilitarlar use remove.EventListener.Para que se muestren un tiempo determinado  despues de no ser emparejadas ,use **setTimeout**.</p>
Para desordenar las imagenes de las cartas,use el metodo **Math** con la clase Random para que le asigne un numero a cada uno de las doce cartas,ya que el display flex   asigna un orden preestablecido a cada item a partir de la propiedad de orden.






![](img/gif.gif.gif)
