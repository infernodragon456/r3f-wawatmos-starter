/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.2 .\public\models\ship\viking_ship.glb 
Author: Georg Klein (https://sketchfab.com/kleingeo)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/viking-ship-d32f48fd2be64f948ee4d80a6da70ae8
Title: Viking Ship
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Ship(props) {
  const { nodes, materials } = useGLTF('./models/ship/viking_ship.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.008}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh geometry={nodes.ship_sail1_0.geometry} material={materials.sail1} />
          <mesh geometry={nodes.ship_shields_0.geometry} material={materials.shields} />
          <mesh geometry={nodes.ship_trimsheet_0.geometry} material={materials.trimsheet} />
          <mesh geometry={nodes.ship_stuff_0.geometry} material={materials.stuff} />
          <mesh geometry={nodes.ship_woodplanks_0.geometry} material={materials.woodplanks} />
          <mesh geometry={nodes.ship_glow_0.geometry} material={materials.glow} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('./models/ship/viking_ship.glb')
