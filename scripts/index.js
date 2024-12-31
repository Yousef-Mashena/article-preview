const openShare = document.getElementById('share-open');
const closeShare = document.getElementById('share-close');
const socials = document.getElementById('socials');

openShare.addEventListener('click', (e) => {
  if (socials.style.display == 'flex') {
    socials.style.display = 'none';
  } else {
    socials.style.display = 'flex';
  }
});

closeShare.addEventListener('click', (e) => {
  socials.style.display = 'none';
});
