(function(global) {
    function startMain() {
        console.log("start Main");
        var scriptDiv = document.getElementsByClassName("script")[0];
        scriptDiv.ondragover = Palette.allowDrop;
    }
    global.Main = {startMain: startMain};
    startMain();
    Palette.loadPalette();
})(window);
