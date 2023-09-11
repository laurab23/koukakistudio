<script>
    // Fonction pour ajouter la classe .active aux éléments au chargement de la page
    function addActiveClassOnLoad() {
        var elementsToAnimate = document.querySelectorAll('.fade-in-section, .slide-up');
        
        elementsToAnimate.forEach(function(element) {
            element.classList.add('active');
        });
    }

</script>