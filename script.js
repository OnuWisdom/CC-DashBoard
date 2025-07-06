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

function formatDate(date = new Date()) {
  const options = { 
    day: 'numeric', 
    month: 'short', 
    year: 'numeric' 
  };
  
  return date.toLocaleDateString('en-US', options);
}

function updateDate() {
  const dateElement = document.querySelectorAll('.date');

  dateElement.forEach(date => { 
    if (date) {
      date.textContent = formatDate();
    }
  })
}


// Update date immediately when page loads
updateDate();

// Update date every minute to keep it current
setInterval(updateDate, 60000);

// function updateDate() {
//   const dateElement = document.querySelector('.date');
//   const now = new Date();
  
//   // Format the date as "DD MMM YYYY"
//   const options = { 
//     day: 'numeric', 
//     month: 'short', 
//     year: 'numeric' 
//   };
  
//   const formattedDate = now.toLocaleDateString('en-US', options);
//   dateElement.textContent = formattedDate;
// }

// // Update date immediately when page loads
// updateDate();

// // Update date every minute to keep it current
// setInterval(updateDate, 60000);

