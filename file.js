const tabTitle = document.querySelectorAll('.tab-title');
const tabContent = document.querySelectorAll('.tab-content');
tabTitle.forEach((tab) => {
    tab.addEventListener('click' , () => {
        remove_class_active(tabTitle);
        tab.classList.add('active');
        let dataId = tab.dataset.id;
        remove_class_active(tabContent);
        document.getElementById(dataId).classList.add('active');
    });
    
});


function remove_class_active(items) {
    items.forEach((element) => {
        element.classList.remove('active');
    });
}


