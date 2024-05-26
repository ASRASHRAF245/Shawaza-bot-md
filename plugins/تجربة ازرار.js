let handler = async (m, { conn, args, usedPrefix, command }) => {
  const taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
  const time = moment.tz('Africa/Egypt').format('HH')
  let wib = moment.tz('Africa/Egypt').format('HH:mm:ss')
  let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })

  conn.relayMessage(m.chat, {
    viewOnceMessage: {
      message: {
        interactiveMessage: {
          header: {
            title: `┈┈┈┈┈⟢┈┈┈⟣┈┈┈┈┈┈┈⟢
*🐉✬⃝╿↵ مرحــبـا ⌊ ${m.pushName} ⌉*
── • ◈ • ──
https://telegra.ph/file/aa3da4c558a6975817eb7.png`,
            image: {
              link: 'https://telegra.ph/file/aa3da4c558a6975817eb7.png',
                  }
          },
          body: {
            text: '> اذا واجهتك مشكله اكتب ابلاغ واكتب رسالتك\n> ➳ᴹᴿ᭄𝒁𝒆𝒛𝒐➳ᴹᴿ᭄'
          },
          nativeFlowMessage: {
            buttons: [
              {
                name: 'single_select',
                buttonParamsJson: JSON.stringify({
                  title: 'اضغط',
                  sections: [
                    {
                      title: 'قوائم',
                      highlight_label: 'new',
                      rows: [
                        {
                          header: 'info',
                          title: '⌬ ❛╏المطور',
                          description: '',
                          id: '.المطور'
                        },
                        {
                          header: 'قوائم',
                          title: '⌬ ❛╏التنزيلات',
                          description: '',
                          id: '.4',
                        },
                        {
                          header: 'قوائم',
                          title: '⌬ ❛╏قائمه الجروب',
                          description: '',
                          id: '.5',
                        },
                        {
                          header: 'قوائم',
                          title: '⌬ ❛╏الالعاب',
                          description: '',
                          id: '.6',
                        },

                        {
                          header: 'قوائم',
                          title: '⌬ ❛╏الالعاب',
                          description: '',
                          id: '.6',
                        },

                        {
                          header: 'كل الاوامر',
                          title: '⌬ ❛╏قائمة الاوامر',
                          description: '',
                          id: '.10',
                        },
                      ]
                    }
                  ]
                }),
                messageParamsJson: 'ZEZO bot'
              }
            ]
          }
        }
      }
    }
  }, {})
}

handler.help = ['info']
handler.tags = ['main']
handler.command = ['لول']

export default handler
