function elementIsVisible(element) {
  console.log(element);
  if (element.classList.contains('hidden')) {
    element.classList.remove('hidden');
  }
  return;
}
function elementIsHidden(element) {
  if (!element.classList.contains('hidden')) {
    element.classList.add('hidden');
  }
  return;
}
export { elementIsVisible, elementIsHidden };
