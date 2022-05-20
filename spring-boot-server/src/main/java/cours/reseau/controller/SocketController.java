package cours.reseau.controller;

import cours.reseau.model.Prb;
import cours.reseau.repository.PrbRepository;
import cours.reseau.repository.SignalRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

//@CrossOrigin(origins = "http://localhost:8081") // 不需要
@RestController
@RequiredArgsConstructor
public class SocketController {
    private final PrbRepository prbRepository;
    private final SignalRepository signalRepository;

    @MessageMapping("/message")   // 双向发送才可刷新
    @SendTo("/prb")               // 直接调用无法发送只能实现函数
    public List<Prb> receivePrb(@Payload boolean create) throws InterruptedException { // @Payload List<Prb> prbs 可加可不加，因为前端不需要给后端数据
        if (create) {
            Thread.sleep(4000); // for repository updating
        }
        return prbRepository.findAll();
    }

    @MessageMapping("/delete")   // 单向接受前端信号
    public void receivePrb() { // @Payload List<Prb> prbs 可加可不加，因为前端不需要给后端数据
        System.out.println("haahahahahahhhahahahahahhahahahahahahahhahah");
        prbRepository.deleteAll();
        signalRepository.deleteAll();
    }
}
