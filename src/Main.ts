let main;

class Main {
    private readonly _videoList: NodeList;
    private _count:number = 0;

    constructor() {
        this._videoList = document.body.querySelectorAll('video');
        let n:number = this._videoList.length;
        for(let i:number = 0;i<n;i++)
        {
            let video = this._videoList[i];
            //@ts-ignore
            video.style.display = "none";
        }
        this.play();
    }

    play(): void {
        const ended = () => {
            video.removeEventListener("ended", ended);
            video.style.display = "none";
            this.next();
        };
        let video:HTMLVideoElement = this._videoList[this._count] as HTMLVideoElement;
        video.addEventListener("ended", ended);
        video.style.display = "";
        video.play();
    }
    next():void
    {
        this._count++;
        if(this._count >= this._videoList.length)
        {
            this._count = 0;
        }
        this.play();
    }
}


window.addEventListener("load", () => {
    main = new Main();
});