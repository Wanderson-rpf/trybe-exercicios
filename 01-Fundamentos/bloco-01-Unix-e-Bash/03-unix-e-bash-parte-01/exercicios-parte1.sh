delay=1

#Exercico 1
echo "-> Criando pasta (caso ela não exista)"
mkdir unix_tests

echo "-> Acessando pasta"
cd unix_tests
sleep $delay

# Exercicio 2

echo "-> Criando arquivo trybe.txt"
touch trybe.txt
sleep $delay

# Exercicio 3
echo "-> Criando uma copia de trybe.txt"
cp trybe.txt trybe_backup.txt
sleep $delay

# Exercicio 4
echo "-> Renomeado arquivo trybe.txt"
mv trybe.txt trybe_novo.txt
sleep $delay

# Exercicio 5
echo "-> Criando diretorio backup"
mkdir backup
sleep $delay

# Exercicio 6
echo "-> Movendo arquivo trybe_backup.txt para backup"
mv trybe_backup.txt backup
sleep $delay

# Exercicio 7
echo "-> Criando diretorio backup2"
mkdir backup2
sleep $delay

# Exercicio 8
echo "-> Moendo arquivo trybe_backup.txt para backup2"
mv backup/trybe_backup.txt backup2
sleep $delay

# Exercicio 9
echo "-> Apagando pasta backup"
rmdir backup
sleep $delay

# Exercicio 10
echo "-> Renomeado pasta backup2"
mv backup2 backup
sleep $delay

# Exercicio 11
echo "-> Mostrando o path completo"
pwd
sleep $delay

# Exercicio 12
echo "-> Apagar diretorio backup"
rm -rf backup
sleep $delay

# Exercicio 13
echo "-> limpando terminal"
clear

# Exercicio 14
echo "-> Criando arquivo skills.txt"
echo "Internet\nUnix\nBash\nHTML\nCSS\nJavaScript\nReact\nSQL" > skills.txt
sleep $delay

# Exercicio 15
echo "-> Mostre as 5 primeiras skills"
cat skills.txt | head -5
sleep $delay

# Exercicio 16
echo "-> Mostre as 4 ultimas skills"
cat skills.txt | tail -4
sleep $delay

# Exercicio 17
echo "-> Excluir arquivos *.txt"
rm -rf *.txt
sleep $delay

