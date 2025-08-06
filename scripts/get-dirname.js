import { fileURLToPath } from 'url';
import { dirname } from 'path';

export const getDirname = (importMetaUrl) => {
  const __filename = fileURLToPath(importMetaUrl);
  return dirname(__filename);
};
