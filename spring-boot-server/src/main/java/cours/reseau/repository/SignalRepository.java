package cours.reseau.repository;

import cours.reseau.model.Couleur;
import cours.reseau.model.Signal;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface SignalRepository extends JpaRepository<Signal, Long> {
    @Query("SELECT distinct sig.couleur from Signal as sig")
    List<Couleur> findDistinctCouleur();
}
