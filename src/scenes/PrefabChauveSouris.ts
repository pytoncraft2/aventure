
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default interface PrefabChauveSouris {

	 body: Phaser.Physics.Arcade.Body;
}

export default class PrefabChauveSouris extends Phaser.GameObjects.Image {

	constructor(scene: Phaser.Scene, x?: number, y?: number, texture?: string, frame?: number | string) {
		super(scene, x ?? 0, y ?? 0, texture || "chauve-souris", frame);

		this.scaleX = 0.15065063639105147;
		this.scaleY = 0.15065063639105147;
		scene.physics.add.existing(this, false);
		this.body.velocity.x = 100;
		this.body.velocity.y = 100;
		this.body.allowGravity = false;
		this.body.setSize(1707, 1037, false);

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
