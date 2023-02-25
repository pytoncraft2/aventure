
// You can write more code here

/* START OF COMPILED CODE */

import UserComponent from "./UserComponent";
import Phaser from "phaser";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class PlayerController extends UserComponent {

	constructor(gameObject: Phaser.GameObjects.Image) {
		super(gameObject);

		this.gameObject = gameObject;
		(gameObject as any)["__PlayerController"] = this;

		/* START-USER-CTR-CODE */
		this.gameObject.setInteractive();
		/* END-USER-CTR-CODE */
	}

	static getComponent(gameObject: Phaser.GameObjects.Image): PlayerController {
		return (gameObject as any)["__PlayerController"];
	}

	private gameObject: Phaser.GameObjects.Image;
	public player!: Player|undefined|PlayerPrefab;
	public direction: "left"|"right"|"up"|"down"|"space" = "left";

	/* START-USER-CODE */

	update() {

		const input = this.gameObject.scene.input;

		if (!input.activePointer.isDown) {
			return;
		}

		const objects = input.hitTestPointer(input.activePointer);

		if (objects.indexOf(this.gameObject) >= 0) {

			this.scene.player.pressButton(this.direction);
		}
	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
