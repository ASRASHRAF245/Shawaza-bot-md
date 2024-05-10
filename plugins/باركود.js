import { toDataURL } from 'qrcode'
let handler = async (m, { text, conn }) => {
if (!text) throw `*حط اانص االي عايز تحولو لكود بعد الامر\n\nمثال\n\n.كود زيزو بوت*`
conn.sendFile(m.chat, await toDataURL(text.slice(0, 2048), { scale: 8 }), 'qrcode.png', 'BY:𝑧ₑ𝑧ₒ_𝑏ₒ𝑡', m)
}
handler.help = ['', 'code'].map(v => 'qr' + v + ' <teks>')
handler.tags = ['tools']
handler.command = /^qr(code)?|كود|باركود$/i
export default handler
