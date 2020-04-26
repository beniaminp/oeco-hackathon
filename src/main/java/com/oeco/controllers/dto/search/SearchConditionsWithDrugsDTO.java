package com.oeco.controllers.dto.search;

import com.oeco.controllers.dto.ExistingConditionsDTO;

import javax.validation.constraints.NotNull;
import java.io.Serializable;
import java.util.List;

public class SearchConditionsWithDrugsDTO implements Serializable {
    @NotNull
    public Double age;
    public List<ExistingConditionsDTO> existingConditions;
    public List<String> drugs;

    public Double getAge() {
        return age;
    }

    public void setAge(Double age) {
        this.age = age;
    }

    public List<ExistingConditionsDTO> getExistingConditions() {
        return existingConditions;
    }

    public void setExistingConditions(List<ExistingConditionsDTO> existingConditions) {
        this.existingConditions = existingConditions;
    }

    public List<String> getDrugs() {
        return drugs;
    }

    public void setDrugs(List<String> drugs) {
        this.drugs = drugs;
    }
}
