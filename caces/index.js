const selectClickHandler = (targetId) => {
    if (targetId === 'caces-engineering') {
        const unSelect = Array.from(document.getElementsByClassName('caces-science'))
        console.log(unSelect);
        unSelect.forEach(element => {
            element.classList.add('hidden')
        });

        console.log('unSelect', unSelect);
        const select = Array.from(document.getElementsByClassName('caces-engineering'))
        select.forEach(element => {
            element.classList.remove('hidden');
        });

        console.log('select', select);
    }
    else if (targetId === 'caces-science') {
        const unSelect = Array.from(document.getElementsByClassName('caces-engineering'))
        unSelect.forEach(element => {
            element.classList.add('hidden')
        });
        console.log('unSelect', unSelect);
        const select = Array.from(document.getElementsByClassName('caces-science'))
        select.forEach(element => {
            element.classList.remove('hidden');
        });
        console.log('select', select);
    }
    else if (targetId === 'caces-ALL') {

        const selectSc = Array.from(document.getElementsByClassName('caces-science'))
        selectSc.forEach(element => {
            element.classList.remove('hidden');
        });
        const selectEn = Array.from(document.getElementsByClassName('caces-engineering'))
        selectEn.forEach(element => {
            element.classList.remove('hidden');
        });
    }
}