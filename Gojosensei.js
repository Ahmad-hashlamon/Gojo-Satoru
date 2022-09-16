require('./settings')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const path = require('path')
const os = require('os')
const maker = require('mumaker')

const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom } = require('./lib/myfunc')
const nexusnw = require('xfarr-api')

//rpg function\\
   const { 
     addInventoriDarah, 
      cekDuluJoinAdaApaKagaDiJson, 
      addDarah, 
      kurangDarah, 
     getDarah 
   }  = require('./storage/user/darah.js')
   const { 
     cekInventoryAdaAtauGak, 
      addInventori,  
       addBesi, 
       addEmas, 
       addEmerald,
       addUmpan,
       addPotion,
       kurangBesi, 
       kurangEmas, 
       kurangEmerald, 
       kurangUmpan,
       kurangPotion,
       getBesi, 
      getEmas, 
     getEmerald,
     getUmpan,
    getPotion
   } = require('./storage/user/alat_tukar.js')
   const { 
    addInventoriMonay, 
    cekDuluJoinAdaApaKagaMonaynyaDiJson, 
    addMonay, 
    kurangMonay, 
   getMonay 
   } = require('./storage/user/monay.js')
   const { 
    addInventoriLimit, 
    cekDuluJoinAdaApaKagaLimitnyaDiJson, 
    addLimit, 
    kurangLimit, 
    getLimit 
   } = require('./storage/user/limit.js')
   const { 
    cekDuluHasilBuruanNya, 
     addInventoriBuruan, 
     addIkan,
      addAyam, 
      addKelinci, 
      addDomba, 
      addSapi,
      addGajah,
      kurangIkan,
      kurangAyam, 
      kurangKelinci, 
      kurangDomba, 
      kurangSapi,
      kurangGajah,
      getIkan,
      getAyam, 
      getKelinci, 
      getDomba,
     getSapi,
    getGajah
   } = require('./storage/user/buruan.js')
   let DarahAwal =  global.rpg.darahawal
   const isDarah = cekDuluJoinAdaApaKagaDiJson(m.sender)   
   const isCekDarah = getDarah(m.sender)
   const isUmpan = getUmpan(m.sender)
   const isPotion = getPotion(m.sender)
   const isIkan = getIkan(m.sender)
   const isAyam = getAyam(m.sender)
   const isKelinci = getKelinci(m.sender)
   const isDomba = getDomba(m.sender)
   const isSapi = getSapi(m.sender)
   const isGajah = getGajah(m.sender)
   const isMonay = getMonay(m.sender)
   const isLimit = getLimit(m.sender)
   const isBesi = getBesi(m.sender)
   const isEmas = getEmas(m.sender)
   const isEmerald = getEmerald(m.sender)
   const isInventory = cekInventoryAdaAtauGak(m.sender)
   const isInventoriBuruan = cekDuluHasilBuruanNya(m.sender)
   const isInventoryLimit = cekDuluJoinAdaApaKagaLimitnyaDiJson(m.sender)
   const isInventoryMonay = cekDuluJoinAdaApaKagaMonaynyaDiJson(m.sender)
   const ikan = ['🐟','🐠','🐡']   

//rpg database\\
 let _limit = JSON.parse(fs.readFileSync('./storage/user/limit.json'));
 let _buruan = JSON.parse(fs.readFileSync('./storage/user/hasil_buruan.json'));
 let _darahOrg = JSON.parse(fs.readFileSync('./storage/user/darah.json'))

//Database\\
let setik = JSON.parse(fs.readFileSync('./database/setik.json'));
let vien = JSON.parse(fs.readFileSync('./database/vien.json'));
let imagi = JSON.parse(fs.readFileSync('./database/imagi.json'))
let videox = JSON.parse(fs.readFileSync('./database/video.json'))

//read database\\
let tebaklagu = db.data.game.tebaklagu = []
let _family100 = db.data.game.family100 = []
let kuismath = db.data.game.math = []
let tebakgambar = db.data.game.tebakgambar = []
let tebakkata = db.data.game.tebakkata = []
let caklontong = db.data.game.lontong = []
let caklontong_desk = db.data.game.lontong_desk = []
let tebakkalimat = db.data.game.kalimat = []
let tebaklirik = db.data.game.lirik = []
let tebaktebakan = db.data.game.tebakan = []
let vote = db.data.others.vote = []

module.exports = GojoMdNx = async (GojoMdNx, m, chatUpdate, store) => {
    try {
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
        const isCmd = body.startsWith(prefix)
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const pushname = m.pushName || "No Name"
        const botNumber = await GojoMdNx.decodeJid(GojoMdNx.user.id)
        const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const itsMe = m.sender == botNumber ? true : false
        const text = q = args.join(" ")
        const quoted = m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
	    const isMedia = /image|video|sticker|audio/.test(mime)
	    const from = mek.key.remoteJid
	    const type = Object.keys(mek.message)[0]        
	    const content = JSON.stringify(mek.message)

        //group\\
        const groupMetadata = m.isGroup ? await GojoMdNx.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
    	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
    	const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
    	const isPremium = isCreator || global.premium.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false
	    
        //member\\
        let picaks = [flaming,fluming,flarun,flasmurf]
		let picak = picaks[Math.floor(Math.random() * picaks.length)]
		
          try {
            let isNumber = x => typeof x === 'number' && !isNaN(x)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            let user = global.db.data.users[m.sender]
            if (typeof user !== 'object') global.db.data.users[m.sender] = {}
            if (user) {
                if (!isNumber(user.afkTime)) user.afkTime = -1
                if (!('afkReason' in user)) user.afkReason = ''
                if (!isNumber(user.limit)) user.limit = limitUser
            } else global.db.data.users[m.sender] = {
                afkTime: -1,
                afkReason: '',
                limit: limitUser,
            }
    
            let chats = global.db.data.chats[m.chat]
            if (typeof chats !== 'object') global.db.data.chats[m.chat] = {}
            if (chats) {
                if (!('mute' in chats)) chats.mute = false
                if (!('antilink' in chats)) chats.antilink = false
            } else global.db.data.chats[m.chat] = {
                mute: false,
                antilink: false,
            }
		
	    let setting = global.db.data.settings[botNumber]
            if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
	    if (setting) {
		if (!isNumber(setting.status)) setting.status = 0
		if (!('autobio' in setting)) setting.autobio = false
	    } else global.db.data.settings[botNumber] = {
		status: 0,
		autobio: false,
	    }
	    
        } catch (err) {
            console.error(err)
        }
	
	//group target \\
const reply = (teks) => {
            GojoMdNx.sendMessage(m.chat, { text: teks, contextInfo:{"externalAdReply": {"title": ` ${global.botname}`,"body": ` Gojo-Satoru`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./GojoMedia/gojo.jpg`),"sourceUrl": "https://telegra.ph/file/8bbe8a7de5c351dfcb077.jpg"}}}, { quoted: m})
        }
        
        const replay = (teks) => {
            GojoMdNx.sendMessage(m.chat, { text: teks, contextInfo:{"externalAdReply": {"title": ` ${global.botname}`,"body": ` Gojo-Satoru`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./GojoMedia/gojo.jpg`),"sourceUrl": "https://telegra.ph/file/8bbe8a7de5c351dfcb077.jpg"}}}, { quoted: m})
        }
	
        //Public & Self\\
        if (!GojoMdNx.public) {
            if (!m.key.fromMe) return
        }

        //Push Message To Console && Auto Read\\
        if (m.message) {
            GojoMdNx.sendReadReceipt(m.chat, m.sender, [m.key.id])
            console.log(chalk.black(chalk.bgWhite('[ MESSAGE ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> From'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> In'), chalk.green(m.isGroup ? pushname : 'Private Chat', m.chat))
        }
	
	//reset limit every 12 hours\\
        let cron = require('node-cron')
        cron.schedule('00 12 * * *', () => {
            let user = Object.keys(global.db.data.users)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            for (let jid of user) global.db.data.users[jid].limit = limitUser
            console.log('Limit Reseted')
        }, {
            scheduled: true,
            timezone: "Asia/hebron"
        })
        
	//auto set bio\\
	if (db.data.settings[botNumber].autobio) {
	    let setting = global.db.data.settings[botNumber]
	    if (new Date() * 1 - setting.status > 1000) {
		let uptime = await runtime(process.uptime())
		await GojoMdNx.setStatus(`${GojoMdNx.user.name} | Runtime : ${runtime(uptime)}`)
		setting.status = new Date() * 1
	    }
	}
	
	  //antilink\\
        if (db.data.chats[m.chat].antilink) {
        if (budy.match(`chat.whatsapp.com`)) {
        reply(`「 ANTI LINK 」\n\nراح اطردك لانك ترسل روابط, دز يا ورع`)
        if (!isBotAdmins) return reply(`هاتو اشراف اطرد ذا الورع الي يرسل روابط`)
        let gclink = (`https://chat.whatsapp.com/`+await GojoMdNx.groupInviteCode(m.chat))
        let isLinkThisGc = new RegExp(gclink, 'i')
        let isgclink = isLinkThisGc.test(m.text)
        if (isgclink) return reply(`كان نفسي اطردك بس انت ارسلت رابط القروب`)
        if (isAdmins) return reply(`كان نفسي اطرد جدك بس انت ادمن `)
        if (isCreator) return reply(`مقدر اطرد عمكم خله ينشر روابط براحته`)
        GojoMdNx.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }
        }

        //auto reply 
        for (let anji of setik){
				if (budy === anji){
					result = fs.readFileSync(`./GojoMedia/sticker/${anji}.webp`)
					GojoMdNx.sendMessage(m.chat, { sticker: result }, { quoted: m })
					}
			}
			for (let anju of vien){
				if (budy === anju){
					result = fs.readFileSync(`./GojoMedia/vn/${anju}.mp3`)
					GojoMdNx.sendMessage(m.chat, { audio: result, mimetype: 'audio/mp4', ptt: true }, { quoted: m })     
					}
			}
			for (let anjh of imagi){
				if (budy === anjh){
					result = fs.readFileSync(`./GojoMedia/image/${anjh}.jpg`)
					GojoMdNx.sendMessage(m.chat, { image: result }, { quoted: m })
					}
			}
					for (let anjh of videox){
				if (budy === anjh){
					result = fs.readFileSync(`./GojoMedia/vid/${anjh}.mp4`)
					GojoMdNx.sendMessage(m.chat, { video: result }, { quoted: m })
					}
				  }

      //Mute Chat\\
      if (db.data.chats[m.chat].mute && !isAdmins && !isCreator) {
      return
      }
        
        //media detect \\
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
        
        //Respon Cmd with media\\
        if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
        let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
        let { text, mentionedJid } = hash
        let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
            userJid: GojoMdNx.user.id,
            quoted: m.quoted && m.quoted.fakeObj
        })
        messages.key.fromMe = areJidsSameUser(m.sender, GojoMdNx.user.id)
        messages.key.id = m.key.id
        messages.pushName = m.pushName
        if (m.isGroup) messages.participant = m.sender
        let msg = {
            ...chatUpdate,
            messages: [proto.WebMessageInfo.fromObject(messages)],
            type: 'اضف'
        }
        GojoMdNx.ev.emit('messages.upsert', msg)
        }

        if (tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklagu[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await GojoMdNx.sendButtonText(m.chat, [{ buttonId: 'guess song', buttonText: { displayText: 'Guess The Song' }, type: 1 }], `🎮 Guess The Music 🎮\n\nCorrect Answer 🎉\n\nWant To Play Again? Press The Button Below`, GojoMdNx.user.name, m)
                delete tebaklagu[m.sender.split('@')[0]]
            } else reply('*اجابتك غلط*')
        }

        if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = kuismath[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await reply(`اختبار الرياضيات\n\nكفو جوابك صح\n\nاذا بدك تلعب مرة ثانية ارسل ${prefix}مستوى الصعوبة`)
                delete kuismath[m.sender.split('@')[0]]
            } else reply('*اجابتك غلط*')
        }
        //TicTacToe\\
	    this.game = this.game ? this.game : {}
	    let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
	    if (room) {
	    let ok
	    let isWin = !1
	    let isTie = !1
	    let isSurrender = !1
	    //reply(`[DEBUG]\n${parseInt(m.text)}`)
	    if (!/^([1-9]|(me)?give up|surr?ender|off|skip)$/i.test(m.text)) return
	    isSurrender = !/^[1-9]$/.test(m.text)
	    if (m.sender !== room.game.currentTurn) { 
	    if (!isSurrender) return !0
	    }
	    if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
	    reply({
	    '-3': 'انتهت اللعبة',
	    '-2': 'خطأ',
	    '-1': 'حركة خاطئة',
	    0: 'حركة خاطئة',
	    }[ok])
	    return !0
	    }
	    if (m.sender === room.game.winner) isWin = true
	    else if (room.game.board === 511) isTie = true
	    let arr = room.game.render().map(v => {
	    return {
	    X: '❌',
	    O: '⭕',
	    1: '1️⃣',
	    2: '2️⃣',
	    3: '3️⃣',
	    4: '4️⃣',
	    5: '5️⃣',
	    6: '6️⃣',
	    7: '7️⃣',
	    8: '8️⃣',
	    9: '9️⃣',
	    }[v]
	    })
	    if (isSurrender) {
	    room.game._currentTurn = m.sender === room.game.playerX
	    isWin = true
	    }
	    let winner = isSurrender ? room.game.currentTurn : room.game.winner
	    let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Won!` : isTie ? `انتهت اللعبة` : `Turn ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

اكتب *استسلام* للاستسلام وانهاء اللعبة`
	    if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
	    room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
	    if (room.x !== room.o) await GojoMdNx.sendText(room.x, str, m, { mentions: parseMention(str) } )
	    await GojoMdNx.sendText(room.o, str, m, { mentions: parseMention(str) } )
	    if (isTie || isWin) {
	    delete this.game[room.id]
	    }
	    }

        //Suit PvP\\
	    this.suit = this.suit ? this.suit : {}
	    let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
	    if (roof) {
	    let win = ''
	    let tie = false
	    if (m.sender == roof.p2 && /^(acc(ept)?|قبول|اوك|نعم?|reject|رفض|لا|دز(k.)?yes|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
	    if (/^(reject|no|later|n|nope(k.)?yes)/i.test(m.text)) {
	    GojoMdNx.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} رفض الدعوة, اللعبة التغت`, m)
	    delete this.suit[roof.id]
	    return !0
	    }
	    roof.status = 'play'
	    roof.asal = m.chat
	    clearTimeout(roof.waktu)
	    //delete roof[roof.id].waktu
	    GojoMdNx.sendText(m.chat, `روحو ع خاص البوت اختارو

@${roof.p.split`@`[0]} dan 
@${roof.p2.split`@`[0]}

Please Choose A Suit In The Respective Chat"
Click https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
	    if (!roof.pilih) GojoMdNx.sendText(roof.p, `Please Select \n\nحجر🗿\nورقة📄\nمقص✂️`, m)
	    if (!roof.pilih2) GojoMdNx.sendText(roof.p2, `Please Select \n\nحجر🗿\nورقة📄\nمقص✂️`, m)
	    roof.waktu_milih = setTimeout(() => {
	    if (!roof.pilih && !roof.pilih2) GojoMdNx.sendText(m.chat, `بدهمش يلعبو,\nاللعبة تكنسلت`)
	    else if (!roof.pilih || !roof.pilih2) {
	    win = !roof.pilih ? roof.p2 : roof.p
	    GojoMdNx.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} ما اختار, انتهت اللعبة`, m)
	    }
	    delete this.suit[roof.id]
	    return !0
	    }, roof.timeout)
	    }
	    let jwb = m.sender == roof.p
	    let jwb2 = m.sender == roof.p2
	    let g = /مقص/i
	    let b = /حجر/i
	    let k = /ورقة/i
	    let reg = /^(مقص|حجر|ورقة)/i
	    if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
	    roof.pilih = reg.exec(m.text.toLowerCase())[0]
	    roof.text = m.text
	    reply(`تم انت اخترت ${m.text} ${!roof.pilih2 ? `\n\nانتظر خصمك يختار` : ''}`)
	    if (!roof.pilih2) GojoMdNx.sendText(roof.p2, '_خصمك اختار_\nيلا اختار يورع', 0)
	    }
	    if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
	    roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
	    roof.text2 = m.text
	    reply(`تم انت اخترت ${m.text} ${!roof.pilih2 ? `\n\nانتظر خصمك يختار` : ''}`)
	    if (!roof.pilih2) GojoMdNx.sendText(roof.p2, '_خصمك اختار_\nيلا اختار يورع', 0)
	    }
	    let stage = roof.pilih
	    let stage2 = roof.pilih2
	    if (roof.pilih && roof.pilih2) {
	    clearTimeout(roof.waktu_milih)
	    if (b.test(stage) && g.test(stage2)) win = roof.p
	    else if (b.test(stage) && k.test(stage2)) win = roof.p2
	    else if (g.test(stage) && k.test(stage2)) win = roof.p
	    else if (g.test(stage) && b.test(stage2)) win = roof.p2
	    else if (k.test(stage) && b.test(stage2)) win = roof.p
	    else if (k.test(stage) && g.test(stage2)) win = roof.p2
	    else if (stage == stage2) tie = true
	    GojoMdNx.sendText(roof.asal, `_*Suit Results*_${tie ? '\nSERIES' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` الجالد \n` : ` المجلود \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` الجالد \n` : ` المجلود \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
	    delete this.suit[roof.id]
	    }
	    }
	    
	    let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
	    for (let jid of mentionUser) {
            let user = global.db.data.users[jid]
            if (!user) continue
            let afkTime = user.afkTime
            if (!afkTime || afkTime < 0) continue
            let reason = user.afkReason || ''
            reply(`
لا تمنشنه كافي ازعاج قلك هو اوفلاين ${reason ? 'مع سبب ' + reason : 'بدون سبب'}
لانه ${clockString(new Date - afkTime)}
`.trim())
        }

        if (db.data.users[m.sender].afkTime > -1) {
            let user = global.db.data.users[m.sender]
            reply(`
منور رجعت اونلاين ${user.afkReason ? ' بعد ' + user.afkReason : ''}
خلال ${clockString(new Date - user.afkTime)}
`.trim())
            user.afkTime = -1
            user.afkReason = ''
        }
        case 'حد المستخدم': 
{      
   let txt = `「 *حد المستخدم* 」\n\n`
     for (let i of _limit){
     txt += `➸ *ID :* @${i.id.split("@")[0]}\n➸ *Limit* : ${i.limit}\n`
     }
    reply(txt)       
  }
 break

	    case 'اوفلاين': {
                let user = global.db.data.users[m.sender]
                user.afkTime = + new Date
                user.afkReason = text
                reply(`${m.pushName}راح اوف لاين ${text ? ': ' + text : ''}`)
            }
            break	
        case 'ttc': case 'ttt': case 'اكس او': {
            let TicTacToe = require("./lib/tictactoe")
            this.game = this.game ? this.game : {}
            if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) return replay(`لساتك في اللعبة`)
            let room = Object.values(this.game).find(room => room.state === 'قيد الانتظار' && (text ? room.name === text : true))
            if (room) {
            reply('تم ايجاد الخصم')
            room.o = m.chat
            room.game.playerO = m.sender
            room.state = 'اللعب مستمر'
            let arr = room.game.render().map(v => {
            return {
            X: '❌',
            O: '⭕',
            1: '1️⃣',
            2: '2️⃣',
            3: '3️⃣',
            4: '4️⃣',
            5: '5️⃣',
            6: '6️⃣',
            7: '7️⃣',
            8: '8️⃣',
            9: '9️⃣',
            }[v]
            })
            let str = `رقم الغرفة: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Waiting @${room.game.currentTurn.split('@')[0]}

اكتب *استسلام* للخسارة والاستسلام`
            if (room.x !== room.o) await GojoMdNx.sendText(room.x, str, m, { mentions: parseMention(str) } )
            await GojoMdNx.sendText(room.o, str, m, { mentions: parseMention(str) } )
            } else {
            room = {
            id: 'tictactoe-' + (+new Date),
            x: m.chat,
            o: '',
            game: new TicTacToe(m.sender, 'o'),
            state: 'قيد الانتظار'
            }
            if (text) room.name = text
            reply('يتم انتظار الخصم' + (text ? ` Type The Command Below ${prefix}${command} ${text}` : ''))
            this.game[room.id] = room
            }
            }
            break
            case 'delttc': case 'delttt': case 'حذف اكس او': {
            this.game = this.game ? this.game : {}
            try {
            if (this.game) {
            delete this.game
            GojoMdNx.sendText(m.chat, `تم الغاء اللعبة`, m)
            } else if (!this.game) {
            reply(`اللعبة لم تعد موجودة`)
            } else reply('?')
            } catch (e) {
            reply('تم التدمير')
            }
            }
            break
            case 'suitpvp': case 'suit': case 'حجر ورقة مقص': {
            this.suit = this.suit ? this.suit : {}
            let poin = 10
            let poin_lose = 10
            let timeout = 60000
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) return replay(`اكمل اللعبة السابقة`)
	    if (m.mentionedJid[0] === m.sender) return reply(`Can't Play With Myself !`)
            if (!m.mentionedJid[0]) return reply(`_مين بدك تتحدى؟_\nمنشن الشخص الي تبي تتحداه\n\nExample : ${prefix}حجر ورقة مقص @${owner[1]}`, m.chat, { mentions: [owner[1] + '@s.whatsapp.net'] })
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0])))  reply(`الي تبي تتحداه جالس يلعب الحين :(`)
            let id = 'suit_' + new Date() * 1
            let caption = `_*SUIT PvP*_

@${m.sender.split`@`[0]} تحدى @${m.mentionedJid[0].split`@`[0]} للعب حجر ورقة مقص

 @${m.mentionedJid[0].split`@`[0]} اكتب قبول او رفض`
            this.suit[id] = {
            chat: await GojoMdNx.sendText(m.chat, caption, m, { mentions: parseMention(caption) }),
            id: id,
            p: m.sender,
            p2: m.mentionedJid[0],
            status: 'انتظر',
            waktu: setTimeout(() => {
            if (this.suit[id]) GojoMdNx.sendText(m.chat, `_انتهى وقت الانتظار_`, m)
            delete this.suit[id]
            }, 60000), poin, poin_lose, timeout
            }
            }
            break
            case 'محادثة': case 'chat': {
                if (!isCreator) return replay(`${mess.owner}`)
                if (!q) return replay(`Option : 1. mute\n2. unmute\n3. archive\n4. unarchive\n5. read\n6. unread\n7. delete`)
                if (args[0] === 'كتم') {
                    GojoMdNx.chatModify({ mute: 'انفنتي' }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'الغاء كتم') {
                    GojoMdNx.chatModify({ mute: null }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'ارشفة') {
                    GojoMdNx.chatModify({  archive: true }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'الغاء ارشفة') {
                    GojoMdNx.chatModify({ archive: false }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'تحديد ك مقروء') {
                    GojoMdNx.chatModify({ markRead: true }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'تحديد ك غير مقروء') {
                    GojoMdNx.chatModify({ markRead: false }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'حذف المحادثة') {
                    GojoMdNx.chatModify({ clear: { message: { id: m.quoted.id, fromMe: true }} }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                }
             }
            break
		
	case 'رياكشن': case 'react': {
                if (!isCreator) throw mess.owner
                reactionMessage = {
                    react: {
                        text: args[0],
                        key: { remoteJid: m.chat, fromMe: true, id: quoted.id }
                    }
                }
                GojoMdNx.sendMessage(m.chat, reactionMessage)
            }
            break
		
		
            case 'kuismath': case 'math': case 'رياضيات': {
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) return replay(`There Are Still Unfinished Sessions!`)
                let { genMath, modes } = require('./lib/math')
                if (!text) return replay(`Mode: ${Object.keys(modes).join(' | ')}\nFor Examples: ${prefix}math medium`)
                let result = await genMath(text.toLowerCase())
                GojoMdNx.sendText(m.chat, `*What Is The Result Of: ${result.soal.toLowerCase()}*?\n\nTime: ${(result.waktu / 1000).toFixed(2)} second`, m).then(() => {
                    kuismath[m.sender.split('@')[0]] = result.jawaban
                })
                await sleep(result.waktu)
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("الجواب: " + result.jawaban)
                    reply("خلص الوقت\nالجواب: " + kuismath[m.sender.split('@')[0]])
                    delete kuismath[m.sender.split('@')[0]]
                }
            }
            break
            case 'التوأم الروحي': {
            if (!m.isGroup) return replay(`${mess.group}`)
            let member = participants.map(u => u.id)
            let me = m.sender
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `「جبنالك توأمك」◣
	    
@${me.split('@')[0]} ❤️ @${jodoh.split('@')[0]}
「اضغط حبيت او اجلدك」◣`
            let ments = [me, jodoh]
            let buttons = [
                        { buttonId: 'حبييت', buttonText: { displayText: 'حبييت' }, type: 1 }
                    ]
                    await GojoMdNx.sendButtonText(m.chat, buttons, jawab, GojoMdNx.user.name, m, {mentions: ments})
            }
            break
            case 'تشبيك': {
            if (!m.isGroup) return replay(`${mess.group}`)
            let member = participants.map(u => u.id)
            let orang = member[Math.floor(Math.random() * member.length)]
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `@${orang.split('@')[0]} ❤️ @${jodoh.split('@')[0]}
شبكناكم غصب, الباقي باركولهم`
            let menst = [orang, jodoh]
            let buttons = [
                        { buttonId: '❤️الف مبروك', buttonText: { displayText: '❤️الف مبروك' }, type: 1 }
                    ]
                    await GojoMdNx.sendButtonText(m.chat, buttons, jawab, GojoMdNx.user.name, m, {mentions: menst})
            }
            break
      case 'غبي':
      case 'حمار':
      case 'ذكي':
      case 'جبان':
      case 'محبوب':
      case 'احمق':
      case 'كلب':
      case 'قرد':
      case 'كريه':
      case 'ورع':
      case 'خروف':
      case 'سافل':
      case 'ورع':
      case 'مخادع':
      case 'مظلوم':
      case 'مسكين':
      case 'مخدوع':
      case 'جميل':
      case 'طيب':
      case 'محترم':
      case 'زفت':
      case 'وصخ':
      case 'حزين':
      case 'مجنون':
      case 'بشع':
      case 'صنم':
      case 'شجاع':
      case 'رقاص':
      case 'مضحك':
      case 'مستفز':
      case 'عاقل':
      case 'محتال':
      case 'نجس':
      case 'مؤدب':
      case 'غامض':
      case 'ظالم':	
      case 'مبااع':
      case 'صادق':
      case 'كذاب': {
            if (!m.isGroup) return replay(`${mess.group}`)
            let member = participants.map(u => u.id)
            let me = m.sender
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = ` اكبر *${command}* في الجروب هو @${jodoh.split('@')[0]}
            let ments = [me, jodoh]
            let buttons = [
                        { buttonId: 'اتفق😂', buttonText: { displayText: 'اتفق😂' }, type: 1 }
                    ]
                    await GojoMdNx.sendButtonText(m.chat, buttons, jawab, GojoMdNx.user.name, m, {mentions: ments})
            }
            break
case 'when':
				if (!text) return replay(`Use Text, Example : ${prefix + command} will i get married `)
					const kapan = ['5 More Days', '10 More Days', '15 More Days','20 More Days', '25 More Days','30 More Days','35 More Days','40 More Days','45 More Days','50 More Days','55 More Days','60 More Days','65 More Days','70 More Days','75 More Days','80 More Days','85 More Days','90 More Days','100 More Days','5 Months More', '10 Months More', '15 Months More','20 Months More', '25 Months More','30 Months More','35 Months More','40 Months More','45 Months More','50 Months More','55 Months More','60 Months More','65 Months More','70 Months More','75 Months More','80 Months More','85 Months More','90 Months More','100 Months More','1 More Year','2 More Years','3 More Years','4 More Years','5 More Years','Tomorrow','The Day After Tomorrow',`After This Command, You Too ${q}`]
					const kapankah = kapan[Math.floor(Math.random() * kapan.length)]
GojoMdNx.sendMessage(from, { text: `Question : ${q}\nAnswer : *${kapankah}*` }, { quoted: m })
					break
case 'wangy':
              if (!text) return replay(`Use Text, Example : ${prefix + command} hinata`)
              qq = q.toUpperCase()
              awikwok = `${qq} ${qq} ${qq} ❤️ ❤️ ❤️ WANGY WANGY WANGY WANGY HU HA HU HA HU HA, aaah the smell of hair ${qq} smelly i want to smell the fragrance ${qq} AAAAAAAAH ~ Her hair.... aaah i want to stroke her hair too ~~ AAAAAH ${qq} first time out in anime is cute too ❤️ ❤️ ❤️ so AAAAAAAH ${qq} AAAAAA LUCCUUUUUUUUUUUUU............ ${qq} AAAAAAAAAAAAAAAAAAAAGH ❤️ ❤️ ❤️what ? ${qq} it's not real ? Just HELL you say ? no, no no no no no no no no no no no no no no no !! I DON'T CARE ABOUT THE REALITY, I DON'T CARE. ❤️ ❤️ ❤️ ${qq} me ... ${qq} on the laptop watching me, ${qq} .. you believe in me ? aaaaaaaaaaah thanks ${q} I don't want to give up ${qq} aaaaaah ❤️ ❤️ ❤️ YEAAAAAAAAAAAH I STILL HAVE ${qq} ALSO NOT THE SAME AAAAAAAAAAAAAAH`
             reply(awikwok)
              break
case 'checkdeath':
             if (!text) return replay(`Use Someone's Name, Example : ${prefix + command} nexus`)
              predea = await axios.get(`https://api.agify.io/?name=${q}`)
              reply(`Name : ${predea.data.name}\n*Dead At Age :* ${predea.data.age} Year.\n\n_Quick, Quick, Repent Bro, Because No One Knows About Death_`)
              break
case 'halah': case 'hilih': case 'huluh': case 'heleh': case 'holoh':
            if (!m.quoted && !text) return replay(`Send/Reply Text With Caption ${prefix + command}`)
            ter = command[1].toLowerCase()
            tex = m.quoted ? m.quoted.text ? m.quoted.text : q ? q : m.text : q ? q : m.text
            reply(tex.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase()))
            break
            case 'reactxxx': {
                if (!isCreator) return replay(`${mess.owner}`)
                reactionMessage = {
                    react: {
                        text: args[0],
                        key: { remoteJid: m.chat, fromMe: true, id: quoted.id }
                    }
                }
                GojoMdNx.sendMessage(m.chat, reactionMessage)
            }
            break  
            case 'join': case 'دخول': {
                if (!isCreator) return replay(`${mess.owner}`)
                if (!text) return replay(`هات رابط القروب يورع`)
                if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return replay(`رابطك خربان يبني`)
                reply(mess.wait)
                let result = args[0].split('https://chat.whatsapp.com/')[1]
                await GojoMdNx.groupAcceptInvite(result).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
            }
            break
            case 'leave': case 'مغادرة': {
                if (!isCreator) return replay(`${mess.owner}`)
                await GojoMdNx.groupLeave(m.chat).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
            }
            break
            case 'حقوق': case 'الستيكر حقوق': {
               if (!isCreator) return replay(`${mess.owner}`)
               if (!text) return replay(`مثال : ${prefix + command} اسم الحزمة|صاحب الحزمة`)
          global.packname = text.split("|")[0]
          global.author = text.split("|")[1]
          reply(`تم تغيير حقوق الستيكر ل\n\n🐦 Packname : ${global.packname}\n🐦 Author : ${global.author}`)
            }
            break
	case 'kick': case 'طرد': {
		if (!m.isGroup) return replay(`${mess.group}`)
                if (!isBotAdmins) return replay(`${mess.botAdmin}`)
                if (!isAdmins) return replay(`${mess.admin}`)
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await GojoMdNx.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	break
	case 'add': case 'اضافة': {
		if (!m.isGroup) return replay(`${mess.group}`)
                if (!isBotAdmins) return replay(`${mess.botAdmin}`)
                if (!isAdmins) return replay(`${mess.admin}`)
		let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await GojoMdNx.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	break
	case 'promote': case 'ترقية': {
		if (!m.isGroup) return replay(`${mess.group}`)
                if (!isBotAdmins) return replay(`${mess.botAdmin}`)
                if (!isAdmins) return replay(`${mess.admin}`)
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await GojoMdNx.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	break
	case 'demote': case 'تخفيض': {
		if (!m.isGroup) return replay(`${mess.group}`)
                if (!isBotAdmins) return replay(`${mess.botAdmin}`)
                if (!isAdmins) return replay(`${mess.admin}`)
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await GojoMdNx.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	break
        case 'block': case 'حظر': {
		if (!isCreator) return replay(`${mess.owner}`)
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await GojoMdNx.updateBlockStatus(users, 'block').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	break
        case 'unblock': case 'الغاء الحظر': {
		if (!isCreator) return replay(`${mess.owner}`)
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await GojoMdNx.updateBlockStatus(users, 'unblock').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	break
	    case 'setname': case 'تغيير الاسم': case 'اسم القروب': {
                if (!m.isGroup) return replay(`${mess.group}`)
                if (!isBotAdmins) return replay(`${mess.botAdmin}`)
                if (!isAdmins) replay(`${mess.admin}`)
                if (!text) replay(`هات الاسم يبني!`)
                await GojoMdNx.groupUpdateSubject(m.chat, text).then((res) => reply(mess.success)).catch((err) => reply(jsonformat(err)))
            }
            break
          case 'setdesc': case 'الوصف': case 'تغيير الوصف': {
                if (!m.isGroup) return replay(`${mess.group}`)
                if (!isBotAdmins) return replay(`${mess.botAdmin}`)
                if (!isAdmins) replay(`${mess.admin}`)
                if (!text) replay(`هات الوصف يبني!`)
                await GojoMdNx.groupUpdateDescription(m.chat, text).then((res) => reply(mess.success)).catch((err) => reply(jsonformat(err)))
            }
            break
          case 'خلفية البوت': {
                if (!isCreator) return replay(`${mess.owner}`)
                if (!quoted) return replay(`Send/Reply Image With Caption ${prefix + command}`)
                if (!/image/.test(mime)) return replay(`ارسل/رد على صورة مع شرح ${prefix + command}`)
                if (/webp/.test(mime)) return replay(`ارسل/رد على صورة مع شرح ${prefix + command}`)
                let media = await GojoMdNx.downloadAndSaveMediaMessage(quoted)
                await GojoMdNx.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
                reply(mess.success)
                }
                break
           case 'افتار': case 'افتار قروب': case 'setgcpp': {
                if (!m.isGroup) return replay(`${mess.group}`)
                if (!isAdmins) return replay(`${mess.admin}`)
                if (!quoted) return replay(`ارسل/رد على صورة مع شرح ${prefix + command}`)
                if (!/image/.test(mime)) return replay(`ارسل/رد على صورة مع شرح ${prefix + command}`)
                if (/webp/.test(mime)) return replay(`ارسل/رد على صورة مع شرح ${prefix + command}`)
                let media = await GojoMdNx.downloadAndSaveMediaMessage(quoted)
                await GojoMdNx.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
                reply(mess.success)
                }
                break
            case 'tagall': case 'منشن جماعي': {
                if (!m.isGroup) return replay(`${mess.group}`)
                if (!isBotAdmins) return replay(`${mess.botAdmin}`)
                if (!isAdmins) return replay(`${mess.admin}`)
let teks = `╚»˙·٠•●♥ المنشن الجماعي ♥●•٠·˙«╝ 
 
 ➲ *Message : ${q ? q : 'اصحو يا اموات'}*\n\n`
                for (let mem of participants) {
                teks += `🐦 @${mem.id.split('@')[0]}\n`
                }
                GojoMdNx.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
                }
                break
                case 'hidetag': case 'المنشن الخفي': {
            if (!m.isGroup) return replay(`${mess.group}`)
            if (!isBotAdmins) return replay(`${mess.botAdmin}`)
            if (!isAdmins) return replay(`${mess.admin}`)
            GojoMdNx.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: m })
            }
            break
	    case 'زخرفة': case 'styletext': {
	        if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) //wont response when limit runs out\\
		db.data.users[m.sender].limit -= 1 // -1 limit
		let { styletext } = require('./lib/scraper')
		if (!text) return replay(`Enter Query Text!`)
                let anu = await styletext(text)
                let teks = `Entered Text ${text}\n\n`
                for (let i of anu) {
                    teks += `🐦 *${i.name}* : ${i.result}\n\n`
                }
                reply(teks)
	    }
	    break
               case 'vote':case 'تصويت': {
            if (!m.isGroup) return replay(`${mess.group}`)
            if (m.chat in vote) replay(`_There Are Still Votes In This Chat!_\n\n*${prefix}delvote* - To Delete Vote Session`)
            if (!text) return replay(`Enter Reason For Vote, Example: *${prefix + command} Handsome Owner*`)
            reply(`Voting Starts!\n\n*${prefix}upvote* - For Upvote\n*${prefix}devote* - For Devote\n*${prefix}checkvote* - To Check The Vote\n*${prefix}delvote* - To Delete Vote Session`)
            vote[m.chat] = [q, [], []]
            await sleep(1000)
            upvote = vote[m.chat][1]
            devote = vote[m.chat][2]
            teks_vote = `*「 VOTE 」*

*Reason:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
┃╠ Total: ${vote[m.chat][1].length}
│
│ 
└────

┌〔 DEVOTE 〕
│ 
┃╠ Total: ${vote[m.chat][2].length}
│
│ 
└────

*${prefix}delvote* - To Delete Vote Session`
let buttonsVote = [
  {buttonId: `${prefix}upvote`, buttonText: {displayText: 'موافق'}, type: 1},
  {buttonId: `${prefix}devote`, buttonText: {displayText: 'غير موافق'}, type: 1}
]

            let buttonMessageVote = {
                text: teks_vote,
                footer: GojoMdNx.user.name,
                buttons: buttonsVote,
                headerType: 1
            }
            GojoMdNx.sendMessage(m.chat, buttonMessageVote)
	    }
            break
               case 'موافق': {
            if (!m.isGroup) return replay(`${mess.group}`)
            if (!(m.chat in vote)) return replay(`_*No Voting In This Group!*_\n\n*${prefix}vote* - To Start Voting`)
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) replay(`You've Voted`)
            vote[m.chat][1].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `*「 VOTE 」*

*Reason:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
┃╠ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `┃╠ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
┃╠ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `┃╠ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}delvote* - To Delete Vote Session`
            let buttonsUpvote = [
              {buttonId: `${prefix}upvote`, buttonText: {displayText: 'موافق'}, type: 1},
              {buttonId: `${prefix}devote`, buttonText: {displayText: 'غير موافق'}, type: 1}
            ]

            let buttonMessageUpvote = {
                text: teks_vote,
                footer: GojoMdNx.user.name,
                buttons: buttonsUpvote,
                headerType: 1,
                mentions: menvote
             }
            GojoMdNx.sendMessage(m.chat, buttonMessageUpvote)
	    }
             break
                case 'غير موافق': {
            if (!m.isGroup) return replay(`${mess.group}`)
            if (!(m.chat in vote)) return replay(`_*No Voting In This Group!*_\n\n*${prefix}vote* - To Start Voting`)
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) return replay(`You've Voted`)
            vote[m.chat][2].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `*「 VOTE 」*

*Reason:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
┃╠ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `┃╠ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
┃╠ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `┃╠ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}delvote* - To Delete Vote Session`
            let buttonsDevote = [
              {buttonId: `${prefix}upvote`, buttonText: {displayText: 'موافق'}, type: 1},
              {buttonId: `${prefix}devote`, buttonText: {displayText: 'غير موافق'}, type: 1}
            ]

            let buttonMessageDevote = {
                text: teks_vote,
                footer: GojoMdNx.user.name,
                buttons: buttonsDevote,
                headerType: 1,
                mentions: menvote
            }
            GojoMdNx.sendMessage(m.chat, buttonMessageDevote)
	}
            break
                 
case 'نتيجة التصويت':
if (!m.isGroup) return replay(`${mess.group}`)
if (!(m.chat in vote)) return replay(`_*No Voting In This Group!*_\n\n*${prefix}vote* - To Start Voting`)
teks_vote = `*「 VOTE 」*

*Reason:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
┃╠ Total: ${upvote.length}
${vote[m.chat][1].map((v, i) => `┃╠ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
┃╠ Total: ${devote.length}
${vote[m.chat][2].map((v, i) => `┃╠ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}delvote* - To Delete Vote Session


©${GojoMdNx.user.id}
`
GojoMdNx.sendTextWithMentions(m.chat, teks_vote, m)
break
		case 'deletevote': case'delvote': case 'حذف التصويت': {
            if (!m.isGroup) return replay(`${mess.group}`)
            if (!(m.chat in vote)) return replay(`_*No Voting In This Group!*_\n\n*${prefix}vote* - To Start Voting`)
            delete vote[m.chat]
            reply('Successfully Deleted The Vote Session In This Group')
	    }
            break
               case 'group': case 'grup': case 'قروب': case 'فتح القروب': case 'اغلاق القروب': {
                if (!m.isGroup) return replay(`${mess.group}`)
                if (!isBotAdmins) return replay(`${mess.botAdmin}`)
                if (!isAdmins) return replay(`${mess.admin}`)
                if (args[0] === 'اغلاق'){
                    await GojoMdNx.groupSettingUpdate(m.chat, 'announcement').then((res) => reply(`تقفل القروب بنجاح`)).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'فتح'){
                    await GojoMdNx.groupSettingUpdate(m.chat, 'not_announcement').then((res) => reply(`تم فتح القروب`)).catch((err) => reply(jsonformat(err)))
                } else {
                let buttons = [
                        { buttonId: 'افتح القروب', buttonText: { displayText: 'فتح' }, type: 1 },
                        { buttonId: 'قفل القروب', buttonText: { displayText: 'اغلاق' }, type: 1 }
                    ]
                    await GojoMdNx.sendButtonText(m.chat, buttons, `هل ترغب باغلاق القروب؟`, GojoMdNx.user.name, m)

             }
            }
            break
            case 'editinfo': case 'اعدادات القروب': {
                if (!m.isGroup) return replay(`${mess.group}`)
                if (!isBotAdmins) return replay(`${mess.botAdmin}`)
                if (!isAdmins) return replay(`${mess.admin}`)
             if (args[0] === 'فتح'){
                await GojoMdNx.groupSettingUpdate(m.chat, 'الغاء القفل').then((res) => reply(`تم فتح تعديل اعدادات القروب`)).catch((err) => reply(jsonformat(err)))
             } else if (args[0] === 'اغلاق'){
                await GojoMdNx.groupSettingUpdate(m.chat, 'قفل').then((res) => reply(`تم اغلاق تعديل اعدادات القروب`)).catch((err) => reply(jsonformat(err)))
             } else {
             let buttons = [
                        { buttonId: 'editinfo open', buttonText: { displayText: 'فتح' }, type: 1 },
                        { buttonId: 'editinfo close', buttonText: { displayText: 'اغلاق' }, type: 1 }
                    ]
                    await GojoMdNx.sendButtonText(m.chat, buttons, `ان كنت ترغب بأن تكون اعدادات المجموعة عامة اضغط فتح وان كنت ترغب بأن تكون خاصة اضغط اغلاق`, GojoMdNx.user.name, m)

            }
            }
            break
            case 'antilink': case 'مضاد الروابط': {
                if (!m.isGroup) return replay(`${mess.group}`)
                if (!isBotAdmins) return replay(`${mess.botAdmin}`)
                if (!isAdmins) return replay(`${mess.admin}`)
                if (args[0] === "يب") {
                if (db.data.chats[m.chat].antilink) return reply(`Activated`)
                db.data.chats[m.chat].antilink = true
                reply(`Antilink Active !`)
                } else if (args[0] === "لا") {
                if (!db.data.chats[m.chat].antilink) return reply(`Deactivated`)
                db.data.chats[m.chat].antilink = false
                reply(`Antilink Inactive !`)
                } else {
                 let buttons = [
                        { buttonId: 'antilink on', buttonText: { displayText: 'فتح' }, type: 1 },
                        { buttonId: 'antilink off', buttonText: { displayText: 'اغلاق' }, type: 1 }
                    ]
                    await GojoMdNx.sendButtonText(m.chat, buttons, `تفعيل وضع مضاد الروابط`, GojoMdNx.user.name, m)
                }
             }
             break
             case 'mute': case 'كتم البوت': {
                if (!m.isGroup) return replay(`${mess.group}`)
                if (!isBotAdmins) return replay(`${mess.botAdmin}`)
                if (!isAdmins) return replay(`${mess.admin}`)
                if (args[0] === "يب") {
                if (db.data.chats[m.chat].mute) return reply(`نشط سابقا`)
                db.data.chats[m.chat].mute = true
                reply(`${GojoMdNx.user.name} البوت انكتم`)
                } else if (args[0] === "لا") {
                if (!db.data.chats[m.chat].mute) return reply(`غير نشط سابقا`)
                db.data.chats[m.chat].mute = false
                reply(`${GojoMdNx.user.name} انشال الكتم عن البوت`)
                } else {
                 let buttons = [
                        { buttonId: 'mute on', buttonText: { displayText: 'يب' }, type: 1 },
                        { buttonId: 'mute off', buttonText: { displayText: 'لا' }, type: 1 }
                    ]
                    await GojoMdNx.sendButtonText(m.chat, buttons, `كتم البوت`, GojoMdNx.user.name, m)
                }
             }
             break
            case 'linkgroup': case 'الرابط': case 'رابط القروب': case 'grouplink': {
                if (!m.isGroup) return replay(`${mess.group}`)
                if (!isBotAdmins) return replay(`${mess.botAdmin}`)
                if (!isAdmins) return replay(`${mess.admin}`)
                let response = await GojoMdNx.groupInviteCode(m.chat)
                GojoMdNx.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\n${groupMetadata.subject} Group Link`, m, { detectLink: true })
            }
                  break
            case 'delete': case 'del': case 'حذف': case 'احذف': {
                if (!m.quoted) reply(false)
                let { chat, fromMe, id, isBaileys } = m.quoted
                if (!isBaileys) return replay(`تسوقها؟ البوت ما يحذف غير رسائله`)
                GojoMdNx.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
            }
            break
            case 'bcgc': case 'bcgroup': case 'رسالة جماعية': case 'رسالة جماعية للقربات': {
                if (!isCreator) return replay(`${mess.owner}`)
                if (!text) return replay(`Where Is The Text?\n\nExample : ${prefix + command} Nexus Handsome`)
                let getGroups = await GojoMdNx.groupFetchAllParticipating()
                let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                let anu = groups.map(v => v.id)
                reply(`اصبر شويتين....`)
                for (let i of anu) {
                    await sleep(1500)
                    let btn = [{
                                    quickReplyButton: {
                                    displayText: 'القائمة',
                                    id: 'الاوامر'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '👤المالك👤',
                                    id: 'المالك'
                                }
                            }]
                      let txt = `「 اوهايو بالليل 」\n\n${text}`
                      GojoMdNx.send5ButImg(i, txt, GojoMdNx.user.name, global.thumb, btn)
                    }
                reply(`تم يا مودير`)
            }
            break
            case 'bc': case 'broadcast': case 'bcall': case 'رسالة جماعية للكل': case 'رسالة جماعية للخاص': {
                if (!isCreator) return replay(`${mess.owner}`)
                if (!text) return replay(`هات النص يا ورع\n\nمثال : ${prefix + command} كيو عمكم`)
                let anu = await store.chats.all().map(v => v.id)
                reply(`انتظر شويتين...`)
		for (let yoi of anu) {
		    await sleep(1500)
		    let btn = [{
                                    quickReplyButton: {
                                    displayText: 'القائمة',
                                    id: 'الاوامر'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '👤المالك👤',
                                    id: 'المالك'
                                }
                            }]
                      let txt = `「 اوهايو بالليل 」\n\n${text}`
                      GojoMdNx.send5ButImg(i, txt, GojoMdNx.user.name, global.thumb, btn)
                    }
                reply(`تم يا مودير`)
            }
            break
            case 'chatinfo': case 'infochat': case 'حالة الرسالة': {
                if (!m.quoted) return reply(`اعمل رد ع رسالة البوت`)
                let msg = await m.getQuotedObj()
                if (!m.quoted.isBaileys) return replay(`يبني ذي لرسائل البوت بس`)
                let teks = ''
                for (let i of msg.userReceipt) {
                    let read = i.readTimestamp
                    let unread = i.receiptTimestamp
                    let waktu = read ? read : unread
                    teks += `🐦 @${i.userJid.split('@')[0]}\n`
                    teks += ` ┗━🐦 *الوقت :* ${moment(waktu * 1000).format('DD/MM/YY HH:mm:ss')} 🐦 *الحالة :* ${read ? 'تمت المشاهدة' : 'تم الارسال'}\n\n`
                }
                GojoMdNx.sendTextWithMentions(m.chat, teks, m)
            }
            break
            case 'q': case 'quoted': case 'اقتباس': case 'اخر رد للبوت': {
		if (!m.quoted) return reply('رد ع رسالة البوت')
		let wokwol = await GojoMdNx.serializeM(await m.getQuotedObj())
		if (!wokwol.quoted) return reply('الرسالة ما فيها رد')
		await wokwol.quoted.copyNForward(m.chat, true)
            }
	    break
            case 'listpc': case 'pclist': case 'مستخدمين البوت بالخاص': {
                 let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
                 let teks = `⬣ *قائمة الدردشة الشخصية*\n\nالعدد الاجمالي : ${anu.length} Chat\n\n`
                 for (let i of anu) {
                     let nama = store.messages[i].array[0].pushName
                     teks += `💫 *الاسم :* ${nama}\n💫 *المنشن :* @${i.split('@')[0]}\n💫 *رابط الواتس :* https://wa.me/${i.split('@')[0]}\n\n────────────────────────\n\n`
                 }
                 GojoMdNx.sendTextWithMentions(m.chat, teks, m)
             }
             break
             case 'tagonline': case 'onlinelistxxx': case 'المتصلين': {
                    let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
                    let online = [...Object.keys(store.presences[id]), botNumber]
                    GojoMdNx.sendText(m.chat, 'Online List:\n\n' + online.map(v => '🐦 @' + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
             }
             break
            case 'sticker': case 's': case 'ملصق': case 'ستيكر': {
            if (!quoted) return replay(`اعمل رد ع فيديو او صورة اول ${prefix + command}`)
            reply(mess.wait)
                    if (/image/.test(mime)) {
                let media = await quoted.download()
                let encmedia = await GojoMdNx.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return reply('اقصى شي 10 ثواني لا تجيب فلم يرحم جدك')
                let media = await quoted.download()
                let encmedia = await GojoMdNx.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else {
                reply(`اعمل رد ع فيديو او صورة+ ${prefix + command}\nجيب فيديو قصير مو فلم`)
                }
            }
            break
                case 'emojimix': case 'دمج ايموجي': case 'دمج': {
	        if (!text) return replay(`مثال : ${prefix + command} 😅+🤔`)
		let [emoji1, emoji2] = text.split`+`
		let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
		for (let res of anu.results) {
		    let encmedia = await GojoMdNx.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		    await fs.unlinkSync(encmedia)
		}
	    }
	    break
            case 'toimage': case 'toimg': case 'لصورة': {
                if (!quoted) return reply(`صورة الرد؟`)
                if (!/webp/.test(mime)) reply(`رد عالستيكر مع الامر *${prefix + command}*`)
                reply(mess.wait)
                let media = await GojoMdNx.downloadAndSaveMediaMessage(quoted)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) reply(err)
                    let buffer = fs.readFileSync(ran)
                    GojoMdNx.sendMessage(m.chat, { image: buffer }, { quoted: m })
                    fs.unlinkSync(ran)
                })
            }
            break
	        case 'tomp4': case 'tovideo': case 'لفيديو': {
                if (!quoted) reply(`Reply Image`)
                if (!/webp/.test(mime)) return replay(`رد عالستيكر مع الامر *${prefix + command}*`)
                reply(mess.wait)
		let { webp2mp4File } = require('./lib/uploader')
                let media = await GojoMdNx.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await GojoMdNx.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
            case 'toaud': case 'toaudio': case 'لصوت': {
            if (!/video/.test(mime) && !/audio/.test(mime)) return replay(`ارسل او رد بالامر ع الفيديو الي تبي تحوله لصوت ${prefix + command}`)
            if (!quoted) return reply(`ارسل او رد بالامر ع الفيديو الي تبي تحوله لصوت ${prefix + command}`)
            reply(mess.wait)
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            GojoMdNx.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
            }
            break
            case 'tomp3': case 'لمقطع صوتي': {
            if (/document/.test(mime)) return reply(`ارسل او رد بالامر ع الفيديو الي تبي تحوله لمقطع صوتي ${prefix + command}`)
            if (!/video/.test(mime) && !/audio/.test(mime)) return replay(`ارسل او رد بالامر ع الفيديو الي تبي تحوله لمقطع صوتي ${prefix + command}`)
            if (!quoted) return replay(`Send/Reply Video/Audio You Want To Convert Into MP3 With Caption ${prefix + command}`)
            reply(mess.wait)
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            GojoMdNx.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Converted By ${GojoMdNx.user.name}.mp3`}, { quoted : m })
            }
            break
            case 'tovn': case 'toptt':case 'ل VN': {
            if (!/video/.test(mime) && !/audio/.test(mime)) return reply(`ارسل او رد بالامر ع الفيديو الي تبي تحوله لVN ${prefix + command}`)
            if (!quoted) return reply(`ارسل او رد بالامر ع الفيديو الي تبي تحوله لVN ${prefix + command}`)
            reply(mess.wait)
            let media = await quoted.download()
            let { toPTT } = require('./lib/converter')
            let audio = await toPTT(media, 'mp4')
            GojoMdNx.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
            }
            break
            case 'togif': case 'لجيف': {
                if (!quoted) return reply(`Reply Image`)
                if (!/webp/.test(mime)) return reply(`رد عالستيكر مع الامر *${prefix + command}*`)
                reply(mess.wait)
		let { webp2mp4File } = require('./lib/uploader')
                let media = await GojoMdNx.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await GojoMdNx.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
	        case 'tourl': case 'لرابط': {
                reply(mess.wait)
		        let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
                let media = await GojoMdNx.downloadAndSaveMediaMessage(quoted)
                if (/image/.test(mime)) {
                    let anu = await TelegraPh(media)
                    reply(util.format(anu))
                } else if (!/image/.test(mime)) {
                    let anu = await UploadFileUgu(media)
                    reply(util.format(anu))
                }
                await fs.unlinkSync(media)
            }
            break
            case 'ازالة الخلفية': case 'removebgxxx': case 'remove-bgxxx': {
	    if (!quoted) return replay(`Send/Reply Image With Caption ${prefix + command}`)
	    if (!/image/.test(mime)) return replay(`رد او ارسل الصورة مع الامر ${prefix + command}`)
	    if (/webp/.test(mime)) return replay(`رد او ارسل الصورة مع الامر ${prefix + command}`)
	    let remobg = require('remove.bg')
	    let apirnobg = ['q61faXzzR5zNU6cvcrwtUkRU','S258diZhcuFJooAtHTaPEn4T','5LjfCVAp4vVNYiTjq9mXJWHF','aT7ibfUsGSwFyjaPZ9eoJc61','BY63t7Vx2tS68YZFY6AJ4HHF','5Gdq1sSWSeyZzPMHqz7ENfi8','86h6d6u4AXrst4BVMD9dzdGZ','xp8pSDavAgfE5XScqXo9UKHF','dWbCoCb3TacCP93imNEcPxcL']
	    let apinobg = apirnobg[Math.floor(Math.random() * apirnobg.length)]
	    hmm = await './src/remobg-'+getRandom('')
	    localFile = await GojoMdNx.downloadAndSaveMediaMessage(quoted, hmm)
	    outputFile = await './src/hremo-'+getRandom('.png')
	    reply(mess.wait)
	    remobg.removeBackgroundFromImageFile({
	      path: localFile,
	      apiKey: apinobg,
	      size: "regular",
	      type: "auto",
	      scale: "100%",
	      outputFile 
	    }).then(async result => {
	    GojoMdNx.sendMessage(m.chat, {image: fs.readFileSync(outputFile), caption: mess.success}, { quoted : m })
	    await fs.unlinkSync(localFile)
	    await fs.unlinkSync(outputFile)
	    })
            }
            break
          case 'img': case 'صورة': {
        if (!text) return reply(`Example : ${prefix + command} gojo`)
        let gis = require('g-i-s')
        gis(text, async (error, result) => {
        n = result
        images = n[Math.floor(Math.random() * n.length)].url
        let buttons = [
                    {buttonId: `gimage ${text}`, buttonText: {displayText: 'الي بعدو'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: images },
                    caption: ` `

                    buttons: buttons,
                    headerType: 4
                }
                GojoMdNx.sendMessage(m.chat, buttonMessage, { quoted: m })
        })
        }
        break
	    case 'play': case 'song': case 'اغنية': {
                if (!text) return reply(`Example : ${prefix + command} Stay`)
                let yts = require("yt-search")
                let search = await yts(text)
                let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
                let buttons = [
                    {buttonId: `ytmp3 ${anu.url}`, buttonText: {displayText: 'صوت'}, type: 1},
                    {buttonId: `ytmp4 ${anu.url}`, buttonText: {displayText: 'فيديو'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: anu.thumbnail },
                    caption: `
 ${anu.title}
مدة المقطع : ${anu.timestamp}
المشاهدات : ${anu.views}
الرابط: ${anu.url}`,
                    footer: GojoMdNx.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                GojoMdNx.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'pinterest': case 'بينتيريست': {
                reply(mess.wait)
		let { pinterest } = require('./lib/scraper')
                anu = await pinterest(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                GojoMdNx.sendMessage(m.chat, { image: { url: result }, caption: '🐦 Media Url : '+result }, { quoted: m })
             }
	     break
                case 'تطقيم':  case 'ppcouple': {
                reply(mess.wait)
                let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                GojoMdNx.sendMessage(m.chat, { image: { url: random.male }, caption: `ولد🙎🏻‍♂️` }, { quoted: m })
                GojoMdNx.sendMessage(m.chat, { image: { url: random.female }, caption: `بنت🙎🏻‍♀️` }, { quoted: m })
            }
	    break
            case 'قهوة': case 'شاي': {
            let buttons = [
                    {buttonId: `coffe`, buttonText: {displayText: 'الي بعدو'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'https://coffee.alexflipnote.dev/random' },
                    caption: `☕`,
                    footer: GojoMdNx.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                GojoMdNx.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'wallpaper': case 'خلفية': {
                if (!text) return reply(`اكتب الخفية الي تبيها`)
		let { wallpaper } = require('./lib/scraper')
                anu = await wallpaper(text)
                result = anu[Math.floor(Math.random() * anu.length)]
		let buttons = [
                    {buttonId: `wallpaper ${text}`, buttonText: {displayText: 'الي بعدو'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.image[0] },
                    caption: ``,
                    footer: GojoMdNx.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                GojoMdNx.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'quotesanime': case 'animequotes': case 'animequote': case 'اقتباس انمي': {
		let { quotesAnime } = require('./lib/scraper')
                let anu = await quotesAnime()
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [
                    {buttonId: `quotesanime`, buttonText: {displayText: 'الي بعدو'}, type: 1}
                ]
                let buttonMessage = {
                    text: `~_${result.quotes}_\n\nBy '${result.karakter}', ${result.anime}\n\n- ${result.up_at}`,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 2
                }
                GojoMdNx.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
                //Backup, for example, the video above doesn't come out\\
		case 'soundcloud': case 'ساوندكلاود': {
                if (!text) return reply(`No Query Title`)
                reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/downloader/soundcloud', { url: isUrl(text)[0] }, 'apikey'))
                let msg = await GojoMdNx.sendImage(m.chat, anu.result.thumb, `🐦 Title : ${anu.result.title}\n🐦 Url : ${isUrl(text)[0]}`)
                GojoMdNx.sendMessage(m.chat, { audio: { url: anu.result.url }, mimetype: 'audio/mpeg', fileName: anu.result.title+'.m4a' }, { quoted: msg })
            }
            break
	        case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'squirrel':
                try {
                let set
                if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
                if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
                if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
                if (/earrape/.test(command)) set = '-af volume=12'
                if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
                if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
                if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
                if (/reverse/.test(command)) set = '-filter_complex "areverse"'
                if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
                if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
                if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
                if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
                if (/audio/.test(mime)) {
                reply(mess.wait)
                let media = await GojoMdNx.downloadAndSaveMediaMessage(quoted)
                let ran = getRandom('.mp3')
                exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) return reply(err)
                let buff = fs.readFileSync(ran)
                GojoMdNx.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
                fs.unlinkSync(ran)
                })
                } else reply(`Reply To The Audio You Want To Change With Caption *${prefix + command}*`)
                } catch (e) {
                reply(e)
                }
                break
            case 'setcmd': {
                if (!m.quoted) return reply(`Reply Message!`)
                if (!m.quoted.fileSha256) return reply(`SHA256 Hash Missing`)
                if (!text) return reply(`For What Command?`)
                let hash = m.quoted.fileSha256.toString('base64')
                if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) return reply(`You Have No Permission To Change This Sticker Command`)
                global.db.data.sticker[hash] = {
                    text,
                    mentionedJid: m.mentionedJid,
                    creator: m.sender,
                    at: + new Date,
                    locked: false,
                }
                reply(`Done!`)
            }
            break
            case 'delcmd': {
                let hash = m.quoted.fileSha256.toString('base64')
                if (!hash) return reply(`No Hashes`)
                if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) return reply(`You Have No Permission To Delete This Sticker Command`)
                delete global.db.data.sticker[hash]
                reply(`Done!`)
            }
            break
            case 'listcmd': {
                let teks = `
*Hash List*
Info: *bold* hash is Locked
${Object.entries(global.db.data.sticker).map(([key, value], index) => `${index + 1}. ${value.locked ? `*${key}*` : key} : ${value.text}`).join('\n')}
`.trim()
                GojoMdNx.sendText(m.chat, teks, m, { mentions: Object.values(global.db.data.sticker).map(x => x.mentionedJid).reduce((a,b) => [...a, ...b], []) })
            }
            break
            case 'lockcmd': {
                if (!isCreator) return replay(`${mess.owner}`)
                if (!m.quoted) return reply(`Reply Message!`)
                if (!m.quoted.fileSha256) return reply(`SHA256 Hash Missing`)
                let hash = m.quoted.fileSha256.toString('base64')
                if (!(hash in global.db.data.sticker)) return reply(`Hash Not Found In Database`)
                global.db.data.sticker[hash].locked = !/^un/i.test(command)
                reply('Done!')
            }
            break
	        case 'public': case 'استخدام عام': {
                if (!isCreator) return replay(`${mess.owner}`)
                GojoMdNx.public = true
                reply('تم تفعيل الاستخدام العام')
            }
            break
            case 'self': case 'استخدام خاص': {
                if (!isCreator) return replay(`${mess.owner}`)
                GojoMdNx.public = false
                reply('تم تفعيل الاستخدام الشخصي')
            }
            break
            case 'ping': case 'botstatus': case 'statusbot': case 'بينق': {
                const used = process.memoryUsage()
                const cpus = os.cpus().map(cpu => {
                    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
			        return cpu
                })
                const cpu = cpus.reduce((last, cpu, _, { length }) => {
                    last.total += cpu.total
                    last.speed += cpu.speed / length
                    last.times.user += cpu.times.user
                    last.times.nice += cpu.times.nice
                    last.times.sys += cpu.times.sys
                    last.times.idle += cpu.times.idle
                    last.times.irq += cpu.times.irq
                    return last
                }, {
                    speed: 0,
                    total: 0,
                    times: {
			            user: 0,
			            nice: 0,
			            sys: 0,
			            idle: 0,
			            irq: 0
                }
                })
                let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
                respon = `
Response Speed ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
                `.trim()
                reply(respon)
            }
            break
            case 'اختبار السرعة': {
            reply('انتظر شويتين...')
            let cp = require('child_process')
            let { promisify } = require('util')
            let exec = promisify(cp.exec).bind(cp)
          let o
          try {
          o = await exec('python speed.py')
          } catch (e) {
          o = e
         } finally {
        let { stdout, stderr } = o
        if (stdout.trim()) reply(stdout)
        if (stderr.trim()) reply(stderr)
            }
            }
            break
            case 'owner': case 'creator': case 'المالك': {
                GojoMdNx.sendContact(m.chat, global.owner, m)
            }
            break
case 'cry':case 'kill':case 'hug':case 'pat':case 'lick':case 'kiss':case 'bite':case 'yeet':case 'neko':case 'bully':case 'bonk':case 'wink':case 'poke':case 'nom':case 'slap':case 'smile':case 'wave':case 'awoo':case 'blush':case 'smug':case 'glomp':case 'happy':case 'dance':case 'cringe':case 'cuddle':case 'highfive':case 'shinobu':case 'megumin':case 'handhold':
					reply(mess.wait)
					axios.get(`https://api.waifu.pics/sfw/${command}`)
					.then(({data}) => {
						GojoMdNx.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
					})
					break
case "setmenuxxx": 
if (!text) return reply("1. image\n2. list\n3. catalog\n\nExample .setmenu image")
if (q == "image") {
typemenu = 'image'
reply("Success Changing Menu To "+q)
} else if (q == "list") {
typemenu = 'list'
reply("Success Changing Menu To "+q)
} else if (q == "catalog") {
typemenu = 'catalog'
reply("Success Changing Menu To "+q)
}

                    break
                     case 'alive': case 'bot': case 'تنشيط': case 'نشط':{
                           	timestampe = speed();
latensie = speed() - timestampe
 anu = ` `
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            hydratedContentText: anu,
                            locationMessage: {
                            jpegThumbnail: fs.readFileSync('https://telegra.ph/file/f237586eed2cf9d345d6e.jpg')},
                            hydratedFooterText: `╮───ء────ء───❖
│「 بوت هيكاري⚡」
╯┬❖ 「${pushname} هلا」
╮┤✑  معك اطلق بوت 
││✑  من مملكة هيكاري⚡
│╯───「استمتع 🦉♥」────❖
│ 「 معلومات البوت 」
│✙ السرعة : ${latensie.toFixed(4)} miliseconds
│✙ وقت التشغيل : ${runtime(process.uptime())}
│✙ اسم البوت : ${global.botname}
│✙ اسم المالك : ${global.ownername}
│✙ رقم المالك : ${global.owner}
│✙ عدد المستخدمين: ${Object.keys(global.db.data.users).length}
╯┬──「 بوت هيكاري⚡」────❖
   │✑  للمزيد اضغط على المربعات في الاسفل
   ╯────── 「 هيكاري⚡」─────❖`,
                            hydratedButtons: [{
                                    quickReplyButton: {
                                    displayText: 'كل الاوامر',
                                    id: `${prefix}allmenu`
                                }
                                }, {
                                quickReplyButton: {
                                    displayText: 'قا~مة الاوامر',
                                    id: `${prefix}command`
                                }
                                }, {
                                quickReplyButton: {
                                    displayText: '👤المالك👤',
                                    id: `${prefix}owner`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat })
                GojoMdNx.relayMessage(m.chat, template.message, { messageId: template.key.id })
                }
break
            case 'list': case 'menu': case 'الاوامر': {
            	timestampe = speed();
latensie = speed() - timestampe
                anu = ``
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            hydratedContentText: anu,
                            locationMessage: {
                            jpegThumbnail: fs.readFileSync('./GojoMedia/gojo.jpg')}, 
                            hydratedFooterText: `
╮───ء────ء───❖
│「 بوت هيكاري⚡」
╯┬❖ 「 ${pushname} هلا」
╮┤✑  معك اطلق بوت 
││✑  من مملكة هيكاري⚡
│╯───「استمتع 🦉♥」────❖
│ 「 معلومات البوت 」
│✙ السرعة : ${latensie.toFixed(4)} miliseconds
│✙ وقت التشغيل : ${runtime(process.uptime())}
│✙ اسم البوت : ${global.botname}
│✙ اسم المالك : ${global.ownername}
│✙ رقم المالك : ${global.owner}
│✙ عدد المستخدمين: ${Object.keys(global.db.data.users).length}
╯┬──「 بوت هيكاري⚡」────❖
   │✑  للمزيد اضغط على المربعات في الاسفل
   ╯────── 「 هيكاري⚡」─────❖`,
                            hydratedButtons: [{
                                    quickReplyButton: {
                                    displayText: 'كل الاوامر',
                                    id: `${prefix}allmenu`
                                }
                                }, {
                                quickReplyButton: {
                                    displayText: 'قائمة الاوامر',
                                    id: `${prefix}command`
                                }
                                }, {
                                quickReplyButton: {
                                    displayText: '👤المالك👤',
                                    id: `${prefix}owner`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat })
                GojoMdNx.relayMessage(m.chat, template.message, { messageId: template.key.id })
                }
                break
                case 'الاوامر': {
let template = await generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                listMessage :{
                    title: `Hi ${pushname}`,
                    description: `اضغط ع القائمة\n\n`,
                    buttonText: "القائمة",
                    footerText: `${global.footer}`,
                    listType: "SINGLE_SELECT",
                    sections: [{
								"title": "قائمة الخيارات",
								"rows": [
									{
										"title": "الاوامر الرئيسية",
										"description": "اوامر البوت الرئيسية",
										"rowId": `${prefix}mainmenu`
									}
								]
							},
							{
								"title": "Bot Features",
								"rows": [
									{
										"title": "كل الاوامر",
										"description": "فيها كل اوامر البوت",
										"rowId": `${prefix}allmenu`
									},
									{
										"title": "اوامر المالك",
										"description": "اوامر بس المالك يقدر يستعملها",
										"rowId": `${prefix}ownermenu`
										},
									{
										"title": "اوامر القروب",
										"description": "الاوامر الخاصة بالقروب",
										"rowId": `${prefix}groupmenu`
										},
									{
										"title": "اوامر الالعاب",
										"description": "فيها اوامر العاب البوت",
										"rowId": `${prefix}rpgmenu`
									},
									{
										"title": "اوامر التنزيل",
										"description": " اوامر تنزيل الوسائط",
										"rowId": `${prefix}downloadmenu`
									},
									{
										"title": "اوامر البحث",
										"description": "اوامر تختص بالبحث",
										"rowId": `${prefix}searchmenu`
									},
									{
											"title": "اوامر عشوائية",
										"description": "Displays The List Of Random Features",
										"rowId": `${prefix}randommenu`
										},
										{
											"title": "Random Anime Menu",
										"description": "Displays The List Of Random Anime Features",
										"rowId": `${prefix}randomanimemenu`
										},
										{
											"title": "اوامر ترفيه",
										"description": "Displays The List Of Fun Features",
										"rowId": `${prefix}funmenu`
										},
										{
											"title": "اوامر تحويل",
										"description": "Displays The List Of Convert Features",
										"rowId": `${prefix}convertmenu`
										},
										{
											"title": "Database Menu",
										"description": "Displays The List Of Database Features",
										"rowId": `${prefix}databasemenu`
										},
										{
											"title": "Voice Changer Menu",
										"description": "Displays The List Of Voice Changing Features",
										"rowId": `${prefix}voicechangermenu`
										},
										{
											"title": "TXT-to-IMG Menu",
										"description": "Displays The List Of Textpro Features",
										"rowId": `${prefix}textpromenu`
										},
										{
											"title": "اوامر اضافية",
										"description": "Displays The List Of Horoscope Features",
										"rowId": `${prefix}horoscopemenu`
										}
								]
							},
							
						],
          listType: 1
                }
            }), {})
            GojoMdNx.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
            break
case 'allmenu': {
  	anu = `
┏━「 *${botname}* 」━━⭓ 
┃╔══☯︎「 الرئيسية 」☯︎
┃╣ نشط
┃╣ اختبار السرعة
┃╣ بينق
┃╣ المالك
┃╣ القائمة
┃╣ حد المستخدم
┃╣ حذف
┃╣ حالة الرسائل
┃╣ اخر رد للبوت
┃╣ مستخدمين البوت خاص
┃╣ مستخدمين البوت بالقروب
┃╠══✪「 OWNER 」 ☯︎
┃╠ ${prefix}chat [option]
┃╠ ${prefix}join [link]
┃╠ ${prefix}leave
┃╠ ${prefix}block [user]
┃╠ ${prefix}unblock [user]
┃╠ ${prefix}bcgroup [text]
┃╠ ${prefix}bcall [text]
┃╠ ${prefix}setppbot [image]
┃╠ ${prefix}setexif
┃╠══✪「 GROUP 」 ☯︎      
┃╠${prefix}grouplink
┃╠${prefix}setgcpp [image]
┃╠${prefix}setname [text]
┃╠${prefix}setdesc [text]
┃╠${prefix}group [text]
┃╠${prefix}editinfo [option]
┃╠${prefix}add [user]
┃╠${prefix}kick [reply/tag]
┃╠${prefix}hidetag [text]
┃╠${prefix}tagall [text]
┃╠${prefix}antilink [on/off]
┃╠${prefix}mute [on/off]
┃╠${prefix}promote [reply/tag]
┃╠${prefix}demote [reply/tag]
┃╠${prefix}vote
┃╠${prefix}devote
┃╠${prefix}upvote
┃╠${prefix}checkvote
┃╠${prefix}delvote
┃╠══✪「 SEARCHER 」 ☯︎
┃╠${prefix}play [query]
┃╠${prefix}song [query]
┃╠${prefix}yts [query]
┃╠${prefix}gimage [query]
┃╠${prefix}pinterest [query]
┃╠${prefix}wallpaper [query]
┃╠══✪「 RANDOM 」☯︎
┃╠${prefix}coffee
┃╠${prefix}animequote (indo)
┃╠${prefix}couplepp
┃╠═✪「 RANDOM ANIME 」☯︎
┃╠${prefix}bully
┃╠${prefix}cuddle
┃╠${prefix}cry
┃╠${prefix}hug
┃╠${prefix}pat
┃╠${prefix}smug
┃╠${prefix}bonk
┃╠${prefix}yeet
┃╠${prefix}blush
┃╠${prefix}smile
┃╠${prefix}wave
┃╠${prefix}highfive
┃╠${prefix}handhold
┃╠${prefix}nom
┃╠${prefix}glomp
┃╠${prefix}bite
┃╠${prefix}slap
┃╠${prefix}kill
┃╠${prefix}happy
┃╠${prefix}wink
┃╠${prefix}poke
┃╠${prefix}dance
┃╠${prefix}cringe
┃╠══✪「 FUN 」 ☯︎
┃╠ ${prefix}couple
┃╠ ${prefix}mysoulmate
┃╠ ${prefix}kind
┃╠ ${prefix}idiot
┃╠ ${prefix}handsome
┃╠ ${prefix}beautiful
┃╠ ${prefix}cute
┃╠ ${prefix}pretty
┃╠ ${prefix}lesbian
┃╠ ${prefix}noob
┃╠ ${prefix}bastard
┃╠ ${prefix}foolish
┃╠ ${prefix}nerd
┃╠ ${prefix}asshole
┃╠ ${prefix}gay
┃╠ ${prefix}smart
┃╠ ${prefix}stubble
┃╠ ${prefix}dog
┃╠ ${prefix}horny
┃╠ ${prefix}cunt
┃╠ ${prefix}wibu
┃╠═══✪「 CONVERTER 」 ☯︎
┃╠ ${prefix}toimage [reply stick]
┃╠ ${prefix}sticker [reply img|gif]
┃╠ ${prefix}emojimix [moji+moji]
┃╠ ${prefix}tovideo [reply img]
┃╠ ${prefix}togif [reply stick]
┃╠ ${prefix}tourl [reply img]
┃╠ ${prefix}tovn [reply aud]
┃╠ ${prefix}tomp3 [reply vn]
┃╠ ${prefix}toaudio [reply vid]
┃╠ ${prefix}styletext [text]
┃╠══✪「 games 」 ☯︎
┃╠ ${prefix}tictactoe
┃╠ ${prefix}delttt
┃╠ ${prefix}suitpvp [tag]
┃╠═✪「 VOICE CHANGER 」☯︎
┃╠${prefix}bass [reply aud]
┃╠${prefix}blown [reply aud]
┃╠${prefix}deep [reply aud]
┃╠${prefix}earrape [reply aud]
┃╠${prefix}fast [reply aud]
┃╠${prefix}fat [reply aud]
┃╠${prefix}nightcore [reply aud]
┃╠${prefix}reverse [reply aud]
┃╠${prefix}robot [reply aud]
┃╠${prefix}slow [reply aud]
┃╠${prefix}squirrel [reply aud]
┃╚═══════✍︎Hikari
┗━「 *Created By ${ownername}*  𖠌」━⭓`
    const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            hydratedContentText: anu,
                            locationMessage: {
                            jpegThumbnail: fs.readFileSync('./GojoMedia/gojo.jpg')},
                            hydratedFooterText: `${pushname}`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: 'YouTube📍',
                                    url: `${myweb}`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '👤Owner👤',
                                    id: `${prefix}owner`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat })
                GojoMdNx.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
break
case 'mainmenu':
var unicorn = await getBuffer(picak+'Main Menu')
await GojoMdNx.send5ButImg(from, `` + '' + ' ', `
┓━「 البوت ${botname} 」━━⭓ 
┃╗═✪「 القائمة الرئيسية 」
┃╣ نشط
┃╣ اختبار السرعة
┃╣ بينق
┃╣ المالك
┃╣ القائمة
┃╣ حد المستخدم
┃╣ حذف
┃╣ حالة الرسائل
┃╣ اخر رد للبوت
┃╣ مستخدمين البوت خاص
┃╣ مستخدمين البوت بالقروب
┃╝═════≪كيو⚡≫═════✪
┛━━「تعال كليوم يا ${pushname} 」━⭓
┗━━「 ${pushname} 」━⭓`,unicorn, [{"urlButton": {"displayText": "👤Owner👤","id": 'owner'}}] )
break
case 'grupmenu': case 'groupmenu':
var unicorn = await getBuffer(picak+'Group Menu')
await GojoMdNx.send5ButImg(from, `` + '' + ' ', `
┓━「 البوت ${botname} 」━━⭓ 
┃╗═✪「 اوامر القروب 」
┃╣ رابط القروب
┃╣ افتار قروب/افتار 「صورة」
┃╣ تغيير الاسم 「نص」
┃╣ تغيير الوصف 「نص」
┃╣ فتح/اغلاق القروب
┃╣ اعدادات القروب
┃╣ اضافة「تاغ/رد」
┃╣ طرد「تاغ/رد」
┃╣ المنشن الجماعي「نص」
┃╣ المنشن الخفي「نص」
┃╣ المتصلين
┃╣ اولافين「لتجنب ازعاج المنشن」
┃╣ مضاد الروابط「تشغيل/ايقاف」
┃╣ كتم البوت「تشغيل/ايقاف」
┃╣ ترقية「تاغ/رد」
┃╣ تخفيض「تاغ/رد」
┃╣ تصويت
┃╣ موافق/غير موافق
┃╣ نتيجة التصويت
┃╣ حذف التصويت
┃╝═════≪كيو⚡≫═════✪
┛━━「تعال كليوم يا ${pushname} 」━⭓
┃╚═════════════✪
┗━━「 هلا ${pushname} 」━⭓`,unicorn, [{"urlButton": {"displayText": "👤Owner👤","id": 'owner'}}] )
break

case 'rpgmenu':
var unicorn = await getBuffer(picak+'Rpg Menu')
await GojoMdNx.send5ButImg(from, `` + '' + ' ', `
┓━「 البوت ${botname} 」━━⭓ 
┃╗═✪「 اوامر الالعاب 」
┃╣ اكس او
┃╣ حذف اكس او
┃╣ حجر ورقة مقص「منشن」
┃╣ رياضيات
┃╝═════≪كيو⚡≫═════✪
┛━━「تعال كليوم يا ${pushname} 」━⭓
┗━━「 ${pushname} 」━⭓`,unicorn, [{"urlButton": {"displayText": "👤Owner👤","id": 'owner'}}] )
break

case 'funmenu':
var unicorn = await getBuffer(picak+'Fun Menu')
await GojoMdNx.send5ButImg(from, `` + '' + ' ', `
┓━「 البوت ${botname} 」━━⭓ 
┃╗═✪「 اوامر الترفيه 」
┃╣ التوأم الروحي
┃╣ تشبيك
┃╣ غبي
┃╣ حمار
┃╣ ذكي
┃╣ منحرف
┃╣ محبوب 
┃╣ كلب
┃╣ احمق
┃╣ قرد
┃╣ كريه
┃╣ مكروه
┃╣ هطف
┃╣ خروف
┃╣ ورع
┃╣ مخادع
┃╣ مظلوم
┃╣ مسكين
┃╣ جميل
┃╣ طيب
┃╣ محترم
┃╣ زفت
┃╣ وصخ
┃╣ حزين
┃╣ مجنون
┃╣ بشع
┃╣ صنم
┃╣ شجاع
┃╣ مضحك
┃╣ مستفز
┃╣ تسس
┃╣ عاقل
┃╣ محتال
┃╣ مؤدب
┃╣ غامض
┃╣ ظالم
┃╣ صادق
┃╣ كذاب
┃╣ بومة
┃╣ حيوان
┃╝═════≪كيو⚡≫═════✪
┛━━「تعال كليوم يا ${pushname} 」━⭓
┃╚═════════════✪
┗━━「 هلا ${pushname} 」━⭓`,unicorn, [{"urlButton": {"displayText": "👤Owner👤","id": 'owner'}}] )break

case 'ownermenu':
var unicorn = await getBuffer(picak+'Owner Menu')
await GojoMdNx.send5ButImg(from, `` + '' + ' ', `
┓━「 البوت ${botname} 」━━⭓ 
┃╗═✪「 اوامر المالك 」
┃╣ محادثة
┃╣ انضمام「رابط」
┃╣ مغادرة「رابط」
┃╣ حظر「مستخدم」
┃╣ الغاءالحظر「مستخدم」
┃╣ رسالة جماعية للقروبات「نص」
┃╣ رسالة جماعية للكل「نص」
┃╣ استخدام عام
┃╣ استخدام خاص
┃╣ خلفية البوت「صورة」
┃╣ رياكشن
┃╣ حقوق الستيكر/حقوق
┃╝═════≪كيو⚡≫═════✪
┛━━「تعال كليوم يا ${pushname} 」━⭓
┃╚═════════════✪
┗━━「 هلا ${pushname} 」━⭓`,unicorn, [{"urlButton": {"displayText": "👤Owner👤","id": 'owner'}}] )
break
case 'searchmenu':
var unicorn = await getBuffer(picak+'Search Menu')
await GojoMdNx.send5ButImg(from, `` + '' + ' ', `
┏━「 ${botname} 」━━⭓ 
┓━「 البوت ${botname} 」━━⭓ 
┃╗═✪「 اوامر البحث والتنزيل 」
┃╣ اغنية/فيديو
┃╣ صورة
┃╣ بينتيريست
┃╣ خلفية
┃╣ شاي/قهوة
┃╣ حذف
┃╣ اقتباس انمي
┃╣ تطقيم
┃╣ ساوند كلاود
┃╝═════≪كيو⚡≫═════✪
┛━━「تعال كليوم يا ${pushname} 」━⭓
┗━━「 ${pushname} 」━⭓`,unicorn, [{"urlButton": {"displayText": "👤Owner👤","id": 'owner'}}] )
break
case 'randomanimemenu':
var unicorn = await getBuffer(picak+'Random Anime Menu')
await GojoMdNx.send5ButImg(from, `` + '' + ' ', ` 
┓━「 البوت ${botname} 」━━⭓ 
┃╗═✪「 ملصقات الانمي 」	        
┃╣ سعيد | happy
┃╣ حزين| cry
┃╣ تربيت | pat
┃╣ حضن | hug
┃╣ كرنج | cringe
┃╣ اليد | handhold
┃╣ عناق | cuddle
┃╣ كئيب | glomp
┃╣ متعجرف | smug
┃╣ صفع | slap
┃╣ قتل | kill
┃╣ خجل | blush
┃╣ ابتسامة | smile
┃╣ يأكل | nom
┃╣ عض | bite
┃╣ يلوح بيده | wave
┃╣ غمزة | wink
┃╣ ضرب | bonk
┃╣ تنمر | bully
┃╝═════≪كيو⚡≫═════✪
┛━━「تعال كليوم يا ${pushname} 」━⭓
┗━━「 ${pushname} 」━⭓`,unicorn, [{"urlButton": {"displayText": "👤Owner👤","id": 'owner'}}] )
break
case 'convertmenu':
var unicorn = await getBuffer(picak+'Converter Menu')
await GojoMdNx.send5ButImg(from, `` + '' + ' ', `
┓━「 البوت ${botname} 」━━⭓ 
┃╗═✪「 اوامر التحويل 」
┃╣ لصورة「ستيكر」
┃╣ ستيكر「صورة او جيف」
┃╣ لفيديو「ستيكر」
┃╣ لجيف「ستيكر」
┃╣ لرابط「صورة」
┃╣ لصوت「فيديو」
┃╣ دمج ايموجي/دمج「ايموجي+ايموجي」
┃╣ ازالة الخلفية「صورة」
┃╣ زخرفة「انجليزي فقط」
┃╝═════≪كيو⚡≫═════✪
┛━━「تعال كليوم يا ${pushname} 」━⭓
┗━━「 ${pushname} 」━⭓`,unicorn, [{"urlButton": {"displayText": "👤Owner👤","id": 'owner'}}] )
break
            default:
                if (budy.startsWith('=>')) {
                    if (!isCreator) return reply(mess.owner)
                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                            if (sat == undefined) {
                                bang = util.format(sul)
                            }
                            reply(bang)
                    }
                    try {
                        reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        reply(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isCreator) return reply(mess.owner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await reply(evaled)
                    } catch (err) {
                        await reply(String(err))
                    }
                }

                if (budy.startsWith('$')) {
                    if (!isCreator) return reply(mess.owner)
                    exec(budy.slice(2), (err, stdout) => {
                        if(err) return reply(err)
                        if (stdout) return reply(stdout)
                    })
                }
			
		if (m.chat.endsWith('@s.whatsapp.net') && isCmd) {
                    this.anonymous = this.anonymous ? this.anonymous : {}
                    let room = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
                    if (room) {
                        if (/^.*(next|leave|start)/.test(m.text)) return
                        if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
                        let other = [room.a, room.b].find(user => user !== m.sender)
                        m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
                            contextInfo: {
                                ...m.msg.contextInfo,
                                forwardingScore: 0,
                                isForwarded: true,
                                participant: other
                            }
                        } : {})
                    }
                    return !0
                }
			
		if (isCmd && budy.toLowerCase() != undefined) {
		    if (m.chat.endsWith('broadcast')) return
		    if (m.isBaileys) return
		    let msgs = global.db.data.database
		    if (!(budy.toLowerCase() in msgs)) return
		    GojoMdNx.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
		}
        }
        

    } catch (err) {
        m.reply(util.format(err))
    }
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
