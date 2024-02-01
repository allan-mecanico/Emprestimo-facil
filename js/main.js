document.getElementById("botao").addEventListener("click", function() {
  window.location.href = "https://api.whatsapp.com/send?phone=5511931311054"; // Coloque o link da API do WhatsApp aqui
});

window.onscroll = function() {
  var button = document.getElementById("whatsapp-button");
  
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    button.style.opacity = "1";
  } else {
    button.style.opacity = "0";
  }
};

