import { effect } from '@angular/core';
import { useIosHighlight as sharedUseIosHighlight } from '../../shared/use-ios-highlight.js';
import { injectKonstaContext } from './konsta-context.js';

type Getter<T> = () => T | null | undefined;

export interface UseIosHighlightOptions {
  element: Getter<HTMLElement>;
  enabled?: () => boolean;
}

export const useIosHighlight = (options: UseIosHighlightOptions) => {
  const ctx = injectKonstaContext();
  const highlightData: Record<string, any> = {};

  effect((onCleanup) => {
    const el = options.element();
    const isEnabled = options.enabled?.() ?? true;
    const hoverEnabled = ctx.iosHoverHighlight();

    if (!el || !isEnabled || !hoverEnabled || typeof window === 'undefined') {
      return;
    }

    const { attachEvents, detachEvents, removeHoverHighlight } =
      sharedUseIosHighlight({
        getEl: () => options.element() ?? el,
        enabled: () =>
          (options.enabled?.() ?? true) && ctx.iosHoverHighlight(),
        data: highlightData,
      });

    attachEvents();

    onCleanup(() => {
      removeHoverHighlight();
      detachEvents();
    });
  });
};
