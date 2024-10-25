import { PressedKeys } from 'runed';
import { Vector2 } from 'three';

export class KeyboardControls {
	keys = new PressedKeys();
	axisA = new Vector2();
	boostA = $derived(this.keys.has('0'));

	axisB = new Vector2();
	boostB = $derived(this.keys.has(' '));

	constructor() {
		$effect(() => {
			this.axisA.set(
				(this.keys.has('ArrowRight') ? 1 : 0) - (this.keys.has('ArrowLeft') ? 1 : 0),
				(this.keys.has('ArrowUp') ? 1 : 0) - (this.keys.has('ArrowDown') ? 1 : 0)
			);
		});

		$effect(() => {
			this.axisB.set(
				(this.keys.has('d') ? 1 : 0) - (this.keys.has('a') ? 1 : 0),
				(this.keys.has('w') ? 1 : 0) - (this.keys.has('s') ? 1 : 0)
			);
		});

		// see all pressed keys
		// $effect(() => {
		// 	console.log($state.snapshot(this.keys.all));
		// });
	}
}
