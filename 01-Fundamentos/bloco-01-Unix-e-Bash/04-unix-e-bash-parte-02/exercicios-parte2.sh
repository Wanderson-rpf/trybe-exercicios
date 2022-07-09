delay=1

#Exercicio 1
echo "-> Acessando pasta unix_tests"
cd unix_tests
sleep $delay

#Exercicio 2
echo "-> Visualizando permissões de arquivos"
ls -l 
sleep $delay

#Exercicio 3
echo "-> Atripuindo permissão de leitura(r) no arquivo bunch_of_things.txt"
chmod ugo+r bunch_of_things.txt
ls -l
sleep $delay

#Exercicio 4
echo "-> Retirando a permissão de escrita(w) no arquivo bunch_of_things.txt"
chmod ugo-w bunch_of_things.txt
ls -l
sleep $delay

#Exercicio 5
echo "-> Redefinido novamente as permissões do arquivo bunch_of_things.txt"
chmod 644 bunch_of_things.txt
ls -l
sleep $delay