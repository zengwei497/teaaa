# teaaa

- 把query string解析为对象，注入到props上

## 使用方式

### 1.安装

```
yarn add teaaa

```

### 2.引入

```
import withQuery from 'teaaa'

...

export default withQuery(Component)
```

### 3.访问属性

```

const { query } =  this.props

console.log(query.a) // a = 1, www.baidu.com?a=1

```
