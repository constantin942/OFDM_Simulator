package cours.reseau.model;

import lombok.*;
import org.hibernate.Hibernate;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "prb")
@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class Prb {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name = "cle")
    private Integer cle;

    @Column(name = "prb")
    private String prb;

    @Column(name = "emptyIndex",
            nullable = false,
            columnDefinition = "int default 0")
    private Integer emptyIndex;

    @Column(name = "s00")
    private String s00;

    @Column(name = "s01")
    private String s01;

    @Column(name = "s10")
    private String s10;

    @Column(name = "s11")
    private String s11;

    @Column(name = "s20")
    private String s20;

    @Column(name = "s21")
    private String s21;

    @Column(name = "s30")
    private String s30;

    @Column(name = "s31")
    private String s31;

    @Column(name = "s40")
    private String s40;

    @Column(name = "s41")
    private String s41;

    @Column(name = "s50")
    private String s50;

    @Column(name = "s51")
    private String s51;

    @Column(name = "s60")
    private String s60;

    @Column(name = "s61")
    private String s61;

    @Column(name = "s70")
    private String s70;

    @Column(name = "s71")
    private String s71;

    @Column(name = "s80")
    private String s80;

    @Column(name = "s81")
    private String s81;

    @Column(name = "s90")
    private String s90;

    @Column(name = "s91")
    private String s91;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || Hibernate.getClass(this) != Hibernate.getClass(o)) return false;
        Prb prb = (Prb) o;
        return id != null && Objects.equals(id, prb.id);
    }

    public Prb(Integer cle, String prb, Integer emptyIndex) {
        this.cle = cle;
        this.prb = prb;
        this.emptyIndex = emptyIndex;
    }

    @Override
    public int hashCode() {
        return getClass().hashCode();
    }
}
