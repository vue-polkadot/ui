## Getting started

In this tutorial how to make your first Vue app with Typescript.
Make sure you have [node.js](https://nodejs.org/en/download/) and [vue-cli](https://cli.vuejs.org/guide/installation.html) installed.

### Creating app

To create a new project, run:

```bash
vue create name-of-my-app
```

You will be prompted to pick a preset. Choose "Manually select features" to pick the features you need.
![Preset](./assets/manually-select.png)

From features we pick Babel, Typescript. We also recommend to pick Vuex (for vue-settings), Router (for subpages) and linter (code checker, but it can be very tricky)
![Preset](./assets/preset.png)

After picking features you will be prompted to choose class component or not. We definitelly recommend it as it is very easy to use. Press `Y` for yes
![Preset](./assets/class-component-syntax.png)

You will then asked if you want to use Babel alongside with Typescript press `Y` for yes.
We also prefer to place config in dedicated files. It makes code more cleaner
![Preset](./assets/dedicated-files.png)

After installation just change directory with
```bash
cd name-of-my-app
```

and run with

```
yarn serve
```

open the source code in your favourite text editor (We love [Visual Studio Code](https://code.visualstudio.com/Download)).

### Creating first component

We will create our first Vue Typescript component using `vue-identicon`

in `src/components/` we will create `IdenticonImage.vue` you can copy the snippet bellow

```html

<template>
  <div>
    IdenticonImage works!
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class IdenticonImage extends Vue {
}
</script>
```

In `App.vue` we will now import `IdenticonImage` under `HelloWorld` import.
```
import IdenticonImage from './components/IdenticonImage.vue';
```

also we can't forget to register our component, so simply add `IdenticonImage` inside `@Component` annotation like:

```ts
@Component({
  components: {
    HelloWorld,
    IdenticonImage
  },
})
```

now we can show **IdenticonImage** inside our template, replace `<img>` tag with:
```
<IdenticonImage />
```

How should `App.vue` look like.

```html
<template>
  <div id="app">
    <IdenticonImage />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from './components/HelloWorld.vue';
import IdenticonImage from './components/IdenticonImage.vue';

@Component({
  components: {
    HelloWorld,
    IdenticonImage
  },
})
export default class App extends Vue {}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
```

### Adding vue-identicon to project

Now open another terminal and type down

```bash
yarn add @vue-polkadot/vue-identicon
```

this command will install `vue-identicon` package which we can use in our `IdenticonImage.vue`.
We will import vue-identicon like:
```ts
import Identicon from '@vue-polkadot/vue-identicon';
```

register the `Identicon` component in `@Component` annotation:

```ts
@Component({
  components: {
    Identicon
  }
})
```

and add to teplate.
There are 3 properties for `Identicon`:
 - size
 - theme
 - value: represents polkadot's ss58 address -> for generation use [Subkey](https://subkey.netlify.com/)

 Our final `IdenticonImage.vue` component:

```html
<template>
  <div>
    <Identicon
      size="128"
      value='5F1aGzHi5uJkRdegzBNj4fhG81ZtrWS79TrErTa7qL7ih4ik'
      theme='beachball'
    />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Identicon from '@vue-polkadot/vue-identicon';

@Component({
  components: {
    Identicon
  }
})
export default class IdenticonImage extends Vue {
}
</script>
```
What we should see now:


![Preset](./assets/finall-app.png)

### Generationg vue-identicon with vue-keyring

We used static address to try if our identicon works but, it would be more fun to generate identicon based on given address.

We will install `vue-keyring` which helps us with account generation.
```
yarn add @vue-polkadot/vue-keyring
```

We will need two new components in this part. First component `AccountsWrapper` is wrapper for `crypto-wasm` library. Second component `Accounts` creates new account with metadata and shows us `Identicon` based on address.

So let's create new `AccountsWrapper.vue` component in `./src/components`

```html
<template>
  <div>
    AccountsWrapper works!
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class AccountsWrapper extends Vue {
  public keyringLoaded: boolean = false;
  public keys: any = '';
  public keyringAccounts: any = [
    { address: '', meta: { name: ''}, publicKey: '', type: '' },
  ];

}
</script>
```

then we'll import couple of important libraries.

```js
import keyring from '@vue-polkadot/vue-keyring'
import { keyExtractSuri, mnemonicGenerate, mnemonicValidate, randomAsU8a } from '@polkadot/util-crypto';
import { waitReady } from '@polkadot/wasm-crypto';
```

First of all we need to create a function that will be called automatically after component is mounted. Vue has function `mounted` for that. Inside this function `mountWasmCrypto` is called

```ts
public mounted(): void {
    this.mountWasmCrypto();
  }
```

Function `mountWasmCrypto` calls asynchronously `waitReady` which loads Web-assembly into our project.

```ts
  public async mountWasmCrypto(){
    await waitReady();
    this.loadKeyring();
  }
```
After that we'll initialize `loadKeyring`.
`loadAll` function of keyring will initialize keyring. It should be called from api on connect, because it needs also genesis hash and it will initialize localStorage for saving accounts.
`isDevelopment` will preload our keyring with 10 testing accounts (Alice, Bob, Bob_stash,...).
`getPairs` will return all accounts which are loaded in keyring.

```ts
  public loadKeyring(): void {
    keyring.loadAll({
      ss58Format: 42, type: 'sr25519',
      isDevelopment: true });
    this.keyringLoaded = true;
    this.keyringAccounts = keyring.getPairs();
  }
```

now we will create template in `Accounts.vue`

```html
<template>
  <div>
    Accounts works!
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Accounts extends Vue {
  public keypairType: any = {
    selected: 'sr25519',
    options: [
      { text: 'Schnorrkel (sr25519)', value: 'sr25519' },
      { text: 'Edwards (ed25519)', value: 'ed25519' },
    ],
  };
  public isValidMnemonic: boolean = false;
  public isPassValid: boolean = false;
  public newAccount: any = {
    password: '',
    name: 'new account',
    tags: '',
    mnemonicSeed: '',
    keypairType: this.keypairType,
    derivationPath: '',
    address: '',
  };
}
</script>
```

Inside Accounts we will create 4 new functions.
Also we need to call mounted as before.
Function `coldStart` is pretty straightforward. It generates mnemonic seed (those 12 words) then address from these 12 words and after it validates that mnemonic

```ts
  public mounted(): void {
    this.coldStart();
  }

  public coldStart(): void {
    this.generateSeed();
    this.addressFromSeed();
    this.validateMnemonic();
  }

  public generateSeed(): string {
    return this.newAccount.mnemonicSeed = mnemonicGenerate();
  }

    public validateMnemonic(): boolean {
    return this.isValidMnemonic = mnemonicValidate(this.newAccount.mnemonicSeed);
  }

  public addressFromSeed(): any {
    return this.newAccount.address = keyring.createFromUri(`${this.newAccount.mnemonicSeed.trim()}${this.newAccount.derivationPath}`,
      {}, this.keypairType.selected).address;
  }
```

now let's connect everyting together,
inside `IdenticonImage` we add `@Prop value`
which value is passed from `Accounts` component

```html
<template>
  <div>
    <Identicon
      :size="128"
      :value='value'
      theme='beachball'
    />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Identicon from '@vue-polkadot/vue-identicon';

@Component({
  components: {
    Identicon
  }
})
export default class IdenticonImage extends Vue {
  @Prop() private value!: string;
}
</script>
```

In `Accounts` component we'll import `IdenticonImage` and pass prop `:value="address"`.
`:` means value of `value` will be variable not direct value.
We've got `address` from getter which will automatically updates value passed to `IdenticonImage`.

```ts
get address() {
  return this.newAccount && this.newAccount.address
}
```

```html
<template>
  <div>
    <IdenticonImage :value="address" />
    <div>{{address}}</div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import keyring from '@vue-polkadot/vue-keyring'
import { keyExtractSuri, mnemonicGenerate,
  mnemonicValidate, randomAsU8a } from '@polkadot/util-crypto';
  import IdenticonImage from './IdenticonImage.vue';

@Component({
  components: {
    IdenticonImage,
  }
})
export default class Accounts extends Vue {
  public keypairType: any = {
    selected: 'sr25519',
    options: [
      { text: 'Schnorrkel (sr25519)', value: 'sr25519' },
      { text: 'Edwards (ed25519)', value: 'ed25519' },
    ],
  };
  public isValidMnemonic: boolean = false;
  public isPassValid: boolean = false;
  public newAccount: any = {
    password: '',
    name: 'new account',
    tags: '',
    mnemonicSeed: '',
    keypairType: this.keypairType,
    derivationPath: '',
    address: '',
  };

  get address() {
    return this.newAccount && this.newAccount.address
  }

  public coldStart(): void {
    this.generateSeed();
    this.addressFromSeed();
    this.validateMnemonic();
  }
  public mounted(): void {
    this.coldStart();
  }

  public generateSeed(): string {
    return this.newAccount.mnemonicSeed = mnemonicGenerate();
  }

    public validateMnemonic(): boolean {
    return this.isValidMnemonic = mnemonicValidate(this.newAccount.mnemonicSeed);
  }

  public addressFromSeed(): any {
    return this.newAccount.address = keyring.createFromUri(`${this.newAccount.mnemonicSeed.trim()}${this.newAccount.derivationPath}`,
      {}, this.keypairType.selected).address;
  }
}
</script>
```

Snippet of `AccountsWrapper`

```html
<template>
  <div>
   <Accounts  v-if="keyringLoaded" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import keyring from '@vue-polkadot/vue-keyring'
import { keyExtractSuri, mnemonicGenerate,
  mnemonicValidate, randomAsU8a } from '@polkadot/util-crypto';
  import { waitReady } from '@polkadot/wasm-crypto';
  import Accounts from './Accounts.vue'

@Component({
  components: {
    Accounts,
  }
})
export default class AccountsWrapper extends Vue {
  public keyringLoaded: boolean = false;
  public keys: any = '';
  public keyringAccounts: any = [
    { address: '', meta: { name: ''}, publicKey: '', type: '' },
  ];


  public mapAccounts(): void {
    this.keyringAccounts = keyring.getPairs();
  }

  public loadKeyring(): void {
    keyring.loadAll({
      ss58Format: 42, type: 'sr25519',
      isDevelopment: true });
    this.keyringLoaded = true;
    this.mapAccounts();
  }

  public async mountWasmCrypto(): Promise<void> {
    await waitReady();
    console.log('wasmCrypto loaded');
    this.loadKeyring();
    console.log('keyring init');
  }
  public mounted(): void {
    this.mountWasmCrypto();
  }
}
</script>
```

Finally we'll replace `IdenticonImage` in `App.vue` with `AccountsWrapper`

```html
<template>
  <div id="app">
    <AccountsWrapper />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from './components/HelloWorld.vue';
import AccountsWrapper from './components/AccountsWrapper.vue';

@Component({
  components: {
    HelloWorld,
    AccountsWrapper
  },
})
export default class App extends Vue {}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
```

### Summary

We learned:
- How to create our own component in Vue with Typescript
- How to install add package to our project







