package com.oeco.controllers.dto.search;

import com.oeco.controllers.dto.ExistingConditionsDTO;

import java.io.Serializable;
import java.util.List;

public class SearchConditionsDTO implements Serializable {
    public Double age;
    public List<ExistingConditionsDTO> existingConditions;

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
}
