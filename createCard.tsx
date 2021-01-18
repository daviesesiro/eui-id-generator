import domtoimage from "dom-to-image";

export async function createCard(card: HTMLDivElement, name: string) {
  const result = await domtoimage.toJpeg(card, {
    bgcolor: "white",
  });

  const a = document.createElement("a");
  a.href = result;

  a.download = name;

  a.click();
}
