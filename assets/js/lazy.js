// Lazy Loader: https://github.com/verlok/lazyload#-recipes
import LazyLoad from 'vanilla-lazyload';

// Options
const lazyLoadOptions = {
  elements_selector: `.lazy`,
  threshold: 500,
  class_loading: `loading`,
  class_error: `error`,
};

const myLazyLoad = new LazyLoad(lazyLoadOptions);
