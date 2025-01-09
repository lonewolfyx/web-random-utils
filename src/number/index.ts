/**
 * 生成随机数值
 *
 * @param min 最小值，默认 1
 * @param max 最大值，默认 9999
 */
export const randomNumber = (min: number = 1, max: number = 9999) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
}