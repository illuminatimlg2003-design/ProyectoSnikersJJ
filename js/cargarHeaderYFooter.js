 // Función para cargar el contenido HTML de header y footer 
function loadHTML(id, url) {
  fetch(url)
    .then(res => {
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
      return res.text();
    })
    .then(html => {
      document.getElementById(id).innerHTML = html;
    })
    .catch(err => console.error(`Error cargando ${url}:`, err));
}

document.addEventListener('DOMContentLoaded', () => {
  loadHTML('header-container', '../index.html/header.html');
  loadHTML('footer-container', '../index.html/footer.html');
});