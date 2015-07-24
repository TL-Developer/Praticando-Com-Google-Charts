// carregando bibliotecas do google
google.load('visualization', '1', {'packages':['corechart', 'intensitymap']});
google.setOnLoadCallback(desenhaGrafico);

function desenhaGrafico() {
      var data = new google.visualization.DataTable();
      data.addColumn('string', 'Mês');
      data.addColumn('number', 'Gastos em R$');

      data.addRows(5);

      // dados de janeiro
      data.setValue(0, 0, 'Janeiro');
      data.setValue(0, 1, 20450.0);
      // dados de fevereiro
      data.setValue(1, 0, 'Fevereiro');
      data.setValue(1, 1, 21870.0);
      // dados de marco
      data.setValue(2, 0, 'Março');
      data.setValue(2, 1, 22250.0);
      // dados de abril
      data.setValue(3, 0, 'Abril');
      data.setValue(3, 1, 21769.0);
      // dados de maio
      data.setValue(4, 0, 'Maio');
      data.setValue(4, 1, 23234.0);

      // cria grafico
      var chart = new google.visualization.LineChart(document.getElementById('meu_grafico1'));
      // desenha grafico de 400x240 com titulo especificado
      chart.draw(data, {
      	width: 400, 
      	height: 240, 
      	title: 'Gastos do mês', 
      	curveType: 'function', 
      	colors: ['red']
      });



      var dados = new google.visualization.DataTable();
      dados.addColumn('date', 'Dias');
      dados.addRows(6);

      dados.addColumn('number', 'Conta Corrente');
      dados.addColumn('number', 'Conta Investimento');

      dados.setValue(0, 0, new Date(2011, 01, 07));
      dados.setValue(0, 1, 1023.29);
      dados.setValue(0, 2, 410.50);

      dados.setValue(1, 0, new Date(2011, 01, 08));
      dados.setValue(1, 1, 908.42);
      dados.setValue(1, 2, 490.82);

      dados.setValue(2, 0, new Date(2011, 01, 09));
      dados.setValue(2, 1, 852.97);
      dados.setValue(2, 2, 450.17);

      dados.setValue(3, 0, new Date(2011, 01, 10));
      dados.setValue(3, 1, 1780.0);
      dados.setValue(3, 2, 450.17);

      dados.setValue(4, 0, new Date(2011, 01, 11));
      dados.setValue(4, 1, 1621.69);
      dados.setValue(4, 2, 720.81);

      dados.setValue(5, 0, new Date(2011, 01, 12));
      dados.setValue(5, 1, 1352.50);
      dados.setValue(5, 2, 698.42);

      var formatter = new google.visualization.DateFormat({
        pattern: 'dd/MM/yyyy',
      });
      formatter.format(dados, 0);

      var div = document.getElementById('meu_grafico2');
      var grafico = new google.visualization.LineChart(div);
      grafico.draw(dados, {width:700, height:340, title:'Minhas Finanças'});





      var data3 = new google.visualization.DataTable();
      data3.addColumn('string','Mês');
      data3.addColumn('number','Gastos');
      data3.addRows(12);

      // Janeiro
        data3.setValue(0, 0, 'Janeiro');
        data3.setValue(0, 1, 14540);

        // Fevereiro
        data3.setValue(1, 0, 'Fevereiro');
        data3.setValue(1, 1, 12459);

        // Março
        data3.setValue(2, 0, 'Março');
        data3.setValue(2, 1, 15958);

        // Abril
        data3.setValue(3, 0, 'Abril');
        data3.setValue(3, 1, 20349);

        // Maio
        data3.setValue(4, 0, 'Maio');
        data3.setValue(4, 1, 23495);

        // Junho
        data3.setValue(5, 0, 'Junho');
        data3.setValue(5, 1, 17331);

        // Julho
        data3.setValue(6, 0, 'Julho');
        data3.setValue(6, 1, 12384);

        // Agosto
        data3.setValue(7, 0, 'Agosto');
        data3.setValue(7, 1, 13495);

        // Setembro
        data3.setValue(8, 0, 'Setembro');
        data3.setValue(8, 1, 13999);

        // Outubro
        data3.setValue(9, 0, 'Outubro');
        data3.setValue(9, 1, 20230);

        // Novembro
        data3.setValue(10, 0, 'Novembro');
        data3.setValue(10, 1, 22348);

        // Dezembro
        data3.setValue(11, 0, 'Dezembro');
        data3.setValue(11, 1, 21230);

        // Basta trocar o ColumnChart pelo BarChart
        var grafico = new google.visualization.ColumnChart(document.getElementById('meu_grafico3'));

      grafico.draw(data3, {
            width: 600, height: 240, title: 'Gastos', vAxis: {title: 'Valor'}
      });






      var dados4 = new google.visualization.DataTable();
      dados4.addColumn('string','Tipo');
      dados4.addColumn('number','Valor');

      dados4.addRows(4);

      dados4.setValue(0, 0, 'Alimentação');
      dados4.setValue(0, 1, 450);

      dados4.setValue(1, 0, 'Educação');
      dados4.setValue(1, 1, 2260);

      dados4.setValue(2, 0, 'Transporte');
      dados4.setValue(2, 1, 365);

      dados4.setValue(3, 0, 'Shows');
      dados4.setValue(3, 1, 180);

      var grafico = new google.visualization.PieChart(document.getElementById('meu_grafico4'));
      grafico.draw(dados4, {
            width: 700,
            height: 340,
            title: 'Meus Gastos'
      });

      // error, onmouseover, onmouseout, ready e select
      google.visualization.events.addListener(grafico, 'select', avisoDoClique);



      var data5 = new google.visualization.DataTable();
      data5.addColumn('string', 'País');
      data5.addColumn('number', 'População');
      data5.addColumn('number', 'Área');

      data5.addRows(3);

      data5.setValue(0, 0, 'BR');
      data5.setValue(0, 1, 8514);
      data5.setValue(0, 2, 191480);

      data5.setValue(1, 0, 'AR');
      data5.setValue(1, 1, 2766);
      data5.setValue(1, 2, 40091);

      data5.setValue(2, 0, 'CO');
      data5.setValue(2, 1, 1138);
      data5.setValue(2, 2, 45986);

      var grafico = new google.visualization.IntensityMap(document.getElementById('meu_grafico5'));
      grafico.draw(data5, {
            region: 'south_america',
            width: 800,
            height: 400,
            title: 'países'
      });



      var data6 = new google.visualization.DataTable();
      data6.addColumn('string', 'Estado');
      data6.addColumn('number', 'População (hab)');
      data6.addRows(6);
      data6.setValue(0, 0, 'BR-SP');
      data6.setValue(0, 1, 41589892);
      data6.setValue(1, 0, 'BR-ES');
      data6.setValue(1, 1, 3547013);
      data6.setValue(2, 0, 'BR-CE');
      data6.setValue(2, 1, 8530058);
      data6.setValue(3, 0, 'BR-AM');
      data6.setValue(3, 1, 3538359);
      data6.setValue(4, 0, 'BR-RS');
      data6.setValue(4, 1, 10732770);
      data6.setValue(5, 0, 'BR-BA');
      data6.setValue(5, 1, 14097333);

      var chart = new google.visualization.GeoChart(document.getElementById('meu_grafico6'));
      chart.draw(data6, {region : 'BR', resolution: 'provinces'});


      var wrapper = new google.visualization.ChartWrapper({
            dataSourceUrl:'dados.json',
            chartType: 'AreaChart', //BarChart
            containerId: 'meu_grafico7',
            options: {width:900, height:300}
      });

      wrapper.draw();
}

function avisoDoClique(event) {
   document.getElementById('msg').innerHTML += "Gráfico foi clicado <br />";
};