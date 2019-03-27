const comment = document.querySelectorAll(`p.comment`);
comment.forEach(el => {
  const count = el.innerHTML.split(` `).length;
  let max;
  if (window.innerWidth < 780) {
    max = 20;
  } else {
    max = 60;
  }
  if (count > max) {
    el.classList.add(`long`);
    const readMore = document.querySelectorAll(`p.comment.long`);
    readMore.forEach(com => {
      com.onclick = () => {
        com.classList.toggle(`extended`);
      };
    });
  }
});
