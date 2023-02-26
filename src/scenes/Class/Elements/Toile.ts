
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default interface Toile {

	 body: Phaser.Physics.Arcade.Body;
}

export default class Toile extends Phaser.GameObjects.Rectangle {

	constructor(scene: Phaser.Scene, x?: number, y?: number, width?: number, height?: number) {
		super(scene, x ?? 0, y ?? 0, width ?? 128, height ?? 128);

		this.scaleX = 0.7885172445568717;
		this.scaleY = 0.04563370658790045;
		scene.physics.add.existing(this, false);
		this.body.velocity.x = 1200;
		this.body.velocity.y = -200;
		this.body.gravity.y = 350;
		this.body.setSize(128, 128, false);
		this.isFilled = true;
		this.fillColor = 0;

		/* START-USER-CTR-CODE */
		this.scene.time.delayedCall(400, () => this.destroy(true), undefined, this)
		/* END-USER-CTR-CODE */
	}

	public direction: boolean = false;

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
