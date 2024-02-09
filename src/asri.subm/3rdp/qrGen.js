window.QRCodeGenerator = window.SushaWrapper.QRCodeGenerator = class QRCodeGenerator {
  /**
   * Creates an instance of QRCodeGenerator.
   * @param {string} [apiBaseUrl='http://api.qrserver.com/v1/create-qr-code/'] - The base URL of the QR code API.
   */
  constructor(apiBaseUrl) {
    this.apiBaseUrl = apiBaseUrl || 'http://api.qrserver.com/v1/create-qr-code/';
  }

  /**
   * Generates a URL for a QR code with the given data and options.
   * @param {string} data - The data to encode in the QR code.
   * @param {Object} [options={}] - Additional options for the QR code generation.
   * @returns {string} The URL to the generated QR code.
   */
  generateQRCode(data, options = {}) {
    const queryParams = this._buildQueryParams(data, options);
    const url = `${this.apiBaseUrl}?${queryParams}`;
    return url;
  }

  /**
   * Builds the query parameters string for the QR code URL based on data and options.
   * @param {string} data - The data to encode.
   * @param {Object} options - The options for the QR code generation.
   * @returns {string} The query parameters string.
   */
  _buildQueryParams(data, options) {
    const params = new URLSearchParams();
    params.append('data', encodeURIComponent(data));

    if (options.size) params.append('size', options.size);
    if (options.charsetSource) params.append('charset-source', options.charsetSource);
    if (options.charsetTarget) params.append('charset-target', options.charsetTarget);
    if (options.ecc) params.append('ecc', options.ecc);
    if (options.color) params.append('color', options.color);
    if (options.bgcolor) params.append('bgcolor', options.bgcolor);
    if (options.margin) params.append('margin', options.margin);
    if (options.qzone) params.append('qzone', options.qzone);
    if (options.format) params.append('format', options.format);

    return params.toString();
  }
}

// Example usage:
// const qrGenerator = new QRCodeGenerator();

// const qrCodeUrl = qrGenerator.generateQRCode('HelloWorld!', {
//   size: '100x100',
//   ecc: 'L',
//   color: '255-0-0',
//   bgcolor: '255-255-255',
//   margin: 1,
//   qzone: 4,
//   format: 'png'
// });