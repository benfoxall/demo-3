#!/usr/bin/env node

const chalkAnimation = require("chalk-animation");
const CFonts = require("cfonts");

const prettyFont = CFonts.render("Demo 3");

chalkAnimation.rainbow(prettyFont.string);
