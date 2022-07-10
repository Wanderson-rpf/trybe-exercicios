delay=1

#Exercicio 1
echo "\n-> Listando processos"
ps
sleep $delay

#Exercicio 2
echo "\n-> Criando um processo em background"
sleep 30 &
sleep $delay

#Exercicio 3
echo "\n-> Mostrando processo criado"
ps
sleep $delay

#Exercicio 4
echo "\n-> Encerrando processo criado"
pkill sleep
ps
sleep $delay

#Exercicio 5
echo "\n-> Cirando um processo em background"
sleep 300 &
ps
sleep $delay

#Exercicio 6
#echo "\n-> Criando processo para ser encerrado manualmente"
#echo "-> Precione Ctrl+z para supender o processo."
#sleep 200
#sleep $delay
#echo "\n-> Criando processo para ser encerrado manualmente"
#echo "-> Precione Ctrl+z para supender o processo."
#sleep 100
#sleep $delay

#Exercicio 7 
echo "-\n-> Mostrando os processos com o comando JOBS"
jobs sleep
sleep $delay

#Exercicio 8
#Feito manualmente

#Exercicio 9
echo "\n-> Encerrando processos sleep"
pkill sleep
ps
sleep $delay