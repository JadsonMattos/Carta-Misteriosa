const displayCarta = document.getElementById('carta-gerada');
const btnCriar = document.getElementById('criar-carta');
const inputTexto = document.getElementById('carta-texto');

const erase = () => {
  displayCarta.innerHTML = '';
};

const classes = {
  estilo: ['newspaper', 'magazine1', 'magazine2'],
  tamanho: ['medium', 'big', 'reallybig'],
  rotação: ['rotateleft', 'rotateright'],
  inclinação: ['skewleft', 'skewright'],
};

const randomClass = (group) => {
  const groupClass = classes[group];
  const randomIndex = Math.floor(Math.random() * groupClass.length);
  return groupClass[randomIndex];
};

const changeStyle = (event) => {
  const word = event.target;
  word.classList.remove(...word.classList);

  Object.keys(classes).forEach((group) => {
    const random = randomClass(group);
    word.classList.add(random);
  });
};

const count = document.createElement('p');
count.id = 'carta-contador';

const createSpan = () => {
  if (inputTexto.value.trim() !== '') {
    const words = inputTexto.value.split(' ');
    count.textContent = `${words.length}`;
    words.forEach((word) => {
      const span = document.createElement('span');
      span.textContent = word;
      Object.keys(classes).forEach((group) => {
        const random = randomClass(group);
        span.classList.add(random);
      });
      span.addEventListener('click', changeStyle);
      displayCarta.appendChild(span);
      displayCarta.appendChild(document.createTextNode(' '));
    });
  } else {
    displayCarta.textContent = 'Por favor, digite o conteúdo da carta.';
    count.textContent = '';
  }displayCarta.appendChild(count);
};

btnCriar.addEventListener('click', () => {
  erase();
  createSpan();
});
