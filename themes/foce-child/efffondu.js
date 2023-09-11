// Fonction pour appliquer l'effet de fondu vers le haut
function applyFadeInUpAnimation() {
    const elements = document.querySelectorAll(".animationdepartverslehaut");
  
    elements.forEach((element) => {
      element.style.opacity = "0";
      element.style.transform = "translateY(30px)";
    });
  
    setTimeout(() => {
      elements.forEach((element) => {
        element.style.transition = "opacity 1s ease, transform 1s ease";
        element.style.opacity = "1";
        element.style.transform = "translateY(0)";
      });
    }, 1000);
  
    // Vous pouvez ajuster la valeur '30px' et la durée '1s' selon vos besoins
  }
  
  // Attendre que le document soit complètement chargé avant d'appliquer l'animation
  document.addEventListener("DOMContentLoaded", () => {
    applyFadeInUpAnimation();
  });