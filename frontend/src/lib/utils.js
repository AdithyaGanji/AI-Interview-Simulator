export function formatFileSize(fileSize) {
  const sizeInKB = Math.round(fileSize / 1024);
  return sizeInKB < 1024 ? `${sizeInKB} KB` : `${(sizeInKB / 1024).toFixed(1)} MB`;
}
