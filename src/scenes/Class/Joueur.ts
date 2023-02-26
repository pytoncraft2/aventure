
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default interface Joueur {

	 body: Phaser.Physics.Arcade.Body;
}

export default class Joueur extends Phaser.GameObjects.Image {

	constructor(scene: Phaser.Scene, x?: number, y?: number, texture?: string, frame?: number | string) {
		super(scene, x ?? 11, y ?? 0, texture || "huipat", frame);

		scene.physics.add.existing(this, false);
		this.body.gravity.y = 1000;
		this.body.setSize(200, 189, false);

		/* START-USER-CTR-CODE */
		this.velY = 1210;
		this.velX = 860;
		this.auto()
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	die() {
		this.setTint(0xff0000);
		this.play("turn");
	}
	jump() {
		this.body.checkCollision.none = true;
		this.body.setVelocityY(-this.velY);
		var timer = this.scene.time.delayedCall(500, () => (this.body.checkCollision.none = false), null, this);
	}
	stopMoving() {
			this.body.setVelocityX(0);
	}
	moveRight() {
		this.setFlipX(false);
		this.body.setVelocityX(this.velX);
	}
	moveLeft() {
		this.setFlipX(true);
		this.body.setVelocityX(-this.velX)
	}
	moveDown() {
		this.body.checkCollision.none = true;
		this.body.setVelocityY(this.velY)

		var timer = this.scene.time.delayedCall(50, () => (this.body.checkCollision.none = false), null, this);  // delay in ms
	}

	auto() {
		this.scene.rightDown = true;
		var timer = this.scene.time.addEvent({
			delay: 100,                // ms
			callback: () => /*this.moveRight()*/{},
			//args: [],
			callbackScope: this,
			loop: true
		});
		
	}

	removeLife() {
		this.scene.groupe_vie.length != 0 && this.scene.groupe_vie.removeAt(this.scene.groupe_vie.length -1)
		this.body.checkCollision.none = true;
		this.body.allowGravity = false;
		this.body.moves = false;
		var tween = this.scene.tweens.add({
			targets: this,
			alpha: {from: 0.2, to: 1},
			scale: {from: 0.9, to:1},
			duration: 200,
			repeat: 3,            // -1: infinity
			yoyo: false,
			onComplete: () => {
				this.setAlpha(1);
				this.body.allowGravity = true;
				this.body.moves = true;
			}
		});
		this.scene.time.delayedCall(200, () => this.body.checkCollision.none = false, undefined, this)
	}

	pressButton(direction: "left" | "right" | "up" | "down" | "space") {
		console.log(direction);
		switch (direction) {
			case "left":
				this.scene.leftDown = true;
				break;

			case "right":
				this.scene.rightDown = true;
				break;

			case "up":
				this.scene.upDown = true;
				break;

			case "down":
				this.scene.downDown = true;
				break;
			case "space":
				this.scene.spaceDown = true;
				break;
		}
	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
