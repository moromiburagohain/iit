$(document).ready(function () {
            $('.dropdown-submenu > a').on("click", function (e) {
            e.preventDefault();
            e.stopPropagation();
            $(this).next('.dropdown-menu').toggle();
            });

            // Close submenus when parent dropdown closes
            $('.dropdown').on('hidden.bs.dropdown', function () {
            $(this).find('.dropdown-menu').hide();
            });

              document.getElementById("currentYear").textContent = new Date().getFullYear();

        });
