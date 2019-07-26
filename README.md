# React Native Template - React-Native-Firebase #
#### 👉👉 Satu perintah cmd / terminal untuk preview berbagai library react-native yang umum digunakan 👈👈 ####

Template linked module messaging dan notification [react-native-firebase](https://github.com/invertase/react-native-firebase)
Template ini mengadopsi react-native versi 0.60.x

## Instalasi ##

Buka command prompt / terminal, change directory ke direktori yang diinginkan

#### Cara 1: Bash Script (Recommended) ####
- Copy paste ```curl -s https://squamulose-saturday.000webhostapp.com/repos/react-native-template/react-native-firebase/installationScript.txt | bash -s``` dan jalankan di command prompt / terminal, tunggu sampai selesai

#### Cara 2: ####
- Clone project dengan perintah ```git clone https://github.com/reynova/react-native-template_libraries.git```
- Install node_modules yang dibutuhkan dengan cara change directory ke direktori project lalu jalankan ```npm i```, tunggu sampai selesai

## Konfigurasi React-Native-Firebase ##

#### Android ####
- Taruh file google-services.json yang didapat dari console firebase anda ke folder android/app
- Ganti package name anda, caranya? [Bisa dilihat disini](https://stackoverflow.com/questions/37389905/change-package-name-for-android-in-react-native)

#### iOS ####
- Masukkan file GoogleService-Info.plist yang didapat dari console firebase anda kedalam folder dalam pertama project lewat XCode
- Ganti package name anda

## Run ##

Untuk run di android, connect kan device, buka baru jendela command prompt / terminal, change directory ke direktori project lalu jalankan ```npx react-native run-android``` pakai ```npx``` bukan ```npm``` / run lewat XCode untuk iOS

## Ada Error atau Pertanyaan? ##

Buat isu di repositori ini atau gabung ke grup [telegram react-native Indonesia](https://t.me/reactnative_id), dan tanyakan pertanyaan anda

## Menerima Kontributor ##

Segala kontribusi diapresiasi, saran dan masukan serta improve bisa didiskusikan agar repositori ini menjadi lebih baik dan bermanfaat.