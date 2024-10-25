<script lang="ts">
	import { T } from '@threlte/core';
	import { OrbitControls, Environment } from '@threlte/extras';
	import Map from './Map.svelte';
	import { Debug } from '@threlte/rapier';
	import TankA from './TankA.svelte';
	import TankB from './TankB.svelte';
</script>

<!-- Debug physics -->
<!-- <Debug /> -->

<T.PerspectiveCamera makeDefault position={[0, 200, 20]} fov={45}>
	<OrbitControls enableDamping target.y={0} />
</T.PerspectiveCamera>

<Environment
	path="/hover-tank/environment/"
	files="urban_street_02_1k.hdr"
	format="hdr"
	isBackground={true}
/>

<Map />

<TankA />
<TankB />
