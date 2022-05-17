import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.ArrayList;
import java.util.List;

@Data
@AllArgsConstructor
class Student {
    private String name;
    private Integer stuNum;
}

public class JustTest {


    public static void main(String[] args) {
        JustTest justTest = new JustTest();
        List<Student> studentList = new ArrayList<>();
        studentList.add(new Student("yuxli", 16124728));
        studentList.add(new Student("zidliu", 16124729));
        Student student = studentList.get(1);
        student.setName("guawang");
        System.out.println(studentList);
    }
}
