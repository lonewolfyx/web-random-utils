/**
 * 生成 UUID
 */
export const generateUuid = () => {
    // 生成 16 个随机字节（128 位）
    const bytes = new Uint8Array(16);
    crypto.getRandomValues(bytes);

    // 设置版本号（第 7 个字节的高 4 位为 4）
    bytes[6] = (bytes[6] & 0x0f) | 0x40; // 0100xxxx

    // 设置变体（第 9 个字节的高 2 位为 10）
    bytes[8] = (bytes[8] & 0x3f) | 0x80; // 10xxxxxx

    // 将字节数组转换为 UUID 格式的字符串
    const hex = Array.from(bytes)
        .map(byte => byte.toString(16).padStart(2, '0'))
        .join('');

    return `${hex.slice(0, 8)}-${hex.slice(8, 12)}-${hex.slice(12, 16)}-${hex.slice(16, 20)}-${hex.slice(20)}`;
}