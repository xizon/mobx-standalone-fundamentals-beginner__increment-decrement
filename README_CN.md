# mobx-standalone-fundamentals-beginner__increment-decrement

[English](README.md) | [中文](README_CN.md)

---

Mobx独立使用 - 简单计数器原理

## 目录结构

```sh
src/
└── index.js (入口文件，用于客户端/浏览器)
```


## 安装调试


**Step 1.** 进入当前资源目录

```sh
$ cd /{your_directory}/mobx-standalone-fundamentals-beginner__increment-decrement
```


**Step 2.** 确保安装了 `Node 14+` . 然后安装依赖项

```sh
$ sudo npm install
```

**Step 3.** 使用 `create-react-app` 运行项目

```sh
$ npm run start
```

**Step 4.** 运行命令后可以通过下面的地址访问：

```sh
http://localhost:3000
```



---

### index.js

```js
//store
import { makeObservable, observable, computed, action } from 'mobx';

class oneStore {
  count = 0;

  constructor() {
    makeObservable(this, {
      count: observable,
      isNegative: computed,
      increase: action,
      decrease: action
    });
  }

  get isNegative() {
    return this.count < 0 ? 'Yes' : 'No';
  }

  increase() {
    this.count += 1;
  }

  decrease() {
    this.count -= 1;
  }
}


//
const store = new oneStore();

function render(res) {
  document.getElementById('root').innerHTML = JSON.stringify(res);
}

render(store);

//actions
document.getElementById('button-1').addEventListener( 'click', function(e) {
  store.increase();
  render(store);
});

document.getElementById('button-2').addEventListener( 'click', function(e) {
  store.decrease();
  render(store);
});

```

装饰器语法可以写成：
```js
import {observable, computed} from "mobx";
class oneStore {
    @observable count = 0;

    constructor(count) {
        this.count = count;
    }

    @computed get isNegative() {
        return this.count < 0 ? 'Yes' : 'No'；
    }
}
```

也可以使用 decorate 来引入:
```js
import {decorate, observable, computed} from "mobx";
class oneStore {
    count = 0;
    constructor(count) {
        this.count = count;
    }

    get isNegative() {
        return this.count < 0 ? 'Yes' : 'No'；
    }
}

decorate(oneStore, {
    count: observable,
    isNegative: computed
})
```




### index.html

```html
<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<meta name="theme-color" content="#000000">
	<!--
      manifest.json provides metadata used when your web app is added to the
      homescreen on Android. See https://developers.google.com/web/fundamentals/engage-and-retain/web-app-manifest/
    -->
	<link rel="manifest" href="/manifest.json">
	<title>Mobx Standalone</title>
</head>

<body>
	<noscript>
		You need to enable JavaScript to run this app.
	</noscript>
	<button id="button-1">increment</button>
	<button id="button-2">decrement</button>
	
	<div id="root"></div>
	<!--
      This HTML file is a template.
      If you open it directly in the browser, you will see an empty page.

      You can add webfonts, meta tags, or analytics to this file.
      The build step will place the bundled scripts into the <body> tag.

      To begin the development, run `npm start` or `yarn start`.
      To create a production bundle, use `npm run build` or `yarn build`.
    -->
</body>

</html>
```