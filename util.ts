export const isServer = () => window === undefined;

/**
 * Riszes an Image File and converts it to a dataurl string.
 * @param imageFile the image file (probably from a file input)
 * @param resize_width The width you want the image to be
 * @param quality quality of the resize image 0 - 1
 */
export const resizeImage = ({
  resize_width = 400,
  imageFile,
  quality = 1,
}: {
  resize_width?: number;
  imageFile: File;
  quality?: number;
}): Promise<string> => {
  quality = Math.max(Math.min(quality, 1), 0); // 0 <= quality <= 1

  return new Promise((resolve) => {
    //create a FileReader
    var reader = new FileReader();

    //image turned to base64-encoded Data URI.
    reader.readAsDataURL(imageFile);
    let srcEncoded: string;

    reader.onload = () => {
      var img = new Image(); //create a image
      img.src = reader.result as string; //result is base64-encoded Data URI

      img.onload = () => {
        var canvas = document.createElement("canvas"); //create a canvas

        //scale the image to 600 (width) and keep aspect ratio
        var scaleFactor = resize_width / img.width;
        canvas.width = resize_width;
        canvas.height = img.height * scaleFactor;

        //draw in canvas
        var ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

        //get the base64-encoded Data URI from the resize image
        srcEncoded = canvas.toDataURL(imageFile.type, quality);

        resolve(srcEncoded);
      };
    };
  });
};
