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
    <img src="https://vuejs.org/images/logo.png" style="height: 40px; margin-right: 10px;" />
    <p>The front-end is built with <a href="https://vuejs.org/">VueJS</a> and is hosted on <a href="https://vercel.com/">Vercel</a> </p>
</div>

<div style="display: flex; align-items: center;">
    <!-- add the logo of nodejs from their website -->
    <img src="https://nodejs.org/static/images/logo.svg" style="height: 40px; margin-right: 10px;" />
    <p>The back-end is built with <a href="https://nodejs.org/en/">NodeJS</a> and is hosted on <a href="https://www.heroku.com">Heroku</a></p>
</div>
<br />

## Getting Started

### Prerequisites

1. You will be using the Terminal so make sure you have one installed. ([MacOS](https://support.apple.com/fr-fr/guide/terminal/apd5265185d-f365-44cb-8b09-71a064a42125/mac) / [Windows](https://www.microsoft.com/fr-fr/p/windows-terminal/9n0dx20hk701?activetab=pivot:overviewtab))

2. You will also need NodeJS installed on your computer. [Install NodeJS](https://nodejs.org/en/download/).

3. You will need a Mapbox API access token. [Sign up for a free Mapbox API access token](https://docs.mapbox.com/help/getting-started/access-tokens).

4. You finally need to clone this repo with git. [Install it](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git).

### Installation

1. Open your terminal and enter this command:
   ```sh
   cd ~/Desktop
   ```
2. Clone this repo with:
   ```sh
   git clone https://github.com/fabrahaingo/find-shelter
   ```
3. Once cloned, you need to install the dependencies with:
   ```sh
   cd back && npm install && cd ../front && npm install --legacy-peer-deps
   ```
4. In your `backend` repo, create and edit a new file called `.env` with the following content:
    ```.env
    DB_URL=mongodb://127.0.0.1:27017/find-shelter
    CORS_ORIGIN=http://localhost:8080
    ```
5. In your `frontend` repo, create and edit a new file called `.env.local` with the following content:
    ```.env.local
    VUE_APP_API_HOST=http://localhost:3000
    VUE_APP_MAP_ACCESS_TOKEN=<YOUR-MAPBOX-API-ACCESS-TOKEN-HERE>
    ```
6. Open a separate terminal and enter this command:
   ```sh
   cd ~/Desktop/find-shelter/back && npm start
   ```

<!-- USAGE EXAMPLES -->

## Usage

The use of this website is simple:

1. Once you followed the previous steps, you will be able to access the website by going to: http://localhost:8080
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

<a href="https://github.com/fabrahaingo/find-shelter/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=fabrahaingo/find-shelter" />
</a>

Made with [contributors-img](https://contrib.rocks).