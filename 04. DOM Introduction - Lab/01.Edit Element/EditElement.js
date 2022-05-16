function editElement(element, matcher, replacer) {
    let newStr = element.textContent.replace(matcher, replacer);
    element.textContent = newStr;
}