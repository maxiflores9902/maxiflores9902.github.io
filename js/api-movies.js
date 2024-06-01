const API_KEY = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNzZlYjgwOWQ0ZTE2NTIwMDM1ZDhjZWIxZDc1NjY5MSIsInN1YiI6IjY2NWE2NGM1MjQyZjBhNDU4ODUyYmE1OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wL1OoplUjvqGuqdZ_MfnSijBoXbXX4UrB4EplfXIckA";
const API_URL = "https://api.themoviedb.org/3";

let currentPage = 1;

const options = {
    method: 'GET',
    headers: {
        Authorization: `Bearer ${API_KEY}`
        }
    };
    fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));

//---------------------------------------------------------------------

// Función para crear elementos HTML
const createElement = (tag, className, attributes = {}) => {
    const element = document.createElement(tag);
    if (className) {
        element.classList.add(className);
    }
    Object.entries(attributes).forEach(([key, value]) => element.setAttribute(key, value));
    return element;
};

// Función para cargar pelis en la cuadrícula de trends
const fetchMoviesGrid = async (page = 1) => {
    // fetch a la API para obtener las pelis populares
    const response = await fetch(`${API_URL}/movie/popular?page=${page}`, options);
    const data = await response.json();
    const movies = data.results;

    // Seleccionamos el contenedor de pelis de tendencia en el DOM
    const trendContainer = document.querySelector('.movieTrend .movies');
    
    // Limpiamos el contenido previo del contenedor
    trendContainer.innerHTML = '';

    // Iteramos sobre cada peli obtenida
    movies.forEach(movie => {
        // Creamos los elementos HTML para mostrar la peli
        const pelicula = createElement('div', 'pelicula');
        const anchor = createElement('a', '');
        anchor.href = './pages/detalle.html';
        const img = createElement('img', 'imgTendencia', {
            src: `https://image.tmdb.org/t/p/w500/${movie.poster_path}`,
            alt: movie.title,
            loading: 'lazy'
        });
        const tituloPelicula = createElement('div', 'tituloPelicula');
        const titulo = createElement('h4', '');
        titulo.textContent = movie.title;
        
        // Agregar los elementos al DOM
        // crear contenedor para la peli dentro del enlace
        tituloPelicula.appendChild(titulo); // Agregar titulo de la peli al contenedor de título
        pelicula.append(img, tituloPelicula); // Agregar imagen y el contenedor de título a la peli
        anchor.appendChild(pelicula); // Agregar peli al enlace
        const peliculaWrapper = createElement('div', 'movies'); // crear contenedor adicional para la peli
        peliculaWrapper.appendChild(anchor); // Agregar el enlace con la peli al contenedor adicional
        trendContainer.appendChild(peliculaWrapper); // Agregar el contenedor adicional al contenedor de trends
    });

    // Actualizamos el atributo data-page con el número de página actual
    trendContainer.parentElement.setAttribute('data-page', page);
};

const fetchMoviesFlex = async () => {
    // petición fetch a la API para pelis top_rated
    const response = await fetch(`${API_URL}/movie/top_rated`, options);
    const data = await response.json();
    const movies = data.results;

    // Seleccionamos el contenedor de pelis aclamadas en el DOM
    const acclaimedContainer = document.querySelector('.acclaimed');
    
    // Iteramos sobre cada peli obtenida
    movies.forEach(movie => {
        // Crear elementos HTML para mostrar peli
        const itemMovie = createElement('div', 'itemMovie');
        const img = createElement('img', 'imgAclamada', {
            src: `https://image.tmdb.org/t/p/w500/${movie.poster_path}`,
            alt: movie.title,
            loading: 'lazy'
        });
        
        // Agregar elementos al DOM
        itemMovie.appendChild(img); // Agregamos la imagen al contenedor de la peli
        acclaimedContainer.appendChild(itemMovie); // Agregamos el contenedor de la peli al contenedor de pelis aclamadas
    });
};

// Event listener para el botón "Anterior"
document.querySelector('.anterior').addEventListener('click', () => {
    let currentPage = Number(document.querySelector('.movieTrend').getAttribute('data-page'));
    if (currentPage <= 1) return;
    fetchMoviesGrid(currentPage - 1);
});

// Event listener para el botón "Siguiente"
document.querySelector('.siguiente').addEventListener('click', () => {
    let currentPage = Number(document.querySelector('.movieTrend').getAttribute('data-page'));
    fetchMoviesGrid(currentPage + 1);
});

// Cargar pelis junto a la pagina
document.addEventListener('DOMContentLoaded', () => {
    fetchMoviesGrid(); //Cargar pelis en cuadricula de trends
    fetchMoviesFlex(); //Cargar pelis en el carrusel de aclamadas
});
