
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default interface ToilePiege {

	 body: Phaser.Physics.Arcade.Body;
}

export default class ToilePiege extends Phaser.GameObjects.Image {

	constructor(scene: Phaser.Scene, x?: number, y?: number, texture?: string, frame?: number | string) {
		super(scene, x ?? 0, y ?? 0, texture || "toile", frame);

		this.scaleX = 0.04751340409994584;
		this.scaleY = 0.04751340409994584;
		scene.physics.add.existing(this, false);
		this.body.allowGravity = false;
		this.body.setSize(640, 640, false);

		/* START-USER-CTR-CODE */
		// this.scene.time.delayedCall(200, () => this.scale -= 0.2, undefined, this)
// scene.timer.reset({
//     delay: 500,                // ms
//     callback: callback,
//     args: [],
//     callbackScope: thisArg,
//     loop: false,
//     repeat: 0,
//     startAt: 0,
//     timeScale: 1,
//     paused: false
// })
// scene.time.addEvent(scene.timer);
		// this.timer = scene.time.addEvent({
		// 	delay: 1200,
		// 	callback: () => {
		// 		// if ((this.scale - 0.2) >= 0.08) {
		// 			this.scale -= 0.2
		// 		// } else {
		// 			// this.destroy(true)
		// 			// this.player = null;
		// 		// }
		// 	},
		// 	// loop: true
		// 	repeatCount: 5
		// });
		/* END-USER-CTR-CODE */
	}

	public someoneToFollow: boolean = false;
	public player: Phaser.GameObjects.GameObject|any = undefined;

	/* START-USER-CODE */
	follow(who: any, notwho: any) {
		if (who) {
			this.stopEnnemy(who, true)
			this.player = who;
		} else {
			this.stopEnnemy(notwho, false)
			console.log("ME FOLLOW PAS");

		}
	}

	resetTimer() {
		// const nvt = this.timer.reset({
		// 	delay: 1200,                // ms
		// 	callback: this.callback,
		// // 	args: [],
		// 	callbackScope: this,
		// 	loop: true,
		// // 	repeat: 0,
		// // 	startAt: 0,
		// // 	timeScale: 1,
		// // 	paused: false
		// })
		// this.scene?.time.addEvent(nvt);
	}

	stopEnnemy(who: any, actif: any) {
		who.body.moves = !actif;
		who.body.allowGravity = !actif;
		who.body.immovable = actif;
	}

	preUpdate(...args: any[]): void {

		// console.log(this.timer.timeScale);

		if (this.player) {
			this.x = this.player.x;
			this.y = this.player.y;
		}
		// this.follow()
	}

	callback() {
		console.log("CB");

		this.scale -= 0.2;
		this.scale < 0 && this.destroy(true)
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
