# Lista de Compras

App lista de compras usando Ionic e Firebase

<hr/>

### Atenção

Criar arquivo `firebase.config.ts` na pasta `src\app` com as suas configurações do Firebase

```ts
export const FIREBASE_CONFIG = {
    apiKey: "<API_KEY>",
    authDomain: "<PROJECT_ID>.firebaseapp.com",
    databaseURL: "https://<DATABASE_NAME>.firebaseio.com",
    storageBucket: "<BUCKET>.appspot.com",
    messagingSenderId: "<SENDER_ID>",
}
```

### Instalação

```bash
$ npm install
```

### Adicionando plataformas android ou ios

```bash
$ ionic cordova platform add ios
$ ionic cordova platform add android
```
### Rodando App

```bash
$ ionic cordova run ios
$ ionic cordova run android
```

### Rodando no browser

```bash
$ ionic lab
```