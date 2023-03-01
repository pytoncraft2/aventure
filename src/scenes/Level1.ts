
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import Joueur from "./Class/Joueur";
import Platforme from "./Platforme";
import InteractiveObjet from "../components/InteractiveObjet";
import PlayerButton from "./PlayerButton";
import PlayerController from "../components/PlayerController";
import Araigne from "./Class/Araigne";
import PrefabChauveSouris from "./PrefabChauveSouris";
import Coeur from "./Coeur";
/* START-USER-IMPORTS */
import Toile from "./Class/Elements/Toile";
import ToilePiege from "./Class/Elements/ToilePiege";
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
		const playerButton_1 = new PlayerButton(this, 405, 967, "ui", "btn-right");
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
		araigne_4.tintFill = true;
		araigne_4.tintTopLeft = 15597380;
		araigne_4.tintTopRight = 15597380;
		araigne_4.tintBottomLeft = 15597380;
		araigne_4.tintBottomRight = 15597380;
		ennemyLayer.add(araigne_4);

		// araigne_5
		const araigne_5 = new Araigne(this, 1302.9821963175486, 581.6145799809965);
		araigne_5.scaleX = 1;
		araigne_5.scaleY = 1;
		ennemyLayer.add(araigne_5);

		// chauve_souris
		const chauve_souris = new PrefabChauveSouris(this, 863, 888);
		this.add.existing(chauve_souris);

		// groupe_vie
		const groupe_vie = this.add.layer();

		// coeur
		const coeur = new Coeur(this, 57, 46.606177095632425);
		groupe_vie.add(coeur);

		// coeur_1
		const coeur_1 = new Coeur(this, 124.12485775334338, 46.606177095632425);
		groupe_vie.add(coeur_1);

		// coeur_2
		const coeur_2 = new Coeur(this, 191.24971550668678, 46.606177095632425);
		groupe_vie.add(coeur_2);

		// coeur_3
		const coeur_3 = new Coeur(this, 258.37457326003016, 46.606177095632425);
		groupe_vie.add(coeur_3);

		// coeur_4
		const coeur_4 = new Coeur(this, 325.4994310133735, 46.606177095632425);
		groupe_vie.add(coeur_4);

		// coeur_5
		const coeur_5 = new Coeur(this, 392.62428876671686, 46.606177095632425);
		groupe_vie.add(coeur_5);

		// coeur_6
		const coeur_6 = new Coeur(this, 459.7491465200602, 46.606177095632425);
		groupe_vie.add(coeur_6);

		// coeur_7
		const coeur_7 = new Coeur(this, 526.8740042734036, 46.606177095632425);
		groupe_vie.add(coeur_7);

		// coeur_8
		const coeur_8 = new Coeur(this, 593.9988620267469, 46.606177095632425);
		groupe_vie.add(coeur_8);

		// coeur_9
		const coeur_9 = new Coeur(this, 661.1237197800903, 46.606177095632425);
		groupe_vie.add(coeur_9);

		// coeur_10
		const coeur_10 = new Coeur(this, 728.2485775334336, 46.606177095632425);
		groupe_vie.add(coeur_10);

		// coeur_11
		const coeur_11 = new Coeur(this, 795.373435286777, 46.606177095632425);
		groupe_vie.add(coeur_11);

		// groupe_projectile_toile
		const groupe_projectile_toile = this.add.layer();

		// collider_player_platforme
		this.physics.add.collider(player, layerPlatforme.list);

		// collider_spider_platforme
		this.physics.add.collider(ennemyLayer.list, layerPlatforme.list);

		// collider_player_ennemy
		this.physics.add.collider(ennemyLayer.list, player, this.joueurEnnemyColision, undefined, this);

		// collider_projectile_toile_ennemy
		this.physics.add.overlap(groupe_projectile_toile.list, ennemyLayer.list, this.projectileToileColision, undefined, this);

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

		// playerButton_3 (components)
		const playerButton_3PlayerController = PlayerController.getComponent(playerButton_3);
		playerButton_3PlayerController.direction = "space";

		this.player = player;
		this.ennemyLayer = ennemyLayer;
		this.groupe_vie = groupe_vie;
		this.groupe_projectile_toile = groupe_projectile_toile;
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
	public groupe_projectile_toile!: Phaser.GameObjects.Layer;
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
	private spaceDownTouch = false;
	private isMobile = false;


	// Write your code here

	create() {

		this.editorCreate();

		this.scale.startFullscreen();
		this.input.addPointer(3);

		const checkIfMobile = function () {
			let check = false;
			(function (a) { if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true; })(navigator.userAgent || navigator.vendor);
			return check;
		};

		this.isMobile = checkIfMobile()



		this.physics.world.setBoundsCollision(true, true, false, false)
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
		if (this.ennemyLayer.list.length === 0) {

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
		this.downDown = this.downDown || this.isKeyDown(this.downKey);
		if (this.isMobile) {
			this.spaceDown = this.spaceDown || this.isKeyDown(this.spaceKey) || this.spaceDownTouch;
		}

		if (Phaser.Input.Keyboard.JustDown(this.spaceKey)) {
			this.envoieProjectileToile()
		}

		if (this.isMobile) {
			if (this.spaceDown) {
				this.envoieProjectileToile()
				this.spaceDown = false;
				// console.log("SPACE ATTAQUE");
				// this.spaceDown = false;
			}
		}


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

		if (!this.isMobile) {
			this.leftDown = this.rightDown = this.upDown = this.downDown = this.spaceDown = this.spaceDownTouch = false;
		}

	}

	projectileToileColision(projectile: any, ennemy: ToilePiege) {
		console.log(ennemy.piege);
		if (!ennemy.piege) {
			console.log("NON CREER");

			const piege = new ToilePiege(ennemy.scene, ennemy.x, ennemy.y)
			ennemy.piege = piege;
			ennemy.piege.follow(ennemy)

			ennemy.scene.add.existing(piege);

		} else {
			if (ennemy.piege.scale <= 0.38) {
				console.log("ENCORE ??", ennemy.piege.scale);

				ennemy.piege.resetTimer()
				ennemy.piege.scale += 0.1;

			} else {
				console.log("ELLLSE");
				ennemy.piege.follow(undefined, ennemy)
				// ennemy.body.angular
				ennemy.body.angularVelocity = 400;
				ennemy.body.checkCollision.right = false;
				ennemy.body.checkCollision.left = false;
				ennemy.piege.body.angularVelocity = 400;
				ennemy.body.velocity.x -= 200;
				this.time.delayedCall(2000, () => {ennemy.piege.destroy(true); ennemy.destroy(true)})
				// ennemy.piege.destroy(true)
				// ennemy.destroy(true)
				// désactivation du stop

				// ennemy.piege.stopEnnemy(ennemy, false)
				// ennemy.piege.tintTopLeft = 15388681;
				// ennemy.piege.tintTopRight = 15388681;
				// ennemy.piege.tintBottomLeft = 15388681;
				// ennemy.piege.tintBottomRight = 15388681;
				// ennemy.piege.setTint(0xedff44);
			}

		}

		projectile.destroy(true)
		// ennemy.setAlpha(0.2)
		// console.log("COLISION");
	}

	joueurEnnemyColision(e:any, j:any) {
		j.removeLife()
	}

	envoieProjectileToile() {
		const t = new Toile(this, this.player.x, this.player.y)
		t.body.velocity.x = this.player.flipX ? -1200 : 1200
		const mytoile = this.add.existing(t);
		// Toile.velo
		this.groupe_projectile_toile.add(mytoile)
		// const t = new Toile(this, this.player.x, this.player.y, 400, 400);
		// const t = new this.toile(this, this.player.x, this.player.y)


		console.log("ATTAQUE TOILE");	
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
