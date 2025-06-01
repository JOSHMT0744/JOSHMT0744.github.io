import React from "react"
import "./Shader.css"
import { ShaderGradientCanvas, ShaderGradient } from "@shadergradient/react"
//import * as reactSpring from "@react-spring/three"

const Shader = () => {
   return (
      <div className="shader">
         <ShaderGradientCanvas style={{
            position: "absolute",
            pointerEvents: "none", 
            top: 0,
         }}>
            <ShaderGradient 
            control="query" 
            urlString="https://www.shadergradient.co/customize?animate=on&axesHelper=on&bgColor1=%23000000&bgColor2=%23000000&brightness=1.2&cAzimuthAngle=180&cDistance=2.4&cPolarAngle=95&cameraZoom=1&color1=%23f8fafc&color2=%23d9eafd&color3=%23bcccdc&destination=onCanvas&embedMode=off&envPreset=city&format=gif&fov=45&frameRate=10&grain=off&lightType=3d&pixelDensity=1&positionX=0&positionY=-2.1&positionZ=0&range=enabled&rangeEnd=40&rangeStart=0&reflection=0.1&rotationX=0&rotationY=0&rotationZ=225&shader=defaults&type=waterPlane&uAmplitude=0&uDensity=1.8&uFrequency=5.5&uSpeed=0.2&uStrength=3&uTime=0.2&wireframe=false"/>
         </ShaderGradientCanvas>
      </div>
   )
}

export default Shader
