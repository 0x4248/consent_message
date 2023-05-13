const urlParams = new URLSearchParams(window.location.search);
const title = urlParams.get('title');
const description = urlParams.get('description');
const icon = urlParams.get('icon');
const link = urlParams.get('link');

if (title == null || description == null || link == null) {
    document.getElementById("consent-message").innerHTML = "<h1>Invalid URL</h1><p>Make sure you have all the required parameters in the URL.</p><p>Required parameters: title, description, icon, link</p>";
}

document.getElementById("title").innerHTML = title;
document.getElementById("description").innerHTML = description;

if (icon == null || icon == "" || icon == "null" || icon == "none") {
    document.getElementById("icon").style.display = "none";
} else {
    document.getElementById("icon").src = icon;
}


document.getElementById("redirect_text").innerHTML = "You will be redirected to: <code>" + link + "</code>";

function handleYes(){
    document.getElementById("consent-message").innerHTML = "<h1>Redirecting</h1><p>Redirecting you to the link...</p>";
    window.location.href = link;
}
