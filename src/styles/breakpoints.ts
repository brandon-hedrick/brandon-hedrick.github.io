import styled from 'styled-components';
import pubSub from '../utils/pubsub';

export const breakpoints = {
  mobile: 1024,
};

export const MobileLikeFormat = (styles: string) => `
@media screen and (orientation: portrait) {
  ${styles}
}
@media screen and (max-width: ${breakpoints.mobile - 1}px) {
  ${styles}
}`;

export const ScreenResize = (() => {

  let instance: any;

  const createInstance = () => {
    const getOrientation = (w: number , h: number): 'portrait' | 'landscape' =>
      w < h ? 'portrait' : 'landscape';

    let throttledResize: any = null;

    const resizeHandler = (e: Event) => {
      const w = e.target as Window;
      instance.next('width', w.innerWidth);
      instance.next('orientation', getOrientation(w.innerWidth, w.innerHeight));
    };

    const resizeThrottler = (e: Event) => {
      if ( !throttledResize ) {
        throttledResize = setTimeout(() => {
          throttledResize = null;
          resizeHandler(e);
        }, 250);
      }
    };

    pubSub.next('width', window.innerWidth);
    pubSub.next('orientation', getOrientation(window.innerWidth, window.innerHeight));
    window.addEventListener('resize', resizeThrottler);

    return pubSub;
  };

  return {
    resizeEvents: () => instance ? instance : instance = createInstance(),
  };
})();

(() => {
  setTimeout(() => {
    const subscriber = ScreenResize.resizeEvents().subscribe('orientation', (e: string) => { console.log(e); }, true);
  }, 5000);
})();
