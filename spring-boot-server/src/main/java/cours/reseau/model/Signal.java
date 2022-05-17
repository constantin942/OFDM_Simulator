package cours.reseau.model;

import lombok.*;
import org.hibernate.Hibernate;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "signals")
@Getter
@Setter
@ToString
@AllArgsConstructor
@RequiredArgsConstructor
public class Signal {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    public Signal(Couleur couleur, Integer taille, Integer priority) {
        this.couleur = couleur;
        this.taille = taille;
        this.priority = priority;
    }

    @Column(name = "couleur")
    @Enumerated(EnumType.STRING)
    private Couleur couleur;

    @Column(name = "taille")
    private Integer taille;

    @Column(name = "priority")
    private Integer priority;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || Hibernate.getClass(this) != Hibernate.getClass(o)) return false;
        Signal signal = (Signal) o;
        return id != null && Objects.equals(id, signal.id);
    }

    @Override
    public int hashCode() {
        return getClass().hashCode();
    }
}
