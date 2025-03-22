document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    M.Sidenav.init(elems);

    var sidenavlinks = document.querySelectorAll('.sidenavLink');
    sidenavlinks.forEach(function (link) {
        link.addEventListener('click', function () {
            M.Sidenav.init(elems).close();
        });
    });
});