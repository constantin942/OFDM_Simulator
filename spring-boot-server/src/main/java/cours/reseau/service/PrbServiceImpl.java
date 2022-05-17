package cours.reseau.service;

import cours.reseau.model.Couleur;
import cours.reseau.model.Prb;
import cours.reseau.repository.PrbRepository;
import cours.reseau.repository.SignalRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Transactional
@Slf4j
public class PrbServiceImpl implements PrbService {
    private final PrbRepository prbRepository;
    private final SignalRepository signalRepository;
    private final SignalService signalService;
    private final SendService sendService;


    @Override
    public List<Prb> getAllPrbs() {
        return new ArrayList<>(prbRepository.findAll());
    }


    @Override
    public String createPrb(HashMap<String, Integer> hashMap) {
        int prbNum = 0, dataSize = 0;
        if (hashMap.containsKey("prbNum")) {
            prbNum = hashMap.get("prbNum");
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
            dataSize = hashMap.get("dataSize");

            List<Couleur> usedColor = signalRepository.findDistinctCouleur();
            if (usedColor.size() >= 9) {
                return "oversize";
            }
            // TODO : 判断是否超过9种颜色进入等待池
            for (Couleur each : Couleur.values()) {
                if (!usedColor.contains(each)) {
                    signalService.create(each, dataSize, usedColor.size());
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
