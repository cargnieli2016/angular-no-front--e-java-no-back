import java.util.Scanner;

public class TesteIF {
    public static void main(String[] args) {

        Scanner teclado = new Scanner(System.in);
        double n1, n2, me;

        System.out.println("Digite a N1: ");
        n1 = teclado.nextDouble();

        System.out.println("Digite a N2: ");
        n2 = teclado.nextDouble();

        me = (n1 + n2) / 2;

        System.out.println("Sua média vale " + me);

        if (me >= 6.0 && me >= 6.0) {
            System.out.println("Parabéns, você foi aprovado!");
        } else {
            System.out.println("Infelizmente, você foi reprovado!");
        }

        teclado.close();

    }

}
