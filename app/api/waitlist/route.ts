import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    // Validação básica
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: 'Email inválido' },
        { status: 400 }
      );
    }

    // TODO: Implementar integração com Resend ou outro serviço de email
    // Por enquanto, apenas loga no console
    console.log('📧 Novo email na waitlist:', email);

    // Aqui você pode:
    // 1. Salvar em banco de dados (Supabase, Firebase, etc)
    // 2. Enviar para planilha do Google Sheets
    // 3. Integrar com Resend para enviar email de confirmação
    // 4. Adicionar a uma lista de mailing (Mailchimp, SendGrid, etc)

    return NextResponse.json(
      { success: true, message: 'Email cadastrado com sucesso!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Erro ao processar waitlist:', error);
    return NextResponse.json(
      { error: 'Erro ao processar requisição' },
      { status: 500 }
    );
  }
}
