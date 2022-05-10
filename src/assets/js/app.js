+( function() {

    /* Ver más items */
  
    function _viewMore(viewMoreClass, itemViewLessClass, viewLessClass) {
      let viewMoreBusinessList = document.querySelectorAll(viewMoreClass);
    
      viewMoreBusinessList.forEach(viewMore => {
        viewMore.addEventListener("click", event => {
          viewMoreBusinessList.forEach(viewHide => {
            viewHide.classList.add("is-hidden");
          });
  
          let businessList = document.getElementsByClassName(itemViewLessClass);
          Array.from(businessList).forEach(item => {
            item.classList.remove("is-hidden");
          });
  
          let viewLessList = document.querySelectorAll(viewLessClass);
          viewLessList.forEach(viewLess => {
            viewLess.classList.remove("is-hidden");
          });
        });
      });
    }
  
    /* Ver menos items */
  
    function _viewLess(viewLessClass, itemViewLessClass, viewMoreClass) {
      let viewLessBusinessList = document.querySelectorAll(viewLessClass);
    
      viewLessBusinessList.forEach(viewLess => {
        viewLess.addEventListener("click", event => {
          viewLessBusinessList.forEach(viewHide => {
            viewHide.classList.add("is-hidden");
          });
  
          let businessList = document.getElementsByClassName(itemViewLessClass);
          Array.from(businessList).forEach(item => {
            item.classList.add("is-hidden");
          });
  
          let viewMoreList = document.querySelectorAll(viewMoreClass);
          viewMoreList.forEach(viewMore => {
            viewMore.classList.remove("is-hidden");
          });
        });
      });
    }

    /* Ver más conquistas */

    _viewMore(".view-more-conquest", "category-detail-list-item view-less", ".view-less-conquest");
  
    /* Ver menos conquistas */
  
    _viewLess(".view-less-conquest", "category-detail-list-item view-less", ".view-more-conquest");
  
    /* Ver más legado */

    _viewMore(".view-more-legacy", "legacies", ".view-less-legacy");
  
    /* Ver menos legado */
  
    _viewLess(".view-less-legacy", "legacies", ".view-more-legacy");

    /* Ver más conocimientos */
  
    _viewMore(".view-more-knowledge", "knowledge-list-item view-less", ".view-less-knowledge");
  
    /* Ver menos conocimientos */
  
    _viewLess(".view-less-knowledge", "knowledge-list-item view-less", ".view-more-knowledge");
  
    /* Ver más herramientas */
  
    _viewMore(".view-more-tools", "tools-list-item view-less", ".view-less-tools");
  
    /* Ver menos herramientas */
  
    _viewLess(".view-less-tools", "tools-list-item view-less", ".view-more-tools");
  
    /* Leer más introducción */
  
    _viewMore(".read-more-about", "read-less-text-about", ".read-less-about");
  
    /* Leer menos introducción */
  
    _viewLess(".read-less-about", "read-less-text-about", ".read-more-about");

    /* Leer más biografía */
  
    _viewMore(".read-more-bio", "read-less-text-bio", ".read-less-bio");
  
    /* Leer menos biografía */
  
    _viewLess(".read-less-bio", "read-less-text-bio", ".read-more-bio");

    /* Leer más presentación */
  
    _viewMore(".read-more-presentation", "read-less-text-presentation", ".read-less-presentation");
  
    /* Leer menos presentación */
  
    _viewLess(".read-less-presentation", "read-less-text-presentation", ".read-more-presentation");

    /* Leer más biografía de presentación */
  
    _viewMore(".read-more-present-bio", "read-less-text-present-bio", ".read-less-present-bio");
  
    /* Leer menos biografía de presentación */
  
    _viewLess(".read-less-present-bio", "read-less-text-present-bio", ".read-more-present-bio");
    
} )();
  