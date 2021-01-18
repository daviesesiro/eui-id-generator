import domtoimage from "dom-to-image";

export async function createCard(card: HTMLDivElement, name: string) {
  const result = await domtoimage.toPng(card, {
    bgcolor: "white",
    quality: 1,
  });

  const a = document.createElement("a");
  a.href = result;

  a.download = name;

  a.click();
}
