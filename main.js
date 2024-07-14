import "./style.css";
import Phaser from "phaser";

const size = {
  width: 800,
  height: 480,
  spriteScale: (2, 2),
};

class gameScene extends Phaser.Scene {
  constructor() {
    super("scene-game");
    this.player;
    this.cursor;
    this.spriteStep = 50;
  }

  preload() {
    // the ghost
    this.load.image("ghost1", "/assets/ghost1.png");
    this.load.image("ghost2", "/assets/ghost2.png");
    this.load.image("ghost3", "/assets/ghost3.png");

    // the sprite
    this.load.image("femaleknight", "/assets/femaleknight.png");
    this.load.image("maleknight", "/assets/maleknight.png");
    this.load.image("superknight", "/assets/superknight.png");
    this.load.image("mainsprite", "/assets/mainsprite.png");
    this.load.image("witch", "/assets/witch.png");

    // background
    this.load.image("bg-map", "/assets/bg-map.png");
  }

  create() {
    this.add.image(0, 0, "bg-map").setOrigin(0, 0);
    this.player = this.physics.add.image(0, 0, "femaleknight").setOrigin(0, 0);
    this.player.setImmovable(true);
    this.player.body.allowGravity = false;

    this.cursor = this.input.keyboard.createCursorKeys();
  }

  update() {
    const { left, right, up, down } = this.cursor;

    if (left.isDown) {
      this.player.setVelocityX(-this.spriteStep);
    } else if (right.isDown) {
      this.player.setVelocityX(this.spriteStep);
    } else if (up.isDown) {
      this.player.setVelocityY(-this.spriteStep);
    } else if (down.isDown) {
      this.player.setVelocityY(this.spriteStep);
    } else {
      this.player.setVelocityX(0);
      this.player.setVelocityY(0);
    }

  }
}

const config = {
  type: Phaser.WEBGL,
  width: size.width,
  height: size.height,
  canvas: canvasGame,
  physics: {
    default: "arcade",
    arcade: {
      debug: true,
    },
  },
  scene: [gameScene],
};

const game = new Phaser.Game(config);
