window.scrollToElement$ = element => {
  element.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

window.scrollToTop$ = _ => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};
