<script lang="ts">
  import { T } from '@threlte/core'
  import { ContactShadows, GLTF, Grid, OrbitControls, Environment } from '@threlte/extras'   
</script>

<T.PerspectiveCamera
  makeDefault
  position={[-10, 10, 10]}
  fov={15}
>
  <OrbitControls
    enableDamping
    target.y={1.5}
  />
</T.PerspectiveCamera>

<Environment
  path="/hover-tank/environment/"
  files="urban_street_02_1k.hdr"
  isBackground={true}
/>

<T.DirectionalLight
  intensity={0.8}
  position.x={5}
  position.y={10}
/>
<T.AmbientLight intensity={0.2} />


<ContactShadows
  scale={10}
  blur={2}
  far={2.5}
  opacity={0.5}
/>
<GLTF url="/hover-tank/models/hovertank.glb" />
<GLTF url="/hover-tank/models/world.glb" /> 