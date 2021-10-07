module.exports = client => {
    client.on("ready", () => {
        const readytext = `The Client: ${client.user.tag} is now online!`;
        console.log(readytext.green);
    })



    //Status
    function randomStatus() {
        let status = ["Kury", "k!play to Play a Song", "k!help for Help", "Prefix: k!", "@Kury for Help", "Add Kury now", "Powered by Kiroo.xyz", "kury.kiroo.xyz"]
        let rstatus = Math.floor(Math.random() * status.length);
       client.user.setActivity(status[rstatus],{type: "STREAMING", url: "https://twitch.tv/#"});
       };  setInterval(randomStatus, 30000)
}