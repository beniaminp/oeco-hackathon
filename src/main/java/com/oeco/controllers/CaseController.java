package com.oeco.controllers;

import com.oeco.controllers.dto.CaseModelDTO;
import com.oeco.controllers.repository.CaseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController()
@RequestMapping("/v1/api/case-controller/")
public class CaseController {
    @Autowired
    private CaseRepository caseRepository;

    @PostMapping("submitCase")
    public boolean submitCase(@RequestBody CaseModelDTO caseModelDTO) {
        System.err.println(caseModelDTO);
        caseRepository.save(caseModelDTO);

        caseRepository.findAll();
        return true;
    }

}
