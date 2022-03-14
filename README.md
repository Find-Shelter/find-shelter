<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/fabrahaingo/find-shelter">
    <p align="center" style="font-size: 2.5rem;">🇺🇦🏡🇫🇷</p>
  </a>

  <h1 align="center">Find-Shelter</h3>

  <p align="center">
    This is an Open Source website aiming to gather contact information of French people who want 
    to help Ukrainians seeking shelter outside their country.
    <br />
    <a href="https://github.com/fabrahaingo/find-shelter/issues">🐛 Report Bug</a>
    ·
    <a href="https://github.com/fabrahaingo/find-shelter/issues">Request Feature 🌟</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#context-and-problem">Context and Problem</a></li>
        <li><a href="#goal">Goal</a></li>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <!-- <li><a href="#license">License</a></li> -->
    <li><a href="#contact">Contact</a></li>
    <!-- <li><a href="#acknowledgements">Acknowledgements</a></li> -->
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About The Project

<div align=center>
    <img src="./img/screen_computer.png" style="height: 500px;" />
</div>

### Context and Problem

A war started between Russia and Ukraine on the 20th of February 2022.

This war led a massive amount of people to flee their country.

Many of them are coming to France to seek shelter.

Many French people have said on the radio, television and newspapers that they wanted to help and host Ukrainian refugees. The only problem is that ***their contact information is not gathered yet***.

### Goal

The goal of this project is to ***gather contact information of French people*** (and limited to them for now) who want to help Ukrainians seeking shelter outside their country.

These information will be passed on to humanitarian organizations that are in contact with the Ukrainian refugees.

### Built With

<div style="display: flex; align-items: center;">
    <!-- add the logo of vuejs from their website -->
    <img src="https://vuejs.org/logo.svg" style="height: 40px; margin-right: 10px;" />
    <p>The front-end is built with <a href="https://vuejs.org/">VueJS</a> and is hosted on <a href="https://vercel.com/">Vercel</a> </p>
</div>

<div style="display: flex; align-items: center;">
    <!-- add the logo of nodejs from their website -->
    <img src="https://nodejs.org/static/images/logo.svg" style="height: 40px; margin-right: 10px;" />
    <p>The back-end is built with <a href="https://nodejs.org/en/">NodeJS</a> and is hosted on <a href="https://www.heroku.com">Heroku</a></p>
</div>

<div style="display: flex; align-items: center;">
    <!-- add the logo of maplibre from their website -->
    <img src="https://maplibre.org/img/maplibre-logo.svg" style="height: 40px; margin-right: 10px;" />
    <p>The Map library used is <a href="https://maplibre.org">MapLibre GL JS</a></p>
</div>

<div style="display: flex; align-items: center;">
    <!-- add the logo of openstreetmap from their website -->
    <img src="https://www.openstreetmap.org/assets/osm_logo-d4979005d8a03d67bbf051b4e7e6ef1b26c6a34a5cd1b65908e2947c360ca391.svg" style="height: 40px; margin-right: 10px;" />
    <p>The MapLibre GL JS tiles and geocoding functionality are built with <a href="https://openstreetmap.org">OpenStreetMap</a></p>
</div>


## Getting Started

### Prerequisites

1. You will be using the Terminal so make sure you have one installed. ([MacOS](https://support.apple.com/fr-fr/guide/terminal/apd5265185d-f365-44cb-8b09-71a064a42125/mac) / [Windows](https://www.microsoft.com/fr-fr/p/windows-terminal/9n0dx20hk701?activetab=pivot:overviewtab))

2. You will also need NodeJS installed on your computer. [Install NodeJS](https://nodejs.org/en/download/).

3. You finally need to clone this repo with git. [Install it](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git).

### Installation

1. Open your terminal and enter this command:

   ```sh
   cd ~/Desktop
   ```

2. Clone this repo with:

   ```sh
   git clone https://github.com/Find-shelter/find-shelter
   ```

3. Once cloned, you need to install the dependencies with:

   ```sh
   cd back && npm install && cd ../front && npm install --legacy-peer-deps
   ```

4. In your `backend` repo, create and edit a new file called `.env` with the following content (you can copy the existing `.env.dist`, rename it to `.env` and edit the variables inside):

    ```.env
    DB_URL=mongodb://127.0.0.1:27017/find-shelter
    CORS_ORIGIN=http://localhost:8080
    ```

5. [OPTIONAL]: If you don't already have a mongodb running for the back-end: n your `backend` repo, execute the following command:

    ```sh
    docker-compose up -d
    ```

6. In your `frontend` repo, create and edit a new file called `.env.local` with the following content (you can copy the existing `.env.dist`, rename it to `.env` and edit the variables inside):

    ```.env.local
    VUE_APP_API_HOST=http://localhost:3000
    ```

7. Open a separate terminal and enter this command:

   ```sh
   cd ~/Desktop/find-shelter/back && npm start
   ```

<!-- USAGE EXAMPLES -->
## Usage

The use of this website is simple:

1. Once you followed the previous steps, you will be able to access the website by going to: <http://localhost:8080>
2. You'll be able to see the exact same things as [the website](https://www.find-shelter.com).

<!-- ROADMAP -->
## Roadmap

See the [open issues](https://github.com/fabrahaingo/find-shelter) for a list of proposed features (and known issues).

<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

Note that the project use [i18n for Vue](https://kazupon.github.io/vue-i18n/) for multi-languages managment. Each language has it own JSON file in the `front/src/locales` folder (en.json for english, fr.json for french, etc.).
If you want to add content, please follow this instructions :

1. Add you content in the locales JSON files (`front/src/locales`). Make sure you add the same structure of content in each JSON file, with the corresponding translation.
2. In the component where you want the content to appear, please use `{{ $t('path.to.your.content.in.JSON.files') }}`.

You can also join us on [Discord](https://discord.gg/bCEzJFc9Bc) if you want to communicate with us directly!

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.

<!-- CONTACT -->
## Contact

Find-Shelter: [contact@find-shelter.com](mailto:contact@find-shelter.com)<br />
For any suggestions: [suggestion@find-shelter.com](mailto:suggestion@find-shelter.com)

<!-- ACKNOWLEDGEMENTS -->

<!-- ## Acknowledgements

- [GitHub Emoji Cheat Sheet](https://www.webpagefx.com/tools/emoji-cheat-sheet)
- [Img Shields](https://shields.io)
- [Choose an Open Source License](https://choosealicense.com)
- [GitHub Pages](https://pages.github.com)
- [Animate.css](https://daneden.github.io/animate.css)
- [Loaders.css](https://connoratherton.com/loaders)
- [Slick Carousel](https://kenwheeler.github.io/slick)
- [Smooth Scroll](https://github.com/cferdinandi/smooth-scroll)
- [Sticky Kit](http://leafo.net/sticky-kit)
- [JVectorMap](http://jvectormap.com)
- [Font Awesome](https://fontawesome.com) -->

## Contributors

<a href="https://github.com/Find-shelter/find-shelter/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=Find-shelter/find-shelter" />
</a>

Made with [contributors-img](https://contrib.rocks).
