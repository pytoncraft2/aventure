
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
