const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Enviando...';

   const serviceID = 'default_service';
   const templateID = 'template_i5hal5p';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Enviar Email';
      alert('¡Enviado!');
    }, (err) => {
      btn.value = 'Enviar Email';
      alert(JSON.stringify(err));
    });
});
