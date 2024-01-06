function handleScrollTo(divToScroll: string) {
  const elementToScroll = divToScroll;

  console.log(elementToScroll);

  document.getElementById(elementToScroll)?.scrollIntoView();
}

const isBrowser = () => typeof window !== "undefined"; //The approach recommended by Next.js

function scrollToTop() {
  if (!isBrowser()) return;
  window.scrollTo({ top: 0, behavior: "smooth" });
}

export { handleScrollTo, scrollToTop };
