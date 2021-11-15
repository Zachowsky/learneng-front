import $ from "jquery";

$('body').scroll(function() {
    if ($('body').scrollTop() > 350) {
        $('#button').addClass('show');
    } else {
        $('#button').removeClass('show');
    }
});