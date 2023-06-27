/* Consent message
 * Get user consent in a way that is both easy and customizable to your needs.
 * Github: https://www.github.com/lewisevans2007/consent_message
 * Licence: GNU General Public License v3.0
 * By: Lewis Evans
 */

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


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

if (title.includes("<script>") || title.includes("<style>")) {
    document.getElementById("consent-message").innerHTML = "<h1>Request blocked</h1><p>We have blocked your request because it contains a <code>&lt;script&gt;</code> or <code>&lt;style&gt;</code> tag.</p>";
}

if (description.includes("<script>") || description.includes("<style>")) {
    document.getElementById("consent-message").innerHTML = "<h1>Request blocked</h1><p>We have blocked your request because it contains a <code>&lt;script&gt;</code> or <code>&lt;style&gt;</code> tag.</p>";
}

if (icon.includes("<script>") || icon.includes("<style>")) {
    document.getElementById("consent-message").innerHTML = "<h1>Request blocked</h1><p>We have blocked your request because it contains a <code>&lt;script&gt;</code> or <code>&lt;style&gt;</code> tag.</p>";
}

if (link.includes("<script>") || link.includes("<style>")) {
    document.getElementById("consent-message").innerHTML = "<h1>Request blocked</h1><p>We have blocked your request because it contains a <code>&lt;script&gt;</code> or <code>&lt;style&gt;</code> tag.</p>";
}

if (icon == null || icon == "" || icon == "null" || icon == "none") {
    document.getElementById("icon").style.display = "none";
} else {
    document.getElementById("icon").src = icon;
}

document.getElementById("redirect_text").innerHTML = "You will be redirected to: <code>" + link + "</code>";
sleep(500).then(() => {
    for (let i = 0; i <= 1; i += 0.01) {

        setTimeout(() => {
            document.getElementById("consent-message").style.opacity = i;
        }, i * 500);
    }
});

function handleYes() {
    document.getElementById("consent-message").innerHTML = "<h1>Redirecting</h1><p>Redirecting you to the link...</p>";
    window.location.href = link;
}