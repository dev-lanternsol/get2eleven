        var customMenus = document.querySelectorAll('.custom_manu_facets');
        customMenus.forEach(function(customMenu) {
            var inputElement = customMenu.querySelector('input');
            inputElement.addEventListener('click', function() {
                var inputValue = inputElement.value;
alert(inputValue);
                var currentURL = window.location.href;
                var newURL = currentURL + '?inputValue=' + inputValue;
                window.location.href = newURL;
            });
        });
