<script lang="ts">
	import { T } from '@threlte/core';
	import { useGltf } from '@threlte/extras';
	import { Collider, AutoColliders } from '@threlte/rapier';

	const world = useGltf('/hover-tank/models/world.glb');
</script>

{#if $world}
	<T.Group position={[0, 0, 0]}>
		<Collider shape={'cuboid'} args={[100, 0.5, 100]} />
		<AutoColliders shape={'trimesh'}>
			<T is={$world.scene} />
		</AutoColliders>
	</T.Group>
{/if}
