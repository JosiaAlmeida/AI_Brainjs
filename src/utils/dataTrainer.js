const trainnerData = [
  {
    input: 'Estou feliz',
    output: 'Feliz'
  },
  {
    input: 'Estou triste',
    output: 'Triste'
  },
  {
    input: 'Hoje foi um ótimo dia!',
    output: 'Feliz'
  },
  {
    input: 'Recebi uma notícia triste hoje.',
    output: 'Triste'
  },
  {
    input: 'Essa situação me deixa com muita raiva.',
    output: 'Raiva'
  },
  {
    input: 'Mal posso esperar para a festa de amanhã!',
    output: 'Animado'
  },
  {
    input: 'Ganhei o concurso! Estou super empolgado!',
    output: 'Entusiasmado'
  },
  {
    input: 'O barulho alto me assusta.',
    output: 'Assustado'
  },
  {
    input: 'Finalmente de férias. Hora de relaxar.',
    output: 'Relaxado'
  },
  {
    input: 'Não entendi nada daquela aula. Estou completamente confuso.',
    output: 'Confuso'
  },
  {
    input: 'A surpresa no rosto dela valeu a pena!',
    output: 'Surpreso'
  },
  {
    input: 'Essa fila enorme está me deixando irritado.',
    output: 'Irritado'
  },
  {
    input: 'Estou nervoso com a entrevista de emprego amanhã.',
    output: 'Ansioso'
  },
  {
    input: 'Consegui resolver aquele problema. Estou me sentindo muito contente.',
    output: 'Contente'
  },
  { input: 'Estou tão feliz hoje!', output: 'Feliz' },
  { input: 'Recebi uma ótima notícia!', output: 'Feliz' },
  { input: 'Perdi meu cachorro e estou devastado.', output: 'Triste' },
  { input: 'Meu time ganhou o jogo, estou empolgado!', output: 'Animado' },
  { input: 'Chateado por ter perdido a festa.', output: 'Triste' },
  { input: 'Estou me sentindo perdido ultimamente.', output: 'Triste' },
  { input: 'Tive um dia tranquilo e relaxante.', output: 'Relaxado' },
  { input: 'Essa situação me deixou completamente confuso.', output: 'Confuso' },
  { input: 'Surpresa! Preparativos foram feitos para você.', output: 'Surpreso' },
  { input: 'Estou com tanta raiva dessa injustiça!', output: 'Raiva' },
  { input: 'A ansiedade está me consumindo antes da apresentação.', output: 'Ansioso' },
  { input: 'Passando um tempo maravilhoso com amigos, me sinto alegre.', output: 'Feliz' },
  { input: 'A notícia da promoção me deixou radiante!', output: 'Feliz' },
  { input: 'As constantes mudanças estão me deixando desconfortável.', output: 'Inseguro' },
  { input: 'Estou com medo do que o futuro reserva.', output: 'Assustado' },
  { input: 'Perdi a chave do carro, estou frustrado.', output: 'Frustrado' },
  { input: 'Estou cheio de determinação para alcançar meus objetivos.', output: 'Determinado' },
  { input: 'A tristeza toma conta de mim após a despedida.', output: 'Triste' },
  { input: 'Estou exausto depois de um longo dia de trabalho.', output: 'Cansado' },
  { input: 'A notícia do acidente me deixou angustiado.', output: 'Angustiado' },
  { input: 'A vista do pôr do sol é tão serena, me sinto em paz.', output: 'Paz' },
  { input: 'Estou eufórico por ter vencido o desafio!', output: 'Eufórico' },
  { input: 'Estou com tanto ciúmes dessa conquista.', output: 'Ciúmes' },
  { input: 'O filme de terror me deixou assustado.', output: 'Assustado' },
  { input: 'A surpresa de aniversário me fez chorar de felicidade.', output: 'Feliz' },
  { input: 'A injustiça no mundo me deixa furioso.', output: 'Raiva' },
  { input: 'Estou preocupado com a saúde de um ente querido.', output: 'Preocupado' },
  { input: 'Estou apaixonado, flutuando nas nuvens!', output: 'Apaixonado' },
  { input: 'A incerteza sobre o futuro me deixa ansioso.', output: 'Ansioso' },
  { input: 'A sensação de paz na natureza é revigorante.', output: 'Paz' },
  { input: 'Estou aborrecido por não ter sido convidado.', output: 'Aborrecido' },
  { input: 'A notícia do desastre natural me deixou consternado.', output: 'Consternado' },
  { input: 'Ganhei um prêmio inesperado, estou surpreso!', output: 'Surpreso' },
  { input: 'Estou com tanta preguiça de fazer qualquer coisa.', output: 'Preguiça' },
  { input: 'A decepção é grande após o resultado.', output: 'Decepcionado' },
  { input: 'Estou emocionado por ver minha banda favorita ao vivo.', output: 'Emocionado' },
  { input: 'A discussão acalorada me deixou irritado.', output: 'Irritado' },
  { input: 'Estou com saudade dos velhos tempos.', output: 'Saudade' },
  { input: 'A música triste me fez lembrar das perdas.', output: 'Triste' },
  { input: 'A realização desse projeto me deixou realizado.', output: 'Realizado' },
  { input: 'O elogio do meu chefe aumentou minha autoestima.', output: 'Feliz' },
  { input: 'A injustiça me faz sentir impotente.', output: 'Impotente' },
  { input: 'Estou preocupado com o resultado dos exames.', output: 'Preocupado' },
  { input: 'A comida deliciosa trouxe um sorriso ao meu rosto.', output: 'Feliz' },
  { input: 'Estou com tanto sono que não consigo pensar direito.', output: 'Sonolento' },
  { input: 'A notícia do falecimento me deixou de coração partido.', output: 'Triste' },
  { input: 'Estou aliviado após terminar uma tarefa difícil.', output: 'Aliviado' },
  { input: 'A traição de um amigo me deixou magoado.', output: 'Magoado' },
  { input: 'Estou ansioso para o fim de semana chegar logo.', output: 'Ansioso' },
  { input: 'O elogio falso não me engana, estou desconfiado.', output: 'Desconfiado' },
  { input: 'Estou com tanta fome que sinto que vou desmaiar.', output: 'Faminto' },
  { input: 'A lembrança da infância me traz felicidade.', output: 'Nostálgico' },
  { input: 'A pressão no trabalho está me deixando estressado.', output: 'Estressado' },
  { input: 'Estou com medo de altura, não consigo olhar para baixo.', output: 'Assustado' },
  { input: 'A notícia da gravidez trouxe pura alegria.', output: 'Feliz' },
  { input: 'Estou entusiasmado para começar um novo projeto.', output: 'Animado' },
  { input: 'A perda do jogo me deixou desapontado.', output: 'Desapontado' },
  { input: 'Estou encantado com a beleza desse lugar.', output: 'Fascinado' },
  { input: 'A tristeza toma conta de mim após o término.', output: 'Triste' },
  { input: 'Estou com dor de cabeça, não consigo me concentrar.', output: 'Com dor de cabeça' },
  { input: 'A realização desse projeto me deixou orgulhoso.', output: 'Orgulhoso' },
  { input: 'A tristeza profunda é difícil de suportar.', output: 'Triste' },
  { input: 'Estou com pressa e o trânsito só piora as coisas.', output: 'Irritado' },
  { input: 'A notícia do divórcio me deixou abalado.', output: 'Abalado' },
  { input: 'Estou com tanto calor que não aguento mais.', output: 'Calor' },
  { input: 'A reunião produtiva me deixou satisfeito.', output: 'Satisfeito' },
  { input: 'Estou inseguro sobre minhas habilidades.', output: 'Inseguro' },
  { input: 'A paisagem montanhosa me traz paz interior.', output: 'Paz' },
  { input: 'A notícia do acidente me deixou em choque.', output: 'Chocado' },
  { input: 'Estou empolgado para as férias que se aproximam.', output: 'Animado' },
  { input: 'A crítica injusta me deixou magoado.', output: 'Magoado' },
  { input: 'Estou com tanta ansiedade para a entrevista.', output: 'Ansioso' },
  { input: 'A descoberta de uma traição me deixou arrasado.', output: 'Arrasado' },
  { input: 'Estou extasiado com o nascer do sol na praia.', output: 'Extasiado' },
  { input: 'A situação financeira está me causando estresse.', output: 'Estressado' },
  { input: 'Estou tão cansado que mal consigo ficar de pé.', output: 'Cansado' },
  { input: 'A notícia da doença me deixou preocupado.', output: 'Preocupado' },
  { input: 'Estou com medo do escuro desde criança.', output: 'Assustado' },
  { input: 'A promoção inesperada me deixou radiante!', output: 'Feliz' },
  { input: 'Estou intrigado com esse mistério.', output: 'Intrigado' },
  { input: 'A notícia do assalto me deixou apreensivo.', output: 'Apreensivo' },
  { input: 'Estou empolgado para o encontro de família.', output: 'Animado' },
  { input: 'A injustiça me deixa com raiva.', output: 'Raiva' },
  { input: 'Estou emocionado após a surpresa preparada.', output: 'Emocionado' },
  { input: 'A situação caótica me faz querer fugir.', output: 'Desesperado' },
  { input: 'Estou com tanta alegria que não consigo parar de sorrir.', output: 'Feliz' },
  { input: 'A crítica construtiva me faz querer melhorar.', output: 'Motivado' },
  { input: 'Estou entediado, não tenho nada para fazer.', output: 'Entediado' },
  { input: 'A separação dos pais me deixou devastado.', output: 'Triste' },
  { input: 'Estou ansioso pelo resultado do teste.', output: 'Ansioso' },
  { input: 'A solidão me faz sentir vazio por dentro.', output: 'Solitário' },
  { input: 'Estou exultante com a vitória da equipe.', output: 'Exultante' },
  { input: 'A notícia triste me deixou abatido.', output: 'Triste' },
  { input: 'Estou curioso para saber o que vai acontecer.', output: 'Curioso' },
  { input: 'A briga com o amigo me deixou aborrecido.', output: 'Aborrecido' },
  { input: 'Estou com saudade de casa.', output: 'Saudade' },
  { input: 'A incerteza sobre o futuro me deixa ansioso.', output: 'Ansioso' },
  { input: 'Estou apaixonado por essa nova atividade.', output: 'Apaixonado' },
  { input: 'A rejeição amorosa me deixou com o coração partido.', output: 'Triste' },
  { input: 'Estou aliviado após o término do exame.', output: 'Aliviado' },
  { input: 'A sensação de fracasso é difícil de suportar.', output: 'Triste' },
  { input: 'Estou estressado com a quantidade de trabalho.', output: 'Estressado' },
  { input: 'A notícia da demissão me deixou preocupado.', output: 'Preocupado' },
  { input: 'Estou com medo de altura, não consigo subir.', output: 'Assustado' },
  { input: 'A notícia do nascimento trouxe alegria.', output: 'Feliz' },
  { input: 'Estou entusiasmado para a festa de aniversário.', output: 'Animado' },
  { input: 'A situação injusta no trabalho me deixa irritado.', output: 'Irritado' },
  { input: 'Estou emocionado com o novo começo.', output: 'Emocionado' },
  { input: 'A perda do jogo me deixou desanimado.', output: 'Desanimado' },
  { input: 'Estou maravilhado com a beleza da natureza.', output: 'Maravilhado' },
  { input: 'A lembrança da amizade me traz felicidade.', output: 'Nostálgico' },
  { input: 'Estou estressado com os prazos apertados.', output: 'Estressado' },
  { input: 'A notícia do acidente me deixou apavorado.', output: 'Apavorado' },
  { input: 'Estou ansioso para o final de semana chegar.', output: 'Ansioso' },
  { input: 'A decepção após o resultado é grande.', output: 'Decepcionado' },
  { input: 'Estou com tanto sono que mal consigo ficar acordado.', output: 'Sonolento' },
  { input: 'A reunião produtiva me deixa satisfeito.', output: 'Satisfeito' },
  { input: 'Estou inseguro sobre meu desempenho.', output: 'Inseguro' },
  { input: 'A paisagem montanhosa me traz serenidade.', output: 'Paz' },
  { input: 'A notícia do falecimento me deixou triste.', output: 'Triste' },
  { input: 'Estou com pressa e o trânsito está horrível.', output: 'Irritado' },
  { input: 'A promoção inesperada me deixou emocionado!', output: 'Feliz' },
  { input: 'Estou intrigado com esse enigma.', output: 'Intrigado' },
  { input: 'A notícia do roubo me deixou preocupado.', output: 'Preocupado' },
  { input: 'Estou empolgado para encontrar meus amigos.', output: 'Animado' },
  { input: 'A injustiça me deixa revoltado.', output: 'Raiva' },
  { input: 'Estou emocionado com a surpresa preparada.', output: 'Emocionado' },
  { input: 'A situação caótica me faz querer escapar.', output: 'Desesperado' },
  { input: 'Estou radiante de felicidade.', output: 'Feliz' },
  { input: 'A crítica construtiva me incentiva a melhorar.', output: 'Motivado' },
  { input: 'Estou entediado, sem nada para fazer.', output: 'Entediado' },
  { input: 'A separação dos pais me deixou devastado.', output: 'Triste' },
  { input: 'Estou ansioso pelo resultado do teste.', output: 'Ansioso' },
  { input: 'A solidão me faz sentir vazio por dentro.', output: 'Solitário' },
  { input: 'Estou exultante com a vitória da equipe.', output: 'Exultante' },
  { input: 'A notícia triste me deixou abatido.', output: 'Triste' },
  { input: 'Estou curioso para saber o que vai acontecer.', output: 'Curioso' },
  { input: 'A briga com o amigo me deixou aborrecido.', output: 'Aborrecido' },
  { input: 'Estou com saudade de casa.', output: 'Saudade' },
  { input: 'A incerteza sobre o futuro me deixa ansioso.', output: 'Ansioso' },
  { input: 'Estou apaixonado por essa nova atividade.', output: 'Apaixonado' },
  { input: 'A rejeição amorosa me deixou com o coração partido.', output: 'Triste' },
  { input: 'Estou aliviado após o término do exame.', output: 'Aliviado' },
  { input: 'A sensação de fracasso é difícil de suportar.', output: 'Triste' },
  { input: 'Estou estressado com a quantidade de trabalho.', output: 'Estressado' },
  { input: 'A notícia da demissão me deixou preocupado.', output: 'Preocupado' },
  { input: 'Estou com medo de altura, não consigo subir.', output: 'Assustado' },
  { input: 'A notícia do nascimento trouxe alegria.', output: 'Feliz' },
  { input: 'Estou entusiasmado para a festa de aniversário.', output: 'Animado' },
  { input: 'A situação injusta no trabalho me deixa irritado.', output: 'Irritado' },
  { input: 'Estou emocionado com o novo começo.', output: 'Emocionado' },
  { input: 'A perda do jogo me deixou desanimado.', output: 'Desanimado' },
  { input: 'Estou maravilhado com a beleza da natureza.', output: 'Maravilhado' },
  { input: 'A lembrança da amizade me traz felicidade.', output: 'Nostálgico' },
  { input: 'Estou estressado com os prazos apertados.', output: 'Estressado' },
  { input: 'A notícia do acidente me deixou apavorado.', output: 'Apavorado' },
  { input: 'Estou ansioso para o final de semana chegar.', output: 'Ansioso' },
  { input: 'A decepção após o resultado é grande.', output: 'Decepcionado' },
  { input: 'Estou com tanto sono que mal consigo ficar acordado.', output: 'Sonolento' },
  { input: 'A reunião produtiva me deixa satisfeito.', output: 'Satisfeito' },
  { input: 'Estou inseguro sobre meu desempenho.', output: 'Inseguro' },
  { input: 'A paisagem montanhosa me traz serenidade.', output: 'Paz' },
  { input: 'A notícia do falecimento me deixou triste.', output: 'Triste' },
  { input: 'Estou com pressa e o trânsito está horrível.', output: 'Irritado' },
  { input: 'A promoção inesperada me deixou emocionado!', output: 'Feliz' },
  { input: 'Estou intrigado com esse enigma.', output: 'Intrigado' },
  { input: 'A notícia do roubo me deixou preocupado.', output: 'Preocupado' },
  { input: 'Estou empolgado para encontrar meus amigos.', output: 'Animado' },
  { input: 'A injustiça me deixa revoltado.', output: 'Raiva' },
  { input: 'Estou emocionado com a surpresa preparada.', output: 'Emocionado' },
  { input: 'A situação caótica me faz querer escapar.', output: 'Desesperado' },
  { input: 'Estou radiante de felicidade.', output: 'Feliz' },
  { input: 'A crítica construtiva me incentiva a melhorar.', output: 'Motivado' },
  { input: 'Estou entediado, sem nada para fazer.', output: 'Entediado' },
  { input: 'A separação dos pais me deixou devastado.', output: 'Triste' },
  { input: 'Estou ansioso pelo resultado do teste.', output: 'Ansioso' },
  { input: 'A solidão me faz sentir vazio por dentro.', output: 'Solitário' },
  { input: 'Estou exultante com a vitória da equipe.', output: 'Exultante' },
  { input: 'A notícia triste me deixou abatido.', output: 'Triste' },
  { input: 'Estou curioso para saber o que vai acontecer.', output: 'Curioso' },
  { input: 'A briga com o amigo me deixou aborrecido.', output: 'Aborrecido' },
  { input: 'Estou com saudade de casa.', output: 'Saudade' },
  { input: 'A incerteza sobre o futuro me deixa ansioso.', output: 'Ansioso' },
  { input: 'Estou apaixonado por essa nova atividade.', output: 'Apaixonado' },
  { input: 'A rejeição amorosa me deixou com o coração partido.', output: 'Triste' },
  { input: 'Estou aliviado após o término do exame.', output: 'Aliviado' },
  { input: 'A sensação de fracasso é difícil de suportar.', output: 'Triste' },
  { input: 'Estou estressado com a quantidade de trabalho.', output: 'Estressado' },
  { input: 'A notícia da demissão me deixou preocupado.', output: 'Preocupado' },
  { input: 'Estou com medo de altura, não consigo subir.', output: 'Assustado' },
  { input: 'A notícia do nascimento trouxe alegria.', output: 'Feliz' },
  { input: 'Estou entusiasmado para a festa de aniversário.', output: 'Animado' },
  { input: 'A situação injusta no trabalho me deixa irritado.', output: 'Irritado' },
  { input: 'Estou emocionado com o novo começo.', output: 'Emocionado' },
  { input: 'A perda do jogo me deixou desanimado.', output: 'Desanimado' },
  { input: 'Estou maravilhado com a beleza da natureza.', output: 'Maravilhado' },
  { input: 'A lembrança da amizade me traz felicidade.', output: 'Nostálgico' },
  { input: 'Estou estressado com os prazos apertados.', output: 'Estressado' },
  { input: 'A notícia do acidente me deixou apavorado.', output: 'Apavorado' },
  { input: 'Estou ansioso para o final de semana chegar.', output: 'Ansioso' },
  { input: 'A decepção após o resultado é grande.', output: 'Decepcionado' },
  { input: 'Estou com tanto sono que mal consigo ficar acordado.', output: 'Sonolento' },
  { input: 'A reunião produtiva me deixa satisfeito.', output: 'Satisfeito' },
  { input: 'Estou inseguro sobre meu desempenho.', output: 'Inseguro' },
  { input: 'A paisagem montanhosa me traz serenidade.', output: 'Paz' },
  { input: 'A notícia do falecimento me deixou triste.', output: 'Triste' },
  { input: 'Estou com pressa e o trânsito está horrível.', output: 'Irritado' },
  { input: 'A promoção inesperada me deixou emocionado!', output: 'Feliz' },
  { input: 'Estou intrigado com esse enigma.', output: 'Intrigado' },
  { input: 'A notícia do roubo me deixou preocupado.', output: 'Preocupado' },
  { input: 'Estou empolgado para encontrar meus amigos.', output: 'Animado' },
  { input: 'A injustiça me deixa revoltado.', output: 'Raiva' },
  { input: 'Estou emocionado com a surpresa preparada.', output: 'Emocionado' },
  { input: 'A situação caótica me faz querer escapar.', output: 'Desesperado' },
  { input: 'Estou radiante de felicidade.', output: 'Feliz' },
  { input: 'A crítica construtiva me incentiva a melhorar.', output: 'Motivado' },
  { input: 'Estou entediado, sem nada para fazer.', output: 'Entediado' },
  { input: 'A separação dos pais me deixou devastado.', output: 'Triste' },
  { input: 'Estou ansioso pelo resultado do teste.', output: 'Ansioso' },
  { input: 'A solidão me faz sentir vazio por dentro.', output: 'Solitário' },
  { input: 'Estou exultante com a vitória da equipe.', output: 'Exultante' },
  { input: 'A notícia triste me deixou abatido.', output: 'Triste' },
  { input: 'Estou curioso para saber o que vai acontecer.', output: 'Curioso' },
  { input: 'A briga com o amigo me deixou aborrecido.', output: 'Aborrecido' },
  { input: 'Estou com saudade de casa.', output: 'Saudade' },
  { input: 'A incerteza sobre o futuro me deixa ansioso.', output: 'Ansioso' },
  { input: 'Estou apaixonado por essa nova atividade.', output: 'Apaixonado' },
  { input: 'A rejeição amorosa me deixou com o coração partido.', output: 'Triste' },
  { input: 'Estou aliviado após o término do exame.', output: 'Aliviado' },
  { input: 'A sensação de fracasso é difícil de suportar.', output: 'Triste' },
  { input: 'Estou estressado com a quantidade de trabalho.', output: 'Estressado' },
  { input: 'A notícia da demissão me deixou preocupado.', output: 'Preocupado' },
  { input: 'Estou com medo de altura, não consigo subir.', output: 'Assustado' },
  { input: 'A notícia do nascimento trouxe alegria.', output: 'Feliz' },
  { input: 'Estou entusiasmado para a festa de aniversário.', output: 'Animado' },
  { input: 'A situação injusta no trabalho me deixa irritado.', output: 'Irritado' },
  { input: 'Estou emocionado com o novo começo.', output: 'Emocionado' },
  { input: 'A perda do jogo me deixou desanimado.', output: 'Desanimado' },
  { input: 'Estou maravilhado com a beleza da natureza.', output: 'Maravilhado' },
  { input: 'A lembrança da amizade me traz felicidade.', output: 'Nostálgico' },
  { input: 'Estou estressado com os prazos apertados.', output: 'Estressado' },
  { input: 'A notícia do acidente me deixou apavorado.', output: 'Apavorado' },
  { input: 'Estou ansioso para o final de semana chegar.', output: 'Ansioso' },
  { input: 'A decepção após o resultado é grande.', output: 'Decepcionado' },
  { input: 'Estou com tanto sono que mal consigo ficar acordado.', output: 'Sonolento' },
  { input: 'A reunião produtiva me deixa satisfeito.', output: 'Satisfeito' },
  { input: 'Estou inseguro sobre meu desempenho.', output: 'Inseguro' },
  { input: 'A paisagem montanhosa me traz serenidade.', output: 'Paz' },
  { input: 'A notícia do falecimento me deixou triste.', output: 'Triste' },
  { input: 'Estou com pressa e o trânsito está horrível.', output: 'Irritado' },
  { input: 'A promoção inesperada me deixou emocionado!', output: 'Feliz' },
  { input: 'Estou intrigado com esse enigma.', output: 'Intrigado' },
  { input: 'A notícia do roubo me deixou preocupado.', output: 'Preocupado' },
  { input: 'Estou empolgado para encontrar meus amigos.', output: 'Animado' },
  { input: 'A injustiça me deixa revoltado.', output: 'Raiva' },
  { input: 'Estou emocionado com a surpresa preparada.', output: 'Emocionado' },
  { input: 'A situação caótica me faz querer escapar.', output: 'Desesperado' },
  { input: 'Estou radiante de felicidade.', output: 'Feliz' },
  { input: 'A crítica construtiva me incentiva a melhorar.', output: 'Motivado' },
  { input: 'Estou entediado, sem nada para fazer.', output: 'Entediado' },
  { input: 'A separação dos pais me deixou devastado.', output: 'Triste' },
  { input: 'Estou ansioso pelo resultado do teste.', output: 'Ansioso' },
  { input: 'A solidão me faz sentir vazio por dentro.', output: 'Solitário' },
  { input: 'Estou exultante com a vitória da equipe.', output: 'Exultante' },
  { input: 'A notícia triste me deixou abatido.', output: 'Triste' },
  { input: 'Estou curioso para saber o que vai acontecer.', output: 'Curioso' },
  { input: 'A briga com o amigo me deixou aborrecido.', output: 'Aborrecido' },
  { input: 'Estou com saudade de casa.', output: 'Saudade' },
  { input: 'A incerteza sobre o futuro me deixa ansioso.', output: 'Ansioso' },
  { input: 'Estou apaixonado por essa nova atividade.', output: 'Apaixonado' },
  { input: 'A rejeição amorosa me deixou com o coração partido.', output: 'Triste' },
  { input: 'Estou aliviado após o término do exame.', output: 'Aliviado' },
  { input: 'A sensação de fracasso é difícil de suportar.', output: 'Triste' },
  { input: 'Estou estressado com a quantidade de trabalho.', output: 'Estressado' },
  { input: 'A notícia da demissão me deixou preocupado.', output: 'Preocupado' },
  { input: 'Estou com medo de altura, não consigo subir.', output: 'Assustado' },
  { input: 'A notícia do nascimento trouxe alegria.', output: 'Feliz' },
  { input: 'Estou entusiasmado para a festa de aniversário.', output: 'Animado' },
  { input: 'A situação injusta no trabalho me deixa irritado.', output: 'Irritado' },
  { input: 'Estou emocionado com o novo começo.', output: 'Emocionado' },
  { input: 'A perda do jogo me deixou desanimado.', output: 'Desanimado' },
  { input: 'Estou maravilhado com a beleza da natureza.', output: 'Maravilhado' },
  { input: 'A lembrança da amizade me traz felicidade.', output: 'Nostálgico' },
  { input: 'Estou estressado com os prazos apertados.', output: 'Estressado' },
  { input: 'A notícia do acidente me deixou apavorado.', output: 'Apavorado' },
  { input: 'Estou ansioso para o final de semana chegar.', output: 'Ansioso' },
  { input: 'A decepção após o resultado é grande.', output: 'Decepcionado' },
  { input: 'Estou com tanto sono que mal consigo ficar acordado.', output: 'Sonolento' },
  { input: 'A reunião produtiva me deixa satisfeito.', output: 'Satisfeito' },
  { input: 'Estou inseguro sobre meu desempenho.', output: 'Inseguro' },
  { input: 'A paisagem montanhosa me traz serenidade.', output: 'Paz' },
  { input: 'A notícia do falecimento me deixou triste.', output: 'Triste' },
  { input: 'Estou com pressa e o trânsito está horrível.', output: 'Irritado' },
  { input: 'A promoção inesperada me deixou emocionado!', output: 'Feliz' },
  { input: 'Estou intrigado com esse enigma.', output: 'Intrigado' },
  { input: 'A notícia do roubo me deixou preocupado.', output: 'Preocupado' },
  { input: 'Estou empolgado para encontrar meus amigos.', output: 'Animado' },
  { input: 'A injustiça me deixa revoltado.', output: 'Raiva' },
  { input: 'Estou emocionado com a surpresa preparada.', output: 'Emocionado' },
  { input: 'A situação caótica me faz querer escapar.', output: 'Desesperado' },
  { input: 'Estou radiante de felicidade.', output: 'Feliz' },
  { input: 'A crítica construtiva me incentiva a melhorar.', output: 'Motivado' },
  { input: 'Estou entediado, sem nada para fazer.', output: 'Entediado' },
  { input: 'A separação dos pais me deixou devastado.', output: 'Triste' },
  { input: 'Estou ansioso pelo resultado do teste.', output: 'Ansioso' },
  { input: 'A solidão me faz sentir vazio por dentro.', output: 'Solitário' },
  { input: 'Estou exultante com a vitória da equipe.', output: 'Exultante' },
  { input: 'A notícia triste me deixou abatido.', output: 'Triste' },
  { input: 'Estou curioso para saber o que vai acontecer.', output: 'Curioso' },
  { input: 'A briga com o amigo me deixou aborrecido.', output: 'Aborrecido' },
  { input: 'Estou com saudade de casa.', output: 'Saudade' },
  { input: 'A incerteza sobre o futuro me deixa ansioso.', output: 'Ansioso' },
  { input: 'Estou apaixonado por essa nova atividade.', output: 'Apaixonado' },
  { input: 'A rejeição amorosa me deixou com o coração partido.', output: 'Triste' },
  { input: 'Estou aliviado após o término do exame.', output: 'Aliviado' },
  { input: 'A sensação de fracasso é difícil de suportar.', output: 'Triste' },
  { input: 'Estou estressado com a quantidade de trabalho.', output: 'Estressado' },
  { input: 'A notícia da demissão me deixou preocupado.', output: 'Preocupado' },
  { input: 'Estou com medo de altura, não consigo subir.', output: 'Assustado' },
  { input: 'A notícia do nascimento trouxe alegria.', output: 'Feliz' },
  { input: 'Estou entusiasmado para a festa de aniversário.', output: 'Animado' },
  { input: 'A situação injusta no trabalho me deixa irritado.', output: 'Irritado' },
  { input: 'Estou emocionado com o novo começo.', output: 'Emocionado' },
  { input: 'A perda do jogo me deixou desanimado.', output: 'Desanimado' },
  { input: 'Estou maravilhado com a beleza da natureza.', output: 'Maravilhado' },
  { input: 'A lembrança da amizade me traz felicidade.', output: 'Nostálgico' },
  { input: 'Estou estressado com os prazos apertados.', output: 'Estressado' },
  { input: 'A notícia do acidente me deixou apavorado.', output: 'Apavorado' },
  { input: 'Estou ansioso para o final de semana chegar.', output: 'Ansioso' },
  { input: 'A decepção após o resultado é grande.', output: 'Decepcionado' },
  { input: 'Estou com tanto sono que mal consigo ficar acordado.', output: 'Sonolento' },
  { input: 'A reunião produtiva me deixa satisfeito.', output: 'Satisfeito' },
  { input: 'Estou inseguro sobre meu desempenho.', output: 'Inseguro' },
  { input: 'A paisagem montanhosa me traz serenidade.', output: 'Paz' },
  { input: 'A notícia do falecimento me deixou triste.', output: 'Triste' },
  { input: 'Estou com pressa e o trânsito está horrível.', output: 'Irritado' },
  { input: 'A promoção inesperada me deixou emocionado!', output: 'Feliz' },
  { input: 'Estou intrigado com esse enigma.', output: 'Intrigado' },
  { input: 'A notícia do roubo me deixou preocupado.', output: 'Preocupado' },
  { input: 'Estou empolgado para encontrar meus amigos.', output: 'Animado' },
  { input: 'A injustiça me deixa revoltado.', output: 'Raiva' },
  { input: 'Estou emocionado com a surpresa preparada.', output: 'Emocionado' },
  { input: 'A situação caótica me faz querer escapar.', output: 'Desesperado' },
  { input: 'Estou radiante de felicidade.', output: 'Feliz' },
  { input: 'A crítica construtiva me incentiva a melhorar.', output: 'Motivado' },
  { input: 'Estou entediado, sem nada para fazer.', output: 'Entediado' },
  { input: 'A separação dos pais me deixou devastado.', output: 'Triste' },
  { input: 'Estou ansioso pelo resultado do teste.', output: 'Ansioso' },
  { input: 'A solidão me faz sentir vazio por dentro.', output: 'Solitário' },
  { input: 'Estou exultante com a vitória da equipe.', output: 'Exultante' },
  { input: 'A notícia triste me deixou abatido.', output: 'Triste' },
  { input: 'Estou curioso para saber o que vai acontecer.', output: 'Curioso' },
  { input: 'A briga com o amigo me deixou aborrecido.', output: 'Aborrecido' },
  { input: 'Estou com saudade de casa.', output: 'Saudade' },
  { input: 'A incerteza sobre o futuro me deixa ansioso.', output: 'Ansioso' },
  { input: 'Estou apaixonado por essa nova atividade.', output: 'Apaixonado' },
  { input: 'A rejeição amorosa me deixou com o coração partido.', output: 'Triste' },
  { input: 'Estou aliviado após o término do exame.', output: 'Aliviado' },
  { input: 'A sensação de fracasso é difícil de suportar.', output: 'Triste' },
  { input: 'Estou estressado com a quantidade de trabalho.', output: 'Estressado' },
  { input: 'A notícia da demissão me deixou preocupado.', output: 'Preocupado' },
  { input: 'Estou com medo de altura, não consigo subir.', output: 'Assustado' },
  { input: 'A notícia do nascimento trouxe alegria.', output: 'Feliz' },
  { input: 'Estou entusiasmado para a festa de aniversário.', output: 'Animado' },
  { input: 'A situação injusta no trabalho me deixa irritado.', output: 'Irritado' },
  { input: 'Estou emocionado com o novo começo.', output: 'Emocionado' },
  { input: 'A perda do jogo me deixou desanimado.', output: 'Desanimado' },
  { input: 'Estou maravilhado com a beleza da natureza.', output: 'Maravilhado' },
  { input: 'A lembrança da amizade me traz felicidade.', output: 'Nostálgico' },
  { input: 'Estou estressado com os prazos apertados.', output: 'Estressado' },
  { input: 'A notícia do acidente me deixou apavorado.', output: 'Apavorado' },
  { input: 'Estou ansioso para o final de semana chegar.', output: 'Ansioso' },
  { input: 'A decepção após o resultado é grande.', output: 'Decepcionado' },
  { input: 'Estou com tanto sono que mal consigo ficar acordado.', output: 'Sonolento' },
  { input: 'A reunião produtiva me deixa satisfeito.', output: 'Satisfeito' }

]

module.exports = { trainnerData }