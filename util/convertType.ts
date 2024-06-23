export function dataURLtoFile(dataurl: string, fileName: string): File{
    const [header, base64Data] = dataurl.split(',');
    const mimeMatch = header.match(/:(.*?);/);
  
    if (!mimeMatch) {
      throw new Error('Invalid data URL');
    }
  
    const mime = mimeMatch[1];
    const binaryString = atob(base64Data);
    const length = binaryString.length;
    const u8arr = new Uint8Array(length);
  
    for (let i = 0; i < length; i++) {
      u8arr[i] = binaryString.charCodeAt(i);
    }
  
    return new File([u8arr], fileName, { type: mime });
  };