(() => {
  'use strict';
  function e(e, t, n, i) {
    let o = e;
    return (
      (o = document.createElement(e)),
      o.setAttribute('id', t),
      o.setAttribute('class', n),
      (o.textContent = i),
      o
    );
  }
  const t = () => {
    const t = e('ul', 'menu');
    return (
      (t.innerHTML =
        '<li class="menu item"> <p class="menu item name">Beef Gyro Platter</p> <img class="menu item photo" src="resources/photos/food/beef-gyro-platter-530x530.jpeg" /> </li> <li class="menu item"> <p class="menu item name">Chicken Gyro Platter</p> <img class="menu item photo" src="resources/photos/food/chicken-platter-530x530.jpeg" /> </li> <li class="menu item"> <p class="menu item name">Combo Platter</p> <img class="menu item photo" src="resources/photos/food/combo-platter-530x530.jpeg" /> </li> <li class="menu item"> <p class="menu item name">Falafel Platter</p> <img class="menu item photo" src="resources/photos/food/falafel-platter-530x530.jpeg" /> </li>'),
      t
    );
  };
  void 0 === Node.prototype.appendChildren &&
    (Node.prototype.appendChildren = function () {
      let e = [...arguments];
      1 == e.length && '[object Array]' === Object.prototype.toString.call(e[0]) && (e = e[0]);
      const t = document.createDocumentFragment();
      e.forEach((e) => t.appendChild(e)), this.appendChild(t);
    });
  const n = t(),
    i = (() => {
      const t = e('div', 'address'),
        n = e('p', 'addressP');
      return (
        (n.innerHTML =
          '1234 Delicious St.</ln>Tasty City, Yummy 98765 </ln><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193432.64579915005!2d-73.93862270198392!3d40.753554203112245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258f86feb1ed1%3A0x6c2c3c20a0a0e151!2sThe%20Halal%20Guys!5e0!3m2!1sen!2sus!4v1621557070635!5m2!1sen!2sus" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>'),
        t.appendChild(n),
        t
      );
    })();
  (function () {
    const n = document.getElementById('content'),
      i = (function () {
        const t = e('section', 'header'),
          n = e('header', 'title-bar', void 0, void 0),
          i = e('p', void 0, 'title', 'Halal Guys');
        return t.appendChild(n), n.appendChild(i), t;
      })(),
      o = (function () {
        const t = e('div', 'nav-bar', void 0),
          n = e('button', 'Menu', 'nav bar item', 'Menu'),
          i = e('button', 'Catering', 'nav bar item', 'Catering'),
          o = e('button', 'ContactUs', 'nav bar item', 'Contact Us');
        return (
          n.setAttribute('href', ''),
          i.setAttribute('href', ''),
          o.setAttribute('href', ''),
          t.appendChildren(n, i, o),
          t
        );
      })(),
      s = (function () {
        const n = e('div', 'contentWindow');
        return n.appendChildren(t()), n;
      })(),
      c = (() => {
        const t = e('footer', 'footerSection'),
          n = e('section', 'socialMediaContact');
        n.innerHTML =
          '<ul class="socialmedia list"> <li class="socialmedia item"> <img class="social icon" id="iconFacebook" src="resources/photos/icons/facebook-icon.svg" /> </li> <li class="socialmedia item"> <img class="social icon" id="iconTwitter" src="resources/photos/icons/twitter-icon.svg" /> </li> <li class="socialmedia item"> <img class="social icon" id="iconInstagram" src="resources/photos/icons/instagram-icon.svg" /> </li> </ul>';
        const i = e('section', 'rights');
        return (
          (i.innerHTML = '<div><p>All Rights Reserved 2021</p></div>'),
          t.appendChild(n),
          t.appendChild(i),
          t
        );
      })();
    n.appendChildren(i, o, s, c);
  })(),
    document.getElementById('Menu').addEventListener('click', () => {
      (document.getElementById('contentWindow').innerHTML = ''),
        document.getElementById('contentWindow').appendChild(n);
    }),
    document.getElementById('Catering').addEventListener('click', () => {
      (document.getElementById('contentWindow').innerHTML = ''),
        document.getElementById('contentWindow').appendChild(n);
    }),
    document.getElementById('ContactUs').addEventListener('click', () => {
      (document.getElementById('contentWindow').innerHTML = ''),
        document.getElementById('contentWindow').appendChild(i);
    });
})();
