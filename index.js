#!/usr/bin/env node
'use strict';

const inputObj = require('./lib/input.js');
const noteObj = require('./lib/notes.js');

const inputPayload = inputObj(process.argv.slice(2));
noteObj(inputPayload);
