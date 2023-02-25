
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
		const params = new Proxy(new URLSearchParams(window.location.search), {
  			get: (searchParams, prop) => searchParams.get(prop),
		});
		let value = params.p;
		console.log(this.list);
		/* END-USER-CTR-CODE */
	}

	public texture!: {key:string,frame?:string|number};

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


	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
