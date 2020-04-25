package com.oeco.controllers;

import com.oeco.controllers.dto.CaseModelDTO;
import com.oeco.controllers.dto.search.SearchConditionsDTO;
import com.oeco.controllers.repository.CaseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.Calendar;
import java.util.List;

@RestController()
@RequestMapping("/v1/api/case-controller/")
public class CaseController {
    @Autowired
    private CaseRepository caseRepository;

    @PostMapping("submitCase")
    public boolean submitCase(@RequestBody CaseModelDTO caseModelDTO) {
        caseRepository.save(caseModelDTO);
        return true;
    }

    @PostMapping("search-case")
    public List<CaseModelDTO> searchCase(@RequestBody SearchConditionsDTO searchConditionsDTO) {
        Double currentYear = Double.valueOf(Calendar.getInstance().get(Calendar.YEAR));
        Double age = currentYear - searchConditionsDTO.age;
        List<CaseModelDTO> caseModelDTOList = caseRepository.findAllByYearOfBirth(age);
        List<CaseModelDTO> retCaseModels = new ArrayList<>();

        caseModelDTOList.forEach(caseModelDTO -> searchConditionsDTO.existingConditions.forEach(existingConditionsDTO -> {
            caseModelDTO.existingConditions.forEach(existingConditionsDTOCaseModel -> {
                if (existingConditionsDTOCaseModel.icCode.equalsIgnoreCase(existingConditionsDTO.icCode)) {
                    retCaseModels.add(caseModelDTO);
                }
            });
        }));
        return retCaseModels;
    }

}
