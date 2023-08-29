var pdf = require('html-pdf');

class PDFWhiter {
    static WritePDF(filename, html) {
        pdf.create(html,{}).toFile(filename)
    }
}
module.exports = PDFWhiter