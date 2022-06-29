
export function getHidden() {
    const datecalc = document.querySelector('#datecalc');
    const timer = document.querySelector('#timer');

    datecalc.classList.toggle('active')
    timer.classList.toggle('active')
  }