
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default interface Araigne {

	 body: Phaser.Physics.Arcade.Body;
}

export default class Araigne extends Phaser.GameObjects.Image {

	constructor(scene: Phaser.Scene, x?: number, y?: number, texture?: string, frame?: number | string) {
		super(scene, x ?? 0, y ?? 0, texture || "araigne", frame);

		scene.physics.add.existing(this, false);
		this.body.velocity.x = -200;
		this.body.bounce.x = 1;
		this.body.collideWorldBounds = true;
		this.body.setSize(228, 79, false);

		/* START-USER-CTR-CODE */
	//this.scene.physics.world.wrap(this);
		/* END-USER-CTR-CODE */
	}

	public texture: {key:string,frame?:string|number} = {"key":"araigne"};

	/* START-USER-CODE */


update() {
	//this.scene.physics.world.wrap(this);
}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */
