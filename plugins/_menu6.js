const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];
let handler = async (m, { command, text }) => m.reply(`
*⟣┈┈┈┈┈┈⟢┈┈┈⟣┈┈┈┈┈┈┈⟢*
*⩥🎙️│${taguser}│📽️⩤* *مرحبا*
*⟣┈┈┈┈┈┈⟢┈┈┈⟣┈┈┈┈┈┈┈⟢*
          *⩥🎙️│الـتـنزيـلات│📽️⩤*
*⟣┈┈┈┈┈┈⟢┈┈┈⟣┈┈┈┈┈┈┈⟢*
*│✮ ⃟📻❯ .اغنيه*
*│✮ ⃟📽️❯ .فيديو*
*│✮ ⃟🎥❯ .يوتيوب*
*│✮ ⃟🧸❯ .انستجرام*
*│✮ ⃟📱❯ .مود*
*│✮ ⃟📱❯ .تطبيق*
*│✮ ⃟📷❯ .صوره*
*│✮ ⃟🌅❯ .خلفيات*
*│✮ ⃟🎵❯ .تيك*
*⟣┈┈┈┈┈┈⟢┈┈┈⟣┈┈┈┈┈┈┈⟢*`.trim(), null, m.mentionedJid ? {
  mentions: m.mentionedJid
} : {})

handler.help = ['الاوامر <teks>?']
handler.tags = ['الاوامر', 'fun']
handler.command = /^(1)$/i

export default handler
