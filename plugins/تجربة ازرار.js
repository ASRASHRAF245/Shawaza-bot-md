import moment from 'moment-timezone';

let handler = async (m, { conn, args, usedPrefix, command }) => {
  const taguser = '@' + m.sender.split("@s.whatsapp.net")[0];
  const time = moment.tz('Africa/Egypt').format('HH');
  let wib = moment.tz('Africa/Cairo').format('HH:mm:ss');
  let date = new Date().toLocaleDateString('en-EG', { day: 'numeric', month: 'long', year: 'numeric' });

  await conn.sendMessage(m.chat, { react: { text: '📂', key: m.key } });

  // إرسال الرسالة مع الصورة والمعلومات التفاعلية
  await conn.relayMessage(m.chat, {
    image: { url: 'https://telegra.ph/file/a79388f9fa9385f59d6a3.png' }, // قم بوضع رابط الصورة هنا
    caption: `معلومات المستخدم:
اهلا يا ${taguser}
ليفللك: 0
خبرتك: 0
رتبتك: مواطن
ماسك: 20
فلوسك: 15
عملاتك: 2

التوقيت:
التاريخ: ${date}
النشاط: 00:40:25
اليوم: الثلاثاء
الوقت: ${wib}
عدد المستخدمين: 1355
    `,
    footer: 'اختر خيار من القائمة:',
    buttons: [
      {buttonId: '.المطور', buttonText: {displayText: 'المطور'}, type: 1},
      {buttonId: '.الاشتراكات', buttonText: {displayText: 'الاشتراكات'}, type: 1},
      {buttonId: '.الصور', buttonText: {displayText: 'الصور'}, type: 1}
    ],
    headerType: 4 // هذا النوع يمثل رسالة تحتوي على صورة
  });

};

handler.help = ['info'];
handler.tags = ['main'];
handler.command = ['لول'];

export default handler;
