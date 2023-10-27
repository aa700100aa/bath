//export const importTest = "import";
/**
 * スムーススクロール
 */
export class SmoothScroll {
  /**
   * スクロールさせる位置、開始時間、現在のスクロール位置を設定
   */
  constructor(obj) {
    this.smoothElement = [].slice.call(document.getElementsByClassName(obj.triggerClass));
    this.duration = obj.duration;
    this.animationId;
    this.movePosition;
    this.startScrollY;
    this.smoothElement.forEach(element => {
      element.addEventListener('click', event => {
        this.targetId = event.currentTarget.getAttribute(obj.targetValue);
        //TOPへ戻る場合
        if (this.targetId === "#") {
          this.targetPosition = 0;
        //ページ下部に近い要素の場合
        } else if (document.querySelector(this.targetId).getBoundingClientRect().top + pageYOffset + innerHeight > document.body.clientHeight) {
          //ドキュメント全体の高さからviewport分の高さを除く
          this.targetPosition = document.body.clientHeight - innerHeight;
        //上記以外
        } else {
          this.targetPosition = document.querySelector(this.targetId).getBoundingClientRect().top + pageYOffset - document.getElementById('js-header').offsetHeight;
        }
        // Date.now()で開始時間をセット
        this.startTime = Date.now();
        // 現在のスクロール位置をセット
        this.startScrollY = pageYOffset;
        // アニメーション実行
        this.smoothScroll();
      });
    });
  }
  /**
   * イージング関数
   * @param x
   * @returns {number}
   */
    easeInOutQuad(x){
    return x < 0.5 ? 2 * x * x : 1 - Math.pow(-2 * x + 2, 2) / 2;
  }
  /**
   * スクロール処理
   */
    smoothScroll() {
    // 現在時刻と開始時刻の差から進捗度を算出（時刻を使用することでデバイスのリフレッシュレートに依存させない）
    const progress = Math.min(1, (Date.now() - this.startTime) / this.duration);
    // スタート位置に（1 - 進捗度）を掛けたものをスクロール位置に設定。進捗度にイージングをかけることで、スクロール量をイージングさせる
    this.movePosition = this.startScrollY + (this.targetPosition - this.startScrollY) * this.easeInOutQuad(progress);
    window.scrollTo(0, this.movePosition);
    // 進捗度が1未満（=100%ではない）場合、再帰的に呼び出す
    if (progress < 1) {
      this.animationId = requestAnimationFrame(() => {
        this.smoothScroll();
      });
    }
  }
}
