#Teste de OpenAI

def soma(a,b):
    return a+b

def sub(a,b):
    return a-b

def mult(a,b):
    return a*b

def div(a,b):
    return a/b

def main():
    print("Calculadora")
    print("1 - Soma")
    print("2 - Subtração")
    print("3 - Multiplicação")
    print("4 - Divisão")
    print("5 - Sair")
    opcao = int(input("Digite a opção desejada: "))
    if opcao == 1:
        a = int(input("Digite o primeiro número: "))
        b = int(input("Digite o segundo número: "))
        print("A soma é: ", soma(a,b))
    elif opcao == 2:
        a = int(input("Digite o primeiro número: "))
        b = int(input("Digite o segundo número: "))
        print("A subtração é: ", sub(a,b))
    elif opcao == 3:
        a = int(input("Digite o primeiro número: "))
        b = int(input("Digite o segundo número: "))
        print("A multiplicação é: ", mult(a,b))
    elif opcao == 4:
        a = int(input("Digite o primeiro número: "))
        b = int(input("Digite o segundo número: "))
        print("A divisão é: ", div(a,b))
    elif opcao == 5:
        print("Saindo...")
    else:
        print("Opção inválida")

main()
