# KHOR Native

KHOR is an Android and iOS application written in react-native...

## Install Dependencies
```
git clone git@github.com:ASteinheiser/khor-react-native.git
npm install
react-native link
```

## Run
```
react-native run-ios
react-native run-android
```

## Install To Android Device
```
cd android/ && ./gradlew assembleRelease
react-native run-android --variant=release
```

## Install To iOS Device
```
open /ios/Khor.xcodeproj in XCode
run project
```
