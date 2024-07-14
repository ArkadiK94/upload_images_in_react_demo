import ImageInput from "./components/ImageInput";
import ImagePreview from "./components/ImagePreview";
import useUploadImages from "./hooks/useUploadImages";

const MAX_IMAGE_SIZE_BYTES = 1048576;
const MAX_IMAGES = 4;
const IS_MULTIPLE = true;

function App() {
    const {
        images,
        imagesName,
        onResetImages,
        onImageRemove,
        onImageChange,
        onImageDrop,
        onImagePaste,
        onImageDragOver,
        onManyImageSubmit,
    } = useUploadImages({
        maxImageSizeByte: MAX_IMAGE_SIZE_BYTES,
        requiredImageWidth: 400,
        pageName: "main",
    });
    return (
        <article
            className="container"
            style={{
                marginTop: "50px",
                padding: "50px",
                display: "flex",
                flexDirection: "column",
            }}
            onDrop={(e) => onImageDrop(e, IS_MULTIPLE, MAX_IMAGES)}
            onDragOver={onImageDragOver}
        >
            <h1 style={{ alignSelf: "center" }}>Upload Images</h1>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <input type="text" name="text" id="text" onPaste={(e) => onImagePaste(e, IS_MULTIPLE, MAX_IMAGES)} />
                <div>
                    <ImageInput
                        inputId="image"
                        inputName="image"
                        multiple
                        labelPlaceholder="Please upload images"
                        onChange={(e) => onImageChange(e, IS_MULTIPLE, MAX_IMAGES)}
                        filesName={imagesName}
                        maxMultiple={MAX_IMAGES}
                    />
                </div>
            </div>
            <ImagePreview
                files={images}
                onRemove={(e) => onImageRemove(e, IS_MULTIPLE, MAX_IMAGES)}
                maxImages={MAX_IMAGES}
            />
            <button
                type="submit"
                onClick={() => {
                    onManyImageSubmit(images);
                    onResetImages();
                }}
            >
                Submit
            </button>
        </article>
    );
}

export default App;
