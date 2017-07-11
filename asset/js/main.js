$(function () {
    // Interactive Module Active
    $(document).on('click', '.section-ux .block', function () {
        $('.section-ux .detail-wrapper').show();
    });

    // close X
    $(document).on('click', '.section-ux .btn-close', function () {
        $('.section-ux .detail-wrapper').hide();
    });
})