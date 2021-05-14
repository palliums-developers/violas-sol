// scripts/deploy_upgradeable_xxx.js
const fs        = require('fs');
const path      = require("path");
const program   = require('commander');
const utils     = require("../utils");
const violas    = require("../../violas.config.js");
const bak_path  = violas.caches_contracts;
const {main, datas, state}  = require(violas.vlscontract_conf);
const {tokens}              = require(violas.tokens_conf);

function date_format(dash = "-", colon = ":", space = " ") {
    return utils.date_format(dash, colon, space);
}

function show_msg(msg, title = "") {
    utils.show_msg(msg, title, {"format": false, "type": "table"});
}

function write_json(filename, data) {
    utils.write_json(filename, data);
}

function update_conf(filename) {
    data = {tokens};
    write_json(filename, data);
}

function close_token(item, save = true) {
    if (item.use) {
        item.use= false;
        if(save) update_conf(violas.tokens_conf);
    }
}

function open_token(item, save = true) {
    if (!item.use) {
        item.use= true;
        if(save) update_conf(violas.tokens_conf);
    }
}

function update_min(item, min, save = true) {
    if (item.min != min) {
        item.min = min;
        if(save) update_conf(violas.tokens_conf);
    }
}

function update_max(item, max, save = true) {
    if (item.max != max) {
        item.max = max;
        if(save) update_conf(violas.tokens_conf);
    }
}

function show_conf() {
    show_msg(tokens, violas.tokens_conf)


function close_token_with_name(name) {
    for(let i = 0; i < tokens.length; i++) {
        if (tokens[i].name = name) {
            close_token(tokens[i])
            return true;
        }
    }
    return false;
}

function open_token_with_name(name) {
    for(let i = 0; i < tokens.length; i++) {
        if (tokens[i].name = name) {
            open_token(tokens[i])
            return true;
        }
    }
    return false;
}

function close_all_token() {
    for(let i = 0; i < tokens.length; i++) {
        close_token(tokens[i], false)
    }
    update_conf(viols.tokens_conf);
    return false;
}

function update_token_min_with_name(name, min) {
    for(let i = 0; i < tokens.length; i++) {
        if (tokens[i].name = name) {
            update_min(tokens[i], min);
            return true;
        }
    }
    return false;
}

function update_token_max_with_name(name, min) {
    for(let i = 0; i < tokens.length; i++) {
        if (tokens[i].name = name) {
            update_max(tokens[i], min);
            return true;
        }
    }
    return false;
}

function show_conf_name() {
    show_msg(violas.tokens_conf, "file name")
}

module.exports = {
    close_all_token,
    close_token_with_name,
    open_token_with_name,
    update_token_min_with_name,
    update_token_max_with_name,
    show_conf,
    show_conf_name
}
