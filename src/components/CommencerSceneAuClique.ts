
// You can write more code here

/* START OF COMPILED CODE */

import UserComponent from "./UserComponent";
import Phaser from "phaser";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class CommencerSceneAuClique extends UserComponent {

	constructor(gameObject: Phaser.GameObjects.Rectangle) {
		super(gameObject);

		this.gameObject = gameObject;
		(gameObject as any)["__CommencerSceneAuClique"] = this;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	static getComponent(gameObject: Phaser.GameObjects.Rectangle): CommencerSceneAuClique {
		return (gameObject as any)["__CommencerSceneAuClique"];
	}

	private gameObject: Phaser.GameObjects.Rectangle;
	public sceneKey: string = "Level1";

	/* START-USER-CODE */

	start() {		

		this.gameObject.on("pointerup", () => {

			this.scene.scene.start(this.sceneKey);
		});
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
