import './style.css';
import Swal from 'sweetalert2';

// Seletores
const card = document.getElementById('card');
const name = document.getElementById('name');
const button = document.getElementById('button-Sort');
const lado = document.getElementById('lado');
const publisher = document.getElementById('publisher');
const alterEgos = document.getElementById('alterEgos');
const aparicao = document.getElementById('fistAppearance');

const ACCESS_TOKEN = 903323361002281;
const URL_BASE = `https://www.superheroapi.com/api.php/${ACCESS_TOKEN}`;

const randomHero = () => Math.floor(Math.random() * 1000) + 1;


button.addEventListener('click', async (event) => {
  event.preventDefault();
  const idHeroi = randomHero()
  fetch(`${URL_BASE}/${idHeroi}`).then((res) => res.json()).then((data) => {
    console.log(data)
    name.innerHTML = `Nome: ${data.name}`;
    card.src = data.image.url;
    // publisher.innerHTML = `${data.bography.publisher}`
  }).catch((error) => Swal.fire({
    title: 'Error!',
    text: 'Heroi não encontrado, id invalido!',
    icon: 'error',
    confirmButtonText: 'Tente novamente'
  }))
});