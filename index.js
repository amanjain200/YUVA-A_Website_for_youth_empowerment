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

  // const pdfDataUri = await pdfdoc.saveAsBase64({ dataUri: true });
  // saveAs(pdfDataUri, "pledgeCertificate.pdf");

  const pdfBytes = await pdfdoc.save();
  //fs.writeFileSync("output.pdf", pdfBytes);
  // Create a Blob from the Uint8Array
  const blob = new Blob([pdfBytes], { type: "application/pdf" });

  // Create an anchor element
  const link = document.createElement("a");

  // Set the link's href to the Blob's object URL
  link.href = window.URL.createObjectURL(blob);

  // Set the download attribute to specify the filename
  usernamevalue = userName[0].value;
  link.download = "Certificate - " + usernamevalue + ".pdf";

  // Append the link to the document
  document.body.appendChild(link);

  // Trigger a click on the link to initiate the download
  link.click();

  // Remove the link from the document
  document.body.removeChild(link);
};
