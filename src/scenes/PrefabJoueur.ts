
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default interface PrefabJoueur {

	 body: Phaser.Physics.Arcade.Body;
}

export default class PrefabJoueur extends Phaser.Physics.Arcade.Sprite {

	constructor(scene: Phaser.Scene, x?: number, y?: number, texture?: string, frame?: number | string) {
		super(scene, x ?? 0, y ?? 0, texture || "dude", frame ?? 0);

		this.scaleX = 1.989685485224887;
		this.scaleY = 1.989685485224887;
		scene.physics.add.existing(this, false);
		this.body.mass = 20;
		this.body.setSize(32, 48, false);

		/* START-USER-CTR-CODE */
		this.velY = 890;
		this.velX = 360;
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	die() {
		this.setTint(0xff0000);
		this.play("turn");
	}
	jump() {
		this.setVelocityY(-this.velY);
	}
	stopMoving() {
			this.setVelocityX(0);
			this.anims.play('turn');
	}
	moveRight() {
			this.setVelocityX(this.velX);
			this.anims.play('right', true);
	}
	moveLeft() {
		this.setVelocityX(-this.velX)
		this.play("left", true)
	}

	pressButton(direction: "left" | "right" | "up") {
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
		}
	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
