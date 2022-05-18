import cours.reseau.model.Couleur;
import cours.reseau.service.CouleurService;
import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

@Data
@AllArgsConstructor
class Student {
    private String name;
    private Integer stuNum;
}

public class JustTest {


    public static void main(String[] args) {
//        JustTest justTest = new JustTest();
        List<Integer> list = new ArrayList<>();
        list.add(1);
        list.add(2);
        list.add(3);
        list.add(4);
        Collections.shuffle(list);
        System.out.println(list);
    }
}
