// Obtener las imágenes de la zona 3
const imagenZona31 = document.querySelectorAll('.imagen-zona-3-1');
const imagenZona32 = document.querySelectorAll('.imagen-zona-3-2');

// Obtener el contenedor de la zona 4
const contenedorZona4 = document.querySelector('.contenedor-zona-4');

// Agregar evento de clic a todas las imágenes de la zona 3
imagenZona32.forEach(imagen => {
  imagen.addEventListener('click', function() {
  // Cambiar el contenido de contenedor-zona-4 al hacer clic en imagen-zona-3-2
  contenedorZona4.innerHTML = `
  <div class="card-equipo">
  <div class="card-jugadora">
    <img src="css/imagen/cris.jpeg" alt="cris" class="card-imagen">
    <div class="card-texto">
      <p>Nombre: Cris</p>
      <p>Posición: Revés</p>
      <p>Pala: Bullpadel y StarVie</p>
    </div>
  </div>

  <div class="card-jugadora">
    <img src="css/imagen/cris.jpeg" alt="cris" class="card-imagen">
    <div class="card-texto">
      <p>Nombre: Cris</p>
      <p>Posición: Revés</p>
      <p>Pala: Bullpadel y StarVie</p>
    </div>
  </div>

  <div class="card-jugadora">
    <img src="css/imagen/cris.jpeg" alt="cris" class="card-imagen">
    <div class="card-texto">
      <p>Nombre: Cris</p>
      <p>Posición: Revés</p>
      <p>Pala: Bullpadel y StarVie</p>
    </div>
  </div>

  <div class="card-jugadora">
    <img src="css/imagen/cris.jpeg" alt="cris" class="card-imagen">
    <div class="card-texto">
      <p>Nombre: Cris</p>
      <p>Posición: Revés</p>
      <p>Pala: Bullpadel y StarVie</p>
    </div>
  </div>

  <div class="card-jugadora">
    <img src="css/imagen/cris.jpeg" alt="cris" class="card-imagen">
    <div class="card-texto">
      <p>Nombre: Cris</p>
      <p>Posición: Revés</p>
      <p>Pala: Bullpadel y StarVie</p>
    </div>
  </div>

  <div class="card-jugadora">
    <img src="css/imagen/cris.jpeg" alt="cris" class="card-imagen">
    <div class="card-texto">
      <p>Nombre: Cris</p>
      <p>Posición: Revés</p>
      <p>Pala: Bullpadel y StarVie</p>
    </div>
  </div>

  <div class="card-jugadora">
    <img src="css/imagen/cris.jpeg" alt="cris" class="card-imagen">
    <div class="card-texto">
      <p>Nombre: Cris</p>
      <p>Posición: Revés</p>
      <p>Pala: Bullpadel y StarVie</p>
    </div>
  </div>

  <div class="card-jugadora">
    <img src="css/imagen/cris.jpeg" alt="cris" class="card-imagen">
    <div class="card-texto">
      <p>Nombre: Cris</p>
      <p>Posición: Revés</p>
      <p>Pala: Bullpadel y StarVie</p>
    </div>
  </div>
</div>
  `;
});
});
