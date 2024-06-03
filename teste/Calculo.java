public class Calculo {   
    public double calcular(int n, int x, double valor){
        if (n == 0) {
            return ( valor + valor * x/ 100.0);
        }else {
            return(valor - n * x);
        }
    }

    public static void main(String[] args) {
        Calculo q1 = new Calculo();
        Calculo q2 = new Calculo();

        System.out.println(q1.calcular(2, 5 , 100));
        System.out.println(q2.calcular(0, 5 , 100));
    }
}