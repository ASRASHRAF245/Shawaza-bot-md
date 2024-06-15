import fetch from 'node-fetch';

const apiKey = 'AIzaSyAj0oG342v6Js1FzpK7HCqe6iMFeHM28Pw'; // تم تضمين مفتاح API الخاص بك

async function searchYouTube(query) {
  const response = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&type=video&key=${apiKey}`);
  const data = await response.json();
  return data.items;
}

let handler = async (m, { conn, text }) => {
  try {
    if (!text) {
      await conn.sendMessage(m.chat, { text: 'يرجى تقديم النص الذي تريد البحث عنه.' }, { quoted: m });
      return;
    }

    const searchQuery = text; // استخدم النص المدخل كمصطلح بحث
    const videos = await searchYouTube(searchQuery);

    if (videos.length > 0) {
      const randomVideo = videos[Math.floor(Math.random() * videos.length)];
      const videoUrl = `https://www.youtube.com/watch?v=${randomVideo.id.videoId}`;

      await conn.sendMessage(m.chat, { text: videoUrl }, { quoted: m });
      await conn.sendMessage(m.chat, { react: { text: '🎞', key: m.key } });
    } else {
      await conn.sendMessage(m.chat, { text: 'لم يتم العثور على فيديوهات.' }, { quoted: m });
    }
  } catch (error) {
    console.error(error);
    await conn.sendMessage(m.chat, { text: 'حدث خطأ أثناء البحث عن الفيديوهات.' }, { quoted: m });
  }
};

handler.help = ['dado']
handler.tags = ['game']
handler.command = ['ايديت', 'اديت']

export default handler;
