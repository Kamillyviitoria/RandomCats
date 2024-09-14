
function fetchCatImage() {
    const imageElement = document.getElementById('catImage');
    const errorMessage = document.getElementById('errorMessage');
  
    errorMessage.textContent = '';
  
    fetch('https://api.thecatapi.com/v1/images/search')
      .then(response => {
        if (!response.ok) {
          throw new Error('Erro ao buscar a imagem');
        }
        return response.json();
      })
      .then(data => {
 
        imageElement.src = data[0].url;
      })
      .catch(error => {
      
        errorMessage.textContent = 'Não foi possível carregar a imagem. Tente novamente.';
      });
  }
  

  window.onload = fetchCatImage;
  