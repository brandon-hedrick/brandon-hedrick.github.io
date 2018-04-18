import styled from 'styled-components';
import pubSub from '../utils/pubsub';

export const breakpoints = {
  mobile: 480,
  tablet: 1024,
};

export const MobileLikeFormat = (styles: string) => `
@media screen and (orientation: portrait) {
  ${styles}
}
@media screen and (max-width: ${breakpoints.tablet - 1}px) {
  ${styles}
}`;

export const ScreenResize = (() => {

  let instance: any;

  const init = () => {
    const ps = pubSub();
    const getOrientation = (w: number , h: number): 'portrait' | 'landscape' =>
      w <= h ? 'portrait' : 'landscape';

    let debouncedResize: any = null;

    const resizeHandler = (e: Event) => {
      const w = e.target as Window;
      ps.next('width', w.innerWidth);
      ps.next('orientation', getOrientation(w.innerWidth, w.innerHeight));
    };

    const resizedebouncer = (e: Event) => {
      if ( !debouncedResize ) {
        debouncedResize = setTimeout(() => {
          debouncedResize = null;
          resizeHandler(e);
        }, 66);
      }
    };

    let orientation: string;
    let width: number;

    const orientationChange$ = ps
      .subscribe('orientation', (o: string) => {
         screenSizeEval(orientation = o, width);
       }, true);

    const widthChange$ = ps
      .subscribe('width', (w: number) => {
        screenSizeEval(orientation, width = w);
       }, true);

    const screenSizeEval = (o: string, w: number) => {
      ps.next('shouldRenderMobileLike',
        ( o === 'portrait' )
        ? true
        : breakpoints.tablet > w);
    };

    ps.next('width', window.innerWidth);
    ps.next('orientation', getOrientation(window.innerWidth, window.innerHeight));
    window.addEventListener('resize', resizedebouncer);

    return ps;
  };

  return {
    resizeEvents: () => instance ? instance : instance = init(),
  };
})();
