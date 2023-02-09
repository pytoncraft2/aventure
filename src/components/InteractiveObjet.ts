
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class InteractiveObjet {

	constructor(gameObject: Phaser.GameObjects.Rectangle) {
		this.gameObject = gameObject;
		(gameObject as any)["__InteractiveObjet"] = this;

		/* START-USER-CTR-CODE */		
		this.gameObject.setInteractive(new Phaser.Geom.Rectangle(0,0,500,500), Phaser.Geom.Rectangle.Contains);
		/* END-USER-CTR-CODE */
	}

	static getComponent(gameObject: Phaser.GameObjects.Rectangle): InteractiveObjet {
		return (gameObject as any)["__InteractiveObjet"];
	}

	private gameObject: Phaser.GameObjects.Rectangle;

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
