import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { name, telegram } = await req.json(); 
  const BOT_TOKEN = 'YOUR_BOT_TOKEN';

  const CHAT_ID = 'YOUR_CHAT_ID';

  const message = `Имя: ${name}\nTelegram: ${telegram}`;

  const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

  try {
    // Отправляем POST-запрос в Telegram API
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: message,
      }),
    });

    const data = await response.json();

    if (data.ok) {
      return NextResponse.json({ success: true, message: 'Сообщение отправлено!' });
    } else {
      return NextResponse.json({ success: false, message: 'Ошибка отправки сообщения' }, { status: 500 });
    }
  } catch (error) {
    console.error('Ошибка:', error);

    if (error instanceof Error) {
      return NextResponse.json(
        { success: false, message: error.message },
        { status: 500 }
      );
    } else {
      return NextResponse.json(
        { success: false, message: 'Неизвестная ошибка' },
        { status: 500 }
      );
    }
  }
}