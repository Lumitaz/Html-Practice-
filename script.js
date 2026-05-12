// Dropdown: click/tap to toggle, click outside to close
document.addEventListener('DOMContentLoaded', function () {
    var triggers = document.querySelectorAll('.dropdown-trigger');

    triggers.forEach(function (btn) {
        btn.addEventListener('click', function (e) {
            e.stopPropagation();
            var dd = btn.closest('.dropdown');
            // Close other open dropdowns
            document.querySelectorAll('.dropdown.open').forEach(function (d) {
                if (d !== dd) d.classList.remove('open');
            });
            dd.classList.toggle('open');
        });
    });

    // Close all when clicking elsewhere
    document.addEventListener('click', function (e) {
        if (!e.target.closest('.dropdown')) {
            document.querySelectorAll('.dropdown.open').forEach(function (d) {
                d.classList.remove('open');
            });
        }
    });

    // Close on Escape key
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
            document.querySelectorAll('.dropdown.open').forEach(function (d) {
                d.classList.remove('open');
            });
        }
    });
});
