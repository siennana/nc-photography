const brand = document.querySelector('.brand');
const characters = [...brand.innerHTML];    //Get the texts and create an array.
brand.textContent = '';    //Empty the contents.

// Loop through each character and push it inside heading element as a new span element.
characters.forEach(char => {
  const span = document.createElement('span');
  span.textContent = char;
  brand.appendChild(span);
});

// Create charcter count variable and set timer with new function called setChar().
let char = 0;
let timer = setInterval(setChar, 100);

//Stop the interval when all characters are rendered else set character span class to fade.
function setChar(){
  const spanChar = document.querySelectorAll('span')[char];
  spanChar.className = 'fade';
  char++;
  char === characters.length && clearInterval(timer);
}
