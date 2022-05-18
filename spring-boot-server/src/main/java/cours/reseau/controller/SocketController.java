package cours.reseau.controller;

import cours.reseau.model.Prb;
import cours.reseau.repository.PrbRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

//@CrossOrigin(origins = "http://localhost:8081") // 不需要
@RestController
@RequiredArgsConstructor
public class SocketController {
    private final PrbRepository prbRepository;

    @MessageMapping("/message")   // 双向发送才可刷新
    @SendTo("/prb")               // 直接调用无法发送只能实现函数
    public List<Prb> receivePrb() throws InterruptedException { // @Payload List<Prb> prbs 可加可不加，因为前端不需要给后端数据
//        List<Prb> prbs = prbRepository.findAll();
//        Prb prb = prbs.get(0);
//        System.out.println(prb.getPrb() + "gua gua gua gua gua");
//        prb.setS00("blackpic");
//        prbRepository.save(prb);
        Thread.sleep(1000); // for repository updating time
        return prbRepository.findAll();
    }
}
