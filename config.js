// Ajuste estes valores e publique de novo.
window.CONFIG = {
  // URL do App da Web do Apps Script (termina em /exec). Ver README.md.
  SCRIPT_URL: '',
  // Nome do bairro ou da comunidade, aparece no topo.
  BAIRRO: 'Recife',
  // Cidade, usada nos links de rota quando o ponto não foi marcado no mapa.
  CIDADE: 'Recife, PE',
  // Área onde a busca de endereços e escolas procura: oeste, norte, leste, sul.
  // Grande Recife: Recife, Olinda, Jaboatão dos Guararapes, Paulista, Camaragibe,
  // São Lourenço da Mata, Abreu e Lima, Igarassu, Cabo de Santo Agostinho, Moreno,
  // Ipojuca, Itapissuma, Ilha de Itamaracá e Araçoiaba.
  REGIAO: [-35.24, -7.7, -34.78, -8.57],
  REGIAO_NOME: 'no Grande Recife',
  REGIAO_TITULO: 'região metropolitana do Recife',
  // DDD usado nos exemplos de telefone.
  DDD: '81',
  // Exemplos de nomes de locais de votação (passo "Onde vota?").
  EXEMPLOS_LOCAIS: 'Ginásio Pernambucano, UFPE, Nassau',
  // Área que o mapa mostra ao abrir: [[sul, oeste], [norte, leste]]. Aqui, Recife inteira.
  AREA_MAPA: [[-8.1552, -35.0186], [-7.929, -34.8515]],
  // Centro da cidade: ordena os locais de votação por proximidade (e serve de reserva ao mapa).
  CENTRO: [-8.0585, -34.8848],
  ZOOM: 12,
  // Texto da data da votação.
  DATA: 'Domingo, 25 de outubro · 2º turno · das 8h às 17h',
  // WhatsApp e nome de quem organiza (DDD + número, só dígitos). Deixe vazio para não exibir.
  CONTATO: '81996189993',
  CONTATO_NOME: 'Ricardo Rodrigues',
  // Quando os dados são apagados (igual a APAGAR_EM no Code.gs).
  APAGAR_ATE: '26/10/2026, às 18h',
};
