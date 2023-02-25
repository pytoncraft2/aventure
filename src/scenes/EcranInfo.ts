
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class EcranInfo extends Phaser.GameObjects.Container {

	constructor(scene: Phaser.Scene, x?: number, y?: number) {
		super(scene, x ?? 0, y ?? -42);

		// fondNoir
		const fondNoir = scene.add.rectangle(0, 42, 128, 128);
		fondNoir.scaleX = 15.727055413525404;
		fondNoir.scaleY = 8.592969514268392;
		fondNoir.isFilled = true;
		fondNoir.fillColor = 0;
		fondNoir.fillAlpha = 0.6;
		this.add(fondNoir);

		// texteNiveau
		const texteNiveau = scene.add.text(-3, 24, "", {});
		texteNiveau.setOrigin(0.5, 0.5);
		texteNiveau.text = "Niveau 1";
		texteNiveau.setStyle({ "fontSize": "46px" });
		this.add(texteNiveau);

		this.fondNoir = fondNoir;
		this.texteNiveau = texteNiveau;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	private fondNoir: Phaser.GameObjects.Rectangle;
	public texteNiveau: Phaser.GameObjects.Text;
	public show: boolean = false;
	public title: string = "";
	public subtitle: string = "";

	/* START-USER-CODE */
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
