

  function enviarPorWhatsapp(event) {
  event.preventDefault();

  // Honeypot check
  const honeypot = document.getElementById("telefono_extra").value;
  if (honeypot !== "") {
    console.log("Spam bloqueado");
    return;
  }

  const nombre = document.getElementById("nombre").value.trim();
  const apellido = document.getElementById("apellido").value.trim();
  const mensaje = document.getElementById("mensaje").value.trim();

  const texto = `Hola, soy ${nombre} ${apellido}. ${mensaje}`;
  const numeroWhatsApp = "34605703746"; 

  const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(texto)}`;
  window.open(url, "_blank");
}