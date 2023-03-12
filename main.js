const details = document.querySelectorAll('details');

details.forEach((item) => {
  item.addEventListener('mouseenter', () => {
    item.setAttribute('open', 'true');
  });
});

details.forEach((item) => {
  item.addEventListener('mouseleave', () => {
    item.removeAttribute('open');
  });
});
