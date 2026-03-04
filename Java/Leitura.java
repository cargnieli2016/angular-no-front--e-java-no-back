import java.util.Scanner;

public class Leitura {
    public static void main(String[] args) {

        Scanner teclado = new Scanner(System.in);
        /*
         * int a;
         * float b;
         * double c;
         * 
         * System.out.println("Digite um número inteiro: ");
         * a = teclado.nextInt();
         * System.out.println("Você digitou o valor " + a);
         * 
         * System.out.println("Digite um valor float ");
         * b = teclado.nextFloat();
         * System.out.println("Você digitou o valor " + b);
         * 
         * System.out.println("Digite um valor double com 3 casas decimais: ");
         * c = teclado.nextDouble();
         * System.out.printf("Você digitou o valor %.3f ", c);
         */
        String nome;
        int codigo;
        double salario;

        System.out.println("Digite seu código: ");
        codigo = Integer.parseInt(teclado.nextLine());
        // codigo = teclado.nextInt();

        System.out.println(" Digite seu nome ");
        nome = teclado.nextLine();

        System.out.println("Digite seu salário: ");
        salario = Double.parseDouble(teclado.nextLine());

        System.out.println("Seu código, nome e salário  é: " + codigo + " " + nome + " " + " R$ " + salario);

        teclado.close();

    }
}
