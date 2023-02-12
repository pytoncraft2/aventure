
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import ScrollFactor from "../components/ScrollFactor";
import PlayerController from "../components/PlayerController";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class PlayerButton extends Phaser.GameObjects.Image {

	constructor(scene: Phaser.Scene, x?: number, y?: number, texture?: string, frame?: number | string) {
		super(scene, x ?? 0, y ?? 0, texture || "ui", frame ?? "btn-up");

		this.scaleX = 2.2625;
		this.scaleY = 2.2625;
		this.alpha = 0.3;
		this.alphaTopLeft = 0.3;
		this.alphaTopRight = 0.3;
		this.alphaBottomLeft = 0.3;
		this.alphaBottomRight = 0.3;

		// this (components)
		new ScrollFactor(this);
		const thisPlayerController = new PlayerController(this);
		thisPlayerController.direction = "space";

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
