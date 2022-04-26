const Discord = require('discord.js');
const fs = require("fs");
var config = require("./n.json")
const noblox = require('noblox.js')
const PREFIX = config.prefix
const AdmZip = require("adm-zip");
var Jimp = require('jimp');
var md5 = require('md5');
var axios = require('axios')
const timestamp = require('time-stamp');


var counter = require('counter')
 count = counter(0);

const escapeRegex = (str) => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

var lockedcommands = false;

const activities = ["Google chrome","Google chrome"];
const talkedRecently = new Set();
const client = new Discord.Client()
client.on("ready", () => {
    setInterval(() => {
        // generate random number between 1 and list length.
        const randomIndex = Math.floor(Math.random() * (activities.length - 1) + 1);
        const newActivity = activities[randomIndex];

        client.user.setActivity(newActivity);
    }, 10000);
    client.login(config.token);
    console.log('starting scripts .....')
    console.clear();
    console.log(`ready to go! ${client.user.tag}`)
})

async function createZipArchive() {
  const zip = new AdmZip();
  const outputFile = `./sender/BFM-Output.zip`;
  zip.addLocalFolder("./bruteforced");
  zip.writeZip(outputFile);
}
var Regular = function() {
    var RegularHash = Math.floor(Math.random() * 24599999677)
    RegularHash * 1000
    RegularHasher = (md5(RegularHash));
}

var Premium = function() {
    var premiumHash = Math.floor(Math.random() * 24599999677)
    premiumHash * 1000
    PremiumHasher = (md5(premiumHash));
}

var RegularQueue = []
var PremQueue = []
client.on("message", async message => {
    if (message.author.bot) return;
    const prefixRegex = new RegExp(`^(<@!?${client.user.id}>|${escapeRegex(PREFIX)})\s*`);
    if (!prefixRegex.test(message.content)) return;
    const [, matchedPrefix] = message.content.match(prefixRegex);
    const args = message.content.slice(matchedPrefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();
/*
    if(command === "help"){
          let hlelpembed = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .addField('Cmds', "```\n!premium + cookie + name + image - uploads with premium\n!regular  + cookie + name + image - uploads with regular\n```", true)
        message.channel.send("", hlelpembed)
    }
*/
  if(command === "rhelp"){
          let hlelpembed = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .addField('Redeem Cmds', "```!redeemkey + key - redeems the  key given to the buyer```", true)
        message.channel.send("", hlelpembed)
    }
  if(command === "mhelp"){
  if (message.member.roles.cache.find((r) => r.id === "963753917630525440")) {
          let mhlelpembed = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .addField('Whitelist Commands', "```\n!genkey - generates a whitelist key\n!keys - shows all active keys\n!purgekeys - invalidates all active keys\n!checkey + key - Gives you the specified keys status```", true)
        message.channel.send("", mhlelpembed)
      } else {
message.reply("ur not allowed to do this lol")
  }
  }
  /*
  if(command === "keyapi"){
    axios.get('https://keygenapi.stiizzycat0001.repl.co/').then( async res =>{
var data = res.data.key 
 let eee = new Discord.MessageEmbed()
          .setColor('#0099ff')
          .setDescription(`Your Whitelist key is: ${data}`)
      message.channel.send(``, eee)
})
         
  }
*/
  /*
   if(command === "floppa"){
    axios.get("https://myapi.stiizzycat0001.repl.co/image").then( async res => {
      var data = res.data
      message.channel.send(data.url)
    })
  }
  */
  if (command === "redeemkey") {
      var key = args.join(" ")
      if (!key) return message.reply("i need a key to redeem!")
      if (RegularQueue.includes(key)) {
          let redeem = new Discord.MessageEmbed()
              .setColor('#00FF00')
              .setDescription(`you have been whitelisted for prem`)
          message.channel.send("", redeem)
    message.member.roles.add('957045615374766120')
    RegularQueue = RegularQueue.filter(item => item !== key)
      } else if(PremQueue.includes(key)) {
        let redeem2 = new Discord.MessageEmbed()
        .setColor('#00FF00')
        .setDescription(`you have been whitelisted for prem+`)
    message.channel.send("", redeem2)
message.member.roles.add('957045615374766120')
PremQueue = PremQueue.filter(item2 => item2 !== key)


      } else {
          message.reply("invald key")
      }
  }

  if (command === "keys") {
     if (message.member.roles.cache.find((r) => r.id === "949520401552261150")) {
       var thekeys = []
       var thekeys2 = []
       RegularQueue.forEach(keeeeeee => thekeys.push(`${keeeeeee}\n`));
       PremQueue.forEach(keeeeeeez => thekeys2.push(`${keeeeeeez}\n`));
      let keyz = new Discord.MessageEmbed()
      .setTitle("Active Floppa Supporter Keys")
      .setColor('#0099ff')
      .setDescription(`${thekeys}\n `)
      message.channel.send(`` , keyz)
      let kheez = new Discord.MessageEmbed()
      .setTitle("Active Floppa Addon+ Keys")
      .setColor('#0099ff')
      .setDescription(`${thekeys2}\n `)
      message.channel.send(`` , kheez)
        /*
       message.channel.send(`${keyqueue[i]}\n  Time Genrated: ${timestamp.utc('YYYY/MM/DD:mm:ss')}`) */
    } else {
      message.reply("uh oh no perms")
        }
      
  }
  if (command === "genkey") {
  if (message.member.roles.cache.find((r) => r.id === "954938661252780042")) {
      var keytype = args.join(" ")
      if(!keytype) return message.channel.send(" i need a key type premium or premium+")
if(keytype === "Supporter"){
    Regular()
      RegularQueue.push(`${RegularHasher}`)
      let premium = new Discord.MessageEmbed()
          .setColor('#0099ff')
          .setDescription(`Your Whitelist key is: ${RegularHasher}`)
      message.channel.send(``, premium)
} else if(keytype === "addon+"){
    Premium()
    PremQueue.push(`${PremiumHasher}`)
    let premiumplus = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setDescription(`Your Whitelist key is: ${PremiumHasher}`)
    message.channel.send(``, premiumplus)
}
    } else {
      message.reply("uh oh no perms")
        }
  }


if(command === "purgekeys"){
if(message.member.roles.cache.find((r) => r.id === "949520401552261150")) {  
message.channel.send("All active keys will be purged")
message.channel.send("Completed Process!")
RegularQueue = []
PremQueue = []
  } else {
          message.reply("uh oh you don't have perms")
      }
}


if(command === "checkey"){
if(message.member.roles.cache.find((r) => r.id === "949520401552261150")) { 
var type = "";
var keyname = args.join(" ")
if(!keyname) message.channel.send("i need a key")
if(RegularQueue.includes(keyname)){
  type = "premium Key"
} else {
  status = "inactive"
  status = "N/A"
}
if(PremQueue.includes(keyname)){
    type = "premium+ Key"
  } else {
    status = "inactive"
  }
 let e = new Discord.MessageEmbed()
          .setTitle("Key Information")
          .setColor('#0099ff')
          .setDescription(`Key: ${keyname}\nStatus: ${status}\nType: ${type}`)
      message.channel.send(``, e)
  } else {
          message.reply("oh uh no perms")
      }
}
  if(command === "edit"){
    if (message.member.roles.cache.find((r) => r.id === "957045615374766120")) {

                if (message.attachments.size > 0) {
                    const image = await message.attachments;
                    const tobeedited = image.array()[0].attachment;
                    const bait1 = "./altbaits/1.png"
                    const bait2 = "./altbaits/2.png"
                    const bait3 = "./altbaits/3.png"
                    const bait4 = "./altbaits/4.png"
                    const bait5 = "./altbaits/5.png"
                    const bait6 = "./altbaits/6.png"
                    const bait7 = "./altbaits/7.png"
                    const bait8 = "./altbaits/8.png"
                    const bait9 = "./altbaits/9.png"
                    const bait10 = "./altbaits/10.png"
                    const bait11 = "./altbaits/11.png"
                    const bait12 = "./altbaits/12.png"
                    const bait13 = "./altbaits/13.png"
                    const bait14 = "./altbaits/14.png"
                    const bait15 = "./altbaits/15.png"
                    const dick = message.channel.send(
                        `${message.author} **Wrapping your image: this might take a bit do not rerun untill done**`
                    );

                    Jimp.read(tobeedited, (err, bypass) => {
                        if (err) {
                            console.log(err);
                        } else {
                            Jimp.read(bait1, async (err, bypassclone) => {
                                if (err) {
                                    console.log(err);
                                } else {
                                    bypassclone.opacity(1);
                                    bypass.composite(bypassclone, 0, 0);
                                    await bypass.writeAsync("./bruteforced/b1.png");
                                }

                                Jimp.read(tobeedited, (err, bypass2) => {
                                    if (err) {
                                        console.log(err);
                                    } else {
                                        Jimp.read(bait2, async (err, bypassclone2) => {
                                            if (err) {
                                                console.log(err);
                                            } else {
                                                bypassclone2.opacity(1);
                                                bypass2.composite(bypassclone2, 0, 0);
                                                await bypass2.writeAsync("./bruteforced/b2.png");
                                            }

                                            Jimp.read(tobeedited, (err, bypass3) => {
                                                if (err) {
                                                    console.log(err);
                                                } else {
                                                    Jimp.read(bait3, async (err, bypassclone3) => {
                                                        if (err) {
                                                            console.log(err);
                                                        } else {
                                                            bypassclone3.opacity(1);
                                                            bypass3.composite(bypassclone3, 0, 0);
                                                            await bypass3.writeAsync("./bruteforced/b3.png");
                                                        }

                                                        Jimp.read(tobeedited, (err, bypass4) => {
                                                            if (err) {
                                                                console.log(err);
                                                            } else {
                                                                Jimp.read(bait4, async (err, bypassclone4) => {
                                                                    if (err) {
                                                                        console.log(err);
                                                                    } else {
                                                                        bypassclone4.opacity(1);
                                                                        bypass4.composite(bypassclone4, 0, 0);
                                                                        await bypass4.writeAsync("./bruteforced/b4.png");
                                                                    }

                                                                    Jimp.read(tobeedited, (err, bypass5) => {
                                                                        if (err) {
                                                                            console.log(err);
                                                                        } else {
                                                                            Jimp.read(bait5, async (err, bypassclone5) => {
                                                                                if (err) {
                                                                                    console.log(err);
                                                                                } else {
                                                                                    bypassclone5.opacity(1);
                                                                                    bypass5.composite(bypassclone5, 0, 0);
                                                                                    await bypass5.writeAsync("./bruteforced/b5.png");
                                                                                }

                                                                                Jimp.read(tobeedited, (err, bypass6) => {
                                                                                    if (err) {
                                                                                        console.log(err);
                                                                                    } else {
                                                                                        Jimp.read(bait6, async (err, bypassclone6) => {
                                                                                            if (err) {
                                                                                                console.log(err);
                                                                                            } else {
                                                                                                bypassclone6.opacity(1);
                                                                                                bypass6.composite(bypassclone6, 0, 0);
                                                                                                await bypass6.writeAsync("./bruteforced/b6.png");
                                                                                            }

                                                                                            Jimp.read(tobeedited, (err, bypass7) => {
                                                                                                if (err) {
                                                                                                    console.log(err);
                                                                                                } else {
                                                                                                    Jimp.read(bait7, async (err, bypassclone7) => {
                                                                                                        if (err) {
                                                                                                            console.log(err);
                                                                                                        } else {
                                                                                                            bypassclone7.opacity(1);
                                                                                                            bypass7.composite(bypassclone7, 0, 0);
                                                                                                            await bypass7.writeAsync("./bruteforced/b7.png");
                                                                                                        }

                                                                                                        Jimp.read(tobeedited, (err, bypass8) => {
                                                                                                            if (err) {
                                                                                                                console.log(err);
                                                                                                            } else {

                                                                                                                Jimp.read(bait8, async (err, bypassclone8) => {
                                                                                                                    if (err) {
                                                                                                                        console.log(err);
                                                                                                                    } else {
                                                                                                                        bypassclone8.opacity(1);
                                                                                                                        bypass8.composite(bypassclone8, 0, 0);
                                                                                                                        await bypass8.writeAsync("./bruteforced/b8.png");
                                                                                                                    }

                                                                                                                    Jimp.read(tobeedited, (err, bypass9) => {
                                                                                                                        if (err) {
                                                                                                                            console.log(err);
                                                                                                                        } else {
                                                                                                                            Jimp.read(bait9, async (err, bypassclone9) => {
                                                                                                                                if (err) {
                                                                                                                                    console.log(err);
                                                                                                                                } else {
                                                                                                                                    bypassclone9.opacity(1);
                                                                                                                                    bypass9.composite(bypassclone9, 0, 0);
                                                                                                                                    await bypass9.writeAsync("./bruteforced/b9.png");
                                                                                                                                }

                                                                                                                                Jimp.read(tobeedited, (err, bypass10) => {
                                                                                                                                    if (err) {
                                                                                                                                        console.log(err);
                                                                                                                                    } else {
                                                                                                                                        Jimp.read(bait10, async (err, bypassclone10) => {
                                                                                                                                            if (err) {
                                                                                                                                                console.log(err);
                                                                                                                                            } else {
                                                                                                                                                bypassclone10.opacity(1);
                                                                                                                                                bypass10.composite(bypassclone10, 0, 0);
                                                                                                                                                await bypass10.writeAsync("./bruteforced/b10.png");
                                                                                                                                            }

                                                                                                                                            Jimp.read(tobeedited, (err, bypass11) => {
                                                                                                                                                if (err) {
                                                                                                                                                    console.log(err);
                                                                                                                                                } else {
                                                                                                                                                    Jimp.read(bait11, async (err, bypassclone11) => {
                                                                                                                                                        if (err) {
                                                                                                                                                            console.log(err);
                                                                                                                                                        } else {
                                                                                                                                                            bypassclone11.opacity(1);
                                                                                                                                                            bypass11.composite(bypassclone11, 0, 0);
                                                                                                                                                            await bypass11.writeAsync("./bruteforced/b11.png");
                                                                                                                                                        }

                                                                                                                                                        Jimp.read(tobeedited, (err, bypass12) => {
                                                                                                                                                            if (err) {
                                                                                                                                                                console.log(err);
                                                                                                                                                            } else {
                                                                                                                                                                Jimp.read(bait12, async (err, bypassclone12) => {
                                                                                                                                                                    if (err) {
                                                                                                                                                                        console.log(err);
                                                                                                                                                                    } else {
                                                                                                                                                                        bypassclone12.opacity(1);
                                                                                                                                                                        bypass12.composite(bypassclone11, 0, 0);
                                                                                                                                                                        await bypass12.writeAsync("./bruteforced/b12.png");
                                                                                                                                                                    }

                                                                                                                                                                    Jimp.read(tobeedited, (err, bypass13) => {
                                                                                                                                                                        if (err) {
                                                                                                                                                                            console.log(err);
                                                                                                                                                                        } else {
                                                                                                                                                                            Jimp.read(bait13, async (err, bypassclone13) => {
                                                                                                                                                                                if (err) {
                                                                                                                                                                                    console.log(err);
                                                                                                                                                                                } else {
                                                                                                                                                                                    bypassclone13.opacity(1);
                                                                                                                                                                                    bypass13.composite(bypassclone13, 0, 0);
                                                                                                                                                                                    await bypass13.writeAsync("./bruteforced/b13.png");
                                                                                                                                                                                }

                                                                                                                                                                                Jimp.read(tobeedited, (err, bypass14) => {
                                                                                                                                                                                    if (err) {
                                                                                                                                                                                        console.log(err);
                                                                                                                                                                                    } else {
                                                                                                                                                                                        Jimp.read(bait14, async (err, bypassclone14) => {
                                                                                                                                                                                            if (err) {
                                                                                                                                                                                                console.log(err);
                                                                                                                                                                                            } else {
                                                                                                                                                                                                bypassclone14.opacity(1);
                                                                                                                                                                                                bypass14.composite(bypassclone14, 0, 0);
                                                                                                                                                                                                await bypass14.writeAsync("./bruteforced/b14.png");
                                                                                                                                                                                            }

                                                                                                                                                                                            Jimp.read(tobeedited, (err, bypass15) => {
                                                                                                                                                                                                if (err) {
                                                                                                                                                                                                    console.log(err);
                                                                                                                                                                                                } else {
                                                                                                                                                                                                    Jimp.read(bait15, async (err, bypassclone15) => {
                                                                                                                                                                                                        if (err) {
                                                                                                                                                                                                            console.log(err);
                                                                                                                                                                                                        } else {
                                                                                                                                                                                                            bypassclone14.opacity(1);
                                                                                                                                                                                                            bypass15.composite(bypassclone14, 0, 0);
                                                                                                                                                                                                            await bypass15.writeAsync("./bruteforced/b15.png");
                                                                                                                                                                                                        }




                                                                                                                                                                                                    });
                                                                                                                                                                                                }
                                                                                                                                                                                            });
                                                                                                                                                                                        })
                                                                                                                                                                                    }
                                                                                                                                                                                })
                                                                                                                                                                            })
                                                                                                                                                                        }
                                                                                                                                                                    })
                                                                                                                                                                })
                                                                                                                                                            }
                                                                                                                                                        })
                                                                                                                                                    })
                                                                                                                                                }
                                                                                                                                            })
                                                                                                                                        })
                                                                                                                                    }
                                                                                                                                })
                                                                                                                            })
                                                                                                                        }
                                                                                                                    })
                                                                                                                })
                                                                                                            }
                                                                                                        })
                                                                                                    })
                                                                                                }
                                                                                            })
                                                                                        })
                                                                                    }
                                                                                })
                                                                            })
                                                                        }
                                                                    })
                                                                })
                                                            }
                                                        })
                                                    })
                                                }
                                            })
                                        })
                                    }

                                })
                            })
                        }

                    }, 5000);
                    setTimeout(async () => {
                        const d = message.channel.send(
                            `${message.author} **Zipping Images, file output in dms: **`
                        );
                      createZipArchive();
                      message.author.send({
            files: ["./sender/BFM-Output.zip"]
        });
        var dir = "./bruteforced"
        fs.rmdirSync(dir, {recursive: true})
        fs.mkdirSync(dir)
                        setTimeout(() => { fs.unlinkSync(`./sender/BFM-Output.zip`)}, 5000);
                    

                    }, 50000);
              
            } else {
                message.reply("I need an image")
            }
              } else {
                    message.reply("You cannot Use this dude")
                }
    }

if (command === 'ping') {
  message.channel.send (`${client.ws.ping} ms`)
}
  
})
require('./server')();
client.login('OTM2MzkxMjc2MjI2NTc2NDI1.YfMgVQ.TeBouWxjtDb2ifWrS_KVe3I0Lxw');

