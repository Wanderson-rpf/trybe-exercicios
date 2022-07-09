delay=1

#Exercico 1
echo "-> acessando diretorio unix_tests e baixando arquivo countries.txt"
cd unix_tests
curl -o countries.txt "https://gist.githubusercontent.com/kalinchernev/486393efcca01623b18d/raw/daa24c9fea66afb7d68f8d69f0c4b8eeb9406e83/countries"
sleep $delay

#Exercicio 2
echo "-> Mostrando dados do arquivo countries.txt"
cat countries.txt
sleep $delay

#Exercicio 3
echo "-> Mostrando countries.txt por pagina"
echo "-> Comandos: / para fazer a pesquisa - n para poxima ocorrencia da pesquisa - p para anterior"
echo "-> Comandos: space-bar para proxima pagina - q para sair"
sleep 2
less countries.txt

#Exercicio 4
#less countries.txt
#Comandos: / para fazer a pesquisa - n para poxima ocorrencia da pesquisa - p para anterior"

#Exercicio 5
echo "-> Pesquisando Brazil no arquivo countries.txt"
grep "Brazil" countries.txt
sleep $delay

#Exercicio 6
echo "-> Pesquisando Brazil no arquivo countries.txt com lower-case"
grep -i "brazil" countries.txt
sleep $delay

#Criando arquvio para proximas atividades
echo "-> Criando arquivo phrase.txt para proximas atividades"
touch phrases.txt

#Exercicio 7
echo "-> Pesquisando frase que NAO tem fox"
grep -v "fox" phrases.txt
sleep $delay

#Exercicio 8 
echo "-> Numero de plavras do arquivo phrases.txt"
wc -w phrases.txt
sleep $delay

#Exercicio 9
echo "-> Numero de linha do arquivo phrases.txt"
wc -l phrases.txt
sleep $delay

#Exercicio 10
echo "-> Criando arquivos empty.tbt e empty.pdf"
touch empty.tbt empty.pdf
sleep $delay

#Exercicio 11
echo "-> Listar todos os arquivos do diretorio unix_tests"
ls
sleep $delay

#Exercicio 12 
echo "->Listar todos os arquivos com extensão txt"
ls *.txt
sleep $delay

#Exercicio 13
echo "-> Listar arquivos com extensãotxt ou tbt"
ls *.txt *.tbt
sleep $delay

#Exercicio 14
echo "-> Acessar manual do compando ls"
man less
sleep $delay