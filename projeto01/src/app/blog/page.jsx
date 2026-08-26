import CardNoticias from "@/components/cardNoticias";

export default function Noticias() {

  const listaNoticias = [
    {
      titulo: "Enchente deixa ao menos 157 mortos e centenas de desaparecidos no Nepal e no Tibete",
      imagem: "enchente.png",
      descricao: "Ao menos 157 corpos foram recuperados após inundações torrenciais nas áreas fronteiriças do Himalaia, entre o Nepal e a região do Tibete, na China, nesta quarta-feira (26). As informações são das polícia nepalesa.Do lado da China, autoridades confirmaram três mortos e 265 desaparecidos após um deslizamento de terra. Quase 400 viajantes, incluindo centenas de estrangeiros, foram dados como desaparecidos. Um registro preliminar por agência, recebido de empresas de turismo e viagens, identificou 384 viajantes, incluindo 291  estrangeiros e 93 cidadãos nepaleses, que foram dados como desaparecidos nas áreas afetadas, publicou o conselho de turismo do Nepal em um comunicado no X",
      data: "26/08/26"
    },

    {
      titulo: "Mala com R$ 510 mil apreendida em aeroporto pertence à filiada ao PSD",
      imagem: "dinheiro.png",
      descricao: "A quantia de R$ 510 mil apreendida pela PF (Polícia Federal) em uma mala no Aeroporto de Congonhas, em São Paulo, na terça-feira (25) pertence à advogada Valéria Rodrigues Linhares, ex-candidata a deputada distrital pelo PSD no Distrito Federal.   Ela teve 1.904 votos na eleição de 2018 e não foi eleita. A passageira continua filiada ao partido comandado por Gilberto Kassab, candidato a vice-presidente na chapa de Ronaldo Caiado (PSD)    A quantia foi localizada quando Valéria passava pelo raio-x do local. De acordo com informações da PF, ela afirmou ter R$ 400 mil na mala, mas, ao abrir e checar, os agentes contaram R$ 510 mil. O dinheiro não declarado foi apreendido.",
      data: "25/08/26"
    },

    {
      titulo: "Ex-dono da Reag entrega proposta de delação à PGR e deve implicar Vorcaro",
      imagem: "reag.png",
      descricao: "O ex-dono do grupo Reag, João Carlos Mansur, entregou à Procuradoria-Geral da República (PGR) uma proposta de colaboração premiada em que detalha a estrutura financeira montada em parceria com Daniel Vorcaro para maquiar a realidade financeira do Banco Master e desviar recursos.Além do caso ligado ao Master, a Reag, que era uma administradora de fundos de investimentos, também foi alvo da Polícia Federal na Operação Carbono Oculto.A PF suspeita que a instituição tenha sido usada para lavagem de dinheiro de até R$ 1 bilhão da facção Primeiro Comando da Capital(PCC). O grupo foi liquidado extrajudicialmente pelo Banco Central em janeiro deste ano.A entrega da proposta foi revelada pelo UOL e confirmada pela CNN.Na visão de integrantes da Procuradoria ouvidos sob reserva, os relatos de Mansur são mais robustos em relação à proposta de delação apresentada por Vorcaro, que acabou rejeitada, e têm mais chance de prosperar.",
      data: "26/08/26"
    },

    {
      titulo: "Polícia investiga morte de uma família de japoneses em apartamento no PR",
      imagem: "familiaInvestigada.png",
      descricao: "Corpos de três pessoas foram encontrados com ferimentos de faca; não há vestígios de arrombamento na residência das vítimas. A Polícia Civil investiga a morte de uma família de japoneses encontrados com ferimentos de faca no apartamento em que viviam no bairro Água Verde, em Curitiba, Paraná, nesta terça-feira (25).As vítimas são: a médica Claudia Hitomi Shimada Furuyama, de 57 anos, o marido dela, Marcos Alberto Furuyama, de 38 anos, e o filho do casal, Rafael Furuyama de 23 anos.",
      data: "26/08/26"
    },

    {
      titulo: "Efeito do Viagra após superdosagem: o que fazer? Saiba quando procurar um médico",
      imagem: "viagra.png",
      descricao: "A ingestão do estimulante sexual sildenafila, conhecido comercialmente como Viagra, em doses acima do limite recomendado de 100 mg, apresenta riscos à saúde. O uso sem indicação médica ou em superdosagem pode levar a complicações cardiovasculares, sensoriais e físicas imediatas. Em casos de suspeita de intoxicação por esse ou outros remédios, a recomendação de especialistas é buscar atendimento de emergência de forma imediata.",
      data: "24/06/26"
    },

    {
      titulo: "RG antigo tem prazo para acabar; veja como emitir a nova Carteira de Identidade Nacional (CIN)",
      imagem: "rg.png",
      descricao: "Chamado oficialmente de Carteira de Identidade Nacional (CIN), é o novo documento que substitui o antigo RG e já trouxe algumas mudanças. A principal diferença é que, agora, o CPF passa a ser um número único de identificação na versão digital e nas novas emissão.O objetivo da mudança é unificar, modernizar e aumentar a segurança dos documentos de identidade contra fraudes e a confiabilidade da identificação civil. De acordo com o Decreto Federal nº 10.977/2022, o antigo modelo de carteira de identidade permanece válido em todo o território nacional até o dia 28 de fevereiro de 2032. A partir de 1º de março de 2032, a utilização da nova CIN passará a ser obrigatória.",
      data: "25/08/26"
    },

    {
      titulo: "Renault Kardian: nova versão de entrada mantém 125 cv por quase R$ 100 mil",
      imagem: "renautKardian.png",
      descricao: "A Renault revelou, nesta quarta-feira (26), o Kardian Vibe como a nova opção de entrada da linha 2027 do compacto. Com pré-venda aberta e entregas nas concessionárias programadas para setembro, a novidade desembarca por R$ 99.990. A precificação estratégica posiciona a versão como a única configuração equipada com motorização turbo vendida abaixo da barreira dos R$ 100 mil no mercado nacional.   O grande diferencial da novidade está na readequação física e mecânica. Com a retirada dos racks de teto e a adoção de rodas de aço de 15 polegadas com calotas aerodinâmicas, o veículo reduziu o peso total em 43 kg, diminuiu a área frontal em 6% e reduziu ligeiramente a altura em relação ao solo.  Combinadas à adoção do câmbio manual de seis marchas com relações recalibradas, essas alterações modificaram o comportamento dinâmico do modelo, aproximando sua condução da essência de um hatchback ágil em vez de um SUV.",
      data: "26/08/26"
    },

    {
      titulo: "Apresentações de novos carros dominam o Festival Interlagos 2026",
      imagem: "apresentacao.png",
      descricao: "Evento dedicado aos carros começa nesta quinta-feira (26) e reúne algumas das principais novidades do mercado. Entre SUVs, picapes, esportivos, híbridos e modelos de competição, GWM, Ford e as marcas do grupo Stellantis aproveitaram o festival para apresentar veículos inéditos e antecipar lançamentos que devem movimentar o mercado nos próximos meses e em 2027. A GWM trouxe ao evento o inédito Tank 400, sem ficha técnica definida, mas o SUV híbrido plug-in poderá entregar 431 cv e 71,3 kgfm de torque e chega para disputar espaço entre os SUVs grandes e robustos, mirando modelos como o Denza B5. A marca também exibiu o novo Tank 300 TerraForce e seu caminhão movido a hidrogênio.",
      data: "26/06/26"
    },

    {
      titulo: "Análise: ANPD aponta uso dados de crianças que não tinham conta no TikTok",
      imagem: "tiktok.png",
      descricao: "Agência identificou coleta de dados de menores sem conta na plataforma e falhas nos mecanismos de verificação de idade; Clarissa Oliveira destaca importância da decisão A ANPD (Agência Nacional de Proteção de Dados) aplicou uma multa de R$ 153,7 milhões à ByteDance, empresa responsável pela rede social TikTok, por irregularidades na proteção de dados de crianças e adolescentes. Para a analista de política Clarissa Oliveira, a decisão representa um marco na punição de big techs no Brasil. Durante o Live CNN desta quinta-feira (26), Clarissa afirmou que um dos pontos mais graves identificados pela agência diz respeito à coleta de informações de usuários que nem sequer possuíam conta na plataforma. O TikTok permitia que fosse feito o acesso à plataforma, que você conseguisse ver os vídeos, mesmo sem ter uma conta cadastrada, sem registrar os seus dados lá, explicou a analista.",
      data: "26/08/26"
    },

    {
      titulo: "20 anos sem Plutão: entenda a decisão polêmica que mudou nosso Sistema Solar para sempre",
      imagem: "pllutao.png",
      descricao: "Em 2006, a União Astronômica Internacional mudou a definição de planeta e deixou de fora Plutão e outros astros recém-descobertos. Mas o debate ainda está longe de acabar Plutão visto pela sonda espacial New Horizons da Nasa, capturada em 2015 Plutão visto pela sonda espacial New Horizons da Nasa, capturada em 2015  • Nasa/Johns Hopkins University Applied Physics Laboratory/Southwest Research Institute via CNN Newsource Descoberto em 1930, Plutão passou a maior parte de sua existência conhecida sendo considerado um dos nove integrantes do Sistema Solar: o menor e o mais distante do Sol, mas, ainda assim, um planeta. O rebaixamento à nomenclatura de planeta anão foi decretado pela União Astronômica Internacional (UAI) em 24 de agosto de 2006, em resposta a novas descobertas de corpos espaciais e às diferenças já sabidas entre Plutão e os oito planetas que orbitam o Sol. A alternativa à reclassificação seria incluir no Sistema Solar mais um, e possivelmente múltiplos outros planetas. Mas existem cientistas dispostos a abrir a exceção.",
      data: "24/08/26"
    }
  ];

  return(
    <>
      <h1> Noticias da semana</h1>
      <div className="card-container">
        {listaNoticias.map((Noticia, idx) => {
          return <CardNoticias
          key={idx}
          titulo={Noticia.titulo}
          imagem={Noticia.imagem}
          descricao={Noticia.descricao}
          data={Noticia.data}
          />
        })}
      </div>
    </>
  )
}


