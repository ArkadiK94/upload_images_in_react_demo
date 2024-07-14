import React from "react";
import { FcAddImage } from "react-icons/fc";

const ImageInput = ({ inputName, inputId, onChange, filesName = [], multiple = false, maxMultiple = 4 }) => {
    const shouldShowAddImage = !multiple || (multiple && filesName.length < maxMultiple);
    return (
        <div key={!multiple && filesName[0]}>
            <label htmlFor={inputId}>{shouldShowAddImage && <FcAddImage size="65px" />}</label>
            <input
                type="file"
                name={inputName}
                id={inputId}
                onChange={onChange}
                accept="image/*"
                multiple={multiple}
                hidden
            />
        </div>
    );
};
export default ImageInput;
