const { PDFDocument, rgb, degrees } = PDFLib;
const userName = document
  .querySelector(".certificate-name")
  .getElementsByTagName("input");
const submitBtn = document
  .querySelector(".certificate-name")
  .getElementsByTagName("button");
console.log("I am in certificate.js");

console.log(userName[0].value);

submitBtn[0].addEventListener("click", () => {
  console.log("I am in submitBtn");
  console.log(userName[0].value);
  const value = userName[0].value;
  if (value.trim() !== "") {
    generatePDF(value);
  } else {
  }
});

const generatePDF = async (name) => {
  const existingPDFbytes = await fetch("yuva-certificate.pdf").then((res) =>
    res.arrayBuffer()
  );
  const pdfdoc = await PDFDocument.load(existingPDFbytes);

  const pages = pdfdoc.getPages();
  const firstPage = pages[0];

  const { width, height } = firstPage.getSize();

  firstPage.drawText(userName[0].value, {
    x: 150,
    y: 265,
    size: 50,
    color: rgb(0.95, 0.1, 0.1),
  });

  const pdfDataUri = await pdfdoc.saveAsBase64({ dataUri: true });
  saveAs(pdfDataUri, "pledgeCertificate.pdf");
};
