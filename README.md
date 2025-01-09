## 📦 Install

```shell
npm install web-random-utils -D
```

## 🪄 Usage

```javascript
// ESM
import {randomNumber, randomPassword} from 'web-random-utils';

// 随机数值
randomNumber() // 654
randomNumber(2, 500) // 300

生成密码
randomPassword() // u^u;4#9%Kw8{q[cF
randomPassword(12, 'low') //WHnocjIPgrBzRJdQ
randomPassword(12, 'medium') //aItjlvn1mIVm0PLz
randomPassword(12, 'strong') //+3Mm9EP<zJGNTu/Y
```