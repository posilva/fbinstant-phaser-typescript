// Store global static properties and functions used throughout the game, and handle different use cases


export default class Settings {
    public static get gameWidth(): number {
        return 720;
    }
    public static get gameHeight(): number {
        return 1280;
    }
    public static get gameRatio(): number {
        return this.gameWidth / this.gameHeight;
    }
    public static get gameTitle(): string {
        return "Phaser & Facebook Instant Starter";
    }
    public static get gameScene(): string {
        return 'Game Scene';
    }
    public static get menuScene(): string {
        return 'Main Menu';
    }
    public static get pauseScene(): string {
        return 'Pause Menu';
    }
    public static get diagnosticsScene(): string {
        return 'Facebook Diagnostics';
    }
    public static get textTitleStyle(): object {
        return { fontFamily: 'Arial', fontSize: 40, color: '#000000', backgroundColor: '#FFFFFF', align: 'left' };
    }
    public static get textSubtitleStyle(): object {
        return { fontFamily: 'Arial', fontSize: '30px', color: '#000000', backgroundColor: '#FFFFFF', align: 'left' };
    }
    public static get textParagraphStyle(): object {
        return { fontFamily: 'Arial', fontSize: 20, color: '#000000', backgroundColor: '#FFFFFF', align: 'left' };
    }
    public static get backgroundColour(): string {
        return "#0000FF";
    }
}