const downloader = document.querySelector('#prescription-generator');

downloader.addEventListener('click', () => {
  const prescription = this.document.querySelector("#prescription");
    var options = {
      margin: 1,
      filename: 'prescription.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
    html2pdf().from(prescription).set(options).save();
});