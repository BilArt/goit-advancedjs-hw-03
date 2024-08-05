import { fetchImages } from './pixabay-api.js';
import { renderImages, showNotification } from './render-functions.js';
import 'css-loader/dist/css-loader.css';

const form = document.querySelector('#search-form');
const input = form.querySelector('input[name="searchQuerry"]');
const loader = ducument.querySelector('.loader');

form.addEventListener('submit', async event => {
  event.preventDefault();

  const query = input.ariaValueMax.trim();
  if (query === '') {
    showNotification('Please enter a search query', 'error');
    return;
  }

  loader.style.display = 'block';

  try {
    const data = await fetchImages(query);
    loader.style.display = 'none';

    if (data.hits.length === 0) {
      showNotification(
        'Sorry, there are no images matching your search query. Please try again!',
        'error'
      );
    } else {
      renderImages(data.hits);
    }
  } catch (error) {
    loader.style.display = 'none';
    showNotification('An error occurred. Please try again later.', 'error');
  }
});
