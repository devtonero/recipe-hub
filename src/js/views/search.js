import View from './parent-view';

class SearchV extends View {
  _parentEl = document.querySelector('.search');
  _;
  getQuery() {
    const ourQuery = this._parentEl.querySelector('.search__field').value;
    this._clearInput();
    return ourQuery;
  }
  handleSearch(handler) {
    this._parentEl.addEventListener('submit', e => {
      e.preventDefault();
      handler();
    });
  }
  _clearInput() {
    this._parentEl.querySelector('.search__field').value = '';
  }
}
export default new SearchV();
