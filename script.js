$(document).ready(function () {
    $('.option-btn').on('click', function () {
        alert($(this).text() + ' clicked!');
    });
    $('.near-me button').on('click', function () {
        alert('Showing nearby buses...');
    });
});
