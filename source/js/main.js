import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';
import {initAccordions} from './modules/modals/init-accordion';
import {initPhoneMask} from './modules/modals/phone-mask';
import {lazySizes} from './vendor/lazysizes';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {
  const more = document.querySelector('[data-validate="btn-more"]');
  const about = document.querySelector('[data-validate="about"]');
  const name = document.querySelector('[data-validate="name"]');
  const phone = document.querySelector('[data-open-modal="feedback"]');
  const control = document.querySelector('[data-validate="control"]');
  const submit = document.querySelector('[data-validate="submit"]');
  const data = document.querySelector('[data-validate="data"]');
  const modalControl = document.querySelector('[data-validate="modal-control"]');
  const modalSubmit = document.querySelector('[data-validate="modal-submit"]');
  const modalData = document.querySelector('[data-validate="modal-data"]');
  const picture = document.querySelectorAll('[data-validate="picture"]');

  picture.forEach((e) => {
    e.className = '';
  });

  submit.disabled = 'disabled';
  modalSubmit.disabled = 'disabled';
  data.checked = '';
  data.disabled = '';

  modalControl.addEventListener('click', function () {
    if (modalData.checked) {
      modalSubmit.disabled = '';
    } else {
      modalSubmit.disabled = 'disabled';
    }
  });

  control.addEventListener('click', function () {
    if (data.checked) {
      submit.disabled = '';
    } else {
      submit.disabled = 'disabled';
    }
  });

  phone.addEventListener('click', function () {
    setTimeout(function () {
      name.focus();
    }, 100);
  });

  more.addEventListener('click', function (evt) {
    evt.preventDefault();
    if (about.classList.contains('about--more')) {
      about.classList.remove('about--more');
    } else {
      about.classList.add('about--more');
    }
  });

  // Utils
  // ---------------------------------

  iosVhFix();

  // Modules
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initAccordions();
    initModals();
    initPhoneMask();
    lazySizes();
  });
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используется matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
