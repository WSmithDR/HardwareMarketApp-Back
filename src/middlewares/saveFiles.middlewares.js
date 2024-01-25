import multer from 'multer';
import __dirname from '../utils.js';

// Multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    let uploadPath = `${__dirname}/public/images`;

    // Verificar el tipo de archivo y establecer la carpeta dedestino
    if (file.fieldname === 'profileImage') {
      log.info('****** pasó por multer ******');
      uploadPath = `${__dirname}/public/images/profiles`;
    } else if (file.fieldname === 'thumbmails') {
      log.info('****** pasó por multer ******');
      uploadPath = `${__dirname}/public/images/products`;
    } else if (file.fieldname === 'documents') {
      log.info('****** pasó por multer ******');
      uploadPath = `${__dirname}/public/images/documents`;
    }

    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    log.info('Multer: ', file);
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

export const uploader = multer({
  storage,
  onError: (err, next) => {
    log.error(err);
    next();
  },
});