// JavaScript Document

const apiURL = 'http://dangru15.dreamhosters.com/wp-json/wp/v2/';
const apiKey = 'rBEZbXSsjTQA1fuSUTXTiCpLXUPuTsdq';

getProgramFromWP(); // fredag
getProgramLordagFromWP(); // lørdag
getLineupFromWP(); //line-up

//getBandFromWP(); // ikke færdigt

function getProgramFromWP() {

    let postOptionsId = 729;
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
                program = JSON.parse(this.responseText);
                program_fredag.src = program.acf.program_fredag;
                
        }
    }

    xhttp.open('GET', `${apiURL}posts/${postOptionsId}`, true);
    xhttp.setRequestHeader('Authorization', `Bearer ${apiKey}`);
    xhttp.send();
}



function getProgramLordagFromWP() {

    let postOptionsId = 746;
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
                program = JSON.parse(this.responseText);
                program_lordag.src = program.acf.program_lordag;
        }
    }

    xhttp.open('GET', `${apiURL}posts/${postOptionsId}`, true);
    xhttp.setRequestHeader('Authorization', `Bearer ${apiKey}`);
    xhttp.send();
}



function getLineupFromWP() {
    let postOptionsId = 751;
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
                lineup = JSON.parse(this.responseText);
                line_up.src = lineup.acf.line_up;
        }
    }

    xhttp.open('GET', `${apiURL}posts/${postOptionsId}`, true);
    xhttp.setRequestHeader('Authorization', `Bearer ${apiKey}`);
    xhttp.send();
}


/*
function getBandFromWP() {
    
    let postOptionsId = 689;
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            band = JSON.parse(this.responseText);
            band_navn.innerHTML = band.acf.band_navn;
            genre.innerHTML = band.acf.genre;
            medlemmer.innerHTML = band.acf.medlemmer;     
        }
    }
    xhttp.open('GET', `${apiURL}posts/${postOptionsId}`, true);
    xhttp.setRequestHeader('Authorization', `Bearer ${apiKey}`);
    xhttp.send();
}    problem når det kommer til medlemmer */ 


