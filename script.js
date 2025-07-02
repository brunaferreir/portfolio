document.addEventListener('DOMContentLoaded', () => {
 
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

  
    document.querySelectorAll('.social-button').forEach(button => {
        button.addEventListener('click', function(e) {
           
        });
    });


});
