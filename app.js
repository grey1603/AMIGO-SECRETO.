
// Lista de amigos
let amigos = [];

// 👉 Agregar amigo a la lista
function agregarAmigo() {
  const input = document.getElementById("amigo");
  const nombre = input.value.trim();

  if (nombre === "") {
    alert("Por favor, escribe un nombre.");
    return;
  }

  if (amigos.includes(nombre)) {
    alert("Ese nombre ya está en la lista.");
    return;
  }

  amigos.push(nombre);
  mostrarLista();
  input.value = "";
}

// 👉 Mostrar lista en pantalla
function mostrarLista() {
  const lista = document.getElementById("listaAmigos");
  lista.innerHTML = ""; // limpia la lista

  amigos.forEach((nombre) => {
    const li = document.createElement("li");
    li.textContent = nombre;
    lista.appendChild(li);
  });
}

// 👉 Sortear amigo secreto
function sortearAmigo() {
  if (amigos.length < 2) {
    alert("Debes añadir al menos 2 nombres para jugar.");
    return;
  }

  const indice = Math.floor(Math.random() * amigos.length);
  const amigoSecreto = amigos[indice];

  const resultado = document.getElementById("resultado");
  resultado.innerHTML = `<li>🎉 Tu amigo secreto es: <strong>${amigoSecreto}</strong></li>`;
}
