package cours.reseau.service;

import cours.reseau.model.Couleur;
import cours.reseau.model.Prb;
import cours.reseau.repository.PrbRepository;
import cours.reseau.repository.SignalRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.*;

@Service
@RequiredArgsConstructor
@Transactional
@Slf4j
public class PrbServiceImpl implements PrbService {
    private final PrbRepository prbRepository;
    private final SignalRepository signalRepository;
    private final SignalService signalService;
    private final SendService sendService;
    HashMap<String, Couleur> couleurHashMap = new HashMap<String, Couleur>() {{
        put("lastOne", Couleur.BLUE);
    }};
    HashMap<String, Integer> BW2PrbNum = new HashMap<String, Integer>() {{
       put("1.4", 6);
       put("3", 15);
       put("5", 25);
       put("10", 50);
       put("15", 75);
       put("20", 100);
    }};


    @Override
    public List<Prb> getAllPrbs() {
        return new ArrayList<>(prbRepository.findAll());
    }


    @Override
    public String createPrb(HashMap<String, String> hashMap) {
        int prbNum, dataSize;
        String bandwidth;
        if (hashMap.containsKey("prbNum")) {
            bandwidth = hashMap.get("prbNum");
            if (!BW2PrbNum.containsKey(bandwidth))
                return "failed";
            prbNum = BW2PrbNum.get(bandwidth);
            int original_num = (int) prbRepository.count();
            if (original_num != 0 && prbNum != 0) {
                return "enough";
            }
            for (int i = 0; i < prbNum; i++) {
                Prb _prb = new Prb(i, "PRB" + (prbNum - 1 - i), 0);
                prbRepository.save(_prb);
            }
            int after_num = (int) prbRepository.count();
            if (prbNum == after_num - original_num) {
                sendService.startup();
                return "success";
            }
            return "failed";
        }
        if (hashMap.containsKey("dataSize")) {
            dataSize = Integer.parseInt(hashMap.get("dataSize"));
            dataSize *= 1024;
            List<Couleur> usedColor = signalRepository.findDistinctCouleur();
            if (usedColor.size() >= 6) {
                return "oversize";
            }
            List<Couleur> couleurs = Arrays.asList(Couleur.values());
            Collections.shuffle(couleurs);
            for (Couleur each : couleurs) {
                if (!usedColor.contains(each) && !couleurHashMap.get("lastOne").equals(each)) {
                    signalService.create(each, dataSize, usedColor.size());
                    couleurHashMap.put("lastOne", each);
                    break;
                }
            }
            return "success";
        }
        return "nothing there";
    }


    @Override
    public Prb updatePrb(Long id, Prb prb) {
        Optional<Prb> prbOptional = prbRepository.findById(id);

        if (prbOptional.isPresent()) {
            Prb _prb = prbOptional.get();
            _prb.setPrb(prb.getPrb());
            _prb.setCle(prb.getCle());
            _prb.setS00(prb.getS00());
            _prb.setS01(prb.getS01());
            _prb.setS10(prb.getS10());
            _prb.setS11(prb.getS11());
            _prb.setS20(prb.getS20());
            _prb.setS21(prb.getS21());
            _prb.setS30(prb.getS30());
            _prb.setS31(prb.getS31());
            _prb.setS40(prb.getS40());
            _prb.setS41(prb.getS41());
            _prb.setS50(prb.getS50());
            _prb.setS51(prb.getS51());
            _prb.setS60(prb.getS60());
            _prb.setS61(prb.getS61());
            _prb.setS70(prb.getS70());
            _prb.setS71(prb.getS71());
            _prb.setS80(prb.getS80());
            _prb.setS81(prb.getS81());
            _prb.setS90(prb.getS90());
            _prb.setS91(prb.getS91());
            return prbRepository.save(_prb);
        } else {
            return null;
        }
    }


    @Override
    public void deleteAllPrbs() {
        prbRepository.deleteAll();
    }
}
