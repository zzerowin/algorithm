import java.util.Scanner;

public class Main {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);
        
        int n = sc.nextInt();

        for (int i = 1; i <= n; i++) {
            int c = sc.nextInt();
            int d = sc.nextInt();
            System.out.println("Case #" + i + ": " + c + " + " + d + " = " + (c + d));
        }

        sc.close();
    }
}