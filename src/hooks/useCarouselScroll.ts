import { useRef, useState, useCallback, useEffect } from "react";

export const useCarouselScroll = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const firstItemRef = useRef<HTMLDivElement | null>(null);
  const itemWidthRef = useRef<number>(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const calculateScorllItemWidth = useCallback(() => {
    const el = firstItemRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const styles = window.getComputedStyle(el);
    const marginLeft = parseFloat(styles.marginLeft || "0");
    const marginRight = parseFloat(styles.marginRight || "0");
    itemWidthRef.current = rect.width + marginLeft + marginRight;
  }, []);

  const setScrollButtonStatus = useCallback(() => {
    const scroller = scrollRef.current;
    if (!scroller) return;
    const { scrollLeft, scrollWidth, clientWidth } = scroller;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 1);
  }, []);



  const getScrollToWithBuffer = useCallback(() => {
    const width = itemWidthRef.current;
    if (width && Number.isFinite(width)) return width * 2;
    const fallback = scrollRef.current?.clientWidth ?? 300;
    return fallback * 0.8;
  }, []);



  const handleScrollLeft = useCallback(() => {
    const scroller = scrollRef.current;
    if (!scroller) return;
    scroller.scrollBy({ left: -getScrollToWithBuffer(), behavior: "smooth" });
    requestAnimationFrame(() => setScrollButtonStatus());
  }, [getScrollToWithBuffer, setScrollButtonStatus]);



  const handleScrollRight = useCallback(() => {
    const scroller = scrollRef.current;
    if (!scroller) return;
    scroller.scrollBy({ left: getScrollToWithBuffer(), behavior: "smooth" });
    requestAnimationFrame(() => setScrollButtonStatus());
  }, [getScrollToWithBuffer, setScrollButtonStatus]);



  const onScroll = useCallback(() => {
    setScrollButtonStatus();
  }, [setScrollButtonStatus]);



  useEffect(() => {
    calculateScorllItemWidth();
    setScrollButtonStatus();
    const onResize = () => {
      calculateScorllItemWidth();
      setScrollButtonStatus();
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [calculateScorllItemWidth, setScrollButtonStatus]);

  return {
    scrollRef,
    firstItemRef,
    canScrollLeft,
    canScrollRight,
    handleScrollLeft,
    handleScrollRight,
    onScroll,
  };
};
