<script lang="ts">
	import { T } from '@threlte/core';
	import { GLTF, OrbitControls, Environment } from '@threlte/extras';
</script>

<T.PerspectiveCamera makeDefault position={[-10, 30, 30]} fov={45}>
	<OrbitControls enableDamping target.y={1.5} />
</T.PerspectiveCamera>

<Environment path="/hover-tank/environment/" files="urban_street_02_1k.hdr" isBackground={true} />

<GLTF url="/hover-tank/models/hovertank.glb" />
<GLTF url="/hover-tank/models/world.glb" />
