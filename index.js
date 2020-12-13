const RPC = require("discord-rpc");
const rpc = new RPC.Client({
    transport: "ipc"
})

rpc.on("ready", () => {
    rpc.setActivity({
        details: "For More Filter Snapchat",
        state: "       IT_066",
        largeImageKey: "icon 2",
        largeImageText: "ADD ME SNAPCHAT IT_066",
        smallImageKey: "icon 2",
        smallImageText: "Lens Creators",

    })

    console.log("RPC x1active");
})

rpc.login({
    clientId: "773316078683291678"
})

