export function validateEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

export function validatePassword(str: string): boolean {
    return str.length >= 8;
}

export function validatePhoneNumber(phoneNumber: string): boolean {
    const phoneRegex = /^\d{3}-\d{4}-\d{4}$/;
    return phoneRegex.test(phoneNumber);
}

export function validateImage(file: File): boolean {
    return file && file.type.startsWith("image");
}
