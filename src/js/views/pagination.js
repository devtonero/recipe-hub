import View from './parent-view';
import icon from 'url:../../img/icons.svg';

class PaginationV extends View {
  _parentEl = document.querySelector('.pagination');

  handlerbuttonClick(hander) {
    this._parentEl.addEventListener('click', e => {
      const btn = e.target.closest('.btn--inline');
      if (!btn) return;
      console.log(btn);
      const toPage = +btn.dataset.go;

      hander(toPage);
    });
  }

  _generateMarkup() {
    const curPage = this._data.page;
    const pageNum = Math.ceil(
      this._data.results.length / this._data.resPerPage
    );

    //page 1 and other page
    if (curPage === 1 && pageNum > 1) {
      //       return `

      //             <button class="btn--inline pagination__btn--next">
      //                 <span>Page ${curPage + 1}</span>
      //                 <svg class="search__icon">
      //                 <use href="${icon}#icon-arrow-right"></use>
      //                 </svg>
      //             </button>
      //   `;
      return this._markup('next', curPage + 1);
    }

    //other page
    if (curPage < pageNum) {
      //   return `
      //         <button class="btn--inline pagination__btn--prev">
      //             <svg class="search__icon">
      //             <use href="${icon}#icon-arrow-left"></use>
      //             </svg>
      //             <span>Page ${curPage - 1}</span>
      //         </button>

      //         <button class="btn--inline pagination__btn--next">
      //             <span>Page ${curPage + 1}</span>
      //             <svg class="search__icon">
      //             <use href="${icon}#icon-arrow-right"></use>
      //             </svg>
      //         </button>
      //   `;
      return `${this._markup('prev', curPage - 1)}  ${this._markup(
        'next',
        curPage + 1
      )}`;
    }
    //last page
    if (curPage === pageNum && pageNum > 1) {
      //   return `
      //     <button class="btn--inline pagination__btn--prev">
      //         <svg class="search__icon">
      //         <use href="${icon}#icon-arrow-left"></use>
      //         </svg>
      //         <span>Page ${curPage - 1}</span>
      //     </button>
      //   `;
      return this._markup('prev', curPage - 1);
    }
    //page 1 and no other page
    return '';
    console.log(pageNum);
    //return this._data.map(this._generateMarkupPrev).join('');
  }

  _markup(pos, num) {
    return `<button data-go="${num}" class="btn--inline pagination__btn--${pos}">
    ${
      pos === 'prev'
        ? `<svg class="search__icon">
                <use href="${icon}#icon-arrow-left"></use>
                 </svg>
             <span>Page ${num}</span>`
        : `
             <span>Page ${num}</span>
                          <svg class="search__icon">
                          <use href="${icon}#icon-arrow-right"></use>
                       </svg> `
    }
   
  </button>`;
  }
}

export default new PaginationV();
