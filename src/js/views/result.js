import View from './parent-view';
import icon from 'url:../../img/icons.svg';

class ResultV extends View {
  _parentEl = document.querySelector('.results');
  _errorMessage = 'No recipe found for Your search, Please try Another One';
  _message = '';

  _generateMarkup() {
    return this._data.map(this._generateMarkupPrev).join('');
  }

  _generateMarkupPrev(res) {
    return `
    <li class="preview">
            <a class="preview__link " href="#${res.id}">
              <figure class="preview__fig">
                <img src="${res.image}" alt="${res.title}" />
              </figure>
              <div class="preview__data">
                <h4 class="preview__title">${res.title}</h4>
                <p class="preview__publisher">${res.publisher}</p>
               
              </div>
            </a>
          </li>
    `;
  }
}
export default new ResultV();
