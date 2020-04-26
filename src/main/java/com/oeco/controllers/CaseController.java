package com.oeco.controllers;

import com.oeco.controllers.dto.CaseModelDTO;
import com.oeco.controllers.dto.RequestData;
import com.oeco.controllers.dto.RequestDataWithDrugs;
import com.oeco.controllers.dto.search.SearchConditionsDTO;
import com.oeco.controllers.dto.search.SearchConditionsWithDrugsDTO;
import com.oeco.controllers.repository.CaseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.List;

@RestController()
@RequestMapping("/v1/api/case-controller/")
public class CaseController {
    @Autowired
    private CaseRepository caseRepository;
    String treatmantsRiskUrl = "https://test.opencasestudy.eu/api/treatmants-risks/";
    String drugDoseUrl = "https://test.opencasestudy.eu/api/drug-dose/";

    @PostMapping("submitCase")
    public boolean submitCase(@RequestBody CaseModelDTO caseModelDTO) {
        caseRepository.save(caseModelDTO);
        return true;
    }

    @PostMapping("search-case")
    public String searchCase(@RequestBody SearchConditionsDTO searchConditionsDTO) throws IOException {
        Double currentYear = Double.valueOf(Calendar.getInstance().get(Calendar.YEAR));
        Double age = currentYear - searchConditionsDTO.age;

        List<CaseModelDTO> caseModelDTOList = caseRepository.findByYearOfBirthBetween(age - 3, age + 3);
        List<CaseModelDTO> retCaseModels = new ArrayList<>();
        if (searchConditionsDTO.existingConditions != null && searchConditionsDTO.existingConditions.size() > 0) {
            caseModelDTOList.forEach(caseModelDTO -> searchConditionsDTO.existingConditions.forEach(existingConditionsDTO -> {
                caseModelDTO.existingConditions.forEach(existingConditionsDTOCaseModel -> {
                    if (existingConditionsDTOCaseModel.icCode.equalsIgnoreCase(existingConditionsDTO.icCode)) {
                        retCaseModels.add(caseModelDTO);
                    }
                });
            }));
        } else {
            retCaseModels.addAll(caseModelDTOList);
        }

        RestTemplate restTemplate = new RestTemplate();
        RequestData data = new RequestData();
        data.setData(retCaseModels);
        try {
            return restTemplate.postForEntity(treatmantsRiskUrl, data, String.class).getBody();
        } catch (Exception e) {
            return null;
        }

    }

    @PostMapping("search-case-all-data")
    public List<CaseModelDTO> searchCaseAllData(@RequestBody SearchConditionsDTO searchConditionsDTO) throws IOException {
        Double currentYear = Double.valueOf(Calendar.getInstance().get(Calendar.YEAR));
        Double age = currentYear - searchConditionsDTO.age;

        List<CaseModelDTO> caseModelDTOList = caseRepository.findByYearOfBirthBetween(age - 3, age + 3);
        List<CaseModelDTO> retCaseModels = new ArrayList<>();
        if (searchConditionsDTO.existingConditions != null && searchConditionsDTO.existingConditions.size() > 0) {
            caseModelDTOList.forEach(caseModelDTO -> searchConditionsDTO.existingConditions.forEach(existingConditionsDTO -> {
                caseModelDTO.existingConditions.forEach(existingConditionsDTOCaseModel -> {
                    if (existingConditionsDTOCaseModel.icCode.equalsIgnoreCase(existingConditionsDTO.icCode)) {
                        retCaseModels.add(caseModelDTO);
                    }
                });
            }));
        } else {
            retCaseModels.addAll(caseModelDTOList);
        }

        return retCaseModels;
    }

    @PostMapping("search-case-with-drugs")
    public String searchCaseWithDrugs(@RequestBody SearchConditionsWithDrugsDTO searchConditionsWithDrugsDTO) throws IOException {
        Double currentYear = Double.valueOf(Calendar.getInstance().get(Calendar.YEAR));
        Double age = currentYear - searchConditionsWithDrugsDTO.age;

        List<CaseModelDTO> caseModelDTOList = caseRepository.findByYearOfBirthBetween(age - 3, age + 3);
        List<CaseModelDTO> retCaseModels = new ArrayList<>();
        if (searchConditionsWithDrugsDTO.existingConditions != null && searchConditionsWithDrugsDTO.existingConditions.size() > 0) {
            caseModelDTOList.forEach(caseModelDTO -> searchConditionsWithDrugsDTO.existingConditions.forEach(existingConditionsDTO -> {
                caseModelDTO.existingConditions.forEach(existingConditionsDTOCaseModel -> {
                    if (existingConditionsDTOCaseModel.icCode.equalsIgnoreCase(existingConditionsDTO.icCode)) {
                        retCaseModels.add(caseModelDTO);
                    }
                });
            }));
        } else {
            retCaseModels.addAll(caseModelDTOList);
        }

        RestTemplate restTemplate = new RestTemplate();
        RequestDataWithDrugs data = new RequestDataWithDrugs();
        data.setData(retCaseModels);
        data.setCommonDrugs(searchConditionsWithDrugsDTO.drugs);

        return restTemplate.postForEntity(drugDoseUrl, data, String.class).getBody();
    }
}
