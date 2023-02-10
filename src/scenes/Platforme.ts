
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import Herbe from "./Herbe";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default interface Platforme {

	 body: Phaser.Physics.Arcade.Body;
}

export default class Platforme extends Phaser.GameObjects.Container {

	constructor(scene: Phaser.Scene, x?: number, y?: number) {
		super(scene, x ?? 0, y ?? -105);

		scene.physics.add.existing(this, false);
		this.body.moves = false;
		this.body.immovable = true;
		this.body.setOffset(-350.1279404022271, 63.792077287566954);
		this.body.setSize(700.2558808044543, 82.4158454248661, false);

		// herbe
		const herbe = new Herbe(scene, -251, 69);
		herbe.scaleX = 0.3023790616770904;
		herbe.scaleY = 0.7447346294111288;
		this.add(herbe);

		// platforme
		const platforme = scene.add.rectangle(0, 105, 128, 128) as Phaser.GameObjects.Rectangle & { body: Phaser.Physics.Arcade.Body };
		platforme.scaleX = 5.470749068784799;
		platforme.scaleY = 0.6438737923817663;
		scene.physics.add.existing(platforme, false);
		platforme.body.moves = false;
		platforme.body.allowGravity = false;
		platforme.body.pushable = false;
		platforme.body.immovable = true;
		platforme.body.setSize(128, 128, false);
		platforme.isFilled = true;
		platforme.fillColor = 26265;
		this.add(platforme);

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
