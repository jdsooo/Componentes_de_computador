let  jm=document.querySelector(".articulo1");
jm.innerHTML=`
<div class="contenedor">
  <h1 class="p">cpu</h1>
  <p class="p">
  La CPU (Unidad Central de Procesamiento) es el cerebro de una computadora. Es un chip que ejecuta instrucciones de programas y realiza cálculos aritméticos y lógicos. La CPU consta de varias partes clave, como la unidad de control, que interpreta y ejecuta instrucciones, y la unidad aritmético-lógica, que realiza operaciones matemáticas y comparaciones. La velocidad de una CPU se mide en GHz (gigahercios) y afecta directamente al rendimiento general de una computadora. Las CPUs modernas a menudo tienen múltiples núcleos, lo que les permite realizar varias tareas simultáneamente. La evolución de la CPU ha sido fundamental para el avance de la tecnología informática, permitiendo computadoras más rápidas y capaces
  </p>
  <div class="img">
    <img src="data:image/jpeg;base64,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" alt="">
  </div>
  <div class="caracteristicas">
  <ul class="k">
    <li>Arquitectura</li>
    <li>Caché</li>
    <li>Núcleos</li>
    <li>Velocidad de reloj</li>
  </ul>
  </div>
</div>
`;