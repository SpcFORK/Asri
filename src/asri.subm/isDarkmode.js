window.isDarkMode$ = _ => 
  window.matchMedia 
  && window.matchMedia('(prefers-color-scheme: dark)').matches;