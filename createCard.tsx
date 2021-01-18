import domtoimage from "dom-to-image";
import JSZip from "jszip";
import filesaver from "file-saver";

export async function createCards(cards: NodeListOf<HTMLDivElement>) {
  const front = await domtoimage.toBlob(cards[0], {
    bgcolor: "white",
  });
  const back = await domtoimage.toBlob(cards[1], {
    bgcolor: "white",
  });

  const zip = new JSZip();

  zip.file("front.png", front, { base64: true });
  zip.file("back.png", back, { base64: true });

  const content = await zip.generateAsync({
    type: "blob",
  });
  filesaver.saveAs(content, "EUI-ID.zip");
}
