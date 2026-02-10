//select and add to the arrays objects of a chosen type
const tabs = document.querySelectorAll('.tab');
const pages = document.querySelectorAll('.page');
const cards = document.querySelectorAll('.person-card');

for (let i = 0; i < tabs.length; i++) {
  //define what happens upon a click
  tabs[i].addEventListener('click', function() {
    //remove active flag of all tabs which are not active
    for (let j = 0; j < tabs.length; j++) {
      tabs[j].classList.remove('active');
    }
    //the same for the pages
    for (let k = 0; k < pages.length; k++) {
      pages[k].classList.remove('active');
    }
    //add active flag to the chosen tab
    this.classList.add('active');
    const targetId = this.getAttribute('data-target');
    const targetPage = document.getElementById(targetId);
    //add chosen page got by id an active flag
    targetPage.classList.add('active');
  });
}

for (let i = 0; i < cards.length; i++) {
  //add event which happens upon a click
  cards[i].addEventListener('click', function() {
    //remove/add a flag "flipped" depending on the actual status
    if (this.classList.contains('flipped')) {
      this.classList.remove('flipped');
    } else {
      this.classList.add('flipped');
    }
  });
  
}