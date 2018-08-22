/*window.addEventListener('scroll',  function () {
    const nav = document.querySelector('#custom-nav');
    const wScrollCurrent = document.body.scrollTop;
    if (wScrollCurrent <= 0) {
        nav.classList.add('hide-on-scroll');
    } else if(wScrollCurrent > 0) {
        nav.classList.remove('hide-on-scroll');
    }
});
*/

function changeContent(description) {
    console.log(description);
    const myDesc = document.querySelector(description).innerHTML;
    document.querySelector('#beer-header4').innerHTML = myDesc;

}

function changeContentBack(header) {
    console.log(header);
    const myHead = document.querySelector(header).innerHTML;
    document.querySelector('#beer-description4').innerHTML = myHead;
}
