class TV:
    # def __init__(self, volume=50, canal=1, tamanho=None, ligada=False):
    #     self.volume = volume
    #     self.canal = canal
    #     self.tamanho = tamanho
    #     self.ligada = ligada

    def __init__(self, tamanho=None):
        self.__volume = 50
        self.__canal = 1
        self.__tamanho = tamanho
        self.__ligada = False

    def aumentar_volume(self):
        if self.__volume >= 0 or self.__volume <= 99:
            self.__volume += 1

    def diminuir_volume(self):
        if self.__volume >= 0 or self.__volume <= 99:
            self.__volume -= 1

    def modificar_canal(self, new_canal):
        if new_canal <= 1 or new_canal >= 99:
            raise ValueError("Canal invalido!")

        self.__canal = new_canal

    def ligar_desligar(self):
        if self.__ligada is True:
            self.__ligada = False
        else:
            self.__ligada = True

    def show_tv(self):
        print(
            f"""
                - Volume: {self.__volume}
                - Canal: {self.__canal}
                - tamanho: {self.__tamanho}
                - ligada: {self.__ligada}
              """
        )
