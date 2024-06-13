class DoorScene extends Phaser.Scene {
    constructor() {
        super('DoorScene');
    }

    preload() {
        // Load any assets for the scene here
    }

    create() {
        // Create game objects for the scene here
        const background = this.add.rectangle(0, 0, 800, 600, 0x000000); // Add a black background
        const text = this.add.text(400, 300, 'You entered the door!', { color: '#FFFFFF', fontSize: '32px' }).setOrigin(0.5); // Add some text
    }
}


class NewScene extends Phaser.Scene {
    constructor() {
        super('NewScene');
        this.textBox = null; // Initialize textBox to null
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
        this.load.image('close', 'https://play.rosebud.ai/assets/close.png?gcOI');
        this.load.image('door', 'https://play.rosebud.ai/assets/open door.png?bmzS');
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
            const door = this.add.image(700, 500, 'door');
            door.setScale(0.1);
            door.setInteractive(); // Make the door interactive
            door.on('pointerdown', () => {
                this.scene.start('DoorScene'); // Switch to the DoorScene when the door is clicked
            })
        })

        this.time.delayedCall(13000, () => {
            const close = this.add.image(700, 100, 'close'); // Adding the close button
            close.setScale(0.5);
            close.setInteractive(); // Make the close button interactive
            close.on('pointerdown', () => { // When the close button is clicked
                this.closeTextBox(); // Close any open text box
            });
        });

        this.time.delayedCall(13000, () => {
            const globe = this.add.image(450, 360, 'globe');
            globe.setInteractive(); // make globe clickable
            globe.setScale(0.2);
            globe.on('pointerdown', () => { // when globe is clicked
                this.closeTextBox(); // Close any existing text box
                this.textBox = this.add.text(50, 50, 'You clicked the globe!', { color: '#FFFFFF', fontSize: '20px' }); // create a text box
            });
        })

        this.time.delayedCall(13000, () => {
            const uniform = this.add.image(200, 350, 'uniform');
            uniform.setInteractive(); // make uniform clickable
            uniform.setScale(0.2);
            uniform.on('pointerdown', () => { // when uniform is clicked
                this.closeTextBox(); // Close any existing text box
                this.textBox = this.add.text(50, 50, `Freddie Mercury attended St. Peters School in Panchgani, India, where his musical talent blossomed despite the challenges of being away from his family.\n\nComing from a Parsi Indian background, he embraced his multicultural heritage and excelled in music, forming his first band, The Hectics, while at school. This period marked the beginning of his journey towards becoming an iconic rock musician.`, { color: '#FFFFFF', fontSize: '20px', wordWrap: { width: 500, useAdvancedWrap: true } }); // create a text box with paragraphs
            });
        })

        this.time.delayedCall(13000, () => {
            const player = this.add.image(420, 320, 'player');
            player.setInteractive(); // make record player clickable
            player.setScale(0.2);
            player.on('pointerdown', () => { // when player is clicked
                this.closeTextBox(); // Close any existing text box
                this.textBox = this.add.text(50, 50, `Freddie Mercury's musical career skyrocketed as the charismatic frontman of Queen, renowned for his powerful voice and electrifying stage presence.\n\nHe wrote and performed numerous iconic hits, such as "Bohemian Rhapsody" and "We Are the Champions," cementing his legacy as a rock legend. His innovative approach to music and unforgettable performances continue to influence artists and captivate audiences worldwide.`, { color: '#FFFFFF', fontSize: '20px', wordWrap: { width: 500, useAdvancedWrap: true } }); // create a text box with paragraphs
            });
        })

        this.time.delayedCall(13000, () => {
            const piano = this.add.image(250, 350, 'piano');
            piano.setInteractive(); //make piano clickable
            piano.setScale(0.2);
            piano.on('pointerdown', () => { // when piano is clicked
                this.closeTextBox(); // Close any existing text box
                this.textBox = this.add.text(50, 50, `Freddie Mercury's love for music and his classical training began at a young age in Zanzibar, where he started taking piano lessons.\n\nThis early musical foundation fostered his talent, eventually leading to his legendary career as the frontman of Queen.`, { color: '#FFFFFF', fontSize: '20px', wordWrap: { width: 500, useAdvancedWrap: true } }); // create a text box with paragraphs
            });
        })

        this.time.delayedCall(13000, () => {
            const trunk = this.add.image(400, 400, 'trunk');
            trunk.setInteractive(); //make trunk clickable
            trunk.setScale(0.2);
            trunk.on('pointerdown', () => { // when trunk is clicked
                this.closeTextBox(); // Close any existing text box
                this.textBox = this.add.text(50, 50, `Freddie Mercury, born Farrokh Bulsara, and his family fled from Zanzibar to England in 1964 to escape the violence of the Zanzibar Revolution.\n\nAs political unrest and violence escalated, they sought refuge in London, where Freddie later attended school and began his path to becoming a legendary rock star.`, { color: '#FFFFFF', fontSize: '20px', wordWrap: { width: 500, useAdvancedWrap: true } }); // create a text box with paragraphs
            });
        })
    }

    closeTextBox() {
        if (this.textBox) {
            this.textBox.destroy(); // Destroy the existing text box
            this.textBox = null; // Reset textBox to null
        }
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

        const enter = this.add.image(400, 300, 'enter');

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