## I. 关于

本API旨在将各种服务器订阅，转换成可用于 QuantumultX & Surge 两个优秀的iOS客户端的格式，以及（全）平台的mellow ，clash等优秀代理工具.

> API 以及 QuantumultX 教程更新相关信息，可以订阅此 **telegram channel**: https://t.me/QuanX_API

目前已实现功能：

- **QuantumultX**：
  - 从 ***SS订阅/SSD订阅/SSR订阅/V2rayN 订阅/Surge(conf&list)/QuanX/trojan*** 转换成 **QuantumultX** 格式的订阅，并提供正则过滤，以及UDP/TFO/tls1.3参数的修改，以及多个订阅（托管）的合并等，以及emoji旗帜添加/删除，以及简单的节点重命名；
  - 将服务器订阅转换为 quantumult 的配置（含YouTube跟Netflix等基本分流）
- **Surge**：
- 从 ***Surge(conf&list)/SS订阅/SSD订阅/V2rayN订阅/trojan***，转换成 **Surge list**的格式链接，并提供正则过滤，多个订阅（托管）链接合并，以及emoji旗帜添加/删除，以及简单的节点重命名等
- **Clash**：
- 从 ***SS订阅/SSD订阅/SSR订阅/V2rayN 订阅/Surge(conf&list)/QuanX*** 转换成 Clash 格式的 proxy-provider，并提供正则过滤，以及UDP/TFO参数的修改，以及多个订阅（托管）的合并等，以及emoji旗帜添加/删除，以及简单的节点重命名；
- **Mellow**：
  - 将V2RayN或者quantumultX格式的Vmess订阅链接，转换成Mellow可用的配置文件conf，并提供节点正则过滤功能，emoji地区旗帜，rename以及简单排序等功能

-----

**更新说明：**

- 2020-04-20: 增加 surge rule-set 到 Quantumult X 分流规则的转换“
  - 路径为https://dove.589669.xyz/Rule2QX?，参数为 sub，policy
  - 示范：https://dove.589669.xyz/Rule2QX?&sub=https://anti-ad.win/surge.txt&policy=reject
- 2020-07-24: all2clash 支持 ssr 类型的转换
- 2020-07-25: 新增两个参数：
  -  regdel，利用正则表达式删除节点名中字符；
  - sort=x，节点随机排序

**常见错误：**

A. 代号 502: 服务器关机中,请等待

B. 代号 500: 内部处理错误，可联系telegram-bot反馈：https://t.me/Shawn_KOP_bot

 - 请直接说明具体问题，最好附上整个链接
 - 介意隐私，怕节点被偷的大佬，以及只会说 “怎么不行啊” 的患者，⚠️⚠️勿扰

C. APP 内出现 invalid response：同上

D. 请勿咨询如何使用等类似问题

------

----

## II. 使用说明

### A. Quantumult X / Surge/ Clash

####  1. 服务器订阅转换API

其中，surge 不支持 ssr类型订阅链接
Clash 项目地址：https://github.com/Dreamacro/clash

| 服务器订阅转换API   | 参数                                    | 说明                    | 要求                                                         | 状态 |
| ------------------- | --------------------------------------- | ----------------------- | ------------------------------------------------------------ | ---- |
| **路径**            | all2quanx<br />all2surge<br />all2clash | 支持的类型见上面说明    | https://dove.589669.xyz/all2quanx?<br />https://dove.589669.xyz/all2surge?<br />https://dove.589669.xyz/all2clash? | NA   |
| 订阅链接            | sub                                     | 必须，请先**urlencode** | 务必先对链接**urlencode**，多个订阅用 + 连接                 | ✅    |
| 正则过滤节点        | filter                                  | 可选，请先**urlencode** | 务必先对参数**urlencode**，从开头开始匹配，所以建议从  .* 开始<br />如果不懂正则，请使用下方的 in 跟 out 参数进行过滤 | ✅    |
| UDP强制更改         | udp                                     | 可选                    | 参数为1，或0 （默认为0，关闭），对surge/quanx/v2 类型无效    | ✅    |
| TFO强制更改         | tfo                                     | 可选                    | 参数为1，或0（默认为0，关闭），对surge/quanx类型无效         | ✅    |
| emoji 国家/地区符号 | emoji                                   | 可选                    | 参数为 -1(删除 emoji旗帜)；<br />1，台湾节点会显示台湾青天白日旗🇹🇼<br />2 (用于国行手机，解决无法显示台湾地区旗帜🇹🇼的问题)节点名前添加旗帜(如：🇨🇳️ 中国北京 BGP)；<br /> 11， 22，将emoji添加在节点名尾部（如：日本 IPLC 🇯🇵） | ✅    |
| 节点重命名          | rename                                  | 可选，请先**urlencode** | 1. 格式为 rename=oldname@newname，多个rename可用+链接：<br />- 例如将 香港替换成HK，日本替换成JP，则参数为：香港@HK+日本@JP (记得拿去urlencode)<br /> 2. 在名字前/后增加字符，可分别用 A@ 跟 @B等单参数，例如：<br />- 在节点前增加 [SS]，节点名尾增加 [IPLC], 则rename参数为：[SS]@+@[IPLC]<br />1跟2当然是可以混用的，比如 “[SS]@+@[IPLC]+香港@HK+日本@JP” | ✅    |
| 节点名字符删除      | Regdel                                  | 可选，请先**urlencode** | regdel=香.*IPLC                                              | ✅    |
| 节点排序            | sort                                    | 可选                    | 参数为1，-1，x,  分别按节点名进行 **正序/逆序/随机** 排列    | ✅    |
| 证书验证            | cert                                    | 可选（仅限Quanx）       | 参数为1/0， 默认留空为1，即  "tls-verification=true "        | ✅    |
| Tls1.3开启          | tls13                                   | 可选                    | 参数为 1 时，开启 tls1.3，即tls13=true                       | ✅    |
| 订阅流量信息        | info                                    | 可选（仅限Quanx ）      | 参数为 1/0，默认为0<br />为 1时，会保留订阅 header 中的流量跟套餐信息(如有的话) | ✅️    |
| 节点保留参数        | in                                      | 可选                    | 例如，想保留节点中名字包含**"德国"**跟**"美国"**,那就 in=德+美 (务必对参数 urlencode) | ✅️    |
| 节点删除参数        | out                                     | 可选                    | 例如，想删除节点中名字包含**"01"**跟**"05"**,那就 out=01+05 (务必对参数 urlencode) | ✅️    |

> **完整示范**：将 dler 的 ss订阅链接 转换，并只取其中名字含 “**日本**” 的节点，并添加 emoji，以及将节点名中的“日本”替换为“JP”，
>
> 0⃣️ 订阅链接在 urlencode 后为：sub=https%3A%2F%2Fdler.cloud%2Flink%2Fxxxx%3Fmu%3Dss
>
> 1⃣️ filter 参数为 .*日本，urlencode后为：filter=.%2A%E6%97%A5%E6%9C%AC。 （你也可以用in参数：in=%E6%97%A5%E6%9C%AC）
>
> 2⃣️ rename 参数为 日本@JP ， urlencode后为：rename=%E6%97%A5%E6%9C%AC%40JP
>
> 3⃣️ emoji 参数为 emoji=2
>
> 4⃣️ 每个参数间用 & 连接，最终合并成链接为：
>
> 5⃣️ 将最终链接填入 QuantumultX 的节点订阅(引用)

```
https://dove.589669.xyz/all2quanx?tfo=1&udp=1&emoji=2&sub=https%3A%2F%2Fdler.cloud%2Flink%2Fxxxx%3Fmu%3Dss&filter=.%2A%E6%97%A5%E6%9C%AC&rename=%E6%97%A5%E6%9C%AC%40JP
```

> **完整示范 B**： 将某两个V2订阅合并转换成surge的list，并只选择其中的 **CHT ** 节点路线

然后通过 surge 的 policy-path 外部资源导入

```
https://dove.589669.xyz/all2surge?sub=https%3A%2F%2Fdler.cloud%2Fsubscribe%2Fxxx%3Fmu%3Dav2%2Bhttps%3A%2F%2Fytoo.xyz%2Fmodules%2Fservers%2FV2raySocks%2Fosubscribe.php%3Fsid%3D372%26token%3Dxxxo&in=CHT
```

如果你想过滤多个参数，比如 **日本** 或者 韩国 可以使用  .*(日本|韩国)

 更多更灵活的操作，自行学习 正则：https://github.com/ziishaned/learn-regex/blob/master/translations/README-cn.md

参数请去此网站进行URLEncode：https://www.urlencoder.org

#### 2.  服务器订阅转QuantumultX配置

|          | 参数       | 说明                       | 要求                                | 状态 |
| -------- | ---------- | -------------------------- | ----------------------------------- | ---- |
| 路径     | sub2qxconf | 将服务器订阅转换成整份配置 | https://dove.589669.xyz/sub2qxconf? |      |
| 订阅链接 | sub        | 必须                       | 对链接urlencode，多个链接用 + 连接  | ✅    |

> 完整示范 A：将两个节点订阅链接 http://sub1  跟 https://sub2 ,生成 QuantumultX 的配置，
>
> 1⃣️ 将  http://sub1+ http://sub2 拿去urlencode：
>
> 2⃣️ 完整链接🔗：https://dove.589669.xyz/sub2qxconf?sub=http%3A%2F%2Fsub1%2Bhttp%3A%2F%2Fsub2
>
> 3⃣️ 点按quantumultx右下角，进入设置，找到最下方“下载”填入QuantumultX

---



### B. Mellow 项目

项目地址：<https://github.com/mellow-io/mellow>

神机规则地址：<https://github.com/ConnersHua/Profiles/blob/master/Mellow/Pro.conf>

API作用：将V2RayN订阅/quantumultX格式V2订阅，转换成mellow的conf配置（神机规则）

| Mellow API          | 参数     | 说明                | 要求                                                         | 状态 |
| ------------------- | -------- | ------------------- | ------------------------------------------------------------ | ---- |
| 路径                | V2Mellow | 必须                | https://dove.589669.xyz/V2Mellow?                            | ✅    |
| 类型                | type     | 必须                | v2 或者 qx                                                   | ✅    |
| 链接                | sub      | 必须                | 务必先对链接**urlencode**，多个订阅用 + 号连接               | ✅    |
| 正则过滤节点        | filter   | 可选                | 务必先对参数**urlencode**，从开头开始匹配，所以建议从  .* 开始<br />如果不懂正则，请使用下方的 in 跟 out 参数进行过滤 | ✅    |
| emoji 国家/地区符号 | emoji    | 可选                | 参数为 -1(删除旗帜)，1，2(用于国行手机，解决无法显示台湾地区旗帜🇹🇼的问题)；<br />另有参数 11， 22，将emoji添加在节点名尾部（如：日本 IPLC 🇯🇵） | ✅    |
| 节点重命名          | rename   | 可选，请先urlencode | 1. 格式为 rename=oldname@newname，多个rename可用+链接：<br />- 例如将 香港替换成HK，日本替换成JP，则参数为：香港@HK+日本@JP (记得拿去urlencode)<br /> 2. 在名字前/后增加字符，可分别用 A@ 跟 @B等单参数，例如：<br />- 在节点前增加 [SS]，节点名尾增加 [IPLC], 则rename参数为：[SS]@+@[IPLC]<br />1跟2当然是可以混用的，比如 “[SS]@+@[IPLC]+香港@HK+日本@JP” | ✅    |
| 节点排序            | sort     | 可选                | 参数为1，-1， 分别按节点名进行 **正序/逆序** 排列            | ✅    |

> 完整示范：将dlercloud 的v2订阅，并只挑选其中的 PCCW 节点 
> ⚠️注意⚠️：此API与前两个不同的是，这个API中，rename 优先级高于 filter：
> 所以你如果把“日本” rename成了 “JP” ，那过滤“日本”节点时，请用替换后的“JP”关键词作为filter参数

```
https://dove.589669.xyz/V2Mellow?type=v2&sub=https%3A%2F%2Fdler.cloud%2Fsubscribe%2FToken%3Fmu%3Dav2&filter=.%2APCCW
```



## C. 订阅过滤 API

https://dove.589669.xyz/subfilter?sub=订阅链接(urlencode)&filter=正则参数

---

---



### 0⃣️ 请咖啡☕️名单

🙏感谢🙏  **如果觉得有用，请大胆请喝咖啡☕️**

- 鸡儿硬梆梆
- 🐔哥｜法外 伉俪
- 旺仔弟| 旺仔哥
- 守夜人
- Big Cat
- Xin
- 锄禾
- 弥彦
- Miao ~ socloud
- 非主流 李克斯 关下门
- yumemi
- Zealson
- 布
- 好用的

<img src="https://tva1.sinaimg.cn/large/006y8mN6gy1g7t6di3i9oj30gg0g240w.jpg" style="height:300px" />



