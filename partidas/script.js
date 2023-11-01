const detalhesBtns = document.querySelectorAll('.detalhes-btn');

detalhesBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const detalhes = btn.nextElementSibling;
        const confronto = btn.closest('.confronto');
        
        if (detalhes.style.display === 'block') {
            detalhes.style.display = 'none';
            confronto.style.width = '350px';
        } else {
            detalhes.style.display = 'block';
            confronto.style.width = '380px';
        }
    });
});