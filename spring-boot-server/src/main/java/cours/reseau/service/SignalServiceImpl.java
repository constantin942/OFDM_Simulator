package cours.reseau.service;

import cours.reseau.model.Couleur;
import cours.reseau.model.Signal;
import cours.reseau.repository.SignalRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
@Transactional
@Slf4j
public class SignalServiceImpl implements SignalService{
    private final SignalRepository signalRepository;

    @Override
    public Signal create(Couleur couleur, Integer taille, Integer priority) {
        signalRepository.save(new Signal(couleur, taille, priority));
        return null;
    }

    @Override
    public void deleteAll() {
        signalRepository.deleteAll();
    }
}
