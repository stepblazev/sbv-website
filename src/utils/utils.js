export function isEmail(template) {
    const pattern = /^([^\s@]+@[^\s@]+\.[^\s@]+)$/i;
    const isEmail = pattern.test(template);
    return isEmail;
}
