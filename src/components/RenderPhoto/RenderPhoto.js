import React from "react";
import {Img} from "./RenderPhoto.css";

const RenderPhoto = ({url, width, height, shadow}) => {
    return <Img src={url} width={width} height={height} shadow={shadow ? true : false} />
}

export default RenderPhoto;