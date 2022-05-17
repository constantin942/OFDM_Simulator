package cours.reseau.controller;

import cours.reseau.model.Signal;
import cours.reseau.service.SignalService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:8081")
@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class SignalController {
    private final SignalService signalService;

    @PostMapping("/signal")
    public ResponseEntity<Signal> createSignal(@RequestBody Signal signal) {
        try {
            Signal _signal = signalService.create(signal.getCouleur(), signal.getTaille(), signal.getPriority());
            return new ResponseEntity<>(_signal, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.EXPECTATION_FAILED);
        }
    }

    @DeleteMapping("/signal")
    public ResponseEntity<HttpStatus> deleteAllSignals() {
        try {
            signalService.deleteAll();
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.EXPECTATION_FAILED);
        }
    }
}
