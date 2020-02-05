$(window).load(function () {
    preloaderFadeOutTime = 3000;

    function hidePreloader() {
        var preloader = $('.spinner-wrapper');
        preloader.fadeOut(preloaderFadeOutTime);
    }
    hidePreloader();
});