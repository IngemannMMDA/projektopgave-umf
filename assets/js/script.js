// JavaScript Document

const apiURL = 'http://dangru15.dreamhosters.com/wp-json/wp/v2/';
const apiKey = 'rBEZbXSsjTQA1fuSUTXTiCpLXUPuTsdq';

getProgramFromWP();

function getProgramFromWP() {

    const postOptionsId = 729;
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
                program = JSON.parse(this.responseText);
                program_fredag.src = program.acf.program_fredag;
                program_lordag.src = program.acf.program_lordag;
        }
    }

    xhttp.open('GET', `${apiURL}posts/${postOptionsId}`, true);
    xhttp.setRequestHeader('Authorization', `Bearer ${apiKey}`);
    xhttp.send();
}