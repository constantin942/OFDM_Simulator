package cours.reseau.service;

import cours.reseau.model.Couleur;
import cours.reseau.model.Prb;
import cours.reseau.model.Signal;
import cours.reseau.repository.PrbRepository;
import cours.reseau.repository.SignalRepository;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Sort;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
@RequiredArgsConstructor
@Slf4j
@Getter
@Setter
public class SendService extends Thread {
    private final PrbRepository prbRepository;
    private final SignalRepository signalRepository;
    private final SimpMessagingTemplate simpMessagingTemplate;
    private boolean circulation = true;


    private int handleSignal(int signalNum, int prbNum, int out,
                              List<Prb> prbList, List<Signal> signalList) {
        int index;
        int shift = 0;
        for (int i = 0; i < prbNum; i++) {
            if (signalNum > i) {
                index = i - shift;
            } else {
                index = (i - shift) % signalNum;
            }
            Prb eachPrb = prbList.get(i);
            Signal signal = signalList.get(index);
            Couleur couleur = signal.getCouleur();
            String xxpic = couleur.toString().toLowerCase() + "pic";
            out = setSlot(eachPrb, xxpic);
            signal.setTaille(signal.getTaille() - 10);
            if (signal.getTaille() <= 0) {
                signalList.remove(index);
                --signalNum;
                ++shift;
                signalRepository.deleteById(signal.getId());
                if (signalList.isEmpty())
                    break;
            }
        }
        return out;
    }

    public void continuousTrans() {
        while (circulation) {
            try {
                Thread.sleep(2000);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
            List<Signal> signalList = signalRepository.findAll(Sort.by(Sort.Direction.ASC, "priority"));
            List<Prb> prbList = prbRepository.findAll();
            if (signalList.isEmpty() || prbList.isEmpty())
                continue;
//            System.out.println("signalList: " + signalList);
//            System.out.println("prbList: " + prbList);
            int signalNum = signalList.size();
            int prbNum = prbList.size();
            int minIndex = prbList.get(0).getEmptyIndex();
            int shift_value = 0;
            for (Prb each : prbList) {
                if (minIndex > each.getEmptyIndex()) {
                    break;
                }
                ++shift_value;
            }
            prbList = shiftListLeft(prbList, shift_value);
            int out;
            if (signalNum <= prbNum) {
                out = handleSignal(signalNum, prbNum, 0, prbList, signalList);
            } else {
                signalList = signalList.subList(0, prbNum);
                signalNum = prbNum;
                out = handleSignal(signalNum, prbNum, 0, prbList, signalList);
            }
            // do all time
            signalRepository.saveAll(signalList);
            prbRepository.saveAll(prbList);
            sendPrb();
            if (out == 1) {
                try {
                    Thread.sleep(3000); // same as before for database writing
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
                signalRepository.deleteAll();
                prbRepository.deleteAll();
                break;
            }
        }
    }

    public List<Prb> shiftListLeft(List<Prb> prbs, int k) {
        int j;
        Prb temp;
        for (int i = 0; i < k; i++) {
            temp = prbs.get(0);
            for (j = 1; j < prbs.size(); j++) {
                prbs.set(j - 1, prbs.get(j));
            }
            prbs.set(prbs.size() - 1, temp);
        }
        return prbs;
    }

    public int setSlot(Prb eachPrb, String xxpic) {
        if (eachPrb.getEmptyIndex() == 0) {
            eachPrb.setS00(xxpic);
        } else if (eachPrb.getEmptyIndex() == 1) {
            eachPrb.setS01(xxpic);
        } else if (eachPrb.getEmptyIndex() == 2) {
            eachPrb.setS10(xxpic);
        } else if (eachPrb.getEmptyIndex() == 3) {
            eachPrb.setS11(xxpic);
        } else if (eachPrb.getEmptyIndex() == 4) {
            eachPrb.setS20(xxpic);
        } else if (eachPrb.getEmptyIndex() == 5) {
            eachPrb.setS21(xxpic);
        } else if (eachPrb.getEmptyIndex() == 6) {
            eachPrb.setS30(xxpic);
        } else if (eachPrb.getEmptyIndex() == 7) {
            eachPrb.setS31(xxpic);
        } else if (eachPrb.getEmptyIndex() == 8) {
            eachPrb.setS40(xxpic);
        } else if (eachPrb.getEmptyIndex() == 9) {
            eachPrb.setS41(xxpic);
        } else if (eachPrb.getEmptyIndex() == 10) {
            eachPrb.setS50(xxpic);
        } else if (eachPrb.getEmptyIndex() == 11) {
            eachPrb.setS51(xxpic);
        } else if (eachPrb.getEmptyIndex() == 12) {
            eachPrb.setS60(xxpic);
        } else if (eachPrb.getEmptyIndex() == 13) {
            eachPrb.setS61(xxpic);
        } else if (eachPrb.getEmptyIndex() == 14) {
            eachPrb.setS70(xxpic);
        } else if (eachPrb.getEmptyIndex() == 15) {
            eachPrb.setS71(xxpic);
        } else if (eachPrb.getEmptyIndex() == 16) {
            eachPrb.setS80(xxpic);
        } else if (eachPrb.getEmptyIndex() == 17) {
            eachPrb.setS81(xxpic);
        } else if (eachPrb.getEmptyIndex() == 18) {
            eachPrb.setS90(xxpic);
        } else if (eachPrb.getEmptyIndex() == 19) {
            eachPrb.setS91(xxpic);
        } else {
            return 1;
        }
        eachPrb.setEmptyIndex(eachPrb.getEmptyIndex() + 1);
        return 0;
    }

    public List<Prb> sendPrb() {
        List<Prb> prbs = prbRepository.findAll();
        simpMessagingTemplate.convertAndSend("/prb", prbs);
        return prbs;
    }

    public List<Prb> shiftListRight(List<Prb> prbs, int k) {
        int j;
        Prb temp;
        for (int i = 0; i < k; i++) {
            temp = prbs.get(prbs.size() - 1);
            for (j = prbs.size() - 2; j >= 0; j--) {
                prbs.set(j + 1, prbs.get(j));
            }
            prbs.set(0, temp);
        }
        return prbs;
    }

    public void startup() {
        new Thread(this).start();
    }

    @Override
    public void run() {
        this.setCirculation(true);
        Map<Thread, StackTraceElement[]> map = getAllStackTraces();
//        if (map.size() != 0) {
//            for (Thread thread : map.keySet()) {
//                StackTraceElement[] stackTraceElements = map.get(thread);
//                System.out.println("----每个线程的基本信息");
//                System.out.println("    线程名称：" + thread.getName());
//                System.out.println("    StackTraceElement[].length=" + stackTraceElements.length);
//                System.out.println("    线程状态：" + thread.getState());
//            }
//        }
        System.out.println("Thread name: " + Thread.currentThread().getName());
        System.out.println("How Many threads are there:" + map.size());
        this.continuousTrans();
        System.out.println("Thread about to finish");
    }
}
