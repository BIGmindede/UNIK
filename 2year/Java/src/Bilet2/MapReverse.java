package Bilet2;

import java.util.HashMap;
import java.util.Map;

public class MapReverse {
    public static Map<Integer, String> reverse(Map<String, Integer> q) {
        Map<Integer, String> reverseMap = new HashMap<>();
        for (var a : q.entrySet()) {
            reverseMap.put(a.getValue(), a.getKey());
        }
        return reverseMap;
    }

    public static void main(String[] args) {
        Map<String, Integer> map = new HashMap<>();
        map.put("qwe", 2);
        map.put("asd", 1);
        map.put("zxc", 1);
        map.put("fgh", 13);
        map.put("rty", 2);
        Map<Integer, String> newMap = reverse(map);
        System.out.println(newMap);
    }
}
