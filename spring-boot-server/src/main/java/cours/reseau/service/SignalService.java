package cours.reseau.service;

import cours.reseau.model.Couleur;
import cours.reseau.model.Signal;

public interface SignalService {
    Signal create(Couleur couleur, Integer taille, Integer priority);
    void deleteAll();
}
