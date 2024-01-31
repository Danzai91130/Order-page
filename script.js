document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('commandeForm');
    const selectedSauces = document.getElementById('selected-sauces');
    const selectedIngredients = document.getElementById('selected-ingredients');

    const updateSelectedOptions = function(container, inputName) {
        const checkboxes = form.querySelectorAll(`input[name="${inputName}"]:checked`);
        container.innerHTML = '';
        checkboxes.forEach(function(checkbox) {
            const label = document.createElement('label');
            label.textContent = checkbox.value;
            container.appendChild(label);
        });
    };

    form.addEventListener('change', function(event) {
        const target = event.target;
        if (target.matches('input[type="checkbox"]')) {
            if (target.name === 'sauces') {
                updateSelectedOptions(selectedSauces, 'sauces');
            } else if (target.name === 'ingredients') {
                updateSelectedOptions(selectedIngredients, 'ingredients');
            }
        }
    });

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const formData = new FormData(form);
        // Send the form data to the server for processing
        // You can use fetch() or another method for this
    });

    // Trigger initial update of selected options
    updateSelectedOptions(selectedSauces, 'sauces');
    updateSelectedOptions(selectedIngredients, 'ingredients');
});
