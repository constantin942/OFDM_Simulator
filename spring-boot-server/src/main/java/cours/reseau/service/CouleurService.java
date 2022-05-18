package cours.reseau.service;

import java.util.Random;

public class CouleurService {
    public static <T extends Enum<?>> T randomEnum(Class<T> clazz, Integer min, Integer max) {
        Random random = new Random();

        if (min > clazz.getEnumConstants().length || max > clazz.getEnumConstants().length) {
            return null;
        }
        if (min != null && max != null) {
            int rand = random.nextInt(max - min + 1) + min - 1;
            return clazz.getEnumConstants()[rand];
        }  else {
            int x = random.nextInt(clazz.getEnumConstants().length);
            return clazz.getEnumConstants()[x];
        }
    }

//    public static void main(String[] args) {
//        CouleurService.randomEnum(Couleur.class, 0, 6);
//    }
}
