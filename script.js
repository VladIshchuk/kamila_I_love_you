function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }
  
  const changeBtn = document.querySelector('.change-color');
  const spanEl = document.querySelector('.color');
  const elToChange = document.querySelector('body');
  
  changeBtn.addEventListener('click', () =>{
  
    spanEl.textContent = getRandomHexColor();
    elToChange.style.backgroundColor = spanEl.textContent;
  })