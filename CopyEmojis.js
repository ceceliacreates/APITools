const emojisDiv = document.querySelector('#emojis');

fetch('https://api.github.com/emojis')
    .then(res => res.json())
    .then(json => {
        for (emoji in json) {
            let emojiDiv = document.createElement('div');
            emojiDiv.setAttribute('class', 'emoji')
            emojiDiv.innerHTML = `<input type="text" value=":${emoji}:"><img src="${json[emoji]}" id="${emoji}" onClick="copyCode()">`
            emojisDiv.appendChild(emojiDiv);
        }
        const footer = document.createElement('div')
        footer.innerHTML = `<a href="http://www.ceceliacreates.com">Made by CeceliaCreates.com</a>`;
        document.body.appendChild(footer);
    })

function copyCode() {
    let id = event.target.id;

    let code = event.target.parentNode.firstChild;
    console.log(code);
    code.select();
    document.execCommand("copy");
    alert("Copied code: " + code.value);

}