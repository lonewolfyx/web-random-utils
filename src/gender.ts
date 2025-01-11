/**
 * 生成性别
 */
export const generateGender = () => {
    const genders: string[] = ['男', '女'];

    const randomIndex: number = Math.floor(Math.random() * genders.length);

    return genders[randomIndex];
}