import React from "react";

const ImagePreview = ({ files, onRemove, maxImages }) => {
    const closeIcon = <>&#10005;</>;

    return (
        <div
            style={{
                display: "grid",
                columnGap: "25px",
                gridTemplateColumns: `repeat(${maxImages},1fr)`,
                gridTemplateRows: "350px",
                gap: "5px",
                marginBottom: "10px",
            }}
        >
            {files?.map((file, index) => (
                <div key={file.name} style={{ position: "relative" }}>
                    <img
                        src={URL.createObjectURL(file)}
                        alt={`Uploaded ${index + 1}`}
                        style={{ height: "350px", width: "100%" }}
                    />
                    <button
                        onClick={() => onRemove(index)}
                        style={{
                            position: "absolute",
                            right: "0px",
                            padding: "5px",
                            borderRadius: 0,
                        }}
                    >
                        {closeIcon}
                    </button>
                </div>
            ))}
        </div>
    );
};
export default ImagePreview;
