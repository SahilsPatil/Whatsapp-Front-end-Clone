let chats = document.getElementById('chats');
let status = document.getElementById('status');
let camera = document.getElementById('camera');
let calls = document.getElementById('calls');
let allchats = document.getElementById('allchats');
let allstatus = document.getElementById('allstatus');
let allcalls = document.getElementById('allcalls');
let add = document.getElementById('add');
let create = document.getElementById('create');
let statuscamera = document.getElementById('statuscamera');
let videocall = document.getElementById('videocall');
let simplecall = document.getElementById('simplecall');
let displaysearchbar = document.getElementById('displaysearchbar');
let nav = document.getElementById('nav');
let menu = document.getElementById('menu');

function chatsf() {
    calls.style.border = "none";
    calls.style.color = "#B1B3B5";
    status.style.border = "none";
    status.style.color = "#B1B3B5";
    chats.style.color = "#009588";
    chats.style.borderBottom = "4px solid #009588";

    allchats.style.display = "block";
    allstatus.style.display = "none";
    allcalls.style.display = "none";

    add.style.display = "block";
    create.style.display = "none";
    statuscamera.style.display = "none";
    videocall.style.display = "none";
    simplecall.style.display = "none";
}
function statusf() {
    chats.style.border = "none";
    chats.style.color = "#B1B3B5";
    calls.style.border = "none";
    calls.style.color = "#B1B3B5";
    status.style.color = "#009588";
    status.style.borderBottom = "4px solid #009588";

    allchats.style.display = "none";
    allstatus.style.display = "block";
    allcalls.style.display = "none";

    add.style.display = "none";
    create.style.display = "block";
    statuscamera.style.display = "block";
    videocall.style.display = "none";
    simplecall.style.display = "none";    
}
function callsf() {
    chats.style.border = "none";
    chats.style.color = "#B1B3B5";
    status.style.color = "#B1B3B5";
    status.style.borderBottom = "none";
    calls.style.borderBottom =  "4px solid #009588";
    calls.style.color = "#009588";

    allchats.style.display = "none";
    allstatus.style.display = "none";
    allcalls.style.display = "block";

    add.style.display = "none";
    create.style.display = "none";
    statuscamera.style.display = "none";
    videocall.style.display = "block";
    simplecall.style.display = "block";
}

function searchbarf() {
    displaysearchbar.style.display="flex";
    nav.style.display="none";
    menu.style.display="none";
}
function sbackf() {
    displaysearchbar.style.display="none";
    nav.style.display="flex";
    menu.style.display="flex";
}
