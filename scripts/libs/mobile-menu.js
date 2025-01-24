class MobileMenu {
  constructor() {
    // 明示的にDOMに初期設定の変数を格納していく。
    this.DOM = {};
    this.DOM.btn = document.querySelector('.mobile-menu__btn');
    this.DOM.cover = document.querySelector('.mobile-menu__cover');
    this.DOM.container = document.querySelector('#global-container');
    // スマホかPCかでイベントの種類を変える。
    //    PC => click
    //    スマホ => touchstart
    this.eventType = this._getEventType();
    this._addEvent();
  }
  _getEventType() {
    // スマホかPCか感知出来る便利な命令。
    const isTouchCapable = "ontouchstart" in window;
    return isTouchCapable ? "touchstart" : "click";
  }
  _toggle() {
    this.DOM.container.classList.toggle('menu-open');
  }
  _addEvent() {
    this.DOM.btn.addEventListener(this.eventType, this._toggle.bind(this));
    this.DOM.cover.addEventListener(this.eventType, this._toggle.bind(this));
  }
}


// class MobileMenu {
//   constructor() {
//     this.DOM = {};
//     this.DOM.btn = document.querySelector(".mobile-menu__btn");
//     this.DOM.cover = document.querySelector(".mobile-menu__cover");
//     this.DOM.container = document.querySelector("#global-container");
//     this.eventType = this._getEventType();
//     this._addEvent();
//   }

//   // 2023/10/02更新: _getEventTypeの内容に動画との差異がありますが、こちらの内容で進めてください。
//   _getEventType() {
//     // 2023/10/02時点ではwindowにontouchstartがあれば大丈夫です。
//     const isTouchCapable = "ontouchstart" in window;

//     return isTouchCapable ? "touchstart" : "click";
//   }

//   _toggle() {
//     this.DOM.container.classList.toggle("menu-open");
//   }

//   _addEvent() {
//     this.DOM.btn.addEventListener(this.eventType, this._toggle.bind(this));
//     this.DOM.cover.addEventListener(this.eventType, this._toggle.bind(this));
//   }
// }
