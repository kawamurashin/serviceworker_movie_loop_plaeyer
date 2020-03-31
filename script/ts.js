var main;
var Main = (function () {
    function Main() {
        this._count = 0;
        this._videoList = document.body.querySelectorAll('video');
        var n = this._videoList.length;
        for (var i = 0; i < n; i++) {
            var video = this._videoList[i];
            video.style.display = "none";
        }
        this.play();
    }
    Main.prototype.play = function () {
        var _this = this;
        var ended = function () {
            video.removeEventListener("ended", ended);
            video.style.display = "none";
            _this.next();
        };
        var video = this._videoList[this._count];
        video.addEventListener("ended", ended);
        video.style.display = "";
        video.play();
    };
    Main.prototype.next = function () {
        this._count++;
        if (this._count >= this._videoList.length) {
            this._count = 0;
        }
        this.play();
    };
    return Main;
}());
window.addEventListener("load", function () {
    main = new Main();
});
//# sourceMappingURL=ts.js.map