package com.oeco.controllers.dto;

import java.io.Serializable;

public class ExistingConditionsDTO implements Serializable {
    public String icCode;
    public String name;
    public Boolean stillActive;

    public String getIcCode() {
        return icCode;
    }

    public void setIcCode(String icCode) {
        this.icCode = icCode;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Boolean getStillActive() {
        return stillActive;
    }

    public void setStillActive(Boolean stillActive) {
        this.stillActive = stillActive;
    }

    @Override
    public String toString() {
        return "ExistingConditionsDTO{" +
                "icCode='" + icCode + '\'' +
                ", name='" + name + '\'' +
                ", stillActive=" + stillActive +
                '}';
    }
}
