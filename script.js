

function subirArquivo(arquivoX){

    // var file vai receber o arquivoX que esta findo como parametro da função
    // na posição [0] porque queremos sempre pegar apenas 1 aquivo
    var file = arquivoX.files[0];
 
    // instanciando uma nova classe para tratar os dados do arquivo subido
    var reader = new FileReader();

    // função acionada quando o arquivo é carregado de fato
    reader.onload = function(progressEvent)
    {//function é acionado quando o carregamento do arquivo termina


        // conteudoCompleto vai receber todo o conteudo do arquivo carregado
        // split vai separar cada frase pelo pipe (|)
        var conteudoCompleto = this.result.split('|')
        
        // função contagem responsavel por contar elementos duplicados
        var objetoRetornado = contagem(conteudoCompleto)

        // console.log(objetoRetornado)

        // função sortObject responsavel por ordenar os registros ( do maior para o menor)
        var listaOrdenadaMaiorParaMenor = sortObject(objetoRetornado)

         // console.log(listaOrdenadaMaiorParaMenor)


        // Laço de repetição que pegará o array já ordenado e somado as chaves duplicadas
        for(var i = 0; i < listaOrdenadaMaiorParaMenor.length ; i++)
        {


            //Montagem de linha para inserção na tabela principal

        
            // listaOrdenadaMaiorParaMenor[i][0] == sendo i para o array principal , e o [0] para pegar a frase
            // listaOrdenadaMaiorParaMenor[i][1] == sendo i para o array principal , e o [1] para pegar o valor do contador 
            
            // console.log(listaOrdenadaMaiorParaMenor[i][0])
            // console.log(listaOrdenadaMaiorParaMenor[i][1])

            var linha = `<tr>
                            <td></td>
                            <td></td>
                            <td>${listaOrdenadaMaiorParaMenor[i][0]}</td>
                            <td>${listaOrdenadaMaiorParaMenor[i][1]}</td>
                        </tr>`


            // pegando o elemento tbody da tabela pelo document.getelementbyid e dando um innerHTML += linha
            // ou seja , ele vai adicionar a variavel linha na tabela.
            document.getElementById('conteudoTabela').innerHTML += linha


        }

        // console abaixo , mostra o conteudo do arquivo que foi subido
        // console.log(this.result);
    

    };
    // responsavel por renderizar o arquivo subido
    reader.readAsText(file);
    
  };



  // função que realiza a contagem de elementos duplicados no array  conteudoCompleto
function contagem(arr)
{
    // montagem do objeto vazio para receber as chaves duplicadas
    const objContagem = {}

    // mesma função do for , passando volta como indice e objContagem[volta] como array principal
    // a cada volta ele pega o valor e verifica se ja existe , se existir ele soma +1 se nao ( || ) ele
    // adiciona 0 + 1 , ou seja , só possui 1 elemento com esse valor 
    arr.forEach(volta => {objContagem[volta] = (objContagem[volta] || 0 ) + 1})


    // retorna objeto com [Frase , quantidade]
    return objContagem

}


// função responsavel por ordenar o array recebido em ordem decrescente
function sortObject(objetoMontado)
{
    // declara array vazio que vai receber o objeto com [Frase , Quantidade]
    const arrayDenovo = []


    // executa um for para cada indice do array 
    // aonde chave == index e objetoMontado é o array em si que vem via parâmetro dessa função
    for(chave in objetoMontado)
    {
        // adiciona tudo em um array aonde [Frase , Quantidade]
        arrayDenovo.push([chave , objetoMontado[chave]])
    }

    // objetoTratado vai receber o arrayDenovo.sort() que dessa forma , ele ordena do maior para o menor 
    // NUNCA ESQUECER O RETURN
    // este return abaixo, referencia a função interna do SORT 
    const objetoTratado = arrayDenovo.sort((a,b) => {return b[1] - a[1]})


    // este return abaixo , referencia a Função principal (sortObject)
    return objetoTratado;
}