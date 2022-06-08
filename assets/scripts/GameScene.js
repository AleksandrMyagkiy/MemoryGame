class GameScene extends Phaser.Scene {
    constructor() {
        super("Game");
    }
    preload() {
        // 1. загрузить бэкгранд
        this.load.image('bg', 'assets/sprites/background.png'); //'bg' - наш бекграунд(называем произвольно)
        this.load.image('card', 'assets/sprites/card.png');
    }
    create() {
        // 2. вывести бэкграунд
        this.add.sprite(0, 0, 'bg').setOrigin(0, 0); // 0 по оси х, 0 по оси у (отсчет с левого верхнего угла), выводим 'bg'

        let positions = this.getCardsPositions();

        for (let position of positions) {
            console.log(this.add.sprite(position.x, position.y, 'card').setOrigin(0, 0));
        }
    }
    getCardsPositions() {
        let positions = [];
        let cardTexture = this.textures.get('card').getSourceImage();
        let cardWidth = cardTexture.width + 4;
        let cardHeight = cardTexture.height + 4;
        let offsetX = (this.sys.game.config.width - cardWidth * config.cols) / 2; // this.sys.game.config.width - ширина заданного экрана
        let offsetY = (this.sys.game.config.height - cardHeight * config.rows) / 2;;

        for (let row = 0; row < config.rows; row++) {
            for (let col = 0; col < config.cols; col++) {
                positions.push({
                    x: offsetX + col * cardWidth,
                    y: offsetY + row * cardHeight,
                });
            }
        }

        return positions;
    }
}