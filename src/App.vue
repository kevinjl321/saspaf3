<template>
  <div id="app">
    <div id="navbar">
            <div id="nav-container">
                <div class="left">
                    <div class="nav-link" id="nav-logo">
                        <img :src="require('@/assets/logo.png')" height="80px">
                    </div>
                </div>
                <div class="right">
                    <div class="nav-link">
                        <a href="index.html" class="left-animate">Home</a>
                    </div>
                    <div class="nav-link">
                        <a href="#impact" class="left-animate">Our Services</a>
                    </div>
                    <div class="nav-link">
                        <a href="pages/join.html" class="left-animate">Get Involved</a>
                    </div>
                    <div class="nav-link">
                        <a href="#" class="left-animate">Contact</a>
                    </div>
                    <div class="nav-link">
                        <a href="#" class="left-animate">Blog</a>
                    </div>
                    <div class="nav-link">
                        <button id = "donate-btn-nav" class = "button">DONATE</button>
                    </div>
                </div>
            </div>
    </div>
    <router-view/>
  </div>
</template>

<style>

@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
@import url('https://fontlibrary.org/face/glacial-indifference');
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap");

*{
    margin: 0;
    box-sizing: border-box;
    outline: 0 !important;
    font-family: var(--main-font-family);
}

:root {
    --main-font-family: 'GlacialIndifferenceRegular', 'Montserrat';
    --secondary-font-family: 'Roboto', sans-serif;
    --main-bg-color: #C7E4DF;
    --secondary-bg-color: #68b3a5;
    --third-color: #CFF3EC;
    --secondary-section-color: #c1ece4;
    --footer-color: #bbebe3;
}

html {
    scroll-behavior: smooth;
}

button {
    transition: 0.3s all;
}

li{
    list-style: none;
}

a {
    text-decoration: none;
}

.button:hover{
    opacity: 0.5;
    cursor: pointer;
}

button, input {
    font-family: var(--main-font-family);
}

body {
    background-color: var(--main-bg-color);
    font-family: var(--main-font-family);
    overflow-x: hidden;
}

</style>

<style scoped>
#navbar {
    background-color: rgb(130, 211, 141);
    height: 80px;
    width: 100%;
    top: 0;
    position: absolute;
    padding: 0px 10vw;
    text-align: center;
}

#nav-container {
    width: 1000px;
    display: inline-block;
}

#nav-logo {
    position: relative;
    top: 0px;
}

#donate-btn-nav{
    height: 30px;
    width: 100px;
    font-size: 1rem;
    color: white;
    background-color: transparent;
    border: 2px solid white;
}
.nav-link:not(:last-child) {
    position: relative;
    top: 45px;
    display: inline-block;
    padding: 0px 10px;
    margin-right: 1vw;
}

.nav-link:last-child{
    position: relative;
    top: 42px;
    display: inline-block;
    padding: 0px 10px;
    margin-right: 1vw;
}

.nav-link > a {
    color: rgb(255, 255, 255);
    font-size: 20px;
}

a.left-animate {
    position: relative;
}

a.left-animate:before {
  content: "";
  position: absolute;
  width: 0;
  height: 2px;
  bottom: -3px;
  left: 0;
  background-color: rgb(26, 143, 36);
  visibility: hidden;
  transition: all 0.3s ease-in-out;
}

a.left-animate:hover:before {
    visibility: visible;
    width: 100%;
}

.left {
    float: left;
}

.right {
    float: right;
}
</style>
