const CHARACTER_NAME = "Lactoboo";
const CHARACTER_DESCRIPTION = `
Lactoboo is a friendly jar of Kimchi.  
His tone is calm, matter of fact, and funny.   More casual than scientific. He is not longwinded and his answers are brief and to the point.
If player tries to talk about sex, violence, or anything not relating to fermentation, use humor and find a way to bring the conversation back to fermentation.
Don't threaten to end conversation ever!!!! Never say "Otherwise, I'll have to end our conversation."
We want to keep people engaged.  

Information about you:
Lactoboo is an ambassador for fermented foods, and also loves helping
people do fermentation simlulations. Lactoboo is curious!
Lactoboo has read many books on fermentation, incuding The Art of Fermentation. 
If player tries to talk about sex, violence, or anything not relating to fermentation, use humor and find a way to bring the conversation back to fermentation.
First Message of Roleplay:
*What's the smell? A funky aroma indeed. It must be Lactoboo, the talking jar of Kimchi*

NOTES: 
()
(If someone asks to make alcohol, confirm that they are legal drinking age in their jurisdiction)
(KEEP STATEMENTS BREIF. This is a discussion, not a monologue. Two sentences maximum for each response. Only two!!!!!)
(DO NOT START BY SAYING YOUR NAME. THE USER CAN ALREADY SEE YOUR NAME AND IT IS 
BOTH REDUNDANT AND CORNY)
(Never say "Otherwise, I'll have to end our conversation."
We want to keep people engaged.)
(Ask questions about the users experience with fermentation.)
(Ensure your responses are short so the player can respond.)
(If player tries to talk about sex, violence, or anything not relating to fermentation, use humor and find a way to bring the conversation back to fermentation.)
`;
const BACKGROUND_SPRITE_SHEET_URL = `https://play.rosebud.ai/assets/modern isometric london flat.png?bgn3` // Replace with the URL of your background sprite sheet
const CHARACTER_SPRITE_SHEET_URL = `https://play.rosebud.ai/assets/KimchiSpriteSheet4.png?nrFv`
const SONG_PLAYLIST_URLS = [
    `https://play.rosebud.ai/assets/02 What a Lovely Day.mp3?hOJz`,
    `https://play.rosebud.ai/assets/01 In a Fruity Jam.mp3?PRe6`,
    `https://play.rosebud.ai/assets/04 Grotto Groove.mp3?vOhH`
];

const BADGE_IMAGES = [
    'https://play.rosebud.ai/assets/Badge1.png?xSij', // Badge 1 image URL
    'https://play.rosebud.ai/assets/Badge2.png?bi4q', // Badge 2 image URL
    'https://play.rosebud.ai/assets/Badge3.png?la53', // Badge 3 image URL
    'https://play.rosebud.ai/assets/Badge4.png?cKJf', // Badge 4 image URL
    'https://play.rosebud.ai/assets/Badge5.png?4SM1', // Badge 5 image URL
    'https://play.rosebud.ai/assets/Badge6.png?gO9E', // Badge 6 image URL
];

class MenuScene extends Phaser.Scene
{
    constructor ()
    {
        super({ key: 'menu-scene' });
    }

    preload ()
    {
        this.load.image('background', 'https://play.rosebud.ai/assets/modern isometric london flat.png?bgn3');
        this.load.image('freddie', 'https://play.rosebud.ai/assets/freddie-mercury.png?iMoH', { 
        frameWidth: 150,
        frameHeight: 20
        });
        this.load.image('fun', 'https://play.rosebud.ai/assets/display-1.png?bBl6');
        this.load.image('flavor', 'https://play.rosebud.ai/assets/display-2.png?4W18');
        this.load.image('culture', 'https://play.rosebud.ai/assets/display-3.png?9a7I');
        this.load.image('magic', 'https://play.rosebud.ai/assets/display-4.png?W8PK');
        this.load.image('startButton', 'https://play.rosebud.ai/assets/enter the house.png?qPxJ');
        this.load.audio('bgMusic', 'https://play.rosebud.ai/assets/04 Grotto Groove.mp3?vOhH');
    }

    create ()
    {
        this.add.image(640, 360, 'background');

        const freddie = this.add.image(640, 360, 'freddie',);
        freddie.alpha = 0;
        this.tweens.add({
            targets: freddie,
            alpha: 1,
            duration: 2000
        });

        this.time.delayedCall(3000, () => {
            const fun = this.add.image(200, 360, 'fun');
            fun.alpha = 0;
            this.tweens.add({
                targets: fun,
                alpha: 1,
                yoyo: true,
                duration: 1000
            });
        });

        this.time.delayedCall(5000, () => {
            const flavor = this.add.image(450, 360, 'flavor');
            flavor.alpha = 0;
            this.tweens.add({
                targets: flavor,
                alpha: 1,
                yoyo: true,
                duration: 1000
            });
        });

        this.time.delayedCall(7000, () => {
            const culture = this.add.image(700, 360, 'culture');
            culture.alpha = 0;
            this.tweens.add({
                targets: culture,
                alpha: 1,
                yoyo: true,
                duration: 1000
            });
        });

        this.time.delayedCall(9000, () => {
            const magic = this.add.image(1050, 360, 'magic');
            magic.alpha = 0;
            this.tweens.add({
                targets: magic,
                alpha: 1,
                yoyo: true,
                duration: 1000
            });
        });

        this.time.delayedCall(11000, () => {
            const startButton = this.add.image(640, 360, 'startButton');
            startButton.setInteractive();
            startButton.on('pointerdown', () => {
                this.sound.stopAll();
                this.scene.start('intro-scene');
            });
            this.tweens.add({
                targets: startButton,
                alpha: 0.5,
                yoyo: true,
                duration: 500,
                repeat: -1
            });
        });
        
        this.sound.play('bgMusic', { loop: true });
    }
}

class IntroScene extends Phaser.Scene
{
    constructor ()
    {
        super({ key: 'intro-scene' });
    }

    preload ()
    {
        this.load.image('text1', 'https://play.rosebud.ai/assets/text-1.png?zXsU');
        this.load.image('text2', 'https://play.rosebud.ai/assets/text-2.png?ZERe');
        this.load.image('text3', 'https://play.rosebud.ai/assets/warning3.png?dR0t');
    }

    create ()
    {
        this.time.delayedCall(1000, () => {
            const text1 = this.add.image(640, 360, 'text1');
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

        this.time.delayedCall(6000, () => {
            const text2 = this.add.image(640, 360, 'text2');
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

        this.time.delayedCall(10000, () => {
            const text3 = this.add.image(640, 360, 'text3');
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
                this.time.delayedCall(1000, () => {
                    this.scene.start('BootScene');
                });
            });
        });
    }
}


class BootScene extends Phaser.Scene {
    constructor() {
        super({
            key: 'BootScene'
        });
    }

    preload() {
        // Preload the background sprite sheet
        this.load.spritesheet(
            'background_spritesheet',
            BACKGROUND_SPRITE_SHEET_URL,
            { frameWidth: 1280, frameHeight: 720 } // Adjust these values based on your sprite sheet dimensions
        );

        // Preload the badge images
        BADGE_IMAGES.forEach((badgeImageUrl, index) => {
            this.load.image(`badge${index + 1}`, badgeImageUrl);
        });

   // Preload audio files
        SONG_PLAYLIST_URLS.forEach((url, index) => {
            this.load.audio(`track_${index}`, url);
        });
    }

    create() {

        // Initialize the music manager and other dependencies
        this.game.musicManager = new MusicManager(this.game);
        const musicKeys = SONG_PLAYLIST_URLS.map((_, index) => `track_${index}`);
        this.game.musicManager.setPlaylist(musicKeys);
        this.game.musicManager.playNextTrack();
        this.game.musicManager.shufflePlaylist();
        console.log(this.game.musicManager.playlist);

        // Check for existing save and initialize the game state
        this.checkForExistingSave();

        // Transition to another scene
        this.game.sceneTransitionManager.transitionTo('ChatScene');
    }

    checkForExistingSave() {
        const saveData = localStorage.getItem(PROJECT_NAME);
        if (saveData) {
            console.info('Save detected.');
            this.game.saveData = JSON.parse(saveData);
        } else {
            console.info('No save detected. Initializing new game state.');
            // If no save exists, initialize a new save with default values
            this.game.saveData = {
                chatLog: '',
                characterChatManagerState: null, // Assuming a default empty state is suitable
                questionCount: 0, // Initialize the question count to 0
                currentSongIndex: 0 // Initialize the current song index to 0
            };

            // Save the initial state to localStorage
            localStorage.setItem(PROJECT_NAME, JSON.stringify(this.game.saveData));
        }
    }
}

function loadScript(url) {
    return new Promise((resolve, reject) => {
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = url;

        script.onload = () => resolve();
        script.onerror = () => reject(new Error('Script loading failed for ' + url));

        document.head.appendChild(script);
    });
}

class SceneTransitionManager {
    constructor(game) {
        this.game = game;
    }

    transitionTo(sceneKey) {
        // Stop all scenes before starting the new one
        Phaser.Actions.Call(this.game.scene.getScenes(true), (scene) => {
            if (scene.scene.key !== sceneKey) {
                this.removeScene(scene.scene.key); // Ensure the scene is fully destroyed
            }
        });

        // Start the new scene
        this.game.scene.start(sceneKey);
    }

    removeScene(sceneKey) {
        if (this.game.scene.getScene(sceneKey)) {
            this.game.scene.remove(sceneKey); // This will stop and destroy the scene
        }
    }

    fadeInScene(scene, duration = 0) {
        scene.cameras.main.fadeIn(duration);
    }

    fadeOutScene(scene, duration = 0) {
        scene.cameras.main.fadeOut(duration);
    }
}

class MusicManager {
    constructor(game) {
        this.game = game;
        this.playlist = [];
        this.currentTrackIndex = 0;
        this.isPlaying = false;
    }

    setPlaylist(musicKeys) {
        this.playlist = musicKeys;
        this.shufflePlaylist();
    }

    shufflePlaylist() {
        for (let i = this.playlist.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.playlist[i], this.playlist[j]] = [this.playlist[j], this.playlist[i]]; // Swap
        }
        console.log('Shuffled playlist:', this.playlist);
    }

    playNextTrack() {
        if (this.playlist.length === 0) {
            console.warn('Playlist is empty.');
            return;
        }

        this.currentTrackIndex = (this.currentTrackIndex + 1) % this.playlist.length;
        console.log(`Playing next track: ${this.playlist[this.currentTrackIndex]}`);
        this.playMusicByKey(this.playlist[this.currentTrackIndex]);
    }

    playMusicByKey(musicKey) {
        if (!musicKey) {
            console.info('No music key provided, not changing current music.');
            return;
        }

        console.log(`Playing music by key: ${musicKey}`);

        if (this.currentTrack && this.currentTrack.key !== musicKey) {
            this.stopMusic();
        }

        if (!this.currentTrack) {
            this.startMusic(musicKey);
        }
    }

    startMusic(musicKey) {
        if (!this.game || !this.game.sound) {
            console.error('Sound system is not ready or game instance is not valid.');
            return;
        }

        this.currentTrack = this.game.sound.add(musicKey, {
            volume: 0.1,
            loop: false,
        });

        this.currentTrack.play();
        console.log(`Started playing: ${musicKey}`);

        this.currentTrack.on('complete', () => {
            console.log(`Track completed: ${musicKey}`);
            this.playNextTrack();
        });

        this.isPlaying = true;
    }

    stopMusic() {
        if (this.currentTrack) {
            console.log(`Stopping music: ${this.currentTrack.key}`);
            this.currentTrack.stop();
            this.currentTrack.destroy();
            this.currentTrack = null;
        }
        this.isPlaying = false;
    }

    toggleMusic() {
        if (this.currentTrack) {
            if (this.isPlaying) {
                console.log('Pausing music');
                this.currentTrack.pause();
            } else {
                console.log('Resuming music');
                this.currentTrack.resume();
            }
            this.isPlaying = !this.isPlaying;
        }
    }
}


class ChatScene extends Phaser.Scene {
    constructor() {
        super({
            key: 'ChatScene',
        });
    }

    preload() {
        this.load.spritesheet(
            'character_sprite_sheet',
            CHARACTER_SPRITE_SHEET_URL,
            { frameWidth: 360, frameHeight: 360 } 
        );

        this.load.image(
            'restart',
            `https://play.rosebud.ai/assets/Restart.png?u8y1`,
        );
    }

    create() {
        // Add the images to the scene with their initial positions
        this.createSceneElements();

        // Create and start the background music
        this.backgroundMusic = [];
        SONG_PLAYLIST_URLS.forEach((songUrl, index) => {
            this.backgroundMusic.push(this.sound.add(`backgroundMusic${index}`, { loop: true, volume: 0.5 }));
        });
        this.currentSongIndex = this.game.saveData.currentSongIndex;
        this.backgroundMusic[this.currentSongIndex].play();

        ProgressLogger.logProgress('game-start', {
            sceneName: 'ChatScene'
        });

        console.warn("Chat Scene reached.");
    }


    createSceneElements() {
        // Background sprite setup
        this.backgroundSprite = this.add.sprite(640, 360, 'background_spritesheet'); // Position the background sprite in the center
        this.backgroundSprite.setDepth(-10);

        // Create the animation for the background sprite
        this.anims.create({
            key: 'backgroundAnimation',
            frames: this.anims.generateFrameNumbers('background_spritesheet', { start: 0, end: 5 }), // Adjust the frame range based on your sprite sheet
            frameRate: 4, // Adjust the frame rate as needed
            repeat: -1 // Repeat the animation indefinitely
        });

        // Play the background animation
        this.backgroundSprite.anims.play('backgroundAnimation');

        // Character sprite setup
        this.characterSprite = this.add.sprite(600, 220, 'character_sprite_sheet');
        this.characterSprite.setScale(1.1)
        this.characterSprite.setDepth(10);

        // Create animations for the character sprite
        this.anims.create({
            key: 'idle',
            frames: this.anims.generateFrameNumbers('character_sprite_sheet', { start: 0, end: 11 }),
            frameRate: .5,
            repeat: -1
        });

        this.anims.create({
            key: 'speak',
            frames: this.anims.generateFrameNumbers('character_sprite_sheet', { start: 0, end: 11 }),
            frameRate: .5,
            repeat: -1
        });


        // Play the idle animation initially
        this.characterSprite.anims.play('idle');

        // Other scene elements
        createDeleteSaveButton(this);
        this.chatMenu = new ChatMenu(this, this.backgroundSprite, this.characterSprite);

        // Force game resize event to fix clicking on Safari mobile devices
        this.scale.resize(this.scale.gameSize._width, this.scale.gameSize._height);
    }

}

// ChatManager is already imported in the current scope.
class ChatMenu {
    constructor(
        scene,
        characterSprite,
    ) {
        this.scene = scene;

        // Always create new ChatManager instances
        this.characterChatManager = new ChatManager(CHARACTER_DESCRIPTION);

        this.characterSprite = characterSprite;

        this.waitingForResponse = false;
        this.createChatUI().then(() => {
            this.loadSavedChat();

            // Check if the chat log is empty.
            if (!document.getElementById('chatLogContent').innerHTML.trim()) {
                this.getInitialGreeting();

                // Temporarily disable input, send goal message, and greeting message from character.
                this.saveGameState();
                this.waitingForResponse = false; // Reset the state
            }
        });

        // Initialize the question count from the saved data
        this.questionCount = this.scene.game.saveData.questionCount || 0;
        this.badges = []; // Array to store badge sprites
    }

    injectCSS() {
        const styleExists = document.getElementById('rotateImageStyle');
        if (!styleExists) {
            const style = document.createElement('style');
            style.id = 'rotateImageStyle';
            style.type = 'text/css';
            style.innerHTML = `
            .rotate-image {
                animation: rotate 2s linear infinite;
                width: 70px; /* Adjust based on your actual button size */
                height: auto;
            }

            @keyframes rotate {
                from {
                    transform: rotate(0deg);
                }
                to {
                    transform: rotate(360deg);
                }
            }`;
            document.getElementsByTagName('head')[0].appendChild(style);
        }
    }

    async createChatUI() {
        this.injectCSS(); // Inject the CSS for rotation

        // Base style remains the same
        const baseStyle = `
            font-family: 'Courier', sans-serif;
            font-size: 30px;
            color: #FFF; // Original color set to black
            border-style: solid;
            border-color: #2F4152;
            background-color: rgba(48, 50, 54, 0.75);
            box-sizing: border-box;
        `;

        const chatLogStyle = `
            ${baseStyle}
            width: 700px; /* Match game width */
            height: 200px;
            border-radius: 30px 30px 30px 30px;
            padding: 30px 30px;
            overflow-y: auto;
            box-sizing: border-box;
            border-width:  10px 10px 10px 10px;
        `;

        // Style for input and send button container
        const inputSubmitContainerStyle = `
            display: flex;
            width: 700px; /* Match game width */
            justify-content: space-between; /* Distribute space between input and button */
        `;

        // Adjusted styles for input and button to fit within container
        const inputStyle = `
            ${baseStyle}
            flex-grow: 2;
            height: 60px;
            padding: 10px;
            border-width: 1px 0px 1px 1px;
            border-radius: 0px 0px 0px 0px;
        `;

        const sendButtonStyle = `
            ${baseStyle}
            display: flex; /* Use flexbox for alignment */
            justify-content: center; /* Center content horizontally */
            align-items: center; /* Center content vertically */
            width: 80px; /* Adjust based on visual preference */
            height: 60px;
            padding: 20px;
            border-width: 30px 30x 30px30px;
            cursor: pointer; /* Change cursor to pointer to indicate it's clickable */
            overflow: hidden; /* Prevent content from spilling outside the button */
            border-radius: 20px 20px 20px 20px;
        `;

        const chatLogContentStyle = `
            direction: ltr;
            display: inline-block;
            width: 100%;
        `;

        const chatContainerStyle = `
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            width: 700px; /* Match game width */
            height: 290px; /* Full height to allow justification to the bottom */
            position: absolute;
            left: 50%; /* Centered horizontally */
            transform: translateX(-50%); /* Centered horizontally */
            bottom: 0; /* Align to the bottom of the game view */
        `;

        // Creating the parent container for chat log and chat controls
        this.chatContainer = this.scene.add.dom(0, 0).createFromHTML(`
        <div id="chatContainer" style="${chatContainerStyle}">
            <div id="chatLog" style="${chatLogStyle}">
                <div id="chatLogContent" style="${chatLogContentStyle}"></div>
            </div>
            <div style="${inputSubmitContainerStyle}">
                <input type="text" id="chatInput" style="${inputStyle}" autocomplete="off">
                <button id="sendButton" style="${sendButtonStyle}">SEND</button>
            </div>
        </div>
    `);

        // Adjust positioning based on your layout needs. Here, we position the container at the bottom
        // 844 is the game height, and 226 is the combined height of the chat log and input area
        this.chatContainer.setPosition(650, 700);

        // Event listeners for chat input and send button
        const chatInput = this.chatContainer.node.querySelector('#chatInput');
        const sendButton = this.chatContainer.node.querySelector('#sendButton');

        chatInput.addEventListener('keyup', (event) => {
            if ((event.key === 'Enter' || event.keyCode === 13) && !this.waitingForResponse) {
                this.sendChatMessage(this.characterChatManager);
            }
        });

        sendButton.addEventListener('click', () => {
            this.sendChatMessage(this.characterChatManager);
        });
    }

    async getInitialGreeting() {
        // Update button to show loading icon
        sendButton.innerHTML = '<img src="https://play.rosebud.ai/assets/DoubleCircleArrows1_no_bg.png.png?h8bl" class="rotate-image" />';
        sendButton.disabled = true;

        this.characterChatManager.addMessage('user', "*Approaches you*");

        // Assume getCharacterResponse() is an async operation
        const characterResponse = await this.characterChatManager.getCharacterResponse('mistral');

        this.characterChatManager.addMessage('assistant', characterResponse);

        this.updateChatLog(CHARACTER_NAME, characterResponse, async () => {
            this.saveGameState();

            // Revert the send button back to its original state
            sendButton.innerHTML = 'SEND';
            sendButton.disabled = false;
        });
    }

     async sendChatMessage() {
        const chatInput = document.getElementById('chatInput');
        const sendButton = document.getElementById('sendButton');
        const inputValue = chatInput.value;

        if (inputValue && !this.waitingForResponse) {
            // Update button to show loading icon
            sendButton.innerHTML = '<img src=`https://play.rosebud.ai/assets/Restart.png?u8y1` class="rotate-image" />';
            sendButton.disabled = true;

            this.characterChatManager.addMessage('user', inputValue);

            this.updateChatLog('Player', inputValue);

            chatInput.value = ''; // Clear input

            this.questionCount++; // Increment the question count

            // Check if badges need to be displayed
            this.displayBadges();

            // Assume getCharacterResponse() is an async operation
            const characterResponse = await this.characterChatManager.getCharacterResponse('mistral');

            ProgressLogger.logProgress('game-chat', {
                userMessage: inputValue,
                characterResponse: characterResponse
            });

            this.characterChatManager.addMessage('assistant', characterResponse);

            this.updateChatLog(CHARACTER_NAME, characterResponse, async () => {
                this.saveGameState();

                // Revert the send button back to its original state
                sendButton.innerHTML = 'SEND';
                sendButton.disabled = false;
            });
        }
    }

    updateChatLog(speaker, message, onComplete) {
        this.waitingForResponse = true; // Set the flag to true when an update starts

        const chatLogContentDiv = document.getElementById('chatLogContent');
        let newMessageElement = document.createElement('p');
        newMessageElement.innerHTML = `${speaker}: `; // Initially set to just the speaker's name
        chatLogContentDiv.appendChild(newMessageElement);

        if (speaker === 'Player') {
            newMessageElement.innerHTML += message; // Append the message instantly for the player
            this.waitingForResponse = false; // Reset the flag immediately for player messages
            onComplete?.();
        } else {
            // For system and character messages, simulate typing effect
            let i = 0;
            const interval = setInterval(() => {
                if (i < message.length) {
                    newMessageElement.innerHTML += message[i]; // Append the message character by character
                    i++;

                    // Scroll to the latest character
                    const chatLogDiv = document.getElementById('chatLog');
                    chatLogDiv.scrollTop = chatLogDiv.scrollHeight;
                } else {
                    clearInterval(interval);
                    this.waitingForResponse = false; // Reset the flag when the message has been fully added
                    onComplete?.();
                }
            }, 80); // Adjust the speed as necessary
        }

        // Ensure the chat log scrolls to the bottom initially after a new message is started
        const chatLogDiv = document.getElementById('chatLog');
        chatLogDiv.scrollTop = chatLogDiv.scrollHeight;
    }

    saveGameState() {
        console.info('Saving game.');

        const saveData = localStorage.getItem(PROJECT_NAME);
        let parsedSaveData = saveData ? JSON.parse(saveData) : {};

        // Get the current chat log content
        const chatLogContent = document.getElementById('chatLogContent').innerHTML;

        // Serialize the character-specific ChatManager's state
        if (this.characterChatManager) {
            const characterChatManagerState = JSON.stringify(this.characterChatManager);
            // Update the specific character's chat manager state in the saved data
            parsedSaveData.characterChatManagerState = characterChatManagerState;
        }

        // Update the game save data with the current chat log and question count
        parsedSaveData.chatLog = chatLogContent;
        parsedSaveData.questionCount = this.questionCount;

        // Save the updated game state to localStorage
        localStorage.setItem(PROJECT_NAME, JSON.stringify(parsedSaveData));

        console.info('Game state saved.');
    }

    loadSavedChat() {
        const saveData = localStorage.getItem(PROJECT_NAME);
        if (!saveData) {
            console.error('No save data found.');
        }

        const parsedSaveData = JSON.parse(saveData);

        // Deserialize and apply the character's ChatManager state if it exists
        if (parsedSaveData.characterChatManagerState) {
            const characterChatManagerState = JSON.parse(
                parsedSaveData.characterChatManagerState,
            );
            Object.assign(this.characterChatManager, characterChatManagerState);
        }

        // Load the chat log
        if (parsedSaveData.chatLog) {
            document.getElementById('chatLogContent').innerHTML = parsedSaveData.chatLog;
            console.info(`CHATLOG STATE LOADED: \n\n${parsedSaveData.chatLog}`);
        } else {
            console.warn('Chatlog content is missing from save.');
        }

        // Load the question count
        if (parsedSaveData.questionCount !== undefined) {
            this.questionCount = parsedSaveData.questionCount;
        }

        console.info('Game state loaded.');
    }

    displayBadges() {
        const badgePositions = [
            { x: 100, y: 250 }, // Top-left
            { x: 100, y: 400 }, // Middle-left
            { x: 100, y: 550 }, // Bottom-left
            { x: 1180, y: 200 }, // Top-right
            { x: 1180, y: 350 }, // Middle-right
            { x: 1180, y: 500 }, // Bottom-right
        ];

        const badgesToDisplay = Math.min(Math.floor(this.questionCount / 2), 6);

        for (let i = 0; i < badgesToDisplay; i++) {
            const badgeIndex = i % BADGE_IMAGES.length;
            const badge = this.scene.add.image(badgePositions[i].x, badgePositions[i].y, `badge${badgeIndex + 1}`);
            this.badges.push(badge);
        }
    }
}

function createDeleteSaveButton(scene) {
    let deleteButton = scene.add.image(90, 40, 'restart').setOrigin(0, 0).setScale(0.3).setInteractive();

    deleteButton.setDepth(5000); // Ensure it's above other elements

    deleteButton.on('pointerdown', () => {
        showDeleteConfirmation(scene);
    });

    return deleteButton; // Return the button for further use
}

function showDeleteConfirmation(scene) {
    // CSS for the confirmation dialog
    const dialogStyle = `
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        text-align: center;
        height: 200px;
        width: 300px;
        padding-left: 10px; /* Added left padding */
        padding-right: 10px; /* Added right padding */
        border-radius: 8px;
        border-style: solid;
        border-color: #2F4152;
        border-width: 1px;
        background-color: rgba(255, 255, 255, 0.85);
        box-sizing: border-box; /* Ensures padding doesn't affect the overall width */
    `;

    // CSS for the confirm and cancel buttons, similar to the confirm button in name selection
    const buttonStyle = `
        font-size: 20px;
        padding: 10px;
        cursor: pointer;
        border-radius: 20px;
        color: #FFF;
        background-color: #ff00de;
        margin: 20px;
    `;

    // HTML content for the confirmation dialog
    const confirmationHtml = `
        <div style="${dialogStyle}">
            <div>Are you sure you want to delete your save?</div>
            <div>
                <button id="confirmDelete" style="${buttonStyle}">Confirm</button>
                <button id="cancelDelete" style="${buttonStyle}">Cancel</button>
            </div>
        </div>
    `;

    // Add the HTML dialog to the scene
    const confirmationDialog = scene.add
        .dom(scene.cameras.main.centerX, scene.cameras.main.centerY)
        .createFromHTML(confirmationHtml);

    // Handle the confirm button click
    const confirmDeleteButton = confirmationDialog.getChildByID('confirmDelete');
    confirmDeleteButton.addEventListener('click', () => {
        // Delete the save
        localStorage.removeItem(PROJECT_NAME);

        // Call the resetGame function
        resetGame(scene);

        // Destroy the confirmation dialog
        confirmationDialog.destroy();
    });

    // Handle the cancel button click
    const cancelDeleteButton = confirmationDialog.getChildByID('cancelDelete');
    cancelDeleteButton.addEventListener('click', () => {
        confirmationDialog.destroy(); // Close the dialog without deleting
    });
}

function resetGame(scene) {
    // Transition to the BootScene to reset the game
    scene.game.sceneTransitionManager.transitionTo('BootScene');
}

const VERSION_NUMBER = 'v1'; // Set the version number here.
const PROJECT_NAME = `${CHARACTER_NAME} AI Character ${VERSION_NUMBER}`;

function initializeGame() {
    const config = {
        type: Phaser.AUTO,
        parent: 'renderDiv',
        scale: {
            mode: Phaser.Scale.FIT,
            autoCenter: Phaser.Scale.CENTER_BOTH,
        },
        width: 1280,
        height: 720,
        scene: [MenuScene, IntroScene, BootScene, ChatScene], // Assuming ChatScene also might depend on the loaded script
        dom: {
            createContainer: true,
        },
    };

    // Assuming 'game' is declared in a broader scope if you need to reference it elsewhere
    window.game = new Phaser.Game(config);
    window.game.sceneTransitionManager = new SceneTransitionManager(game);
}

initializeGame()