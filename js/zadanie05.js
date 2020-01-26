const allButtons = document.querySelectorAll('button');
const container = document.getElementById('container');
{

    for (i = 0; i < allButtons.length; i++) {
        allButtons[i].addEventListener('click', function () {
            container.innerHTML = this.dataset.text;
        })
    }

}
