package cours.reseau.config;

import cours.reseau.service.PrbService;
import cours.reseau.service.SignalService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import javax.annotation.PreDestroy;

@Component
@RequiredArgsConstructor
public class DestroyAction {
    private final PrbService prbService;
    private final SignalService signalService;

    @PreDestroy
    public void destroy() {
        prbService.deleteAllPrbs();
        signalService.deleteAll();
        System.out.println("所有对象已销毁");
    }
}