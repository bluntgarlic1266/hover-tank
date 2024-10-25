<script lang="ts">
	import { T, useTask } from '@threlte/core';
	import { GLTF } from '@threlte/extras';
	import { Collider, RigidBody } from '@threlte/rapier';
	import { RigidBody as RapierRigidBody } from '@dimforge/rapier3d-compat';
	import { Quaternion, Vector3 } from 'three';
	import { KeyboardControls } from './controls.svelte';

	const controls = new KeyboardControls();

	// Settings
	const angularSpeed = 1.5;
	const angularDamping = 0.7;
	const linearSpeed = 16;
	const linearDamping = 0.3;
	const friction = 0.5;
	const boost = 2;

	let rigidBody: RapierRigidBody;
	const currentRotation = new Quaternion();
	const angularVelocity = new Vector3();
	const linearVelocity = new Vector3();

	useTask((delta) => {
		if (!rigidBody) return;
		// calculate the rotation based on left, right
		angularVelocity.set(0, controls.axisA.x * -1 * angularSpeed, 0);

		// calculate the forward velocity
		linearVelocity.set(0, 0, controls.axisA.y * -1 * linearSpeed);
		// take into account that the player already is rotated, so we need to apply the current rotation
		currentRotation.copy(rigidBody.rotation());
		linearVelocity.applyQuaternion(currentRotation);

		// only apply the velocity if we have any input
		if (controls.axisA.x !== 0) {
			rigidBody.setAngvel(angularVelocity, true);
		}
		if (controls.axisA.y !== 0) {
			if (controls.boostA) {
				linearVelocity.multiplyScalar(boost);
			}
			rigidBody.setLinvel(linearVelocity, true);
		}
	});

	// $inspect(controls.axis);
</script>

<T.Group position={[-60, 4, 40]}>
	<RigidBody bind:rigidBody type="dynamic" {angularDamping} {linearDamping}>
		<Collider shape="cuboid" args={[2, 1, 3]} {friction} />
		<GLTF castShadow receiveShadow url="/hover-tank/models/hovertank.glb" />
	</RigidBody>
</T.Group>
