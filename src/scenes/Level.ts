// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import PrefabBouton from "./PrefabBouton";
import InteractiveObjet from "../components/InteractiveObjet";
import CommencerSceneAuClique from "../components/CommencerSceneAuClique";
import Herbe from "./Herbe";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Level extends Phaser.Scene {

	constructor() {
		super("Level");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	editorCreate(): void {

		// Bouton_jouer
		const bouton_jouer = new PrefabBouton(this, 959, 356);
		this.add.existing(bouton_jouer);
		bouton_jouer.text_1.text = "Jouer";

		// Bouton_instructions
		const bouton_instructions = new PrefabBouton(this, 959, 562);
		this.add.existing(bouton_instructions);
		bouton_instructions.text_1.text = "Instructions";

		// herbe
		const herbe = new Herbe(this, 239, 1052);
		this.add.existing(herbe);

		// 55193917
		this.add.image(209, 918, "55193917");

		// text_2
		const text_2 = this.add.text(960, 162.5, "", {});
		text_2.setOrigin(0.5, 0.5);
		text_2.text = "Aventure LTS";
		text_2.setStyle({ "color": "#000000ff", "fontFamily": "Open Sans", "fontSize": "46px", "fontStyle": "bold" });

		// rectangle_2
		const rectangle_2 = this.add.rectangle(961, 188, 128, 128);
		rectangle_2.scaleX = 2.1732307923268;
		rectangle_2.scaleY = 0.037198060363111914;
		rectangle_2.isFilled = true;
		rectangle_2.fillColor = 8111652;

		// bouton_jouer (components)
		new InteractiveObjet(bouton_jouer);
		new CommencerSceneAuClique(bouton_jouer);

		// bouton_instructions (components)
		new InteractiveObjet(bouton_instructions);
		new CommencerSceneAuClique(bouton_instructions);

		this.bouton_jouer = bouton_jouer;
		this.bouton_instructions = bouton_instructions;

		this.events.emit("scene-awake");
	}

	public bouton_jouer!: PrefabBouton;
	public bouton_instructions!: PrefabBouton;

	/* START-USER-CODE */

	// Write your code here

	preload()
	{
		//this.load.image("FufuSuperDino", '../../static/assets/FufuSuperDino.png')
	}

	create() {

		this.editorCreate();
		//this.bouton_jouer
			//.setInteractive({ useHandCursor: true })
		    //.on('pointerdown', function() {
		//});
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here