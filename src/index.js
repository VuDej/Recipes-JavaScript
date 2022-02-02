import './style.css';
import list from './modules/displayItems.js';
import getLikeFromAPI from './modules/getDataFromAPI.js';
import popUp from './modules/pop-up.js';
import getInfo from './modules/getInfo.js';

const Footer = () => {
  const footer = document.querySelector('footer');
  const currentYear = new Date().getFullYear();
  footer.innerHTML = `<footer>
                
                <span>&#169;</span> ${currentYear} Created by Microverse under CC License.
            </footer>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>`;
};

Footer();

window.onload = async () => {
  list(await getLikeFromAPI());
};

const anchor = document.createElement('a');
anchor.addEventListener('click', () => {
  popUp(getInfo());
});

const mealsContainer = document.querySelector('.cards-wrapper');
mealsContainer.onclick = async () => {
  popUp(await getInfo());
};
