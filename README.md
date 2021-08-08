# Juego-de-Memoria
Hecho con Javascript , Html y Css

![](img/Screenshot_5.jpg)

El juego consta de un tablero y cartas,se termina cuando se encuentran todos los pares iguales.Cada carta tiene dos caras, una igual para todas(backface)y una singular(frontface).
<p>Para girar las cartas,primero tome la clase de todas las cartas a  travez de QuerySelectorAll, luego con el metodo forEach recorre el arreglo de cartas y adjunta un  addEventListener con un evento click ,para que al clickeraese la carta ,se ejecute la funcion de girar.Para que gire  le puse  una clase de css a las cartas,que roten 180°.</p>
<p>Para que el emparejamiento primero necesitaba saber cual es la primera carta clickeada ,para eso use dos variable una  cuando se gire la carta que se estable en falso y la otra identificando la primer y segunda carta,luego a a travez de un condicional ,si la variable se establece en true significa que la carta girada es la primera y sino es la segunda.</p>
<p>Despues, use un operador ternario en donde ,si la primera carta coincide con la segunda,es un emparejamiento,y se deshabilitan esas cartas.Para deshabilitarlar use remove.EventListener.Sino  vuelven a ser elegibles,un tiempo detreminado despues con setTimeout.</p>







![](img/gif.gif.gif)
