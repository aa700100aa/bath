import scrollTo from '../module/scrollTo';

export const common = () => {
  ((d, w) => {

    //スクロール禁止
    let overlayHeight;
    let currentY;
    let isTop = false;
    let isBottom = false;
    let touchStartY;
    let handler;
    w.addEventListener('touchstart', function (e) {
      touchStartY = e.changedTouches[0].clientY;
    });
    const scrollLockChack = function (e) {
      currentY = e.changedTouches[0].clientY;
      overlayHeight = this.clientHeight;
      isTop = touchStartY <= currentY && this.scrollTop <= 0;
      isBottom = touchStartY >= currentY && this.scrollHeight - this.scrollTop <= overlayHeight;
      if (isTop || isBottom) {
        e.preventDefault();
      }
    };

    const scrollLock = (overlay) => {
      handler = scrollLockChack.bind(overlay);
      w.addEventListener('touchmove', handler, { passive: false });
    }
    const releaseScrollLock = () => {
      w.removeEventListener('touchmove', handler, { passive: false });
    }

    const header = d.getElementById('js-header');
    const kvLogoWrap = d.getElementById('js-kvLogoWrap');
    w.addEventListener('scroll',()=>{
      if(kvLogoWrap.getBoundingClientRect().bottom <= 0) {
        header.classList.add('add-visible');
      } else {
        header.classList.remove('add-visible');
      }
    });
    let setKvHeightFlag = false;
    const setVh = () => {
      const vh = w.innerHeight * 0.01;
      const kvLogoWrapHeight = kvLogoWrap.clientHeight;
      const headerHeight = header.clientHeight;
      d.documentElement.style.setProperty('--vh', `${vh}px`);
      //kvの高さを設定するのはロード時の一回のみ
      if(!setKvHeightFlag) {
        d.documentElement.style.setProperty('--loadVh', `${vh}px`);
        setKvHeightFlag = true;
        d.documentElement.style.setProperty('--kvLogoWrapHeight', `${kvLogoWrapHeight}px`);
      }
      d.documentElement.style.setProperty('--headerHeight', `${headerHeight}px`);
    };
    w.addEventListener('load', setVh);
    w.addEventListener('resize', setVh);

    const navHmbg = d.getElementById('js-navHmbg');
    const nav = d.getElementById('js-nav');
    const navClickEvent = (event) => {
      navHmbg.classList[navHmbg.classList.contains('add-open') ? 'remove' : 'add']('add-open');
      if(kvLogoWrap.getBoundingClientRect().bottom <= 0 || navHmbg.classList.contains('add-open')) {
        header.classList.add('add-visible');
      } else {
        header.classList.remove('add-visible');
      }
      d.body.classList[navHmbg.classList.contains('add-open') ? 'add' : 'remove']('add-lock');
      if(navHmbg.classList.contains('add-open')) {
        //nav_innerの高さ取得のため再計算
        setVh();
        scrollLock(nav);
      } else {
        releaseScrollLock();
      }
      nav.classList[navHmbg.classList.contains('add-open') ? 'add' : 'remove']('add-open');
    }
    navHmbg.addEventListener('click',(event)=>{
      navClickEvent(event);
    });
    nav.addEventListener('click',(event)=>{
      navClickEvent(event);
    });

    //ページ内スクロール
    const pageLinks = [].slice.call(d.getElementsByClassName('js-pageLink'));
    pageLinks.forEach(function(element){
      element.addEventListener('click',(event)=>{
        event.preventDefault();
        scrollTo({
          target : d.getElementById(event.target.getAttribute('href').replace('#', '')),
          durationTime : 300,
          headerPadding : header.clientHeight
        });
      });
    });
  })(document, window);
};
