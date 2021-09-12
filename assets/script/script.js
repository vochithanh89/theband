// Ticket
const payBtns = document.querySelectorAll('.js-pay-ticket'),
    modal = document.querySelector('.js-modal'),
    closeTicket = document.querySelector('.js-close-ticket'),
    modalContainer = document.querySelector('.js-modal-container');


for (const payBtn of payBtns) {
    payBtn.addEventListener('click', function() {
        modal.classList.add('modal-open');
    })
}

closeTicket.addEventListener('click', function() {
    modal.classList.remove('modal-open');
})

modal.addEventListener('click', function() {
    modal.classList.remove('modal-open');
})

modalContainer.addEventListener('click', function(event) {
    event.stopImmediatePropagation();
})

// Menu mobile

const menuMobile = document.querySelector('.js-menu-btn'),
    header = document.querySelector('#header'),
    heightHeader = header.clientHeight, 
    menuItems = document.querySelectorAll('#nav > li > a');

menuMobile.addEventListener('click', function() {
    var isOpen = header.clientHeight === heightHeader;
    if (isOpen) {
        header.style.height = 'auto';
    }
    else {
        header.style.height = heightHeader + 'px';
    }
    
})

for (var menuItem of menuItems) {
    const isParent = menuItem.nextElementSibling && menuItem.nextElementSibling.classList.contains('subnav');
    menuItem.addEventListener('click', function() {
        if (!isParent) {
            header.style.height = null;
        }
        else {
            event.preventDefault();
        }

    })
}
