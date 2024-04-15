window.addEventListener('resize', () => {
  const currentZoom = window.innerWidth / document.documentElement.clientWidth;
  document.documentElement.style.setProperty('--zoom', currentZoom);
});
