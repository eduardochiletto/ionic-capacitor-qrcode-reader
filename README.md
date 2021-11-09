# ionic-capacitor-qrcode-reader

###### _Read QR Codes with a Android Aplication made with Ionic and Capacitor_

<br />

##### Figma Design File: https://www.figma.com/file/YpArhEIl6pXTwuk4ifjSYU/Qr-Code-Reader?node-id=0%3A1

<br />
<br />

*****This project is based on didactic purposes*****

* Create an Android App to read QR Codes
* It use Node, Ionic and Capacitor

<br />
<br />

## Before you start

**1. Things that you need to install**

1. Node;
2. Ionic;
3. Android Studio;

**2. Setting Android Studio**

1. Go to `Settings > Appearance & Behavior > System Settings > Android SDK`;
2. Check the option `Show Package Details`;
3. Check `Android SDK Platform` and `Sources for Android` options of your mobile's Android version on `SDK Platforms`;
4. Check `Android SDK Platform-Tools` and `Google USB Driver` options on `SDK Tools`;

**3. Environment Variables**

1. On `System Variables`, go to the `Path` variable and click on `Edit...`;
2. Now you need to create the following paths:
    ```
    - C:\Users\<user>\AppData\Local\Android\Sdk\tools\bin
    
    - C:\Users\<user>\AppData\Local\Android\Sdk\tools\bin
    
    - C:\Users\<user>\AppData\Local\Android\Sdk\tools\bin
    ```

<br />
<br />

## Running the project

1. Go into the `app/` directory and run `npm i` to install all the modules;
2. Now you need to build the project. For that you run `ionic build`, then `npx cap copy` to copy the web assets from the `build` directory to `android\app\src\main\assets\public`;
3. The first time you will need to run `npx cap open android`, to open Android Studio and install the aplication on your cellphone;
4. Every time you change something in the code, you will need to repeat step 2 and, on Android Studio, run the project;

<br />

### Notes:

> You need to enable developer options on your mobile device.

> Plug your mobile device before run the project on Android Studio.

<br />
<br />

## Contributors

<!-- readme: contributors -start -->
<table>
<tr>
    <td align="center">
        <a href="https://github.com/eduardochiletto">
            <img src="https://avatars.githubusercontent.com/eduardochiletto" width="80;" alt="akhilmhdh"/>
            <br />
            <sub><b>Eduardo Chiletto</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/joaobreder">
            <img src="https://avatars.githubusercontent.com/joaobreder" width="80;" alt="matks"/>
            <br />
            <sub><b>João Breder</b></sub>
        </a>
    </td>
</table>
<!-- readme: contributors -end -->
