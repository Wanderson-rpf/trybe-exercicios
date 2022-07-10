delay=1

#Exercicio 1
echo "-> Acessando pasta unix_tests"
cd unix_tests
sleep $delay

echo "-> Criar arquivo skills2.txt e adicioando valores"
echo "Internet\nUnix\nBash" > skills2.txt
sleep $delay

#Exercicio 3
echo "-> Adicionando 5 itens a lista"
echo "HTML\nCSS\nJavaScript\nLinux\nAlgoritmo" >> skills2.txt
sleep $delay

#Exercicio 4
echo "-> Quandidade de linhas arquivo skills2.txt"
wc -l skills2.txt
sleep $delay

#Exercicio 5
echo "-> Criando arquivo top_skills.txt usando o skills2.txt contendo as 3 primeiras skills em ordem alfabética"
sort skills2.txt | head -3 > top_skills.txt
sleep $delay

#Exercicio 6
echo "-> Criando arquivo phrases2.txt e adicionando frases"
echo "Teste de arquivo.\nNovas frases para teste.\nArquivo para teste em phrases2." > phrases2.txt
sleep $delay

#Exercicio 7
echo "-> Numero de linhas que contem as letras br"
grep -c "br" phrases2.txt
sleep $delay

#Exercicio 8
echo "-> Numero de linhas que NAO contem as letras br"
grep -v "br" phrases2.txt
sleep $delay

#Exercicio 9
echo "-> Adicionando o nome de dois paises ao arquivo phrases2.txt"
echo "Brasil\nArgentina" >> phrases2.txt
sleep $delay

Exercicio 10
echo "-> Criando novo arquivo bunch_of_things.txt e adicionando dados de phrases2.txt e countries.txt"
cat < phrases2.txt  >> bunch_of_things.txt
cat < countries.txt >> bunch_of_things.txt
sleep $delay

#Exercicio 11
echo "-> Ordenando arquivo bunch_of_things.txt"
sort bunch_of_things.txt
sleep $delay
