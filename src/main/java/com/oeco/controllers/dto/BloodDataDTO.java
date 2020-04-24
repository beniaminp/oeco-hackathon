package com.oeco.controllers.dto;

import java.io.Serializable;

public class BloodDataDTO implements Serializable {
    public String glucose;
    public String pressureSystolic;
    public String pressureDiastolic;

    public String getGlucose() {
        return glucose;
    }

    public void setGlucose(String glucose) {
        this.glucose = glucose;
    }

    public String getPressureSystolic() {
        return pressureSystolic;
    }

    public void setPressureSystolic(String pressureSystolic) {
        this.pressureSystolic = pressureSystolic;
    }

    public String getPressureDiastolic() {
        return pressureDiastolic;
    }

    public void setPressureDiastolic(String pressureDiastolic) {
        this.pressureDiastolic = pressureDiastolic;
    }

    @Override
    public String toString() {
        return "BloodDataDTO{" +
                "glucose='" + glucose + '\'' +
                ", pressureSystolic='" + pressureSystolic + '\'' +
                ", pressureDiastolic='" + pressureDiastolic + '\'' +
                '}';
    }
}
