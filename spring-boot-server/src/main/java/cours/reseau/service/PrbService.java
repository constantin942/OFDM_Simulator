package cours.reseau.service;

import cours.reseau.model.Prb;

import java.util.HashMap;
import java.util.List;

public interface PrbService {
    List<Prb> getAllPrbs();
    String createPrb(HashMap<String, String> hashMap);
    Prb updatePrb(Long id, Prb prb);
    void deleteAllPrbs();
}
