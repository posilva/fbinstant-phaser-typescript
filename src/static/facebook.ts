// Only way to assume Facebook Instant Games SDK is available in TypeScript is to declare the namespace it will encompass
declare var FBInstant: any;

// Basically im not a fan of declaring anything because it requires assuming something that is difficult to use without 
// having a solid understanding of the documentation. So this one is very basic.


export default class FacebookInstant {

    private static _interstitial: any = null;

    private static _hasStarted: boolean = false;
    private static _hasInitialized: boolean = false;
    private static _hasLoaded: boolean = false;

    public static get initialized(): boolean {
        return this._hasInitialized;
    }
    public static get started(): boolean {
        return this._hasStarted;
    }
    public static get loaded(): boolean {
        return this._hasLoaded;
    }



    public static get available(): boolean {
        return window.location.host == "www.facebook.com";
    }
    /*
     * Initializes the SDK library. This should be called before any other SDK functions.
     */
    public static async InitializeAsync(): Promise<boolean> {
        if (this._hasInitialized) {
            return true;
        }
        await FBInstant.initializeAsync()
            .then(() => {
                this._hasInitialized = true;
            })
            .catch((err: any) => {
                this._hasInitialized = false;
            });
        return this._hasInitialized;
    }
    /*
     * Report the game's initial loading progress.
     * @param percentage number A number between 0 and 100.
     */
    public static SetLoadingProgress(percentage: number): boolean {
        if (this._hasLoaded) {
            return true;
        }
        FBInstant.setLoadingProgress(percentage);
        if (percentage >= 100) {
            this._hasLoaded = true;
        }
        return this._hasLoaded;
    }

    /*
     * This indicates that the game has finished initial loading and is ready to start. Context information will be up-to-date when the returned promise resolves.
     */
    public static async StartGameAsync(): Promise<boolean> {
        if (this._hasStarted) {
            return true;
        }
        await FBInstant.startGameAsync()
            .then(() => {
                this._hasStarted = true;
            })
            .catch((err: any) => {
                this._hasStarted = false;
            });
        return this._hasStarted;
    }

    //    var playerName = FBInstant.player.getName();
    //var playerPic = FBInstant.player.getPhoto();
    //var playerId = FBInstant.player.getID();

    /*
     * 
     */
    public static GetPlayerName(): string {
        return null;
    }



    public static TestAsync(milliseconds: number): Promise<boolean> {
        return new Promise<boolean>(resolve => {
            setTimeout(() => {
                resolve(true);
            }, milliseconds);
        });
    }

}
