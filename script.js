const sideBar = document.querySelector('.sidebar');
const iconSideBar = document.querySelector('.icon-sidebar');
const logoIcon = document.querySelectorAll('.logo-icon');
const filterButtons = document.querySelectorAll('.pill');
const filtersWrapper = document.querySelector('.filters');
// const firstButton   = filterButtons[0];           // the one that stays active
let currentActive   = document.querySelector('.filter-btn.active');

function toggleSidebar() { 
  if (sideBar.classList.contains('hidden')) {
    sideBar.classList.remove('hidden');
  } else {
    sideBar.classList.add('hidden');
  }

  if (iconSideBar.classList.contains('hidden')) {
    iconSideBar.classList.remove('hidden');
  } else {
    iconSideBar.classList.add('hidden');
  }

}

  logoIcon.forEach(logo => { 
        logo.addEventListener('click', toggleSidebar);
    });



filterButtons.forEach(btn => {
  // skip the first button entirely; it stays active forever
//   if (btn === firstButton) return;

  btn.addEventListener('click', () => {
    // remove .active from the last non‑first button, if there is one
    if (currentActive) currentActive.classList.remove('active');

    // mark the newly clicked button as active
    btn.classList.add('active');
    currentActive = btn;                          // update the tracker
  });
});


