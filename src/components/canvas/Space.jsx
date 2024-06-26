import { React, Suspense, useEffect, useState} from 'react'
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';

const Space = ({ isMobile }) => {

  const space = useGLTF('./space/scene.gltf');

  return (
    <mesh>
      {/* <hemisphereLight intensity={0.15}  />
      <pointLight intensity={1} /> */}
      <primitive 
        object={space.scene}
        scale={isMobile ? 1.3 : 1.5}
        position={[-2, -5, 2]}  
      />
    </mesh>
  )
}

const SpaceCanvas = () => {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('max-width: 500px');
      setIsMobile(mediaQuery.matches);

      const handleMediaQueryChange = (event) => {
        setIsMobile(event.matches);
      }

      mediaQuery.addEventListener('change', handleMediaQueryChange);

      return () => {
        mediaQuery.removeEventListener('change', handleMediaQueryChange);
      }
  }, [])

  return(
    <Canvas 
      // className='hidden'
      frameloop='demand'
      shadows
      camera={{ position: [0, 0, 4], fov: 20 }}
      gl={ { preserveDrawingBuffer: true } }
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls 
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          maxAzimuthAngle={Math.PI / 20}
          minAzimuthAngle={-Math.PI / 20}
          target={[0, -2.5, -12]}
          dampingFactor={0.009} 
          rotateSpeed={0.018}
        />

        <Space isMobile={isMobile} />
        <Preload all />
      </Suspense>

    </Canvas>
  )
}

export default SpaceCanvas;