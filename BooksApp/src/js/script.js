{
  'use strict';

  const select = {
    templateOf: {
      menuProduct: '#template-book',
    },
    container: {
      poroductList: '.books-list',
    }
  }

  const templates = {
    menuProduct: Handlebars.compile(document.querySelector(select.templateOf.menuProduct).innerHTML),
    productList: Handlebars.compile(document.querySelector(select.container.productList).innerHTML),
  };

  render() {
    for(data of dataSource.books) {
      const generatedHTML = templates.productList;
      const generateDOM = utils.createDOMFromHTML(generatedHTML);

      const productListContainer = document.querySelector(select.container.productList);
      productListContainer.appendChild(generateDOM);
    }
  }
}

render();




