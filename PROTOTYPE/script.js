<script>
document.addEventListener('DOMContentLoaded', function() {
    const radioButtons = document.querySelectorAll('.radio-group input[type="radio"]');
    const labels = document.querySelectorAll('.radio-group label');

    radioButtons.forEach(radio => {
        radio.addEventListener('change', function() {
            labels.forEach(label => {
                if (label.htmlFor === radio.id) {
                    label.classList.add('selected');
                } else {
                    label.classList.remove('selected');
                }
            });
        });
    });
});
</script>