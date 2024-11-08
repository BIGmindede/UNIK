package Bilet5;

import java.util.HashMap;
import java.util.Map;
import java.util.Objects;

public class Rarest {
    public static int rarest(Map<String, Integer> map) {
        int maxx = Integer.MAX_VALUE;
        int mu = 0;
        int n;
        for (var i : map.entrySet()) {
            n = 0;
            for (var j : map.entrySet()) {
                if (Objects.equals(i.getValue(), j.getValue())) {
                    n++;
                }
            }
            if (n < maxx) {
                maxx = n;
                mu = i.getValue();
            }
        }
        return mu;
    }
}