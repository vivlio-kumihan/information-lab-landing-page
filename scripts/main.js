class Main {
  constructor() {
    // トリガーの初期化
    this.header = document.querySelector(".header");
    const targets = document.querySelectorAll('.animate-title');
    this.tas = [...targets].map(node => new GsapTextAnimation(node));
    this._observers = [];
    new Modal();
    this._init();
  }

  _init() {
    // Pace.on('done', this._scrollInit.bind(this));
    // new MobileMenu();
    this._scrollInit();
  }

  destroy() {
    this._observers.forEach(so => so.destroy());
    console.log(this);
  };

  // 複数のオブザーバーを配列として格納。
  _scrollInit() {
    this._observers.push(
      new ScrollObserver('.nav-trigger', this._headerBgWhiteCB.bind(this), { once: false }),
      new ScrollObserver('.travel__texts', this._travelTextsCB, { once: true }),
      new ScrollObserver('.cover-slide', this._slideImageCB, { once: true }),
      new ScrollObserver('.appear', this._appearAnimeCB, { once: true }),
      new ScrollObserver('.animate-title', this._textAnimeCB.bind(this), { once: false }),     
      // new ScrollObserver('#main-content', this._asideAnimeCB.bind(this), { once: false, rootMargin: "-300px 0px" }),     
    )
  }
  
  _headerBgWhiteCB(el, isIntersecting) {
    if (isIntersecting) {
      this.header.classList.remove('triggered');
    } else {
      this.header.classList.add('triggered');
    }
  };  

  // Travel Texts
  _travelTextsCB(el, isIntersecting) {
    if (isIntersecting) {
      el.classList.add('inview');
    } else {
      el.classList.remove('inview');
    }
  };

  // Slide in Images
  _slideImageCB(el, isIntersecting) {
    if (isIntersecting) {
      el.classList.add('inview');
    } else {
      el.classList.remove('inview');
    }
  };

  // Appear Anime
  _appearAnimeCB(el, isIntersecting) {
    if (isIntersecting) {
      el.classList.add('inview');
    } else {
      el.classList.remove('inview');
    }
  };

  // Title Text Animation
  _textAnimeCB(el, isIntersecting) {
    if (isIntersecting) {
      this.tas.forEach(ta => { if (ta.DOM.el === el) ta.animate(); })     
    } else {
      el.classList.remove('inview');
    }
  };
}

new Main;