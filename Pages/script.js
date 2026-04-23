let contact = document.getElementById('ctc');
contact.addEventListener('click',function(){
    setTimeout(() => {
        alert('vous serez contacté dans quelques minutes');
    }, 1000);
    console.log('le script c\'est bien déroulé jusqu\'a la fin');
})

