function verifi(e, img) {
  const pass = e.target.value
  const hash = calcMD5(pass);
  const size = 24;
  const style = 'retro';
  const url = `http://gravatar.com/avatar/${hash}?s=${size}&d=${style}&f=y`;
  if (pass.length > 0) {
    img.src = url;
  } else {
    img.src = '';
  }
}

const fields = document.querySelectorAll('input[type="password"]');
for (let field of fields) {
  let img = new Image();
  img.classList.add('verifi');
  field.parentNode.insertBefore(img, field.nextSibling);
  field.addEventListener('input', function(e) { verifi(e, img) }, false);
}
