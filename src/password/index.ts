type PasswordType = 'low' | 'medium' | 'strong'

const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numbers = '1234567890';
const special = '`~!@#$%^&*()-=_+[]{}|;\':",./<>?';
const hex = '123456789ABCDEF';

/**
 * 生成密码
 *
 * @param length 密码长度，默认 16 位
 * @param useLowerCase 使用小写字母
 * @param useUpperCase 使用大写字母
 * @param useNumbers 使用数字
 * @param useSpecial 使用特殊字符
 * @param useHex 使用十六进制字符
 */
export const generatePassword = (
    length: number = 16,
    useLowerCase: boolean = true,
    useUpperCase: boolean = true,
    useNumbers: boolean = true,
    useSpecial: boolean = true,
    useHex: boolean = false
) => {
    let chars = '';
    let key = '';

    if (useLowerCase) chars += lowerCase;
    if (useUpperCase) chars += upperCase;
    if (useNumbers) chars += numbers;
    if (useSpecial) chars += special;
    if (useHex) chars += hex;

    for (let i = 0; i < length; i++) {
        key += chars[Math.floor(Math.random() * chars.length)];
    }

    return key;
}


export const randomPassword = (length: number = 16, type: PasswordType = 'strong') => {
    switch (type) {
        case "strong":
            return generatePassword(length, true, true, true, true, false);
        case "medium":
            return generatePassword(length, true, true, true, false, false);
        case "low":
            return generatePassword(length, true, true, false, false, false);
        default:
    }
}
