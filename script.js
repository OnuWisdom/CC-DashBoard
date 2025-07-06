const sideBar = document.querySelector('.sidebar');
const iconSideBar = document.querySelector('.icon-sidebar');
const logoIcon = document.querySelectorAll('.logo-icon');

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

