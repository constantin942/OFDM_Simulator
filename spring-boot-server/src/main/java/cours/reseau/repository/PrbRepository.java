package cours.reseau.repository;

import cours.reseau.model.Prb;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PrbRepository extends JpaRepository<Prb, Long> {
    Prb findByCle(Integer cle);
}
