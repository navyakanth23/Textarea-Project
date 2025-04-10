const textarea = document.getElementById('limitedTextarea');
const charcount = document.getElementById('charCount');
const maxLength = parseInt(textarea.getAttribute('maxlength'));

textarea.addEventListener('input', () => {
    const currentLength = textarea.value.length;
    charcount.textContent = `${currentLength} / ${maxLength} characters`;

  if (currentLength >= maxLength) {
    textarea.classList.add('limit-reached');
    charcount.classList.add('red');
  } else {
    textarea.classList.remove('limit-reached');
    charcount.classList.remove('red');
  }
});