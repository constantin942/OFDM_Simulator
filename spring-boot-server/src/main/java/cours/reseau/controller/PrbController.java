package cours.reseau.controller;

import cours.reseau.model.Prb;
import cours.reseau.service.PrbService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;

@CrossOrigin(origins = "http://localhost:8081")
@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class PrbController {
    private final PrbService prbService;

    @GetMapping("/prbData")
    public ResponseEntity<List<Prb>> getAllPrbs() {
        try {
            List<Prb> prbs = prbService.getAllPrbs();

            if (prbs.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            } else {
                return new ResponseEntity<>(prbs, HttpStatus.OK);
            }
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/prbData")
    public ResponseEntity<String> createPrb(@RequestBody HashMap<String, Integer> hashMap) {
        try {
            String message = prbService.createPrb(hashMap);
            return new ResponseEntity<>(message, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.EXPECTATION_FAILED);
        }
    }

    @PutMapping("/prbData/{id}")
    public ResponseEntity<Prb> updatePrb(@PathVariable("id") long id, @RequestBody Prb prb) {
        Prb _prb = prbService.updatePrb(id, prb);

        if (_prb != null) {
            return new ResponseEntity<>(_prb, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/prbData")
    public ResponseEntity<HttpStatus> deleteAllPrbs() {
        try {
            prbService.deleteAllPrbs();
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.EXPECTATION_FAILED);
        }
    }
}
