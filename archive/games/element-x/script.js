appendRule = (sheet) => {
    console.log({ sheet });
    const len = sheet.cssRules.length;
    sheet.insertRule('body{}', len);
    return sheet.cssRules[len];
}

ruleForScroll = appendRule(Array.from(document.styleSheets).slice(-1)[0]);

randomColor = () => Math.floor(255 * Math.random());

component = document.querySelector('.left-sidebar--sticky-container.js-sticky-leftnav');

component.addEventListener("scroll", function wheelStyle() {
    ruleForScroll.selectorText = '.left-sidebar--sticky-container.js-sticky-leftnav::-webkit-scrollbar-track';
    ruleForScroll.style["background"] = `rgb(${randomColor()},${randomColor()},${randomColor()})`;
});