const LIVING_ROOM_IMAGE_URL = `https://play.rosebud.ai/assets/isometric-living-room.png?5tUE`;
const PIANO_IMAGE_URL = `https://play.rosebud.ai/assets/piano.png?U6JX`;
const GLOBE_IMAGE_URL = `https://play.rosebud.ai/assets/globe.png?Ulzw`;
const PHOTO_IMAGE_URL = `https://play.rosebud.ai/assets/old-photographs.png?Gl6t`;
const UNIFORM_IMAGE_URL = `https://play.rosebud.ai/assets/school-uniform.png?lnS8`;
const SUITCASE_IMAGE_URL = `https://play.rosebud.ai/assets/vintage-suitcase.png?sdFT`;

const SONG_PLAYLIST_URLS = [
  'https://example.com/track1.mp3',
  'https://example.com/track2.mp3',
  'https://example.com/track3.mp3'
];

class MusicManager {
  constructor(game) {
    this.game = game;
    this.playlist = [];
    this.currentTrackIndex = 0;
  }

  setPlaylist(playlist) {
    this.playlist = playlist;
  }

  shufflePlaylist() {
    for (let i = this.playlist.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.playlist[i], this.playlist[j]] = [this.playlist[j], this.playlist[i]];
    }
  }

  playNextTrack() {
    if (this.playlist.length === 0) {
      console.warn('Playlist is empty. Cannot play next track.');
      return;
    }
    const nextTrackKey = this.playlist[this.currentTrackIndex];
    this.game.sound.play(nextTrackKey);
    this.currentTrackIndex = (this.currentTrackIndex + 1) % this.playlist.length;
  }
}

class SceneTransitionManager {
  constructor(game) {
    this.game = game;
  }

  transitionTo(sceneKey) {
    this.game.scene.start(sceneKey);
  }
}

class BootScene extends Phaser.Scene {
  constructor() {
    super({ key: 'BootScene' });
  }

  preload() {
    // Preload audio files
    SONG_PLAYLIST_URLS.forEach((url, index) => {
      this.load.audio(`track_${index}`, url);
    });

    // Preload background images
    this.load.image('living_room_background', LIVING_ROOM_IMAGE_URL);
    this.load.image('piano', PIANO_IMAGE_URL);
    this.load.image('globe', GLOBE_IMAGE_URL);
    this.load.image('photo', PHOTO_IMAGE_URL);
    this.load.image('uniform', UNIFORM_IMAGE_URL);
    this.load.image('suitcase', SUITCASE_IMAGE_URL);

    console.log('Images preloaded');
  }

  create() {
    // Initialize the music manager and other dependencies
    this.game.musicManager = new MusicManager(this.game);
    const musicKeys = SONG_PLAYLIST_URLS.map((_, index) => `track_${index}`);
    this.game.musicManager.setPlaylist(musicKeys);
    this.game.musicManager.shufflePlaylist();
    this.game.musicManager.playNextTrack();

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
      };

      // Save the initial state to localStorage
      localStorage.setItem(PROJECT_NAME, JSON.stringify(this.game.saveData));
    }
  }
}

class ChatScene extends Phaser.Scene {
  constructor() {
    super({ key: 'ChatScene' });
  }

  create() {
    // Add isometric living room as the background
    this.add.image(0, 0, 'living_room_background').setOrigin(0, 0);

    // Add images to the scene with adjusted positions and scales
    this.add.image(100, 100, 'piano').setOrigin(0, 0).setScale(0.5);
    this.add.image(250, 100, 'globe').setOrigin(0, 0).setScale(0.5);
    this.add.image(100, 300, 'photo').setOrigin(0, 0).setScale(0.5);
    this.add.image(250, 300, 'uniform').setOrigin(0, 0).setScale(0.5);
    this.add.image(400, 300, 'suitcase').setOrigin(0, 0).setScale(0.5);

    console.log('Images added to scene');
  }
}

function loadScript(url) {
  return new Promise((resolve, reject) => {
    // Check if the script is already loaded
    if (document.querySelector(`script[src="${url}"]`)) {
      resolve();
      return;
    }

    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;

    script.onload = () => resolve();
    script.onerror = () => reject(new Error('Script loading failed for ' + url));

    document.head.appendChild(script);
  });
}

const VERSION_NUMBER = 'v1'; // Set the version number here.
const PROJECT_NAME = `AI Character ${VERSION_NUMBER}`;
async function initializeGame() {
  try {
    // Load the external script before initializing the Phaser game
    await loadScript(`https://play.rosebud.ai/assets/rosebud_AI_character_template_desktop_library.js.js?RJEc`);
    console.log('Script loaded successfully');

    const config = {
      type: Phaser.AUTO,
      parent: 'renderDiv',
      scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
      },
      width: 800,
      height: 600,
      scene: [BootScene, ChatScene],  // Assuming ChatScene also might depend on the loaded script
      dom: {
        createContainer: true,
      },
    };

    // Assuming 'game' is declared in a broader scope if you need to reference it elsewhere
    window.game = new Phaser.Game(config);
    window.game.sceneTransitionManager = new SceneTransitionManager(window.game);
  } catch (error) {
    console.error('Failed to load external script or initialize the Phaser game:', error);
  }
}

initializeGame();
