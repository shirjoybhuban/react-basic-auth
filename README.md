<div align="center">

</a>

</div>

<br />

<h3 align="center"><strong>React Basic Auth</strong></h3>

<div align="center"> A hassle free login system. Easy to implement.</div>

<br />

<br />

<div align="center">

  <sub>Build by <a href="github.com/shirjoybhuban">Shirjoy Bhuban</a> 👨‍🍳</sub>

</div>


<br />


## Features


- 🔥 **Easy to implement**

- 🔩 **No third party package needed**

- ⏳ **Persist State**

- 🕊 **Lightweight** 

- ✅ **Accessible**


## Installation


#### With yarn


```sh

yarn add react-basic-auth

```


#### With NPM


```sh

npm install react-basic-auth

```

user
## Getting Started


Add the AuthComponent anywhere to your app. It will automatically take care of user login!


```jsx

import AuthComponent from "rect-basic-auth";
import 'react-basic-auth/dist/index.css'


const MyComponent = () => {

  return (

    <div>

      <AuthComponent/>

    </div>

  );

};

```


## Support


react-basic-auth supports typescript. We used tsup as our typescript bundler. For some standalone feature we choose tsup over Babel, webpack, or TypeScript's own compiler (tsc). Tsup is very lightweight and tsup uses the incredible speed of esbuild. Tsup is easy to config. Tree shaking, minification, code splitting are some feature of tsup. 

For state management we used context api and did not include any third party package. This makes our package lightweight.