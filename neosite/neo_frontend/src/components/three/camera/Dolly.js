import { useFrame } from 'react-three-fiber'

const Dolly = () => {
    useFrame(({ clock, camera }) => camera.updateProjectionMatrix(void (camera.position.z = 50 + Math.sin(clock.getElapsedTime()) * 30)))
    return null
}

export default Dolly;