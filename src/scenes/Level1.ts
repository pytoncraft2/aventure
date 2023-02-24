
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import Joueur from "./Joueur";
import Platforme from "./Platforme";
import InteractiveObjet from "../components/InteractiveObjet";
import PlayerButton from "./PlayerButton";
import PlayerController from "../components/PlayerController";
import Araigne from "./Araigne";
import PrefabChauveSouris from "./PrefabChauveSouris";
import Coeur from "./Coeur";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Level1 extends Phaser.Scene {

	constructor() {
		super("Level1");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	editorCreate(): void {

		// leftKey
		const leftKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);

		// rightKey
		const rightKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);

		// upKey
		const upKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);

		// downKey
		const downKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);

		// spaceKey
		const spaceKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

		// player
		const player = new Joueur(this, 247, 296);
		this.add.existing(player);

		// tente
		const tente = this.add.image(218, 636, "tente");
		tente.scaleX = 0.7260412462267458;
		tente.scaleY = 0.7260412462267458;

		// layerPlatforme
		const layerPlatforme = this.add.layer();

		// platforme
		const platforme = new Platforme(this, 354, 357);
		layerPlatforme.add(platforme);

		// platforme_1
		const platforme_1 = new Platforme(this, 1570, 264);
		layerPlatforme.add(platforme_1);

		// platforme_2
		const platforme_2 = new Platforme(this, 1090, 111);
		platforme_2.scaleX = 0.6051618385700501;
		platforme_2.scaleY = 0.90278201350956;
		layerPlatforme.add(platforme_2);

		// platforme_4
		const platforme_4 = new Platforme(this, 6, 705);
		platforme_4.scaleX = 2.8429608315876465;
		platforme_4.scaleY = 0.7677009268656273;
		layerPlatforme.add(platforme_4);

		// platforme_5
		const platforme_5 = new Platforme(this, 2262, 855);
		platforme_5.scaleX = 2.8429608315876465;
		platforme_5.scaleY = 0.7677009268656273;
		layerPlatforme.add(platforme_5);

		// platforme_6
		const platforme_6 = new Platforme(this, -271, 1017);
		platforme_6.scaleX = 2.8429608315876465;
		platforme_6.scaleY = 0.7677009268656273;
		layerPlatforme.add(platforme_6);

		// feu
		const feu = this.add.image(1629, 261, "feu");
		feu.scaleX = 0.5142267517589454;
		feu.scaleY = 0.5142267517589454;

		// controlsLayer
		const controlsLayer = this.add.layer();

		// btn_up
		const btn_up = new PlayerButton(this, 1787, 728);
		controlsLayer.add(btn_up);

		// playerButton
		const playerButton = new PlayerButton(this, 123, 966, "ui", "btn-left");
		controlsLayer.add(playerButton);

		// playerButton_1
		const playerButton_1 = new PlayerButton(this, 374, 967, "ui", "btn-right");
		controlsLayer.add(playerButton_1);

		// playerButton_2
		const playerButton_2 = new PlayerButton(this, 1792, 967, "ui", "btn-right");
		playerButton_2.scaleX = 1.6;
		playerButton_2.scaleY = 1.6;
		playerButton_2.angle = 0;
		controlsLayer.add(playerButton_2);

		// playerButton_3
		const playerButton_3 = new PlayerButton(this, 1565, 845);
		playerButton_3.scaleX = 1.6088075096745973;
		playerButton_3.scaleY = 1.6088075096745973;
		playerButton_3.angle = -90;
		playerButton_3.tintTopLeft = 15388681;
		playerButton_3.tintTopRight = 15388681;
		playerButton_3.tintBottomLeft = 15388681;
		playerButton_3.tintBottomRight = 15388681;
		controlsLayer.add(playerButton_3);

		// ennemyLayer
		const ennemyLayer = this.add.layer();

		// araigne
		const araigne = new Araigne(this, 1841, -106);
		araigne.scaleX = 1;
		araigne.scaleY = 1;
		ennemyLayer.add(araigne);

		// araigne_1
		const araigne_1 = new Araigne(this, 1378.1751521894707, -90.0308570567954);
		araigne_1.scaleX = 0.6212253039645439;
		araigne_1.scaleY = 0.6212253039645439;
		ennemyLayer.add(araigne_1);

		// araigne_2
		const araigne_2 = new Araigne(this, 369, -83);
		araigne_2.scaleX = 0.573116706160824;
		araigne_2.scaleY = 0.573116706160824;
		ennemyLayer.add(araigne_2);

		// araigne_3
		const araigne_3 = new Araigne(this, 1617, 553);
		araigne_3.scaleX = 2.6995541392256976;
		araigne_3.scaleY = 2.6995541392256976;
		ennemyLayer.add(araigne_3);

		// araigne_4
		const araigne_4 = new Araigne(this, 944.20365967982, 518.3007205743385);
		araigne_4.scaleX = 1;
		araigne_4.scaleY = 1;
		araigne_4.alpha = 0.5;
		ennemyLayer.add(araigne_4);

		// araigne_5
		const araigne_5 = new Araigne(this, 1302.9821963175486, 581.6145799809965);
		araigne_5.scaleX = 1;
		araigne_5.scaleY = 1;
		ennemyLayer.add(araigne_5);

		// chauve_souris
		const chauve_souris = new PrefabChauveSouris(this, 555, 195);
		this.add.existing(chauve_souris);

		// groupe_vie
		const groupe_vie = this.add.layer();

		// coeur
		const coeur = new Coeur(this, 57, 45);
		groupe_vie.add(coeur);

		// coeur_1
		const coeur_1 = new Coeur(this, 138, 45);
		groupe_vie.add(coeur_1);

		// coeur_2
		const coeur_2 = new Coeur(this, 219, 45);
		groupe_vie.add(coeur_2);

		// coeur_3
		const coeur_3 = new Coeur(this, 300, 45);
		groupe_vie.add(coeur_3);

		// coeur_4
		const coeur_4 = new Coeur(this, 381, 45);
		groupe_vie.add(coeur_4);

		// coeur_5
		const coeur_5 = new Coeur(this, 462, 45);
		groupe_vie.add(coeur_5);

		// collider_player_platforme
		this.physics.add.collider(player, layerPlatforme.list);

		// collider_spider_platforme
		this.physics.add.collider(ennemyLayer.list, layerPlatforme.list);

		// collider_player_ennemy
		this.physics.add.collider(ennemyLayer.list, player);

		// feu (components)
		new InteractiveObjet(feu);

		// btn_up (components)
		const btn_upPlayerController = PlayerController.getComponent(btn_up);
		btn_upPlayerController.direction = "up";

		// playerButton (components)
		const playerButtonPlayerController = PlayerController.getComponent(playerButton);
		playerButtonPlayerController.direction = "left";

		// playerButton_1 (components)
		const playerButton_1PlayerController = PlayerController.getComponent(playerButton_1);
		playerButton_1PlayerController.direction = "right";

		// playerButton_2 (components)
		const playerButton_2PlayerController = PlayerController.getComponent(playerButton_2);
		playerButton_2PlayerController.direction = "down";

		this.player = player;
		this.ennemyLayer = ennemyLayer;
		this.groupe_vie = groupe_vie;
		this.leftKey = leftKey;
		this.rightKey = rightKey;
		this.upKey = upKey;
		this.downKey = downKey;
		this.spaceKey = spaceKey;

		this.events.emit("scene-awake");
	}

	private player!: Joueur;
	private ennemyLayer!: Phaser.GameObjects.Layer;
	private groupe_vie!: Phaser.GameObjects.Layer;
	private leftKey!: Phaser.Input.Keyboard.Key;
	private rightKey!: Phaser.Input.Keyboard.Key;
	private upKey!: Phaser.Input.Keyboard.Key;
	private downKey!: Phaser.Input.Keyboard.Key;
	private spaceKey!: Phaser.Input.Keyboard.Key;

	/* START-USER-CODE */
	private leftDown = false;
	private rightDown = false;
	private upDown = false;
	private downDown = false;
	private spaceDown = false;

	// Write your code here

	create() {

		this.editorCreate();

		this.scale.startFullscreen();
		this.input.addPointer(4);


        var FKey = this.input.keyboard.addKey('F');

        FKey.on('down', function () {

            if (this.scale.isFullscreen)
            {
                //button.setFrame(0);
                this.scale.stopFullscreen();
            }
            else
            {
                //button.setFrame(1);
                this.scale.startFullscreen();
            }

        }, this);

	}
	update(time: number, delta: number): void {

		this.physics.world.wrap(this.player, 80)
		this.physics.world.wrap(this.ennemyLayer.list, 80)
		if (this.gameOver) {
			return;
		}
		this.updatePlayer();
	}

	private isKeyDown(key?: Phaser.Input.Keyboard.Key) {

		if (key) {

			return key.isDown;
		}

		return false;
	}

	private updatePlayer() {

		this.leftDown = this.leftDown || this.isKeyDown(this.leftKey);
		this.rightDown = this.rightDown || this.isKeyDown(this.rightKey);
		this.upDown = this.upDown || this.isKeyDown(this.upKey) ;
		// this.spaceDown = this.spaceDown || this.isKeyDown(this.spaceKey);
		this.downDown = this.downDown || this.isKeyDown(this.downKey);


		if (this.leftDown) {
			this.player.moveLeft();
		} else if (this.rightDown) {

			this.player.moveRight();
		} else if (this.downDown) {
			this.player.moveDown();
		} else {
			this.player.stopMoving();
		}

		if (this.upDown && this.player.body.touching.down) {
			this.player.jump();
		}

		this.leftDown = this.rightDown = this.upDown = this.downDown = this.spaceDown = false;
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
