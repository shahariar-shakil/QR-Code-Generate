document.getElementById('generate').addEventListener('click', function() {
    const text = document.getElementById('text').value.trim();
    if (text) {
      generateQRCode(text);
    } else {
      alert('Please enter text to generate a QR code.');
    }
  });
  
  function generateQRCode(text) {
    const qrcodeContainer = document.getElementById('qrcode');
    qrcodeContainer.getContext('2d').clearRect(0, 0, qrcodeContainer.width, qrcodeContainer.height); // Clear previous QR code
    
    QRCode.toCanvas(qrcodeContainer, text, { errorCorrectionLevel: 'H' }, function(error) {
      if (error) {
        alert(`QR code generation error: ${error.message}`);
        console.error('QR code generation error:', error);
      } else {
        console.log('QR code generated!');
      }
    });
  }
  