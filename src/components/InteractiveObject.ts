
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

class InteractiveObject {

	constructor(gameObject: Phaser.GameObjects.Rectangle) {
		this.gameObject = gameObject;
		(gameObject as any)["__InteractiveObject"] = this;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	static getComponent(gameObject: Phaser.GameObjects.Rectangle): InteractiveObject {
		return (gameObject as any)["__InteractiveObject"];
	}

	private gameObject: Phaser.GameObjects.Rectangle;

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
