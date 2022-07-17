import View from './parent-view';
import icon from 'url:../../img/icons.svg';

class PaginationV extends View {
  _parentEl = document.querySelector('.pagination');

  _generateMarkup() {
    const curPage = this._data.page;
    const pageNum = Math.ceil(
      this._data.results.length / this._data.resPerPage
    );

    //page 1 and other page
    if (curPage === 1 && pageNum > 1) {
      return `
      
            <button class="btn--inline pagination__btn--next">
                <span>Page ${curPage + 1}</span>
                <svg class="search__icon">
                <use href="${icon}#icon-arrow-right"></use>
                </svg>
            </button> 
  `;
    }

    //other page
    if (curPage < pageNum) {
      return `
            <button class="btn--inline pagination__btn--prev">
                <svg class="search__icon">
                <use href="${icon}#icon-arrow-left"></use>
                </svg>
                <span>Page ${curPage - 1}</span>
            </button>

            <button class="btn--inline pagination__btn--next">
                <span>Page ${curPage + 1}</span>
                <svg class="search__icon">
                <use href="${icon}#icon-arrow-right"></use>
                </svg>
            </button> 
      `;
    }
    //last page
    if (curPage === pageNum && pageNum > 1) {
      return `
        <button class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
            <use href="${icon}#icon-arrow-left"></use>
            </svg>
            <span>Page ${curPage - 1}</span>
        </button>
      `;
    }
    //page 1 and no other page
    return '';
    console.log(pageNum);
    //return this._data.map(this._generateMarkupPrev).join('');
  }

  _markup() {
    return `<button class="btn--inline pagination__btn--prev">
    <svg class="search__icon">
      <use href="src/img/icons.svg#icon-arrow-left"></use>
    </svg>
    <span>Page 1</span>
  </button>

  <button class="btn--inline pagination__btn--next">
    <span>Page 3</span>
    <svg class="search__icon">
      <use href="src/img/icons.svg#icon-arrow-right"></use>
    </svg>
  </button> `;
  }
}

export default new PaginationV();
