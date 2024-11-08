package var2;

import java.util.HashMap;

public class Main {
    public static void main(String[] args) {
        HashMap<Integer, String> hashMap = new HashMap<>();
        hashMap.put(2, "sal");
        hashMap.put(2, "salk");
        hashMap.put(3, "duking");
        HashMap<String, Integer> hashMap2 = new HashMap<>();
        for (Integer k : hashMap.keySet()) {
            hashMap2.put(hashMap.get(k), k);
        }
        System.out.println(hashMap2.toString());
    }
}