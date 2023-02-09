
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Herbe extends Phaser.GameObjects.Container {

	constructor(scene: Phaser.Scene, x?: number, y?: number) {
		super(scene, x ?? 0, y ?? 0);

		// herbe
		const herbe = scene.add.image(1751, -14, "herbe");
		this.add(herbe);

		// herbe_1
		const herbe_1 = scene.add.image(1290, -14, "herbe");
		this.add(herbe_1);

		// herbe_2
		const herbe_2 = scene.add.image(829, -14, "herbe");
		this.add(herbe_2);

		// herbe_3
		const herbe_3 = scene.add.image(368, -14, "herbe");
		this.add(herbe_3);

		// herbe_4
		const herbe_4 = scene.add.image(-93, -14, "herbe");
		this.add(herbe_4);

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
