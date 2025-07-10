
  const toggleBtn = document.getElementById('menu-toggle');
  const closeBtn = document.getElementById('menu-close');
  const headerNav = document.getElementById('headernav');
  const navLinks = headerNav.querySelectorAll('a');

  toggleBtn.addEventListener('click', () => {
    headerNav.classList.remove('hidden');
    headerNav.classList.add('active');
    toggleBtn.setAttribute('aria-expanded', 'true');
  });

  closeBtn.addEventListener('click', () => {
    headerNav.classList.remove('active');
    headerNav.classList.add('hidden');
    toggleBtn.setAttribute('aria-expanded', 'false');
  });

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      headerNav.classList.remove('active');
      headerNav.classList.add('hidden');
      toggleBtn.setAttribute('aria-expanded', 'false');
    });
  });


