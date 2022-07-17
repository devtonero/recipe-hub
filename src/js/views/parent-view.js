import icon from 'url:../../img/icons.svg';

export default class View {
  _data;

  render(data) {
    if (!data || (Array.isArray(data) && data.length === 0))
      return this.renderError();
    this._data = data;
    const html = this._generateMarkup();
    this._clear();
    this._parentEl.insertAdjacentHTML('afterbegin', html);
  }

  renderError(message = this._errorMessage) {
    const html = `<div class="error">
    <div>
      <svg>
         <use href="${icon}#icon-alert-triangle"></use>
      </svg>
    </div>
    <p>${message}</p>
  </div> `;
    this._clear();
    this._parentEl.insertAdjacentHTML('afterbegin', html);
  }
  renderMessage(message = this._message) {
    const html = `<div class="recipe">
    <div class="message">
      <div>
        <svg>
          <use href="${icon}_icon-smile"></use>
        </svg>
      </div>
      <p>${message}</p>
    </div> `;
    this._clear();
    this._parentEl.insertAdjacentHTML('afterbegin', html);
  }

  showSpinner() {
    const html = `
  
          <div class="spinner">
          <svg>
            <use href="${icon}#icon-loader"></use>
          </svg>
        </div> 
  `;
    this._clear();
    this._parentEl.insertAdjacentHTML('afterbegin', html);
  }

  _clear() {
    this._parentEl.innerHTML = '';
  }
}
