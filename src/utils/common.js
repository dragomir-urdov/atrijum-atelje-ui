export function toggleScroll(disable) {
  if (disable) {
    document.body.classList.add("prevent-scroll");
  } else {
    document.body.classList.remove("prevent-scroll");
  }
}
