let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems })  => {
const caption =`
『𝑧ₑ𝑧ₒ_𝑏ₒ𝑡』
*· · • • • • ✦ • • • • · ·*
*⌬ ❛╏ اهلا ⁩
*⌬ ❛╏ الوقت:
*⌬ ❛╏ التاريخ:
*⌬ ❛╏ المستخدمين:
*⌬ ❛╏ المنصه ⩾ 𝐻𝐸𝑅𝛩𝐾𝑈
*· · • • • • ✦ • • • • · ·*
`

await conn.sendMessage( m.chat, {
        video: {
          url: ''
       },
        caption: caption,
        gifPlayback: true,
        gifAttribution: Math.floor( Math.random( ) * 2 ) + 1
      }, {
        quoted: m
      } );
}

handler.help = ['allmenu']
handler.tags = ['main']
handler.command = ['قايمه'] 
export default handler
