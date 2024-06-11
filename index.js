class NewScene extends Phaser.Scene {
    constructor() {
        super('NewScene');
    }

    preload() {
        // Load any assets for the scene here
        this.load.image('uniform', 'https://play.rosebud.ai/assets/school-uniform.png?lnS8');
        this.load.image('globe', 'https://play.rosebud.ai/assets/globe.png?Ulzw');
        this.load.image('trunk', 'https://play.rosebud.ai/assets/vintage-suitcase.png?sdFT');
        this.load.image('piano', 'https://play.rosebud.ai/assets/piano.png?U6JX');
        this.load.image('player', 'https://play.rosebud.ai/assets/record player.png?pVPm');
        this.load.image('text1', 'https://play.rosebud.ai/assets/text-1.png?zXsU');
        this.load.image('text2', 'https://play.rosebud.ai/assets/text-2.png?ZERe');
        this.load.image('text3', 'https://play.rosebud.ai/assets/text-3.png?Ji7w');
        this.load.image('hall', 'https://play.rosebud.ai/assets/isometric-living-room.png?5tUE');
    }

    create() {
        // Create game objects for the scene here
        this.time.delayedCall(1000, () => {
            const text1 = this.add.image(400, 300, 'text1');
            text1.setScale(0.6);
            text1.alpha = 0;
            this.tweens.add({
                targets: text1,
                alpha: 1,
                duration: 1000
            });
            this.time.delayedCall(4000, () => {
                this.tweens.add({
                    targets: text1,
                    alpha: 0,
                    duration: 1000
                });
            });
        });

        this.time.delayedCall(5000, () => {
            const text2 = this.add.image(400, 300, 'text2');
            text2.setScale(0.6);
            text2.alpha = 0;
            this.tweens.add({
                targets: text2,
                alpha: 1,
                duration: 1000
            });
            this.time.delayedCall(3000, () => {
                this.tweens.add({
                    targets: text2,
                    alpha: 0,
                    duration: 1000
                });
            });
        });

        this.time.delayedCall(9000, () => {
            const text3 = this.add.image(400, 300, 'text3');
            text3.setScale(0.6)
            text3.alpha = 0;
            this.tweens.add({
                targets: text3,
                alpha: 1,
                duration: 1000
            });
            this.time.delayedCall(3000, () => {
                this.tweens.add({
                    targets: text3,
                    alpha: 0,
                    duration: 1000
                });
            });
        });

        this.time.delayedCall(13000, () => {
            const hall = this.add.image(400, 300, 'hall'); // Adding the living room to the scene
            hall.setScale(0.8); // reduce the size of 'hall' by 20%
        });

        this.time.delayedCall(13000, () =>{
            const globe = this.add.image(400, 300, 'globe');
            globe.setScale(0.2);
        })
        
        this.time.delayedCall(13000, () =>{
            const uniform = this.add.image(200, 350, 'uniform');
            uniform.setInteractive(); // make uniform clickable
            uniform.setScale(0.2);
            uniform.on('pointerdown', () => { // when uniform is clicked
                const textBox = this.add.text(50, 50, 'You clicked the uniform!', { color: '#000000', fontSize: '20px' }); // create a textbox
            });
        })

        this.time.delayedCall(13000, () =>{
            const player = this.add.image(400, 300, 'player');
            player.setScale(0.2);
        })

        this.time.delayedCall(13000, () =>{
            const piano = this.add.image(400, 300, 'piano');
            piano.setScale(0.2);
        })

        this.time.delayedCall(13000, () =>{
            const trunk = this.add.image(400, 300, 'trunk');
            trunk.setScale(0.2);
        })
    }
}

class Example extends Phaser.Scene {
    constructor() {
        super();
    }

    preload() {
        this.load.image('building', 'https://play.rosebud.ai/assets/housebuilding.png?F7X8'); // Loading the building image
        this.load.image('logo', 'https://play.rosebud.ai/assets/freddie-mercury.png?iMoH');
        this.load.image('hall', 'https://play.rosebud.ai/assets/isometric-living-room.png?5tUE');
        this.load.image('enter', 'https://play.rosebud.ai/assets/enter the house.png?qPxJ');
    }

    create() {
        const building = this.add.image(400, 300, 'building'); // Adding the building to the scene
        building.setScale(0.85); // reduce the size of 'building' by 15%

        const enter = this.add.image(400,300, 'enter');

        const particles = this.add.particles('red');
        const emitter = particles.createEmitter({
            speed: 100,
            scale: { start: 1, end: 0 },
            blendMode: 'ADD'
        });

        const logo = this.physics.add.image(400, 100, 'logo');
        logo.setInteractive(); // make logo clickable
        logo.on('pointerdown', () => this.scene.start('NewScene')); // load 'NewScene' when logo is clicked
        logo.setScale(0.4); // make logo 80% bigger

        logo.setVelocity(100, 200);
        logo.setBounce(0.8, 0.8);
        logo.setCollideWorldBounds(true);

        emitter.startFollow(logo);

        this.time.addEvent({
            delay: 3000,
            loop: false,
            callback: () => {
                // this.scene.start('new-scene');
                // Load new scene
            },
        });
    }
}

const container = document.getElementById('renderDiv');
const config = {
    type: Phaser.AUTO,
    parent: 'renderDiv',
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
    },
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 200 }
        }
    },
    scene: [Example, NewScene] // Include 'NewScene' in the list of scenes
};

window.phaserGame = new Phaser.Game(config);