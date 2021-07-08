// generating the function which is going to generate the shortener link
alert('Remember to connect to internet ⚠‼');

function generate_shorten_link() {
    var Link = document.getElementById("url-link").value
    eel.generate_link(Link)(SetLink)
}

function SetLink(data) {
    document.getElementById("url-link").value = data
}

function copy_link() {
    var copied_link = document.getElementById("url-link").value
    eel.copy_text(copied_link)
    document.getElementById("copy-button").innerHTML = "Copied!"
}

