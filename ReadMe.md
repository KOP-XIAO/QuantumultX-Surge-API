## I. 关于

自制API，整理了一下

用于QuantumultX & Surge两个iOS客户端，详细来说：

- **QuantumultX**：从 SS订阅/SSR订阅 转换成quantumultx格式的订阅，并提供正则过滤，以及UDP/TFO参数的修改，以及多个订阅（托管）的合并等；
- **Surge**：从 Surge(conf&list)/SS订阅/V2ray订阅，转换成Surge list的格式链接，并提供正则过滤，多个订阅（托管）链接合并等



## II. 使用说明

### A. QuantumultX

- [x] | QuantumultX API | 参数      | 说明 | 要求                                     | 状态 |
  | --------------- | --------- | ---- | ---------------------------------------- | ---- |
  | 路径            | sub2quanx | NA   | https://dove.589669.xyz/sub2quanx?       | NA   |
  | 类型            | type      | 必须 | ss/ssr                                   | ✅    |
  | 订阅链接        | sub       | 必须 | 务必先对链接urlencode，多个订阅用 + 连接 | ✅    |
  | 正则过滤节点    | filter    | 可选 | 务必先对参数urlencode                    | ✅    |
  | UDP强制更改     | udp       | 可选 | 参数为1，或0 （默认为0）                 | ✅    |
  | TFO强制更改     | tfo       | 可选 | 参数为1，或0（默认为0）                  | ✅    |

> 完整示范：将dler的ss订阅链接转换，并只取其中名字含 “**日本**” 的节点

```
`https://dove.589669.xyz/sub2quanx?type=ss&tfo=1&udp=1&sub=https://dler.cloud/link/xxxx?mu=ss&filter=.*%E6%97%A5%E6%9C%AC`
```



#### Todo

- [ ]  增加对 surge conf以及list链接 的转换支持；
- [ ] 国旗 emoji的支持？



---------



### B. Surge

| Surge API           | 参数      | 说明 | 要求                                                         | 状态 |
| ------------------- | --------- | ---- | ------------------------------------------------------------ | ---- |
| 路径                | Mix2Surge | NA   | https://dove.589669.xyz/Mix2Surge?                           | NA   |
| 类型                | type      | 必须 | ss/v2/surge   （其中，surge参数对conf托管跟list通用）        | ✅    |
| 订阅(托管)链接      | sub       | 必须 | 务必先对链接urlencode，多个订阅用 + 号连接                   | ✅    |
| 正则过滤节点        | filter    | 可选 | 务必先对参数urlencode                                        | ✅    |
| v2订阅的header host | hd        | 可选 | hd=1，0 （为解决某些v2ray订阅在surge中不可用的情况，为0时，忽略header参数） | ✅    |

> 完整示范： 将某两个V2订阅合并转换成surge的list，并只选择其中的 **CHT ** 节点路线

```
https://dove.589669.xyz/Mix2Surge?type=v2&sub=https%3A%2F%2Fdler.cloud%2Fsubscribe%2Fxxx%3Fmu%3Dav2%2Bhttps%3A%2F%2Fytoo.xyz%2Fmodules%2Fservers%2FV2raySocks%2Fosubscribe.php%3Fsid%3D372%26token%3Dxxxo&filter=.%2ACHT
```



---

---

### 0⃣️ 打赏名单

鸡儿硬梆梆

