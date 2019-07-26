# React Native Template - React Native Firebase #

Template linked module messaging dan notification [react-native-firebase](https://github.com/invertase/react-native-firebase), mengadopsi react-native versi 0.60.x

## Instalasi ##

Buka command prompt / terminal, change directory ke direktori yang diinginkan

#### Cara 1: Bash Script (Recommended) ####
- Copy paste ```curl -s https://squamulose-saturday.000webhostapp.com/repos/react-native-template/react-native-firebase/installationScript.txt | bash -s``` dan jalankan di command prompt / terminal, tunggu sampai selesai

#### Cara 2: ####
- Clone project dengan perintah ```git clone https://github.com/reynova/react-native-template_react-native-firebase.git```
- Install node_modules yang dibutuhkan dengan cara change directory ke direktori project lalu jalankan ```npm i```, tunggu sampai selesai

## Konfigurasi React-Native-Firebase ##

#### Android ####
- Taruh file google-services.json yang didapat dari console firebase anda ke folder android/app
- Ganti package name anda, caranya? [Bisa dilihat disini](https://stackoverflow.com/questions/37389905/change-package-name-for-android-in-react-native)

#### iOS ####
- Buka command prompt / terminal, change directory ke direktori project, lalu ```cd ios``` kemudian ```pod install```
- Masukkan file GoogleService-Info.plist yang didapat dari console firebase anda kedalam folder dalam pertama project lewat XCode
- Ganti package name anda

## Run ##

- Buka command prompt / terminal, change directory ke direktori project jalankan ```npm start```
- Connect kan device dengan kabel data

#### Android ####
Buka baru jendela command prompt / terminal, change directory ke direktori project lalu jalankan ```npx react-native run-android``` pakai ```npx``` bukan ```npm```

#### iOS ####
Run lewat XCode

## Ada Error atau Pertanyaan? ##

Buat isu di repositori ini atau gabung ke grup [telegram react-native Indonesia](https://t.me/reactnative_id), dan tanyakan pertanyaan anda

## Menerima Kontributor ##

Segala kontribusi diapresiasi, saran dan masukan serta improve bisa didiskusikan agar repositori ini menjadi lebih baik dan bermanfaat.