document.querySelector('.circle').addEventListener('click', function() {
    this.classList.toggle('clicked');
  });



/*edit here and add the desired number of circles*/

for (let i = 0; i <= 55; i++) {
    const circle = document.querySelector(`.circle${i}`);
    if (circle) {
      circle.addEventListener('click', function() {
        this.classList.toggle('clicked');
      });
    }
  }
  