class example1 extends Phaser.scene {
    constructor() {
        super({key : 'exapmle1'});
    }

    preload(){
        this.preload.image('sky', 'assets/sky.png');
    }
    create(){
        this.image = this.add.image(400, 300, 'sky');
    }
}